import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { AncientMarketScene } from "../components/scenes/AncientMarketScene";
import { MoneyEvolutionScene } from "../components/scenes/MoneyEvolutionScene";
import { DebtSpiralScene } from "../components/charts/DebtSpiralScene";
import { TimelineScene } from "../components/data-viz/TimelineScene";
import { InflationScene } from "../components/scenes/InflationScene";
import { WarningScene } from "../components/scenes/WarningScene";
import { Subtitles, episode01Subtitles } from "../components/Subtitles";

/**
 * Episode01 - 第1集：序幕 - 货币的本质
 *
 * 总时长：6分钟（360秒）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 金币在阳光下，古代集市
 * 2. [30-120s] 货币演变 - 金银→纸币收据→法币
 * 3. [120-180s] 时间线 - 标注关键年份
 * 4. [180-240s] 债务锁链 - 国债缠绕货币
 * 5. [240-300s] 通货膨胀 - 财像吞噬财富
 * 6. [300-360s] 结尾 - 对未来的警示
 */
export const Episode01: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 场景1: 古代集市 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景2: 货币演变 (30-120s) */}
      <Sequence from={30 * fps} durationInFrames={90 * fps}>
        <MoneyEvolutionScene />
      </Sequence>

      {/* 场景3: 历史时间线 (120-180s) */}
      <Sequence from={120 * fps} durationInFrames={60 * fps}>
        <TimelineScene />
      </Sequence>

      {/* 场景4: 债务螺旋 (180-240s) */}
      <Sequence from={180 * fps} durationInFrames={60 * fps}>
        <DebtSpiralScene />
      </Sequence>

      <Sequence from={240 * fps} durationInFrames={60 * fps}>
        <InflationScene />
      </Sequence>

      <Sequence from={300 * fps} durationInFrames={60 * fps}>
        <WarningScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode01Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode01;
