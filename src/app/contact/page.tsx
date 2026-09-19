import { ContactBlock } from "@/components/layout/contact-block";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.email}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      {/* The footer already carries the social links, so this page is only the
          one thing it is for. */}
      <div className="flex min-h-[38vh] flex-col justify-center">
        <ContactBlock headingLevel="h1" />
      </div>
    </PageShell>
  );
}
