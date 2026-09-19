import Link from "next/link";

import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

interface SiteHeaderProps {
  /** The route currently being rendered, used to mark the active link. */
  currentPath: string;
}

/**
 * The masthead.
 *
 * The active route is resolved on the server from a prop rather than from
 * `usePathname`, which keeps the header a server component — the whole site
 * ships without a single client-side hook.
 *
 * On narrow screens the navigation wraps beneath the wordmark instead of
 * collapsing into a menu: with four short labels a disclosure would add
 * interaction cost and JavaScript to solve a problem that does not exist.
 */
export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="pt-10 sm:pt-14 lg:pt-[102px]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <Link
          href="/"
          className="font-display text-nav font-medium"
          aria-label={`${profile.name} — home`}
        >
          {profile.wordmark}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 sm:gap-x-7">
            {navigation.map((item) => {
              const isActive = item.href === currentPath;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "font-display text-nav font-medium transition-opacity hover:opacity-60",
                      isActive ? "underline underline-offset-4" : "",
                    ]
                      .join(" ")
                      .trim()}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
