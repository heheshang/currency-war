/**
 * Episode01 字幕 - 基于实际配音时长
 * 
 * 生成日期：2026-02-27
 * 总时长：351.9秒 = 10557帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
 * - Scene 1: 40.1秒 = 1204帧
 * - Scene 2: 47.6秒 = 1428帧
 * - Scene 3: 44.5秒 = 1336帧
 * - Scene 4: 66.1秒 = 1982帧
 * - Scene 5: 43.7秒 = 1311帧
 * - Scene 6: 26.6秒 = 799帧
 * - Scene 7: 43.9秒 = 1316帧
 * - Scene 8: 22.5秒 = 674帧
 * - Scene 9: 16.9秒 = 507帧
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  1204, // Scene 0: 40.1s
  1428, // Scene 1: 47.6s
  1336, // Scene 2: 44.5s
  1982, // Scene 3: 66.1s
  1311, // Scene 4: 43.7s
  799, // Scene 5: 26.6s
  1316, // Scene 6: 43.9s
  674, // Scene 7: 22.5s
  507, // Scene 8: 16.9s
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0
export const scene01Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 251,
    "text": "2006年夏，正当美国房地产泡沫如日中天之时，我对即将来临的金融海啸已深感忧虑。"
  },
  {
    "startFrame": 251,
    "endFrame": 409,
    "text": "《货币战争》一书正是在这样一种不安和焦虑之中诞生的。"
  },
  {
    "startFrame": 409,
    "endFrame": 833,
    "text": "在我看来，导致2008年全球金融危机的根源在于1971年以来的美元体系存在着致命的缺陷，这就是全世界的货币大厦事实上建立在美国的债务沙滩之上。"
  },
  {
    "startFrame": 833,
    "endFrame": 1204,
    "text": "而美元的债务本位既不可能稳定，也不可能持续，随着世界经济总吨位的增长，美元地基已在沉陷，随之而来的就是大厦将倾的危机。"
  }
];

// Scene 1
export const scene02Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 227,
    "text": "货币从本质上看，就是财富的一种索取权，人们持有货币，相当于持有财富的收据。"
  },
  {
    "startFrame": 227,
    "endFrame": 549,
    "text": "什么是财富？以什么样的财富形式为抵押发行货币，这决定着货币的性质。最广为人们所接受的财富就是通货。"
  },
  {
    "startFrame": 549,
    "endFrame": 1008,
    "text": "在人类5000年文明史上，曾经有2000多种商品担当过通货的职责，而市场在进化的过程中逐步淘汰了其他通货，最终选择了黄金和白银作为财富的终极代表。"
  },
  {
    "startFrame": 1008,
    "endFrame": 1428,
    "text": "无论哪个地区，无论什么文明，无论何种宗教，金银作为最广泛被接受的财富形式而形成了货币。此时的金银，既是财富的索取权，同时又是财富本身。"
  }
];

// Scene 2
export const scene03Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 162,
    "text": "纸币的出现，原本作为金银的收据，主要是为了方便交易。"
  },
  {
    "startFrame": 162,
    "endFrame": 539,
    "text": "人们持有纸币的最终目的，不是为了拥有这张收据，而是为了拥有收据所能索取到的金银，以及最终金银能够自由而等值兑换的其他财富。"
  },
  {
    "startFrame": 539,
    "endFrame": 977,
    "text": "这样的货币制度一直运转到1971年，美元正是这一货币制度的代表。在此之前，人们手持美元觉得踏实的真正原因，就是美元钞票能够最终兑换成黄金。"
  },
  {
    "startFrame": 977,
    "endFrame": 1336,
    "text": "久而久之，人们甚至忘记了美元仅仅是一种财富的收据，而绝非财富本身，而美元逐渐被描述成是与黄金一样美好的终极财富。"
  }
];

// Scene 3
export const scene04Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 491,
    "text": "即便人们在长期被洗脑的过程中已逐渐淡忘纸币收据背后的黄金，但黄金毕竟制约了收据的超额增发，因为当收据过多时，迟早会激发人们对这些收据所能索取的黄金的兴趣。"
  },
  {
    "startFrame": 491,
    "endFrame": 888,
    "text": "银行家们作为货币游戏规则的制定者，并不喜欢黄金作为纸币的抵押物，一是黄金不足以满足纸币欲望的膨胀，二是黄金不能产生利息收入。"
  },
  {
    "startFrame": 888,
    "endFrame": 1303,
    "text": "1971年之后，黄金的非货币化其实是货币游戏规则制定者单方面强加给其他人的不平等条约。于是，我们见识到了一种全新的货币形态——主权信用货币。"
  },
  {
    "startFrame": 1303,
    "endFrame": 1644,
    "text": "这是一种以主权国家的债务为抵押资产来发行货币的尝试，纸币这一收据所能索取到的最终财富不再是黄金，而是国债！"
  },
  {
    "startFrame": 1644,
    "endFrame": 1982,
    "text": "为使用公共货币而向少数人支付利息成本，将国家债务与货币死锁在一起，这是一个从基因里就存在着'癌变'信息的货币系统。"
  }
];

// Scene 4
export const scene05Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 341,
    "text": "如果货币与信用扩张及其利息成本增加的速度持续超过经济增长速度，势必造成整个经济体形成债务堆积的'堰塞湖'效应。"
  },
  {
    "startFrame": 341,
    "endFrame": 488,
    "text": "2008年席卷全球的金融危机的根源正在于此。"
  },
  {
    "startFrame": 488,
    "endFrame": 848,
    "text": "正是基于上述判断，2006年在《货币战争》中，我提出了以下推论：金融危机的爆发将不可避免，它会源于美国，但波及整个世界。"
  },
  {
    "startFrame": 848,
    "endFrame": 1311,
    "text": "5年以来世界经济形势的突变，已经和正在验证这些推论：2007年次贷危机愈演愈烈，终于导致了2008年金融海啸；2008年9月两房与雷曼兄弟公司相继破产。"
  }
];

// Scene 5
export const scene06Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 287,
    "text": "2006年，美国财长保尔森在访华前夕接受采访时指出，作为经济大国，'他们已是全球经济的领导者'。"
  },
  {
    "startFrame": 287,
    "endFrame": 608,
    "text": "毫无疑问，这个'他们'，就是中国。显然，今天的中国，正以惊人的速度，将自己变成全球经济举足轻重的一部分。"
  },
  {
    "startFrame": 608,
    "endFrame": 799,
    "text": "一系列的经济数据和迹象都表明，庞大的中国经济航母，已经起程。"
  }
];

// Scene 6
export const scene07Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 128,
    "text": "然而，起航的中国经济航母，会一帆风顺吗？"
  },
  {
    "startFrame": 128,
    "endFrame": 471,
    "text": "中国能否在21世纪中叶成为世界经济真正强国的最主要隐患，更有可能来自于一个看不见硝烟的战场——潜在的'金融大战'的威胁。"
  },
  {
    "startFrame": 471,
    "endFrame": 703,
    "text": "金融对外资开放，其风险甚至可能大于让美国的所有航母编队开到中国临近海域。"
  },
  {
    "startFrame": 703,
    "endFrame": 1316,
    "text": "因为军事攻击最多摧毁建筑设施、消灭人体，以中国的疆域之广，常规战争几乎不可能造成中国经济命脉的彻底损伤。而金融战争的隐蔽性和无战例借鉴、无实战演练的残酷性，对中国的国家防务是一个巨大挑战。"
  }
];

// Scene 7
export const scene08Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 362,
    "text": "历史和现实同样严峻：苏联的解体、卢布的贬值；亚洲金融风暴、'四小龙'偃旗息鼓；日本经济仿佛被灌了迷魂药似的一蹶不振。"
  },
  {
    "startFrame": 362,
    "endFrame": 674,
    "text": "这一切难道只是偶然或者巧合？如果不是，谁是幕后发力的真正推手？谁又可能成为下一个被暗算的目标？"
  }
];

// Scene 8
export const scene09Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 404,
    "text": "本书的目的，就在于将世界18世纪以来的重大金融事件背后的黑手曝光出来，从而预测他们未来对中国打击的主攻方向，以及探讨中国的反制之道。"
  },
  {
    "startFrame": 404,
    "endFrame": 507,
    "text": "战争已经开始，虽然看不见硝烟！"
  }
];

// 合并所有字幕
export const episode01Subtitles: SubtitleEntry[] = [
  ...scene01Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[0],
    endFrame: s.endFrame + SCENE_OFFSETS[0],
  })),
  ...scene02Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[1],
    endFrame: s.endFrame + SCENE_OFFSETS[1],
  })),
  ...scene03Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[2],
    endFrame: s.endFrame + SCENE_OFFSETS[2],
  })),
  ...scene04Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[3],
    endFrame: s.endFrame + SCENE_OFFSETS[3],
  })),
  ...scene05Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[4],
    endFrame: s.endFrame + SCENE_OFFSETS[4],
  })),
  ...scene06Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[5],
    endFrame: s.endFrame + SCENE_OFFSETS[5],
  })),
  ...scene07Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[6],
    endFrame: s.endFrame + SCENE_OFFSETS[6],
  })),
  ...scene08Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[7],
    endFrame: s.endFrame + SCENE_OFFSETS[7],
  })),
  ...scene09Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[8],
    endFrame: s.endFrame + SCENE_OFFSETS[8],
  }))
];

export default episode01Subtitles;

// 向后兼容别名
export const ancientMarketSubs = scene01Subs;
export const chinaRiseSubs = scene02Subs;
export const invisibleBattlefieldSubs = scene03Subs;
export const historicalLessonsSubs = scene04Subs;
export const moneyEvolutionSubs = scene05Subs;
export const historicalTimelineSubs = scene06Subs;
export const debtSpiralSubs = scene07Subs;
export const inflationSubs = scene08Subs;
export const endingSubs = scene09Subs;
