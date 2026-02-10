import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Robot Customers",
  description:
    "Robot Customers helps companies understand how people think, feel, and plan to engage with consumer robots.",
};

export default function AboutPage() {
  return (
    <div className="site-container page-shell">
      <h1 className="page-title">
        About
      </h1>

      <div className="mt-8 max-w-4xl space-y-6 text-lg leading-normal text-slate-700">
        <p>
          At Robot Customers LLC, we work with companies building, selling, and
          marketing consumer robots to help them truly understand their
          customers - whether they&apos;re enthusiastic about robots, unsure and on
          the fence, or even afraid and firmly against them.
        </p>
        <p>
          We do this through surveys, polls, and in-depth interviews that
          capture both numbers and stories. Our research shows how people think
          about robots, how they feel about using them, and how they plan to
          engage with them in everyday life.
        </p>
        <p>
          By listening to customers in this way, we give manufacturers, dealers,
          and related businesses the clarity they need to build better products
          and deliver experiences that people actually want.
        </p>
        <p>
          Visit our community website at{" "}
          <a
            href="https://robotsgoodorbad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            RobotsGoodOrBad.com
          </a>{" "}
          or feel free to contact us.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
