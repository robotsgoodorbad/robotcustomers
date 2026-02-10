"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="hidden items-center justify-center gap-10 md:flex">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[15px] font-medium text-slate-700 transition-colors duration-200 ease-out hover:text-slate-900 ${
              isActive ? "border-b-2 border-slate-900" : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
