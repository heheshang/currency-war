import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { VignetteOverlay } from "../components/animations/SceneTransition";

// 电影级动画组件
import {
  ThemedTransition,
  CloseUpShot,
  DramaticRevealShot,
} from "../components/animations";
import type { TransitionTheme } from "../components/animations";

import {
  WilsonDocumentaryScene,
  JekyllIslandDocumentaryScene,
  SevenTycoonsDocumentaryScene,
  MorganFamilyDocumentaryScene,
  RockefellerDocumentaryScene,
  Panic1907DocumentaryScene,
  GoldToFiatDocumentaryScene,
  Election1912DocumentaryScene,
  PlanBDocumentaryScene,
  ActPassesDocumentaryScene,
  WhoOwnsFedDocumentaryScene,
  HiddenControlDocumentaryScene,
  WilsonRealizationDocumentaryScene,
  SummaryDocumentaryScene,
} from "../components/scenes/episode04/documentary";

import {
  OpeningSceneSubtitles,
  JekyllIslandSceneSubtitles,
  WallStreetTycoonsSceneSubtitles,
  MorganRiseSceneSubtitles,
  RockefellerEmpireSceneSubtitles,
  Panic1907SceneSubtitles,
  GoldToFiatSceneSubtitles,
  Election1912SceneSubtitles,
  PlanBSceneSubtitles,
  ActPassesSceneSubtitles,
  WhoOwnsFedSceneSubtitles,
  HiddenControlSceneSubtitles,
  WilsonRealizationSceneSubtitles,
  SummarySceneSubtitles,
} from "../subtitles/episode04";

const VOICE_DIR = "/assets/audio/voiceover/episode04/";

 // 配音时长约 686s (20588帧)
const SCENE_FRAMES = [
  971, // Scene 0: 32.4s - 开场：威尔逊的忏悔
  2220, // Scene 1: 74.0s - 美联储真相揭示
  1992, // Scene 2: 66.4s - 华尔街七大巨头
  1643, // Scene 3: 54.8s - 摩根家族崛起
  1390, // Scene 4: 46.3s - 洛克菲勒帝国
  1677, // Scene 5: 55.9s - 1907年银行危机
  1458, // Scene 6: 48.6s - 从金本位到法定货币
  1884, // Scene 7: 62.8s - 1912年大选
  1583, // Scene 8: 52.8s - B计划
  1583, // Scene 9: 52.8s - 法案通过
  1379, // Scene 10: 46.0s - 谁拥有美联储
  1104, // Scene 11: 36.8s - 隐形控制
  985, // Scene 12: 32.8s - 威尔逊的觉醒
  719, // Scene 13: 24.0s - 总结
];

// 计算累计偏移
const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc, frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, [] as number[]);

// 场景主题配置 - 美联储的诞生
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 威尔逊开场 - 揭示
  "conspiracy", // Scene 1: 杰基尔岛 - 阴谋
  "finance", // Scene 2: 华尔街大亨 - 金融
  "ancient", // Scene 3: 摩根家族 - 历史
  "finance", // Scene 4: 洛克菲勒帝国 - 金融
  "tragedy", // Scene 5: 1907年恐慌 - 悲剧
  "finance", // Scene 6: 金本位到法币 - 金融
  "war", // Scene 7: 1912年选举 - 战争
  "conspiracy", // Scene 8: 备用计划 - 阴谋
  "triumph", // Scene 9: 法案通过 - 胜利
  "mystery", // Scene 10: 谁拥有美联储 - 神秘
  "conspiracy", // Scene 11: 隐形控制 - 阴谋
  "tragedy", // Scene 12: 威尔逊的觉醒 - 悲剧
  "revelation", // Scene 13: 总结 - 揭示
];

/**
 * 构建配音条目 - 根据字幕时间点同步播放配音文件
 */
function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;

  const sceneOffsets = [
    { subs: OpeningSceneSubtitles, offset: SCENE_OFFSETS[0] },
    { subs: JekyllIslandSceneSubtitles, offset: SCENE_OFFSETS[1] },
    { subs: WallStreetTycoonsSceneSubtitles, offset: SCENE_OFFSETS[2] },
    { subs: MorganRiseSceneSubtitles, offset: SCENE_OFFSETS[3] },
    { subs: RockefellerEmpireSceneSubtitles, offset: SCENE_OFFSETS[4] },
    { subs: Panic1907SceneSubtitles, offset: SCENE_OFFSETS[5] },
    { subs: GoldToFiatSceneSubtitles, offset: SCENE_OFFSETS[6] },
    { subs: Election1912SceneSubtitles, offset: SCENE_OFFSETS[7] },
    { subs: PlanBSceneSubtitles, offset: SCENE_OFFSETS[8] },
    { subs: ActPassesSceneSubtitles, offset: SCENE_OFFSETS[9] },
    { subs: WhoOwnsFedSceneSubtitles, offset: SCENE_OFFSETS[10] },
    { subs: HiddenControlSceneSubtitles, offset: SCENE_OFFSETS[11] },
    { subs: WilsonRealizationSceneSubtitles, offset: SCENE_OFFSETS[12] },
    { subs: SummarySceneSubtitles, offset: SCENE_OFFSETS[13] },
  ];

  for (const scene of sceneOffsets) {
    for (const sub of scene.subs) {
      entries.push({
        src: `${VOICE_DIR}voice_${String(fileIndex).padStart(4, "0")}.mp3`,
        startFrame: scene.offset + sub.startFrame,
        durationFrames: sub.endFrame - sub.startFrame,
      });
      fileIndex++;
    }
  }

  return entries;
}

