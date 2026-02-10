import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const requiredEnv = [
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
  "GMAIL_APP_PASSWORD",
  "ALLOWED_ORIGIN",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  GMAIL_APP_PASSWORD,
  ALLOWED_ORIGIN,
} = process.env;

// Support comma-separated origins
const allowedOrigins = ALLOWED_ORIGIN.split(",").map((o) => o.trim());

const PORT = Number(process.env.PORT || 8080);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 10);
const RATE_LIMIT_WINDOW_MS = Number(
  process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000
);

const app = express();
app.set("trust proxy", true);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS blocked"));
    },
    methods: ["POST", "OPTIONS", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "16kb" }));

const ipHits = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.ip || "unknown";
}

function rateLimit(req, res, next) {
  if (req.path === "/health") return next();

  const ip = getClientIp(req);
  const now = Date.now();
  const existing = ipHits.get(ip);

  if (!existing || now > existing.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    const retryAfterSeconds = Math.ceil((existing.resetAt - now) / 1000);
    res.setHeader("Retry-After", String(retryAfterSeconds));
    return res.status(429).json({ error: "Too many requests" });
  }

  existing.count += 1;
  return next();
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of ipHits.entries()) {
    if (now > entry.resetAt) ipHits.delete(ip);
  }
}, 60_000).unref();

app.use(rateLimit);

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: CONTACT_FROM_EMAIL,
    pass: GMAIL_APP_PASSWORD,
  },
});

app.post("/contact", async (req, res) => {
  const name = (req.body?.name || "").toString().trim();
  const email = (req.body?.email || "").toString().trim();
  const message = (req.body?.message || "").toString().trim();
  const company = (req.body?.company || "").toString().trim();

  // Honeypot trap: silently ignore likely bot submissions.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message || !emailRegex.test(email)) {
    return res.status(400).json({
      error: "Invalid request: name, email, and message are required",
    });
  }

  const timestamp = new Date().toISOString();
  const userAgent = req.get("user-agent") || "unknown";

  const textBody = [
    "New contact inquiry from Robot Customers form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Timestamp: ${timestamp}`,
    `User-Agent: ${userAgent}`,
    "",
    "Message:",
    message,
    "",
    `IP: ${getClientIp(req)}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Robot Customers inquiry: ${name}`,
      text: textBody,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Email send failed", error);
    return res.status(500).json({ error: "Unable to send message" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact service listening on port ${PORT}`);
});
