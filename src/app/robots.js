import { headers } from "next/headers";

export default function robots() {
  // Prefer the configured site URL; fall back to current host if available; else omit sitemap
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let base = envUrl;
  if (!base) {
    try {
      const h = headers();
      const host = h.get("host");
      const proto = h.get("x-forwarded-proto") || "https";
      if (host) base = `${proto}://${host}`;
    } catch {}
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
