import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";

/**
 * Crash1929Scene - 场景10：1929年崩盘
 *
 * 股票行情崩盘动画（红色数字瀑布）
 * 纽约证券交易所人群恐慌
 * 倒置烟花效果（破裂）
 */
export const Crash1929Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 崩盘强度
  const crashIntensity = interpolate(frame, [120, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 红色数字瀑布
  const numbers = Array.from({ length: 15 }).map((_, i) => {
    const startFrame = 120 + i * 40;
    const progress = interpolate(
      frame,
      [startFrame, startFrame + 180],
      [0, 1],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
    );

    if (progress <= 0) return null;

    const x = 20 + (i % 5) * 18;
    const y = -50 + progress * 350;
    const shakeAmount = Math.max(0, crashIntensity * 5);
    const xOffset = (random(null) - 0.5) * shakeAmount;

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x + xOffset}%`,
          top: `${y}%`,
          opacity: progress,
          transform: `rotate(${-5 + random(null) * 3}deg)`,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 28,
            fontWeight: 700,
            color: "#ef4444",
            textShadow: "0 0 10px rgba(239, 68, 68, 0.8)",
          }}
        >
          {Math.floor(100 - progress * 90)}
        </div>
      </div>
    );
  });

  // 恐慌人群
  const crowdOpacity = interpolate(frame, [180, 360], [0, 1], {
    extrapolateRight: "clamp",
  });
  const crowdShake = Math.sin(frame * 0.2) * 3;

  // 破裂效果
  const burstOpacity = interpolate(frame, [540, 720], [0, 1], {
    extrapolateRight: "clamp",
  });
  const burstScale = interpolate(frame, [540, 720], [0, 2], {
    extrapolateRight: "clamp",
  });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0508 0%, #0d1117 100%)",
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
            fontSize: 42,
            color: "#8b0000",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 20px rgba(139, 0, 0, 0.5)",
          }}
        >
          BLACK TUESDAY
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 28,
            color: "#ef4444",
            textAlign: "center",
            marginTop: 8,
            letterSpacing: 4,
          }}
        >
          October 29, 1929
        </div>
      </div>

      {/* 纽约证券交易所 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
        }}
      >
        <svg width="400" height="250" viewBox="0 0 400 250">
          <defs>
            <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
          </defs>

          {/* 建筑 */}
          <rect
            x="100"
            y="50"
            width="200"
            height="150"
            fill="url(#buildingGrad)"
          />
          <rect
            x="110"
            y="40"
            width="180"
            height="10"
            fill="#1f2937"
            opacity="0.8"
          />
          <rect
            x="90"
            y="30"
            width="220"
            height="8"
            fill="#1f2937"
            opacity="0.6"
          />

          {/* 柱子 */}
          <rect x="120" y="200" width="10" height="50" fill="#374151" />
          <rect x="270" y="200" width="10" height="50" fill="#374151" />

          {/* 台阶 */}
          <rect x="100" y="195" width="200" height="5" fill="#4b5563" />

          {/* 纽约证券交易所标志 */}
          <text
            x="200"
            y="120"
            fontSize="16"
            fill="#9ca3af"
            textAnchor="middle"
            opacity="0.5"
          >
            NYSE
          </text>

          {/* 崩盘线条 */}
          {crashIntensity > 0.1 && (
            <>
              <path
                d="M 120,80 L 140,100 L 160,120 L 180,90 L 200,110"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                opacity="0.6"
              />
              <path
                d="M 220,100 L 240,130 L 260,95 L 280,115"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                opacity="0.6"
              />
            </>
          )}
        </svg>
      </div>

      {/* 恐慌人群剪影 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "0%",
          width: "100%",
          opacity: crowdOpacity,
          transform: `translateX(${crowdShake}px)`,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${5 + i * 8}%`,
              bottom: `${20 + (i % 2) * 15}%`,
              width: "35px",
              height: "70px",
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px 8px 0 0",
            }}
          />
        ))}
      </div>

      {/* 财富蒸发显示 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          opacity: crashIntensity > 0.5 ? 1 : 0,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.9)",
            border: "2px solid #ef4444",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ef4444",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Wealth Vanishes
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#ffd700",
              }}
            >
              $1600
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#9ca3af",
                marginLeft: 8,
              }}
            >
              Billion
            </span>
          </div>

          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#fbbf24" }}>40% of wealth</span> evaporated
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#fbbf24" }}>25 billion</span> in paper
              losses
            </div>
            <div style={{ color: "#ef4444", fontWeight: 600 }}>
              "Into thin air"
            </div>
          </div>
        </div>
      </div>

      {/* 破裂效果 */}
      {burstOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translateX(-50%) scale(" + burstScale + ")",
            opacity: burstOpacity,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const length = 60 + random(null) * 40;
              const x = 100 + Math.cos(angle) * length;
              const y = 100 + Math.sin(angle) * length;

              return (
                <g key={i}>
                  <line
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="#ffd700"
                    strokeWidth="3"
                    opacity="0.8"
                  />
                  <circle cx={x} cy={y} r="5" fill="#ef4444" />
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "The day the bubble burst."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ef4444",
            textAlign: "center",
          }}
        >
          And the harvest began.
        </div>
      </div>

      {/* 红色数字瀑布 */}
      {numbers}
    </AbsoluteFill>
  );
};
