import type { Project } from "@/lib/types";

/**
 * The work, ordered by how many people actually use it.
 *
 * The index is typographic: a project is its name, what it does and where it
 * lives. Entries with no `link` show their status instead, so every row
 * carries the same weight.
 */
export const projects: readonly Project[] = [
  {
    slug: "dealzako",
    name: "DealZako",
    summary:
      "A platform for real estate brokers — listings, deals and commissions out of WhatsApp threads and into one place. I led a team of three; live, and in pilot with Eliberts Real Estate.",
    stack: ["Team lead", "Real estate", "Live"],
    status: "live",
    link: {
      label: "Visit dealzako.com",
      href: "https://www.dealzako.com",
      external: true,
    },
  },
  {
    slug: "fpl-squadpilot",
    name: "FPL SquadPilot",
    summary:
      "An assistant for Fantasy Premier League managers. It projects player points from a model I retrain each gameweek, then works out which transfer is worth the hit. 400+ installs.",
    stack: ["Android", "ML projections", "Google Play"],
    status: "live",
    link: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.baliddeki.fplsquadpilot",
      external: true,
    },
  },
  {
    slug: "ari-gold-bot",
    name: "Ari Gold Bot",
    summary:
      "A liquidity-sweep momentum expert advisor for gold on MetaTrader 5. One position at a time — no grids, no martingale — behind multi-timeframe confirmation and a daily-loss circuit breaker.",
    stack: ["MQL5", "MetaTrader 5", "MQL5 Market"],
    status: "live",
    link: {
      label: "View on MQL5 Market",
      href: "https://www.mql5.com/en/market/product/188554",
      external: true,
    },
  },
  {
    slug: "phronesis",
    name: "Phronesis",
    summary:
      "A diagnosis system that reads CT scans so radiologists spend their time on the hard cases. I lead the team of three and own the architecture, CI/CD and reliability.",
    stack: ["Python", "Deep learning", "$20k raised"],
    status: "in-progress",
  },
  {
    slug: "fast-savers",
    name: "Fast Savers",
    summary:
      "A loan management system for a savings business. Lead developer on the first release, and through acceptance testing with the 10+ agents who work in it daily.",
    stack: ["Lead developer", "Fintech", "Live since 2024"],
    status: "internal",
  },
] as const;
