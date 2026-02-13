import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode11/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: monetaryStandardSubs, offset: 30 * fps },
    { subs: goldSilverSubs, offset: 90 * fps },
    { subs: debtObesitySubs, offset: 150 * fps },
    { subs: financialAirForceSubs, offset: 210 * fps },
    { subs: strategySubs, offset: 270 * fps },
    { subs: worldReserveSubs, offset: 330 * fps },
    { subs: financialRiskSubs, offset: 390 * fps },
    { subs: endingSubs, offset: 450 * fps },
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

// 按Scene分离的字幕
import {
  openingSubs,
  monetaryStandardSubs,
  goldSilverSubs,
  debtObesitySubs,
  financialAirForceSubs,
  strategySubs,
  worldReserveSubs,
  financialRiskSubs,
  endingSubs,
} from "../subtitles/episode11";

/**
 * Episode11 - 第11集：谋万世者
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */
export const Episode11: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode11");
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

      {/* Scene 2: Monetary Standard (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <MonetaryStandardScene />
        <Subtitles subtitles={monetaryStandardSubs} />
      </Sequence>

      {/* Scene 3: Gold Silver (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <GoldSilverScene />
        <Subtitles subtitles={goldSilverSubs} />
      </Sequence>

      {/* Scene 4: Debt Obesity (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <DebtObesityScene />
        <Subtitles subtitles={debtObesitySubs} />
      </Sequence>

      {/* Scene 5: Financial Air Force (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <FinancialAirForceScene />
        <Subtitles subtitles={financialAirForceSubs} />
      </Sequence>

      {/* Scene 6: Strategy (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <StrategyScene />
        <Subtitles subtitles={strategySubs} />
      </Sequence>

      {/* Scene 7: World Reserve (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <WorldReserveScene />
        <Subtitles subtitles={worldReserveSubs} />
      </Sequence>

      {/* Scene 8: Financial Risk (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <FinancialRiskScene />
        <Subtitles subtitles={financialRiskSubs} />
      </Sequence>

      {/* Scene 9: Ending (30s = 900帧) */}
      <Sequence from={450 * fps} durationInFrames={30 * fps}>
        <EndingScene />
        <Subtitles subtitles={endingSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode11;
