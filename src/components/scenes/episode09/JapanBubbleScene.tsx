import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Japan Bubble Scene - 日本泡沫经济
 */
export const JapanBubbleScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const plazaOpacity = interpolate(frame, [20, 60], [0, 1]);
  const bubbleOpacity = interpolate(frame, [50, 90], [0, 1]);

  const bubbleScale = interpolate(frame, [40, 70], [0, 1.5]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Japan's Bubble Economy
      </div>

      {/* Plaza Accord */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: plazaOpacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#e8e8e8", fontWeight: 600 }}>September 1985</div>
        <div style={{ fontSize: 18, color: "#9ca3af" }}>Plaza Accord - 日元升值</div>
      </div>

      {/* Bubble */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${bubbleScale})`,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(239, 68, 68, 0.3))",
          border: "3px solid #ffd700",
          opacity: bubbleOpacity,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 32,
            fontWeight: 700,
            color: "#ffd700",
          }}
        >
          BUBBLE
        </div>
      </div>

      {/* Numbers */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: bubbleOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, color: "#ffd700", fontWeight: 700 }}>+300%</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Stock Prices</div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>1983-1989</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, color: "#ffd700", fontWeight: 700 }}>39,915</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Nikkei Peak</div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>Dec 1989</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
