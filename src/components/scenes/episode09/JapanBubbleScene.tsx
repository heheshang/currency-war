import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Japan Bubble Scene - 日本泡沫经济
 *
 * Enhanced with:
 * - Bubble expansion with instability
 * - Nikkei counter animation
 * - Warning flicker effect
 * - Dramatic collapse visualization
 * - NEW: Crack spreading, Tokyo skyline, Falling particles
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

// NEW: Crack spreading effect
const BubbleCracks: React.FC<{ frame: number }> = ({ frame }) => {
  const cracks = Array.from({ length: 8 }).map((_, i) => {
    const progress = interpolate(frame, [60 + i * 5, 90], [0, 100], {
      extrapolateRight: "clamp",
    });
    const opacity = interpolate(frame, [60 + i * 5, 75], [0, 0.6, 0]);
    return { progress, opacity, angle: i * 45 };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      {cracks.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: c.progress,
            height: 1,
            background: "rgba(239, 68, 68, 0.5)",
            transformOrigin: "left center",
            transform: `rotate(${c.angle}deg)`,
            opacity: c.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Falling particles effect
const FallingParticles: React.FC<{ frame: number }> = ({ frame }) => {
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const y = interpolate((frame + i * 10) % 80, [0, 80], [0, 40]);
    const x = 20 + ((i * 7) % 60);
    const opacity = interpolate(
      (frame + i * 10) % 80,
      [0, 40, 80],
      [0, 0.5, 0],
    );
    return { y, x, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        opacity: 0.5,
      }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${p.y}%`,
            left: `${p.x}%`,
            width: 3,
            height: 8,
            background:
              i % 2 === 0 ? "rgba(255, 215, 0, 0.4)" : "rgba(239, 68, 68, 0.4)",
            transform: "rotate(15deg)",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Tokyo skyline silhouette
const TokyoSkyline: React.FC<{ frame: number }> = ({ frame }) => {
  const buildings = [
    { h: 60, w: 15, x: 10 },
    { h: 80, w: 20, x: 25 },
    { h: 100, w: 25, x: 45 },
    { h: 70, w: 18, x: 70 },
    { h: 90, w: 22, x: 88 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "20%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 2,
        opacity: interpolate(frame, [20, 40], [0, 0.3]),
      }}
    >
      {buildings.map((b, i) => (
        <div
          key={i}
          style={{
            width: b.w,
            height: b.h,
            background: "rgba(30, 30, 50, 0.8)",
            position: "relative",
          }}
        >
          {/* Windows */}
          {Array.from({ length: Math.floor(b.h / 10) }).map((_, j) => (
            <div
              key={j}
              style={{
                position: "absolute",
                top: 5 + j * 10,
                left: "20%",
                width: "60%",
                height: 4,
                background:
                  j % 3 === 0
                    ? "rgba(255, 215, 0, 0.3)"
                    : "rgba(100, 100, 150, 0.2)",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const JapanBubbleScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const plazaOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const bubbleOpacity = interpolate(frame, [30, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const numbersOpacity = interpolate(frame, [50, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Spring animations
  const bubbleScale = spring({
    frame: frame - 30,
    fps: 30,
    from: 0,
    to: 1.5,
    config: { damping: 10 },
  });
  const bubbleWobble = interpolate(
    Math.sin(frame * 0.15),
    [-1, 1],
    [-0.05, 0.05],
  );

  // Counter animations
  const stockValue = useCounterAnimation(300, frame, 55, 20);
  const nikkeiValue = useCounterAnimation(39915, frame, 65, 30);

  // Warning flicker
  const flicker = interpolate(Math.sin(frame * 0.3), [-1, 1], [0.8, 1]);

  // Bubble floating particles
  const bubbles = Array.from({ length: 12 }).map((_, i) => {
    const offset = interpolate(frame + i * 15, [0, 90], [0, 30 + i * 5]);
    return { offset };
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
      }}
    >
      {/* NEW: Falling particles */}
      <FallingParticles frame={frame} />

      {/* NEW: Tokyo skyline */}
      <TokyoSkyline frame={frame} />

      {/* Background subtle warning */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, rgba(255, 215, 0, ${0.02 * flicker}) 0%, transparent 60%)`,
          opacity: bubbleOpacity,
        }}
      />

      {/* Floating bubble particles */}
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${60 - bubble.offset}%`,
            left: `${15 + i * 7}%`,
            width: 10 + (i % 3) * 5,
            height: 10 + (i % 3) * 5,
            borderRadius: "50%",
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid rgba(255, 215, 0, 0.2)",
            opacity: bubbleOpacity * 0.5,
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
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        Japan's Bubble Economy
      </div>

      {/* Plaza Accord with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: plazaOpacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#e8e8e8", fontWeight: 600 }}>
          {getVisibleText("September 1985", frame, 15, 3)}
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af" }}>
          {getVisibleText("Plaza Accord - 日元升值", frame, 30, 3)}
        </div>
      </div>

      {/* Bubble with wobble */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${bubbleScale}) rotate(${bubbleWobble * 10}deg)`,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `linear-gradient(135deg, rgba(255, 215, 0, ${0.2 + flicker * 0.1}), rgba(239, 68, 68, ${0.2 + flicker * 0.1}))`,
          border: `3px solid rgba(255, 215, 0, ${0.5 + flicker * 0.5})`,
          opacity: bubbleOpacity,
          boxShadow: `0 0 ${30 * bubbleScale}px rgba(255, 215, 0, ${0.2 + flicker * 0.2})`,
        }}
      >
        {/* NEW: Bubble cracks */}
        {frame > 60 && <BubbleCracks frame={frame} />}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 32,
            fontWeight: 700,
            color: "#ffd700",
          }}
        >
          BUBBLE
        </div>
      </div>

      {/* Numbers with counters */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: numbersOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 28,
              color: "#ffd700",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
            }}
          >
            +{stockValue}%
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Stock Prices</div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>1983-1989</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 28,
              color: "#ffd700",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
            }}
          >
            {nikkeiValue.toLocaleString()}
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Nikkei Peak</div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>Dec 1989</div>
        </div>
      </div>

      {/* Warning subtitle */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 14,
          opacity: interpolate(frame, [70, 90], [0, 1]),
        }}
      >
        泡沫即将被刺破...
      </div>
    </AbsoluteFill>
  );
};
