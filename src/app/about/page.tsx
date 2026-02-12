import type { Metadata } from "next";
import Link from "next/link";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About",
  description:
    "We study how people think and feel about robots as they move from demos to daily life — and what it takes to earn trust in the real world.",
  alternates: { canonical: "/about" },
  openGraph: { ...OG_DEFAULTS, title: "About | Robot Customers", url: "/about" },
};

export default function AboutPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        About
      </h1>

      <div className="mt-8 max-w-4xl space-y-6 text-lg leading-normal text-slate-700">
        <p>
          We started Robot Customers because we want to be part of what comes next. Robots, not just humanoids, are going to be everywhere. Not someday in an abstract way, but in ordinary, everyday ways: passing us on sidewalks, working in stores and warehouses, showing up at our jobs, and eventually sharing space in our homes.
        </p>
        <p>
          What&apos;s striking is how many people have not fully realized how much this will change daily life. The shift will not feel like a single future moment. It will happen in small steps until one day it is normal to see machines moving through the world alongside us. Some people will be excited. Others will be uneasy, skeptical, or genuinely afraid. Most will probably feel a mix of all of it, sometimes in the same week.
        </p>
        <p>
          To us, this is one of the biggest stories of our lives, and we do not plan to watch it from the sidelines. We are not interested in cheerleading, either. If robots are going to become part of everyday environments, then the human side matters just as much as the technical side: trust, privacy, safety, dignity, and whether people feel in control.
        </p>
        <p>
          Robot Customers is our way of staying close to the real-world truth of that transition. We listen to what people actually say about robots in public conversations and in direct research, and we take those reactions seriously. The hope is simple. If we pay attention to how people feel, we can help teams build and introduce robots in ways that earn trust, respect boundaries, and make life better for more than just early adopters.
        </p>
        <p>
          A future where robots work for all of us is not automatic. It has to be designed for, with honest feedback, clear guardrails, and a willingness to adjust when something does not sit right. That is the kind of future we want to help shape: one where people can feel safe, and maybe even grateful, as the technology improves.
        </p>
      </div>

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
