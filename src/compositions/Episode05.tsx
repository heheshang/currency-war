import React from "react";
import {
  AbsoluteFill,
  useVideoConfig,
  Sequence,
} from "remotion";
import { Subtitles, episode05Subtitles } from "../components/Subtitles";
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

/**
 * Episode05 - 第5集：一战与大衰退——国际银行家的"丰收时节"
 *
 * 基于《货币战争》第四章内容
 * 1914-1939：从战争到新政的金融秘史
 *
 * 总时长：15分钟（900秒 = 27,000帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-40s] 开场 - 斯特朗肖像 (1,200帧)
 * 1. [40-100s] 没有美联储，就没有一战 (3,000帧)
 * 2. [100-160s] 斯特朗的战时美联储 (1,800帧)
 * 3. [160-220s] 威尔逊的战争决策 (1,800帧)
 * 4. [220-280s] 大发战争财的银行家们 (1,800帧)
 * 5. [280-340s] 凡尔赛和约 (1,800帧)
 * 6. [340-410s] 1921年农业衰退 (2,100帧)
 * 7. [410-470s] 咆哮的二十年代 (1,800帧)
 * 8. [470-530s] 1927年秘密会议 (1,800帧)
 * 9. [530-600s] 泡沫膨胀 (2,100帧)
 * 10. [600-680s] 1929年崩盘 (2,400帧)
 * 11. [680-750s] 银行家廉价收购一切 (2,100帧)
 * 12. [750-820s] 大萧条加深 (2,100帧)
 * 13. [820-880s] 真正的图谋揭露 (1,800帧)
 * 14. [880-940s] 罗斯福新政 (1,800帧)
 * 15. [940-900s] 总结与警示 (1,800帧)
 */
export const Episode05: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Scene 0: 开场 - 斯特朗肖像 (0-40s = 帧 0-1200) */}
      <Sequence durationInFrames={40 * fps}>
        <BenjaminStrongScene />
      </Sequence>

      {/* Scene 1: 没有美联储，就没有一战 (40-100s = 帧 1200-3000) */}
      <Sequence from={40 * fps} durationInFrames={60 * fps}>
        <NoFedNoWarScene />
      </Sequence>

      {/* Scene 2: 斯特朗的战时美联储 (100-160s = 帧 3000-4800) */}
      <Sequence from={100 * fps} durationInFrames={60 * fps}>
        <StrongWartimeFedScene />
      </Sequence>

      {/* Scene 3: 威尔逊的战争决策 (160-220s = 帧 4800-6600) */}
      <Sequence from={160 * fps} durationInFrames={60 * fps}>
        <WilsonWarDecisionScene />
      </Sequence>

      {/* Scene 4: 大发战争财的银行家们 (220-280s = 帧 6600-8400) */}
      <Sequence from={220 * fps} durationInFrames={60 * fps}>
        <WarProfiteeringScene />
      </Sequence>

      {/* Scene 5: 凡尔赛和约 (280-340s = 帧 8400-10200) */}
      <Sequence from={280 * fps} durationInFrames={60 * fps}>
        <VersaillesTreatyScene />
      </Sequence>

      {/* Scene 6: 1921年农业衰退 (340-410s = 帧 10200-12300) */}
      <Sequence from={340 * fps} durationInFrames={70 * fps}>
        <AgriculturalDepression1921Scene />
      </Sequence>

      {/* Scene 7: 咆哮的二十年代 (410-470s = 帧 12300-14100) */}
      <Sequence from={410 * fps} durationInFrames={60 * fps}>
        <RoaringTwentiesScene />
      </Sequence>

      {/* Scene 8: 1927年秘密会议 (470-530s = 帧 14100-15900) */}
      <Sequence from={470 * fps} durationInFrames={60 * fps}>
        <Conspiracy1927Scene />
      </Sequence>

      {/* Scene 9: 泡沫膨胀 (530-600s = 帧 15900-18000) */}
      <Sequence from={530 * fps} durationInFrames={70 * fps}>
        <BubbleInflationScene />
      </Sequence>

      {/* Scene 10: 1929年崩盘 (600-680s = 帧 18000-20400) */}
      <Sequence from={600 * fps} durationInFrames={80 * fps}>
        <Crash1929Scene />
      </Sequence>

      {/* Scene 11: 银行家廉价收购一切 (680-750s = 帧 20400-22500) */}
      <Sequence from={680 * fps} durationInFrames={70 * fps}>
        <FireSaleScene />
      </Sequence>

      {/* Scene 12: 大萧条加深 (750-820s = 帧 22500-24600) */}
      <Sequence from={750 * fps} durationInFrames={70 * fps}>
        <DepressionScene />
      </Sequence>

      {/* Scene 13: 真正的图谋揭露 (820-880s = 帧 24600-26400) */}
      <Sequence from={820 * fps} durationInFrames={60 * fps}>
        <RealPlotScene />
      </Sequence>

      {/* Scene 14: 罗斯福新政 (880-940s = 帧 26400-28200) */}
      <Sequence from={880 * fps} durationInFrames={60 * fps}>
        <NewDealScene />
      </Sequence>

      {/* Scene 15: 总结与警示 (940-900s = 帧 28200-27000) */}
      <Sequence from={940 * fps} durationInFrames={60 * fps}>
        <Episode05SummaryScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode05Subtitles} />
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode05;
