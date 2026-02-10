import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methods & Deliverables | Robot Customers",
  description:
    "How Robot Customers combines content, polls, surveys, interviews, and analysis into clear research deliverables.",
};

export default function MethodsPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Methods &amp; Deliverables
      </h1>

      <p className="page-lead">
        Our method combines structured data and one-on-one interviews so you can
        understand both what people say and why they say it.
      </p>

      <section className="section-card mt-12">
        <h2 className="section-title">Method steps</h2>
        <ol className="body-copy mt-5 list-decimal space-y-3 pl-6">
          <li>Create customer research content to drive engagement.</li>
          <li>Gather quantitative data through polls, surveys, and quizzes.</li>
          <li>Run one-on-one interviews for qualitative insight.</li>
          <li>Transcribe and analyze interviews to identify key themes.</li>
          <li>
            Combine quantitative and qualitative findings into a final report.
          </li>
        </ol>
      </section>

      <section className="section-card mt-8">
        <h2 className="section-title">Deliverables</h2>
        <ul className="body-copy mt-5 list-disc space-y-3 pl-6">
          <li>Key data points and summary findings</li>
          <li>Selected participant quotes and themes</li>
          <li>Data visualizations</li>
          <li>User personas</li>
          <li>Clear recommendations for product, marketing, and adoption</li>
        </ul>
      </section>

      <section className="section-card mt-8">
        <h2 className="section-title">Scope options</h2>
        <p className="body-copy mt-4">
          Whether you need a single campaign or an ongoing research program, we
          tailor the approach to your goals.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
