import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * WilsonWarDecisionScene - 场景3：威尔逊的战争决策
 *
 * 威尔逊角色（politician类型，talk动作）
 * "民主与道德原则"报纸标题动画
 * 幕后操纵者的线与木偶效果
 */
export const WilsonWarDecisionScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 威尔逊角色淡入
  const wilsonOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });

  // 报纸标题淡入
  const headlineOpacity = interpolate(frame, [120, 240], [0, 1], { extrapolateRight: "clamp" });

  // 木偶线动画
  const puppetStringY = interpolate(frame, [240, 420], [0, 80], { extrapolateRight: "clamp" });
  const puppetStringOpacity = interpolate(frame, [240, 300], [0, 1], { extrapolateRight: "clamp" });

  // 幕后银行家淡入
  const bankerOpacity = interpolate(frame, [360, 480], [0, 1], { extrapolateRight: "clamp" });

  // 真相文字淡入
  const truthOpacity = interpolate(frame, [540, 660], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e293b 0%, #0d1117 100%)",
      }}
    >
      {/* 威尔逊角色 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "30%",
          opacity: wilsonOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.3}
          characterType="politician"
          action="talk"
          facingRight={true}
          frame={frame}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#e8e8e8",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            President Woodrow Wilson
          </div>
        </div>
      </div>

      {/* 报纸标题 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "15%",
          opacity: headlineOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "#f5f5f4",
            border: "3px double #1a1a1a",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transform: `rotate(${-2 + Math.sin(frame * 0.02) * 1}deg)`,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#1a1a1a",
              textAlign: "center",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            THE NEW YORK TIMES
          </div>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#8b0000",
              textAlign: "center",
              fontWeight: 700,
              lineHeight: "1.3",
            }}
          >
            "We Fight For Moral Principles!"
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#4b5563",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Democracy & Freedom • April 1917
          </div>
        </div>
      </div>

      {/* 木偶线 */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "35%",
          zIndex: 1,
        }}
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <line
          x1="100"
          y1="0"
          x2="100"
          y2={puppetStringY}
          stroke="#ffd700"
          strokeWidth="2"
          strokeDasharray="4,4"
          opacity={puppetStringOpacity}
        />
        <circle cx="100" cy="0" r="5" fill="#ffd700" />
      </svg>

      {/* 幕后银行家 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "55%",
          opacity: bankerOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.1}
          characterType="banker"
          action="think"
          facingRight={false}
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
              fontSize: 16,
              color: "#ffd700",
              textAlign: "center",
            }}
          >
            Wall St. Bankers
          </div>
        </div>
      </div>

      {/* 贷款金额显示 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "55%",
          opacity: bankerOpacity,
        }}
      >
        <div
          style={{
            padding: "16px",
            background: "rgba(139, 0, 0, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
            Loans to Allies
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#ffd700",
            }}
          >
            $30 Billion
          </div>
        </div>
      </div>

      {/* 真相揭示 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: truthOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 22,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "The reality: Protecting $30 billion in loans."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Not moral principles. Not democracy.
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#ef4444",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Just business.
        </div>
      </div>
    </AbsoluteFill>
  );
};
