import { profile } from "@/content/profile";

/** Rendered once per page, at the foot of the content column. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-12 sm:pt-28 sm:pb-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <p className="font-display text-nav font-medium text-accent">
          {profile.name} ⏤ {year}
        </p>

        <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 sm:gap-x-7">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener me"
                className="font-display text-nav font-medium transition-opacity hover:opacity-60"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
