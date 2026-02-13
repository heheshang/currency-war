import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * ConclusionItem - 结论项组件（带入场动画）
 */
const ConclusionItem: React.FC<{
  icon: string;
  text: string;
  color: string;
  delay: number;
}> = ({ icon, text, color, delay }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Slide in from right
  const slideX = interpolate(progress, [0, 1], [50, 0]);
  const scale = interpolate(progress, [0, 1], [0.8, 1]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 18,
        padding: "10px 20px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: 8,
        opacity: progress,
        transform: `translateX(${slideX}px) scale(${scale})`,
      }}
    >
      <span style={{ fontSize: 24, marginRight: 15 }}>{icon}</span>
      <span style={{ fontSize: 18, color }}>{text}</span>
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
  const width = interpolate(progress, [0, 1], [0, 50]);

  return (
    <div
      style={{
        position: "absolute",
        top: "25%",
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
 * TwinklingStar - 闪烁星星组件
 */
const TwinklingStar: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const twinkle = Math.sin((frame + index * 20) * 0.1) * 0.5 + 0.5;
  const x = (index * 12) % 100;
  const y = (index * 7) % 100;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: 2,
        height: 2,
        borderRadius: "50%",
        background: "#ffd700",
        opacity: twinkle * 0.5,
        boxShadow: `0 0 4px rgba(255, 215, 0, ${twinkle * 0.5})`,
      }}
    />
  );
};

/**
 * Episode11 Ending Scene - 结尾
 * Enhanced with rich animations:
 * - Staggered conclusion items with slide animations
 * - Glowing divider
 * - Twinkling background stars
 * - Fade animations
 * - Gradient background
 */
export const EndingScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleScale = interpolate(frame, [0, 20], [0.8, 1]);

  // Divider animation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dividerOpacity = interpolate(frame, [15, 35], [0, 1]);

  // Content items (staggered)
  const contentOpacity = interpolate(frame, [20, 50], [0, 1]);

  // Footer animation
  const footerOpacity = interpolate(frame, [80, 110], [0, 1]);

  // Background gradient animation
  const gradientShift = interpolate(frame % 400, [0, 400], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% ${30 + gradientShift * 10}%, #1a2f1a 0%, #0d0d0d 100%)`,
      }}
    >
      {/* Twinkling stars background */}
      {[...Array(15)].map((_, i) => (
        <TwinklingStar key={i} index={i} />
      ))}

      {/* Glowing divider */}
      <GlowingDivider delay={15} color="#ffd700" />

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
          textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
        }}
      >
        Conclusion
      </div>

      {/* Content items with staggered animations */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: contentOpacity,
        }}
      >
        <ConclusionItem
          icon="📏"
          text="没有稳定的货币度量衡，就没有平衡的经济"
          color="#e8e8e8"
          delay={25}
        />
        <ConclusionItem
          icon="🥇"
          text="黄金和白银是诚实的货币"
          color="#4ade80"
          delay={40}
        />
        <ConclusionItem
          icon="🧱"
          text="中国必须为货币战争做好准备"
          color="#fbbf24"
          delay={55}
        />
        <ConclusionItem
          icon="⚔️"
          text="高筑墙、广积粮、缓称王"
          color="#ffd700"
          delay={70}
        />
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
        <div
          style={{
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
          }}
        >
          Currency War
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 5 }}>
          Episode 11 - End of Book 1
        </div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 10 }}>
          货币战争系列第一季完
        </div>
      </div>
    </AbsoluteFill>
  );
};
