import type { Metadata } from "next";

import { absoluteUrl, ogImage, siteConfig } from "@/lib/site";
import { profile } from "@/content/profile";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Route this page is served from, e.g. "/about". */
  path: string;
}

/**
 * Builds the per-page metadata, so every route gets a correct canonical URL
 * and matching Open Graph tags without repeating the boilerplate four times.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} — ${profile.name}`,
      description,
      url: canonical,
      siteName: profile.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ ...ogImage, alt: `${profile.name} — ${profile.role}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${profile.name}`,
      description,
      images: [ogImage.url],
    },
  };
}
