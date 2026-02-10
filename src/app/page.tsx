import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/site-image";

export const metadata: Metadata = {
  title: "Home | Robot Customers",
  description:
    "We help robotics companies understand customer attitudes through research grounded in surveys, interviews, and ongoing community conversation.",
};

export default function Home() {
  return (
    <div className="site-container page-shell">
      <section className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <h1 className="page-title max-w-3xl">
            We Know Robot Customers
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            Because we talk to people every day about robots-and as it turns
            out, we&apos;re very good listeners.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
          </div>
        </div>

        <aside className="section-card p-6">
          <SiteImage
            aspectClassName="aspect-[4/3]"
            label="Image coming soon"
          />
        </aside>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-white p-8 md:p-10">
        <h2 className="section-title">
          Here&apos;s What We Can Do For You
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="section-card p-6">
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
            <h3 className="text-lg font-semibold text-slate-900">
              Qualitative Insights
            </h3>
            <p className="mt-3 body-copy">
              Through one-on-one interviews, we uncover the &quot;why&quot; behind
              customer attitudes-so you can see how people think, feel, and plan
              to act when it comes to robots.
            </p>
          </article>
          <article className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Community Building
            </h3>
            <p className="mt-3 body-copy">
              We don&apos;t just collect data-we cultivate conversations. Through
              RobotsGoodOrBad.com and social channels, we keep the dialogue
              going so you can track evolving customer sentiment and trends.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/services" className="btn-primary">
            Our Services
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="section-card md:p-10">
          <h2 className="section-title">
            The World Is Changing Fast And We&apos;ve Got Front Row Seats
          </h2>
          <p className="mt-4 body-copy">
            By all accounts our society is going through a major paradigm shift.
            In our lifetimes we have gone from science fiction to reality. How
            are we all going to cope when we&apos;re surrounded by robots at home
            and in the streets? Let&apos;s find out together-and don&apos;t worry,
            we&apos;ll take notes.
          </p>
          <div className="mt-8">
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
          </div>
        </div>
        <aside className="section-card p-6">
          <SiteImage
            aspectClassName="aspect-[4/3]"
            label="Image coming soon"
          />
        </aside>
      </section>
    </div>
  );
}
