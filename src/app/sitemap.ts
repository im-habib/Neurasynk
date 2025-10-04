// ---------------------------------
// FILE: /app/sitemap.ts
// ---------------------------------
import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const base = "https://www.neurasynk.com";
  const now = new Date().toISOString();
  const staticRoutes = ["", "/projects", "/publications"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  // TODO: push dynamic items from a data source
  return [...staticRoutes];
};

export default sitemap;
