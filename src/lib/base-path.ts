/**
 * Normalises the deployment base path.
 *
 * GitHub's `configure-pages` action reports the base path as "/" for a user
 * page and "/repo-name" for a project page. Next rejects a bare "/" and a
 * trailing slash, so both shapes are folded into the empty string here and
 * this module is the only place that knows the rule — it is imported by both
 * `next.config.ts` and the runtime site config.
 */
export function normaliseBasePath(value: string | undefined): string {
  if (!value || value === "/") return "";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "");
}
