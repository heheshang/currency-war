/**
 * Episode05 Documentary 字幕 - 一战与大衰退
 *
 * 根据第四章内容生成，按场景分离
 * 总时长约 180s (5400帧 @30fps)
 */
import { SubtitleEntry } from "./index";

// ========== Scene 0: 开场 - 战争序幕 (10s = 300帧) ==========
export const openingSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 150,
    text: '"The real threat to our republic is this invisible government."',
    translation: '"我们共和国的真正威胁是这个看不见的政府。"',
  },
  {
    startFrame: 150,
    endFrame: 300,
    text: "— John Hylan, Mayor of New York, 1927",
    translation: "— 约翰·海兰，纽约市市长，1927年",
  },
];

// ========== Scene 1: 没有美联储就没有一战 (20s = 600帧) ==========
export const noFedNoWarSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 200,
    text: "1914. Europe stood on the brink of war.",
    translation: "1914年。欧洲站在战争边缘。",
  },
  {
    startFrame: 200,
    endFrame: 400,
    text: "But no major war was possible without financing.",
    translation: "但没有资金支持，大规模战争是不可能的。",
  },
  {
    startFrame: 400,
    endFrame: 600,
    text: "Then came the Federal Reserve. December 23, 1913.",
    translation: "然后美联储来了。1913年12月23日。",
  },
  {
    startFrame: 600,
    endFrame: 800,
    text: "The war machine could finally be unleashed.",
    translation: "战争机器终于可以被释放了。",
  },
];

// ========== Scene 2: 斯特朗操纵下的美联储 (18s = 540帧) ==========
export const strongFedSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 270,
    text: "Benjamin Strong — the true master of the Fed.",
    translation: "本杰明·斯特朗——美联储的真正主人。",
  },
  {
    startFrame: 270,
    endFrame: 540,
    text: "U.S. debt exploded from $1 billion to $25 billion in just 4 years.",
    translation: "美国国债在短短4年内从10亿美元暴涨至250亿美元。",
  },
];

// ========== Scene 3: 威尔逊走向战争 (18s = 540帧) ==========
export const wilsonWarSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 270,
    text: '"We fight for democracy and moral principles." — Wilson',
    translation: '"我们为民主和道德原则而战。" — 威尔逊',
  },
  {
    startFrame: 270,
    endFrame: 540,
    text: "The reality: protecting $30 billion in loans to the Allies.",
    translation: "真相：保护向协约国提供的300亿美元贷款。",
  },
];

// ========== Scene 4: 大发战争财的银行家们 (20s = 600帧) ==========
export const warProfiteersSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 300,
    text: "Paul Warburg's brother: head of German intelligence.",
    translation: "保罗·沃伯格的兄弟：德国情报部门首脑。",
  },
  {
    startFrame: 300,
    endFrame: 600,
    text: "Bankers on both sides. Profits from death.",
    translation: "银行家在两边都有。从死亡中获利。",
  },
];

// ========== Scene 5: 凡尔赛和约 - 20年休战书 (18s = 540帧) ==========
export const versaillesSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 270,
    text: '"This is not peace. It is an armistice for twenty years."',
    translation: '"这不是和平。这是为期二十年的休战书。"',
  },
  {
    startFrame: 270,
    endFrame: 540,
    text: "— Marshal Foch. The seeds of WWII were sown.",
    translation: "— 福煦元帅。二战的种子已经播下。",
  },
];

// ========== Scene 6: 1921年农业萧条 (18s = 540帧) ==========
export const agriculturalCrashSubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 270,
    text: '1921: The first "shearing" operation.',
    translation: '1921年：第一次"剪羊毛"行动。',
  },
  {
    startFrame: 270,
    endFrame: 540,
    text: "Farm prices collapsed. Banks acquired land for pennies.",
    translation: "农产品价格暴跌。银行以低价收购土地。",
  },
];

// ========== Scene 7: 1927年密谋 (20s = 600帧) ==========
export const conspiracy1927Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 300,
    text: "1927. Secret meeting on Long Island.",
    translation: "1927年。长岛上的秘密会议。",
  },
  {
    startFrame: 300,
    endFrame: 600,
    text: "Norman, Strong, Schacht. The plan for 1929 was set.",
    translation: "诺曼、斯特朗、沙赫特。1929年的计划已经制定。",
  },
];

// ========== Scene 8: 1929泡沫破裂 (22s = 660帧) ==========
export const crash1929Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 220,
    text: "October 29, 1929. Black Tuesday.",
    translation: "1929年10月29日。黑色星期二。",
  },
  {
    startFrame: 220,
    endFrame: 440,
    text: "$160 billion in wealth vanished overnight.",
    translation: "1600亿美元财富一夜之间蒸发。",
  },
  {
    startFrame: 440,
    endFrame: 660,
    text: '"Buy when blood is in the streets." — The harvest began.',
    translation: '"当血流成河时买入。" — 收割开始了。',
  },
];

// ========== Scene 9: 总结揭示 (16s = 480帧) ==========
export const summarySubs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 240,
    text: "War, recession, consolidation of wealth.",
    translation: "战争、衰退、财富集中。",
  },
  {
    startFrame: 240,
    endFrame: 480,
    text: "The harvest cycle continues to this day.",
    translation: "收割循环一直持续到今天。",
  },
];

// 合并所有字幕（用于纪录片版）
export const episode05DocumentarySubtitles: SubtitleEntry[] = [
  ...openingSubs,
  ...noFedNoWarSubs,
  ...strongFedSubs,
  ...wilsonWarSubs,
  ...warProfiteersSubs,
  ...versaillesSubs,
  ...agriculturalCrashSubs,
  ...conspiracy1927Subs,
  ...crash1929Subs,
  ...summarySubs,
];

export default episode05DocumentarySubtitles;
