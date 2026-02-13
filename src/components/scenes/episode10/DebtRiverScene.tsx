import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// Animated number counter with spring
const AnimatedCounter: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}> = ({ value, startFrame, duration = 60, prefix = "", suffix = "", decimals = 0, style }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const animatedValue = spring({ value: progress * value, fps: 30, damping: 15 });

  return (
    <span style={style}>
      {prefix}{animatedValue.toFixed(decimals)}{suffix}
    </span>
  );
};

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

// Animated rising river/lake
const DebtRisingRiver: React.FC = () => {
  const frame = useCurrentFrame();

  // River rises from 0 to full
  const riverHeight = interpolate(frame, [30, 90], [0, 350], { extrapolateRight: "clamp" });

  // Wave animation
  const waveOffset = frame * 0.5;

  // Danger level markers
  const markers = [
    { level: 50, label: "Warning", color: "#fbbf24" },
    { level: 100, label: "Danger", color: "#f97316" },
    { level: 150, label: "Critical", color: "#ef4444" },
  ];

  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70%" }}>
      {/* Water body */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: `translateX(-50%)`,
          width: "70%",
          height: riverHeight,
          background: "linear-gradient(180deg, #dc2626 0%, #7f1d1d 50%, #450a0a 100%)",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: "hidden",
        }}
      >
        {/* Animated waves */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${10 + i * 20}%`,
              left: "-50%",
              width: "200%",
              height: 20,
              background: `rgba(255,255,255,${0.05 - i * 0.01})`,
              borderRadius: "50%",
              transform: `translateX(${waveOffset * (1 + i * 0.2)}px)`,
              animation: `wave ${2 + i * 0.5}s infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Water level markers */}
      {markers.map((m, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: `${m.level}px`,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "4px 12px",
            background: "rgba(0,0,0,0.5)",
            borderRadius: 4,
            border: `2px solid ${m.color}`,
            opacity: riverHeight > m.level ? 1 : 0,
          }}
        >
          <span style={{ color: m.color, fontSize: 12, fontWeight: 600 }}>{m.label}</span>
        </div>
      ))}
    </div>
  );
};

// Pulsing warning
const PulsingWarning: React.FC<{
  startFrame?: number;
}> = ({ startFrame = 50 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const pulse = Math.sin((frame - startFrame) * 0.15) * 0.2 + 1;

  return (
    <div
      style={{
        transform: `scale(${pulse})`,
        opacity,
        padding: "15px 25px",
        background: "rgba(239, 68, 68, 0.2)",
        borderRadius: 12,
        border: "2px solid #ef4444",
        boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)",
      }}
    >
      <style>{`
        @keyframes warningPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.6); }
        }
      `}</style>
    </div>
  );
};

// Count-up animation for key numbers
const CountUpNumber: React.FC<{
  targetValue: number;
  prefix?: string;
  suffix?: string;
  startFrame: number;
  duration?: number;
  color?: string;
  fontSize?: number;
}> = ({ targetValue, prefix = "", suffix = "", startFrame, duration = 60, color = "#fff", fontSize = 36 }) => {
  const frame = useCurrentFrame();

  const displayValue = Math.min(targetValue, interpolate(frame, [startFrame, startFrame + duration], [0, targetValue], {
    extrapolateRight: "clamp",
  }));

  return (
    <span style={{ color, fontSize, fontWeight: 700 }}>
      {prefix}{displayValue.toFixed(0)}{suffix}
    </span>
  );
};

// Floating debt particles
const DebtParticles: React.FC = () => {
  const frame = useCurrentFrame();
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.1 + Math.random() * 0.3,
      size: 8 + Math.random() * 12,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p) => {
        const y = ((frame * p.speed) % 120) - 10;
        const opacity = Math.sin(frame * 0.05 + p.id) * 0.3 + 0.5;
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${y}%`,
              fontSize: p.size,
              opacity,
            }}
          >
            📈
          </div>
        );
      })}
    </div>
  );
};

/**
 * Debt River Scene - 债务悬河
 * Enhanced with richer animations
 */
export const DebtRiverScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const debtOpacity = interpolate(frame, [20, 60], [0, 1]);

  // Shaking effect when debt gets critical
  const shake = frame > 80 ? Math.sin(frame * 0.5) * 3 : 0;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Floating particles */}
      <DebtParticles />

      {/* Animated background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 80%, rgba(220, 38, 38, ${0.1 + Math.sin(frame * 0.05) * 0.05}) 0%, transparent 60%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: `translateX(-50%) translateX(${shake}px)`,
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
        }}
      >
        <TypewriterText
          text="US National Debt Crisis"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Debt rising river visualization */}
      <DebtRisingRiver />

      {/* Debt amount display */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: debtOpacity,
          zIndex: 10,
        }}
      >
        <div style={{
          fontSize: 48,
          color: "#fff",
          fontWeight: 700,
          textShadow: "0 0 30px rgba(220, 38, 38, 0.8)",
        }}>
          <CountUpNumber
            targetValue={44}
            prefix="$"
            suffix=" Trillion"
            startFrame={40}
            duration={80}
            color="#fff"
            fontSize={48}
          />
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 5 }}>
          Total US Debt by 2006
        </div>
      </div>

      {/* Per capita */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: debtOpacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#e8e8e8", fontWeight: 600 }}>
          <CountUpNumber
            targetValue={150000}
            prefix="$"
            suffix=" per American"
            startFrame={60}
            duration={60}
            color="#e8e8e8"
            fontSize={28}
          />
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>每个美国人承担</div>
      </div>

      {/* Warning - appears later */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) translateX(${shake}px)`,
        }}
      >
        <PulsingWarning startFrame={80}>
          <div style={{ fontSize: 20, color: "#ef4444", fontWeight: 700 }}>Debt Can Never Be Repaid!</div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            债务永远无法偿还！因为还债需要更多债务
          </div>
        </PulsingWarning>
      </div>

      {/* CSS for waves */}
      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
