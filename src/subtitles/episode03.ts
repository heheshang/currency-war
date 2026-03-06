/**
 * Episode03 字幕 - 基于实际配音时长
 * 
 * 生成日期：2026-02-28
 * 总时长：437.4秒 = 13122帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 26.0秒 = 780帧
 * - Scene 1: 68.0秒 = 2040帧
 * - Scene 2: 46.0秒 = 1380帧
 * - Scene 3: 44.8秒 = 1343帧
 * - Scene 4: 45.1秒 = 1352帧
 * - Scene 5: 51.3秒 = 1539帧
 * - Scene 6: 44.6秒 = 1337帧
 * - Scene 7: 52.9秒 = 1587帧
 * - Scene 8: 58.8秒 = 1764帧
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  780, // Scene 0: 26.0s
  2040, // Scene 1: 68.0s
  1380, // Scene 2: 46.0s
  1343, // Scene 3: 44.8s
  1352, // Scene 4: 45.1s
  1539, // Scene 5: 51.3s
  1337, // Scene 6: 44.6s
  1587, // Scene 7: 52.9s
  1764, // Scene 8: 58.8s
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0: 林肯的警告
export const scene01Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 278,
    "text": "我有两个主要的敌人：我面前的南方军队，还有后面的金融机构。在这两者之中，后者才是最大的威胁。"
  },
  {
    "startFrame": 278,
    "endFrame": 506,
    "text": "我看见未来的一场令我颤抖的危机正在向我们靠近，让我对我们国家的安危战栗不已。"
  },
  {
    "startFrame": 506,
    "endFrame": 780,
    "text": "金钱的力量将继续统治并伤害着人民，直到财富最终积聚到少数人手里，我们的共和国将被摧毁。"
  }
];

// Scene 1: 殖民地货币与美国独立战争
export const scene02Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 418,
    "text": "最早到美洲大陆谋生的人大多是非常穷困的贫民，他们几乎没有什么财产和金钱。当时的北美还没有发现大型的金矿和银矿，市场上流通的货币极为短缺。"
  },
  {
    "startFrame": 418,
    "endFrame": 908,
    "text": "长期的金属货币奇缺促使当地政府开始了一种崭新的尝试，那就是由政府印刷和发行纸币来作为统一的法币。这种纸币没有任何金银实物做抵押，是一种完全的政府信用货币。"
  },
  {
    "startFrame": 908,
    "endFrame": 1290,
    "text": "富兰克林说：在殖民地，我们发行自己的货币，名叫殖民券。我们按照商业和工业的需要来发行等比例的货币，政府不需要向任何人支付利息。"
  },
  {
    "startFrame": 1290,
    "endFrame": 1660,
    "text": "愤怒的英国银行家们立刻行动起来，在他们控制下的英国议会于1764年通过《货币法案》，严厉禁止美洲殖民地各州印发自己的纸币。"
  },
  {
    "startFrame": 1660,
    "endFrame": 2040,
    "text": "富兰克林痛苦地说：殖民地不能发行自己的货币，从而将无法永久地摆脱国王乔治三世和国际银行家的控制，这是美国独立战争爆发最主要的原因。"
  }
];

// Scene 2: 美国第一银行的诞生
export const scene03Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 330,
    "text": "亚历山大·汉密尔顿是一个与罗斯柴尔德家族有着密切联系的重量级人物。他始终是美国中央银行制度的主要推动者。"
  },
  {
    "startFrame": 330,
    "endFrame": 660,
    "text": "汉密尔顿代表着精英阶级的利益，而杰斐逊则代表着人民大众的利益。在私有中央银行制度的问题上，双方针锋相对。"
  },
  {
    "startFrame": 660,
    "endFrame": 926,
    "text": "杰斐逊反驳道：一个私有的中央银行发行人民的公共货币，这对人民自由的威胁比敌人的军队更严重。"
  },
  {
    "startFrame": 926,
    "endFrame": 1380,
    "text": "国际银行家终于取得了第一个重大胜利。到1811年，外国资本占到了1000万股本中的700万，英格兰银行和内森·罗斯柴尔德成为美国中央银行的主要股东。"
  }
];

// Scene 3: 杰克逊总统的银行战争
export const scene04Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 482,
    "text": "1828年，安德鲁·杰克逊当选总统后，他决心废除第二银行。他指出：如果《宪法》授权国会发行货币，那是让国会自己行使这个权力，而不是让国会授权给任何个人或公司。"
  },
  {
    "startFrame": 482,
    "endFrame": 753,
    "text": "杰克逊总统说：你们是一群毒蛇。我打算把你们连根拔掉，以上帝的名义，我一定会将你们连根拔掉。"
  },
  {
    "startFrame": 753,
    "endFrame": 1112,
    "text": "1835年1月8日，杰克逊总统还清了最后一笔国债，这是历史上美国政府唯一的一次将国债降到了零，并且产生了3500万美元的盈余。"
  },
  {
    "startFrame": 1112,
    "endFrame": 1343,
    "text": "1845年6月8日，杰克逊总统去世。他的墓志铭上只有一句话：我杀死了银行。"
  }
];

// Scene 4: 南北战争的金融背景
export const scene05Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 347,
    "text": "德国首相俾斯麦说得透彻：毫无疑问，把美国分裂成南北两个实力较弱的联邦，是内战爆发前早就由欧洲的金融强权定好了的。"
  },
  {
    "startFrame": 347,
    "endFrame": 857,
    "text": "国际银行家们做好了充分准备，就等战争开打，然后大发战争横财。他们惯用打法是两面下注，无论谁胜谁负，巨额的战争开支所导致的政府巨额债务都是银行家们最丰盛的美餐。"
  },
  {
    "startFrame": 857,
    "endFrame": 1352,
    "text": "银行家们向林肯总统提出了融资计划，当听到利息要求高达24%到36%的时候，林肯总统立即指着门让银行家们离开。这是一个彻底陷美国政府于破产境地的狠招。"
  }
];

// Scene 5: 绿币——林肯的货币新政
export const scene06Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 306,
    "text": "林肯苦思冥想解决方案。这时，他在芝加哥的老友迪克·泰勒给林肯出了一个主意——政府自己发行货币！"
  },
  {
    "startFrame": 306,
    "endFrame": 670,
    "text": "这种新货币使用绿色的图案以区别于其他的银行货币，史称绿币。这种新货币的独到之处在于它完全没有金银等货币金属做抵押。"
  },
  {
    "startFrame": 670,
    "endFrame": 1036,
    "text": "在整个南北战争期间，林肯政府一共发行了4.5亿美元的新货币。林肯总统非常认真地考虑要把这种无债货币的发行长期化和法制化。"
  },
  {
    "startFrame": 1036,
    "endFrame": 1539,
    "text": "《伦敦时报》发表声明：如果源于美国的这种令人厌恶的新的财政政策得以永久化，那么政府就可以没有成本地发行自己的货币。这个国家必须被摧毁，否则它将摧毁世界上每一个君主制国家。"
  }
];

// Scene 6: 俄国同盟
export const scene07Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 413,
    "text": "在欧洲的国王们向美洲大量派兵准备分裂美国的最危险的时刻，林肯立刻想到了欧洲君主们的夙敌——俄国。林肯派出特使向沙皇亚历山大二世求救。"
  },
  {
    "startFrame": 413,
    "endFrame": 916,
    "text": "未经宣战，俄国的舰队在1863年9月开进了纽约港。俄国太平洋舰队在10月到达旧金山。他们的出现造成了英国和法国的犹豫不决，最终给林肯扭转局面赢得了时间。"
  },
  {
    "startFrame": 916,
    "endFrame": 1337,
    "text": "内战结束以后，为了支付俄国舰队总计720万美元的费用，美国政府以购买俄国阿拉斯加的土地来支付战争费用。这件事在历史上称为西华德的蠢事。"
  }
];

// Scene 7: 林肯遇刺的真相
export const scene08Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 611,
    "text": "德国的铁血首相俾斯麦曾一针见血地指出：当他从国会那里得到授权，通过向人民出售国债来进行借债，这样政府和国家就从外国金融家的圈套中跳了出来。当他们明白过来美国将逃出他们的掌握时，林肯的死期就不远了。"
  },
  {
    "startFrame": 611,
    "endFrame": 983,
    "text": "1865年4月14日，林肯总统在福特剧院遇刺。第二天凌晨，林肯总统去世。刺杀林肯事件被广泛认为是一个大规模的阴谋。"
  },
  {
    "startFrame": 983,
    "endFrame": 1312,
    "text": "林肯遇刺后，在国际金融势力的操纵下，国会宣布废除林肯的新币政策，冻结林肯新币的发行上限为不超过4亿美元。"
  },
  {
    "startFrame": 1312,
    "endFrame": 1587,
    "text": "美国财政部经过认真计算，因为林肯发行美国政府自己的货币，一共为美国政府节省了40亿美元的利息。"
  }
];

// Scene 8: 《国家银行法》的致命妥协
export const scene09Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 397,
    "text": "美国财政部长所罗门·切斯说：我在催生《国家银行法》上所起到的作用是我一生中最严重的财政错误。它所产生的垄断将影响这个国家的每一个方面。"
  },
  {
    "startFrame": 397,
    "endFrame": 854,
    "text": "该法案授权政府批准国家银行发行统一标准的银行券，这些银行实际上将发行美国的国家货币。至关重要的一点是，这些银行以美国政府债券作为发行银行券的储备金。"
  },
  {
    "startFrame": 854,
    "endFrame": 1359,
    "text": "经济学家加尔布雷斯指出：联邦政府财政每年都获得了大量盈余。但是，它却无法还清它的债务，因为这样做意味着没有债券去做国家货币的抵押。还清债务就等于摧毁了货币流通。"
  },
  {
    "startFrame": 1359,
    "endFrame": 1764,
    "text": "从1864年开始，银行家们可以世世代代享用国债利息这一美餐。人民被迫向银行家间接缴税，为了原本是他们血汗劳动所创造的财富和货币！"
  }
];

// 合并所有字幕
export const episode03Subtitles: SubtitleEntry[] = [
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

export default episode03Subtitles;

// 向后兼容别名
export const openingLincolnSubs = scene01Subs;
export const colonialCurrencySubs = scene02Subs;
export const firstBankSubs = scene03Subs;
export const jacksonBankWarSubs = scene04Subs;
export const civilWarPreludeSubs = scene05Subs;
export const greenbackSubs = scene06Subs;
export const russianAllianceSubs = scene07Subs;
export const assassinationSubs = scene08Subs;
export const nationalBankActSubs = scene09Subs;
