import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Robot Customers",
  description:
    "Privacy information for Robot Customers. Full policy details will be added.",
};

export default function PrivacyPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Privacy
      </h1>

      <section className="section-card mt-8">
        <p className="body-copy">
          A full privacy policy will be published here. This page will cover
          what data is collected, how it is used, and how to request updates or
          removal.
        </p>
        <ul className="body-copy mt-6 list-disc space-y-2 pl-6">
          <li>Policy URL: this page (`/privacy`).</li>
          <li>Detailed policy sections: to be finalized before expanded data collection.</li>
        </ul>
      </section>
    </div>
  );
}
