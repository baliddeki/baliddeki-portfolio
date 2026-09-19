import type { NextConfig } from "next";

import { normaliseBasePath } from "./src/lib/base-path";

/**
 * The site is exported as static files and served by GitHub Pages, so there is
 * no Node process in production — every route below is HTML on disk.
 *
 * `NEXT_PUBLIC_BASE_PATH` is supplied by the deploy workflow from the Pages
 * configuration, which keeps the same source tree working on a project page,
 * a user page or a custom domain without an edit.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: normaliseBasePath(process.env.NEXT_PUBLIC_BASE_PATH),
  // Emits `/about/index.html` rather than `/about.html`, which is the shape
  // GitHub Pages resolves cleanly for a URL without an extension.
  trailingSlash: true,
  reactStrictMode: true,
  // No image optimiser exists on static hosting, so images are served as authored.
  images: { unoptimized: true },
  // Inlines the (small) stylesheet into each document, removing a
  // render-blocking request on first paint.
  experimental: { inlineCss: true },
};

export default nextConfig;
