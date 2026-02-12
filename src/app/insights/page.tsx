import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "A running set of articles documenting real-world robot sentiment and our Robot Readiness audience segments.",
  alternates: { canonical: "/insights" },
  openGraph: { ...OG_DEFAULTS, title: "Insights | Robot Customers", url: "/insights" },
};

export default function InsightsPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Insights
      </h1>

      <p className="page-lead">
        A running set of articles that document real-world robot sentiment and our Robot Readiness audience segments.
      </p>

      <section className="section-card mt-12">
        <h2 className="section-title">
          Where to start
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          These articles live on RobotsGoodorBad.com and are updated as our research evolves
        </p>
        <ul className="mt-6 space-y-4">
          {siteConfig.insights.map((item) => (
            <li key={item.title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-normal text-slate-700">{item.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={`${item.title}-${tag}`}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-4 inline-flex text-sm font-medium text-slate-900"
                >
                  Open article
                  <span aria-hidden="true" className="ml-1">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="mt-4 text-sm font-medium text-slate-600">Link TBD</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-card mt-8">
        <h2 className="section-title">
          How to use these insights
        </h2>
        <p className="body-copy mt-4">
          These articles help you come into research and planning with context. Use them to draft better survey questions, run stronger interviews, and align your team on the audience segments you&apos;re trying to reach.
        </p>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
        <a
          href="https://robotsgoodorbad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Visit RobotsGoodorBad.com
        </a>
      </div>
    </div>
  );
}
