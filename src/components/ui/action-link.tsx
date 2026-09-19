import NextLink from "next/link";

import type { Link } from "@/lib/types";
import { withBasePath } from "@/lib/site";

/** Schemes that leave the site but should not open a new tab. */
const DIRECT_SCHEME = /^(mailto:|tel:)/;
const REMOTE_SCHEME = /^https?:/;

interface ActionLinkProps {
  link: Link;
  className?: string;
}

/**
 * The one link primitive on the site.
 *
 * It decides — from the link data alone — whether to render a client-routed
 * `next/link`, a plain anchor to a static file, or an external anchor with the
 * right `rel` and a new tab, and it appends the matching arrow glyph. Callers
 * never have to think about `target` or `rel` again.
 */
export function ActionLink({ link, className }: ActionLinkProps) {
  const isRemote = link.external ?? REMOTE_SCHEME.test(link.href);
  const isDirect = DIRECT_SCHEME.test(link.href);
  const opensNewTab = isRemote && !isDirect;

  const label = (
    <>
      <span className="link-underline">{link.label}</span>
      <span aria-hidden="true"> {opensNewTab ? "↗" : "→"}</span>
    </>
  );

  if (link.asset) {
    return (
      <a className={className} href={withBasePath(link.href)}>
        {label}
      </a>
    );
  }

  if (isRemote || isDirect) {
    return (
      <a
        className={className}
        href={link.href}
        {...(opensNewTab && {
          target: "_blank",
          rel: "noreferrer noopener",
        })}
      >
        {label}
      </a>
    );
  }

  return (
    <NextLink className={className} href={link.href}>
      {label}
    </NextLink>
  );
}
