import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * NoFedNoWarScene - 场景1：没有美联储，就没有一战
 *
 * 1914-1917年时间线动画
 * 欧洲地图显示美国中立立场
 * 战争图标随美联储成立而亮起
 */
export const NoFedNoWarScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 时间线动画
  const timelineProgress = interpolate(frame, [0, 900], [0, 1], { extrapolateRight: "clamp" });

  // 1913年美联储成立指示器
  const fedFoundedOpacity = interpolate(frame, [120, 240], [0, 1], { extrapolateRight: "clamp" });
  const fedFoundedPulse = Math.sin(frame * 0.1) * 0.2 + 0.8;

  // 1914年战争开始
  const warStartOpacity = interpolate(frame, [300, 450], [0, 1], { extrapolateRight: "clamp" });
  const warIconScale = interpolate(frame, [450, 540], [0, 1], { extrapolateRight: "clamp" });

  // 1917年美国参战
  const usEntryOpacity = interpolate(frame, [600, 750], [0, 1], { extrapolateRight: "clamp" });

  // 标题淡入
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e1a2e 0%, #0d1117 100%)",
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
            color: "#d4af37",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          No Fed, No War
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
          America couldn't finance war without a central bank
        </div>
      </div>

      {/* 时间线 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "80%",
          opacity,
        }}
      >
        <svg width="100%" height="200" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>

          {/* 时间线 */}
          <line
            x1="50"
            y1="100"
            x2="750"
            y2="100"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* 1913年 - 美联储成立 */}
          <g opacity={fedFoundedOpacity}>
            <circle cx="150" cy="100" r="12" fill="#ffd700" opacity={fedFoundedPulse} />
            <text x="150" y="70" fontSize="16" fill="#ffd700" textAnchor="middle" fontWeight="600">
              1913
            </text>
            <text x="150" y="140" fontSize="14" fill="#9ca3af" textAnchor="middle">
              Fed Founded
            </text>
          </g>

          {/* 1914年 - 战争开始 */}
          <g opacity={warStartOpacity}>
            <circle cx="300" cy="100" r="10" fill="#8b0000" />
            <text x="300" y="70" fontSize="16" fill="#8b0000" textAnchor="middle" fontWeight="600">
              1914
            </text>
            <text x="300" y="140" fontSize="14" fill="#9ca3af" textAnchor="middle">
              WWI Begins
            </text>
          </g>

          {/* 1917年 - 美国参战 */}
          <g opacity={usEntryOpacity}>
            <circle cx="550" cy="100" r="10" fill="#4B5320" />
            <text x="550" y="70" fontSize="16" fill="#4B5320" textAnchor="middle" fontWeight="600">
              1917
            </text>
            <text x="550" y="140" fontSize="14" fill="#9ca3af" textAnchor="middle">
              US Enters War
            </text>
          </g>

          {/* 进度指示器 */}
          <circle
            cx={50 + timelineProgress * 700}
            cy="100"
            r="8"
            fill="#ffd700"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* 欧洲地图 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          opacity: titleOpacity,
        }}
      >
        <svg width="350" height="250" viewBox="0 0 350 250">
          {/* 简化的欧洲地图轮廓 */}
          <path
            d="M 80,80 Q 120,60 160,70 L 200,60 Q 240,70 280,90 L 300,100 Q 280,140 240,160 L 180,170 Q 120,160 90,140 Z"
            fill="none"
            stroke="#4b5563"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* 英国 */}
          <circle cx="120" cy="90" r="15" fill="rgba(139, 0, 0, 0.3)" stroke="#8b0000" strokeWidth="2" />
          <text x="120" y="125" fontSize="12" fill="#9ca3af" textAnchor="middle">
            Britain
          </text>

          {/* 法国 */}
          <circle cx="160" cy="110" r="12" fill="rgba(139, 0, 0, 0.3)" stroke="#8b0000" strokeWidth="2" />
          <text x="160" y="145" fontSize="12" fill="#9ca3af" textAnchor="middle">
            France
          </text>

          {/* 德国 */}
          <circle cx="200" cy="95" r="15" fill="rgba(139, 0, 0, 0.3)" stroke="#8b0000" strokeWidth="2" />
          <text x="200" y="130" fontSize="12" fill="#9ca3af" textAnchor="middle">
            Germany
          </text>

          {/* 美国（中立，右侧） */}
          <circle cx="320" cy="120" r="18" fill="rgba(75, 123, 32, 0.4)" stroke="#4B5320" strokeWidth="2" />
          <text x="320" y="160" fontSize="12" fill="#ffd700" textAnchor="middle" fontWeight="600">
            USA
          </text>
          <text x="320" y="180" fontSize="10" fill="#9ca3af" textAnchor="middle">
            Neutral
          </text>
        </svg>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
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
            lineHeight: "1.6",
          }}
        >
          "Bankers needed the Fed first... then came the war."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          A war America could finally finance.
        </div>
      </div>
    </AbsoluteFill>
  );
};
