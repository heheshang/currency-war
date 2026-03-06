import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { VoiceoverMerged } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { VignetteOverlay } from "../components/animations/SceneTransition";

// 电影级动画组件
import {
  ThemedTransition,
  CloseUpShot,
  DramaticRevealShot,
} from "../components/animations";
import type { TransitionTheme } from "../components/animations";

// 纪录片场景组件
import {
  OpeningDocumentaryScene,
  NoFedNoWarDocumentaryScene,
  StrongFedDocumentaryScene,
  WilsonWarDocumentaryScene,
  WarProfiteersDocumentaryScene,
  VersaillesDocumentaryScene,
  AgriculturalCrashDocumentaryScene,
  Conspiracy1927DocumentaryScene,
  Crash1929NewDocumentaryScene,
  SummaryDocumentaryScene,
} from "../components/scenes/episode05/documentary";

// 字幕组件
import { Subtitles } from "../components/Subtitles";
import {
  openingSubs,
  noFedNoWarSubs,
  strongFedSubs,
  wilsonWarSubs,
  warProfiteersSubs,
  versaillesSubs,
  agriculturalCrashSubs,
  conspiracy1927Subs,
  crash1929Subs,
  summarySubs,
} from "../subtitles/episode05Documentary";

const VOICE_DIR = "/assets/audio/voiceover/episode05/";

/**
 * Episode05Documentary - 第5集纪录片版：一战与大衰退
 *
 * 总时长: 180秒 (5400帧 @30fps)
 *
 * 场景划分:
 * - Scene 0: 开场 - 战争序幕 (10s = 300帧)
 * - Scene 1: 没有美联储就没有一战 (20s = 600帧)
 * - Scene 2: 斯特朗操纵下的美联储 (18s = 540帧)
 * - Scene 3: 威尔逊走向战争 (18s = 540帧)
 * - Scene 4: 大发战争财的银行家们 (20s = 600帧)
 * - Scene 5: 凡尔赛和约 (18s = 540帧)
 * - Scene 6: 1921年农业萧条 (18s = 540帧)
 * - Scene 7: 1927年密谋 (20s = 600帧)
 * - Scene 8: 1929泡沫破裂 (22s = 660帧)
 * - Scene 9: 总结揭示 (16s = 480帧)
 */

// 各场景帧数分配
const SCENE_FRAMES = [
  300, // Scene 0: 10s
  600, // Scene 1: 20s
  540, // Scene 2: 18s
  540, // Scene 3: 18s
  600, // Scene 4: 20s
  540, // Scene 5: 18s
  540, // Scene 6: 18s
  600, // Scene 7: 20s
  660, // Scene 8: 22s
  480, // Scene 9: 16s
];

// 计算累计偏移
const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc, frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, [] as number[]);

// 场景主题配置 - 一战与大萧条
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 开场 - 揭示
  "war", // Scene 1: 一战
  "finance", // Scene 2: 金融
  "tragedy", // Scene 3: 悲剧
  "finance", // Scene 4: 银行家
  "tragedy", // Scene 5: 凡尔赛
  "tragedy", // Scene 6: 农业萧条
  "revelation", // Scene 7: 密谋
  "tragedy", // Scene 8: 崩盘
  "revelation", // Scene 9: 总结
];

export const Episode05Documentary: React.FC = () => {
  const bgm = getEpisodeBGM("Episode05");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      {/* 使用合并的配音文件 */}
      <VoiceoverMerged src={`${VOICE_DIR}episode05_merged.m4a`} volume={0.8} />

      {/* Scene 0: 开场 - 战争序幕 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#ffd700"
          >
            <OpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* Scene 1: 没有美联储就没有一战 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
          <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
            <NoFedNoWarDocumentaryScene />
          </ThemedTransition>
          <Subtitles subtitles={noFedNoWarSubs} />
      </Sequence>
      {/* Scene 2: 斯特朗操纵下的美联储 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <StrongFedDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={strongFedSubs} />
      </Sequence>
      {/* Scene 3: 威尔逊走向战争 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={40}
            accentColor="#3b82f6"
          >
            <WilsonWarDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={wilsonWarSubs} />
      </Sequence>
      {/* Scene 4: 大发战争财的银行家们 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
          <WarProfiteersDocumentaryScene />
        </ThemedTransition>
        <Subtitles subtitles={warProfiteersSubs} />
      </Sequence>
      {/* Scene 5: 凡尔赛和约 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
          <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
            <VersaillesDocumentaryScene />
          </ThemedTransition>
          <Subtitles subtitles={versaillesSubs} />
      </Sequence>
      {/* Scene 6: 1921年农业萧条 */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#8B0000"
          >
            <AgriculturalCrashDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={agriculturalCrashSubs} />
      </Sequence>
      {/* Scene 7: 1927年密谋 */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={35}>
          <Conspiracy1927DocumentaryScene />
        </ThemedTransition>
        <Subtitles subtitles={conspiracy1927Subs} />
      </Sequence>
      {/* Scene 8: 1929泡沫破裂 */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 45 }}
          >
            <Crash1929NewDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={crash1929Subs} />
      </Sequence>
      {/* Scene 9: 总结揭示 */}
      <Sequence from={SCENE_OFFSETS[9]} durationInFrames={SCENE_FRAMES[9]}>
        <ThemedTransition theme={SCENE_THEMES[9]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#ffd700"
            lightRays={true}
          >
            <SummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode05Documentary;
