import type { DefinitionEntry, Link } from "@/lib/types";

/**
 * Single source of truth for who this site is about. Anything that would
 * otherwise be hardcoded into a page — the name in the footer, the email in
 * the contact block, the description in the page metadata — reads from here.
 */
export const profile = {
  name: "Aliddeki Mulindwa Bryan",
  shortName: "Bryan",
  /** The mark in the top-left, styled after the Figma wordmark. */
  wordmark: "amb.",
  role: "Software & DevOps Engineer",
  location: "Kampala, Uganda",
  email: "baliddeki@gmail.com",

  /** The one line the whole site is built around. */
  headline: "Hello, I'm Bryan.",

  /** The lead paragraph on the home page, beneath the headline. */
  lead: "Software and DevOps engineer in Kampala. I build products people actually use, then keep them running.",

  /** The About page, in the order the paragraphs appear. */
  biography: [
    "I care about what happens after the launch. Most of my work is the middle part — a monolith moved onto containers, an integration that finally makes two systems talk, a pipeline that makes releases boring.",
    "By day I keep a logistics company's platforms up. The rest of the time I build my own things. SquadPilot came from wanting a better answer to my own FPL transfers; Ari Gold Bot from wanting to know whether a strategy survives a live market. Both have users who aren't me.",
  ],

  /** The label/value rows on the About page. */
  toolkit: [
    {
      term: "Main Stack",
      details: [
        "TypeScript, Python, PHP, Node.js",
        "Next.js, Vue, Nuxt, Laravel, Django",
        "PostgreSQL, MySQL, MongoDB",
      ],
    },
    {
      term: "Infrastructure",
      details: [
        "Docker, GitHub Actions, AWS, Linux",
        "Monitoring, incident response, releases",
        "CKNA, GitHub Foundations",
      ],
    },
    {
      term: "Also",
      details: [
        "Dynamics 365 Business Central integrations",
        "Deep learning models, shipped in real products",
        "Leading small teams",
      ],
    },
  ] as const satisfies readonly DefinitionEntry[],

  /** Shown in the contact block. */
  availability: "Open to engineering roles, and to building something with you.",

  resume: {
    label: "View résumé",
    href: "/aliddeki-mulindwa-bryan-resume.pdf",
    asset: true,
  } as const satisfies Link,

  socials: [
    { label: "GitHub", href: "https://github.com/baliddeki", external: true },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/aliddeki-mulindwa-bryan-444a16250",
      external: true,
    },
    {
      label: "Medium",
      href: "https://medium.com/@baliddeki_69605",
      external: true,
    },
  ] as const satisfies readonly Link[],
} as const;
