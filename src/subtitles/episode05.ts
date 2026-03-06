/**
 * Episode05 字幕 - 按Scene分离
 *
 * 总时长：15分钟（900秒 = 27000帧 @30fps）
 */
import { SubtitleEntry } from "./index";

// ========== Scene 0: BenjaminStrongScene (40s = 1200帧) ==========
export const benjaminStrongSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 200, text: "第五集：一战与大衰退" },
  { startFrame: 200, endFrame: 400, text: "美联储背后的真正权力。" },
  { startFrame: 400, endFrame: 600, text: "本杰明·斯特朗——控制美国货币的人。" },
  { startFrame: 600, endFrame: 800, text: "\"货币发行权是终极权力。\"" },
  { startFrame: 800, endFrame: 1000, text: "本杰明·斯特朗掌握那项权力长达二十年。" },
  { startFrame: 1000, endFrame: 1200, text: "纽约联邦储备银行行长。" },
];

// ========== Scene 1: NoFedNoWarScene (60s = 1800帧) ==========
export const noFedNoWarSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1913年：美联储成立了。" },
  { startFrame: 300, endFrame: 600, text: "1914年：第一次世界大战在欧洲爆发。" },
  { startFrame: 600, endFrame: 900, text: "美国宣布中立。" },
  { startFrame: 900, endFrame: 1200, text: "但银行家需要先有美联储……然后战争来了。" },
  { startFrame: 1200, endFrame: 1500, text: "1917年：美国参战。向盟友贷款300亿美元。" },
  { startFrame: 1500, endFrame: 1800, text: "美联储使一切成为可能。银行家收获了前所未有的财富。" },
];

// ========== Scene 2: StrongWartimeFedScene (60s = 1800帧) ==========
export const strongWartimeFedSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "本杰明·斯特朗控制了纽约美联储。通过它，他控制了整个美联储系统。" },
  { startFrame: 600, endFrame: 1200, text: "美国国债从10亿美元暴涨至250亿美元。创造的每一美元都是欠美联储的债务。" },
  { startFrame: 1200, endFrame: 1800, text: "威尔逊总统：\"我们为道德原则而战。\"真相：保护300亿美元贷款。" },
];

// ========== Scene 3: WilsonWarDecisionScene (60s = 1800帧) ==========
export const wilsonWarDecisionSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "威尔逊以和平纲领当选，然后带领美国参战。" },
  { startFrame: 600, endFrame: 1200, text: "木偶大师们从华尔街拉动了线。" },
  { startFrame: 1200, endFrame: 1800, text: "美国士兵阵亡。银行家计算着利润。" },
];

// ========== Scene 4: WarProfiteeringScene (60s = 1800帧) ==========
export const warProfiteeringSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "战争是以燃烧速度消耗资源。银行家收获了前所未有的利润。" },
  { startFrame: 600, endFrame: 1800, text: "1919年：《凡尔赛和约》。德国被迫支付3200亿金马克。" },
];

// ========== Scene 5: VersaillesTreatyScene (60s = 1800帧) ==========
export const versaillesTreatySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "福煦元帅：\"这不是和平。这是为期二十年的休战书。\"" },
  { startFrame: 600, endFrame: 1200, text: "巴黎和会：国际银行家的狂欢节。" },
  { startFrame: 1200, endFrame: 1800, text: "第二次世界大战的舞台已经搭好。" },
];

// ========== Scene 6: AgriculturalDepressionScene (70s = 2100帧) ==========
export const agriculturalDepressionSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 700, text: "1920年：战后经济冷却。然后1921年来临。第一次\"剪羊毛\"行动。" },
  { startFrame: 700, endFrame: 1400, text: "农产品价格下跌50%。30%的农场面临止赎。" },
  { startFrame: 1400, endFrame: 2100, text: "银行以几美分收购了数百万英亩农田。第一次收割：美国农业。" },
];

// ========== Scene 7: RoaringTwentiesScene (60s = 1800帧) ==========
export const roaringTwentiesSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "1920年代：容易的钱、低利率、股市繁荣。" },
  { startFrame: 600, endFrame: 1200, text: "保证金交易受到鼓励。信贷疯狂扩张。历史上最大崩盘的布局。" },
  { startFrame: 1200, endFrame: 1800, text: "1927年：长岛上的秘密会议。蒙塔古·诺曼、本杰明·斯特朗、雅尔马·沙赫特。" },
];

