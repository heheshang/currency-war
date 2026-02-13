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

// Gold bar stack
const GoldBarStack: React.FC = () => {
  const frame = useCurrentFrame();

  const bars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: 30 + i * 15,
      delay: 20 + i * 15,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
      {bars.map((b, i) => {
        const opacity = interpolate(frame, [b.delay, b.delay + 20], [0, 1]);
        const y = interpolate(frame, [b.delay, b.delay + 30], [50, 0]);

        return (
          <div
            key={b.id}
            style={{
              width: 70,
              height: 35,
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              borderRadius: 4,
              transform: `translateY(${y}px)`,
              opacity,
              boxShadow: "0 5px 20px rgba(251, 191, 36, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 12, color: "#1a1a2e", fontWeight: 700 }}>Gold</span>
          </div>
        );
      })}
    </div>
  );
};

// Caged gold visualization
const CagedGold: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)" }}>
      {/* Gold bars */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 30,
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              borderRadius: 2,
              boxShadow: "0 5px 15px rgba(251, 191, 36, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Cage bars */}
      <svg width="200" height="80" style={{ position: "absolute", top: -10, left: -10 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={i}
            x1={20 + i * 30}
            y1="0"
            x2={20 + i * 30}
            y2="60"
            stroke="#6b7280"
            strokeWidth="3"
            opacity={0.7}
          />
        ))}
        <line x1="0" y1="0" x2="170" y2="0" stroke="#6b7280" strokeWidth="3" />
        <line x1="0" y1="30" x2="170" y2="30" stroke="#6b7280" strokeWidth="3" />
        <line x1="0" y1="60" x2="170" y2="60" stroke="#6b7280" strokeWidth="3" />
      </svg>
    </div>
  );
};

// Pulsing price
const PulsingPrice: React.FC<{
  targetValue: number;
  prefix?: string;
  suffix?: string;
  startFrame: number;
  color?: string;
}> = ({ targetValue, prefix = "", suffix = "", startFrame, color = "#ef4444" }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 60));
  const value = progress * targetValue;
  const pulse = Math.sin(frame * 0.1) * 0.1 + 1;

  return (
    <div style={{ transform: `scale(${pulse})` }}>
      <span style={{ fontSize: 56, color, fontWeight: 700 }}>
        {prefix}{value.toFixed(0)}{suffix}
      </span>
    </div>
  );
};

// Highlighted event box
const EventBox: React.FC<{
  startFrame?: number;
  children: React.ReactNode;
}> = ({ startFrame = 40, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const glow = Math.sin((frame - startFrame) * 0.1) * 5 + 10;

  return (
    <div
      style={{
        opacity,
        padding: "20px 30px",
        background: "rgba(251, 191, 36, 0.1)",
        borderRadius: 12,
        border: "2px solid #fbbf24",
        boxShadow: `0 0 ${glow}px rgba(251, 191, 36, 0.3)`,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

// Downward arrow animation
const DownwardArrow: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translateX(-50%)", fontSize: 40, color: "#ef4444" }}>
      <div style={{ animation: "fall 1s infinite" }}>↓</div>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

/**
 * Gold Prison Scene - 被软禁的黄金
 * Enhanced with richer animations
 */
export const GoldPrisonScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);
  const priceOpacity = interpolate(frame, [50, 90], [0, 1]);

  const goldScale = interpolate(frame, [30, 60], [0, 1]);

  // Animated background gradient
  const bgPulse = Math.sin(frame * 0.03) * 0.03 + 1;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, rgba(251, 191, 36, ${0.1 * bgPulse}) 0%, transparent 50%)`,
        }}
      />

      {/* Gold bar stack */}
      <GoldBarStack />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fbbf24",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
        }}
      >
        <TypewriterText
          text="Gold Imprisoned"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Caged gold */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 10,
          opacity: contentOpacity,
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 30,
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              borderRadius: 2,
              transform: `scale(${goldScale})`,
              boxShadow: "0 5px 15px rgba(251, 191, 36, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Cage visualization */}
      <svg
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: contentOpacity,
        }}
        width="220"
        height="60"
      >
        {Array.from({ length: 7 }, (_, i) => (
          <line
            key={i}
            x1={10 + i * 30}
            y1="0"
            x2={10 + i * 30}
            y2="50"
            stroke="#6b7280"
            strokeWidth="3"
            opacity={0.6}
          />
        ))}
        <line x1="0" y1="0" x2="200" y2="0" stroke="#6b7280" strokeWidth="3" />
        <line x1="0" y1="50" x2="200" y2="50" stroke="#6b7280" strokeWidth="3" />
      </svg>

      {/* 1999 event */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <EventBox>
          <div style={{ fontSize: 26, color: "#e8e8e8", fontWeight: 600 }}>
            1999: England Sold Half Its Gold
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            英国财政部在黄金历史最低点出售了一半的黄金储备
          </div>
        </EventBox>
      </div>

      {/* Downward arrow */}
      <DownwardArrow />

      {/* Price */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: priceOpacity,
        }}
      >
        <PulsingPrice
          targetValue={280}
          prefix="$"
          suffix="/oz"
          startFrame={60}
          color="#ef4444"
        />
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>Near Historic Lows / 接近历史低点</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 10 }}>
          国际银行家刻意压低金价
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
