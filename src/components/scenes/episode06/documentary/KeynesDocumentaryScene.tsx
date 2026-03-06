import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * KeynesDocumentaryScene - 凯恩斯廉价货币理论场景
 *
 * 凯恩斯如何成为银行家的理论工具
 */
export const KeynesDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const keynesScale = spring({
    frame: frame - 60,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });
  const goldOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });
  const reasonOpacity = interpolate(frame, [300, 360], [0, 1], {
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
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          fontSize: 40,
          fontWeight: "bold",
          color: "#C0C0C0",
        }}
      >
        凯恩斯的"廉价货币"
      </div>

      {/* 凯恩斯 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translateX(-50%) scale(${keynesScale})`,
          fontSize: 36,
          color: "#FFD700",
          textAlign: "center",
        }}
      >
        "黄金是野蛮的遗迹"
        <br />
        <span style={{ fontSize: 24, color: "#A0A0A0" }}>—— 凯恩斯</span>
      </div>

      {/* 黄金与自由 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "10%",
          right: "10%",
          opacity: goldOpacity,
          fontSize: 24,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        在人类长达5000年的社会实践中，黄金被世人公认是财富的最终形式。
        <br />
        <br />
        当政府强行剥夺人民将纸币兑换黄金这一权力的时候，
        <br />
        也就从根本上剥夺了人民最基本的自由。
      </div>

      {/* 银行家的目的 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: reasonOpacity,
          fontSize: 22,
          color: "#FF6347",
          textAlign: "center",
        }}
      >
        银行家需要危机和衰退来废除金本位
        <br />
        因为正常情况下，人民绝不会放弃他们的黄金
      </div>
    </AbsoluteFill>
  );
};

export default KeynesDocumentaryScene;
