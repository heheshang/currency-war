import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Panic1857Scene - 1857年恐慌场景
 *
 * 展示1857年金融恐慌
 * 国际银行家收紧信贷，股市崩盘
 */
export const Panic1857Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const chartDrop = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });
  const panicOpacity = interpolate(frame, [210, 300], [0, 1], { extrapolateRight: "clamp" });
  const aftermathOpacity = interpolate(frame, [360, 450], [0, 1], { extrapolateRight: "clamp" });

  // 股价下跌曲线
  const stockPath = interpolate(frame, [60, 180], [
    "M 0,50 Q 50,50 100,50",
    "M 0,50 Q 50,55 100,70 Q 150,90 200,95 Q 250,98 300,98",
  ]);

  // 抖动效果
  const shake = Math.sin(frame * 0.5) * (frame > 180 && frame < 360 ? 3 : 0);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at center, #1a0505 0%, #0d1117 100%)`,
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%, ${shake}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 40,
            color: "#ef4444",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          PANIC OF 1857
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          International Bankers Strike Back
        </div>
      </div>

      {/* 股市崩盘图表 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: chartDrop,
        }}
      >
        <svg width={500} height={250} viewBox="0 0 500 250">
          <defs>
            <linearGradient id="chartBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.2)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
            </linearGradient>
          </defs>

          {/* 背景网格 */}
          <g stroke="#2d3748" strokeWidth={1} opacity={0.3}>
            <line x1={0} y1={50} x2={500} y2={50} />
            <line x1={0} y1={100} x2={500} y2={100} />
            <line x1={0} y1={150} x2={500} y2={150} />
            <line x1={0} y1={200} x2={500} y2={200} />
          </g>

          {/* 下跌区域填充 */}
          <path
            d="M 0,50 Q 50,55 100,70 Q 150,90 200,95 Q 250,98 300,98 L 300,200 L 0,200 Z"
            fill="url(#chartBg)"
          />

          {/* 股价曲线 */}
          <path
            d="M 0,50 Q 50,55 100,70 Q 150,90 200,95 Q 250,98 300,98"
            fill="none"
            stroke="#ef4444"
            strokeWidth={4}
            strokeLinecap="round"
          />

          {/* 标签 */}
          <g fontSize={14} fill="#9ca3af" fontFamily="Merriweather, serif">
            <text x={10} y={30}>Railway Stocks</text>
            <text x={150} y={230} fill="#ef4444">-50%</text>
            <text x={200} y={230} fill="#ef4444">-70%</text>
            <text x={250} y={230} fill="#ef4444">-90%</text>
          </g>

          {/* 箭头指示下跌 */}
          <g transform={`translate(${interpolate(frame, [60, 180], [0, 250], { extrapolateRight: "clamp" })}, 80)`}>
            <path
              d="M 0,0 L -10,-15 L 10,-15 Z"
              fill="#ef4444"
              opacity={0.8}
            />
          </g>
        </svg>
      </div>

      {/* 恐慌描述 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: panicOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          International banks suddenly tightened credit
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#ef4444",
            marginTop: 10,
          }}
        >
          Banks collapsed • Paper money exposed
        </div>
      </div>

      {/* 后果 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: aftermathOpacity,
          textAlign: "center",
          padding: "15px 25px",
          background: "rgba(139, 0, 0, 0.15)",
          border: "1px solid #8b0000",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#8b0000",
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
        THE REAL GOAL
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 15,
            color: "#e8e8e8",
          }}
        >
          "The division of America becomes their priority"
        </div>
      </div>

      {/* 时间标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: aftermathOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 14,
            color: "#6b7280",
          }}
        >
          1857 — The Prelude to Civil War
        </div>
      </div>
    </AbsoluteFill>
  );
};
