import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

// Share card for lacy.is: the site's own black and white, nothing else.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "0 96px",
          background: "#000",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 128, fontWeight: 700, letterSpacing: -4 }}>
          lacy.is
        </div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 16 }}>
          Lacy Morrow builds software.
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
