import { PageShell } from "@/components/layout/page-shell";
import { TalkEntry } from "@/components/speaking/talk-entry";
import { createPageMetadata } from "@/lib/metadata";
import { talks } from "@/content/talks";

const DESCRIPTION =
  "Talks on delivery, CI/CD and keeping systems running — at conferences and community summits.";

export const metadata = createPageMetadata({
  title: "Speaking",
  description: DESCRIPTION,
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <PageShell currentPath="/speaking">
      <section className="md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
        <h1 className="font-display text-display font-medium text-balance">
          Speaking.
        </h1>

        <p className="mt-8 max-w-[34ch] font-display text-lead font-normal text-muted md:mt-2">
          {DESCRIPTION}
        </p>
      </section>

      <ol className="mt-20 flex flex-col gap-10 sm:mt-28 sm:gap-12">
        {talks.map((talk) => (
          <li key={`${talk.event}-${talk.date}`}>
            <TalkEntry talk={talk} />
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
