import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights | Robot Customers",
  description:
    "Curated link-outs to RobotsGoodOrBad.com for ongoing customer insight in robotics.",
};

export default function InsightsPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        Insights
      </h1>

      <p className="page-lead">
        This page curates public-facing content from RobotsGoodOrBad.com so
        teams can follow customer conversations about robots over time.
      </p>

      <section className="section-card mt-12">
        <h2 className="section-title">
          Curated reading list
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Insights live on RobotsGoodOrBad.com.
        </p>
        <ul className="mt-6 space-y-4">
          {siteConfig.insights.map((item) => (
            <li key={item.title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.summary}</p>
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
          Use these readings to inform product positioning, customer messaging,
          and interview planning. Pair article takeaways with your own survey
          and interview findings before making product or go-to-market
          decisions.
        </p>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://robotsgoodorbad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View RobotsGoodOrBad.com
        </a>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
