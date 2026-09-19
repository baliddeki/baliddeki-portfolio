import type { ImageAsset } from "@/lib/types";
import { withBasePath } from "@/lib/site";

interface ThumbnailProps {
  image?: ImageAsset;
  /** Used as the placeholder caption when no image has been supplied yet. */
  label: string;
  /** Eagerly loaded for the first entry, which is above the fold. */
  priority?: boolean;
}

/**
 * A project's visual.
 *
 * Deliberately a plain <img>: the site is exported statically to GitHub Pages
 * where no image optimiser runs, so `next/image` would add client JavaScript
 * and a wrapper for no benefit. Width and height are always present, so the
 * browser reserves the box before the file arrives and the layout never shifts.
 */
export function Thumbnail({ image, label, priority = false }: ThumbnailProps) {
  if (!image) {
    return (
      <div
        className="flex aspect-16/9 w-full items-end bg-placeholder p-4 sm:p-5"
        role="img"
        aria-label={`${label} — screenshot pending`}
      >
        <span aria-hidden="true" className="font-body text-sub text-muted">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      className="aspect-16/9 w-full object-cover"
      src={withBasePath(image.src)}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority && { fetchPriority: "high" as const })}
    />
  );
}
