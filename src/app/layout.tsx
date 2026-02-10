import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
          <header className="border-b border-slate-200 bg-white">
            <div className="site-container py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wide text-slate-800">
                  ROBOT CUSTOMERS
                </p>
                <nav className="hidden items-center gap-8 md:flex">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                  <Link href="/services" className="nav-link">
                    Services
                  </Link>
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                  <Link href="/methods" className="nav-link">
                    Methods
                  </Link>
                  <Link href="/insights" className="nav-link">
                    Insights
                  </Link>
                </nav>
                <Link href="/contact" className="btn-primary px-4 py-2">
                  Contact Us
                </Link>
              </div>
              <nav className="mt-3 flex flex-wrap gap-5 md:hidden">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/services" className="nav-link">
                  Services
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/methods" className="nav-link">
                  Methods
                </Link>
                <Link href="/insights" className="nav-link">
                  Insights
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="site-container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-600">Robot Customers</p>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/" className="footer-link">
                  Home
                </Link>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
                <Link href="/about" className="footer-link">
                  About
                </Link>
                <Link href="/methods" className="footer-link">
                  Methods
                </Link>
                <Link href="/insights" className="footer-link">
                  Insights
                </Link>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
                <Link href="/privacy" className="footer-link">
                  Privacy
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
