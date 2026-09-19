import { normaliseBasePath } from "@/lib/base-path";
import { profile } from "@/content/profile";

/**
 * Deployment-level configuration.
 *
 * Both values are read from the environment at build time so the same source
 * tree can be published to a project page (`/baliddeki-portfolio`), a user
 * page, or a custom domain without a code change.
 */
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://baliddeki.github.io"
).replace(/\/$/, "");

const basePath = normaliseBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const siteConfig = {
  origin,
  basePath,
  /** The canonical root of the deployed site, with no trailing slash. */
  url: `${origin}${basePath}`,
  title: `${profile.name} — ${profile.role}`,
  description: profile.lead,
  locale: "en_UG",
} as const;

/**
 * The social card.
 *
 * Next renders it from `app/opengraph-image.tsx` to an extensionless path;
 * `scripts/finalize-export.mjs` copies that to a .png so GitHub Pages serves
 * it with an image content type. The absolute URL is spelled out rather than
 * left relative, because a root-relative path would resolve against the
 * origin and drop the base path on a project page.
 */
export const ogImage = {
  url: `${siteConfig.url}/opengraph-image.png`,
  width: 1200,
  height: 630,
  type: "image/png",
} as const;

/**
 * Resolves a route to its canonical absolute URL.
 *
 * `trailingSlash` is enabled in the Next config, so the emitted static files
 * live at `/about/index.html`; the canonical URL has to match that shape or
 * crawlers see two URLs for one page.
 */
export function absoluteUrl(path: string): string {
  if (path === "/") return `${siteConfig.url}/`;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalised}/`;
}

/**
 * Prefixes a `public/` asset with the deployment base path.
 *
 * `next/link` and `next/image` do this automatically; a plain <a> or <img>
 * does not, so any raw reference to a static file goes through here.
 */
export function withBasePath(path: string): string {
  return `${siteConfig.basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
