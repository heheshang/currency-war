import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Election1932DocumentaryScene - 1932年总统大选场景
 *
 * 银行家选中罗斯福
 */
export const Election1932DocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const crisisOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const rooseveltScale = spring({
    frame: frame - 150,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });
  const missionOpacity = interpolate(frame, [240, 300], [0, 1], {
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
          fontSize: 40,
          fontWeight: "bold",
          color: "#FF6347",
        }}
      >
        1932年总统大选
      </div>

      {/* 危机背景 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          opacity: crisisOpacity,
          fontSize: 24,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        1929年大萧条爆发，美国经济陷入前所未有的危机。
        <br />
        <br />
        银行倒闭潮席卷全国，人民储蓄化为乌有。
        <br />
        <br />
        银行家们需要一个能够执行他们意志的人。
      </div>

      {/* 罗斯福 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translateX(-50%) scale(${rooseveltScale})`,
          fontSize: 36,
          color: "#FFD700",
          textAlign: "center",
        }}
      >
        佛兰克林·德兰诺·罗斯福
        <br />
        <span style={{ fontSize: 20, color: "#A0A0A0" }}>被选中了</span>
      </div>

      {/* 历史使命 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: missionOpacity,
          fontSize: 22,
          color: "#FF4500",
          textAlign: "center",
        }}
      >
        国际银行家赋予罗斯福一个历史使命：
        <br />
        废除金本位
      </div>
    </AbsoluteFill>
  );
};

export default Election1932DocumentaryScene;
