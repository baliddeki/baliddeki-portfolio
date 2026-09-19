import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";
import { navigation } from "@/content/navigation";

// Emitted as a static file at build time — required by `output: "export"`.
export const dynamic = "force-static";

/**
 * Derived from the navigation array rather than written out by hand, so a new
 * route cannot be shipped and then silently left out of the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navigation.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
