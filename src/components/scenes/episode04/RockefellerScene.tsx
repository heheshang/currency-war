import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * RockefellerScene - 洛克菲勒帝国场景
 *
 * 展示标准石油公司通过 ruthless tactics 垄断石油行业
 * 罗斯柴尔德家族通过雅各布·希夫支持洛克菲勒
 */
export const RockefellerScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 石油公司并购动画
  const acquisitionProgress = interpolate(frame, [120, 900], [0, 100], { extrapolateRight: "clamp" });

  // 竞争者淡出
  const competitorFade = interpolate(frame, [300, 480], [1, 0], { extrapolateRight: "clamp" });

  // 洛克菲勒头像淡入
  const rockefellerOpacity = interpolate(frame, [540, 720], [0, 1], { extrapolateRight: "clamp" });

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
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#d4af37",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Rockefeller Empire
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          1870 - Standard Oil Monopoly
        </div>
      </div>

      {/* 美国地图与石油控制 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg width={700} height={450} viewBox="0 0 700 450">
          <defs>
            <radialGradient id="mapGrad">
              <stop offset="0%" stopColor="#2d5016" />
              <stop offset="100%" stopColor="#1a202c" />
            </radialGradient>
            <linearGradient id="oilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>

          {/* 简化的美国地图轮廓 */}
          <path
            d="M 100,200 L 200,180 L 300,190 L 400,200 L 500,180 L 600,200 L 650,220"
            fill="url(#mapGrad)"
            stroke="#4b5563"
            strokeWidth="1"
          />

          {/* 标准石油逐步扩张的圆圈 */}
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.25}
            fill="rgba(212, 175, 55, 0.6)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.35}
            fill="rgba(212, 175, 55, 0.5)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.45}
            fill="rgba(212, 175, 55, 0.4)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.55}
            fill="rgba(212, 175, 55, 0.3)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.65}
            fill="rgba(212, 175, 55, 0.2)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.75}
            fill="rgba(212, 175, 55, 0.15)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.85}
            fill="rgba(212, 175, 55, 0.1)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <circle
            cx="350"
            cy="220"
            r={15 + acquisitionProgress * 0.95}
            fill="rgba(212, 175, 55, 0.05)"
            stroke="#d4af37"
            strokeWidth="2"
          />

          {/* 铁路线 */}
          <g opacity={competitorFade}>
            <path
              d="M 200,280 Q 250,260 300,290"
              fill="none"
              stroke="#6b7280"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            <path
              d="M 400,280 Q 450,260 500,290"
              fill="none"
              stroke="#6b7280"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            <path
              d="M 600,280 Q 620,260 650,290"
              fill="none"
              stroke="#6b7280"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
          </g>

          {/* 罗斯柴尔德连接 */}
          <path
            d="M 50,150 Q 100,200 150,250"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="8,4"
            opacity="0.5"
          />

          {/* 雅各布·希夫位置 */}
          <g transform="translate(150, 250)">
            <circle r="8" fill="#ffd700" />
            <text x="0" y="25" fontSize="11" fill="#0d1117" textAnchor="middle" fontWeight="600">
              Jacob Schiff
            </text>
            <text x="0" y="40" fontSize="9" fill="#9ca3af" textAnchor="middle">
              Rothschild's Agent
            </text>
          </g>

          {/* 标签 */}
          <text x="350" y="320" fontSize="14" fill="#d4af37" textAnchor="middle">
            Standard Oil Expansion
          </text>
          <text x="350" y="340" fontSize="12" fill="#9ca3af" textAnchor="middle">
            95% Railways Controlled by Rothschilds
          </text>
        </svg>
      </div>

      {/* 左侧信息 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "8%",
          width: "28%",
          opacity: rockefellerOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#ffd700",
            marginBottom: 20,
            letterSpacing: 1,
          }}
        >
          ROCKEFELLER'S TACTICS
        </div>

        <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>1.</span> Offer cash buyout → if refused...
          </div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>2.</span> Price war → destroy profits
          </div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>3.</span> Violent sabotage → if still fails...
          </div>
          <div>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>4.</span> Railway rebates → impossible competition
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: "12px",
            background: "rgba(139, 69, 19, 0.3)",
            borderLeft: "3px solid #ffd700",
          }}
        >
          <div style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>
            "The Rockefellers were mere front men."
          </div>
          <div style={{ fontSize: 15, color: "#ffd700", marginTop: 8, fontWeight: 600 }}>
            The real power behind them:
          </div>
          <div style={{ fontSize: 18, color: "#d4af37", marginTop: 4 }}>
            The House of Rothschild
          </div>
        </div>
      </div>

      {/* 右侧希夫介绍 */}
      <div
        style={{
          position: "absolute",
          top: "32%",
          right: "8%",
          width: "28%",
          opacity: interpolate(frame, [180, 360], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#9ca3af",
            marginBottom: 16,
            letterSpacing: 1,
          }}
        >
          JACOB SCHIFF
        </div>
        <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700" }}>1875:</span> Arrives in America
          </div>
          <div style={{ marginBottom: 12 }}>
            Kuhn, Loeb & Company partner
          </div>
          <div style={{ marginBottom: 12 }}>
            Rothschild family representative
          </div>
          <div style={{ marginBottom: 12 }}>
            Devise railroad rebate scheme
          </div>
          <div>
            <span style={{ color: "#ffd700" }}>Result:</span> Complete monopoly of American oil
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
          width: "250px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
