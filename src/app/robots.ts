import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.neurasynk.com/sitemap.xml",
  };
};

export default robots;
