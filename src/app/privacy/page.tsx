import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Robot Customers",
  description:
    "Privacy Policy for Robot Customers LLC — what information we collect, how we use it, and your choices.",
};

export default function PrivacyPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">Privacy Policy</h1>

      <p className="mt-4 text-sm text-slate-500">Last updated: February 10, 2026</p>

      <div className="mt-8 max-w-4xl space-y-8 text-lg leading-normal text-slate-700">
        <p>
          Robot Customers LLC (&quot;Robot Customers,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website robotcustomers.com (the &quot;Site&quot;). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            1) Information we collect
          </h2>

          <h3 className="mt-4 font-semibold text-slate-900">
            Information you provide
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Contact form submissions:</strong> If you contact us, we may collect your name, email address, company (if provided), and the message you send.
            </li>
          </ul>

          <h3 className="mt-6 font-semibold text-slate-900">
            Information collected automatically
          </h3>
          <p className="mt-2">
            When you visit the Site, we may automatically collect limited technical information such as:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>IP address (or an approximate location derived from it)</li>
            <li>Device and browser type</li>
            <li>Pages viewed and time spent on the Site</li>
            <li>Referring/exit pages</li>
          </ul>
          <p className="mt-2">
            This information is typically collected through standard server logs and, if enabled, analytics tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2) How we use information
          </h2>
          <p className="mt-4">We use information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Respond to inquiries and communicate with you</li>
            <li>Operate, maintain, and improve the Site</li>
            <li>Monitor for security issues, spam, and abuse</li>
            <li>Understand general Site usage (e.g., which pages are most helpful)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            3) Cookies and analytics
          </h2>
          <p className="mt-4">
            We may use cookies or similar technologies to help the Site function and to understand how visitors use the Site.
          </p>
          <p className="mt-2">
            If we use analytics (such as Google Analytics), those providers may set their own cookies and collect usage information. You can control cookies through your browser settings and, where available, opt out of certain analytics tracking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4) Sharing of information
          </h2>
          <p className="mt-4">We do not sell your personal information.</p>
          <p className="mt-2">We may share information in limited circumstances:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Service providers:</strong> We may use vendors to help run the Site (e.g., hosting, email delivery, analytics). They only receive information needed to perform their services and are expected to protect it.
            </li>
            <li>
              <strong>Legal and safety:</strong> We may disclose information if required by law or if necessary to protect rights, safety, and security.
            </li>
            <li>
              <strong>Business changes:</strong> If we undergo a merger, acquisition, or asset sale, information may be transferred as part of that transaction.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5) Data retention
          </h2>
          <p className="mt-4">
            We keep contact form messages for as long as needed to respond and maintain our business records, unless a longer retention period is required by law or we choose to delete it sooner.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6) Security
          </h2>
          <p className="mt-4">
            We use reasonable safeguards designed to protect information submitted through the Site. However, no method of transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            7) Your choices
          </h2>
          <p className="mt-4">You can:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Request access, correction, or deletion of your personal information by contacting us (see &quot;Contact us&quot; below).
            </li>
            <li>
              Control cookies via your browser settings and other opt-out tools provided by analytics vendors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            8) International visitors
          </h2>
          <p className="mt-4">
            If you visit from outside the United States, your information may be processed in the United States or other locations where our service providers operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            9) Children&apos;s privacy
          </h2>
          <p className="mt-4">
            The Site is not intended for children under 13, and we do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            10) Changes to this policy
          </h2>
          <p className="mt-4">
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date reflects the most recent revision. Continued use of the Site after changes means you accept the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            11) Contact us
          </h2>
          <p className="mt-4">
            If you have questions about this Privacy Policy or want to make a request, contact us at:
          </p>
          <p className="mt-4 font-medium text-slate-900">
            Robot Customers LLC
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@robotsgoodorbad.com"
              className="inline-link"
            >
              info@robotsgoodorbad.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
