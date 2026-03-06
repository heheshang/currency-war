import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * WarAndMoneyDocumentaryScene - 昂贵的战争与廉价的货币场景
 *
 * 废除金本位铺平通往二战的道路
 */
export const WarAndMoneyDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const moneyOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const printingScale = spring({
    frame: frame - 150,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });
  const harvestOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultOpacity = interpolate(frame, [360, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a1a0a 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          fontSize: 36,
          fontWeight: "bold",
          color: "#FFD700",
        }}
      >
        昂贵的战争与廉价的货币
      </div>

      {/* 金本位与战争 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          opacity: moneyOpacity,
          fontSize: 22,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        废除金本位铺平了通往第二次世界大战的金融大道。
        <br />
        <br />
        没有金本位的约束，政府可以无限印钞。
        <br />
        战争需要大量的资金，廉价货币提供了无限的弹药。
      </div>

      {/* 货币供应 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: `translateX(-50%) scale(${printingScale})`,
          fontSize: 28,
          color: "#FF4500",
          textAlign: "center",
        }}
      >
        1939-1945年
        <br />
        美国货币供应量增加了
        <span style={{ fontSize: 36, color: "#FFD700" }}>3倍</span>
      </div>

      {/* 银行家收获 */}
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "10%",
          right: "10%",
          opacity: harvestOpacity,
          fontSize: 20,
          color: "#C0C0C0",
          textAlign: "center",
        }}
      >
        战争结束后，国际银行家的收获是巨大的：
        <br />
        布雷顿森林体系确立了美元的霸权地位
      </div>

      {/* 结论 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: resultOpacity,
          fontSize: 22,
          color: "#FF6347",
        }}
      >
        昂贵的战争由人民承担代价，廉价的货币让银行家获利
      </div>
    </AbsoluteFill>
  );
};

export default WarAndMoneyDocumentaryScene;
