import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * SummaryDocumentaryScene - 第五章总结场景
 *
 * 廉价货币的真相
 */
export const SummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const essenceOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const keynesOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });
  const goldOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });
  const warOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });
  const truthScale = spring({
    frame: frame - 420,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
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
          fontSize: 36,
          fontWeight: "bold",
          color: "#FFFFFF",
        }}
      >
        总结：廉价货币的真相
      </div>

      {/* 本质 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: essenceOpacity,
          fontSize: 22,
          color: "#E0E0E0",
          textAlign: "center",
        }}
      >
        廉价货币的本质是什么？
        <br />
        是剥夺人民的经济自由，为战争铺平道路。
      </div>

      {/* 凯恩斯 */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "10%",
          right: "10%",
          opacity: keynesOpacity,
          fontSize: 18,
          color: "#C0C0C0",
          textAlign: "center",
        }}
      >
        凯恩斯的"廉价货币"理论成为银行家的工具
      </div>

      {/* 金本位 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "10%",
          right: "10%",
          opacity: goldOpacity,
          fontSize: 18,
          color: "#C0C0C0",
          textAlign: "center",
        }}
      >
        废除金本位是国际银行家的百年梦想
      </div>

      {/* 战争 */}
      <div
        style={{
          position: "absolute",
          top: "58%",
          left: "10%",
          right: "10%",
          opacity: warOpacity,
          fontSize: 18,
          color: "#C0C0C0",
          textAlign: "center",
        }}
      >
        而战争，则是他们收割财富的最佳时机
      </div>

      {/* 真相 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: `translateX(-50%) scale(${truthScale})`,
          fontSize: 28,
          color: "#FFD700",
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        人民被通胀剥夺，国家被债务奴役
        <br />
        <span style={{ fontSize: 24, color: "#FF6347" }}>
          这就是廉价货币的真相
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default SummaryDocumentaryScene;
