import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * OpeningDocumentaryScene - 第五章开场场景
 *
 * 凯恩斯的警告：通胀如何剥夺人民财富
 */
export const OpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const quoteOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const warningOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          fontSize: 48,
          fontWeight: "bold",
          color: "#FFD700",
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        第五章：廉价货币的新政
      </div>

      {/* 凯恩斯名言 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "10%",
          right: "10%",
          opacity: quoteOpacity,
          fontSize: 28,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        "颠覆资本主义制度最好的办法就是使其货币贬值。"
        <br />
        <br />
        "通过连续的通货膨胀过程，政府可以秘密地、不为人知地没收公民财富的一部分。"
        <br />
        <br />
        —— 凯恩斯，1919年
      </div>

      {/* 警示 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: warningOpacity,
          fontSize: 24,
          color: "#FF6347",
          textShadow: "0 0 10px rgba(255, 99, 71, 0.5)",
        }}
      >
        国际银行家如何通过废除金本位铺平通往第二次世界大战的道路
      </div>
    </AbsoluteFill>
  );
};

export default OpeningDocumentaryScene;
