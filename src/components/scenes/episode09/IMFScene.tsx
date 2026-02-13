import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * IMF Scene - IMF债务解决方案
 */
export const IMFScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const conditionsOpacity = interpolate(frame, [20, 60], [0, 1]);
  const paymentsOpacity = interpolate(frame, [50, 90], [0, 1]);

  const imfScale = interpolate(frame, [30, 60], [0, 1]);

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
        IMF "Debt Solutions"
      </div>

      {/* IMF Logo */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${imfScale})`,
          width: 100,
          height: 100,
          background: "linear-gradient(135deg, #1e3a5a, #0d1117)",
          borderRadius: 12,
          border: "2px solid #ffd700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: conditionsOpacity,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 700, color: "#ffd700" }}>IMF</span>
      </div>

      {/* Conditions */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: conditionsOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#e8e8e8", marginBottom: 15 }}>IMF "Special Conditions":</div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {["削减政府开支", "提高税收", "货币贬值", "核心资产私有化", "资本市场自由化", "自由贸易"].map(
            (item, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255, 215, 0, 0.15)",
                  borderRadius: 20,
                  border: "1px solid #ffd700",
                  color: "#ffd700",
                  fontSize: 14,
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Payments */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          textAlign: "center",
          opacity: paymentsOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>1980-1986: Third World Paid</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>$326B</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Interest</div>
          </div>
          <div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>$332B</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Principal</div>
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700, marginTop: 15 }}>
          Total: $658B for $430B Debt
        </div>
        <div style={{ fontSize: 14, color: "#ef4444", marginTop: 5 }}>
          Still Owe $1.3 Trillion!
        </div>
      </div>
    </AbsoluteFill>
  );
};
