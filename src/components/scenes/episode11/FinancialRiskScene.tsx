import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * WarningPulse - 警告脉动效果组件
 */
const WarningPulse: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin((frame + delay) * 0.12) * 0.3 + 1;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle, rgba(239, 68, 68, ${0.05 * pulse}) 0%, transparent 70%)`,
        animation: "pulse 2s ease-in-out infinite",
      }}
    />
  );
};

/**
 * ShakingText - 震动文字组件
 */
const ShakingText: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const shake = Math.sin(frame * 0.3 + delay) * (frame > delay ? 2 : 0);

  return (
    <span style={{ transform: `translateX(${shake}px)` }}>
      {children}
    </span>
  );
};

/**
 * FlashingBorder - 闪烁边框组件
 */
const FlashingBorder: React.FC<{ delay?: number; color?: string }> = ({
  delay = 0,
  color = "#ef4444",
}) => {
  const frame = useCurrentFrame();
  const flash = Math.sin((frame + delay) * 0.15) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        border: `3px solid ${color}`,
        borderRadius: 12,
        opacity: flash,
        pointerEvents: "none",
      }}
    />
  );
};

/**
 * GlowingOrb - 发光球体组件（用于装饰）
 */
const GlowingOrb: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const x = interpolate((frame + index * 30) % 200, [0, 200], [100, 0]);
  const y = Math.sin((frame + index * 50) * 0.02) * 20;
  const opacity = interpolate(frame % 100, [0, 50, 100], [0, 0.3, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${30 + y}%`,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#ef4444",
        opacity,
        boxShadow: "0 0 10px #ef4444",
      }}
    />
  );
};

/**
 * FinancialRiskScene - 金融开放风险
 * Enhanced with rich animations:
 * - Warning pulse background effect
 * - Shaking text animation
 * - Flashing border
 * - Floating orbs
 * - Slide and fade transitions
 * - Glowing effects
 */
export const FinancialRiskScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titlePulse = Math.sin(frame * 0.1) * 0.05 + 1;

  // Risk section
  const riskOpacity = interpolate(frame, [20, 50], [0, 1]);
  const riskSlide = interpolate(frame, [20, 50], [30, 0]);

  // Warning section
  const warningOpacity = interpolate(frame, [50, 90], [0, 1]);
  const warningSlide = interpolate(frame, [50, 90], [20, 0]);

  // Border flash
  const borderFlash = Math.sin(frame * 0.12) * 0.3 + 0.7;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Background pulse */}
      <WarningPulse delay={0} />

      {/* Floating orbs */}
      {[0, 1, 2, 3].map((i) => (
        <GlowingOrb key={i} index={i} />
      ))}

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
        Financial Opening Risks
      </div>

      {/* Risk section with slide animation */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: `translate(-50%, -50%) translateX(${riskSlide}px)`,
          width: "80%",
          textAlign: "center",
          opacity: riskOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#e8e8e8", marginBottom: 20 }}>The Biggest Risk:</div>

        {/* Flashing border */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <FlashingBorder delay={30} color="#ef4444" />
          <div
            style={{
              padding: "20px 40px",
              background: "rgba(239, 68, 68, 0.2)",
              borderRadius: 12,
              border: "2px solid #ef4444",
            }}
          >
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>
              <ShakingText delay={40}>Lack of "War" Awareness</ShakingText>
            </div>
            <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>
              缺乏"战争"意识
            </div>
          </div>
        </div>
      </div>

      {/* Warning section */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: `translateX(-50%) translateY(${warningSlide}px)`,
          width: "70%",
          textAlign: "center",
          opacity: warningOpacity,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#fbbf24",
            marginBottom: 15,
            textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
          }}
        >
          货币战争不宣而战
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>金融开放必须谨慎推进</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          必须在建立强大金融防御体系之后
        </div>
      </div>

      {/* Red warning line at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 2,
          background: `linear-gradient(90deg, transparent, #ef4444 ${borderFlash}, transparent)`,
          opacity: borderFlash,
        }}
      />
    </AbsoluteFill>
  );
};
