import { ArticleEntry } from "@/components/writing/article-entry";
import { PageShell } from "@/components/layout/page-shell";
import { articles } from "@/content/writing";
import { createPageMetadata } from "@/lib/metadata";

const DESCRIPTION =
  "Notes on shipping software, the products I build and the systems I keep running.";

export const metadata = createPageMetadata({
  title: "Writing",
  description: DESCRIPTION,
  path: "/writing",
});

export default function WritingPage() {
  return (
    <PageShell currentPath="/writing">
      <section className="md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
        <h1 className="font-display text-display font-medium text-balance">
          Writing.
        </h1>

        <p className="mt-8 max-w-[34ch] font-display text-lead font-normal text-muted md:mt-2">
          {DESCRIPTION}
        </p>
      </section>

      <ol className="mt-20 flex flex-col gap-12 sm:mt-28 sm:gap-14">
        {articles.map((article) => (
          <li key={article.href}>
            <ArticleEntry article={article} />
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
