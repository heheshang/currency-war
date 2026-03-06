import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * GoldStandardDocumentaryScene - 废除金本位场景
 *
 * 罗斯福没收民间黄金
 */
export const GoldStandardDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const orderOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const confiscationOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });
  const devaluationScale = spring({
    frame: frame - 270,
    fps: 30,
    config: { damping: 12, stiffness: 80 },
  });
  const resultOpacity = interpolate(frame, [360, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #2a1a0a 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          fontSize: 36,
          fontWeight: "bold",
          color: "#FFD700",
        }}
      >
        1933年4月5日：没收黄金
      </div>

      {/* 行政命令 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          right: "10%",
          opacity: orderOpacity,
          fontSize: 22,
          color: "#E0E0E0",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        罗斯福发布行政命令：
        <br />
        所有美国公民必须将黄金交给联邦储备银行，换取纸币。
      </div>

      {/* 没收警告 */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: confiscationOpacity,
          fontSize: 20,
          color: "#FF6347",
          textAlign: "center",
        }}
      >
        违者将被处以最高10年监禁和1万美元罚款
      </div>

      {/* 贬值 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translateX(-50%) scale(${devaluationScale})`,
          fontSize: 32,
          color: "#FF4500",
          textAlign: "center",
        }}
      >
        1934年1月：美元贬值41%
        <br />
        <span style={{ fontSize: 18, color: "#A0A0A0" }}>
          从$20.67/盎司 → $35/盎司
        </span>
      </div>

      {/* 结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "10%",
          right: "10%",
          opacity: resultOpacity,
          fontSize: 20,
          color: "#E0E0E0",
          textAlign: "center",
        }}
      >
        人民手中的纸币财富被秘密地剥夺了
        <br />
        金本位被废除了，通往战争的道路被铺平了
      </div>
    </AbsoluteFill>
  );
};

export default GoldStandardDocumentaryScene;
