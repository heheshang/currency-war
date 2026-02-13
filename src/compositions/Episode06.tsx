import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles, episode06Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { getEpisodeBGM } from "../utils/audioConfig";
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

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* Scene 0: 开场 - 精英俱乐部介绍 (0-40s = 帧 0-1200) */}
      <Sequence durationInFrames={40 * fps}>
        <Episode06OpeningScene />
      </Sequence>

      {/* Scene 1: 豪斯上校 (40-100s = 帧 1200-3000) */}
      <Sequence from={40 * fps} durationInFrames={60 * fps}>
        <HouseColonelScene />
      </Sequence>

      {/* Scene 2: 外交协会 (100-170s = 帧 3000-5100) */}
      <Sequence from={100 * fps} durationInFrames={70 * fps}>
        <CouncilForeignRelationsScene />
      </Sequence>

      {/* Scene 3: 国际清算银行 (170-240s = 帧 5100-7200) */}
      <Sequence from={170 * fps} durationInFrames={70 * fps}>
        <BISScene />
      </Sequence>

      {/* Scene 4: IMF与世界银行 (240-310s = 帧 7200-9300) */}
      <Sequence from={240 * fps} durationInFrames={70 * fps}>
        <IMFWorldBankScene />
      </Sequence>

      {/* Scene 5: 彼尔德伯格俱乐部 (310-370s = 帧 9300-11100) */}
      <Sequence from={310 * fps} durationInFrames={60 * fps}>
        <BilderbergScene />
      </Sequence>

      {/* Scene 6: 三边委员会 (370-430s = 帧 11100-12900) */}
      <Sequence from={370 * fps} durationInFrames={60 * fps}>
        <TrilateralCommissionScene />
      </Sequence>

      {/* Scene 7: 总结与警示 (430-480s = 帧 12900-14400) */}
      <Sequence from={430 * fps} durationInFrames={50 * fps}>
        <Episode06SummaryScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode06Subtitles} />
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode06;
