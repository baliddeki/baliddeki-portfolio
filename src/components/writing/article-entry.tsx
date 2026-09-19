import { ActionLink } from "@/components/ui/action-link";
import type { Article } from "@/lib/types";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
});

/** One published piece, laid out on the same two-column rhythm as the work list. */
export function ArticleEntry({ article }: { article: Article }) {
  return (
    <article className="rule flex flex-col pb-10 sm:pb-12 md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
      <p className="font-body text-sub text-muted uppercase">
        {article.publication}
        <span aria-hidden="true"> · </span>
        <time dateTime={article.publishedAt}>
          {DATE_FORMAT.format(new Date(article.publishedAt))}
        </time>
      </p>

      <div className="mt-4 md:mt-0">
        <h3 className="font-display text-lead font-normal">{article.title}</h3>

        <p className="mt-4 max-w-[52ch] font-body text-body text-muted">
          {article.description}
        </p>

        <p className="mt-6 font-body text-body font-medium">
          <ActionLink
            link={{
              label: "Read it",
              href: article.href,
              external: true,
            }}
          />
        </p>
      </div>
    </article>
  );
}
