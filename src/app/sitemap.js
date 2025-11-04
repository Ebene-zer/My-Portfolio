export default function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined);

  const base = siteUrl || "";
  const now = new Date();

  // List top-level routes (anchors like #projects are not included in sitemaps)
  const entries = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/resume`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return entries;
}
