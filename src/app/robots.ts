import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

// Emitted as a static file at build time — required by `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${absoluteUrl("/")}sitemap.xml`,
  };
}
