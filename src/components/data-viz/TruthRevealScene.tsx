import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * TruthRevealScene - 真相揭露场景
 *
 * 使用信息图表风格揭露美联储的真相
 * 私人银行控制美国货币发行权
 */
export const TruthRevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 展开动画
  const card1Y = interpolate(frame, [0, 60], [100, 50]);
  const card2Y = interpolate(frame, [30, 90], [100, 50]);
  const card3Y = interpolate(frame, [60, 120], [100, 50]);

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #1a1a2e 0%, #0d1117 70%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The Truth Revealed
      </div>

      {/* 真相卡片 */}
      <div
        style={{
          position: "absolute",
          top: `${card1Y}%`,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 150,
          background:
            "linear-gradient(135deg, rgba(30, 58, 90, 0.9) 0%, rgba(13, 17, 23, 0.95) 100%)",
          border: "3px solid #ffd700",
          borderRadius: 10,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            marginBottom: 10,
          }}
        >
          PRIVATE
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          The Federal Reserve is privately owned
          <br />
          by banking families
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: `${card2Y}%`,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 150,
          background:
            "linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(30, 17, 23, 0.95) 100%)",
          border: "3px solid #ef4444",
          borderRadius: 10,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            marginBottom: 10,
          }}
        >
          DECEPTION
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          Sold to the public as a "government" agency
          <br />
          ...but privately controlled
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: `${card3Y}%`,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 150,
          background: "linear-gradient(135deg, #1e3a5a 0%, #0d1117 100%)",
          border: "3px solid #8b0000",
          borderRadius: 10,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: interpolate(frame, [90, 120], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            marginBottom: 10,
          }}
        >
          CONTROL
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          They control our money supply
          <br />
          ...and thus, our nation's destiny
        </div>
      </div>

      {/* 结论文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        The greatest heist in history...
        <br />
        <span
          style={{
            color: "#ffd700",
            fontWeight: 600,
            fontSize: 24,
          }}
        >
          ...conceived in the shadows.
        </span>
      </div>
    </AbsoluteFill>
  );
};
