/**
 * Episode06 字幕 - 廉价货币的新政
 *
 * 基于《货币战争》book1-第五章：廉价货币的新政
 *
 * 场景划分：
 * - Scene 0: 开场 - 凯恩斯的警告
 * - Scene 1: 凯恩斯的"廉价货币"理论
 * - Scene 2: 1932年总统大选
 * - Scene 3: 罗斯福与废除金本位
 * - Scene 4: 华尔街选中希特勒
 * - Scene 5: 华尔街资助纳粹德国
 * - Scene 6: 昂贵的战争与廉价的货币
 * - Scene 7: 总结
 */
import { SubtitleEntry } from "./index";

// ========== Scene 0: 开场 ==========
export const openingSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 150,
    text: "列宁曾说过：颠覆资本主义制度最好的办法就是使其货币贬值。",
  },
  {
    startFrame: 150,
    endFrame: 300,
    text: "通过连续的通货膨胀过程，政府可以秘密地、不为人知地没收公民财富的一部分。",
  },
  {
    startFrame: 300,
    endFrame: 450,
    text: "用这种办法可以任意剥夺人民的财富，在使多数人贫穷的过程中，却使少数人暴富。",
  },
  { startFrame: 450, endFrame: 600, text: "——凯恩斯，1919年" },
  { startFrame: 600, endFrame: 750, text: "第五章：廉价货币的新政" },
  {
    startFrame: 750,
    endFrame: 900,
    text: "国际银行家如何通过废除金本位铺平通往第二次世界大战的道路。",
  },
];

// ========== Scene 1: 凯恩斯的廉价货币 ==========
export const keynesSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "凯恩斯称黄金为'野蛮的遗迹'。" },
  {
    startFrame: 180,
    endFrame: 360,
    text: "为什么国际银行家和他们的'御用'理论家们如此厌恶黄金？",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "在人类长达5000年的社会实践中，黄金被世人公认是财富的最终形式。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "人民对黄金与财富的必然联系早已成为生活中的自然逻辑。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "当政府强行剥夺人民将纸币兑换黄金这一与生俱来的权力的时候，",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "也就从根本上剥夺了人民最基本的自由。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "国际银行家们非常清楚，黄金决不是普通的贵金属，",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "从本质上看，黄金是唯一的、高度敏感的、深负历史传承的'政治金属'。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "在正常的社会状况下，废除金本位势必引发严重的社会动荡，",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "只有在极端特殊的情形下，人民被逼无奈才会被迫暂时放弃自己与生俱来的权力。",
  },
];

// ========== Scene 2: 1932年总统大选 ==========
export const election1932Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "1929年大萧条爆发，美国经济陷入前所未有的危机。",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "银行倒闭潮席卷全国，人民储蓄化为乌有。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "1932年总统大选，银行家们需要一个能够执行他们意志的人。",
  },
  { startFrame: 540, endFrame: 720, text: "佛兰克林·德兰诺·罗斯福被选中了。" },
  {
    startFrame: 720,
    endFrame: 900,
    text: "罗斯福家族与华尔街银行家有着深厚的渊源。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "他的舅舅弗雷德里克·德拉诺是联邦储备委员会的成员。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "国际银行家赋予罗斯福一个历史使命：废除金本位。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "这是正常状态下极难实现的重大变革。",
  },
];

// ========== Scene 3: 废除金本位 ==========
export const goldStandardSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "1933年3月4日，罗斯福就职总统。" },
  {
    startFrame: 180,
    endFrame: 360,
    text: "仅仅一个月后，4月5日，罗斯福发布行政命令，没收民间黄金。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "所有美国公民必须将黄金交给联邦储备银行，换取纸币。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "违者将被处以最高10年监禁和1万美元罚款。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "1934年1月，罗斯福签署《黄金储备法》，将黄金价格从每盎司20.67美元提高到35美元。",
  },
  { startFrame: 900, endFrame: 1080, text: "一夜之间，美元贬值了41%。" },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "人民手中的纸币财富被秘密地剥夺了。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "金本位被废除了，通往战争的道路被铺平了。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "国际银行家们终于实现了他们多年来的梦想。",
  },
];

