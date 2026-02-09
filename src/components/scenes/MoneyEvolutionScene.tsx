import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * MoneyEvolutionScene - 货币演变动画场景
 *
 * 展示货币形式的演变：
 * 金银 → 纸币收据 → 法币
 */
export const MoneyEvolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneFrame = frame % 90; // 每90秒循环一次

  // 演变阶段
  const stages = ["Gold", "Paper Receipt", "Fiat Currency"];
  const currentStageIndex = Math.floor(sceneFrame / 30);
  const currentStage = stages[Math.min(currentStageIndex, 2)];

  // 过渡进度
  const transitionProgress = (sceneFrame % 30) / 30;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        The Evolution of Money
      </div>

      {/* 演变动画区域 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 400,
        }}
      >
        {/* 阶段1: 金币 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${
              currentStage === "Gold"
                ? 1
                : interpolate(transitionProgress, [0, 1], [1, 0], { extrapolateRight: "clamp" })
            })`,
            opacity:
              currentStage === "Gold"
                ? 1
                : interpolate(transitionProgress, [0, 1], [1, 0], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              background:
                "radial-gradient(circle at 30% 30%, #FFD700, #B8860B)",
              borderRadius: "50%",
              boxShadow: "0 0 50px rgba(255, 215, 0, 0.6)",
              border: "10px solid #DAA520",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              color: "#ffd700",
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Gold & Silver
          </div>
        </div>

        {/* 阶段2: 纸币收据 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${
              currentStage === "Paper Receipt"
                ? 1
                : currentStage === "Gold"
                  ? interpolate(transitionProgress, [0, 1], [0, 1], { extrapolateRight: "clamp" })
                  : interpolate(transitionProgress, [0, 1], [1, 0], { extrapolateRight: "clamp" })
            })`,
            opacity:
              currentStage === "Paper Receipt"
                ? 1
                : currentStage === "Gold"
                  ? interpolate(transitionProgress, [0, 1], [0, 1], { extrapolateRight: "clamp" })
                  : interpolate(transitionProgress, [0, 1], [1, 0], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              width: 280,
              height: 180,
              background: "linear-gradient(135deg, #f5f5dc 0%, #d2b48c 100%)",
              borderRadius: 8,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              border: "2px solid #8b7355",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#8b4513",
                fontFamily: "Cinzel, serif",
                marginBottom: 10,
              }}
            >
              £
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#5c4033",
                fontFamily: "Merriweather, serif",
                textAlign: "center",
              }}
            >
              Gold Receipt
              <br />
              <span style={{ fontSize: 12, fontStyle: "italic" }}>
                Redeemable for gold
              </span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              color: "#f5f5dc",
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Paper Receipts
          </div>
        </div>

        {/* 阶段3: 法币 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${
              currentStage === "Fiat Currency"
                ? 1
                : interpolate(transitionProgress, [0, 1], [0, 1], { extrapolateRight: "clamp" })
            })`,
            opacity:
              currentStage === "Fiat Currency"
                ? 1
                : interpolate(transitionProgress, [0, 1], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              width: 300,
              height: 180,
              background: "linear-gradient(135deg, #1e3a5a 0%, #2d5a7b 100%)",
              borderRadius: 8,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              border: "3px solid #ffd700",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#ffd700",
                fontFamily: "JetBrains Mono, monospace",
                marginBottom: 10,
              }}
            >
              $
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#e8e8e8",
                fontFamily: "Merriweather, serif",
                textAlign: "center",
              }}
            >
              Fiat Currency
              <br />
              <span style={{ fontSize: 12, fontStyle: "italic" }}>
                No backing required
              </span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              color: "#1e3a5a",
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Fiat Money
          </div>
        </div>
      </div>

      {/* 箭头指示 */}
      {currentStageIndex < 2 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "60%",
            transform: "translateY(-50%)",
            fontSize: 60,
            color: "#ffd700",
            opacity: 0.5 + Math.sin(frame * 0.1) * 0.3,
          }}
        >
          →
        </div>
      )}

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
        }}
      >
        {currentStage === "Gold" && "Real money: Gold and silver"}
        {currentStage === "Paper Receipt" &&
          "Paper receipts representing gold deposits"}
        {currentStage === "Fiat Currency" &&
          "Government-declared money, no gold backing"}
      </div>
    </AbsoluteFill>
  );
};
