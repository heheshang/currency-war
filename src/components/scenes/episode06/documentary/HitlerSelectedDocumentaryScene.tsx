import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * HitlerSelectedDocumentaryScene - 华尔街选中希特勒场景
 *
 * 国际银行家投资纳粹
 */
export const HitlerSelectedDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const germanyOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const selectionScale = spring({
    frame: frame - 150,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });
  const investorsOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });
  const purposeOpacity = interpolate(frame, [360, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0a0a 0%, #0d1117 100%)",
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
          color: "#8B0000",
        }}
      >
        "风险投资"选中了希特勒
      </div>

      {/* 德国危机 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          opacity: germanyOpacity,
          fontSize: 22,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        当美国正在经历大萧条的时候，
        <br />
        大洋彼岸的德国也在经历着前所未有的经济危机。
        <br />
        <br />
        国际银行家们正在寻找一个新的代理人。
      </div>

      {/* 希特勒 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: `translateX(-50%) scale(${selectionScale})`,
          fontSize: 28,
          color: "#FF4500",
          textAlign: "center",
        }}
      >
        阿道夫·希特勒
        <br />
        <span style={{ fontSize: 18, color: "#A0A0A0" }}>进入了他们的视野</span>
      </div>

      {/* 投资者 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          right: "10%",
          opacity: investorsOpacity,
          fontSize: 20,
          color: "#C0C0C0",
          textAlign: "center",
        }}
      >
        JP摩根、洛克菲勒、福特等美国大财团都参与其中
      </div>

      {/* 目的 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: purposeOpacity,
          fontSize: 22,
          color: "#FF6347",
        }}
      >
        这是一笔"风险投资"，目的是制造一场新的战争
      </div>
    </AbsoluteFill>
  );
};

export default HitlerSelectedDocumentaryScene;
