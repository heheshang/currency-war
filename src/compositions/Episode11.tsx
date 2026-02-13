import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { getEpisodeBGM } from "../utils/audioConfig";
import { episode11Subtitles } from "../subtitles/episode11";

// Scene components
import {
  OpeningScene,
  MonetaryStandardScene,
  GoldSilverScene,
  DebtObesityScene,
  FinancialAirForceScene,
  StrategyScene,
  WorldReserveScene,
  FinancialRiskScene,
  EndingScene,
} from "../components/scenes/episode11";

/**
 * Episode11 - 第11集：谋万世者
 *
 * 总时长：10分钟（600秒 = 18000帧 @30fps）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 伦敦->纽约->?
 * 2. [30-90s] 货币度量衡
 * 3. [90-150s] 金银定海神针
 * 4. [150-210s] 债务货币的肥胖
 * 5. [210-270s] 金融是战略空军
 * 6. [270-330s] 高筑墙广积粮缓称王
 * 7. [330-390s] 世界储备货币
 * 8. [390-450s] 金融开放风险
 * 9. [450-480s] 结尾
 */
export const Episode11: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode11");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* 场景1: 开场 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 货币度量衡 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <MonetaryStandardScene />
      </Sequence>

      {/* 场景3: 金银 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <GoldSilverScene />
      </Sequence>

      {/* 场景4: 债务肥胖 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <DebtObesityScene />
      </Sequence>

      {/* 场景5: 金融空军 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <FinancialAirForceScene />
      </Sequence>

      {/* 场景6: 战略 (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <StrategyScene />
      </Sequence>

      {/* 场景7: 世界储备 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <WorldReserveScene />
      </Sequence>

      {/* 场景8: 金融风险 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <FinancialRiskScene />
      </Sequence>

      {/* 场景9: 结尾 (450-480s) */}
      <Sequence from={450 * fps} durationInFrames={30 * fps}>
        <EndingScene />
      </Sequence>

      <Subtitles subtitles={episode11Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode11;
