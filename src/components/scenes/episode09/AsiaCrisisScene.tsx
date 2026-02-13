import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Asia Crisis Scene - 亚洲金融危机
 */
export const AsiaCrisisScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const countriesOpacity = interpolate(frame, [20, 60], [0, 1]);
  const summaryOpacity = interpolate(frame, [50, 90], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1f1f1f 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 48,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        1997 Asian Financial Crisis
      </div>

      {/* Countries falling */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 20,
          opacity: countriesOpacity,
        }}
      >
        {[
          { name: "Thailand", flag: "🇹🇭", color: "#fbbf24" },
          { name: "Indonesia", flag: "🇮🇩", color: "#ef4444" },
          { name: "South Korea", flag: "🇰🇷", color: "#3b82f6" },
          { name: "Russia", flag: "🇷🇺", color: "#ef4444" },
        ].map((country, i) => (
          <div
            key={i}
            style={{
              padding: "15px 20px",
              background: "rgba(239, 68, 68, 0.15)",
              borderRadius: 12,
              border: `2px solid ${country.color}`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32 }}>{country.flag}</div>
            <div style={{ fontSize: 14, color: "#e8e8e8", marginTop: 5 }}>{country.name}</div>
          </div>
        ))}
      </div>

      {/* Currency collapse */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: countriesOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 15 }}>Currency Collapse Rates</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>-50%</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Thai Baht</div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>-80%</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Indonesia Rupiah</div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>-60%</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Korean Won</div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: summaryOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600, marginBottom: 10 }}>The Cycle Continues</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          IMF再次以援助为条件，要求开放市场
        </div>
        <div style={{ fontSize: 14, color: "#ef4444", marginTop: 5 }}>
          发展中国家被迫以跳楼价出卖核心资产
        </div>
      </div>
    </AbsoluteFill>
  );
};
