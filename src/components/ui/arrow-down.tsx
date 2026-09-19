/**
 * The scroll cue beneath the headline, taken from the Figma source.
 *
 * It inherits `currentColor` so it never falls out of step with the palette,
 * and is hidden from assistive technology — it is decoration, and the content
 * it points at is already in the document below it.
 */
export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="33.608"
      height="38.0398"
      viewBox="0 0 33.608 38.0398"
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1861 0H14.3849V29.0284L3.28693 17.9304L0 21.2543L16.7855 38.0398L33.608 21.2543L30.2472 17.9304L19.1861 29.0284V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
