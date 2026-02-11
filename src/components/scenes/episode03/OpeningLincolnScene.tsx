import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * OpeningLincolnScene - 林肯开场场景
 *
 * 严肃纪录片开场，展示林肯的名言和肖像剪影
 * 营造历史厚重感和沉思氛围
 */
export const OpeningLincolnScene: React.FC = () => {
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
  const titleOpacity = interpolate(frame, [300, 420], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 林肯剪影 - 使用SVG创建严肃的侧影 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: opacity * 0.15,
        }}
      >
        <svg width={600} height={700} viewBox="0 0 600 700">
          {/* 林肯侧影剪影 */}
          <defs>
            <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>
          {/* 轮廓 - 简化的林肯侧脸 */}
          <path
            d="M 300 100
               Q 320 100, 330 120
               Q 340 140, 335 160
               L 335 180
               Q 350 190, 355 210
               Q 360 230, 355 250
               L 350 300
               Q 380 320, 400 350
               Q 420 380, 415 400
               L 410 450
               Q 400 480, 380 500
               L 370 550
               Q 360 580, 350 600
               L 345 650
               L 255 650
               L 250 600
               Q 245 580, 240 550
               L 230 500
               Q 210 480, 200 450
               L 195 400
               Q 190 380, 210 350
               Q 230 320, 260 300
               L 255 250
               Q 250 230, 255 210
               Q 260 190, 275 180
               L 275 160
               Q 270 140, 280 120
               Q 290 100, 300 100 Z"
            fill="url(#silhouetteGrad)"
          />
          {/* 帽子 - 林肯标志性的高礼帽 */}
          <path
            d="M 230 120
               L 230 80
               Q 230 60, 250 55
               L 350 55
               Q 370 60, 370 80
               L 370 120
               Q 370 130, 360 130
               L 240 130
               Q 230 130, 230 120 Z"
            fill="#1a202c"
          />
          <rect x="225" y="75" width="150" height="8" fill="#2d3748" />
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
          Episode 3
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
            fontSize: 56,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
          }}
        >
          The Century-Long War
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#e8e8e8",
            fontWeight: 400,
            textAlign: "center",
            marginTop: 15,
            letterSpacing: 1,
          }}
        >
          International Bankers vs American Presidents
        </div>
      </div>

      {/* 林肯名言 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 32,
            color: "#e8e8e8",
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "1.8",
            fontStyle: "italic",
          }}
        >
          "I have two great enemies:
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "1.8",
            marginTop: 10,
          }}
        >
          the Southern army in front of me,
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          and the financial institutions behind me."
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
            fontSize: 24,
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          — Abraham Lincoln, 1864
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
          opacity: interpolate(frame, [450, 540], [0, 1], { extrapolateRight: "clamp" }),
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
          A War That Never Ended
        </div>
      </div>

      {/* 时间线标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [540, 630], [0, 1], { extrapolateRight: "clamp" }),
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
          1791 — 1913
        </div>
      </div>
    </AbsoluteFill>
  );
};
