import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { AncientMarketScene } from "../components/scenes/AncientMarketScene";
import { MoneyEvolutionScene } from "../components/scenes/MoneyEvolutionScene";
import { DebtSpiralScene } from "../components/charts/DebtSpiralScene";
import { TimelineScene } from "../components/data-viz/TimelineScene";
import { Subtitles, episode01Subtitles } from "../components/Subtitles";

/**
 * Episode01 - 第1集：序幕 - 货币的本质
 *
 * 总时长：6分钟（360秒）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 金币在阳光下，古代集市
 * 2. [30-120s] 货币演变 - 金银→纸币收据→法币
 * 3. [120-180s] 时间线 - 标注关键年份
 * 4. [180-240s] 债务锁链 - 国债缠绕货币
 * 5. [240-300s] 通货膨胀 - 财像吞噬财富
 * 6. [300-360s] 结尾 - 对未来的警示
 */
export const Episode01: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 场景1: 古代集市 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景2: 货币演变 (30-120s) */}
      <Sequence from={30 * fps} durationInFrames={90 * fps}>
        <MoneyEvolutionScene />
      </Sequence>

      {/* 场景3: 历史时间线 (120-180s) */}
      <Sequence from={120 * fps} durationInFrames={60 * fps}>
        <TimelineScene />
      </Sequence>

      {/* 场景4: 债务螺旋 (180-240s) */}
      <Sequence from={180 * fps} durationInFrames={60 * fps}>
        <DebtSpiralScene />
      </Sequence>

      {/* 场景5: 通货膨胀 (240-300s) */}
      <Sequence from={240 * fps} durationInFrames={60 * fps}>
        <InflationScene />
      </Sequence>

      {/* 场景6: 结尾警示 (300-360s) */}
      <Sequence from={300 * fps} durationInFrames={60 * fps}>
        <WarningScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode01Subtitles} />
    </AbsoluteFill>
  );
};

/**
 * InflationScene - 通货膨胀场景
 *
 * 财像吞噬财富的视觉隐喻
 */
const InflationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 财的大小
  const beastSize = interpolate(frame, [0, 60 * fps], [50, 200]);

  // 金币被吞噬数量
  const coinsEaten = Math.floor(interpolate(frame, [0, 60 * fps], [0, 20]));

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #2d1f1f 0%, #0d0d0d 100%)",
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
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        The Inflation Beast
      </div>

      {/* 财的隐喻 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* 财的身体 */}
        <div
          style={{
            width: beastSize,
            height: beastSize,
            background: "radial-gradient(circle, #8b0000 0%, #4a0000 100%)",
            borderRadius: "50%",
            boxShadow: "0 0 50px rgba(139, 0, 0, 0.8)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          {/* 眼睛 */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "25%",
              width: beastSize * 0.15,
              height: beastSize * 0.15,
              background: "#ff6b6b",
              borderRadius: "50%",
              boxShadow: "0 0 20px #ff6b6b",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: "25%",
              width: beastSize * 0.15,
              height: beastSize * 0.15,
              background: "#ff6b6b",
              borderRadius: "50%",
              boxShadow: "0 0 20px #ff6b6b",
            }}
          />

          {/* 嘴巴 */}
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: beastSize * 0.3,
              height: beastSize * 0.15,
              background: "#0d0d0d",
              borderRadius: "0 0 50% 50%",
            }}
          />
        </div>
      </div>

      {/* 被吞噬的金币 */}
      {Array.from({ length: coinsEaten }).map((_, i) => {
        const angle = (i / 20) * 360;
        const distance = 100 + i * 10;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              width: 20,
              height: 20,
              background: "radial-gradient(circle, #FFD700, #B8860B)",
              borderRadius: "50%",
              opacity: interpolate(frame, [i * 2, i * 2 + 30], [1, 0]),
            }}
          />
        );
      })}

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
        }}
      >
        Inflation silently eats away your wealth...
        <br />
        <span
          style={{
            color: "#ef4444",
            fontWeight: 600,
            fontSize: 28,
          }}
        >
          ...while you sleep.
        </span>
      </div>
    </AbsoluteFill>
  );
};

/**
 * WarningScene - 结尾警示场景
 *
 * 对中国未来的警示
 */
const WarningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 文字淡入
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 警告文字 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            marginBottom: 20,
            lineHeight: "1.6",
          }}
        >
          This is not just history...
        </div>

        <div
          style={{
            fontSize: 48,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 30,
            lineHeight: "1.4",
          }}
        >
          It's happening now.
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#ef4444",
            fontFamily: "Merriweather, serif",
            fontWeight: 600,
            maxWidth: "70%",
            lineHeight: "1.5",
          }}
        >
          Understanding money is the first step
          <br />
          to protecting your wealth.
        </div>
      </div>

      {/* 系列标题 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Currency War
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
          }}
        >
          Episode 1 of 10
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode01;
