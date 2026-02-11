import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * SevenTycoonsScene - 华尔街7巨头场景
 *
 * 展示控制美国的7位银行家巨头及其与罗斯柴尔德家族的联系
 */
export const SevenTycoonsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 名字卡片动画
  const cardsOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });
  const cardsScale = spring({
    frame: frame >= 60 ? frame - 60 : 0,
    fps: 30,
    config: { damping: 15, stiffness: 50 },
  });

  // 穆迪名言淡入
  const quoteOpacity = interpolate(frame, [360, 480], [0, 1], { extrapolateRight: "clamp" });

  // 连接线淡入
  const linesOpacity = interpolate(frame, [540, 660], [0, 1], { extrapolateRight: "clamp" });

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
          opacity: containerOpacity,
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
          Wall Street's 7 Tycoons
        </div>
      </div>

      {/* 7位巨头卡片网格 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${cardsScale})`,
          opacity: cardsOpacity,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          width: "900px",
        }}
      >
        {/* J.P. Morgan Group */}
        <div
          style={{
            width: "260px",
            padding: "20px",
            background: "rgba(30, 58, 138, 0.8)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            MORGAN GROUP
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div>• J.P. Morgan</div>
            <div>• James Stillman</div>
            <div>• George Baker</div>
          </div>
        </div>

        {/* Standard Oil Group */}
        <div
          style={{
            width: "260px",
            padding: "20px",
            background: "rgba(139, 69, 19, 0.8)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            STANDARD OIL GROUP
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div>• John D. Rockefeller</div>
            <div>• William Rockefeller</div>
            <div>• Jacob Schiff</div>
            <div>• James Stillman</div>
          </div>
        </div>
      </div>

      {/* 穆迪名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 26,
            color: "#e8e8e8",
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "1.8",
            fontStyle: "italic",
          }}
        >
          "The seven men control most of America's basic industries and resources."
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          The core of this capital controls America.
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          — John Moody, Founder of Moody's, 1911
        </div>
      </div>

      {/* 与罗斯柴尔德的连接 */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: linesOpacity,
          pointerEvents: "none",
        }}
        width="100%"
        height="100%"
      >
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3">
            <path d="M 0,0 L 10,10" fill="#ffd700" />
          </marker>
        </defs>

        {/* 伦敦到纽约的连接线 */}
        <path
          d="M 150,540 Q 200,500 300,520 Q 350,540 400,500 L 450,540"
          fill="none"
          stroke="#8b0000"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead)"
        />

        {/* 罗斯柴尔德家族标签 */}
        <text x="120" y="560" fontSize="16" fill="#ffd700" textAnchor="end" fontWeight="600">
          Rothschild Family, London
        </text>

        {/* 纽约银行家群组 */}
        <g transform="translate(450, 540)">
          <circle r="100" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
          <text x="0" y="4" fontSize="14" fill="#9ca3af" textAnchor="middle">
            Wall Street Bankers
          </text>
        </g>
      </svg>

      {/* 幕布暗角效果 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 70%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
