import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode09/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: bilderbergSubs, offset: 30 * fps },
    { subs: oilCrisisSubs, offset: 90 * fps },
    { subs: volckerSubs, offset: 150 * fps },
    { subs: highRatesSubs, offset: 210 * fps },
    { subs: imfSubs, offset: 270 * fps },
    { subs: envBankSubs, offset: 330 * fps },
    { subs: japanBubbleSubs, offset: 390 * fps },
    { subs: sorosSubs, offset: 450 * fps },
    { subs: asiaCrisisSubs, offset: 510 * fps },
    { subs: summarySubs, offset: 570 * fps },
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
