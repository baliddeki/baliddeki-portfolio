import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface PageShellProps {
  /** The route being rendered — forwarded to the header for its active state. */
  currentPath: string;
  children: ReactNode;
}

/**
 * The frame every page sits in: the 1120px content column from the design,
 * with fluid gutters that keep a comfortable margin down to a 320px viewport.
 *
 * Pages compose this rather than it living in `app/layout.tsx`, because doing
 * so lets each route declare its own path for the navigation's active state
 * without reaching for a client-side router hook.
 */
export function PageShell({ currentPath, children }: PageShellProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-shell flex-col page-gutter">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>

      <SiteHeader currentPath={currentPath} />

      <main id="main" className="flex-1 pt-20 sm:pt-28 lg:pt-[158px]">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
