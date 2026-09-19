# baliddeki-portfolio

The personal site of Aliddeki Mulindwa Bryan — software & DevOps engineer.

Statically exported Next.js, deployed to GitHub Pages on every push to `main`.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run typecheck
```

## How it is put together

```
src/
  app/          routes, plus the metadata files (sitemap, robots, social card)
  components/   presentation only — layout/, ui/, work/, writing/, seo/
  content/      the site's actual content, as typed data
  lib/          types, deployment config, metadata helpers
scripts/        post-export step for GitHub Pages
```

The one rule everything else follows: **content is data, components are
presentation.** Adding a project means adding an object to
`src/content/projects.ts` — no component is edited, and the type system decides
whether the entry is complete. The same content modules feed the pages, the
sitemap and the JSON-LD, so the three cannot drift apart.

### Design

Built from a [Figma
source](https://www.figma.com/design/3Tknd9ICSK53p9911Wh7X0/Portfolio-Website-Sample--Community-).
Every colour and type step from that file is declared once as a token in
`src/app/globals.css` and consumed as a Tailwind utility; there are no raw hex
values or font sizes in component code.

The type scale is fluid — each step `clamp()`s between a comfortable phone size
and the exact desktop value from the design — so the layout has no breakpoint
at which it visibly jumps. Project rows are a two-column grid on desktop and a
single stack below it, with the mobile reading order preserved in the DOM and
the desktop arrangement expressed through grid placement alone.

### Performance

- **No client-side JavaScript of its own.** There is not one `"use client"` in
  the codebase. The navigation's active state comes from a prop passed on the
  server, not `usePathname`; the mobile navigation wraps rather than collapsing
  into a menu, so no disclosure logic ships. Page-specific JS is ~170 B.
- **Fonts are self-hosted** by `next/font` at build time — no third-party
  request on first paint, and no flash of unstyled text.
- **CSS is inlined** into each document, removing a render-blocking request.
- **Images carry explicit dimensions**, so nothing shifts as they load.

### SEO

Canonical URLs on every route, Open Graph and Twitter cards, a generated social
image, a sitemap derived from the navigation array, `robots.txt`, and a JSON-LD
graph describing the person, the site, the work and the writing — all built
from the same content modules the pages render.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

The base path and origin are read from the live Pages configuration at build
time via `actions/configure-pages`, so the same source works unchanged whether
the site is served from `baliddeki.github.io/baliddeki-portfolio`, a user page,
or a custom domain. Nothing needs editing if the repository is renamed.

To attach a custom domain, set `CUSTOM_DOMAIN` in the build step's `env` and
the export will include the matching `CNAME` file.

`out/.nojekyll` is written by `scripts/finalize-export.mjs`. It is not
optional: without it GitHub Pages runs the output through Jekyll, which drops
every directory starting with an underscore — including `_next`.

## Changing the content

| What | Where |
| --- | --- |
| Bio, skills, email, socials, résumé | `src/content/profile.ts` |
| Projects | `src/content/projects.ts` |
| Articles | `src/content/writing.ts` |
| Navigation and routes | `src/content/navigation.ts` |
| Project screenshots | `public/work/` — see [docs/project-images.md](docs/project-images.md) |
