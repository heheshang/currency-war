import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { getEpisodeBGM } from "../utils/audioConfig";
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
// 按Scene分离的字幕
import {
  openingSubs,
  bilderbergSubs,
  oilCrisisSubs,
  volckerSubs,
  highRatesSubs,
  imfSubs,
  envBankSubs,
  japanBubbleSubs,
  sorosSubs,
  asiaCrisisSubs,
  summarySubs,
} from "../subtitles/episode09";

/**
 * Episode09 - 第9集：不宣而战的货币战争
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */
export const Episode09: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode09");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* Scene 1: Opening (30s = 900帧) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* Scene 2: Bilderberg (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <BilderbergScene />
        <Subtitles subtitles={bilderbergSubs} />
      </Sequence>

      {/* Scene 3: Oil Crisis (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <OilCrisisScene />
        <Subtitles subtitles={oilCrisisSubs} />
      </Sequence>

      {/* Scene 4: Volcker (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <VolckerScene />
        <Subtitles subtitles={volckerSubs} />
      </Sequence>

      {/* Scene 5: High Rates (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <HighRatesScene />
        <Subtitles subtitles={highRatesSubs} />
      </Sequence>

      {/* Scene 6: IMF (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <IMFScene />
        <Subtitles subtitles={imfSubs} />
      </Sequence>

      {/* Scene 7: Env Bank (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <EnvBankScene />
        <Subtitles subtitles={envBankSubs} />
      </Sequence>

      {/* Scene 8: Japan Bubble (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <JapanBubbleScene />
        <Subtitles subtitles={japanBubbleSubs} />
      </Sequence>

      {/* Scene 9: Soros (60s = 1800帧) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <SorosScene />
        <Subtitles subtitles={sorosSubs} />
      </Sequence>

      {/* Scene 10: Asia Crisis (60s = 1800帧) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <AsiaCrisisScene />
        <Subtitles subtitles={asiaCrisisSubs} />
      </Sequence>

      {/* Scene 11: Summary (30s = 900帧) */}
      <Sequence from={570 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode09;
