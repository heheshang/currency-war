import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { BattleOfWaterloo } from "../components/scenes/BattleOfWaterloo";
import { StockExchangeScene } from "../components/scenes/StockExchangeScene";
import { NathanRothschild } from "../components/characters/NathanRothschild";

/**
 * Episode03 - 第3集：滑铁卢战役 - 信息与金钱的战争
 *
 * 总时长：6分钟（360秒）
 *
 * 场景序列：
 * 1. [0-60s] 滑铁卢战场 - 战争场面
 * 2. [60-150s] 情报传递 - 从滑铁卢到伦敦
 * 3. [150-180s] 交易所门口 - 内森入场
 * 4. [180-240s] 第一次抛售 - 股价暴跌
 * 5. [240-300s] 恐慌蔓延 - 人群骚乱
 * 6. [300-330s] 反向操作 - 内森秘密买进
 * 7. [330-360s] 20倍收益 - 史诗结局
 */
export const Episode03: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景音乐 - 悬疑紧张风格 */}
      {/* TODO: Add audio file to public/ folder */}
      {/* <Audio src={staticFile("audio/bgm/tension.mp3")} volume={0.5} /> */}

      {/* 场景1: 滑铁卢战场 (0-60s) */}
      <Sequence durationInFrames={60 * fps}>
        <BattleOfWaterloo />
      </Sequence>

      {/* 场景2: 情报传递路径动画 (60-150s) */}
      <Sequence from={60 * fps} durationInFrames={90 * fps}>
        <IntelligencePathScene />
      </Sequence>

      {/* 场景3: 交易所门口 (150-180s) */}
      <Sequence from={150 * fps} durationInFrames={30 * fps}>
        <ExchangeEntranceScene />
      </Sequence>

      {/* 场景4: 第一次抛售 (180-240s) */}
      <Sequence from={180 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
      </Sequence>

      {/* 场景5: 恐慌蔓延 (240-300s) */}
      <Sequence from={240 * fps} durationInFrames={60 * fps}>
        <PanicSpreadScene />
      </Sequence>

      {/* 场景6: 反向操作 (300-330s) */}
      <Sequence from={300 * fps} durationInFrames={30 * fps}>
        <ReverseOperationScene />
      </Sequence>

      {/* 场景7: 20倍收益 (330-360s) */}
      <Sequence from={330 * fps} durationInFrames={30 * fps}>
        <ProfitScene />
      </Sequence>
    </AbsoluteFill>
  );
};

/**
 * IntelligencePathScene - 情报传递路径场景
 */
const IntelligencePathScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pathProgress = interpolate(frame, [0, 90 * fps], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 36,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div>The Intelligence Network</div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginTop: 10,
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
          }}
        >
          Waterloo to London: Information is Power
        </div>
      </div>

      {/* 地图区域 */}
      <svg
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "50%",
        }}
        viewBox="0 0 800 400"
      >
        {/* 英国地图简化版 */}
        <path
          d="M 100 200 Q 200 100, 400 150 Q 600 100, 700 200 L 700 300 Q 600 350, 400 300 Q 200 350, 100 300 Z"
          fill="rgba(30, 58, 90, 0.3)"
          stroke="#ffd700"
          strokeWidth="2"
        />

        {/* 滑铁卢位置 */}
        <circle cx="200" cy="250" r="8" fill="#ffd700">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="200"
          y="280"
          fill="#e8e8e8"
          fontSize="16"
          fontFamily="Cinzel, serif"
          textAnchor="middle"
        >
          Waterloo
        </text>

        {/* 伦敦位置 */}
        <circle cx="600" cy="200" r="8" fill="#ffd700">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="600"
          y="230"
          fill="#e8e8e8"
          fontSize="16"
          fontFamily="Cinzel, serif"
          textAnchor="middle"
        >
          London
        </text>

        {/* 情报传递路径 */}
        <path
          d="M 200 250 Q 400 150, 600 200"
          stroke="#ffd700"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10, 5"
          opacity={pathProgress}
        />

        {/* 信使位置 */}
        <circle
          cx={interpolate(pathProgress, [0, 1], [200, 600])}
          cy={interpolate(pathProgress, [0, 1], [250, 200])}
          r="6"
          fill="#ff6b6b"
          style={{
            filter: "drop-shadow(0 0 10px #ff6b6b)",
          }}
        />
      </svg>

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "60%",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Nathan Rothschild's messenger learns the truth at Waterloo... and races
        to London before anyone else.
      </div>
    </AbsoluteFill>
  );
};

/**
 * ExchangeEntranceScene - 交易所门口场景
 */
const ExchangeEntranceScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <NathanRothschild emotion="serious" scale={2} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 28,
          textAlign: "center",
        }}
      >
        "I know the truth."
      </div>
    </AbsoluteFill>
  );
};

/**
 * PanicSpreadScene - 恐慌蔓延场景
 */
const PanicSpreadScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const panicLevel = interpolate(frame, [0, 60 * fps], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `rgba(139, 0, 0, ${panicLevel * 0.3})`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ef4444",
          fontFamily: "Cinzel, serif",
          fontSize: 72,
          fontWeight: 700,
          textAlign: "center",
          textShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
          opacity: panicLevel,
        }}
      >
        PANIC!
      </div>

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
          maxWidth: "60%",
        }}
      >
        "Wellington has lost! Sell everything!"
      </div>
    </AbsoluteFill>
  );
};

/**
 * ReverseOperationScene - 反向操作场景
 */
const ReverseOperationScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <NathanRothschild emotion="smiling" scale={2.5} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 32,
          textAlign: "center",
        }}
      >
        But in secret... he buys.
      </div>
    </AbsoluteFill>
  );
};

/**
 * ProfitScene - 收益场景
 */
const ProfitScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const profitMultiplier = interpolate(frame, [0, 30 * fps], [0, 20]);

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, #0d1117 70%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "#ffd700",
            fontFamily: "JetBrains Mono, monospace",
            textShadow: "0 0 50px rgba(255, 215, 0, 0.8)",
          }}
        >
          {profitMultiplier.toFixed(1)}x
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#e8e8e8",
            fontFamily: "Cinzel, serif",
            marginTop: 20,
          }}
        >
          Profit
        </div>
      </div>

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
        In one day, Nathan Rothschild multiplied his fortune by 20 times.
        <br />
        <span
          style={{
            color: "#ffd700",
            fontWeight: 600,
          }}
        >
          Information is the ultimate currency.
        </span>
      </div>
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode03;
