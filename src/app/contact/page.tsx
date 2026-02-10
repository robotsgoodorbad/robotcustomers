import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Robot Customers",
  description:
    "Contact Robot Customers to discuss customer research for robotics products and programs.",
};

export default function ContactPage() {
  const hasContactEmail = siteConfig.contactEmail.length > 0;

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

          <form className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="field-label"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="field-label"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="field-label"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="field-input"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="field-label"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="field-input"
              />
            </div>
            <button type="button" className="btn-primary">
              Submit Message (backend coming soon)
            </button>
          </form>
        </section>

        <aside className="section-card">
          <h2 className="text-xl font-semibold text-slate-900">
            Mailto fallback
          </h2>
          {hasContactEmail ? (
            <>
              <p className="mt-3 text-slate-700">
                If the form is unavailable, use your email app directly.
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="btn-secondary mt-5"
              >
                Email Us
              </a>
            </>
          ) : (
            <p className="mt-3 text-slate-700">
              Direct email contact will be published here once finalized.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
