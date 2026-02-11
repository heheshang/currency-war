import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * CharterExpirationScene - 特许权到期场景
 *
 * 1811年第一银行特许权到期
 * 国会投票：众议院65-64否决，参议院17-17被副总统打破僵局
 */
export const CharterExpirationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const calendarFlip = spring({ frame: frame - 60, fps: 30, config: { damping: 15, stiffness: 60 } });
  const voteOpacity = interpolate(frame, [180, 270], [0, 1], { extrapolateRight: "clamp" });
  const celebrationOpacity = interpolate(frame, [360, 450], [0, 1], { extrapolateRight: "clamp" });
  const warningOpacity = interpolate(frame, [540, 630], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
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
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Charter Expires
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
          March 3, 1811 — The First Bank Dies
        </div>
      </div>

      {/* 日历翻页效果 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${calendarFlip})`,
        }}
      >
        <svg width={300} height={320} viewBox="0 0 300 320">
          <defs>
            <linearGradient id="calendarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5e6d3" />
              <stop offset="100%" stopColor="#e8d5c4" />
            </linearGradient>
          </defs>

          {/* 日历主体 */}
          <rect
            x={20}
            y={20}
            width={260}
            height={280}
            fill="url(#calendarGrad)"
            stroke="#8b5a2b"
            strokeWidth={4}
            rx={10}
          />

          {/* 顶部红色区域 */}
          <rect
            x={20}
            y={20}
            width={260}
            height={80}
            fill="#8b0000"
            rx={10}
          />

          {/* 年份 */}
          <text
            x={150}
            y={55}
            fontSize={36}
            fill="#fff"
            fontWeight={700}
            textAnchor="middle"
            fontFamily="Cinzel, serif"
          >
            1811
          </text>

          {/* 月份 */}
          <text
            x={150}
            y={85}
            fontSize={18}
            fill="#ffd700"
            textAnchor="middle"
            fontFamily="Merriweather, serif"
          >
            March
          </text>

          {/* 日期网格 */}
          <g fontSize={20} fill="#2c1810" fontFamily="JetBrains Mono, monospace">
            {/* 星期标题 */}
            <text x={60} y={140} textAnchor="middle">S</text>
            <text x={95} y={140} textAnchor="middle">M</text>
            <text x={130} y={140} textAnchor="middle">T</text>
            <text x={165} y={140} textAnchor="middle">W</text>
            <text x={200} y={140} textAnchor="middle">T</text>
            <text x={235} y={140} textAnchor="middle">F</text>
            <text x={270} y={140} textAnchor="middle">S</text>

            {/* 日期数字 */}
            {[
              [1, 2, 3, 4, 5, 6, 7],
              [8, 9, 10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
              [29, 30, 31],
            ].map((week, weekIndex) =>
              week.map((day, dayIndex) => {
                const x = 60 + dayIndex * 35;
                const y = 175 + weekIndex * 30;
                const isHighlight = day === 3;
                return (
                  <text
                    key={`${weekIndex}-${dayIndex}`}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill={isHighlight ? "#8b0000" : "#2c1810"}
                    fontWeight={isHighlight ? 700 : 400}
                  >
                    {day}
                  </text>
                );
              })
            )}
          </g>

          {/* 高亮3月3日 */}
          <circle
            cx={60}
            y={173}
            r={18}
            fill="none"
            stroke="#8b0000"
            strokeWidth={2}
          />
        </svg>
      </div>

      {/* 投票结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: voteOpacity,
          width: "80%",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#ffd700",
            textAlign: "center",
            marginBottom: 15,
            letterSpacing: 2,
          }}
        >
          CONGRESS VOTE
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: 40,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 14,
                color: "#9ca3af",
                marginBottom: 8,
              }}
            >
              House of Representatives
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 36,
                color: "#228B22",
                fontWeight: 700,
              }}
            >
              65 - 64
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#228B22",
                marginTop: 5,
              }}
            >
              AGAINST RENEWAL
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 14,
                color: "#9ca3af",
                marginBottom: 8,
              }}
            >
              Senate
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 36,
                color: "#228B22",
                fontWeight: 700,
              }}
            >
              17 - 17
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#ffd700",
                marginTop: 5,
              }}
            >
              VP Clinton breaks tie
            </div>
          </div>
        </div>
      </div>

      {/* 庆祝 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: celebrationOpacity,
          textAlign: "center",
          padding: "15px 30px",
          background: "rgba(34, 139, 34, 0.2)",
          border: "2px solid #228B22",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 20,
            color: "#228B22",
            fontWeight: 700,
          }}
        >
          A Brief Victory for American Independence!
        </div>
      </div>

      {/* 警告 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: warningOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#ef4444",
            fontStyle: "italic",
          }}
        >
          But Nathan Rothschild was furious...
        </div>
      </div>
    </AbsoluteFill>
  );
};
