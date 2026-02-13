import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

// Typewriter text component
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame, speed = 3, style }) => {
  const frame = useCurrentFrame();
  const charCount = Math.max(0, Math.floor((frame - startFrame) / speed));

  return (
    <span style={style}>
      {text.slice(0, charCount)}
      {charCount < text.length && (
        <span style={{ animation: "blink 1s infinite" }}>|</span>
      )}
    </span>
  );
};

// Flowing money particles
const MoneyFlow: React.FC<{ direction?: "left" | "right" }> = ({
  direction = "right",
}) => {
  const frame = useCurrentFrame();
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      y: 35 + (i % 5) * 10,
      delay: i * 8,
      speed: 0.3 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => {
        const x =
          ((frame * p.speed * (direction === "right" ? 1 : -1) + p.delay) %
            120) -
          10;
        const opacity = Math.max(0, 1 - Math.abs(x - 50) / 60);
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: direction === "right" ? `${x}%` : `${100 - x}%`,
              top: `${p.y}%`,
              fontSize: 14,
              opacity: opacity * 0.6,
            }}
          >
            💵
          </div>
        );
      })}
    </div>
  );
};

// Bank multiplier visualization
const MultiplierBars: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [1, 3, 5, 7, 10];

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "flex-end",
        justifyContent: "center",
        height: 100,
      }}
    >
      {bars.map((val, i) => {
        const height = interpolate(
          frame,
          [30 + i * 10, 60 + i * 10],
          [0, val * 8],
          {
            extrapolateRight: "clamp",
          },
        );
        const opacity = interpolate(frame, [30 + i * 10, 50 + i * 10], [0, 1]);
        return (
          <div
            key={i}
            style={{
              width: 30,
              height: height,
              background:
                val === 10
                  ? "linear-gradient(180deg, #ef4444, #b91c1c)"
                  : "linear-gradient(180deg, #3b82f6, #1d4ed8)",
              borderRadius: 4,
              opacity,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 5,
            }}
          >
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 600 }}>
              {val}x
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Glowing warning box
const WarningBox: React.FC<{
  children: React.ReactNode;
  startFrame?: number;
}> = ({ children, startFrame = 70 }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin((frame - startFrame) * 0.1) * 0.2 + 1;
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${pulse})`,
        opacity,
        padding: "15px 25px",
        background: "rgba(239, 68, 68, 0.15)",
        borderRadius: 8,
        border: "2px solid #ef4444",
        boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Fractional Reserve Scene - 部分储备金体系
 * Enhanced with richer animations
 */
export const FractionalReserveScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const goldOpacity = interpolate(frame, [20, 50], [0, 1]);
  const receiptOpacity = interpolate(frame, [40, 70], [0, 1]);
  const lendOpacity = interpolate(frame, [60, 90], [0, 1]);

  const goldScale = interpolate(frame, [20, 50], [0, 1]);
  const receiptScale = interpolate(frame, [40, 70], [0, 1]);

  // Floating animation for elements
  const float1 = Math.sin(frame * 0.05) * 5;
  const float2 = Math.sin(frame * 0.05 + 1) * 5;
  const float3 = Math.sin(frame * 0.05 + 2) * 5;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${50 + Math.sin(frame * 0.02) * 10}% ${50 + Math.cos(frame * 0.02) * 10}%, rgba(255,215,0,0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Money flow animation */}
      <MoneyFlow direction="right" />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        <TypewriterText
          text="Fractional Reserve Banking"
          startFrame={0}
          speed={5}
        />
      </div>

      {/* Step 1: Gold deposit */}
      <div
        style={{
          position: "absolute",
          top: `calc(25% + ${float1}px)`,
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
            boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
          }}
        >
          <span style={{ fontSize: 32, color: "#1a1a2e" }}>💰</span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>
          Step 1
        </div>
        <div style={{ fontSize: 12, color: "#9ca3af" }}>
          Depositors store gold
        </div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>
          储户存放金币
        </div>
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
          animation: "pulse 1s infinite",
        }}
      >
        →
      </div>

      {/* Step 2: Receipt */}
      <div
        style={{
          position: "absolute",
          top: `calc(25% + ${float2}px)`,
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
            boxShadow: "0 0 20px rgba(254, 252, 232, 0.5)",
          }}
        >
          <span style={{ fontSize: 14, color: "#1a1a2e" }}>Receipt</span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>
          Step 2
        </div>
        <div style={{ fontSize: 12, color: "#9ca3af" }}>
          Bank issues receipts
        </div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>
          银行发行收据(货币)
        </div>
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
          top: `calc(25% + ${float3}px)`,
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
            boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
            animation: "pulse 0.5s infinite",
          }}
        >
          <span style={{ fontSize: 28, color: "#fff", fontWeight: 700 }}>
            ×10
          </span>
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", fontWeight: 600 }}>
          Step 3
        </div>
        <div style={{ fontSize: 12, color: "#ef4444" }}>Banks lend 10x!</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 5 }}>
          银行借出10倍
        </div>
      </div>

      {/* Multiplier visualization */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
        }}
      >
        <MultiplierBars />
      </div>

      {/* Key point with animation */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <WarningBox>
          <div style={{ fontSize: 22, color: "#ffd700", fontWeight: 700 }}>
            Banks Create Money from Nothing!
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            只要不多发得太过份，一般不会引起储户怀疑
          </div>
        </WarningBox>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