/**
 * Episode04Documentary - 第4集纪录片版：美联储：私有的中央银行
 */
export const Episode04Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode04");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 威尔逊开场 - 揭示（揭示主题） */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#FFFFFF"
          >
            <WilsonDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={OpeningSceneSubtitles} />
      </Sequence>
      {/* Scene 1: 杰基尔岛 - 阴谋（阴谋主题） */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={35}>
            <DramaticRevealShot
              revealMethod="dissolve"
              revealDuration={40}
              accentColor="#2F4F4F"
            >
              <JekyllIslandDocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={JekyllIslandSceneSubtitles} />
      </Sequence>
      {/* Scene 2: 华尔街大亨 - 金融（金融主题） */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <SevenTycoonsDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={WallStreetTycoonsSceneSubtitles} />
      </Sequence>
      {/* Scene 3: 摩根家族 - 历史（古代主题） */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={45}
            accentColor="#8B4513"
          >
            <MorganFamilyDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={MorganRiseSceneSubtitles} />
      </Sequence>
      {/* Scene 4: 洛克菲勒帝国 - 金融（金融主题） */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 45 }}
          >
            <RockefellerDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={RockefellerEmpireSceneSubtitles} />
      </Sequence>
      {/* Scene 5: 1907年恐慌 - 悲剧（悲剧主题） */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
          <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
            <DramaticRevealShot
              revealMethod="dissolve"
              revealDuration={40}
              accentColor="#4A4A4A"
            >
              <Panic1907DocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={Panic1907SceneSubtitles} />
      </Sequence>
      {/* Scene 6: 金本位到法币 - 金融（金融主题） */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <GoldToFiatDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={GoldToFiatSceneSubtitles} />
      </Sequence>
      {/* Scene 7: 1912年选举 - 战争（战争主题） */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#B22222"
          >
            <Election1912DocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={Election1912SceneSubtitles} />
      </Sequence>
      {/* Scene 8: 备用计划 - 阴谋（阴谋主题） */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
          <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={35}>
            <PlanBDocumentaryScene />
          </ThemedTransition>
          <Subtitles subtitles={PlanBSceneSubtitles} />
      </Sequence>
      {/* Scene 9: 法案通过 - 胜利（胜利主题） */}
      <Sequence from={SCENE_OFFSETS[9]} durationInFrames={SCENE_FRAMES[9]}>
        <ThemedTransition theme={SCENE_THEMES[9]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#FFD700"
          >
            <ActPassesDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={ActPassesSceneSubtitles} />
      </Sequence>
      {/* Scene 10: 谁拥有美联储 - 神秘（神秘主题） */}
      <Sequence from={SCENE_OFFSETS[10]} durationInFrames={SCENE_FRAMES[10]}>
        <ThemedTransition theme={SCENE_THEMES[10]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#483D8B"
          >
            <WhoOwnsFedDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={WhoOwnsFedSceneSubtitles} />
      </Sequence>
      {/* Scene 11: 隐形控制 - 阴谋（阴谋主题） */}
      <Sequence from={SCENE_OFFSETS[11]} durationInFrames={SCENE_FRAMES[11]}>
          <ThemedTransition theme={SCENE_THEMES[11]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="dramatic"
              focusPosition={{ x: 50, y: 45 }}
            >
              <HiddenControlDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={HiddenControlSceneSubtitles} />
      </Sequence>
      {/* Scene 12: 威尔逊的觉醒 - 悲剧（悲剧主题） */}
      <Sequence from={SCENE_OFFSETS[12]} durationInFrames={SCENE_FRAMES[12]}>
        <ThemedTransition theme={SCENE_THEMES[12]} type="enter" duration={40}>
          <CloseUpShot
            type="face"
            intensity="medium"
            focusPosition={{ x: 50, y: 50 }}
          >
            <WilsonRealizationDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={WilsonRealizationSceneSubtitles} />
      </Sequence>
      {/* Scene 13: 总结 - 揭示（揭示主题） */}
      <Sequence from={SCENE_OFFSETS[13]} durationInFrames={SCENE_FRAMES[13]}>
        <ThemedTransition theme={SCENE_THEMES[13]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFFFFF"
            lightRays={true}
          >
            <SummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={SummarySceneSubtitles} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode04Documentary;
