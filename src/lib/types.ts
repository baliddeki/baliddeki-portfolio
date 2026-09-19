/**
 * The content model for the site.
 *
 * Everything rendered on screen is described by these types and supplied from
 * `src/content`. Components receive typed data and decide only how it looks —
 * adding a project or an article never means touching a component.
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

/** A static image shipped in `public/`. Dimensions are required so the browser
 *  can reserve space before the file loads — no cumulative layout shift. */
export interface ImageAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

/**
 * Where a project stands today. This drives the copy shown in place of a link
 * for work that has no public URL, so an unlinked entry still reads as
 * deliberate rather than unfinished.
 */
export type ProjectStatus = "live" | "pilot" | "internal" | "in-progress";

export interface Project {
  /** Stable identifier — used for React keys and deep links. */
  readonly slug: string;
  /** Rendered uppercase alongside its index, e.g. "01 / FPL SQUADPILOT". */
  readonly name: string;
  /** The two-or-three sentence description in the left column. */
  readonly summary: string;
  /** Small grey line beneath the summary; joined with " · " when rendered. */
  readonly stack: readonly string[];
  readonly status: ProjectStatus;
  /** Omitted for work with no public URL. */
  readonly link?: Link;
  /** Omitted until a screenshot exists; a placeholder is rendered instead. */
  readonly image?: ImageAsset;
}

export interface Article {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  /** ISO 8601 date, used for ordering and for the `datetime` attribute. */
  readonly publishedAt: string;
  readonly publication: string;
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
