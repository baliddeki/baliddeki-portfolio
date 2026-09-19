# Project screenshots

Images live in `public/work/` and are referenced from `src/content/projects.ts`:

```ts
image: {
  src: "/work/squadpilot.webp",
  alt: "The SquadPilot transfer planner",
  width: 1280,
  height: 720,
},
```

The `width` and `height` are the file's real pixel dimensions. They are
required: the browser uses them to reserve the box before the image loads, so
the page never shifts underneath the reader.

Entries with no `image` render a labelled placeholder, so the site is never
broken by a missing file. A 16:9 WebP at roughly 1280×720 is the right size — the existing files are
60 KB and under.
