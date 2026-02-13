import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Volcker Scene - 保罗·沃尔克
 */
export const VolckerScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const quoteOpacity = interpolate(frame, [20, 60], [0, 1]);
  const ratesOpacity = interpolate(frame, [50, 90], [0, 1]);

  const fedScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Paul Volcker
      </div>

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontSize: 18,
          opacity: titleOpacity,
        }}
      >
        美联储主席 (1979-1987)
      </div>

      {/* Fed symbol */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${fedScale})`,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1e3a5a, #0d1117)",
          border: "3px solid #ffd700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: quoteOpacity,
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 700, color: "#ffd700" }}>FED</span>
      </div>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#e8e8e8", fontStyle: "italic" }}>
          "A controlled disintegration
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", fontStyle: "italic" }}>
          of the world economy"
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
          would be a reasonable goal for the 1980s
        </div>
      </div>

      {/* Interest rates */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 30,
          opacity: ratesOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, color: "#9ca3af" }}>11%</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>1979</div>
        </div>
        <div style={{ fontSize: 36, color: "#ffd700" }}>→</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>20%</div>
          <div style={{ fontSize: 12, color: "#ef4444" }}>1981</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
