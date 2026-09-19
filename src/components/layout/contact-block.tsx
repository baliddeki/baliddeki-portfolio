import { profile } from "@/content/profile";

/**
 * The closing call to action, shared by the About and Contact pages so the
 * two can never drift apart.
 */
export function ContactBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;

  return (
    <section className="border-t-[1.5px] border-ink pt-12 sm:pt-16">
      <div className="grid gap-8 md:grid-cols-[3fr_4fr] md:gap-10 lg:gap-16">
        <Heading className="font-display text-lead font-normal">
          {profile.availability}
        </Heading>

        <div>
          <p className="font-display text-lead font-normal">
            <a className="link-underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
