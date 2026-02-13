import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { getEpisodeBGM } from "../utils/audioConfig";
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
// 按Scene分离的字幕
import {
  openingSubs,
  fractionalReserveSubs,
  debtDollarSubs,
  debtRiverSubs,
  derivativesSubs,
  fannieFreddieSubs,
  goldPrisonSubs,
  goldCounterSubs,
  rothschildSubs,
  summarySubs,
} from "../subtitles/episode10";

/**
 * Episode10 - 第10集：美元死穴与黄金一阳指
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */
export const Episode10: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode10");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* Scene 1: Opening (30s = 900帧) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* Scene 2: Fractional Reserve (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <FractionalReserveScene />
        <Subtitles subtitles={fractionalReserveSubs} />
      </Sequence>

      {/* Scene 3: Debt Dollar (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <DebtDollarScene />
        <Subtitles subtitles={debtDollarSubs} />
      </Sequence>

      {/* Scene 4: Debt River (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <DebtRiverScene />
        <Subtitles subtitles={debtRiverSubs} />
      </Sequence>

      {/* Scene 5: Derivatives (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <DerivativesScene />
        <Subtitles subtitles={derivativesSubs} />
      </Sequence>

      {/* Scene 6: Fannie Freddie (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <FannieFreddieScene />
        <Subtitles subtitles={fannieFreddieSubs} />
      </Sequence>

      {/* Scene 7: Gold Prison (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <GoldPrisonScene />
        <Subtitles subtitles={goldPrisonSubs} />
      </Sequence>

      {/* Scene 8: Gold Counter (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <GoldCounterScene />
        <Subtitles subtitles={goldCounterSubs} />
      </Sequence>

      {/* Scene 9: Rothschild (60s = 1800帧) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <RothschildScene />
        <Subtitles subtitles={rothschildSubs} />
      </Sequence>

      {/* Scene 10: Summary (30s = 900帧) */}
      <Sequence from={510 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode10;
