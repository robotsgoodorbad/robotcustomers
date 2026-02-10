"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <details className="relative md:hidden">
      <summary className="flex cursor-pointer items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-100">
        <span className="mr-1.5 text-base leading-none">≡</span>
        Menu
      </summary>
      <nav className="absolute right-0 top-full z-50 mt-2 grid w-48 gap-0.5 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const isContact = link.href === "/contact";
          
          if (isContact) {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="btn-primary mt-1 justify-center px-3 py-2 text-sm"
              >
                {link.label}
              </Link>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 ${
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
