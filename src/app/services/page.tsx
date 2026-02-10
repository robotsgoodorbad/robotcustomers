import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Robot Customers",
  description:
    "Customer research services for robotics companies, combining quantitative data, qualitative interviews, and actionable reporting.",
};

export default function ServicesPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Services
      </h1>

      <p className="page-lead">
        At Robot Customers, LLC, we combine deep customer research with content
        strategy to help robotics companies understand the humans using their
        machines. Our services bridge promotion and insight, giving you
        actionable data while building trust with your audience.
      </p>

      <section className="mt-12 space-y-6">
        <article className="section-card">
          <h2 className="section-title">
            Customer Research Articles
          </h2>
          <p className="mt-4 body-copy">
            We create tailored articles for your business or for our
            public-facing site, RobotsGoodOrBad.com, that do more than just
            promote your products. Each piece is crafted to educate and engage
            readers while seamlessly integrating polls, surveys, and quizzes.
            These interactive elements capture valuable quantitative data about
            your potential customers-their needs, fears, and motivations. This
            turns
            every article into a research tool.
          </p>
        </article>

        <article className="section-card">
          <h2 className="section-title">
            One-on-One Customer Interviews
          </h2>
          <p className="mt-4 body-copy">
            With over 25 years of experience in user research and customer
            interviewing, we specialize in gathering qualitative insights that
            go beyond numbers. Through in-depth conversations, we uncover the
            &quot;why&quot; behind consumer behavior-what makes people adopt, trust, or
            hesitate when it comes to robots in their homes and daily lives.
          </p>
        </article>

        <article className="section-card">
          <h2 className="section-title">
            Data Analysis &amp; Reporting
          </h2>
          <p className="mt-4 body-copy">
            All interviews are transcribed, analyzed, and distilled into key
            data points, quotes, and themes. We combine these qualitative
            insights with the quantitative results from your polls and quizzes
            to create comprehensive reports. Our deliverables include data
            visualizations, user personas, and clear recommendations to guide
            product design, marketing, and customer adoption.
          </p>
        </article>

        <article className="section-card">
          <h2 className="section-title">
            Interactive Content for Insights
          </h2>
          <p className="mt-4 body-copy">
            Every service we offer is designed to work together: content drives
            engagement, polls capture data, interviews deepen understanding, and
            reports turn it all into actionable insight. Whether you need a
            single campaign or an ongoing research program, we tailor the
            approach to your goals.
          </p>
        </article>
      </section>

      <div className="mt-10">
        <Link href="/contact" className="btn-primary">
          Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}
