import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * WarningPulse - 警告脉动效果组件
 */
const WarningPulse: React.FC<{ delay?: number; color?: string }> = ({
  delay = 0,
  color = "#ef4444",
}) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin((frame + delay) * 0.15) * 0.3 + 1;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        transform: `scale(${pulse})`,
        opacity: pulse * 0.5,
        pointerEvents: "none",
      }}
    />
  );
};

/**
 * AnimatedArrow - 动画箭头组件
 */
const AnimatedArrow: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 15, delay + 30], [0, 1, 0], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame % 30, [0, 30], [0, 15], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontSize: 16,
        color: "#9ca3af",
        marginTop: 8,
        marginBottom: 8,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      ↓
    </div>
  );
};

/**
 * DebtObesityScene - 债务货币的肥胖
 * Enhanced with rich animations:
 * - Warning pulse effect
 * - Animated arrows
 * - Growing person animation
 * - Slide and fade transitions
 * - Attention-grabbing effects
 */
export const DebtObesityScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titlePulse = Math.sin(frame * 0.08) * 0.1 + 1;

  // Person/circle animation
  const personDelay = 20;
  const personScale = interpolate(frame, [personDelay, personDelay + 40], [0, 1.3], {
    extrapolateRight: "clamp",
  });
  const personOpacity = interpolate(frame, [personDelay, personDelay + 20], [0, 1]);

  // Analogy cards animation
  const cardOpacity = interpolate(frame, [40, 70], [0, 1]);
  const cardSlide = interpolate(frame, [40, 70], [20, 0]);

  // Meaning section
  const meaningOpacity = interpolate(frame, [70, 100], [0, 1]);

  // Background warning pulse
  const warningPulse = Math.sin(frame * 0.1) * 0.1 + 0.9;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
        transform: `scale(${warningPulse})`,
      }}
    >
      {/* Warning background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, rgba(239, 68, 68, ${0.05 * warningPulse}) 0%, transparent 60%)`,
        }}
      />

      {/* Title with pulse effect */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%) scale(${titlePulse})`,
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
        }}
      >
        Debt-Driven Growth
      </div>

      {/* Analogy section */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: cardOpacity,
        }}
      >
        {/* Person with growing animation */}
        <div
          style={{
            position: "relative",
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WarningPulse delay={personDelay} color="#ef4444" />
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${personScale})`,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)",
              opacity: personOpacity,
            }}
          >
            <span style={{ fontSize: 48 }}>🧍</span>
          </div>
        </div>

        <AnimatedArrow delay={50} />

        {/* Scale card */}
        <div
          style={{
            marginTop: 5,
            padding: "15px 30px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: 8,
            border: "2px solid #ef4444",
            opacity: interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${cardSlide}px)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#ef4444",
              fontWeight: 700,
            }}
          >
            "Weight Gain = Health"
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>如同用体重增加来衡量健康</div>
        </div>

        <AnimatedArrow delay={70} />

        {/* Steroid card */}
        <div
          style={{
            marginTop: 5,
            padding: "15px 30px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: 8,
            border: "2px solid #ef4444",
            opacity: interpolate(frame, [75, 95], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${cardSlide}px)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#ef4444",
              fontWeight: 700,
            }}
          >
            "Like Steroid Abuse"
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>如同类固醇滥用</div>
        </div>
      </div>

      {/* Meaning section */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: meaningOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8" }}>债务货币体系下:</div>
        <div style={{ fontSize: 16, color: "#ef4444", marginTop: 8 }}>
          GDP增长 = 更多债务 = 更多货币
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          停止债务增长，经济就会萎缩
        </div>
      </div>
    </AbsoluteFill>
  );
};
