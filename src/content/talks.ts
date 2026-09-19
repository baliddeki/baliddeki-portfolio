import type { Talk } from "@/lib/types";

/** Conference and meetup talks, newest first. */
export const talks: readonly Talk[] = [
  {
    title:
      "Regaining Control: GitHub-Based On-Prem CI/CD for Vendor-Driven Software Delivery",
    event: "Kampala DevOps & Cloud Summit",
    date: "2026-08-15",
    location: "Virtual",
    summary:
      "What it takes to pull delivery back in-house when the software you run was built by somebody else — GitHub-based pipelines against on-prem infrastructure, and the release discipline that has to come with them.",
    link: {
      label: "Kampala DevOps & Cloud Summit 2026",
      href: "https://summit.kampaladevops.org/",
      external: true,
    },
  },
] as const;
