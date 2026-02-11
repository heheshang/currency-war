import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * HiddenControlScene - 隐藏的控制场景
 *
 * 展示联邦咨询委员会如何真正控制美联储
 * 完美的民主幻觉，完全的控制
 */
export const HiddenControlScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 实际权力流向淡入
  const powerFlowOpacity = interpolate(frame, [420, 540], [0, 1], { extrapolateRight: "clamp" });

  // 沃伯格杰作淡入
  const masterpieceOpacity = interpolate(frame, [600, 780], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0d1117",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 38,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Hidden Control
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The Federal Advisory Council
        </div>
      </div>

      {/* 权力层级对比 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "10%",
          width: "35%",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 69, 19, 0.3)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "8px",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#9ca3af",
              marginBottom: 12,
            }}
          >
            PUBLIC VIEW
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>President appoints →</div>
            <div style={{ marginBottom: 8 }}>Senate confirms →</div>
            <div style={{ marginBottom: 8 }}>Board of Governors</div>
          </div>
        </div>

        {/* 箭头 */}
        <svg width="60" height="60" style={{ margin: "0 auto" }}>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3">
              <path d="M 0,0 L 0,10 L 4,5 z" fill="#9ca3af" />
            </marker>
          </defs>
          <path
            d="M 30,20 L 30,50"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        </svg>

        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 138, 0.3)",
            border: "2px solid rgba(34, 197, 94, 0.3)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            REALITY
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>12 Regional Bank Directors →</div>
            <div style={{ marginBottom: 8 }}>Federal Advisory Council</div>
            <div style={{ marginTop: 12, fontWeight: 600 }}>↓</div>
            <div style={{ marginBottom: 8 }}>Council "advises" → Board</div>
            <div style={{ marginTop: 12, fontWeight: 600 }}>↓</div>
            <div style={{ marginBottom: 8 }}>Board Always Obeys</div>
          </div>
        </div>
      </div>

      {/* 咨询委员会构成 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: powerFlowOpacity,
        }}
      >
        <svg width={700} height={300} viewBox="0 0 700 300">
          <defs>
            <linearGradient id="councilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>

          {/* 12家地区银行圆圈 */}
          <g>
            {/* 咨询委员会圆圈 */}
            <circle cx="200" cy="150" r="80" fill="none" stroke="#ffd700" strokeWidth="3" />
            <text x="200" y="80" fontSize="16" fill="#ffd700" textAnchor="middle" fontWeight="600">
              FEDERAL ADVISORY COUNCIL
            </text>
            <text x="200" y="105" fontSize="12" fill="#9ca3af" textAnchor="middle">
              (Unknown to most Americans)
            </text>

            {/* 12个成员点 */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x = 200 + Math.cos(angle) * 50;
              const y = 150 + Math.sin(angle) * 50;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="8"
                  fill="#ffd700"
                />
              );
            })}
          </g>

          {/* 华尔街5巨头 */}
          <g transform="translate(500, 100)">
            <rect x="-120" y="-40" width="240" height="180" rx="12" fill="rgba(139, 69, 19, 0.2)" stroke="#d4af37" strokeWidth="2" />

            <text x="0" y="-20" fontSize="16" fill="#ffd700" textAnchor="middle" fontWeight="600">
              5 WALL STREET GIANTS
            </text>

            <text x="0" y="10" fontSize="13" fill="#e8e8e8" textAnchor="middle">
              Dominate the Council
            </text>

            {/* 成员名称 */}
            <g transform="translate(-100, 40)">
              <text fontSize="11" fill="#d4af37">
                <tspan x="0" y="0">• National City Bank</tspan>
                <tspan x="0" y="15">• First National Bank</tspan>
                <tspan x="0" y="30">• J.P. Morgan Trust</tspan>
                <tspan x="0" y="45">• Kuhn, Loeb & Co.</tspan>
                <tspan x="120" y="0">• National Bank of Commerce</tspan>
                <tspan x="120" y="15">• Chase Bank</tspan>
              </text>
            </g>

            {/* 关键问题 */}
            <text x="0" y="100" fontSize="12" fill="#ffd700" textAnchor="middle">
              Who can say "no" to men who control
            </text>
            <text x="0" y="120" fontSize="13" fill="#ffd700" textAnchor="middle">
              your bank's survival?
            </text>
          </g>
        </svg>
      </div>

      {/* 沃伯格杰作 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: masterpieceOpacity,
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "rgba(30, 58, 138, 0.4)",
            border: "3px solid #ffd700",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            Paul Warburg's Masterpiece
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#e8e8e8",
              lineHeight: "1.8",
            }}
          >
            A Hidden Remote Control Device
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#9ca3af",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Perfect Illusion of Democracy<br />
            <span style={{ color: "#ffd700", fontWeight: 600 }}>Complete Control</span>
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "280px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
