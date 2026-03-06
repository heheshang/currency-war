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

// 场景组件
import {
  OpeningScene,
  KeynesCheapMoneyScene,
  Election1932Scene,
  RooseveltIdentityScene,
  AbolishGoldStandardScene,
  WallStreetHitlerScene,
  SummaryScene,
} from "../components/scenes/episode05new";

// 字幕组件
import { Subtitles } from "../components/Subtitles";
import {
  scene00Subtitles,
  scene01Subtitles,
  scene02Subtitles,
  scene03Subtitles,
  scene04Subtitles,
  scene05Subtitles,
  scene06Subtitles,
} from "../subtitles/episode05new";

const VOICE_DIR = "/assets/audio/voiceover/episode05new/";

/**
 * Episode05NewDocumentary - 第5集新版：廉价货币的「新政」
 *
 * 基于《货币战争》第五章内容
 * 主题：凯恩斯的廉价货币理论、罗斯福废除金本位、华尔街资助希特勒
 *
 * 总时长：350秒 = 10,500帧 (@ 30fps)
 *
 * 场景序列：
 * 0. [0-45s] 开场 - 黄金与货币自由 (1,350帧)
 * 1. [45-105s] 凯恩斯的廉价货币 (1,800帧)
 * 2. [105-155s] 1932年总统大选 (1,500帧)
 * 3. [155-210s] 罗斯福的真实身份 (1,650帧)
 * 4. [210-260s] 废除金本位 (1,500帧)
 * 5. [260-315s] 华尔街资助希特勒 (1,650帧)
 * 6. [315-350s] 总结 (1,050帧)
 */

// 各场景帧数分配
const SCENE_FRAMES = [
  1350, // Scene 0: 45s
  1800, // Scene 1: 60s
  1500, // Scene 2: 50s
  1650, // Scene 3: 55s
  1500, // Scene 4: 50s
  1650, // Scene 5: 55s
  1050, // Scene 6: 35s
];

// 计算累计偏移
const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc, frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, [] as number[]);

// 场景主题配置
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 开场 - 揭示
  "conspiracy", // Scene 1: 凯恩斯 - 阴谋
  "tragedy", // Scene 2: 大选 - 悲剧
  "conspiracy", // Scene 3: 罗斯福 - 阴谋
  "finance", // Scene 4: 金本位 - 金融
  "conspiracy", // Scene 5: 希特勒 - 阴谋
  "revelation", // Scene 6: 总结 - 揭示
];

export const Episode05NewDocumentary: React.FC = () => {
  const bgm = getEpisodeBGM("Episode05");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      {/* 使用合并的配音文件 */}
      <VoiceoverMerged
        src={`${VOICE_DIR}episode05new_merged.m4a`}
        volume={0.8}
      />

      {/* Scene 0: 开场 - 黄金与货币自由 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={55}
            accentColor="#ffd700"
          >
            <OpeningScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene00Subtitles} />
      </Sequence>

      {/* Scene 1: 凯恩斯的廉价货币 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={40}>
          <KeynesCheapMoneyScene />
        </ThemedTransition>
        <Subtitles subtitles={scene01Subtitles} />
      </Sequence>

      {/* Scene 2: 1932年总统大选 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
          <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
            <Election1932Scene />
          </ThemedTransition>
        <Subtitles subtitles={scene02Subtitles} />
      </Sequence>

      {/* Scene 3: 罗斯福的真实身份 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={40}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 45 }}
          >
            <RooseveltIdentityScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene03Subtitles} />
      </Sequence>

      {/* Scene 4: 废除金本位 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#ffd700"
          >
            <AbolishGoldStandardScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene04Subtitles} />
      </Sequence>

      {/* Scene 5: 华尔街资助希特勒 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
          <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={40}>
            <WallStreetHitlerScene />
          </ThemedTransition>
        <Subtitles subtitles={scene05Subtitles} />
      </Sequence>

      {/* Scene 6: 总结 */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={50}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#ffffff"
            lightRays={true}
          >
            <SummaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene06Subtitles} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode05NewDocumentary;
