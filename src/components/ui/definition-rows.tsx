import type { DefinitionEntry } from "@/lib/types";

/**
 * The label/value rows from the design — a real <dl>, so the relationship
 * between a term and its details survives being read by a screen reader.
 */
export function DefinitionRows({
  entries,
}: {
  entries: readonly DefinitionEntry[];
}) {
  return (
    <dl className="flex flex-col gap-8">
      {entries.map((entry) => (
        <div
          key={entry.term}
          className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] sm:gap-10"
        >
          <dt className="font-body text-body font-medium underline underline-offset-4">
            {entry.term}
          </dt>
          <dd className="font-body text-body text-muted">
            {entry.details.map((detail) => (
              <span key={detail} className="block">
                {detail}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
