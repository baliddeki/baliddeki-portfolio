import { ProjectEntry } from "@/components/work/project-entry";
import type { Project } from "@/lib/types";

/**
 * The ordered list of work. Rendered as a list so assistive technology
 * announces how many projects there are before reading them out.
 */
export function ProjectList({ projects }: { projects: readonly Project[] }) {
  return (
    <section aria-labelledby="work-heading">
      <h2 id="work-heading" className="sr-only">
        Selected work
      </h2>

      <ol className="flex flex-col gap-12 sm:gap-16">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ProjectEntry project={project} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}
