/**
 * The content model for the site.
 *
 * Everything rendered on screen is described by these types and supplied from
 * `src/content`. Components receive typed data and decide only how it looks —
 * adding a project, article or talk never means touching a component.
 */

/** A link that may point inside the site or out to the wider web. */
export interface Link {
  readonly label: string;
  readonly href: string;
  /** Opens in a new tab and renders the ↗ affordance. Inferred when omitted. */
  readonly external?: boolean;
  /** A static file served from `public/`, rather than a route. */
  readonly asset?: boolean;
}

/**
 * Where a project stands today. Every row shows one, so the list reads at a
 * consistent weight whether or not the work has a public URL.
 */
export type ProjectStatus = "live" | "pilot" | "internal" | "in-progress";

export interface Project {
  /** Stable identifier — used for React keys and deep links. */
  readonly slug: string;
  /** Rendered uppercase alongside its index, e.g. "01 / DEALZAKO". */
  readonly name: string;
  /** The two-or-three sentence description. */
  readonly summary: string;
  /** Small grey line beneath the summary; joined with " · " when rendered. */
  readonly stack: readonly string[];
  readonly status: ProjectStatus;
  /** Omitted for work with no public URL. */
  readonly link?: Link;
}

export interface Article {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  /** ISO 8601 date, used for ordering and for the `datetime` attribute. */
  readonly publishedAt: string;
  readonly publication: string;
}

export interface Talk {
  readonly title: string;
  readonly event: string;
  /** ISO 8601 date, used for ordering and for the `datetime` attribute. */
  readonly date: string;
  readonly location: string;
  readonly summary: string;
  /** The event page, or a recording where one exists. */
  readonly link?: Link;
}

/** A label/value pair, as used by the "Main Stack" rows on the About page. */
export interface DefinitionEntry {
  readonly term: string;
  readonly details: readonly string[];
}

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}
