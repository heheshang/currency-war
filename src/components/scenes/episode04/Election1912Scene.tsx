import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Election1912Scene - 1912年大选场景
 *
 * 展示银行家如何操纵大选，威尔逊从反对者变成被支持者
 */
export const Election1912Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 三个候选人位置动画
  const taftX = interpolate(frame, [120, 300], [20, 35], { extrapolateRight: "clamp" });
  const rooseveltX = interpolate(frame, [150, 330], [65, 35], { extrapolateRight: "clamp" });
  const wilsonY = interpolate(frame, [180, 360], [70, 50], { extrapolateRight: "clamp" });

  // 金钱流动动画
  const moneyFlowOpacity = interpolate(frame, [420, 540], [0, 1], { extrapolateRight: "clamp" });

  // 银行家控制显现
  const bankersOpacity = interpolate(frame, [600, 780], [0, 1], { extrapolateRight: "clamp" });

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
          The 1912 Election
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
            A Fixed Election
        </div>
      </div>

      {/* 三位候选人展示 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* 塔夫特 - 共和党 incumbent */}
        <div
          style={{
            position: "absolute",
            left: `${taftX}%`,
            top: "50px",
            transform: "translate(-50%, -50%)",
            width: "140px",
            padding: "20px",
            background: "rgba(30, 58, 138, 0.3)",
            border: "2px solid #4b5563",
            borderRadius: "8px",
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
            William Taft
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8" }}>
            Republican Incumbent
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
            Opposed Aldrich Plan
          </div>
        </div>

        {/* 老罗斯福 - 进步党 spoiler */}
        <div
          style={{
            position: "absolute",
            left: `${rooseveltX}%`,
            top: "50px",
            transform: "translate(-50%, -50%)",
            width: "160px",
            padding: "20px",
            background: "rgba(220, 38, 38, 0.3)",
            border: "2px solid #d4af37",
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
            T. Roosevelt
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8" }}>
            Progressive Spoiler
          </div>
          <div style={{ fontSize: 12, color: "#f59e0b", marginTop: 8 }}>
            Splits Republican Vote
          </div>
        </div>

        {/* 威尔逊 - 民主党 */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `${wilsonY}px`,
            transform: "translate(-50%, -50%)",
            width: "160px",
            padding: "20px",
            background: "rgba(139, 69, 19, 0.3)",
            border: "2px solid #22c55e",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#22c55e",
              marginBottom: 12,
            }}
          >
            Woodrow Wilson
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8" }}>
            Democratic Choice
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
            41.8% of Popular Vote
          </div>
        </div>
      </div>

      {/* 金钱流向 - 从7位银行家到威尔逊 */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: moneyFlowOpacity,
        }}
        width="600"
        height="200"
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="3">
            <path d="M 0,0 L 0,10 L 6,5 z" fill="#ffd700" />
          </marker>
          <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>

        {/* 7位银行家群组 */}
        <g transform="translate(100, 160)">
          <ellipse rx="80" ry="40" fill="rgba(139, 69, 19, 0.3)" stroke="#ffd700" strokeWidth="2" />
          <text x="0" y="-5" fontSize="14" fill="#ffd700" textAnchor="middle">7 WALL STREET BANKERS</text>
        </g>

        {/* 箭头流向威尔逊 */}
        <path
          d="M 180,160 Q 250,120 300,100"
          fill="none"
          stroke="url(#moneyGrad)"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* 威尔逊标签 */}
        <g transform="translate(300, 100)">
          <ellipse rx="60" ry="30" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" />
          <text x="0" y="-5" fontSize="16" fill="#22c55e" textAnchor="middle">WOODROW WILSON</text>
        </g>

        {/* 数据标签 */}
        <g transform="translate(450, 140)">
          <text x="0" y="0" fontSize="14" fill="#ffd700" textAnchor="start">2/3 of funding from</text>
          <text x="0" y="20" fontSize="18" fill="#ffd700" textAnchor="start" fontWeight="600">7 Bankers</text>
          <text x="0" y="45" fontSize="14" fill="#9ca3af" textAnchor="start">Cleveland Dodge - Handler</text>
          <text x="0" y="65" fontSize="12" fill="#6b7280" textAnchor="start">Run Roosevelt to split GOP vote</text>
        </g>
      </svg>

      {/* 拉比·怀斯预言 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          opacity: bankersOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 138, 0.4)",
            borderLeft: "4px solid #ffd700",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            RABBI WISE'S PREDICTION (1910)
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 12 }}>
              "The governor of Princeton will become Governor of New Jersey."
            </div>
            <div style={{ marginBottom: 12 }}>
              "He will not complete his term."
            </div>
            <div style={{ marginBottom: 12 }}>
              "In November 1912, he will be elected President."
            </div>
            <div style={{ marginTop: 12 }}>
              "He will be one of the greatest presidents in American history."
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "250px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