// ========== Scene 8: Conspiracy1927Scene (60s = 1800帧) ==========
export const conspiracy1927Subs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "协议：降低纽约美联储利率以阻止黄金流向美国。" },
  { startFrame: 600, endFrame: 1200, text: "目标：进一步吹大泡沫。为1929年崩盘做布局。" },
  { startFrame: 1200, endFrame: 1800, text: "\"降低利率。吹大泡沫。然后刺破它并收割。\"" },
];

// ========== Scene 9: BubbleInflationScene (70s = 2100帧) ==========
export const bubbleInflationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 700, text: "股市成为全民的痴迷。股票上涨400%。" },
  { startFrame: 700, endFrame: 1400, text: "美联储的容易的钱创造了多种资产泡沫。警示信号被忽视。" },
  { startFrame: 1400, endFrame: 2100, text: "1929年10月29日：黑色星期二。泡沫破裂。" },
];

// ========== Scene 10: Crash1929Scene (80s = 2400帧) ==========
export const crash1929Subs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 800, text: "恐慌性抛售。保证金追缴触发。1600亿美元财富蒸发。" },
  { startFrame: 800, endFrame: 1600, text: "国家40%的财富消失。收割开始了。" },
  { startFrame: 1600, endFrame: 2400, text: "\"当血流成河时买入。\"银行家进场并以低价收购资产。" },
];

// ========== Scene 11: FireSaleScene (70s = 2100帧) ==========
export const fireSaleSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 700, text: "银行以1-2美分收购。工厂以5美分。" },
  { startFrame: 700, endFrame: 2100, text: "数百万人无家可归。银行家比以往任何时候都更富有。" },
];

// ========== Scene 12: DepressionScene (70s = 2100帧) ==========
export const depressionSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 700, text: "大萧条开始了。25%失业率。4年内8812家银行倒闭。" },
  { startFrame: 700, endFrame: 1400, text: "面包队。施粥所。1500万人无家可归。GDP下降45%。" },
  { startFrame: 1400, endFrame: 2100, text: "美联储的行动：紧缩信贷以减少货币供应。危机是被精心设计的。" },
];

// ========== Scene 13: RealPlotScene (60s = 1800帧) ==========
export const realPlotSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "制造问题。吹大泡沫。收割资产。" },
  { startFrame: 600, endFrame: 1200, text: "经济破坏服务于银行精英的利益。" },
  { startFrame: 1200, endFrame: 1800, text: "这个循环：战争、衰退和财富集中。" },
];

// ========== Scene 14: NewDealScene (60s = 1800帧) ==========
export const newDealSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "1933年：富兰克林·德拉诺·罗斯福启动新政。" },
  { startFrame: 600, endFrame: 1200, text: "6102号行政命令：所有金币都必须上交给政府。" },
  { startFrame: 1200, endFrame: 1800, text: "真正的黄金没收。银行信贷垄断进一步扩大。" },
];

// ========== Scene 15: SummaryScene (60s = 1800帧) ==========
export const episode05SummarySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 600, text: "关键教训：美联储使战争融资成为可能。银行家收割了300亿美元。" },
  { startFrame: 600, endFrame: 1200, text: "1929年崩盘是为资产收购而设计的。" },
  { startFrame: 1200, endFrame: 1800, text: "战争和衰退：今天仍在继续的收割循环。" },
];

// 合并所有字幕（兼容旧代码）
export const episode05Subtitles = [
  ...benjaminStrongSubs,
  ...noFedNoWarSubs,
  ...strongWartimeFedSubs,
  ...wilsonWarDecisionSubs,
  ...warProfiteeringSubs,
  ...versaillesTreatySubs,
  ...agriculturalDepressionSubs,
  ...roaringTwentiesSubs,
  ...conspiracy1927Subs,
  ...bubbleInflationSubs,
  ...crash1929Subs,
  ...fireSaleSubs,
  ...depressionSubs,
  ...realPlotSubs,
  ...newDealSubs,
  ...episode05SummarySubs,
];

export default episode05Subtitles;
