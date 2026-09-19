import type { Article } from "@/lib/types";

/** Published writing, newest first. */
export const articles: readonly Article[] = [
  {
    title: "Mind Your Code: Journey with Me",
    description:
      "What actually makes a modern software engineer — and why most of it isn't the code you write on the first pass.",
    href: "https://medium.com/@baliddeki_69605/mind-your-code-journey-with-me-3c63d4ede147",
    publishedAt: "2025-02-01",
    publication: "Medium",
  },
  {
    title: "The Battle of Boda Hailing Platforms: SafeBoda vs. Faras",
    description:
      "Two platforms solving the same Kampala problem, and which side of the chain a product should optimise for first.",
    href: "https://medium.com/@baliddeki_69605/the-battle-of-boda-hailing-platforms-safeboda-vs-2f21a73ab80a",
    publishedAt: "2024-09-01",
    publication: "Medium",
  },
  {
    title: "BirdDanger: Harm Detection for Birds",
    description:
      "Taking a model that classifies bird calls as alarm or mating from a notebook to something with a URL.",
    href: "https://medium.com/@baliddeki_69605/birddanger-harm-detection-for-birds-deployed-with-koyeb-39708d5059f1",
    publishedAt: "2024-08-01",
    publication: "Medium",
  },
] as const;
