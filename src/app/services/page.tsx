import type { Metadata } from "next";
import Link from "next/link";
import { Radio, ClipboardList, MessageSquare, FileBarChart } from "lucide-react";

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
        Robot Customers helps teams understand how people talk about robots in everyday language — and what that means for product decisions, messaging, and adoption. We combine web-scale listening across online conversations with structured research (polls, surveys, quizzes) and one-on-one interviews, then bring it together in reporting that&apos;s meant to be usable, not academic.
      </p>

      <section className="mt-12 space-y-6">
        <article className="section-card">
          <div className="flex items-start gap-4">
            <Radio className="mt-1 h-7 w-7 shrink-0 text-cyan-600" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="section-title">
                Online conversations
              </h2>
              <p className="mt-4 body-copy">
                We listen at scale across forums, social media, and public discussions where people talk candidly about robots—what excites them, what worries them, and what language they actually use. This gives you the pulse of everyday sentiment and recurring themes before you spend a dollar on formal research.
              </p>
            </div>
          </div>
        </article>

        <article className="section-card">
          <div className="flex items-start gap-4">
            <ClipboardList className="mt-1 h-7 w-7 shrink-0 text-cyan-600" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="section-title">
                Polls, surveys, and quizzes
              </h2>
              <p className="mt-4 body-copy">
                We design and deploy structured questions that capture quantitative data on specific topics—from feature preferences to adoption barriers. These tools turn casual engagement into measurable insights you can chart, compare, and act on.
              </p>
            </div>
          </div>
        </article>

        <article className="section-card">
          <div className="flex items-start gap-4">
            <MessageSquare className="mt-1 h-7 w-7 shrink-0 text-cyan-600" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="section-title">
                One-on-one interviews
              </h2>
              <p className="mt-4 body-copy">
                With over 25 years of experience in user research, we conduct in-depth conversations that uncover the &quot;why&quot; behind the numbers. You get direct quotes, unexpected motivations, and a richer understanding of the people who will (or won&apos;t) adopt your technology.
              </p>
            </div>
          </div>
        </article>

        <article className="section-card">
          <div className="flex items-start gap-4">
            <FileBarChart className="mt-1 h-7 w-7 shrink-0 text-cyan-600" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="section-title">
                Analysis and reporting
              </h2>
              <p className="mt-4 body-copy">
                We synthesize everything—online signals, survey data, interview transcripts—into reports that are clear, visual, and built for decision-making. You get themes, quotes, charts, and recommendations you can put to work immediately.
              </p>
            </div>
          </div>
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
