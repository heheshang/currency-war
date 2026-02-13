import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * World Environmental Bank Scene - 世界环保银行
 *
 * Enhanced with:
 * - Earth pulse/glow animation
 * - Nature takeover visualization
 * - Target area reveal
 * - Environmental theme animations
 * - NEW: Tree roots spreading, Leaf scanning, Nature reclaiming
 */

// Typewriter effect
const getVisibleText = (text: string, frame: number, startFrame: number, speed: number = 2): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// NEW: Tree roots spreading effect
const TreeRoots: React.FC<{ frame: number }> = ({ frame }) => {
  const roots = Array.from({ length: 5 }).map((_, i) => {
    const length = interpolate(frame, [30 + i * 10, 70 + i * 10], [0, 30 + i * 10], { extrapolateRight: "clamp" });
    const opacity = interpolate(frame, [30 + i * 10, 50 + i * 10], [0, 0.4]);
    return { length, opacity, angle: -30 + i * 15 };
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 200,
        height: 80,
        opacity: interpolate(frame, [30, 50], [0, 0.3]),
      }}
    >
      {roots.map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: 3,
            height: r.length,
            background: "linear-gradient(180deg, rgba(34, 197, 94, 0.5), rgba(21, 128, 61, 0.3))",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${r.angle}deg)`,
            opacity: r.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Leaf scanning radar
const LeafRadar: React.FC<{ frame: number }> = ({ frame }) => {
  const rotation = frame * 2;
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.3, 0.8]);

  return (
    <div
      style={{
        position: "absolute",
        top: "28%",
        left: "50%",
        width: 200,
        height: 200,
        transform: "translate(-50%, -50%)",
        opacity: interpolate(frame, [20, 40], [0, 0.2]),
        pointerEvents: "none",
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1" />
        <line
          x1="100"
          y1="100"
          x2={100 + Math.cos(rotation * (Math.PI / 180)) * 90}
          y2={100 + Math.sin(rotation * (Math.PI / 180)) * 90}
          stroke={`rgba(34, 197, 94, ${pulse})`}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

// NEW: Nature reclaiming effect
const NatureReclaim: React.FC<{ frame: number }> = ({ frame }) => {
  const cracks = Array.from({ length: 6 }).map((_, i) => {
    const progress = interpolate(frame, [40 + i * 8, 80 + i * 8], [0, 100], { extrapolateRight: "clamp" });
    const opacity = interpolate(frame, [50 + i * 8, 70 + i * 8], [0, 0.3, 0]);
    return { progress, opacity };
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.4 }}>
      {cracks.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 0,
            left: `${10 + i * 15}%`,
            width: 2,
            height: `${c.progress}%`,
            background: "linear-gradient(180deg, transparent, rgba(34, 197, 94, 0.3))",
            opacity: c.opacity,
          }}
        />
      ))}
    </div>
  );
};

export const EnvBankScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const earthOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const conceptOpacity = interpolate(frame, [30, 70], [0, 1], { extrapolateRight: "clamp" });
  const targetOpacity = interpolate(frame, [50, 90], [0, 1], { extrapolateRight: "clamp" });

  // Spring animations
  const earthScale = spring({ frame, from: 0, to: 1, damping: 12 });
  const earthRotate = interpolate(frame, [15, 60], [0, 360]);

  // Glow pulse
  const glowPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.5, 1]);

  // Target counter animation
  const targetValue = interpolate(frame, [55, 85], [0, 50], { extrapolateRight: "clamp" });

  // Leaf particles floating
  const leaves = Array.from({ length: 8 }).map((_, i) => {
    const offset = interpolate(frame + i * 20, [0, 90], [0, 50 + i * 10]);
    const rotation = interpolate(frame + i * 15, [0, 90], [0, 360]);
    return { offset, rotation };
  });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a2f1a 0%, #0d1117 100%)" }}>
      {/* NEW: Tree roots */}
      <TreeRoots frame={frame} />

      {/* NEW: Leaf radar */}
      <LeafRadar frame={frame} />

      {/* NEW: Nature reclaiming */}
      <NatureReclaim frame={frame} />

      {/* Floating leaves background */}
      {leaves.map((leaf, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${20 + leaf.offset * 0.3}%`,
            left: `${10 + i * 12}%`,
            width: 20,
            height: 20,
            background: i % 2 === 0 ? "rgba(34, 197, 94, 0.2)" : "rgba(21, 128, 61, 0.2)",
            borderRadius: "50% 0 50% 0",
            transform: `rotate(${leaf.rotation}deg)`,
            opacity: earthOpacity * 0.5,
          }}
        />
      ))}

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4ade80",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(74, 222, 128, 0.3)",
        }}
      >
        World Environmental Bank
      </div>

      {/* Earth with rotation and glow */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${earthScale}) rotate(${earthRotate}deg)`,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #15803d)",
          opacity: earthOpacity,
          boxShadow: `0 0 ${50 + glowPulse * 30}px rgba(34, 197, 94, ${0.3 + glowPulse * 0.3})`,
        }}
      >
        {/* Continents overlay */}
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Ring around earth */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${earthScale * 1.2})`,
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "2px solid rgba(74, 222, 128, 0.3)",
          opacity: earthOpacity,
        }}
      />

      {/* Concept */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: conceptOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          {getVisibleText('"Debt for Nature Swaps"', frame, 35, 3)}
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          {getVisibleText("债务国可以用自然资源来抵偿债务", frame, 50, 2)}
        </div>
      </div>

      {/* Target with counter */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: targetOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>Target Areas:</div>
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
          }}
        >
          {Math.floor(targetValue)}M km²
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          拉丁美洲、非洲和亚洲的生态土地
        </div>

        {/* Subtle warning */}
        <div
          style={{
            marginTop: 15,
            padding: "8px 16px",
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: 8,
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <div style={{ fontSize: 12, color: "#ef4444" }}>
            真正的目的: 控制全球自然资源
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
