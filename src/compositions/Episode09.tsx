import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { getEpisodeBGM } from "../utils/audioConfig";
import { episode09Subtitles } from "../subtitles/episode09";

// Scene components
import {
  OpeningScene,
  BilderbergScene,
  OilCrisisScene,
  VolckerScene,
  HighRatesScene,
  IMFScene,
  EnvBankScene,
  JapanBubbleScene,
  SorosScene,
  AsiaCrisisScene,
  SummaryScene,
} from "../components/scenes/episode09";

/**
 * Episode09 - 第9集：不宣而战的货币战争
 *
 * 总时长：11分钟（660秒 = 19800帧 @30fps）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 货币战争定义
 * 2. [30-90s] 彼尔德伯格俱乐部密谋
 * 3. [90-150s] 石油危机
 * 4. [150-210s] 保罗·沃尔克
 * 5. [210-270s] 高利率战争
 * 6. [270-330s] IMF债务
 * 7. [330-390s] 世界环保银行
 * 8. [390-450s] 日本泡沫
 * 9. [450-510s] 索罗斯
 * 10. [510-570s] 亚洲金融危机
 * 11. [570-630s] 总结
 */
export const Episode09: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode09");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* 场景1: 开场 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 彼尔德伯格俱乐部 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <BilderbergScene />
      </Sequence>

      {/* 场景3: 石油危机 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <OilCrisisScene />
      </Sequence>

      {/* 场景4: 保罗·沃尔克 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <VolckerScene />
      </Sequence>

      {/* 场景5: 高利率战争 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <HighRatesScene />
      </Sequence>

      {/* 场景6: IMF (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <IMFScene />
      </Sequence>

      {/* 场景7: 世界环保银行 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <EnvBankScene />
      </Sequence>

      {/* 场景8: 日本泡沫 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <JapanBubbleScene />
      </Sequence>

      {/* 场景9: 索罗斯 (450-510s) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <SorosScene />
      </Sequence>

      {/* 场景10: 亚洲金融危机 (510-570s) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <AsiaCrisisScene />
      </Sequence>

      {/* 场景11: 总结 (570-600s) */}
      <Sequence from={570 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
      </Sequence>

      <Subtitles subtitles={episode09Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode09;
