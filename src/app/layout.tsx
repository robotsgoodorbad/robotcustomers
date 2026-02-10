import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "@/components/header-nav";
import { MobileNav } from "@/components/mobile-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Customers | Customer Research for Robotics",
  description:
    "Robot Customers helps robotics teams make better product and go-to-market decisions with quantitative and qualitative customer research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 md:py-0 md:h-32">
              <div className="flex h-full items-center justify-between md:grid md:grid-cols-[auto_1fr_auto]">
                {/* LEFT: logo only */}
                <Link
                  href="/"
                  className="inline-flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80"
                  aria-label="Robot Customers home"
                >
                  <Image
                    src="/brand/logo.png"
                    alt="Robot Customers logo"
                    width={200}
                    height={320}
                    className="h-20 w-auto object-contain md:h-28"
                    priority
                  />
                </Link>

                {/* CENTER: nav links (desktop only) */}
                <HeaderNav />

                {/* RIGHT: CTA button (desktop only) */}
                <Link
                  href="/contact"
                  className="btn-primary hidden px-4 py-2 text-sm md:inline-flex"
                >
                  Contact Us
                </Link>

                {/* RIGHT: Menu toggle (mobile only) */}
                <MobileNav />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="site-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
              {/* Logo - order-1 mobile, wrapped in flex-col on desktop */}
              <div className="order-1 flex flex-col gap-2">
                <Link
                  href="/"
                  className="transition-opacity duration-200 hover:opacity-85"
                  aria-label="Robot Customers home"
                >
                  <Image
                    src="/brand/logo.png"
                    alt="Robot Customers logo"
                    width={200}
                    height={320}
                    className="h-20 w-auto object-contain md:h-28"
                  />
                </Link>
                {/* Copyright - hidden on mobile, shown on desktop below logo */}
                <p className="hidden text-xs text-slate-500 md:block">
                  Robot Customers LLC &copy; 2026
                </p>
              </div>

              {/* Nav links - order-2 mobile, order-2 desktop */}
              <nav className="order-2 -ml-4 flex flex-wrap items-center justify-start gap-0 md:ml-0">
                <Link href="/" className="footer-link px-4 py-1">
                  Home
                </Link>
                <span className="h-4 w-px bg-slate-300" aria-hidden="true"></span>
                <Link href="/services" className="footer-link px-4 py-1">
                  Services
                </Link>
                <span className="h-4 w-px bg-slate-300" aria-hidden="true"></span>
                <Link href="/about" className="footer-link px-4 py-1">
                  About
                </Link>
                <span className="h-4 w-px bg-slate-300" aria-hidden="true"></span>
                <Link href="/insights" className="footer-link px-4 py-1">
                  Insights
                </Link>
                <span className="h-4 w-px bg-slate-300" aria-hidden="true"></span>
                <Link href="/contact" className="footer-link px-4 py-1">
                  Contact
                </Link>
                <span className="h-4 w-px bg-slate-300" aria-hidden="true"></span>
                <Link href="/privacy" className="footer-link px-4 py-1">
                  Privacy
                </Link>
              </nav>

              {/* Copyright - order-3 mobile (bottom), hidden on desktop */}
              <p className="order-3 text-xs text-slate-500 md:hidden">
                Robot Customers LLC &copy; 2026
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
