import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode05/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: benjaminStrongSubs, offset: 0 },
    { subs: noFedNoWarSubs, offset: 40 * fps },
    { subs: strongWartimeFedSubs, offset: 100 * fps },
    { subs: wilsonWarDecisionSubs, offset: 160 * fps },
    { subs: warProfiteeringSubs, offset: 220 * fps },
    { subs: versaillesTreatySubs, offset: 280 * fps },
    { subs: agriculturalDepressionSubs, offset: 340 * fps },
    { subs: roaringTwentiesSubs, offset: 410 * fps },
    { subs: conspiracy1927Subs, offset: 470 * fps },
    { subs: bubbleInflationSubs, offset: 530 * fps },
    { subs: crash1929Subs, offset: 600 * fps },
    { subs: fireSaleSubs, offset: 680 * fps },
    { subs: depressionSubs, offset: 750 * fps },
    { subs: realPlotSubs, offset: 820 * fps },
    { subs: newDealSubs, offset: 880 * fps },
    { subs: episode05SummarySubs, offset: 940 * fps },
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
  BenjaminStrongScene,
  NoFedNoWarScene,
  StrongWartimeFedScene,
  WilsonWarDecisionScene,
  WarProfiteeringScene,
  VersaillesTreatyScene,
  AgriculturalDepression1921Scene,
  RoaringTwentiesScene,
  Conspiracy1927Scene,
  BubbleInflationScene,
  Crash1929Scene,
  FireSaleScene,
  DepressionScene,
  RealPlotScene,
  NewDealScene,
  Episode05SummaryScene,
} from "../components/scenes/episode05";
// 按Scene分离的字幕
import {
  benjaminStrongSubs,
  noFedNoWarSubs,
  strongWartimeFedSubs,
  wilsonWarDecisionSubs,
  warProfiteeringSubs,
  versaillesTreatySubs,
  agriculturalDepressionSubs,
  roaringTwentiesSubs,
  conspiracy1927Subs,
  bubbleInflationSubs,
  crash1929Subs,
  fireSaleSubs,
  depressionSubs,
  realPlotSubs,
  newDealSubs,
  episode05SummarySubs,
} from "../subtitles/episode05";

/**
 * Episode05 - 第5集：一战与大衰退
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */
export const Episode05: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode05");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 0: BenjaminStrongScene (40s = 1200帧) */}
      <Sequence durationInFrames={40 * fps}>
        <BenjaminStrongScene />
        <Subtitles subtitles={benjaminStrongSubs} />
      </Sequence>

      {/* Scene 1: NoFedNoWarScene (60s = 1800帧) */}
      <Sequence from={40 * fps} durationInFrames={60 * fps}>
        <NoFedNoWarScene />
        <Subtitles subtitles={noFedNoWarSubs} />
      </Sequence>

      {/* Scene 2: StrongWartimeFedScene (60s = 1800帧) */}
      <Sequence from={100 * fps} durationInFrames={60 * fps}>
        <StrongWartimeFedScene />
        <Subtitles subtitles={strongWartimeFedSubs} />
      </Sequence>

      {/* Scene 3: WilsonWarDecisionScene (60s = 1800帧) */}
      <Sequence from={160 * fps} durationInFrames={60 * fps}>
        <WilsonWarDecisionScene />
        <Subtitles subtitles={wilsonWarDecisionSubs} />
      </Sequence>

      {/* Scene 4: WarProfiteeringScene (60s = 1800帧) */}
      <Sequence from={220 * fps} durationInFrames={60 * fps}>
        <WarProfiteeringScene />
        <Subtitles subtitles={warProfiteeringSubs} />
      </Sequence>

      {/* Scene 5: VersaillesTreatyScene (60s = 1800帧) */}
      <Sequence from={280 * fps} durationInFrames={60 * fps}>
        <VersaillesTreatyScene />
        <Subtitles subtitles={versaillesTreatySubs} />
      </Sequence>

      {/* Scene 6: AgriculturalDepressionScene (70s = 2100帧) */}
      <Sequence from={340 * fps} durationInFrames={70 * fps}>
        <AgriculturalDepression1921Scene />
        <Subtitles subtitles={agriculturalDepressionSubs} />
      </Sequence>

      {/* Scene 7: RoaringTwentiesScene (60s = 1800帧) */}
      <Sequence from={410 * fps} durationInFrames={60 * fps}>
        <RoaringTwentiesScene />
        <Subtitles subtitles={roaringTwentiesSubs} />
      </Sequence>

      {/* Scene 8: Conspiracy1927Scene (60s = 1800帧) */}
      <Sequence from={470 * fps} durationInFrames={60 * fps}>
        <Conspiracy1927Scene />
        <Subtitles subtitles={conspiracy1927Subs} />
      </Sequence>

      {/* Scene 9: BubbleInflationScene (70s = 2100帧) */}
      <Sequence from={530 * fps} durationInFrames={70 * fps}>
        <BubbleInflationScene />
        <Subtitles subtitles={bubbleInflationSubs} />
      </Sequence>

      {/* Scene 10: Crash1929Scene (80s = 2400帧) */}
      <Sequence from={600 * fps} durationInFrames={80 * fps}>
        <Crash1929Scene />
        <Subtitles subtitles={crash1929Subs} />
      </Sequence>

      {/* Scene 11: FireSaleScene (70s = 2100帧) */}
      <Sequence from={680 * fps} durationInFrames={70 * fps}>
        <FireSaleScene />
        <Subtitles subtitles={fireSaleSubs} />
      </Sequence>

      {/* Scene 12: DepressionScene (70s = 2100帧) */}
      <Sequence from={750 * fps} durationInFrames={70 * fps}>
        <DepressionScene />
        <Subtitles subtitles={depressionSubs} />
      </Sequence>

      {/* Scene 13: RealPlotScene (60s = 1800帧) */}
      <Sequence from={820 * fps} durationInFrames={60 * fps}>
        <RealPlotScene />
        <Subtitles subtitles={realPlotSubs} />
      </Sequence>

      {/* Scene 14: NewDealScene (60s = 1800帧) */}
      <Sequence from={880 * fps} durationInFrames={60 * fps}>
        <NewDealScene />
        <Subtitles subtitles={newDealSubs} />
      </Sequence>

      {/* Scene 15: SummaryScene (60s = 1800帧) */}
      <Sequence from={940 * fps} durationInFrames={60 * fps}>
        <Episode05SummaryScene />
        <Subtitles subtitles={episode05SummarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode05;
