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

// Flowing arrows animation
const FlowingArrows: React.FC<{
  direction?: "up" | "down";
  count?: number;
}> = ({ direction = "down", count = 5 }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          style={{
            fontSize: 20,
            color: direction === "down" ? "#ef4444" : "#4ade80",
            opacity: Math.max(0, 1 - Math.abs((frame * 0.1 + i) % count) / count),
            transform: `translateY(${direction === "down" ? 10 : -10}px)`,
          }}
        >
          {direction === "down" ? "↓" : "↑"}
        </div>
      ))}
    </div>
  );
};

// Strategy step card
const StrategyCard: React.FC<{
  step: number;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  delay: number;
  icon: string;
}> = ({ step, title, subtitle, color, bgColor, delay, icon }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
  const scale = interpolate(frame, [delay, delay + 30], [0.8, 1]);
  const float = Math.sin((frame + delay) * 0.05) * 5;

  return (
    <div
      style={{
        padding: "15px 30px",
        background: bgColor,
        borderRadius: 12,
        border: `2px solid ${color}`,
        transform: `scale(${scale}) translateY(${float}px)`,
        opacity,
        boxShadow: `0 5px 25px ${color}33`,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontSize: 18, color, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 5 }}>{subtitle}</div>
    </div>
  );
};

// Profit counter animation
const ProfitCounter: React.FC = () => {
  const frame = useCurrentFrame();

  const profitScale = interpolate(frame, [50, 90], [0.5, 1.2]);
  const glow = Math.sin(frame * 0.1) * 10 + 20;

  return (
    <div
      style={{
        transform: `scale(${profitScale})`,
        textShadow: `0 0 ${glow}px rgba(74, 222, 128, 0.5)`,
      }}
    >
      <div style={{ fontSize: 52, color: "#4ade80", fontWeight: 700 }}>
        <AnimatedCounter
          value={4}
          startFrame={55}
          duration={40}
          suffix="%"
        />
      </div>
    </div>
  );
};

// Pulsing highlight
const HighlightBox: React.FC<{
  startFrame?: number;
  children: React.ReactNode;
}> = ({ startFrame = 50, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const pulse = Math.sin((frame - startFrame) * 0.1) * 0.05 + 1;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${pulse})`,
        padding: "20px 40px",
        background: "rgba(74, 222, 128, 0.15)",
        borderRadius: 16,
        border: "3px solid #4ade80",
        boxShadow: "0 0 40px rgba(74, 222, 128, 0.4)",
      }}
    >
      {children}
    </div>
  );
};

// Gold coin flow
const GoldCoinFlow: React.FC = () => {
  const frame = useCurrentFrame();

  const coins = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 10,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)" }}>
      {coins.map((c) => {
        const y = ((frame * 2 + c.delay) % 150);
        const opacity = Math.max(0, 1 - Math.abs(y - 75) / 75);

        return (
          <div
            key={c.id}
            style={{
              position: "absolute",
              left: (c.id % 2 === 0 ? -20 : 20),
              top: y,
              fontSize: 20,
              opacity,
            }}
          >
            🪙
          </div>
        );
      })}
    </div>
  );
};

/**
 * Gold Counter Scene - 黄金反击
 * Enhanced with richer animations
 */
export const GoldCounterScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const strategyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const profitOpacity = interpolate(frame, [50, 90], [0, 1]);

  // Animated background
  const bgPulse = Math.sin(frame * 0.03) * 0.03 + 1;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, ${0.1 * bgPulse}) 0%, transparent 50%)`,
        }}
      />

      {/* Gold coin flow */}
      <GoldCoinFlow />

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
          text="Gold Counter-Attack"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Strategy */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: strategyOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 25 }}>Central Banks' Strategy:</div>

        {/* Step 1 */}
        <StrategyCard
          step={1}
          title="1. 'Rent' Gold at 1% Interest"
          subtitle={'以1%利息"租借"黄金'}
          color="#fbbf24"
          bgColor="rgba(251, 191, 36, 0.15)"
          delay={25}
          icon="🏦"
        />

        {/* Down arrow */}
        <div style={{ margin: "15px 0" }}>
          <FlowingArrows direction="down" count={3} />
        </div>

        {/* Step 2 */}
        <StrategyCard
          step={2}
          title="2. Sell Gold, Buy US Bonds at 5%"
          subtitle={'出售黄金，买入5%收益的美国债券'}
          color="#ef4444"
          bgColor="rgba(239, 68, 68, 0.15)"
          delay={55}
          icon="📈"
        />
      </div>

      {/* Profit */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <HighlightBox startFrame={70}>
          <ProfitCounter />
          <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>4%的利差收益！</div>
          <div style={{ fontSize: 14, color: "#6b7280", marginTop: 5 }}>
            这是无本万利的生意
          </div>
        </HighlightBox>
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
