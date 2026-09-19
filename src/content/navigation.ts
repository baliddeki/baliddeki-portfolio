import type { NavigationItem } from "@/lib/types";

/**
 * The primary navigation. This array is the single definition of the site's
 * routes: the header renders it, and `app/sitemap.ts` derives the sitemap
 * from it, so a new page cannot be added and then silently left unindexed.
 */
export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
] as const;
