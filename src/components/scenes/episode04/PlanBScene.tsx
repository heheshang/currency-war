import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * PlanBScene - B计划场景
 *
 * 展示银行家的"明修栈道，暗度陈仓"策略
 * 奥尔德里奇计划 vs 格拉斯-欧文法案
 */
export const PlanBScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 两份文件动画
  const planAPosition = interpolate(frame, [120, 300], [-150, 50], { extrapolateRight: "clamp" });
  const planBPosition = interpolate(frame, [180, 360], [150, 50], { extrapolateRight: "clamp" });

  // 内容对比淡入
  const contentOpacity = interpolate(frame, [420, 540], [0, 1], { extrapolateRight: "clamp" });

  // 银行家双面人效果
  const faceOpacity = interpolate(frame, [600, 720], [0, 1], { extrapolateRight: "clamp" });

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
          Plan B — The Two Schemes
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
          "Ming repair the road, dark crossing Chencang"
        </div>
      </div>

      {/* A计划 - 奥尔德里奇计划 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${planAPosition}%, 0)`,
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            padding: "25px",
            background: "rgba(139, 69, 19, 0.3)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "8px",
            width: "320px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#4b5563",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            PLAN A
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: "1.8",
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ffd700", fontWeight: 600 }}>Aldrich Plan</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              Openly Republican
            </div>
            <div style={{ marginBottom: 12 }}>
              Deliberately Unpopular
            </div>
            <div style={{ marginBottom: 12, fontSize: 12 }}>
              To Draw Opposition Fire
            </div>
            <div style={{ fontSize: 12 }}>
              Named After Senator Aldrich
            </div>
          </div>
        </div>
      </div>

      {/* B计划 - 格拉斯-欧文法案 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${planBPosition}%, 0)`,
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            padding: "25px",
            background: "rgba(34, 197, 94, 0.3)",
            border: "2px solid rgba(34, 197, 94, 0.3)",
            borderRadius: "8px",
            width: "320px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#22c55e",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            PLAN B
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: "1.8",
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Glass-Owen Act</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              "Democratic Opposition"
            </div>
            <div style={{ marginBottom: 12 }}>
              Promised to Break Banking Monopoly
            </div>
            <div style={{ marginBottom: 12, fontSize: 12 }}>
              Same Content, Different Wording
            </div>
          </div>
        </div>
      </div>

      {/* 对比箭头 */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: contentOpacity,
        }}
        width="200"
        height="100"
      >
        <defs>
          <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="5">
            <path d="M 0,0 L 10,10" fill="#ffd700" />
          </marker>
        </defs>

        {/* 从A到B的箭头 */}
        <path
          d="M -60,20 Q 0,0 60,20"
          fill="none"
          stroke="#ffd700"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />

        {/* 两边标签 */}
        <text x="-80" y="-10" fontSize="14" fill="#4b5563" textAnchor="end">
          Republicans
        </text>
        <text x="80" y="-10" fontSize="14" fill="#22c55e" textAnchor="start">
          Democrats
        </text>
      </svg>

      {/* 真相揭露 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: faceOpacity,
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "rgba(139, 0, 0, 0.5)",
            border: "3px solid #ffd700",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 28,
              color: "#ffd700",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            THE TRUTH
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#e8e8e8",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            Both Plans Created by the<br />
            <span style={{ color: "#ffd700", fontWeight: 600 }}>SAME BANKERS</span>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#9ca3af",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Republicans oppose "Democratic" bill.<br />
            Democrats oppose "Republican" bill.<br />
            Bankers secretly support<br />
            <span style={{ color: "#ffd700" }}>BOTH!</span>
          </div>
        </div>

        {/* 银行家双面人 */}
        <svg
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          width="200"
          height="80"
        >
          <defs>
            <mask id="halfFace">
              <rect x="-50" y="-40" width="100" height="80" fill="white" />
            <rect x="50" y="-40" width="100" height="80" fill="black" />
            </mask>
          </defs>

          {/* 正面 - 支持民主 */}
          <g mask="url(#halfFace)">
            <circle cx="0" cy="0" r="35" fill="#ffd700" />
            <text x="0" y="5" fontSize="24" fill="#0d1117" textAnchor="middle" fontWeight="600">
              Democrats
            </text>
          </g>

          {/* 背面 - 支持共和 */}
          <g transform="scale(-1, 1)">
            <circle cx="0" cy="0" r="35" fill="#4b5563" />
            <text x="0" y="5" fontSize="24" fill="#0d1117" textAnchor="middle" fontWeight="600">
              Republicans
            </text>
          </g>
        </svg>
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
