import { ContactBlock } from "@/components/layout/contact-block";
import { DefinitionRows } from "@/components/ui/definition-rows";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";

export const metadata = createPageMetadata({
  title: "About",
  description: profile.biography[0],
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell currentPath="/about">
      <section className="md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
        <div>
          <h1 className="font-display text-display font-medium text-balance">
            Hi, I&apos;m {profile.name}.
          </h1>

          <div className="mt-8 flex max-w-[46ch] flex-col gap-6 sm:mt-10">
            {profile.biography.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="font-body text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <p className="mt-8 font-body text-sub text-muted md:mt-3">
          {profile.role}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
      </section>

      <div className="mt-16 sm:mt-24">
        <h2 className="sr-only">Toolkit</h2>
        <DefinitionRows entries={profile.toolkit} />
      </div>

      <div className="mt-20 sm:mt-28">
        <ContactBlock />
      </div>
    </PageShell>
  );
}
