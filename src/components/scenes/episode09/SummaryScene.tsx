import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Episode09 Summary Scene - 总结
 *
 * Enhanced with:
 * - Timeline animation
 * - Key points with icons
 * - Dramatic final reveal
 * - Reflective ending
 * - NEW: Clock ticking, Final thought spiral, Echo effect
 */

// NEW: Clock ticking effect
const ClockTicking: React.FC<{ frame: number }> = ({ frame }) => {
  const rotation = (frame * 6) % 360;
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.8, 1.2]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "10%",
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "2px solid rgba(255, 215, 0, 0.3)",
        opacity: interpolate(frame, [20, 40], [0, 0.4]),
        transform: `scale(${pulse})`,
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Clock face */}
        <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1" />
        {/* Hour hand */}
        <line
          x1="30"
          y1="30"
          x2={30 + Math.cos((rotation - 90) * (Math.PI / 180)) * 15}
          y2={30 + Math.sin((rotation - 90) * (Math.PI / 180)) * 15}
          stroke="#ffd700"
          strokeWidth="2"
        />
        {/* Minute hand */}
        <line
          x1="30"
          y1="30"
          x2={30 + Math.cos((rotation * 12 - 90) * (Math.PI / 180)) * 20}
          y2={30 + Math.sin((rotation * 12 - 90) * (Math.PI / 180)) * 20}
          stroke="#ffd700"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

// NEW: Final thought spiral
const ThoughtSpiral: React.FC<{ frame: number }> = ({ frame }) => {
  const points = Array.from({ length: 20 }).map((_, i) => {
    const angle = (i / 20) * Math.PI * 2 + frame * 0.02;
    const radius = 20 + i * 3;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    const opacity = interpolate(i, [0, 20], [0.3, 0]);

    return { x, y, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20%",
        left: "50%",
        width: 100,
        height: 100,
        transform: "translate(-50%, -50%)",
        opacity: interpolate(frame, [80, 100], [0, 0.3]),
        pointerEvents: "none",
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2}
            fill={`rgba(255, 215, 0, ${p.opacity})`}
          />
        ))}
      </svg>
    </div>
  );
};

// NEW: Echo rings effect
const EchoRings: React.FC<{ frame: number }> = ({ frame }) => {
  const rings = [0, 1, 2].map((i) => {
    const delay = i * 20;
    const scale = interpolate((frame + delay) % 100, [0, 100], [0.5, 2]);
    const opacity = interpolate((frame + delay) % 100, [0, 50, 100], [0, 0.2, 0]);

    return { scale, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 100,
        height: 100,
        transform: "translate(-50%, -50%)",
        opacity: interpolate(frame, [90, 120], [0, 0.3]),
        pointerEvents: "none",
      }}
    >
      {rings.map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            transform: `scale(${r.scale})`,
            opacity: r.opacity,
          }}
        />
      ))}
    </div>
  );
};

const SUMMARY_ITEMS = [
  { icon: "$", text: "美元通过1973年石油危机起死回生", color: "#ffd700", en: "USD revived via 1973 oil crisis" },
  { icon: "!", text: "'有控制的解体'策略重创第三世界", color: "#ef4444", en: "'Controlled Disintegration' devastated Third World" },
  { icon: "!", text: "日本泡沫经济被蓄意刺破", color: "#fbbf24", en: "Japan bubble deliberately burst" },
  { icon: "!", text: "亚洲金融危机全面爆发", color: "#ef4444", en: "Asian Financial Crisis erupted" },
];

export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const itemsOpacity = interpolate(frame, [15, 60], [0, 1], { extrapolateRight: "clamp" });
  const footerOpacity = interpolate(frame, [70, 110], [0, 1], { extrapolateRight: "clamp" });
  const reflectionOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateRight: "clamp" });

  // Item stagger animation
  const getItemAnimation = (index: number) => {
    const startFrame = 20 + index * 15;
    return {
      opacity: interpolate(frame, [startFrame, startFrame + 20], [0, 1], { extrapolateRight: "clamp" }),
      slide: interpolate(frame, [startFrame, startFrame + 20], [30, 0]),
    };
  };

  // Pulse effect
  const pulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.95, 1.05]);

  // Title scale
  const titleScale = spring({ frame, from: 0.8, to: 1, damping: 15 });

  return (
    <AbsoluteFill style={{ background: "radial-gradient(circle at center, #2d1f1f 0%, #0d0d0d 100%)" }}>
      {/* NEW: Clock ticking */}
      <ClockTicking frame={frame} />

      {/* NEW: Thought spiral */}
      <ThoughtSpiral frame={frame} />

      {/* NEW: Echo rings */}
      <EchoRings frame={frame} />

      {/* Background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${pulse})`,
          background: "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Timeline line */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "15%",
          width: "70%",
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)",
          opacity: itemsOpacity * 0.5,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        Summary
      </div>

      {/* Summary items */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: itemsOpacity,
        }}
      >
        {SUMMARY_ITEMS.map((item, i) => {
          const anim = getItemAnimation(i);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 18,
                padding: "10px 20px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 8,
                transform: `translateX(${anim.slide}px)`,
                opacity: anim.opacity,
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: item.color,
                  marginRight: 15,
                  width: 30,
                }}
              >
                {item.icon}
              </span>
              <span style={{ fontSize: 16, color: item.color }}>{item.text}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: footerOpacity,
        }}
      >
        <div style={{ fontSize: 32, color: "#ffd700", fontWeight: 700 }}>Currency War</div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 5 }}>Episode 9 of 11</div>
      </div>

      {/* Reflection/ThoughtProvoking */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: reflectionOpacity,
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            background: "rgba(255, 215, 0, 0.05)",
            borderRadius: 8,
            borderTop: "1px solid rgba(255, 215, 0, 0.2)",
          }}
        >
          <div style={{ fontSize: 14, color: "#6b7280", fontStyle: "italic" }}>
            "货币战争的本质，是对主权的侵蚀"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
