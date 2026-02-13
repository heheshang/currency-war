import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

// Summary item card
const SummaryItem: React.FC<{
  icon: string;
  text: string;
  color: string;
  delay: number;
}> = ({ icon, text, color, delay }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
  const x = interpolate(frame, [delay, delay + 30], [50, 0]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 18,
        padding: "12px 25px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: 10,
        borderLeft: `4px solid ${color}`,
        opacity,
        transform: `translateX(${x}px)`,
        boxShadow: `0 5px 20px ${color}22`,
      }}
    >
      <span style={{ fontSize: 26, marginRight: 15 }}>{icon}</span>
      <span style={{ fontSize: 18, color }}>{text}</span>
    </div>
  );
};

// Floating particles
const FloatingParticles: React.FC = () => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
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
              background: "#ffd700",
              borderRadius: "50%",
              opacity,
              boxShadow: `0 0 ${p.size * 2}px rgba(255, 215, 0, 0.5)`,
            }}
          />
        );
      })}
    </div>
  );
};

// Animated title
const AnimatedTitle: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(frame, [0, 20], [0.8, 1]);
  const glow = Math.sin(frame * 0.05) * 10 + 20;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        textShadow: `0 0 ${glow}px rgba(255, 215, 0, 0.5)`,
      }}
    >
      <div style={{ fontSize: 42, color: "#ffd700", fontWeight: 700 }}>
        Summary
      </div>
    </div>
  );
};

// Footer with animation
const AnimatedFooter: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [80, 120], [0, 1]);
  const float = Math.sin(frame * 0.05) * 3;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${float}px)`,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 34, color: "#ffd700", fontWeight: 700 }}>
        Currency War
      </div>
      <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 5 }}>
        Episode 10 of 11
      </div>
    </div>
  );
};

/**
 * Episode10 Summary Scene - 总结
 * Enhanced with richer animations
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);

  // Animated background
  const bgPulse = Math.sin(frame * 0.03) * 0.03 + 1;

  const summaryItems = [
    { icon: "🏦", text: "部分储备金 + 债务货币 = 通货膨胀", color: "#ffd700" },
    {
      icon: "📈",
      text: "债务永远无法偿还，利率必然越来越低",
      color: "#fbbf24",
    },
    { icon: "⚠️", text: "中国美国陷入金融恐怖平衡", color: "#ef4444" },
    { icon: "🥇", text: "黄金是唯一解决方案", color: "#4ade80" },
  ];

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(255, 215, 0, ${0.05 * bgPulse}) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AnimatedTitle />
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: contentOpacity,
        }}
      >
        {summaryItems.map((item, i) => (
          <SummaryItem
            key={i}
            icon={item.icon}
            text={item.text}
            color={item.color}
            delay={25 + i * 20}
          />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AnimatedFooter />
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
