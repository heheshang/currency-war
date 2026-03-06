import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * WallStreetNaziDocumentaryScene - 华尔街资助纳粹场景
 *
 * 美国财团如何资助纳粹德国
 */
export const WallStreetNaziDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const companiesOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const bisOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });
  const warScale = spring({
    frame: frame - 300,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #0a0a1a 0%, #0d1117 100%)",
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
          color: "#4B0082",
        }}
      >
        华尔街资助下的纳粹德国
      </div>

      {/* 公司列表 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          opacity: companiesOpacity,
          fontSize: 20,
          color: "#E0E0E0",
          lineHeight: 1.8,
          textAlign: "center",
        }}
      >
        <span style={{ color: "#FFD700" }}>标准石油</span>
        ：提供四乙基铅技术，用于航空燃料
        <br />
        <span style={{ color: "#FFD700" }}>IBM</span>
        ：提供打孔卡片系统，用于集中营管理
        <br />
        <span style={{ color: "#FFD700" }}>福特汽车</span>：为纳粹生产军用卡车
        <br />
        <span style={{ color: "#FFD700" }}>美国银行家</span>
        ：通过国际清算银行提供融资
      </div>

      {/* BIS */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "10%",
          right: "10%",
          opacity: bisOpacity,
          fontSize: 20,
          color: "#A0A0A0",
          textAlign: "center",
        }}
      >
        即使在二战期间，这些金融往来仍在继续。
        <br />
        <br />
        美国和英国的银行家与纳粹德国银行家
        <br />
        同坐国际清算银行董事会。
      </div>

      {/* 战争生意 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: `translateX(-50%) scale(${warScale})`,
          fontSize: 24,
          color: "#FF4500",
        }}
      >
        战争，对他们来说，只是另一场赚钱的生意
      </div>
    </AbsoluteFill>
  );
};

export default WallStreetNaziDocumentaryScene;
