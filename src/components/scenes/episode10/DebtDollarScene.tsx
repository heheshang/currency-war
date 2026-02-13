import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// Typewriter text component
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame, speed = 3, style }) => {
  const frame = useCurrentFrame();
  const charCount = Math.max(0, Math.floor((frame - startFrame) / speed));

  return (
    <span style={style}>
      {text.slice(0, charCount)}
      {charCount < text.length && (
        <span style={{ animation: "blink 1s infinite" }}>|</span>
      )}
    </span>
  );
};

// Flowing arrows
const FlowingArrows: React.FC = () => {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: `${35 + i * 15}%`,
            transform: "translateX(-50%)",
            fontSize: 20,
            opacity: 0.4,
            animation: `flowDown ${1.5 + i * 0.3}s infinite linear`,
          }}
        >
          ↓
        </div>
      ))}
      <style>{`
        @keyframes flowDown {
          0% { transform: translateX(-50%) translateY(-10px); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateX(-50%) translateY(10px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Animated step card
const AnimatedStepCard: React.FC<{
  step: number;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  delay: number;
  icon: string;
}> = ({ step, title, subtitle, color, bgColor, delay, icon }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
  const scale = interpolate(frame, [delay, delay + 30], [0.8, 1]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        padding: "15px 25px",
        background: bgColor,
        borderRadius: 8,
        borderLeft: `4px solid ${color}`,
        opacity,
        transform: `scale(${scale})`,
        boxShadow: `0 5px 20px ${color}33`,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: color,
          color: step === 1 ? "#0d1117" : "#fff",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
          fontSize: 18,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, color: "#e8e8e8", fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, color: "#9ca3af" }}>{subtitle}</div>
      </div>
    </div>
  );
};

// Money creation visualization
const MoneyCreationFlow: React.FC = () => {
  const frame = useCurrentFrame();

  const moneyCount = Math.min(100, Math.floor(frame / 5));

  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", overflow: "hidden" }}>
      {Array.from({ length: moneyCount }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${10 + (i % 8) * 12}%`,
            bottom: `${(Math.floor(i / 8) * 15)}%`,
            fontSize: 12,
            opacity: Math.min(1, (frame - i * 5) / 30),
            transform: `scale(${0.5 + Math.min(1, (frame - i * 5) / 30) * 0.5})`,
          }}
        >
          💵
        </div>
      ))}
    </div>
  );
};

// Highlighted text
const HighlightedText: React.FC<{
  children: React.ReactNode;
  color?: string;
  startFrame?: number;
}> = ({ children, color = "#ef4444", startFrame = 70 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const glow = Math.sin(frame * 0.1) * 5 + 10;

  return (
    <span style={{
      opacity,
      color,
      textShadow: `0 0 ${glow}px ${color}`,
      fontWeight: 700,
    }}>
      {children}
    </span>
  );
};

/**
 * Debt Dollar Scene - 债务美元
 * Enhanced with richer animations
 */
export const DebtDollarScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const stepsOpacity = interpolate(frame, [20, 60], [0, 1]);

  // Background pulse
  const bgPulse = Math.sin(frame * 0.03) * 0.03 + 1;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% ${30 * bgPulse}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Flowing arrows */}
      <FlowingArrows />

      {/* Money creation visualization */}
      <MoneyCreationFlow />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        <TypewriterText
          text="How Debt Dollars Are Created"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Steps */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: stepsOpacity,
        }}
      >
        {/* Step 1 */}
        <AnimatedStepCard
          step={1}
          title="Treasury Issues Debt"
          subtitle="财政部发行国债"
          color="#ffd700"
          bgColor="rgba(255, 215, 0, 0.1)"
          delay={20}
          icon="🏛️"
        />

        {/* Arrow */}
        <div style={{
          textAlign: "center",
          fontSize: 24,
          color: "#ffd700",
          marginBottom: 20,
          animation: "bounce 1s infinite"
        }}>
          ↓
        </div>

        {/* Step 2 */}
        <AnimatedStepCard
          step={2}
          title="Fed Buys with Created Money"
          subtitle="美联储用创造出来的货币购买国债"
          color="#3b82f6"
          bgColor="rgba(59, 130, 246, 0.1)"
          delay={50}
          icon="🏦"
        />

        {/* Arrow */}
        <div style={{
          textAlign: "center",
          fontSize: 24,
          color: "#3b82f6",
          marginBottom: 20,
          animation: "bounce 1s infinite"
        }}>
          ↓
        </div>

        {/* Step 3 */}
        <AnimatedStepCard
          step={3}
          title="Commercial Banks Amplify 10x"
          subtitle="商业银行通过储备金制度放大10倍"
          color="#ef4444"
          bgColor="rgba(239, 68, 68, 0.1)"
          delay={80}
          icon="×10"
        />
      </div>

      {/* Result with highlight */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{
          fontSize: 28,
          fontWeight: 700,
          padding: "15px 30px",
          background: "rgba(239, 68, 68, 0.15)",
          borderRadius: 12,
          border: "2px solid #ef4444",
          boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
        }}>
          <HighlightedText color="#ef4444">
            Every Dollar = Debt
          </HighlightedText>
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
          每一个美元都是债务
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
