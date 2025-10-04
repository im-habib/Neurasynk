// ---------------------------------
// FILE: /lib/seo.ts
// ---------------------------------
import type { Metadata } from "next";

export type BaseSEO = {
  title: string;
  description: string;
  url: string; // absolute URL
  image?: string; // absolute OG image URL
  type?: "website" | "article" | "profile";
  publishedTime?: string; // ISO
  modifiedTime?: string; // ISO
  tags?: string[];
  locale?: string; // e.g., en_US
  canonical?: string; // absolute URL
};

export const buildMetadata = (seo: BaseSEO): Metadata => ({
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical ?? seo.url },
  openGraph: {
    url: seo.url,
    title: seo.title,
    type: seo.type ?? "website",
    description: seo.description,
    locale: seo.locale ?? "en_US",
    images: seo.image ? [{ url: seo.image }] : undefined,
  },
  twitter: {
    title: seo.title,
    card: "summary_large_image",
    description: seo.description,
    images: seo.image ? [seo.image] : undefined,
  },
  metadataBase: new URL(seo.url.split("/").slice(0, 3).join("/")),
});

export const orgJsonLd = (options: {
  url: string;
  name: string;
  logo?: string;
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: options.name,
  url: options.url,
  logo: options.logo,
  sameAs: options.sameAs ?? [],
});

export const articleJsonLd = (options: {
  headline: string;
  description: string;
  url: string;
  image?: string[];
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: options.headline,
  description: options.description,
  url: options.url,
  image: options.image ?? [],
  datePublished: options.datePublished,
  dateModified: options.dateModified,
  author: options.authorName
    ? { "@type": "Person", name: options.authorName }
    : undefined,
  publisher: {
    "@type": "Organization",
    name: "Neurasynk",
  },
});
