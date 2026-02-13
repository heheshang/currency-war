import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode10/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: fractionalReserveSubs, offset: 30 * fps },
    { subs: debtDollarSubs, offset: 90 * fps },
    { subs: debtRiverSubs, offset: 150 * fps },
    { subs: derivativesSubs, offset: 210 * fps },
    { subs: fannieFreddieSubs, offset: 270 * fps },
    { subs: goldPrisonSubs, offset: 330 * fps },
    { subs: goldCounterSubs, offset: 390 * fps },
    { subs: rothschildSubs, offset: 450 * fps },
    { subs: summarySubs, offset: 510 * fps },
  ];

  for (const scene of sceneOffsets) {
    for (const sub of scene.subs) {
      entries.push({
        src: `${VOICE_DIR}voice_${String(fileIndex).padStart(4, "0")}.m4a`,
        startFrame: scene.offset + sub.startFrame,
        durationFrames: sub.endFrame - sub.startFrame,
      });
      fileIndex++;
    }
  }

  return entries;
}
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
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

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