// ========== Scene 4: 华尔街选中希特勒 ==========
export const hitlerSelectedSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "当美国正在经历大萧条的时候，" },
  {
    startFrame: 180,
    endFrame: 360,
    text: "大洋彼岸的德国也在经历着前所未有的经济危机。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "国际银行家们正在寻找一个新的代理人。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "他们需要一个能够打破欧洲平衡、制造混乱的人。",
  },
  { startFrame: 720, endFrame: 900, text: "阿道夫·希特勒进入了他们的视野。" },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "华尔街银行家开始向纳粹党提供资金支持。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "JP摩根、洛克菲勒、福特等美国大财团都参与其中。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "这是一笔'风险投资'，目的是制造一场新的战争。",
  },
];

// ========== Scene 5: 华尔街资助纳粹 ==========
export const wallStreetNaziSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "华尔街对纳粹德国的资助是全方位的。" },
  {
    startFrame: 180,
    endFrame: 360,
    text: "标准石油公司向纳粹德国提供四乙基铅技术，用于航空燃料。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "IBM为纳粹德国提供打孔卡片系统，用于人口普查和集中营管理。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "福特汽车公司在德国设有工厂，为纳粹生产军用卡车。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "美国银行家通过国际清算银行为纳粹德国提供融资。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "即使在二战期间，这些金融往来仍在继续。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "美国和英国的银行家与纳粹德国银行家同坐国际清算银行董事会。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "战争，对他们来说，只是另一场赚钱的生意。",
  },
];

// ========== Scene 6: 昂贵的战争与廉价的货币 ==========
export const warAndMoneySubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "废除金本位铺平了通往第二次世界大战的金融大道。",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "没有金本位的约束，政府可以无限印钞。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "战争需要大量的资金，廉价货币提供了无限的弹药。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "从1939年到1945年，美国的货币供应量增加了3倍。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "战争结束后，国际银行家的收获是巨大的。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "布雷顿森林体系确立了美元的霸权地位。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "国际货币基金组织和世界银行成为新的控制工具。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "昂贵的战争由人民承担代价，廉价的货币让银行家获利。",
  },
];

// ========== Scene 7: 总结 ==========
export const summarySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "廉价货币的本质是什么？" },
  {
    startFrame: 180,
    endFrame: 360,
    text: "是剥夺人民的经济自由，为战争铺平道路。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "凯恩斯的'廉价货币'理论成为银行家的工具。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "废除金本位是国际银行家的百年梦想。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "而战争，则是他们收割财富的最佳时机。",
  },
  { startFrame: 900, endFrame: 1080, text: "人民被通胀剥夺，国家被债务奴役。" },
  { startFrame: 1080, endFrame: 1260, text: "这就是廉价货币的真相。" },
];

// ========== 场景帧数配置 ==========
export const SCENE_FRAMES = [
  900, // Scene 0: 开场
  1800, // Scene 1: 凯恩斯
  1440, // Scene 2: 1932大选
  1620, // Scene 3: 废除金本位
  1440, // Scene 4: 选中希特勒
  1440, // Scene 5: 华尔街资助纳粹
  1440, // Scene 6: 战争与货币
  1260, // Scene 7: 总结
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// 别名导出（兼容旧代码）
export const scene00Subtitles = openingSubs;
export const scene01Subtitles = keynesSubs;
export const scene02Subtitles = election1932Subs;
export const scene03Subtitles = goldStandardSubs;
export const scene04Subtitles = hitlerSelectedSubs;
export const scene05Subtitles = wallStreetNaziSubs;
export const scene06Subtitles = warAndMoneySubs;
export const scene07Subtitles = summarySubs;

// 合并所有字幕
export const episode06Subtitles: SubtitleEntry[] = [
  ...openingSubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[0],
    endFrame: s.endFrame + SCENE_OFFSETS[0],
  })),
  ...keynesSubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[1],
    endFrame: s.endFrame + SCENE_OFFSETS[1],
  })),
  ...election1932Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[2],
    endFrame: s.endFrame + SCENE_OFFSETS[2],
  })),
  ...goldStandardSubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[3],
    endFrame: s.endFrame + SCENE_OFFSETS[3],
  })),
  ...hitlerSelectedSubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[4],
    endFrame: s.endFrame + SCENE_OFFSETS[4],
  })),
  ...wallStreetNaziSubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[5],
    endFrame: s.endFrame + SCENE_OFFSETS[5],
  })),
  ...warAndMoneySubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[6],
    endFrame: s.endFrame + SCENE_OFFSETS[6],
  })),
  ...summarySubs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[7],
    endFrame: s.endFrame + SCENE_OFFSETS[7],
  })),
];

export default episode06Subtitles;
