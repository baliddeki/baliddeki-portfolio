// @ts-check
import { copyFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

/**
 * Post-export step for GitHub Pages.
 *
 * Next writes the generated Open Graph image to an extensionless path, which
 * GitHub Pages serves as application/octet-stream — social scrapers reject
 * that. Copying it to a .png gives it the right content type. The site's
 * metadata points at this copy.
 *
 * `.nojekyll` is not optional: without it GitHub Pages runs the output through
 * Jekyll, which silently drops every directory beginning with an underscore —
 * including `_next`, i.e. all of the CSS, JS and fonts.
 */
const OUT_DIR = "out";

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const steps = [];

  const generatedOgImage = join(OUT_DIR, "opengraph-image");
  if (await exists(generatedOgImage)) {
    await copyFile(generatedOgImage, join(OUT_DIR, "opengraph-image.png"));
    steps.push("opengraph-image.png");
  } else {
    console.warn("! no generated Open Graph image found — skipping");
  }

  await writeFile(join(OUT_DIR, ".nojekyll"), "");
  steps.push(".nojekyll");

  // Set CUSTOM_DOMAIN in the workflow to serve the site from your own domain.
  const customDomain = process.env.CUSTOM_DOMAIN?.trim();
  if (customDomain) {
    await writeFile(join(OUT_DIR, "CNAME"), `${customDomain}\n`);
    steps.push(`CNAME (${customDomain})`);
  }

  console.log(`✓ finalized export: ${steps.join(", ")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
