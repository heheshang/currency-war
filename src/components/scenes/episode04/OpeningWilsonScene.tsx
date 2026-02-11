import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * OpeningWilsonScene - 威尔逊开场场景
 *
 * 严肃纪录片开场，展示威尔逊的名言和肖像
 * 营造历史厚重感和沉思氛围
 */
export const OpeningWilsonScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 淡入动画
  const opacity = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });

  // 缩放动画 - 缓慢放大
  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 20, stiffness: 30 },
  });

  // 文字逐行淡入
  const quoteOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });
  const authorOpacity = interpolate(frame, [180, 270], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [300, 450], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 威尔逊剪影 - 使用SVG创建严肃的侧影 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: opacity * 0.12,
        }}
      >
        <svg width={500} height={600} viewBox="0 0 500 600">
          <defs>
            <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>
          {/* 威尔逊侧影剪影 - 简化的侧脸轮廓 */}
          <path
            d="M 250 100
               Q 270 100, 290 120
               Q 310 140, 300 160
               L 295 180
               Q 310 190, 315 210
               Q 325 230, 325 250
               L 310 290
               Q 340 310, 360 340
               Q 370 370, 370 400
               L 355 450
               Q 345 480, 330 500
               L 310 550
               Q 300 580, 290 600
               L 285 650
               Q 275 680, 265 700
               L 220 700
               Q 210 660, 200 600
               L 185 500
               Q 180 470, 190 420
               Q 185 380, 200 350
               Q 220 300, 240 270
               L 245 230
               Q 250 200, 265 180
               L 275 160
               Q 280 140, 295 120
               Q 305 100, 300 100 Z"
            fill="url(#silhouetteGrad)"
          />
        </svg>
      </div>

      {/* 剧集标题 */}
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
            fontSize: 28,
            color: "#9ca3af",
            fontWeight: 400,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Episode 4
        </div>
      </div>

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 52,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
          }}
        >
          The Federal Reserve
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#e8e8e8",
            fontWeight: 400,
            textAlign: "center",
            marginTop: 12,
            letterSpacing: 1,
          }}
        >
          A Private Central Bank
        </div>
      </div>

      {/* 威尔逊名言 */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 30,
            color: "#e8e8e8",
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "1.8",
            fontStyle: "italic",
          }}
        >
          "A great industrial nation is controlled by its system of credit."
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 30,
            color: "#ffd700",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "1.8",
            marginTop: 8,
          }}
        >
          Our system of credit is concentrated.
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 30,
            color: "#ffd700",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "1.8",
            marginTop: 8,
          }}
        >
          The growth of the nation is in the hands of a few men.
        </div>
      </div>

      {/* 作者署名 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: authorOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          — Woodrow Wilson, 28th U.S. President
        </div>
      </div>

      {/* 装饰线 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: authorOpacity,
        }}
      />

      {/* 底部提示 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [600, 720], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#6b7280",
            textAlign: "center",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          The Beginning of the End
        </div>
      </div>

      {/* 时间线标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [750, 900], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 16,
            color: "#4b5563",
            textAlign: "center",
          }}
        >
          1913 — 1913
        </div>
      </div>
    </AbsoluteFill>
  );
};
