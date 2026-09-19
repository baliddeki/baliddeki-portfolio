import { ActionLink } from "@/components/ui/action-link";
import { domainOf } from "@/lib/format";
import type { Talk } from "@/lib/types";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** One talk, on the same two-column rhythm as the work index. */
export function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <article className="group rule relative flex flex-col pb-10 transition-opacity hover:opacity-70 sm:pb-12 md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
      <div>
        <h3 className="font-body text-body font-medium uppercase">
          {talk.event}
        </h3>

        <p className="mt-2 font-body text-sub text-muted">
          <time dateTime={talk.date}>
            {DATE_FORMAT.format(new Date(talk.date))}
          </time>
          <span aria-hidden="true"> · </span>
          {talk.location}
        </p>
      </div>

      <div className="mt-5 md:mt-0">
        <h4 className="max-w-[38ch] font-display text-lead font-normal">
          {talk.title}
        </h4>

        <p className="mt-4 max-w-[54ch] font-body text-body text-muted">
          {talk.summary}
        </p>

        {talk.link && (
          <p className="mt-6 font-body text-body font-medium">
            <ActionLink link={talk.link} stretch>
              {domainOf(talk.link.href)}
            </ActionLink>
          </p>
        )}
      </div>
    </article>
  );
}
