import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Robot Customers. Tell us what you're building and what you'd like to learn about your audience.",
  alternates: { canonical: "/contact" },
  openGraph: { ...OG_DEFAULTS, title: "Contact | Robot Customers", url: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Contact
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-normal text-slate-700">
        Tell us what you are building and what customer questions you need to
        answer. We will follow up with next steps.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        <section className="section-card">
          <h2 className="text-xl font-semibold text-slate-900">
            Send a message
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Use the form below and we will follow up directly.
          </p>

          <ContactForm />
        </section>

        <aside className="section-card">
          <h2 className="text-xl font-semibold text-slate-900">
            Prefer email?
          </h2>
          <p className="mt-3 text-slate-700">
            You can also reach us directly.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="btn-secondary mt-5"
          >
            Email Us
          </a>
        </aside>
      </div>
    </div>
  );
}
