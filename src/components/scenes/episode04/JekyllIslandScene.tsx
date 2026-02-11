import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * JekyllIslandScene - 哲基尔岛秘密会议场景
 *
 * 展示1910年11月22日密封火车前往哲基尔岛的绝密会议
 * 7位银行家秘密起草美联储法案
 */
export const JekyllIslandScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 地图淡入
  const mapOpacity = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });

  // 火车位置动画
  const trainX = interpolate(frame, [0, 300], [-20, 50], { extrapolateRight: "clamp" });

  // 人物列表淡入
  const listOpacity = interpolate(frame, [180, 300], [0, 1], { extrapolateRight: "clamp" });

  // 标题淡入
  const titleOpacity = interpolate(frame, [360, 450], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 场景标题 */}
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
            color: "#d4af37",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          November 22, 1910
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 32,
            color: "#e8e8e8",
            fontWeight: 400,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The Secret Meeting
        </div>
      </div>

      {/* 哲基尔岛地图 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: mapOpacity,
        }}
      >
        <svg width={800} height={500} viewBox="0 0 800 500">
          <defs>
            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d5016" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>

          {/* 简化的美国东海岸地图轮廓 */}
          <path
            d="M 150,200 Q 200,180 250,180 L 300,200 Q 400,180 450,200 Q 500,180 550,200 L 600,220 Q 650,250 620,300"
            fill="none"
            stroke="#4b5563"
            strokeWidth="2"
          />

          {/* 哲基尔岛位置 - 佐治亚州海岸 */}
          <circle
            cx="580"
            cy="320"
            r="8"
            fill="#ffd700"
            opacity="0.6"
          />
          <circle
            cx="580"
            cy="320"
            r="15"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            opacity="0.8"
          />

          {/* 纽约位置 */}
          <circle
            cx="300"
            cy="220"
            r="6"
            fill="#d4af37"
            opacity="0.4"
          />
          <text
            x="300"
            y="200"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            New York
          </text>

          {/* 路线 - 纽约到哲基尔岛 */}
          <path
            d="M 306,220 Q 400,250 450,280 Q 500,300 570,310"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />

          {/* 火车图标 - 沿路线移动 */}
          <g transform={`translate(${trainX}, 0)`}>
            <rect x="-30" y="-8" width="60" height="16" rx="3" fill="#1a202c" />
            <rect x="-25" y="-5" width="50" height="10" rx="2" fill="#374151" opacity="0.8" />
            <circle cx="-10" cy="2" r="3" fill="#d4af37" />
            <circle cx="10" cy="2" r="3" fill="#d4af37" />
            <text x="0" y="18" fontSize="10" fill="#9ca3af" textAnchor="middle">
              SEALED TRAIN
            </text>
          </g>

          {/* 哲基尔岛标签 */}
          <text
            x="580"
            y="360"
            fontSize="14"
            fill="#ffd700"
            textAnchor="middle"
            fontWeight="600"
          >
            JEKYLL ISLAND
          </text>
          <text
            x="580"
            y="380"
            fontSize="11"
            fill="#9ca3af"
            textAnchor="middle"
          >
            Georgia
          </text>
        </svg>
      </div>

      {/* 参会者名单 */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "10%",
          width: "35%",
          opacity: listOpacity,
        }}
      >
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 20,
          color: "#9ca3af",
          marginBottom: 20,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}>
          The 7 Men:
        </div>

        <div style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 14,
          color: "#e8e8e8",
          lineHeight: "2.2",
        }}>
          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Nelson Aldrich</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              Senator • Rockefeller's grandfather
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Piatt Andrew</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              Assistant Secretary of Treasury
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Frank Vanderlip</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              President, National City Bank
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Henry Davison</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              J.P. Morgan & Co. Partner
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Charles Norton</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              President, First National Bank
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Benjamin Strong</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              J.P. Morgan's Right Hand
            </span>
          </div>

          <div>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Paul Warburg</span><br />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              Fed's Architect • Rothschild's Agent
            </span>
          </div>
        </div>
      </div>

      {/* 绝密标签 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: listOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: "#8b0000",
            textAlign: "center",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          TOP SECRET
        </div>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 14,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          9 Days • Jekyll Island<br />
          No Journalists Within 50 Miles
        </div>
      </div>

      {/* 装饰性边框 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "60%",
          border: "2px solid rgba(255, 215, 0, 0.1)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
