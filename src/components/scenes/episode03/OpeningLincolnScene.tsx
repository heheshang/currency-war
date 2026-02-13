import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * OpeningLincolnScene - 林肯开场场景
 *
 * 严肃纪录片开场，展示林肯的名言和肖像剪影
 *
 * 字幕配置（在Scene组件内定义）
 * 时长：15秒 (450帧 @30fps)
 * 字幕条目数量：3条
 */
export const OpeningLincolnScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 淡入动画
  const opacity = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });


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
    </AbsoluteFill>
  );
};

/**
 * 字幕配置常量 - 便于统一管理
 * 时长：15秒 (450帧)
 */
export const OPENING_LINCOLN_SCENE_DURATION = 15 * 30; // 450 frames
export const OPENING_LINCOLN_SUBS = [
  { startFrame: 0, endFrame: 150, text: "I have two great enemies: the Southern army in front of me, and the financial institutions behind me.", translation: "我有两个强大的敌人：我面前的南方军队，还有后面的金融机构。" },
  { startFrame: 150, endFrame: 300, text: "Of the two, the latter is the greatest threat.", translation: "在这两者之中，后者才是最大的威胁。" },
  { startFrame: 300, endFrame: 450, text: "— Abraham Lincoln, 1864", translation: "—— 亚伯拉罕·林肯，1864年" },
];

export default OpeningLincolnScene;
