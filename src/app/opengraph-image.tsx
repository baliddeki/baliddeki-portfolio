import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

// Emitted as a static file at build time — required by `output: "export"`.
export const dynamic = "force-static";

/** Rendered once at build time and emitted as a static PNG. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f3f3f3",
          color: "#181717",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
          {profile.wordmark}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, letterSpacing: "-2px" }}>
            {profile.headline}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#606060" }}>
            {profile.lead}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#2429af" }}>
          {profile.name} ⏤ {profile.role}
        </div>
      </div>
    ),
    size,
  );
}
