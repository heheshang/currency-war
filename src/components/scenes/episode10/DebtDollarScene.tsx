import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Debt Dollar Scene - 债务美元
 */
export const DebtDollarScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const stepsOpacity = interpolate(frame, [20, 60], [0, 1]);

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
        How Debt Dollars Are Created
      </div>

      {/* Steps */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: stepsOpacity,
        }}
      >
        {/* Step 1 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            padding: "15px 25px",
            background: "rgba(255, 215, 0, 0.1)",
            borderRadius: 8,
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#ffd700",
              color: "#0d1117",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            1
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, color: "#e8e8e8", fontWeight: 600 }}>Treasury Issues Debt</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>财政部发行国债</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: "center", fontSize: 24, color: "#ffd700", marginBottom: 20 }}>↓</div>

        {/* Step 2 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            padding: "15px 25px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: 8,
            borderLeft: "4px solid #3b82f6",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#3b82f6",
              color: "#fff",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            2
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, color: "#e8e8e8", fontWeight: 600 }}>Fed Buys with Created Money</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>美联储用创造出来的货币购买国债</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: "center", fontSize: 24, color: "#3b82f6", marginBottom: 20 }}>↓</div>

        {/* Step 3 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 25px",
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: 8,
            borderLeft: "4px solid #ef4444",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#ef4444",
              color: "#fff",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            3
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, color: "#e8e8e8", fontWeight: 600 }}>Commercial Banks Amplify 10x</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>商业银行通过储备金制度放大10倍</div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [70, 100], [0, 1]),
        }}
      >
        <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700 }}>Every Dollar = Debt</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>每一个美元都是债务</div>
      </div>
    </AbsoluteFill>
  );
};
