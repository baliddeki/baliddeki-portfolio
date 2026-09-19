import { ActionLink } from "@/components/ui/action-link";
import { Thumbnail } from "@/components/ui/thumbnail";
import type { Project, ProjectStatus } from "@/lib/types";

/**
 * What to show in place of a link for work that has no public URL. Keeping
 * this as an exhaustive record means adding a status to the union is a type
 * error here until the copy for it exists.
 */
const STATUS_LABEL: Record<ProjectStatus, string | null> = {
  live: null,
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
 * One row of the work list.
 *
 * The layout is a two-column grid on desktop — text left, visual right, both
 * starting at the same baseline — and a single stack on narrow screens. The
 * source order is the reading order on mobile (heading, visual, detail); the
 * desktop arrangement is expressed entirely through explicit grid placement,
 * so the DOM order never has to be compromised for the design.
 */
export function ProjectEntry({ project, index }: ProjectEntryProps) {
  const position = String(index + 1).padStart(2, "0");
  const statusLabel = STATUS_LABEL[project.status];

  return (
    <article className="rule flex flex-col pb-12 sm:pb-16 md:grid md:grid-cols-[3fr_4fr] md:grid-rows-[auto_1fr] md:gap-x-10 lg:gap-x-16">
      <h3 className="order-1 font-body text-body font-medium tracking-tight uppercase md:col-start-1 md:row-start-1">
        <span className="text-muted">{position} / </span>
        {project.name}
      </h3>

      <div className="order-2 mt-6 md:order-none md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0">
        <Thumbnail
          image={project.image}
          label={project.name}
          priority={index === 0}
        />
      </div>

      <div className="order-3 mt-6 flex flex-col md:order-none md:col-start-1 md:row-start-2 md:mt-4">
        <p className="max-w-[46ch] font-body text-body">{project.summary}</p>

        <p className="mt-4 max-w-[44ch] font-body text-sub text-muted">
          {project.stack.join(" · ")}
        </p>

        {(project.link || statusLabel) && (
          <p className="mt-8 font-body text-body font-medium md:mt-auto md:pt-8">
            {project.link ? (
              <ActionLink link={project.link} />
            ) : (
              <span className="text-muted">{statusLabel}</span>
            )}
          </p>
        )}
      </div>
    </article>
  );
}
