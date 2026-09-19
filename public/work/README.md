# Project screenshots

Drop project images here, then reference them from `src/content/projects.ts`:

```ts
image: {
  src: "/work/squadpilot.png",
  alt: "The SquadPilot transfer planner",
  width: 1280,
  height: 720,
},
```

The `width` and `height` are the file's real pixel dimensions. They are
required: the browser uses them to reserve the box before the image loads, so
the page never shifts underneath the reader.

Entries with no `image` render a labelled placeholder, so the site is never
broken by a missing file. A 16:9 export at roughly 1280×720 is the right size.
