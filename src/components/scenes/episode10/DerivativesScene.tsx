import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// Animated number counter with spring
const AnimatedCounter: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}> = ({ value, startFrame, duration = 60, prefix = "", suffix = "", decimals = 0, style }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const animatedValue = spring({ value: progress * value, fps: 30, damping: 15 });

  return (
    <span style={style}>
      {prefix}{animatedValue.toFixed(decimals)}{suffix}
    </span>
  );
};

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

// Expanding danger bubbles
const DangerBubbles: React.FC = () => {
  const frame = useCurrentFrame();

  const bubbles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 50 + i * 30,
      delay: i * 10,
      x: 20 + (i % 4) * 20,
      y: 20 + Math.floor(i / 4) * 40,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {bubbles.map((b) => {
        const scale = interpolate(frame, [b.delay, b.delay + 60], [0, 1.5], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(frame, [b.delay, b.delay + 30], [0, 0.3], {
          extrapolateRight: "clamp",
        });
        const pulse = Math.sin(frame * 0.05 + b.delay) * 0.1 + 1;

        return (
          <div
            key={b.id}
            style={{
              position: "absolute",
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: b.size * scale,
              height: b.size * scale,
              borderRadius: "50%",
              border: "2px dashed #ef4444",
              transform: `translate(-50%, -50%) scale(${scale * pulse})`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

// Comparison bars
const ComparisonBars: React.FC = () => {
  const frame = useCurrentFrame();

  const derivativesHeight = interpolate(frame, [30, 70], [0, 200]);
  const gdpHeight = interpolate(frame, [50, 90], [0, 30]);

  return (
    <div style={{ position: "absolute", bottom: "25%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 40, alignItems: "flex-end", height: 220 }}>
      {/* Derivatives bar */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 80,
            height: derivativesHeight,
            background: "linear-gradient(180deg, #ef4444, #7f1d1d)",
            borderRadius: 8,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 10,
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>$370T</span>
        </div>
        <span style={{ color: "#ef4444", fontSize: 12, marginTop: 10 }}>Derivatives</span>
      </div>

      {/* VS */}
      <div style={{ fontSize: 24, color: "#ffd700", marginBottom: 80 }}>vs</div>

      {/* GDP bar */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 80,
            height: gdpHeight,
            background: "linear-gradient(180deg, #3b82f6, #1d4ed8)",
            borderRadius: 8,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 10,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>$45T</span>
        </div>
        <span style={{ color: "#3b82f6", fontSize: 12, marginTop: 10 }}>Global GDP</span>
      </div>
    </div>
  );
};

// Pulsing warning
const PulsingWarning: React.FC<{
  startFrame?: number;
  children: React.ReactNode;
}> = ({ startFrame = 50, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const glow = Math.sin((frame - startFrame) * 0.1) * 10 + 20;

  return (
    <div
      style={{
        opacity,
        padding: "15px 30px",
        background: "rgba(239, 68, 68, 0.15)",
        borderRadius: 12,
        border: "2px solid #ef4444",
        boxShadow: `0 0 ${glow}px rgba(239, 68, 68, 0.4)`,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

// Rotating danger symbol
const RotatingSymbol: React.FC<{
  symbol: string;
  size?: number;
  delay?: number;
}> = ({ symbol, size = 100, delay = 0 }) => {
  const frame = useCurrentFrame();
  const rotation = (frame * 2) % 360;
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        fontSize: size,
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {symbol}
    </div>
  );
};

/**
 * Derivatives Scene - 金融衍生品
 * Enhanced with richer animations
 */
export const DerivativesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const numberOpacity = interpolate(frame, [20, 60], [0, 1]);
  const dangerOpacity = interpolate(frame, [50, 90], [0, 1]);

  const bubbleScale = interpolate(frame, [30, 60], [0, 1.2]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(239, 68, 68, ${0.1 + Math.sin(frame * 0.05) * 0.05}) 0%, transparent 50%)`,
        }}
      />

      {/* Danger bubbles */}
      <DangerBubbles />

      {/* Rotating warning symbols */}
      <RotatingSymbol symbol="⚠️" size={40} delay={40} />
      <RotatingSymbol symbol="⚠️" size={30} delay={50} />
      <RotatingSymbol symbol="⚠️" size={25} delay={60} />

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
          text="Financial Derivatives"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Central bubble visualization */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${bubbleScale})`,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.1))",
          border: "4px dashed #ef4444",
          opacity: numberOpacity,
          animation: "rotate 20s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 52, color: "#ef4444", fontWeight: 700 }}>
            <AnimatedCounter
              value={370}
              startFrame={30}
              duration={60}
              suffix="T"
            />
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af" }}>Notional Value</div>
        </div>
      </div>

      {/* Comparison visualization */}
      <ComparisonBars />

      {/* Warning */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <PulsingWarning startFrame={80}>
          <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700 }}>
            8× Global GDP!
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            一个没有规则、没有监管、没有任何中央清算机制的巨大赌场
          </div>
        </PulsingWarning>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
