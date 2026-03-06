import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * AnimatedCounter - 数字计数动画组件
 */
const AnimatedCounter: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  delay: number;
  duration?: number;
  color?: string;
}> = ({ value, suffix = "", prefix = "", delay, duration = 60, color = "#ffd700" }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  const displayValue = Math.round(value * progress);

  return (
    <span style={{ color, fontWeight: 700 }}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

/**
 * PulsingCircle - 脉动圆圈组件
 */
const PulsingCircle: React.FC<{ delay?: number; color?: string; size?: number }> = ({
  delay = 0,
  color = "#3b82f6",
  size = 60,
}) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin((frame + delay) * 0.1) * 0.2 + 1;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `rgba(59, 130, 246, 0.1)`,
        border: `2px solid ${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${pulse})`,
        opacity: 0.5 + pulse * 0.3,
      }}
    />
  );
};

/**
 * ShimmerBar - 闪烁的进度条组件
 */
const ShimmerBar: React.FC<{ progress: number; delay?: number; color?: string }> = ({
  progress,
  delay = 0,
  color = "#ef4444",
}) => {
  const frame = useCurrentFrame();
  const shimmer = Math.sin((frame + delay) * 0.15) * 0.3 + 0.7;

  return (
    <div style={{ width: "100%", marginTop: 10 }}>
      <div
        style={{
          width: "100%",
          height: 8,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: color,
            borderRadius: 4,
            opacity: shimmer,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  );
};

/**
 * Monetary Standard Scene - 货币度量衡
 * Enhanced with rich animations:
 * - Animated counter for dollar value
 * - Pulsing circles for metric units
 * - Shimmer effect on progress bar
 * - Slide and fade animations
 * - Background gradient animation
 */
export const MonetaryStandardScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleSlide = interpolate(frame, [0, 20], [-30, 0]);

  // Analogy animations
  const analogyOpacity = interpolate(frame, [20, 50], [0, 1]);
  const unitFadeIn = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });

  // Problem section with counter animation
  const problemOpacity = interpolate(frame, [50, 90], [0, 1]);
  const problemSlide = interpolate(frame, [50, 90], [30, 0]);

  // Background pulse effect
  const bgPulse = interpolate(frame % 200, [0, 100, 200], [0, 0.05, 0]);

  // Gold line animation
  const lineWidth = interpolate(frame, [30, 80], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, rgba(239, 68, 68, ${bgPulse}) 0%, transparent 70%)`,
        }}
      />

      {/* Gold dividing line */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          width: `${lineWidth}%`,
          height: 2,
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: interpolate(frame, [30, 100], [0, 0.5], { extrapolateRight: "clamp" }),
        }}
      />

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
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        Currency as Measurement
      </div>

      {/* Analogy section */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: analogyOpacity,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#e8e8e8",
            marginBottom: 20,
            opacity: unitFadeIn,
          }}
        >
          货币是经济领域的"度量衡"
        </div>

        {/* Ruler analogy with pulsing circles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginBottom: 20,
          }}
        >
          {[
            { icon: "📏", text: "米", delay: 0, color: "#3b82f6" },
            { icon: "⚖️", text: "千克", delay: 15, color: "#8b5cf6" },
            { icon: "⏱️", text: "秒", delay: 30, color: "#06b6d4" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "15px 25px",
                background: "rgba(59, 130, 246, 0.15)",
                borderRadius: 8,
                border: `1px solid ${item.color}`,
                fontSize: 16,
                color: item.color,
                opacity: unitFadeIn,
                transform: `translateY(${20 * (1 - unitFadeIn)}px)`,
              }}
            >
              <PulsingCircle delay={item.delay} color={item.color} size={20} />
              <div style={{ marginTop: 8 }}>{item.text}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: 16,
            color: "#9ca3af",
            fontStyle: "italic",
            opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          一个每天都在剧烈动荡的货币体系
          <br />
          就如同米和秒的定义时时刻都不停地变化一样荒谬
        </div>
      </div>

      {/* Problem section with animated counter */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: `translateX(-50%) translateX(${problemSlide}px)`,
          width: "70%",
          textAlign: "center",
          opacity: problemOpacity,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 10,
            opacity: problemOpacity,
          }}
        >
          Since 1971, Dollar Lost{" "}
          <AnimatedCounter
            value={94.4}
            suffix="%"
            delay={60}
            duration={60}
            color="#ef4444"
          />{" "}
          Purchasing Power
        </div>

        {/* Shimmer progress bar */}
        <ShimmerBar progress={0.944} delay={90} color="#ef4444" />

        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 15 }}>
          自1971年以来，美元丧失了94.4%的购买力
        </div>
      </div>
    </AbsoluteFill>
  );
};
