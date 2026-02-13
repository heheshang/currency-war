import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * High Interest Rates Scene - 高利率战争
 *
 * Enhanced with:
 * - Debt counter animation
 * - Rising water/drowning effect
 * - Trap visualization with pulse
 * - Dramatic text reveal
 * - NEW: Drowning bubbles, Hand reaching up, Debt gauge
 */

// Number counter with easing
const useCounterAnimation = (target: number, frame: number, startFrame: number, duration: number = 30): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

// Typewriter effect
const getVisibleText = (text: string, frame: number, startFrame: number, speed: number = 2): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// NEW: Drowning bubbles effect
const DrowningBubbles: React.FC<{ frame: number }> = ({ frame }) => {
  const bubbles = Array.from({ length: 8 }).map((_, i) => {
    const y = interpolate((frame + i * 15) % 100, [0, 100], [80, 20]);
    const x = 20 + (i * 10) % 60;
    const size = 3 + (i % 3) * 2;
    const opacity = interpolate((frame + i * 15) % 100, [0, 50, 100], [0, 0.4, 0]);

    return { y, x, size, opacity };
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {bubbles.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${b.y}%`,
            left: `${b.x}%`,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.3)",
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Hand reaching up effect
const ReachingHand: React.FC<{ frame: number }> = ({ frame }) => {
  const armOpacity = interpolate(frame, [30, 50], [0, 0.5], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: `translateX(-50%)`,
        opacity: armOpacity,
      }}
    >
      <svg width="60" height="80" viewBox="0 0 60 80">
        {/* Arm */}
        <rect x="25" y="40" width="10" height="40" fill="rgba(255, 255, 255, 0.3)" />
        {/* Hand */}
        <circle cx="30" cy="35" r="15" fill="rgba(255, 255, 255, 0.2)" />
        {/* Fingers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={18 + i * 5}
            y={15 + (i % 2) * 3}
            width="3"
            height="20"
            fill="rgba(255, 255, 255, 0.2)"
          />
        ))}
      </svg>
    </div>
  );
};

// NEW: Debt gauge meter
const DebtGauge: React.FC<{ frame: number }> = ({ frame }) => {
  const value = interpolate(frame, [20, 70], [0, 100], { extrapolateRight: "clamp" });
  const rotation = interpolate(value, [0, 100], [-90, 90]);

  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        right: "10%",
        width: 100,
        height: 60,
        opacity: interpolate(frame, [30, 50], [0, 0.5]),
      }}
    >
      <svg width="100" height="60" viewBox="0 0 100 60">
        {/* Gauge background */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Gauge value */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="rgba(239, 68, 68, 0.5)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${value * 1.26} 126`}
        />
        {/* Needle */}
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos((rotation - 90) * (Math.PI / 180)) * 30}
          y2={50 + Math.sin((rotation - 90) * (Math.PI / 180)) * 30}
          stroke="#ef4444"
          strokeWidth="2"
        />
      </svg>
      <div style={{ fontSize: 10, color: "#6b7280", textAlign: "center", marginTop: 5 }}>DEBT LEVEL</div>
    </div>
  );
};

export const HighRatesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const debtOpacity = interpolate(frame, [15, 50], [0, 1], { extrapolateRight: "clamp" });
  const trapOpacity = interpolate(frame, [45, 90], [0, 1], { extrapolateRight: "clamp" });

  // Spring animations
  const titleScale = spring({ frame, from: 0.8, to: 1, damping: 12 });

  // Counter animations
  const debt130Value = useCounterAnimation(130, frame, 20, 25);
  const debt1300Value = useCounterAnimation(1300, frame, 35, 30);

  // Water rising effect
  const waterLevel = interpolate(frame, [20, 80], [0, 100], { extrapolateRight: "clamp" });

  // Trap pulse
  const trapPulse = interpolate(Math.sin(frame * 0.12), [-1, 1], [0.9, 1.1]);

  // Arrow animation
  const arrowPulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.8, 1.3]);

  // NEW: Wave effect
  const waveOffset = frame * 2;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* NEW: Drowning bubbles */}
      <DrowningBubbles frame={frame} />

      {/* NEW: Reaching hand */}
      <ReachingHand frame={frame} />

      {/* NEW: Debt gauge */}
      <DebtGauge frame={frame} />

      {/* Water rising effect */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: `${waterLevel}%`,
          background: "linear-gradient(180deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.2) 100%)",
          opacity: debtOpacity * 0.5,
        }}
      />

      {/* Wave overlay */}
      <div
        style={{
          position: "absolute",
          bottom: `${waterLevel - 5}%`,
          left: 0,
          right: 0,
          height: 20,
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
          transform: `translateX(${waveOffset}px)`,
          opacity: waterLevel > 20 ? 1 : 0,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
        }}
      >
        Third World Debt Crisis
      </div>

      {/* Debt numbers with counters */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: debtOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 20 }}>Developing Nations Debt</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <div>
            <div style={{ fontSize: 36, color: "#9ca3af" }}>${debt130Value}B</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>1970</div>
          </div>
          <div style={{ fontSize: 36, color: "#ffd700", transform: `scale(${arrowPulse})` }}>→</div>
          <div>
            <div
              style={{
                fontSize: 48,
                color: "#ef4444",
                fontWeight: 700,
                textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
              }}
            >
              ${debt1300Value}B
            </div>
            <div style={{ fontSize: 12, color: "#ef4444" }}>1982</div>
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#ef4444",
            marginTop: 15,
            fontWeight: 700,
          }}
        >
          10x Increase
        </div>
      </div>

      {/* Trap with pulsing effect */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          textAlign: "center",
          opacity: trapOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: `rgba(239, 68, 68, ${0.1 + trapPulse * 0.1})`,
            borderRadius: 12,
            border: `2px solid rgba(239, 68, 68, ${0.5 + trapPulse * 0.3})`,
            transform: `scale(${trapPulse})`,
            boxShadow: `0 0 ${20 * trapPulse}px rgba(239, 68, 68, ${0.2 * trapPulse})`,
          }}
        >
          <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 10 }}>
            {getVisibleText("At 20% Interest Rate:", frame, 50, 3)}
          </div>
          <div style={{ fontSize: 20, color: "#ef4444", fontWeight: 700 }}>
            {getVisibleText("The Debt Trap", frame, 65, 3)}
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
            {getVisibleText("发展中国家成为国际银行家刀板上的鱼肉", frame, 75, 2)}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
