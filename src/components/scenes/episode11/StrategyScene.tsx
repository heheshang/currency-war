import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * StrategyCard - 策略卡片组件（带入场动画）
 */
const StrategyCard: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  delay: number;
  color: string;
  bgColor: string;
}> = ({ icon, title, subtitle, desc, delay, color, bgColor }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Card entrance animation - slide up with fade
  const slideY = interpolate(progress, [0, 1], [50, 0]);
  const scale = interpolate(progress, [0, 1], [0.8, 1]);

  // Hover pulse effect
  const pulse = Math.sin(frame * 0.05 + delay) * 0.02 + 1;

  return (
    <div
      style={{
        flex: 1,
        padding: "25px 20px",
        background: bgColor,
        borderRadius: 12,
        border: `2px solid ${color}`,
        textAlign: "center",
        opacity: progress,
        transform: `translateY(${slideY}px) scale(${scale * pulse})`,
        transition: "transform 0.3s ease",
        boxShadow: `0 0 ${20 * progress}px ${color}30`,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
      <div
        style={{
          fontSize: 24,
          color,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 14, color: "#9ca3af" }}>{subtitle}</div>
      <div style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>{desc}</div>
    </div>
  );
};

/**
 * GlowingDivider - 发光分割线组件
 */
const GlowingDivider: React.FC<{ delay?: number; color?: string }> = ({
  delay = 0,
  color = "#ffd700",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const width = interpolate(progress, [0, 1], [0, 60]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "18%",
        left: "50%",
        transform: "translateX(-50%)",
        width: `${width}%`,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        opacity: progress,
      }}
    />
  );
};

/**
 * StrategyScene - 高筑墙、广积粮、缓称王
 * Enhanced with rich animations:
 * - Staggered card entrance animations
 * - Card pulse/hover effects
 * - Glowing divider
 * - Slide and fade transitions
 * - Gradient background
 */
export const StrategyScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleSlide = interpolate(frame, [0, 20], [-30, 0]);

  // Summary animation
  const summaryOpacity = interpolate(frame, [80, 110], [0, 1]);

  // Background shimmer
  const shimmer = interpolate(frame % 200, [0, 100, 200], [0, 0.02, 0]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Background shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, rgba(255, 215, 0, ${shimmer}) 0%, transparent 50%)`,
        }}
      />

      {/* Title with slide animation */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: `translateX(-50%) translateX(${titleSlide}px)`,
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
        }}
      >
        China's Strategy
      </div>

      {/* Three strategy cards with staggered animations */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <StrategyCard
          icon="🧱"
          title="高筑墙"
          subtitle="Build financial defense"
          desc={
            <>
              建立金融防御系统
              <br />
              防止外国银行控制货币供应
            </>
          }
          delay={15}
          color="#3b82f6"
          bgColor="rgba(59, 130, 246, 0.15)"
        />

        <StrategyCard
          icon="🌾"
          title="广积粮"
          subtitle="Accumulate gold & silver"
          desc={
            <>
              积累黄金和白银储备
              <br />
              增强货币信心
            </>
          }
          delay={35}
          color="#fbbf24"
          bgColor="rgba(251, 191, 36, 0.15)"
        />

        <StrategyCard
          icon="🐉"
          title="缓称王"
          subtitle="Gradual reform"
          desc={
            <>
              渐进式改革
              <br />
              数十年积累实力
            </>
          }
          delay={55}
          color="#22c55e"
          bgColor="rgba(34, 197, 94, 0.15)"
        />
      </div>

      {/* Glowing divider */}
      <GlowingDivider delay={70} color="#ffd700" />

      {/* Summary */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: summaryOpacity,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#ffd700",
            fontWeight: 600,
            textShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
          }}
        >
          Three Principles for Currency War
        </div>
      </div>
    </AbsoluteFill>
  );
};
