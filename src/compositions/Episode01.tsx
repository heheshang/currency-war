import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { AncientMarketScene } from "../components/scenes/AncientMarketScene";
import { MoneyEvolutionScene } from "../components/scenes/MoneyEvolutionScene";
import { DebtSpiralScene } from "../components/charts/DebtSpiralScene";
import { TimelineScene } from "../components/data-viz/TimelineScene";
import { InflationScene } from "../components/scenes/InflationScene";
import { WarningScene } from "../components/scenes/WarningScene";
import { ChinaAircraftCarrierScene } from "../components/scenes/ChinaAircraftCarrierScene";
import { InvisibleBattlefieldScene } from "../components/scenes/InvisibleBattlefieldScene";
import { HistoricalLessonsScene } from "../components/scenes/HistoricalLessonsScene";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

// 按Scene分离的字幕
import {
  ancientMarketSubs,
  chinaRiseSubs,
  invisibleBattlefieldSubs,
  historicalLessonsSubs,
  moneyEvolutionSubs,
  historicalTimelineSubs,
  debtSpiralSubs,
  inflationSubs,
  endingSubs,
} from "../subtitles/episode01";

const VOICE_DIR = "/assets/audio/voiceover/episode01/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: ancientMarketSubs, offset: 0 },
    { subs: chinaRiseSubs, offset: 30 * fps },
    { subs: invisibleBattlefieldSubs, offset: 90 * fps },
    { subs: historicalLessonsSubs, offset: 150 * fps },
    { subs: moneyEvolutionSubs, offset: 210 * fps },
    { subs: historicalTimelineSubs, offset: 270 * fps },
    { subs: debtSpiralSubs, offset: 330 * fps },
    { subs: inflationSubs, offset: 390 * fps },
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

/**
 * Episode01 - 第1集：序言 - 起航的中国经济航母
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */
export const Episode01: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode01");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 1: Ancient Market (30s = 900帧) */}
      <Sequence durationInFrames={30 * fps}>
        <AncientMarketScene />
        <Subtitles subtitles={ancientMarketSubs} />
      </Sequence>

      {/* Scene 2: China Rise (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <ChinaAircraftCarrierScene />
        <Subtitles subtitles={chinaRiseSubs} />
      </Sequence>

      {/* Scene 3: Invisible Battlefield (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <InvisibleBattlefieldScene />
        <Subtitles subtitles={invisibleBattlefieldSubs} />
      </Sequence>

      {/* Scene 4: Historical Lessons (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <HistoricalLessonsScene />
        <Subtitles subtitles={historicalLessonsSubs} />
      </Sequence>

      {/* Scene 5: Money Evolution (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <MoneyEvolutionScene />
        <Subtitles subtitles={moneyEvolutionSubs} />
      </Sequence>

      {/* Scene 6: Historical Timeline (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <TimelineScene />
        <Subtitles subtitles={historicalTimelineSubs} />
      </Sequence>

      {/* Scene 7: Debt Spiral (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <DebtSpiralScene />
        <Subtitles subtitles={debtSpiralSubs} />
      </Sequence>

      {/* Scene 8: Inflation (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <InflationScene />
        <Subtitles subtitles={inflationSubs} />
      </Sequence>

      {/* Scene 9: Ending (30s = 900帧) */}
      <Sequence from={450 * fps} durationInFrames={30 * fps}>
        <WarningScene />
        <Subtitles subtitles={endingSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode01;
