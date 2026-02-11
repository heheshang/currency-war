import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * WilsonRealizationScene - 威尔逊的醒悟场景
 *
 * 展示威尔逊总统晚年悔恨，意识到自己被欺骗
 * "我在无意之中摧毁了我的国家"
 */
export const WilsonRealizationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 年老的威尔逊淡入
  const agedWilsonOpacity = interpolate(frame, [120, 300], [0, 1], { extrapolateRight: "clamp" });

  // 真相文字淡入
  const truthOpacity = interpolate(frame, [360, 540], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#8b0000",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Wilson's Realization
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#d4af37",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          "I Have Unwittingly Ruined My Country"
        </div>
      </div>

      {/* 年老的威尔逊 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: agedWilsonOpacity,
        }}
      >
        <svg width={350} height={450} viewBox="0 0 350 450">
          <defs>
            <radialGradient id="faceGrad">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#1a202c" />
            </radialGradient>
            <filter id="shadow" x="-20%" y="-20%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feFlood floodColor="#000000" floodOpacity="0.3" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 威尔逊侧影 - 年老、疲惫 */}
          <g filter="url(#shadow)">
            {/* 头部轮廓 */}
            <ellipse
              cx="175"
              cy="100"
              rx="70"
              ry="85"
              fill="url(#faceGrad)"
            />

            {/* 深陷的眼睛 */}
            <ellipse
              cx="155"
              cy="95"
              rx="18"
              ry="12"
              fill="#1a202c"
            />
            <ellipse
              cx="195"
              cy="95"
              rx="18"
              ry="12"
              fill="#1a202c"
            />

            {/* 疲惫的眼睛 */}
            <circle
              cx="155"
              cy="95"
              r="5"
              fill="#2d3748"
            />
            <circle
              cx="195"
              cy="95"
              r="5"
              fill="#2d3748"
            />

            {/* 皱眉 */}
            <path
              d="M 135,75 Q 145,70 155,75 Q 175,70 195,75"
              fill="none"
              stroke="#3d2748"
              strokeWidth="3"
            />

            {/* 紧闭的嘴唇 */}
            <path
              d="M 145,130 Q 155,140 175,130 Q 195,140 205,125"
              fill="#3d2748"
              stroke="#2d1f1f"
              strokeWidth="1"
            />

            {/* 白发 - 年老 */}
            <path
              d="M 120,80 Q 140,70 160,60 L 175,50 Q 190,55 210,70 Q 220,90 230,110"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* 领子 - 衬衫领结 */}
            <path
              d="M 140,170 L 160,170 L 175,185 L 175,200 L 190,195"
              fill="none"
              stroke="#4b5563"
              strokeWidth="3"
            />
            <circle cx="167" cy="182" r="8" fill="#4b5563" />
          </g>

          {/* 标签 */}
          <text x="175" y="280" fontSize="16" fill="#9ca3af" textAnchor="middle">
            Woodrow Wilson
          </text>
          <text x="175" y="305" fontSize="12" fill="#6b7280" textAnchor="middle">
            (1856-1924)
          </text>
        </svg>
      </div>

      {/* 真相揭露 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "8%",
          width: "40%",
          opacity: truthOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 20,
            color: "#ffd700",
            marginBottom: 20,
            letterSpacing: 1,
          }}
        >
          THE TRUTH
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.8",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            Before he died, Woodrow Wilson admitted:
          </div>
          <div style={{
            padding: "16px",
            background: "rgba(139, 0, 0, 0.4)",
            borderLeft: "4px solid #ffd700",
            marginTop: 12,
          }}>
            <div style={{ fontSize: 24, color: "#ffd700", fontStyle: "italic", marginBottom: 12 }}>
              "I have unwittingly ruined my country."
            </div>
            <div style={{ fontSize: 14, marginTop: 8 }}>
              He realized he had been deceived.
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            The Federal Reserve was <span style={{ color: "#ffd700", fontWeight: 600 }}>NOT</span> what he believed.
          </div>

          <div style={{ marginTop: 16 }}>
            The "people's bank" was a <span style={{ color: "#ffd700", fontWeight: 600 }}>private monopoly</span>.
          </div>

          <div style={{ marginTop: 20, fontSize: 13, color: "#9ca3af" }}>
            Government does NOT issue dollars.
          </div>

          <div style={{ marginTop: 12, fontSize: 15 }}>
            Every dollar in your pocket =
          </div>

          <div style={{
            marginTop: 8,
            fontSize: 18,
            color: "#ffd700",
            fontWeight: 600
          }}>
            Debt + Interest Owed to Bankers
          </div>
        </div>
      </div>

      {/* 破碎的美元符号 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: truthOpacity,
        }}
      >
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width="120"
            height="60"
            viewBox="0 0 120 60"
            style={{
              position: "absolute",
              left: `${i * 150 - 150}px`,
              bottom: `${i * 30}px`,
              opacity: 1 - i * 0.3,
            }}
          >
            <circle
              cx="60"
              cy="30"
              r="28"
              fill="none"
              stroke="#ffd700"
              strokeWidth="2"
            />
            <text
              x="60"
              y="36"
              fontSize="28"
              fill="#ffd700"
              textAnchor="middle"
              fontWeight="700"
            >
              $
            </text>
          </svg>
        ))}
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "250px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
