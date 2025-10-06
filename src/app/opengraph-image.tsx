// ---------------------------------
// FILE: /app/opengraph-image.tsx
// Dynamic OG image for social sharing
// ---------------------------------
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

type OGImageParams = {
  params: Record<string, string>;
};

const OGImage = async ({ params }: OGImageParams) => {
  console.log("params: ", params);

  const title = "Neurasynk — Synchronizing Brain and AI";
  const subtitle =
    "Adaptive EEG Neurofeedback with Deep Reinforcement Learning";
  return new ImageResponse(
    (
      <div
        style={{
          padding: 64,
          fontSize: 42,
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg,#142850,#0C7B93)",
        }}
      >
        <div style={{ fontWeight: 800 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 30, opacity: 0.9 }}>
          {subtitle}
        </div>
      </div>
    ),
    size
  );
};

export default OGImage;
