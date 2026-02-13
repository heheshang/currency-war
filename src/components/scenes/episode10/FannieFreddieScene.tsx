import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Fannie Freddie Scene - 房利美和房地美
 */
export const FannieFreddieScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);

  const houseScale = interpolate(frame, [30, 60], [0, 1]);

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
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Fannie Mae & Freddie Mac
      </div>

      {/* Houses */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 20,
          opacity: contentOpacity,
        }}
      >
        {["Fannie Mae", "Freddie Mac"].map((name, i) => (
          <div
            key={i}
            style={{
              width: 120,
              height: 100,
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${houseScale})`,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
          >
            <span style={{ fontSize: 28 }}>🏠</span>
            <span style={{ fontSize: 12, color: "#fff", marginTop: 5 }}>{name}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>"The Second Federal Reserve"</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>政府发起机构 (GSE)</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>持有或担保美国近一半的房屋贷款</div>
      </div>

      {/* Numbers */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 42, color: "#ef4444", fontWeight: 700 }}>$4 Trillion</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>in Mortgage Bonds / 抵押债券</div>
        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 5 }}>2008金融危机导火索</div>
      </div>
    </AbsoluteFill>
  );
};
