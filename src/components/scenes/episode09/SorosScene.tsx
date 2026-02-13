import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Soros Scene - 索罗斯
 *
 * Enhanced with:
 * - Dramatic entrance animation
 * - Profit counter animation
 * - Shadow/Hitman visualization
 * - Currency attack effect
 * - NEW: Target crosshair, Money trail, Wolf eyes effect
 */

// Typewriter effect
const getVisibleText = (
  text: string,
  frame: number,
  startFrame: number,
  speed: number = 2,
): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// Number counter
const useCounterAnimation = (
  target: number,
  frame: number,
  startFrame: number,
  duration: number = 25,
): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

// NEW: Target crosshair effect
const TargetCrosshair: React.FC<{ frame: number }> = ({ frame }) => {
  const rotation = frame * 2;

  return (
    <div
      style={{
        position: "absolute",
        top: "28%",
        left: "50%",
        width: 150,
        height: 150,
        transform: "translate(-50%, -50%)",
        opacity: interpolate(frame, [30, 50], [0, 0.4]),
        pointerEvents: "none",
      }}
    >
      <svg width="150" height="150" viewBox="0 0 150 150">
        {/* Outer ring */}
        <circle
          cx="75"
          cy="75"
          r="70"
          fill="none"
          stroke="rgba(99, 102, 241, 0.3)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        {/* Inner ring */}
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="none"
          stroke="rgba(99, 102, 241, 0.4)"
          strokeWidth="1"
        />
        {/* Cross lines */}
        <line
          x1="75"
          y1="5"
          x2="75"
          y2="145"
          stroke="rgba(99, 102, 241, 0.3)"
          strokeWidth="1"
        />
        <line
          x1="5"
          y1="75"
          x2="145"
          y2="75"
          stroke="rgba(99, 102, 241, 0.3)"
          strokeWidth="1"
        />
        {/* Rotating element */}
        <g transform={`rotate(${rotation}, 75, 75)`}>
          <line
            x1="75"
            y1="10"
            x2="75"
            y2="30"
            stroke="rgba(99, 102, 241, 0.6)"
            strokeWidth="2"
          />
          <line
            x1="75"
            y1="120"
            x2="75"
            y2="140"
            stroke="rgba(99, 102, 241, 0.6)"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="75"
            x2="30"
            y2="75"
            stroke="rgba(99, 102, 241, 0.6)"
            strokeWidth="2"
          />
          <line
            x1="120"
            y1="75"
            x2="140"
            y2="75"
            stroke="rgba(99, 102, 241, 0.6)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

// NEW: Money trail effect
const MoneyTrail: React.FC<{ frame: number }> = ({ frame }) => {
  const bills = Array.from({ length: 6 }).map((_, i) => {
    const x = interpolate((frame + i * 15) % 80, [0, 80], [20, 80]);
    const y = 30 + Math.sin((frame + i * 20) * 0.1) * 10;
    const opacity = interpolate(
      (frame + i * 15) % 80,
      [0, 40, 80],
      [0, 0.5, 0],
    );
    return { x, y, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: 0,
        right: 0,
        height: "30%",
        overflow: "hidden",
      }}
    >
      {bills.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${b.y}%`,
            left: `${b.x}%`,
            width: 30,
            height: 15,
            background: "rgba(74, 222, 128, 0.3)",
            borderRadius: 2,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Wolf eyes effect
const WolfEyes: React.FC<{ frame: number }> = ({ frame }) => {
  const eyeGlow = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.5, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: interpolate(frame, [40, 60], [0, 0.3]),
      }}
    >
      <div style={{ display: "flex", gap: 20 }}>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              width: 15,
              height: 8,
              background: `rgba(239, 68, 68, ${eyeGlow})`,
              borderRadius: "50%",
              boxShadow: `0 0 ${10 * eyeGlow}px rgba(239, 68, 68, 0.5)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const SorosScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const sorosOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const quoteOpacity = interpolate(frame, [30, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const profitOpacity = interpolate(frame, [50, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Spring animations
  const sorosScale = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 12 },
  });
  const sorosRotate = interpolate(frame, [15, 45], [-30, 0]);

  // Glow pulse
  const glowPulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.5, 1]);

  // Counter animation
  const profitValue = useCounterAnimation(1.1, frame, 55, 30);

  // Currency attack effect
  const currencyPulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [-3, 3]);

  // Shadow effect
  const shadowOffset = interpolate(frame, [30, 70], [20, 5]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* NEW: Target crosshair */}
      <TargetCrosshair frame={frame} />

      {/* NEW: Money trail */}
      <MoneyTrail frame={frame} />

      {/* NEW: Wolf eyes */}
      <WolfEyes frame={frame} />

      {/* Background shadow effect */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: `translate(-50%, -50%) translateX(${shadowOffset}px)`,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.5)",
          filter: "blur(20px)",
          opacity: quoteOpacity * 0.5,
        }}
      />

      {/* Currency attack lines */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          width: "80%",
          height: "60%",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${30 + i * 5}%`,
              left: `${20 + (i % 3) * 30}%`,
              width: 80,
              height: 2,
              background: `rgba(99, 102, 241, ${0.2 + Math.sin(frame * 0.1 + i) * 0.2})`,
              transform: `translateX(${currencyPulse * (i % 2 === 0 ? 1 : -1)}px)`,
              opacity: profitOpacity * 0.5,
            }}
          />
        ))}
      </div>

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
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        George Soros
      </div>

      {/* Soros with dramatic entrance */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${sorosScale}) rotate(${sorosRotate}deg)`,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #4338ca)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: sorosOpacity,
          boxShadow: `0 0 ${30 + glowPulse * 20}px rgba(99, 102, 241, ${0.3 + glowPulse * 0.3})`,
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>S</span>
      </div>

      {/* Quote with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", fontStyle: "italic" }}>
          {getVisibleText('"The Financial Hitman"', frame, 35, 3)}
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
          {getVisibleText("运用游离于监管体系之外的巨额对冲基金", frame, 50, 2)}
        </div>
      </div>

      {/* Profit with counter */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: profitOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>
          1992: Black Wednesday
        </div>
        <div
          style={{
            fontSize: 48,
            color: "#4ade80",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(74, 222, 128, 0.3)",
          }}
        >
          ${profitValue} Billion
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          from attacking British Pound
        </div>

        {/* Attack visualization */}
        <div
          style={{
            marginTop: 15,
            padding: "8px 16px",
            background: "rgba(99, 102, 241, 0.1)",
            borderRadius: 8,
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          <div style={{ fontSize: 12, color: "#6366f1" }}>
            做空英镑获利10亿美元
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
