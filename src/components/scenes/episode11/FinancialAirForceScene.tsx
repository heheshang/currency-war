import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * FlyingPlane - 飞行飞机组件
 */
const FlyingPlane: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Plane flies from left to right with bobbing motion
  const x = interpolate(progress, [0, 1], [-20, 120]);
  const y = Math.sin(progress * Math.PI * 4) * 5;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `calc(30% + ${y}px)`,
        transform: `translateY(-50%) scale(${progress})`,
        opacity: progress,
        zIndex: 10,
      }}
    >
      <span style={{ fontSize: 48 }}>✈️</span>
    </div>
  );
};

/**
 * CloudEffect - 云层效果组件
 */
const CloudEffect: React.FC<{ index: number; delay?: number }> = ({ index, delay = 0 }) => {
  const frame = useCurrentFrame();
  const x = interpolate((frame + delay) % 200, [0, 200], [100, -20]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${20 + index * 15}%`,
        opacity: 0.3,
        fontSize: 24,
      }}
    >
      ☁️
    </div>
  );
};

/**
 * RotatingBorder - 旋转边框组件
 */
const RotatingBorder: React.FC<{ delay?: number; color?: string }> = ({
  delay = 0,
  color = "rgba(59, 130, 246, 0.3)",
}) => {
  const frame = useCurrentFrame();
  const rotation = (frame + delay) * 0.5;

  return (
    <div
      style={{
        position: "absolute",
        width: 160,
        height: 160,
        borderRadius: "50%",
        border: `2px dashed ${color}`,
        transform: `rotate(${rotation}deg)`,
        opacity: 0.5,
      }}
    />
  );
};

/**
 * FinancialAirForceScene - 金融是战略空军
 * Enhanced with rich animations:
 * - Flying plane animation with path
 * - Cloud effects in background
 * - Rotating border around main element
 * - Slide and fade transitions
 * - Glowing effects
 */
export const FinancialAirForceScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleSlide = interpolate(frame, [0, 20], [-30, 0]);

  // Air Force circle animation
  const circleDelay = 20;
  const circleOpacity = interpolate(frame, [circleDelay, circleDelay + 30], [0, 1]);
  const circleScale = interpolate(frame, [circleDelay, circleDelay + 40], [0, 1], {
    extrapolateRight: "clamp",
  });
  const circlePulse = Math.sin(frame * 0.08) * 0.05 + 1;

  // Content fade in
  const contentOpacity = interpolate(frame, [40, 70], [0, 1]);
  const contentSlide = interpolate(frame, [40, 70], [20, 0]);

  // Quote section
  const quoteOpacity = interpolate(frame, [70, 100], [0, 1]);

  // Background animation
  const bgPulse = interpolate(frame % 300, [0, 150, 300], [0, 0.03, 0]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Background blue pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, ${bgPulse}) 0%, transparent 60%)`,
        }}
      />

      {/* Cloud effects */}
      {[0, 1, 2].map((i) => (
        <CloudEffect key={i} index={i} delay={i * 30} />
      ))}

      {/* Title with slide animation */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%) translateX(${titleSlide}px)`,
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
        }}
      >
        Finance: Strategic Air Force
      </div>

      {/* Air Force analogy with rotating border */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: circleOpacity,
        }}
      >
        {/* Rotating border */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <RotatingBorder delay={circleDelay} color="rgba(59, 130, 246, 0.4)" />
        </div>

        {/* Main circle with pulse */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${circleScale * circlePulse})`,
            boxShadow: "0 0 50px rgba(59, 130, 246, 0.6)",
            margin: "0 auto 20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 48 }}>✈️</span>
        </div>

        {/* Flying planes */}
        <FlyingPlane delay={circleDelay + 20} />

        <div
          style={{
            fontSize: 18,
            color: "#e8e8e8",
            marginBottom: 10,
            opacity: contentOpacity,
            transform: `translateY(${contentSlide}px)`,
          }}
        >
          没有金融空军掩护
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#ef4444",
            fontWeight: 700,
            opacity: contentOpacity,
            transform: `translateY(${contentSlide}px)`,
          }}
        >
          国家只能在价格层面竞争
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#9ca3af",
            marginTop: 5,
            opacity: contentOpacity,
            transform: `translateY(${contentSlide}px)`,
          }}
        >
          无法在货币层面获得优势
        </div>
      </div>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#ffd700",
            fontWeight: 600,
            textShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
          }}
        >
          金融是现代战争的核心
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          而货币是金融战争的武器
        </div>
      </div>
    </AbsoluteFill>
  );
};
