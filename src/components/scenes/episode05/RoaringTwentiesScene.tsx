import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";

/**
 * RoaringTwentiesScene - 场景7：咆哮的二十年代
 *
 * 股市上涨图表
 * 信贷扩张动画
 * 公民庆祝（粒子特效）
 */
export const RoaringTwentiesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 股市上涨动画
  const stockRise = interpolate(frame, [120, 540], [0, 100], {
    extrapolateRight: "clamp",
  });

  // 庆祝粒子
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const startFrame = 180 + i * 20;
    const progress = interpolate(
      frame,
      [startFrame, startFrame + 120],
      [0, 1],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
    );

    if (progress <= 0 || progress >= 1) return null;

    const x = 30 + random(null) * 40;
    const y = 60 + random(null) * 30;
    const size = 3 + progress * 5;
    const rotation = (frame - startFrame) * 3;

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          opacity: progress,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `hsl(${45 + progress * 20}, 100%, 60%)`,
            borderRadius: "50%",
          }}
        />
      </div>
    );
  });

  // 标题淡入
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1e3a5f 0%, #0d1117 100%)",
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
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          The Roaring Twenties
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Everyone Should Get Rich!
        </div>
      </div>

      {/* 股市图表 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
        }}
      >
        <svg width="500" height="250" viewBox="0 0 500 250">
          <defs>
            <linearGradient id="bullGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
            </linearGradient>
          </defs>

          {/* 坐标轴 */}
          <line
            x1="50"
            y1="200"
            x2="450"
            y2="200"
            stroke="#4b5563"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="200"
            stroke="#4b5563"
            strokeWidth="1"
          />

          {/* Y轴标签 */}
          <text
            x="35"
            y="125"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="end"
            transform="rotate(-90, 35, 125)"
          >
            Stock Index
          </text>

          {/* 面积图 */}
          <path
            d={`
              M 50,200
              L 100,${200 - stockRise * 0.8}
              L 150,${200 - stockRise * 0.9}
              L 200,${200 - stockRise * 1.1}
              L 250,${200 - stockRise * 1.3}
              L 300,${200 - stockRise * 1.5}
              L 350,${200 - stockRise * 1.7}
              L 400,${200 - stockRise * 1.9}
              L 450,${200 - stockRise * 2}
              L 450,200
              Z
            `}
            fill="url(#areaGrad)"
            stroke="url(#bullGrad)"
            strokeWidth="3"
          />

          {/* 当前价格指示器 */}
          <circle
            cx={50 + stockRise * 4}
            cy={200 - stockRise * 2}
            r="8"
            fill="#ffd700"
            opacity="0.9"
          >
            <animate
              attributeName="r"
              values="8;12;8"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>

          {/* X轴年份 */}
          <text
            x="100"
            y="220"
            fontSize="11"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1924
          </text>
          <text
            x="200"
            y="220"
            fontSize="11"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1926
          </text>
          <text
            x="300"
            y="220"
            fontSize="11"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1927
          </text>
          <text
            x="400"
            y="220"
            fontSize="11"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1929
          </text>

          {/* "牛市"标签 */}
          <text
            x="250"
            y="30"
            fontSize="24"
            fill="#ffd700"
            textAnchor="middle"
            fontWeight="600"
          >
            BULL MARKET
          </text>
          <text x="250" y="55" fontSize="12" fill="#22c55e" textAnchor="middle">
            Stocks Rise 400%
          </text>
        </svg>
      </div>

      {/* 信贷扩张指示 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "8%",
          opacity: titleOpacity,
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
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Easy Money
          </div>

          <svg width="180" height="80" viewBox="0 0 180 80">
            <defs>
              <linearGradient id="creditGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ffd700" />
              </linearGradient>
            </defs>

            {/* 货币符号 */}
            <text
              x="90"
              y="35"
              fontSize="36"
              fill="url(#creditGrad)"
              textAnchor="middle"
            >
              $
            </text>

            {/* 扩张波浪 */}
            {Array.from({ length: 5 }).map((_, i) => {
              const x = 20 + i * 35;
              const amplitude = 5 + i * 3;
              const waveY = 55 + Math.sin((frame + i * 30) * 0.05) * amplitude;

              return (
                <g key={i}>
                  <path
                    d={`M ${x - 15},55 Q ${x - 7},${waveY - 5} ${x},${waveY} T ${x + 7},${waveY - 5} ${x + 15},55`}
                    fill="none"
                    stroke="url(#creditGrad)"
                    strokeWidth="3"
                    opacity="0.6"
                  />
                  <text
                    x={x}
                    y={waveY + 15}
                    fontSize="10"
                    fill="#9ca3af"
                    textAnchor="middle"
                  >
                    Credit
                  </text>
                </g>
              );
            })}
          </svg>

          <div
            style={{
              fontSize: 12,
              color: "#e8e8e8",
              marginTop: 12,
              lineHeight: "1.6",
            }}
          >
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Low interest rates</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Margin buying</span> encouraged
            </div>
            <div style={{ color: "#f87171", fontWeight: 600 }}>
              Setup for the crash
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
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
          "The setup for the greatest bubble in history."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Stock market: The new national obsession.
        </div>
      </div>

      {/* 庆祝粒子 */}
      {particles}
    </AbsoluteFill>
  );
};
