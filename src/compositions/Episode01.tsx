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
import { Subtitles, episode01Subtitles } from "../components/Subtitles";

/**
 * Episode01 - 第1集：序言 - 起航的中国经济航母
 *
 * 总时长：8分钟（480秒）
 *
 * 基于《货币战争》序言内容重新设计
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 金币在阳光下，古代集市
 * 2. [30-90s] 中国崛起 - 经济航母起航
 * 3. [90-150s] 看不见的战场 - 金融战争的威胁
 * 4. [150-210s] 历史教训 - 苏联/亚洲/日本的案例
 * 5. [210-270s] 货币演变 - 金银→纸币收据→法币
 * 6. [270-330s] 时间线 - 标注关键年份
 * 7. [330-390s] 债务锁链 - 国债缠绕货币
 * 8. [390-450s] 通货膨胀 - 财像吞噬财富
 * 9. [450-480s] 结尾 - 对未来的警示与思考
 */
export const Episode01: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 场景1: 古代集市 - 金币时代 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景2: 中国崛起 - 经济航母 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <ChinaAircraftCarrierScene />
      </Sequence>

      {/* 场景3: 看不见的战场 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <InvisibleBattlefieldScene />
      </Sequence>

      {/* 场景4: 历史教训 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <HistoricalLessonsScene />
      </Sequence>

      {/* 场景5: 货币演变 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <MoneyEvolutionScene />
      </Sequence>

      {/* 场景6: 历史时间线 (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <TimelineScene />
      </Sequence>

      {/* 场景7: 债务螺旋 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <DebtSpiralScene />
      </Sequence>

      {/* 场景8: 通货膨胀 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <InflationScene />
      </Sequence>

      {/* 场景9: 结尾警示 (450-480s) */}
      <Sequence from={450 * fps} durationInFrames={30 * fps}>
        <WarningScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode01Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode01;
