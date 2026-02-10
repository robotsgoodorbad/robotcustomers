import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robot Customers | Customer Research for Robotics",
  description:
    "Robot Customers helps robotics teams make better product and go-to-market decisions with quantitative and qualitative customer research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 md:py-0 md:h-32">
              <div className="flex h-full items-center justify-between md:grid md:grid-cols-[auto_1fr_auto]">
                {/* LEFT: logo only */}
                <Link
                  href="/"
                  className="inline-flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80"
                  aria-label="Robot Customers home"
                >
                  <Image
                    src="/brand/logo.png"
                    alt="Robot Customers logo"
                    width={200}
                    height={320}
                    className="h-20 w-auto object-contain md:h-28"
                    priority
                  />
                </Link>

                {/* CENTER: nav links (desktop only) */}
                <nav className="hidden items-center justify-center gap-8 md:flex">
                  <Link href="/services" className="nav-link">
                    Services
                  </Link>
                  <Link href="/methods" className="nav-link">
                    Methods
                  </Link>
                  <Link href="/insights" className="nav-link">
                    Insights
                  </Link>
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                </nav>

                {/* RIGHT: CTA button (desktop only) */}
                <Link
                  href="/contact"
                  className="btn-primary hidden px-4 py-2 text-sm md:inline-flex"
                >
                  Contact Us
                </Link>

                {/* RIGHT: Menu toggle (mobile only) */}
                <details className="relative md:hidden">
                  <summary className="flex cursor-pointer items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-100">
                    <span className="mr-1.5 text-base leading-none">≡</span>
                    Menu
                  </summary>
                  <nav className="absolute right-0 top-full z-50 mt-2 grid w-48 gap-1 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
                    <Link href="/services" className="nav-link rounded-md px-3 py-2 hover:bg-slate-50">
                      Services
                    </Link>
                    <Link href="/methods" className="nav-link rounded-md px-3 py-2 hover:bg-slate-50">
                      Methods
                    </Link>
                    <Link href="/insights" className="nav-link rounded-md px-3 py-2 hover:bg-slate-50">
                      Insights
                    </Link>
                    <Link href="/about" className="nav-link rounded-md px-3 py-2 hover:bg-slate-50">
                      About
                    </Link>
                    <Link href="/contact" className="btn-primary mt-1 justify-center px-3 py-2 text-sm">
                      Contact Us
                    </Link>
                  </nav>
                </details>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="site-container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-slate-600 transition-opacity duration-200 hover:opacity-85"
                aria-label="Robot Customers home"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Robot Customers logo"
                  width={24}
                  height={24}
                  className="h-7 w-auto object-contain"
                />
                <span>Robot Customers</span>
              </Link>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/" className="footer-link">
                  Home
                </Link>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
                <Link href="/about" className="footer-link">
                  About
                </Link>
                <Link href="/methods" className="footer-link">
                  Methods
                </Link>
                <Link href="/insights" className="footer-link">
                  Insights
                </Link>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
                <Link href="/privacy" className="footer-link">
                  Privacy
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
