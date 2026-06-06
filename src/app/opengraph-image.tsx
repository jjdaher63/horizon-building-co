import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Horizon Building Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 60%, #111827 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Subtle gold border accent */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            right: "60px",
            bottom: "40px",
            border: "1px solid rgba(163,131,68,0.25)",
            borderRadius: "4px",
            display: "flex",
          }}
        />

        {/* Gold top rule */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            right: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #a38344, transparent)",
            display: "flex",
          }}
        />

        {/* Logo mark SVG inline */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="27 110 58 153"
          width="90"
          height="90"
          style={{ marginBottom: "28px" }}
        >
          <path
            fill="#a38344"
            d="M 42.84375 177.507812 L 47.082031 174.511719 L 47.082031 135.792969 L 66.566406 122.035156 L 66.566406 256.90625 L 58.945312 256.90625 L 58.945312 150.921875 L 63.144531 153.890625 L 63.144531 148.699219 L 54.703125 142.734375 L 54.703125 173.316406 L 30.980469 190.070312 L 30.980469 261.148438 L 35.222656 261.148438 L 35.222656 192.269531 L 54.703125 178.507812 L 54.703125 256.90625 L 47.082031 256.90625 L 47.082031 188.082031 L 42.84375 191.074219 L 42.84375 261.148438 L 70.808594 261.148438 L 70.808594 113.847656 L 42.84375 133.597656 Z"
          />
          <path
            fill="#a38344"
            d="M 74.230469 156.527344 L 74.230469 161.71875 L 78.429688 164.683594 L 78.429688 261.148438 L 82.671875 261.148438 L 82.671875 162.488281 Z"
          />
        </svg>

        {/* Company name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: "700",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
          }}
        >
          HORIZON
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#a38344",
            fontSize: "22px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "36px",
            display: "flex",
          }}
        >
          BUILDING COMPANY
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "#a38344",
            marginBottom: "28px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: "#9ca3af",
            fontSize: "20px",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          General Contractor · Real Estate Developer · Los Angeles
        </div>

        {/* Gold bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            right: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #a38344, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
