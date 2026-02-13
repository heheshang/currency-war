import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { getEpisodeBGM } from "../utils/audioConfig";
import { episode10Subtitles } from "../subtitles/episode10";

// Scene components
import {
  OpeningScene,
  FractionalReserveScene,
  DebtDollarScene,
  DebtRiverScene,
  DerivativesScene,
  FannieFreddieScene,
  GoldPrisonScene,
  GoldCounterScene,
  RothschildScene,
  SummaryScene,
} from "../components/scenes/episode10";

/**
 * Episode10 - 第10集：美元死穴与黄金一阳指
 *
 * 总时长：10分钟（600秒 = 18000帧 @30fps）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 债务货币
 * 2. [30-90s] 部分储备金体系
 * 3. [90-150s] 债务美元
 * 4. [150-210s] 债务悬河
 * 5. [210-270s] 金融衍生品
 * 6. [270-330s] 房利美和房地美
 * 7. [330-390s] 黄金被软禁
 * 8. [390-450s] 黄金反击
 * 9. [450-510s] 罗斯柴尔德退出
 * 10. [510-570s] 总结
 */
export const Episode10: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode10");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* 场景1: 开场 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 部分储备金 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <FractionalReserveScene />
      </Sequence>

      {/* 场景3: 债务美元 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <DebtDollarScene />
      </Sequence>

      {/* 场景4: 债务悬河 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <DebtRiverScene />
      </Sequence>

      {/* 场景5: 金融衍生品 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <DerivativesScene />
      </Sequence>

      {/* 场景6: 房利美房地美 (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <FannieFreddieScene />
      </Sequence>

      {/* 场景7: 黄金被软禁 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <GoldPrisonScene />
      </Sequence>

      {/* 场景8: 黄金反击 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <GoldCounterScene />
      </Sequence>

      {/* 场景9: 罗斯柴尔德 (450-510s) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <RothschildScene />
      </Sequence>

      {/* 场景10: 总结 (510-540s) */}
      <Sequence from={510 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
      </Sequence>

      <Subtitles subtitles={episode10Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode10;
