import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode06/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: scene00Subtitles, offset: 0 },
    { subs: scene01Subtitles, offset: 40 * fps },
    { subs: scene02Subtitles, offset: 100 * fps },
    { subs: scene03Subtitles, offset: 170 * fps },
    { subs: scene04Subtitles, offset: 240 * fps },
    { subs: scene05Subtitles, offset: 310 * fps },
    { subs: scene06Subtitles, offset: 370 * fps },
    { subs: scene07Subtitles, offset: 430 * fps },
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
  Episode06OpeningScene,
  HouseColonelScene,
  CouncilForeignRelationsScene,
  BISScene,
  IMFWorldBankScene,
  BilderbergScene,
  TrilateralCommissionScene,
  Episode06SummaryScene,
} from "../components/scenes/episode06";
// 按Scene分离的字幕
import {
  scene00Subtitles,
  scene01Subtitles,
  scene02Subtitles,
  scene03Subtitles,
  scene04Subtitles,
  scene05Subtitles,
  scene06Subtitles,
  scene07Subtitles,
} from "../subtitles/episode06";

/**
 * Episode06 - 第6集：统治世界的精英俱乐部
 *
 * 基于《货币战争》第六章内容
 * 主题：国际银行家如何通过精英俱乐部控制世界
 *
 * 总时长：480秒 = 14,400帧 (@ 30fps)
 *
 * 场景序列：
 * 0. [0-40s] 开场 - 精英俱乐部介绍 (1,200帧)
 * 1. [40-100s] 豪斯上校与《菲利浦·杜》 (1,800帧)
 * 2. [100-170s] 外交协会 (2,100帧)
 * 3. [170-240s] 国际清算银行 (2,100帧)
 * 4. [240-310s] IMF与世界银行 (2,100帧)
 * 5. [310-370s] 彼尔德伯格俱乐部 (1,800帧)
 * 6. [370-430s] 三边委员会 (1,800帧)
 * 7. [430-480s] 总结与警示 (1,500帧)
 */
export const Episode06: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode06");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 0: 开场 - 精英俱乐部介绍 (0-40s = 帧 0-1200) */}
      <Sequence durationInFrames={40 * fps}>
        <Episode06OpeningScene />
        <Subtitles subtitles={scene00Subtitles} />
      </Sequence>

      {/* Scene 1: 豪斯上校 (40-100s = 帧 1200-3000) */}
      <Sequence from={40 * fps} durationInFrames={60 * fps}>
        <HouseColonelScene />
        <Subtitles subtitles={scene01Subtitles} />
      </Sequence>

      {/* Scene 2: 外交协会 (100-170s = 帧 3000-5100) */}
      <Sequence from={100 * fps} durationInFrames={70 * fps}>
        <CouncilForeignRelationsScene />
        <Subtitles subtitles={scene02Subtitles} />
      </Sequence>

      {/* Scene 3: 国际清算银行 (170-240s = 帧 5100-7200) */}
      <Sequence from={170 * fps} durationInFrames={70 * fps}>
        <BISScene />
        <Subtitles subtitles={scene03Subtitles} />
      </Sequence>

      {/* Scene 4: IMF与世界银行 (240-310s = 帧 7200-9300) */}
      <Sequence from={240 * fps} durationInFrames={70 * fps}>
        <IMFWorldBankScene />
        <Subtitles subtitles={scene04Subtitles} />
      </Sequence>

      {/* Scene 5: 彼尔德伯格俱乐部 (310-370s = 帧 9300-11100) */}
      <Sequence from={310 * fps} durationInFrames={60 * fps}>
        <BilderbergScene />
        <Subtitles subtitles={scene05Subtitles} />
      </Sequence>

      {/* Scene 6: 三边委员会 (370-430s = 帧 11100-12900) */}
      <Sequence from={370 * fps} durationInFrames={60 * fps}>
        <TrilateralCommissionScene />
        <Subtitles subtitles={scene06Subtitles} />
      </Sequence>

      {/* Scene 7: 总结与警示 (430-480s = 帧 12900-14400) */}
      <Sequence from={430 * fps} durationInFrames={50 * fps}>
        <Episode06SummaryScene />
        <Subtitles subtitles={scene07Subtitles} />
      </Sequence>
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode06;
