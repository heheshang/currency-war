import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Fractional Reserve Scene - 部分储备金体系
 */
export const FractionalReserveScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const goldOpacity = interpolate(frame, [20, 50], [0, 1]);
  const receiptOpacity = interpolate(frame, [40, 70], [0, 1]);
  const lendOpacity = interpolate(frame, [60, 90], [0, 1]);

  const goldScale = interpolate(frame, [20, 50], [0, 1]);
  const receiptScale = interpolate(frame, [40, 70], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
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
        Fractional Reserve Banking
      </div>

      {/* Step 1: Gold deposit */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "22%",
          textAlign: "center",
          opacity: goldOpacity,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            margin: "0 auto 15px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fbbf24, #d97706)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${goldScale})`,
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
          }}
        >
          <span style={{ fontSize: 32, color: "#1a1a2e" }}>💰</span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>Step 1</div>
        <div style={{ fontSize: 12, color: "#9ca3af" }}>Depositors store gold</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>储户存放金币</div>
      </div>

      {/* Arrow 1 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          fontSize: 32,
          color: "#ffd700",
          opacity: goldOpacity,
        }}
      >
        →
      </div>

      {/* Step 2: Receipt */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          width: "22%",
          textAlign: "center",
          opacity: receiptOpacity,
        }}
      >
        <div
          style={{
            width: 80,
            height: 60,
            margin: "0 auto 15px",
            background: "#fefce8",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${receiptScale})`,
            boxShadow: "0 0 15px rgba(254, 252, 232, 0.3)",
          }}
        >
          <span style={{ fontSize: 14, color: "#1a1a2e" }}>Receipt</span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>Step 2</div>
        <div style={{ fontSize: 12, color: "#9ca3af" }}>Bank issues receipts</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>银行发行收据(货币)</div>
      </div>

      {/* Arrow 2 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "65%",
          fontSize: 32,
          color: "#ffd700",
          opacity: receiptOpacity,
        }}
      >
        →
      </div>

      {/* Step 3: Lend more */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "75%",
          width: "22%",
          textAlign: "center",
          opacity: lendOpacity,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            margin: "0 auto 15px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ef4444, #b91c1c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 28, color: "#fff" }}>×10</span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>Step 3</div>
        <div style={{ fontSize: 12, color: "#ef4444" }}>Banks lend 10x!</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>银行借出10倍</div>
      </div>

      {/* Key point */}
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
        <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 700 }}>Banks Create Money from Nothing!</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          只要不多发得太过份，一般不会引起储户怀疑
        </div>
      </div>
    </AbsoluteFill>
  );
};
