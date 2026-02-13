import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Oil Crisis Scene - 石油危机
 */
export const OilCrisisScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dateOpacity = interpolate(frame, [0, 20], [0, 1]);
  const oilPriceOpacity = interpolate(frame, [20, 60], [0, 1]);
  const priceScale = interpolate(frame, [20, 50], [0, 1]);
  const impactOpacity = interpolate(frame, [60, 90], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Date */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 48,
          fontWeight: 700,
          opacity: dateOpacity,
        }}
      >
        October 6, 1973
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 24,
          opacity: dateOpacity,
        }}
      >
        第四次中东战争爆发
      </div>

      {/* Oil prices */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: oilPriceOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 10 }}>World Oil Prices</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <div>
            <div style={{ fontSize: 36, color: "#9ca3af" }}>$3</div>
            <div style={{ fontSize: 14, color: "#6b7280" }}>Before 1973</div>
          </div>
          <div style={{ fontSize: 48, color: "#ffd700" }}>→</div>
          <div>
            <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700, transform: `scale(${priceScale})` }}>
              $12
            </div>
            <div style={{ fontSize: 14, color: "#ef4444" }}>January 1974</div>
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 56,
            color: "#ef4444",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
          }}
        >
          +400%
        </div>
      </div>

      {/* Impact */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: impactOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 15 }}>
          Developing Nations Devastated
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>$13B</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>1973 Trade Deficit</div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>$350B</div>
            <div style={{ fontSize: 12, color: "#ef4444" }}>1974 Trade Deficit</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
