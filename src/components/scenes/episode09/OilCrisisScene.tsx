import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Oil Crisis Scene - 石油危机
 *
 * Enhanced with:
 * - Oil price counter animation
 * - Explosion/shockwave effect
 * - Dramatic number reveal
 * - Impact ripple animation
 * - NEW: Oil drop animation, Crisis radar, Shaking effect
 */

// Animated counter for numbers
const useCounterAnimation = (
  target: number,
  frame: number,
  startFrame: number,
  duration: number = 30,
): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  // Easing function for smoother animation
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

// NEW: Oil drop falling animation
const OilDrop: React.FC<{ frame: number; delay: number }> = ({
  frame,
  delay,
}) => {
  const progress = Math.max(0, (frame - delay) / 60);
  const y = interpolate(progress, [0, 1], [0, 80]);
  const opacity = interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = interpolate(progress, [0, 0.1, 1], [0.5, 1, 0.8]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${10 - y}%`,
        left: `${15 + (delay % 7) * 12}%`,
        width: 8,
        height: 12,
        background: "rgba(30, 30, 30, 0.6)",
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        opacity,
        transform: `scale(${scale})`,
      }}
    />
  );
};

// NEW: Crisis radar effect
const CrisisRadar: React.FC<{ frame: number }> = ({ frame }) => {
  const rotation = frame * 3;
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.5, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "10%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        border: "1px solid rgba(239, 68, 68, 0.2)",
        opacity: interpolate(frame, [30, 50], [0, 0.5]),
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          border: "1px solid rgba(239, 68, 68, 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 30,
          borderRadius: "50%",
          border: "1px solid rgba(239, 68, 68, 0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50%",
          height: 1,
          background: `rgba(239, 68, 68, ${0.3 * pulse})`,
          transformOrigin: "left center",
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

// NEW: Shaking screen effect
const ShakingScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const shake = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const x = shake * Math.sin(frame * 0.5) * 3;
  const y = shake * Math.cos(frame * 0.5) * 2;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `translate(${x}px, ${y}px)`,
        opacity: 1 - shake * 0.3,
      }}
    />
  );
};

export const OilCrisisScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dateOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const oilPriceOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const priceReveal = interpolate(frame, [20, 60], [0, 1], {
    extrapolateRight: "clamp",
  });
  const impactOpacity = interpolate(frame, [50, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Spring animations
  const priceScale = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 10, stiffness: 80 },
  });
  const percentScale = spring({
    frame: frame - 20,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 8 },
  });

  // Counter animations
  const price3Value = interpolate(priceReveal, [0, 0.3], [0, 3]);
  const price12Value = useCounterAnimation(12, frame, 25, 25);
  const deficit13Value = useCounterAnimation(13, frame, 55, 20);
  const deficit350Value = useCounterAnimation(350, frame, 65, 25);

  // Explosion ripple effect
  const rippleRadius = interpolate(frame, [15, 40], [0, 300], {
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [15, 40], [0.8, 0], {
    extrapolateRight: "clamp",
  });

  // Background pulse
  const bgPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.95, 1.05]);

  // Price arrow animation
  const arrowPulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.8, 1.2]);

  // NEW: Oil drops
  const oilDrops = Array.from({ length: 6 }).map((_, i) => i * 10);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)",
      }}
    >
      {/* NEW: Crisis radar */}
      <CrisisRadar frame={frame} />

      {/* NEW: Oil drops falling */}
      {oilDrops.map((delay) => (
        <OilDrop key={delay} frame={frame} delay={delay} />
      ))}

      {/* NEW: Shaking screen effect during crisis */}
      {frame > 15 && frame < 40 && <ShakingScreen frame={frame} />}

      {/* Background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, rgba(239, 68, 68, ${0.05 * bgPulse}) 0%, transparent 70%)`,
        }}
      />

      {/* Explosion ripple effect */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: rippleRadius * 2,
          height: rippleRadius * 2,
          borderRadius: "50%",
          border: "3px solid rgba(239, 68, 68, 0.3)",
          transform: "translate(-50%, -50%)",
          opacity: frame > 15 && frame < 45 ? rippleOpacity : 0,
        }}
      />

      {/* Second ripple */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: rippleRadius * 1.5,
          height: rippleRadius * 1.5,
          borderRadius: "50%",
          border: "2px solid rgba(255, 215, 0, 0.2)",
          transform: "translate(-50%, -50%)",
          opacity: frame > 20 && frame < 45 ? rippleOpacity * 0.7 : 0,
        }}
      />

      {/* Date */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 48,
          fontWeight: 700,
          opacity: dateOpacity,
          textShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
        }}
      >
        October 6, 1973
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 24,
          opacity: subtitleOpacity,
        }}
      >
        第四次中东战争爆发
      </div>

      {/* Oil prices */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: oilPriceOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 10 }}>
          World Oil Prices
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <div>
            <div style={{ fontSize: 36, color: "#9ca3af" }}>
              ${Math.floor(price3Value)}
            </div>
            <div style={{ fontSize: 14, color: "#6b7280" }}>Before 1973</div>
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#ffd700",
              transform: `scale(${arrowPulse})`,
            }}
          >
            →
          </div>
          <div>
            <div
              style={{
                fontSize: 48,
                color: "#ef4444",
                fontWeight: 700,
                transform: `scale(${priceScale})`,
                textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
              }}
            >
              ${price12Value}
            </div>
            <div style={{ fontSize: 14, color: "#ef4444" }}>January 1974</div>
          </div>
        </div>

        {/* Percentage with dramatic reveal */}
        <div
          style={{
            marginTop: 30,
            fontSize: 56 * percentScale,
            color: "#ef4444",
            fontWeight: 700,
            textShadow: "0 0 30px rgba(239, 68, 68, 0.7)",
            opacity: priceReveal > 0.5 ? 1 : priceReveal * 2,
          }}
        >
          +400%
        </div>
      </div>

      {/* Impact */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: impactOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 15 }}>
          Developing Nations Devastated
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>
              ${deficit13Value}B
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>
              1973 Trade Deficit
            </div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>
              ${deficit350Value}B
            </div>
            <div style={{ fontSize: 12, color: "#ef4444" }}>
              1974 Trade Deficit
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
