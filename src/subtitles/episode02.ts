/**
 * Episode02 字幕 - 基于实际配音时长
 * 
 * 生成日期：2026-02-28
 * 总时长：402.2秒 = 12066帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
 * - Scene 1: 7.5秒 = 226帧
 * - Scene 2: 47.1秒 = 1412帧
 * - Scene 3: 46.9秒 = 1406帧
 * - Scene 4: 47.9秒 = 1437帧
 * - Scene 5: 47.6秒 = 1427帧
 * - Scene 6: 50.0秒 = 1501帧
 * - Scene 7: 56.4秒 = 1693帧
 * - Scene 8: 60.5秒 = 1815帧
 * - Scene 9: 38.3秒 = 1149帧
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  226, // Scene 0: 7.5s
  1412, // Scene 1: 47.1s
  1406, // Scene 2: 46.9s
  1437, // Scene 3: 47.9s
  1427, // Scene 4: 47.6s
  1501, // Scene 5: 50.0s
  1693, // Scene 6: 56.4s
  1815, // Scene 7: 60.5s
  1149, // Scene 8: 38.3s
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0: 开场 - 罗斯柴尔德名言
export const scene01Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 153,
    "text": "只要我能控制一个国家的货币发行，我不在乎谁制定法律。"
  },
  {
    "startFrame": 153,
    "endFrame": 226,
    "text": "——梅耶·罗斯柴尔德"
  }
];

// Scene 1: 隐形的世界首富
export const scene02Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 287,
    "text": "当国际媒体成天炒作身家500亿美元的比尔·盖茨蝉联世界首富宝座的时候，如果你信以为真，你就上当了。"
  },
  {
    "startFrame": 287,
    "endFrame": 607,
    "text": "人们耳熟能详的所谓富豪排行榜上，你根本找不到'大道无形'的超级富豪们的身影，因为他们早已严密地控制了西方主要的媒体。"
  },
  {
    "startFrame": 607,
    "endFrame": 1146,
    "text": "所谓'大隐，隐于朝'，罗斯柴尔德家族今天仍在经营着银行业务，但是如果我们随机在北京或上海的街头问100个中国人，其中可能有99个知道美国花旗银行，而不见得有1个知道罗斯柴尔德银行。"
  },
  {
    "startFrame": 1146,
    "endFrame": 1412,
    "text": "罗斯柴尔德家族究竟拥有多少财富？这是一个世界之谜。保守的估计是30万亿美元！"
  }
];

// Scene 2: 梅耶的第一桶金
export const scene03Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 324,
    "text": "1744年2月23日，梅耶·A·鲍尔出生在法兰克福的犹太人聚居区，他的父亲摩西是一个流动的金匠和放贷人。"
  },
  {
    "startFrame": 324,
    "endFrame": 619,
    "text": "梅耶从小就展现出惊人的智商，父亲对他倾注了大量心血，系统地教授他关于金钱和借贷的商业知识。"
  },
  {
    "startFrame": 619,
    "endFrame": 995,
    "text": "梅耶将其姓氏改为罗斯柴尔德，意思是红色的盾牌。他凭借对钱币的深刻研究，结识了威廉王子的宫廷，最终成为王室指定代理人。"
  },
  {
    "startFrame": 995,
    "endFrame": 1406,
    "text": "拿破仑当政后，威廉王子仓皇流亡，出逃之前将一笔价值300万美元的现金交给梅耶保管。就是这300万美元，成为梅耶铸造其金融帝国的第一桶金。"
  }
];

// Scene 3: 滑铁卢与情报网络
export const scene04Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 402,
    "text": "1815年6月18日，在比利时布鲁塞尔近郊展开的滑铁卢战役，不仅是拿破仑和威灵顿两支大军之间的生死决斗，也是成千上万投资者的巨大赌博。"
  },
  {
    "startFrame": 402,
    "endFrame": 870,
    "text": "早在战前，罗斯柴尔德家族就非常具有远见地建立了自己的战略情报收集和快递系统。他们构建起数量庞大的秘密代理人网络，这些类似战略情报间谍的人被称为'孩子'。"
  },
  {
    "startFrame": 870,
    "endFrame": 1143,
    "text": "这个情报系统的效率、速度和准确度都达到令人叹为观止的程度，远远超过了任何官方信息网络的速度。"
  },
  {
    "startFrame": 1143,
    "endFrame": 1437,
    "text": "当罗斯伍兹跳上罗斯柴尔德的快船渡过海峡时，他比官方信使早了整整一天将滑铁卢战役的结果带到英国。"
  }
];

// Scene 4: 股票交易所操纵
export const scene05Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 361,
    "text": "当内森快步进入股票交易所时，正在等待战报的焦急人群立刻安静下来，所有人的目光都注视着内森那张毫无表情、高深莫测的脸。"
  },
  {
    "startFrame": 361,
    "endFrame": 636,
    "text": "内森冲着身边的交易员们递了一个深邃的眼色，大家立即一声不响地冲向交易台，开始抛售英国公债。"
  },
  {
    "startFrame": 636,
    "endFrame": 915,
    "text": "大厅里立时一阵骚动，有人发出惊叫：'罗斯柴尔德知道了！威灵顿战败了！'恐慌性抛售开始蔓延。"
  },
  {
    "startFrame": 915,
    "endFrame": 1427,
    "text": "经过几个小时的狂抛，英国公债成为一堆垃圾，票面价值仅剩下5%。此时，内森的眼神轻微地闪动了一下，这次的信号完全不同——他的交易员开始买进市场上能见到的每一张英国公债。"
  }
];

// Scene 5: 二十倍利润
export const scene06Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 260,
    "text": "6月21日晚11点，威灵顿勋爵的信使终于到达了伦敦，消息是拿破仑大军被彻底打败了！"
  },
  {
    "startFrame": 260,
    "endFrame": 671,
    "text": "这个消息比内森的情报晚了整整一天！而内森在这一天之内，狂赚了20倍的金钱，超过拿破仑和威灵顿在几十年战争中所得到的财富的总和！"
  },
  {
    "startFrame": 671,
    "endFrame": 978,
    "text": "滑铁卢一战使内森一举成为英国政府最大的债权人，从而主导了英国日后的公债发行，英格兰银行被内森所控制。"
  },
  {
    "startFrame": 978,
    "endFrame": 1501,
    "text": "志得意满的内森毫不掩饰他征服了大英帝国的骄傲：'我不在乎什么样的英格兰傀儡被放在王位上来统治这个庞大的日不落帝国。谁控制着大英帝国的货币供应，谁就控制了大英帝国，而这个人就是我！'"
  }
];

// Scene 6: 五兄弟征服欧洲
export const scene07Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 263,
    "text": "梅耶有比建立一个英格兰银行要大得多的雄心！他得到了威廉王子的巨款后，就开始调兵遣将。"
  },
  {
    "startFrame": 263,
    "endFrame": 839,
    "text": "他的5个儿子像5支利箭射向欧洲的5个心脏地区：老大阿姆斯洛镇守法兰克福总部，老二所罗门到维也纳开辟新战场，老三内森被派往英国主持大局，老四卡尔奔赴意大利的那不勒斯，老五詹姆斯执掌巴黎业务。"
  },
  {
    "startFrame": 839,
    "endFrame": 1157,
    "text": "一个人类历史上前所未有的金融帝国揭开了帷幕。罗斯柴尔德家族创建的银行体系是世界上第一个国际银行集团。"
  },
  {
    "startFrame": 1157,
    "endFrame": 1693,
    "text": "詹姆斯在法国操纵债券市场，迫使路易十八向其求援，最终完全控制法国金融。所罗门到1848年成为奥地利金融和经济的主宰者。卡尔成为意大利宫廷的财政支柱，影响力遍及意大利半岛。"
  }
];

// Scene 7: 金融帝国巅峰
export const scene08Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 436,
    "text": "老罗斯柴尔德在1812年去世之前，立下了森严的遗嘱：所有家族银行要职必须由家族内部人员担任，家族通婚只能在表亲之间进行，绝对不准对外公布财产情况。"
  },
  {
    "startFrame": 436,
    "endFrame": 913,
    "text": "在100多年里，家族内部通婚18次，其中16次是在第一表亲之间。严密的家族控制，完全透明的黑箱操作，像钟表一般精确的协调，使得罗斯柴尔德家族所向披靡。"
  },
  {
    "startFrame": 913,
    "endFrame": 1387,
    "text": "据估计，1850年左右，罗斯柴尔德家族总共积累了相当于60亿美元的财富。如果以6%的回报率计算，在150多年后的今天，他们家族的资产至少超过了50万亿美元。"
  },
  {
    "startFrame": 1387,
    "endFrame": 1815,
    "text": "到19世纪中叶，英、法、德、奥、意等欧洲主要工业国的货币发行大权均落入了罗斯柴尔德家族的控制之中，'神圣的君权被神圣的金权所取代'。"
  }
];

// Scene 8: 隐形财富
export const scene09Subs: SubtitleEntry[] = [
  {
    "startFrame": 0,
    "endFrame": 224,
    "text": "到20世纪初，罗斯柴尔德家族所控制的财富估计达到了当时世界总财富的一半。"
  },
  {
    "startFrame": 224,
    "endFrame": 586,
    "text": "对于银行家而言，战争是天大的喜讯。从法国大革命到第二次世界大战的几乎所有近代战争的背后，几乎都闪动着他们的影子。"
  },
  {
    "startFrame": 586,
    "endFrame": 823,
    "text": "老罗斯柴尔德的夫人去世之前说道：'如果我的儿子们不希望发生战争，那就不会有人热爱战争了。'"
  },
  {
    "startFrame": 823,
    "endFrame": 1149,
    "text": "此时，大西洋彼岸美丽繁荣富庶的美利坚大陆早已落入了他们的视野。一个更加宏大的货币战争，即将在新的世界展开。"
  }
];

// 合并所有字幕
export const episode02Subtitles: SubtitleEntry[] = [
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

export default episode02Subtitles;

// 向后兼容别名
export const openingSubs = scene01Subs;
export const rothschildIntroSubs = scene02Subs;
export const mayerRothschildSubs = scene03Subs;
export const waterlooPreludeSubs = scene04Subs;
export const stockExchangeSubs = scene05Subs;
export const twentyTimesProfitSubs = scene06Subs;
export const fiveBrothersSubs = scene07Subs;
export const empirePeakSubs = scene08Subs;
export const invisibleWealthSubs = scene09Subs;
