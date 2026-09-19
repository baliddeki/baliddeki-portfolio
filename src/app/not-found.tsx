import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

/**
 * Exported as `404.html`, which GitHub Pages serves for unknown paths without
 * any extra configuration.
 */
export default function NotFound() {
  return (
    <PageShell currentPath="">
      <section className="md:grid md:grid-cols-[3fr_4fr] md:gap-x-10 lg:gap-x-16">
        <h1 className="font-display text-display font-medium">Not here.</h1>

        <p className="mt-8 max-w-[34ch] font-display text-lead font-normal text-muted md:mt-2">
          That page doesn&apos;t exist.{" "}
          <Link className="link-underline text-ink" href="/">
            Back to the work
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
