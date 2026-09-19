import { ArrowDown } from "@/components/ui/arrow-down";
import { PageShell } from "@/components/layout/page-shell";
import { ProjectList } from "@/components/work/project-list";
import { createPageMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const metadata = createPageMetadata({
  title: "Work",
  description: profile.lead,
  path: "/",
});

export default function WorkPage() {
  return (
    <PageShell currentPath="/">
      <section className="md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
        <div>
          <h1 className="max-w-[9ch] font-display text-display font-medium text-balance">
            {profile.headline}
          </h1>

          <ArrowDown className="mt-10 text-ink sm:mt-14" />
        </div>

        <p className="mt-8 max-w-[34ch] font-display text-lead font-normal text-muted md:mt-2">
          {profile.lead}
        </p>
      </section>

      <div className="mt-20 sm:mt-28">
        <ProjectList projects={projects} />
      </div>
    </PageShell>
  );
}
