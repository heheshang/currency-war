import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * VersaillesTreatyScene - 场景5：凡尔赛和约
 *
 * 文件动画（蜡封效果）
 * 地图边界重绘
 * 福煦名言："一份为期20年的休战书"
 */
export const VersaillesTreatyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 条约文件淡入
  const documentOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });
  const documentScale = interpolate(frame, [60, 150], [0.8, 1], { extrapolateRight: "clamp" });

  // 蜡封印章淡入
  const sealOpacity = interpolate(frame, [180, 270], [0, 1], { extrapolateRight: "clamp" });
  const sealPulse = Math.sin(frame * 0.08) * 0.1 + 0.9;

  // 赔偿金额滚动
  const reparationsCounter = interpolate(frame, [300, 720], [0, 320], { extrapolateRight: "clamp" });

  // 地图边界变化
  const mapOpacity = interpolate(frame, [360, 540], [0, 1], { extrapolateRight: "clamp" });

  // 福煦名言淡入
  const quoteOpacity = interpolate(frame, [630, 810], [0, 1], { extrapolateRight: "clamp" });

  // 标题
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
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Treaty of Versailles
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
          June 28, 1919 — The Paris Peace Conference
        </div>
      </div>

      {/* 凡尔赛条约文件 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: documentOpacity,
        }}
      >
        <div
          style={{
            padding: "30px 40px",
            background: "#f5f5dc",
            border: "3px double #8b4513",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            transform: `scale(${documentScale})`,
            position: "relative",
          }}
        >
          {/* 伪古纸质感 */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              border: "1px solid #d4c579",
              opacity: 0.3,
            }}
          />

          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#8b4513",
              textAlign: "center",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            TREATY OF VERSAILLES
          </div>

          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              color: "#78350f",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Article 231 — War Guilt Clause
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#78350f",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            "Germany accepts responsibility for all damages"
          </div>

          {/* 蜡封印章 */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "30px",
              opacity: sealOpacity,
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="#8b0000" opacity={sealPulse} />
              <circle cx="40" cy="40" r="30" fill="none" stroke="#ffd700" strokeWidth="2" />
              <text x="40" y="45" fontSize="10" fill="#ffd700" textAnchor="middle">
                PARIS
              </text>
              <text x="40" y="58" fontSize="8" fill="#ffd700" textAnchor="middle">
                1919
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* 赔偿金额显示 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          opacity: mapOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "12px",
            minWidth: "200px",
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
            German Reparations
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#ef4444",
              }}
            >
              ${Math.round(reparationsCounter)}
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
              <span style={{ color: "#22c55e" }}>132 Billion:</span> Gold marks
            </div>
            <div style={{ marginBottom: 8 }}>
              Equivalent to ALL German gold reserves
            </div>
            <div style={{ color: "#f87171", fontWeight: 600 }}>
              Impossible to pay
            </div>
          </div>
        </div>
      </div>

      {/* 欧洲地图变化 */}
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "15%",
          opacity: mapOpacity,
        }}
      >
        <svg width="400" height="200" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="germanyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#8b0000" />
            </linearGradient>
          </defs>

          {/* 战前德国 */}
          <path
            d="M 280,60 Q 320,50 360,55 L 360,80 Q 350,100 320,110 L 280,100 Z"
            fill="url(#germanyGrad)"
            opacity="0.5"
            stroke="#8b0000"
            strokeWidth="2"
          />

          {/* 失去的领土 */}
          <path
            d="M 320,70 Q 350,65 370,70"
            fill="rgba(139, 0, 0, 0.2)"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4,4"
          />

          {/* 标签 */}
          <text x="320" y="130" fontSize="14" fill="#9ca3af" textAnchor="middle">
            Territory Lost
          </text>
          <text x="300" y="50" fontSize="12" fill="#ef4444" textAnchor="middle">
            Germany
          </text>

          {/* 箭头指示领土割让 */}
          <path
            d="M 345,75 Q 360,80 370,85"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        </svg>
      </div>

      {/* 福煦名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          — Marshal Ferdinand Foch — Supreme Allied Commander
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#ffd700",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          "This is not peace. It is an armistice for twenty years."
        </div>
      </div>
    </AbsoluteFill>
  );
};
