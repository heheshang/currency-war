import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

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

// Animated crest with glow
const AnimatedCrest: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [30, 60], [0, 1]);
  const scale = interpolate(frame, [30, 60], [0, 1]);
  const pulse = Math.sin(frame * 0.05) * 0.1 + 1;
  const rotation = Math.sin(frame * 0.02) * 5;

  return (
    <div
      style={{
        width: 140,
        height: 140,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform: `scale(${scale * pulse}) rotate(${rotation}deg)`,
        boxShadow: "0 0 50px rgba(124, 58, 237, 0.6)",
      }}
    >
      <span style={{ fontSize: 42, fontWeight: 700, color: "#ffd700" }}>R</span>
    </div>
  );
};

// Pulsing signal
const PulsingSignal: React.FC = () => {
  const frame = useCurrentFrame();

  const signals = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 15,
      size: 10 + i * 8,
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {signals.map((s) => {
        const opacity = interpolate(
          frame,
          [s.delay + 50, s.delay + 80],
          [0, 1 - s.id * 0.2],
          {
            extrapolateRight: "clamp",
          },
        );
        const scale = interpolate(
          frame,
          [s.delay + 50, s.delay + 80],
          [0.5, 1 + s.id * 0.3],
        );

        return (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: s.size * scale,
              height: s.size * scale,
              borderRadius: "50%",
              background: s.id === 0 ? "#ef4444" : "rgba(239, 68, 68, 0.3)",
              border: `2px solid #ef4444`,
              transform: "translate(-50%, -50%)",
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

// Date reveal animation
const DateReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 30], [0.5, 1.2]);
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const glow = Math.sin(frame * 0.1) * 5 + 10;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        textShadow: `0 0 ${glow}px rgba(239, 68, 68, 0.5)`,
      }}
    >
      <div style={{ fontSize: 52, color: "#ef4444", fontWeight: 700 }}>
        April 14, 2004
      </div>
    </div>
  );
};

// Highlighted meaning box
const MeaningBox: React.FC<{
  startFrame?: number;
  children: React.ReactNode;
}> = ({ startFrame = 60, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const pulse = Math.sin((frame - startFrame) * 0.1) * 0.05 + 1;
  const glow = Math.sin((frame - startFrame) * 0.1) * 10 + 20;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${pulse})`,
        padding: "20px 40px",
        background: "rgba(239, 68, 68, 0.15)",
        borderRadius: 16,
        border: "3px solid #ef4444",
        boxShadow: `0 0 ${glow}px rgba(239, 68, 68, 0.4)`,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

// Background particles
const BackgroundParticles: React.FC = () => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      speed: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
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
              width: p.size,
              height: p.size,
              background: "#7c3aed",
              borderRadius: "50%",
              opacity,
              boxShadow: `0 0 ${p.size * 2}px #7c3aed`,
            }}
          />
        );
      })}
    </div>
  );
};

/**
 * Rothschild Scene - 罗斯柴尔德退出黄金
 * Enhanced with richer animations
 */
export const RothschildScene: React.FC = () => {
  const frame = useCurrentFrame();

  const rothschildOpacity = interpolate(frame, [20, 60], [0, 1]);

  // Animated background
  const bgPulse = Math.sin(frame * 0.03) * 0.03 + 1;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, rgba(124, 58, 237, ${0.15 * bgPulse}) 0%, transparent 50%)`,
        }}
      />

      {/* Background particles */}
      <BackgroundParticles />

      {/* Date */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <DateReveal />
      </div>

      {/* Rothschild crest */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatedCrest />
      </div>

      {/* Pulsing signal */}
      <PulsingSignal />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: rothschildOpacity,
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#ffd700",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          <TypewriterText
            text="Rothschild Exits Gold"
            startFrame={35}
            speed={5}
          />
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          罗斯柴尔德家族在控制黄金定价200年后
        </div>
      </div>

      {/* Meaning */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <MeaningBox>
          <div style={{ fontSize: 22, color: "#ef4444", fontWeight: 600 }}>
            A Major Signal!
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            黄金价格即将开始长期上涨
          </div>
        </MeaningBox>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
