import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * StrongWartimeFedScene - 场景2：斯特朗的战时美联储
 *
 * 资金流动动画（复用Panic1907Scene的金币模式）
 * 债券购买流程图
 * 斯特朗角色指挥资金
 */
export const StrongWartimeFedScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 金币流动动画
  const coinsFlow = interpolate(frame, [120, 540], [0, 1], { extrapolateRight: "clamp" });

  // 国债数字增长
  const debtCounter = interpolate(frame, [240, 720], [1, 25], { extrapolateRight: "clamp" });

  // 斯特朗角色淡入
  const strongOpacity = interpolate(frame, [180, 300], [0, 1], { extrapolateRight: "clamp" });

  // 标题淡入
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  // 统计面板淡入
  const statsOpacity = interpolate(frame, [360, 480], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a2020 0%, #0d1117 100%)",
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
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Wartime Federal Reserve
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
          Under Benjamin Strong's Control
        </div>
      </div>

      {/* 资金流动可视化 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
        }}
      >
        <svg width="600" height="200" viewBox="0 0 600 200">
          <defs>
            <linearGradient id="goldFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* 债券购买路径 */}
          <path
            d="M 50,100 Q 200,80 300,100 Q 400,120 550,100"
            fill="none"
            stroke="#4b5563"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />

          {/* 流动的金币 */}
          {Array.from({ length: 8 }).map((_, i) => {
            const coinFrameOffset = i * 60;
            const coinProgress = interpolate(
              frame - coinFrameOffset,
              [0, 180],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );

            if (coinProgress <= 0) return null;

            const x = interpolate(coinProgress, [0, 1], [50, 550]);
            const y = 100 + Math.sin(coinProgress * Math.PI * 2) * 15;
            const scale = coinProgress < 0.1 || coinProgress > 0.9 ? 0 : 1;

            return (
              <g key={i} opacity={coinsFlow}>
                <circle cx={x} cy={y} r="12" fill="url(#goldFlow)" stroke="#d4af37" strokeWidth="2" />
                <text x={x} y={y + 4} fontSize="10" fill="#1a2020" textAnchor="middle">
                  $
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 斯特朗角色 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "20%",
          opacity: strongOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.2}
          characterType="banker"
          action="point"
          facingRight={true}
          frame={frame}
        />
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Benjamin Strong
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              textAlign: "center",
            }}
          >
            "Directing the flow"
          </div>
        </div>
      </div>

      {/* 国债统计 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 20,
              textAlign: "center",
              letterSpacing: 1,
            }}
          >
            U.S. National Debt
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
                fontSize: 48,
                fontWeight: 700,
                color: "#22c55e",
              }}
            >
              ${Math.round(debtCounter)}
            </span>
            <span
              style={{
                fontSize: 20,
                color: "#9ca3af",
                marginLeft: 8,
              }}
            >
              Billion
            </span>
          </div>

          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>1914:</span> $1 Billion
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#f87171" }}>1919:</span> $25 Billion
            </div>
            <div style={{ color: "#22c55e", fontWeight: 600 }}>
              25x Increase
            </div>
          </div>
        </div>
      </div>

      {/* 底部说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          "The NY Fed bank controlled the entire system."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          Liberty Bonds financed the war machine.
        </div>
      </div>
    </AbsoluteFill>
  );
};
