/**
 * Shared Open Graph defaults.
 *
 * Next.js App Router **replaces** a parent's `openGraph` entirely when a child
 * page exports its own `openGraph` object (shallow replace, not deep merge).
 * Spread this constant into every per-page `openGraph` to retain the shared
 * image, type, locale, and siteName values.
 */
export const OG_DEFAULTS = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Robot Customers",
  images: [
    {
      url: "/og-robotcustomers.png",
      width: 1200,
      height: 630,
      alt: "Robot Customers — Customer insight for consumer robotics",
    },
  ],
};
