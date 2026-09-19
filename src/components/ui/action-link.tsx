import NextLink from "next/link";
import type { ReactNode } from "react";

import type { Link } from "@/lib/types";
import { withBasePath } from "@/lib/site";

/** Schemes that leave the site but should not open a new tab. */
const DIRECT_SCHEME = /^(mailto:|tel:)/;
const REMOTE_SCHEME = /^https?:/;

interface ActionLinkProps {
  link: Link;
  className?: string;
  /**
   * Replaces the visible text — used where the design shows something terser
   * than the link's name, such as a bare domain. `link.label` then becomes the
   * accessible name, so the link still announces its full purpose.
   */
  children?: ReactNode;
  /** Expands the hit area to the nearest positioned ancestor. */
  stretch?: boolean;
}

/**
 * The one link primitive on the site.
 *
 * It decides — from the link data alone — whether to render a client-routed
 * `next/link`, a plain anchor to a static file, or an external anchor with the
 * right `rel` and a new tab, and it appends the matching arrow glyph. Callers
 * never have to think about `target` or `rel` again.
 */
export function ActionLink({
  link,
  className,
  children,
  stretch = false,
}: ActionLinkProps) {
  const isRemote = link.external ?? REMOTE_SCHEME.test(link.href);
  const isDirect = DIRECT_SCHEME.test(link.href);
  const opensNewTab = isRemote && !isDirect;

  const classes = [className, stretch ? "stretched" : ""]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="link-underline">{children ?? link.label}</span>
      <span aria-hidden="true"> {opensNewTab ? "↗" : "→"}</span>
    </>
  );

  // When the visible text is not the label, the label carries the meaning.
  const accessibleName = children ? link.label : undefined;

  if (link.asset) {
    return (
      <a className={classes} href={withBasePath(link.href)} aria-label={accessibleName}>
        {content}
      </a>
    );
  }

  if (isRemote || isDirect) {
    return (
      <a
        className={classes}
        href={link.href}
        aria-label={accessibleName}
        {...(opensNewTab && { target: "_blank", rel: "noreferrer noopener" })}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink className={classes} href={link.href} aria-label={accessibleName}>
      {content}
    </NextLink>
  );
}
