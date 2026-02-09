import React from "react";
import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";

interface NathanRothschildProps {
  emotion?: "serious" | "smiling" | "concerned";
  scale?: number;
}

/**
 * NathanRothschild - 内森·罗斯柴尔德人物组件
 *
 * 展现内森·罗斯柴尔德的形象
 * 使用CSS/SVG绘制，无需外部图片
 */
export const NathanRothschild: React.FC<NathanRothschildProps> = ({
  emotion = "serious",
  scale = 1,
}) => {
  const frame = useCurrentFrame();

  // 呼吸动画
  const breathScale = interpolate(frame % 60, [0, 30, 60], [1, 1.02, 1]);

  // 眼神闪烁
  const eyeBlink = interpolate(frame % 180, [0, 5, 10], [0, 1, 0]);

  const combinedScale = scale * breathScale;

  // 根据情绪选择颜色
  const getEmotionColor = () => {
    switch (emotion) {
      case "smiling":
        return { eyes: "#2c1810", mouth: "#8b4513" };
      case "concerned":
        return { eyes: "#4a3728", mouth: "#2c1810" };
      default:
        return { eyes: "#1a1a1a", mouth: "#2c1810" };
    }
  };

  const colors = getEmotionColor();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 200 * combinedScale,
          height: 300 * combinedScale,
        }}
      >
        {/* 身体/礼服 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 160 * combinedScale,
            height: 180 * combinedScale,
            background: "linear-gradient(180deg, #1e3a5a 0%, #0d1f33 100%)",
            borderRadius: "20px 20px 0 0",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* 领结 */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 30 * combinedScale,
              height: 20 * combinedScale,
              background: "#ffd700",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />

          {/* 金链子 */}
          <div
            style={{
              position: "absolute",
              top: "18%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 40 * combinedScale,
              height: 60 * combinedScale,
              border: "3px solid #ffd700",
              borderRadius: "50%",
              borderBottom: "none",
            }}
          />
        </div>

        {/* 头部 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120 * combinedScale,
            height: 140 * combinedScale,
            background: "linear-gradient(180deg, #f5deb3 0%, #deb887 100%)",
            borderRadius: "60px 60px 40px 40px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* 头发 */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "#1a1a1a",
              borderRadius: "60px 60px 0 0",
            }}
          />

          {/* 侧发 */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: -5,
              width: 30 * combinedScale,
              height: 80 * combinedScale,
              background: "#1a1a1a",
              borderRadius: "50%",
              transform: "rotate(-10deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: -5,
              width: 30 * combinedScale,
              height: 80 * combinedScale,
              background: "#1a1a1a",
              borderRadius: "50%",
              transform: "rotate(10deg)",
            }}
          />

          {/* 眉毛 */}
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "25%",
              width: 25 * combinedScale,
              height: 3,
              background: "#1a1a1a",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              right: "25%",
              width: 25 * combinedScale,
              height: 3,
              background: "#1a1a1a",
              borderRadius: "2px",
            }}
          />

          {/* 眼睛 */}
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "30%",
              width: 15 * combinedScale,
              height: 15 * combinedScale * (1 - eyeBlink * 0.5),
              background: colors.eyes,
              borderRadius: "50%",
              boxShadow: `0 0 ${5 * combinedScale}px ${colors.eyes}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "42%",
              right: "30%",
              width: 15 * combinedScale,
              height: 15 * combinedScale * (1 - eyeBlink * 0.5),
              background: colors.eyes,
              borderRadius: "50%",
              boxShadow: `0 0 ${5 * combinedScale}px ${colors.eyes}`,
            }}
          />

          {/* 鼻子 */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 10 * combinedScale,
              height: 15 * combinedScale,
              background: "rgba(139, 69, 19, 0.3)",
              borderRadius: "50%",
            }}
          />

          {/* 嘴巴 */}
          <div
            style={{
              position: "absolute",
              bottom: "18%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 30 * combinedScale,
              height: emotion === "smiling" ? 8 : 4,
              background: colors.mouth,
              borderRadius: emotion === "smiling" ? "0 0 20px 20px" : "2px",
            }}
          />
        </div>

        {/* 名字标签 */}
        {emotion === "serious" && (
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#ffd700",
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              fontWeight: 600,
              whiteSpace: "nowrap",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            Nathan Rothschild
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
