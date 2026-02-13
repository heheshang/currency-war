import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Volcker Scene - 保罗·沃尔克
 *
 * Enhanced with:
 * - FED symbol rotation and glow
 * - Interest rate counter animation
 * - Dramatic quote reveal
 * - Power concentration visualization
 * - NEW: Power circle expansion, Chain of control, Blood pressure effect
 */

// Typewriter effect
const getVisibleText = (text: string, frame: number, startFrame: number, speed: number = 2): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// Number counter
const useCounterAnimation = (target: number, frame: number, startFrame: number, duration: number = 25): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

// NEW: Power circle expanding effect
const PowerCircle: React.FC<{ frame: number }> = ({ frame }) => {
  const circles = [0, 1, 2, 3].map((i) => {
    const delay = i * 20;
    const progress = Math.max(0, Math.min(1, (frame - delay) / 60));
    const scale = interpolate(progress, [0, 1], [0.5, 2.5]);
    const opacity = interpolate(progress, [0, 0.3, 1], [0.3, 0.2, 0]);

    return { scale, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "35%",
        left: "50%",
        width: 150,
        height: 150,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      {circles.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(255, 215, 0, 0.2)",
            transform: `scale(${c.scale})`,
            opacity: c.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Chain of control visualization
const ChainOfControl: React.FC<{ frame: number }> = ({ frame }) => {
  const links = Array.from({ length: 5 }).map((_, i) => {
    const offset = interpolate(frame * 0.5 + i * 15, [0, 50], [0, (i % 2 === 0 ? 10 : -10)]);
    const opacity = interpolate(frame, [30 + i * 10, 50 + i * 10], [0, 0.3]);
    return { offset, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 200,
        height: 60,
        transform: "translate(-50%, -50%)",
        opacity: interpolate(frame, [40, 60], [0, 0.5]),
      }}
    >
      {links.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: `${20 + i * 15}%`,
            width: 20,
            height: 8,
            background: "rgba(255, 215, 0, 0.3)",
            borderRadius: "4px",
            transform: `translateY(${l.offset}px)`,
            opacity: l.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Blood pressure / vital sign effect
const VitalSign: React.FC<{ frame: number }> = ({ frame }) => {
  const linePoints = Array.from({ length: 100 }).map((_, i) => {
    const x = (i / 100) * 100;
    const y = 50 + Math.sin((i + frame * 2) * 0.3) * 15 + Math.sin((i + frame * 3) * 0.1) * 10;
    return { x, y };
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "25%",
        left: "10%",
        width: 150,
        height: 60,
        opacity: interpolate(frame, [60, 80], [0, 0.4]),
      }}
    >
      <svg width="150" height="60" viewBox="0 0 100 60">
        <polyline
          points={linePoints.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="rgba(239, 68, 68, 0.5)"
          strokeWidth="1"
        />
      </svg>
      <div style={{ fontSize: 8, color: "#6b7280", marginTop: 2 }}>Global Economy Vital Signs</div>
    </div>
  );
};

export const VolckerScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });
  const fedOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [30, 70], [0, 1], { extrapolateRight: "clamp" });
  const ratesOpacity = interpolate(frame, [50, 90], [0, 1], { extrapolateRight: "clamp" });

  // Spring animations
  const fedScale = spring({ frame, from: 0, to: 1, damping: 12 });
  const fedRotate = interpolate(frame, [15, 45], [-180, 0]);

  // Interest rate counter
  const rate11Value = useCounterAnimation(11, frame, 50, 20);
  const rate20Value = useCounterAnimation(20, frame, 60, 25);

  // Glow pulse
  const glowPulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.3, 1]);

  // Quote highlight
  const quoteHighlight = interpolate(frame, [40, 90], [0, 1], { extrapolateRight: "clamp" });

  // NEW: Warning red overlay
  const warningPulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.02, 0.05]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* NEW: Warning pulse overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, rgba(239, 68, 68, ${warningPulse}) 0%, transparent 60%)`,
          opacity: ratesOpacity,
        }}
      />

      {/* NEW: Power circle expansion */}
      <PowerCircle frame={frame} />

      {/* NEW: Chain of control */}
      <ChainOfControl frame={frame} />

      {/* NEW: Vital sign monitor */}
      <VitalSign frame={frame} />

      {/* Background energy rotation */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          width: 300,
          height: 300,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.03), transparent)",
          animation: "spin 20s linear infinite",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        Paul Volcker
      </div>

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontSize: 18,
          opacity: subtitleOpacity,
        }}
      >
        美联储主席 (1979-1987)
      </div>

      {/* Fed symbol with rotation and glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${fedScale}) rotate(${fedRotate}deg)`,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1e3a5a, #0d1117)",
          border: `3px solid rgba(255, 215, 0, ${0.5 + glowPulse * 0.5})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: fedOpacity,
          boxShadow: `0 0 ${20 + glowPulse * 30}px rgba(255, 215, 0, ${0.2 + glowPulse * 0.3})`,
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 700, color: "#ffd700" }}>FED</span>
      </div>

      {/* Quote with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#e8e8e8", fontStyle: "italic" }}>
          {getVisibleText('"A controlled disintegration', frame, 30, 2)}
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", fontStyle: "italic" }}>
          {getVisibleText("of the world economy\"", frame, 45, 2)}
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
          {getVisibleText("would be a reasonable goal for the 1980s", frame, 55, 2)}
        </div>

        {/* Highlighted dangerous quote */}
        <div
          style={{
            marginTop: 15,
            padding: "10px 20px",
            background: `rgba(239, 68, 68, ${quoteHighlight * 0.2})`,
            borderRadius: 8,
            borderLeft: `3px solid rgba(239, 68, 68, ${quoteHighlight})`,
          }}
        >
          <div style={{ fontSize: 14, color: "#ef4444", fontWeight: 600 }}>
            "有控制的解体" - 保罗·沃尔克
          </div>
        </div>
      </div>

      {/* Interest rates with counter */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 30,
          opacity: ratesOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, color: "#9ca3af" }}>{rate11Value}%</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>1979</div>
        </div>
        <div style={{ fontSize: 36, color: "#ffd700" }}>→</div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 48,
              color: "#ef4444",
              fontWeight: 700,
              textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
            }}
          >
            {rate20Value}%
          </div>
          <div style={{ fontSize: 12, color: "#ef4444" }}>1981</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
