import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Bilderberg Club Scene - 1973年彼尔德伯格密谋
 */
export const BilderbergScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dateOpacity = interpolate(frame, [0, 30], [0, 1]);
  const titleOpacity = interpolate(frame, [20, 50], [0, 1]);
  const contentOpacity = interpolate(frame, [40, 90], [0, 1]);

  const rockefellerScale = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Date */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: dateOpacity,
        }}
      >
        May 1973
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 32,
          fontWeight: 600,
          opacity: titleOpacity,
        }}
      >
        The Bilderberg Club Meeting
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          84位国际银行家、跨国公司巨头和被选中的政客
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 20 }}>
          秘密汇聚于彼尔德伯格俱乐部
        </div>

        {/* Rockefeller */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ffd700, #b8860b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${rockefellerScale})`,
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>R</span>
          </div>
          <div style={{ marginLeft: 20, textAlign: "left" }}>
            <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600 }}>David Rockefeller</div>
            <div style={{ fontSize: 14, color: "#9ca3af" }}>戴维·洛克菲勒</div>
          </div>
        </div>

        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 25 }}>
          带来了心腹谋士布热津斯基
        </div>

        <div
          style={{
            marginTop: 30,
            padding: "15px 30px",
            background: "rgba(239, 68, 68, 0.2)",
            borderRadius: 8,
            border: "1px solid #ef4444",
          }}
        >
          <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700 }}>THE PLAN:</div>
          <div style={{ fontSize: 20, color: "#ffd700", marginTop: 8 }}>Raise Oil Prices by 400%</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
