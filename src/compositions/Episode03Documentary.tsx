import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
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
  ColonialAmericaDocumentaryScene,
  LincolnDocumentaryScene,
  CivilWarDocumentaryScene,
  FirstBankDocumentaryScene,
  JacksonBankWarDocumentaryScene,
  GreenbackDocumentaryScene,
  RussianAllianceDocumentaryScene,
  AssassinationDocumentaryScene,
  NationalBankActDocumentaryScene,
} from "../components/scenes/episode03/documentary";
// Subtitles - 基于实际配音时长
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  scene01Subs,
  scene02Subs,
  scene03Subs,
  scene04Subs,
  scene05Subs,
  scene06Subs,
  scene07Subs,
  scene08Subs,
  scene09Subs,
} from "../subtitles/episode03";

const VOICE_DIR = "/assets/audio/voiceover/episode03/";

/**
 * Episode03Documentary - 第3集纪录片版：国际银行家和美国总统的百年战争
 *
 * 配音时长约 437.4s (13122帧 @30fps)
 *
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 林肯的警告 (26.0s)
 * - Scene 1: 殖民地货币与美国独立战争 (68.0s)
 * - Scene 2: 美国第一银行的诞生 (46.0s)
 * - Scene 3: 杰克逊总统的银行战争 (44.8s)
 * - Scene 4: 南北战争的金融背景 (45.1s)
 * - Scene 5: 绿币——林肯的货币新政 (51.3s)
 * - Scene 6: 俄国同盟 (44.6s)
 * - Scene 7: 林肯遇刺的真相 (52.9s)
 * - Scene 8: 《国家银行法》的致命妥协 (58.8s)
 */

// 场景主题配置
const SCENE_THEMES: TransitionTheme[] = [
  "ancient", // Scene 0: 林肯的警告 - 历史
  "war", // Scene 1: 殖民地货币 - 战争
  "finance", // Scene 2: 第一银行 - 金融
  "triumph", // Scene 3: 杰克逊银行战争 - 胜利
  "war", // Scene 4: 内战前奏 - 战争
  "revelation", // Scene 5: 绿背纸币 - 揭示
  "triumph", // Scene 6: 俄国同盟 - 胜利
  "tragedy", // Scene 7: 林肯遇刺 - 悲剧
  "finance", // Scene 8: 国家银行法案 - 金融
];

/**
 * 构建配音条目 - 根据字幕时间点同步播放配音文件
 */
function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;

  const sceneSubs = [
    { subs: scene01Subs, offset: SCENE_OFFSETS[0] },
    { subs: scene02Subs, offset: SCENE_OFFSETS[1] },
    { subs: scene03Subs, offset: SCENE_OFFSETS[2] },
    { subs: scene04Subs, offset: SCENE_OFFSETS[3] },
    { subs: scene05Subs, offset: SCENE_OFFSETS[4] },
    { subs: scene06Subs, offset: SCENE_OFFSETS[5] },
    { subs: scene07Subs, offset: SCENE_OFFSETS[6] },
    { subs: scene08Subs, offset: SCENE_OFFSETS[7] },
    { subs: scene09Subs, offset: SCENE_OFFSETS[8] },
  ];

  for (const scene of sceneSubs) {
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

export const Episode03Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode03");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 林肯的警告 - 历史（古代主题，戏剧性入场） */}
      <Sequence from={SCENE_OFFSETS[0]} durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={50}
            accentColor="#8B4513"
          >
            <LincolnDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene01Subs} />
      </Sequence>
      {/* Scene 1: 殖民地货币 - 战争（战争主题） */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={35}>
          <ColonialAmericaDocumentaryScene />
        </ThemedTransition>
        <Subtitles subtitles={scene02Subs} />
      </Sequence>
      {/* Scene 2: 第一银行（金融主题） */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <FirstBankDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene03Subs} />
      </Sequence>
      {/* Scene 3: 杰克逊银行战争（胜利主题） */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={45}
            accentColor="#FFD700"
          >
            <JacksonBankWarDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene04Subs} />
      </Sequence>
      {/* Scene 4: 内战前奏（战争主题） */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
          <CivilWarDocumentaryScene />
        </ThemedTransition>
        <Subtitles subtitles={scene05Subs} />
      </Sequence>
      {/* Scene 5: 绿背纸币（揭示主题） */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={50}
            accentColor="#228B22"
          >
            <GreenbackDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene06Subs} />
      </Sequence>
      {/* Scene 6: 俄国同盟（胜利主题） */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={40}
            accentColor="#4169E1"
          >
            <RussianAllianceDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene07Subs} />
      </Sequence>
      {/* Scene 7: 林肯遇刺（悲剧主题） */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#8B0000"
          >
            <AssassinationDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene08Subs} />
      </Sequence>
      {/* Scene 8: 国家银行法案（金融主题） */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={50}
            accentColor="#C0C0C0"
            lightRays={true}
          >
            <NationalBankActDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene09Subs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode03Documentary;
