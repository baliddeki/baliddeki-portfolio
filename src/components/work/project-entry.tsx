import { ActionLink } from "@/components/ui/action-link";
import { domainOf } from "@/lib/format";
import type { Project, ProjectStatus } from "@/lib/types";

/**
 * Where each project stands. Every row carries one, so work without a public
 * URL reads as deliberate rather than unfinished. Keeping this exhaustive
 * means adding a status to the union is a type error here until its copy
 * exists.
 */
const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  pilot: "In pilot",
  internal: "Internal system",
  "in-progress": "In development",
};

interface ProjectEntryProps {
  project: Project;
  /** Zero-based position, rendered as the 01 / 02 / 03 index. */
  index: number;
}

/**
 * One row of the work index.
 *
 * There is no thumbnail: the destination is the evidence, so the row leads
 * with the name and ends with the domain you land on. Where a project has a
 * URL, its link is stretched across the whole row — one anchor in the markup,
 * the entire row as the target.
 */
export function ProjectEntry({ project, index }: ProjectEntryProps) {
  const position = String(index + 1).padStart(2, "0");

  return (
    <article className="group rule relative flex flex-col pb-10 transition-opacity hover:opacity-70 sm:pb-12 md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
      <div>
        <h3 className="font-body text-body font-medium uppercase">
          <span className="text-muted">{position} / </span>
          {project.name}
        </h3>

        <p className="mt-2 font-body text-sub text-muted">
          {STATUS_LABEL[project.status]}
        </p>
      </div>

      <div className="mt-5 md:mt-0">
        <p className="max-w-[54ch] font-body text-body">{project.summary}</p>

        <p className="mt-4 max-w-[54ch] font-body text-sub text-muted">
          {project.stack.join(" · ")}
        </p>

        {project.link && (
          <p className="mt-6 font-body text-body font-medium">
            <ActionLink link={project.link} stretch>
              {domainOf(project.link.href)}
            </ActionLink>
          </p>
        )}
      </div>
    </article>
  );
}
