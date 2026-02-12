import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * DepressionScene - Scene 12: The Great Depression
 *
 * Bread lines (crowd system)
 * Dust bowl particle effects
 * Foreclosure sign multiplication animation
 */
export const DepressionScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 沙尘粒子
  const dustParticles = Array.from({ length: 30 }).map((_, i) => {
    const startFrame = 60 + i * 15;
    const progress = interpolate(
      frame,
      [startFrame, startFrame + 300],
      [0, 1],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
    );

    if (progress <= 0 || progress >= 1) return null;

    const x = 10 + Math.random() * 80;
    const y = 20 + Math.random() * 60;
    const size = 2 + progress * 4;

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          opacity: progress * 0.6,
          background: `hsl(40, 30%, ${40 + progress * 20}%)`,
          borderRadius: "50%",
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  });

  // 人群剪影
  const crowdOpacity = interpolate(frame, [120, 240], [0, 1], { extrapolateRight: "clamp" });
  const crowdShift = Math.sin(frame * 0.02) * 2;

  // 止赎牌动画
  const signCount = interpolate(frame, [240, 720], [0, 1], { extrapolateRight: "clamp" });
  const signAppear = Math.floor(signCount * 10);

  // 统计淡入
  const statsOpacity = interpolate(frame, [360, 540], [0, 1], { extrapolateRight: "clamp" });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #3d2817 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 38,
            color: "#9ca3af",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Great Depression
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#6b7280",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          1929-1939: Economic Devastation
        </div>
      </div>

      {/* 面包队伍 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "0%",
          width: "100%",
          opacity: crowdOpacity,
          transform: `translateX(${crowdShift}px)`,
        }}
      >
        {/* 队伍剪影 */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${5 + i * 6.5}%`,
              bottom: "10%",
              width: "25px",
              height: "60px",
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "6px 6px 0 0",
            }}
          />
        ))}

        {/* 面包店 */}
        <div
          style={{
            position: "absolute",
            right: "10%",
            bottom: "15%",
          }}
        >
          <div
            style={{
              padding: "16px",
              background: "rgba(139, 69, 19, 0.9)",
              border: "2px solid #8b4513",
              borderRadius: "4px",
            }}
          >
            <div style={{ fontSize: 12, color: "#d4a574", marginBottom: 8, fontWeight: 600 }}>
              🍞 BREAD LINE
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>
              Soup kitchens feed millions
            </div>
          </div>
        </div>
      </div>

      {/* 沙尘粒子 */}
      {dustParticles}

      {/* 止赎牌 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          opacity: signCount > 0 ? 1 : 0,
        }}
      >
        {Array.from({ length: Math.min(signAppear, 10) }).map((_, i) => {
          const x = 10 + (i % 3) * 25;
          const y = 10 + Math.floor(i / 3) * 40;
          const rotation = -5 + Math.random() * 10;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <div
                style={{
                  padding: "8px 12px",
                  background: "#8b4513",
                  border: "2px solid #d4a574",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  fontSize: "10px",
                  color: "#f5f5f4",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                FORECLOSED
              </div>
            </div>
          );
        })}
      </div>

      {/* 统计面板 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Depression Statistics
          </div>

          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ef4444" }}>Unemployment:</span> 25% of workforce
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ef4444" }}>Banks failed:</span> 8,812 in 4 years
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ef4444" }}>GDP fell:</span> 45% (1929-1933)
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                15 million homeless
              </span>
            </div>
            <div style={{ color: "#f87171", fontWeight: 600 }}>
              "The greatest economic collapse in history"
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "Banks created the bubble. Then popped it."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Then bought America for pennies.
        </div>
      </div>
    </AbsoluteFill>
  );
};
