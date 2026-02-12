import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, MessageCircle, Users } from "lucide-react";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Robot Customers | Customer insight for consumer robotics",
  description:
    "We combine online conversation analysis, surveys, and 1-on-1 interviews to help robotics teams understand how people feel about robots — and why.",
  alternates: { canonical: "/" },
  openGraph: { ...OG_DEFAULTS, title: "Robot Customers | Customer insight for consumer robotics", url: "/" },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Robot Customers",
  url: "https://robotcustomers.com",
};

export default function Home() {
  return (
    <div className="site-container page-shell relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      {/* HERO: 2-col on desktop, stacked on mobile */}
      <section className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* LEFT: text + CTAs */}
        <div className="space-y-6">
          <h1 className="page-title">
            Customer insight for consumer robotics
          </h1>
          <p className="max-w-xl text-lg leading-normal text-slate-700">
            We combine conversation analysis, surveys, and interviews to help
            robotics teams understand how people feel about robots, and why.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              What We Do
            </Link>
            <Link href="/insights" className="btn-secondary">
              Insights
            </Link>
          </div>
        </div>

        {/* RIGHT: hero image card */}
        <div className="photo-frame">
          <Image
            src="/images/home-hero.png"
            alt="People looking at humanoid robots on display in a robot store."
            width={1024}
            height={682}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-xl border border-slate-200 bg-white p-8 md:p-10">
        <h2 className="section-title">
          How We Help Robotics Teams
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="section-card p-6">
            <BarChart3 className="mb-3 h-7 w-7 text-cyan-600" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-slate-900">
              Quantitative Data
            </h3>
            <p className="mt-3 body-copy">
              We gather structured data every day through polls, surveys, and
              quizzes, asking targeted questions that give robotics companies
              measurable answers about their market.
            </p>
          </article>
          <article className="section-card p-6">
            <MessageCircle className="mb-3 h-7 w-7 text-cyan-600" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-slate-900">
              Qualitative Insights
            </h3>
            <p className="mt-3 body-copy">
              Through one-on-one interviews, we uncover the &quot;why&quot; behind
              customer attitudes, so you can see how people think, feel, and
              plan to act when it comes to robots.
            </p>
          </article>
          <article className="section-card p-6">
            <Users className="mb-3 h-7 w-7 text-cyan-600" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-slate-900">
              Community Building
            </h3>
            <p className="mt-3 body-copy">
              We don&apos;t just collect data. We cultivate conversations. Through{" "}
              <a
                href="https://robotsgoodorbad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                RobotsGoodorBad.com
              </a>{" "}
              and social channels, we keep the dialogue going so you can track
              evolving customer sentiment and trends.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/services" className="btn-primary">
            See All Services
          </Link>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="section-card md:p-10">
          <h2 className="section-title">
            The world is changing fast. We track how people are responding.
          </h2>
          <p className="mt-4 body-copy">
            As robots enter public spaces, workplaces, and homes, customer
            sentiment is becoming a product constraint. We map expectations,
            trust barriers, and purchase intent, so you can make smarter
            decisions before you scale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="btn-primary">
              About Us
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
        <div className="photo-frame-fill">
          <div className="min-h-[280px] md:min-h-[360px]">
            <Image
              src="/images/home-front-row.png"
              alt="People seated along a city street watching humanoid robots walk by."
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
