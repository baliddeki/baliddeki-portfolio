import type { Project } from "@/lib/types";

/**
 * The work, ordered by how many people actually use it.
 *
 * To add a screenshot, drop the file in `public/work/` and add an `image`
 * block — the dimensions are required so the browser reserves the space
 * before the file loads:
 *
 *   image: {
 *     src: "/work/squadpilot.png",
 *     alt: "The SquadPilot transfer planner",
 *     width: 1280,
 *     height: 720,
 *   },
 *
 * Entries without an `image` render a labelled placeholder, so a missing
 * asset can never break the page.
 */
export const projects: readonly Project[] = [
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
    slug: "dealzako",
    name: "DealZako",
    summary:
      "A platform for real estate brokers — listings, deals and commissions out of WhatsApp threads and into one place. I led a team of three; in pilot with Eliberts Real Estate.",
    stack: ["Team lead", "Real estate", "In pilot"],
    status: "pilot",
  },
  {
    slug: "fast-savers",
    name: "Fast Savers",
    summary:
      "A loan management system for a savings business. Lead developer on the first release, and through acceptance testing with the 10+ agents who work in it daily.",
    stack: ["Lead developer", "Fintech", "Live since 2024"],
    status: "internal",
  },
  {
    slug: "inventory-management-system",
    name: "Inventory Management System",
    summary:
      "The platform Klan Logistics runs on. Moved off a monolith onto containerised services and wired into Dynamics 365. Uptime up 50%, outside-vendor dependency down 80%, 200+ officers trained.",
    stack: ["Docker", "GitHub Actions", "Dynamics 365"],
    status: "internal",
  },
] as const;
