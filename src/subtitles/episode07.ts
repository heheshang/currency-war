/**
 * Episode07 字幕 - 基于实际配音时长
 * 
 * 生成日期：2026-03-05
 * 总时长：374.9秒 = 11250帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 44.1秒 = 1322帧 - 开场
 * - Scene 1: 42.4秒 = 1273帧 - 布雷顿森林
 * - Scene 2: 65.3秒 = 1958帧 - 豪斯上校
 * - Scene 3: 72.4秒 = 2172帧 - 外交协会
 * - Scene 4: 68.2秒 = 2046帧 - 国际清算银行
 * - Scene 5: 42.6秒 = 1279帧 - 彼尔德伯格
 * - Scene 6: 40.0秒 = 1200帧 - 三边委员会
 *
 * 基于《货币战争》book1-第六章：统治世界的精英俱乐部
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  1322, // Scene 0: 44.1s - 开场
  1273, // Scene 1: 42.4s - 布雷顿森林
  1958, // Scene 2: 65.3s - 豪斯上校
  2172, // Scene 3: 72.4s - 外交协会
  2046, // Scene 4: 68.2s - 国际清算银行
  1279, // Scene 5: 42.6s - 彼尔德伯格
  1200, // Scene 6: 40.0s - 三边委员会
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0: 开场 (44.1s = 1322帧)
export const openingSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 189, text: "在我们的生活中，'世界政府'、'世界货币'之类的词汇出现的频率越来越高。" },
  { startFrame: 189, endFrame: 370, text: "如果没有相关的历史背景，您将非常可能把这样的提法当成普通的新闻炒作。" },
  { startFrame: 370, endFrame: 466, text: "其实，一个巨大的计划正在启动。" },
  { startFrame: 466, endFrame: 587, text: "令人忧虑的是，中国对此仍然知之甚少。" },
  { startFrame: 587, endFrame: 737, text: "1944年7月，当整个欧亚大陆还被满天的烽火所笼罩。" },
  { startFrame: 737, endFrame: 967, text: "来自世界各地的44个国家的代表来到美国新罕布什尔州的著名度假胜地布雷顿森林。" },
  { startFrame: 967, endFrame: 1068, text: "商讨战后世界经济新秩序的蓝图。" },
  { startFrame: 1068, endFrame: 1249, text: "国际银行家们开始实施他们策划已久的计划：控制全世界的货币发行！" },
  { startFrame: 1249, endFrame: 1322, text: "这就是所谓'新世界秩序'！" },
];

// Scene 1: 布雷顿森林 (42.4s = 1273帧)
export const brettonWoodsSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 133, text: "布雷顿森林体系确立了美元的世界储备货币地位。" },
  { startFrame: 133, endFrame: 257, text: "国际货币基金组织和世界银行应运而生。" },
  { startFrame: 257, endFrame: 463, text: "此时的国际银行家们已经建立起一系列核心的组织机构：英国皇家国际事务协会。" },
  { startFrame: 463, endFrame: 526, text: "和美国外交协会。" },
  { startFrame: 526, endFrame: 664, text: "后来，由这两个核心机构又衍生出两个新的分支。" },
  { startFrame: 664, endFrame: 794, text: "经济领域由彼尔德伯格俱乐部执掌大政方针。" },
  { startFrame: 794, endFrame: 892, text: "负责政治挂帅的是三边委员会。" },
  { startFrame: 892, endFrame: 1102, text: "这些组织的最终目的，就是建立一个由极少数英美精英分子所统治的世界政府。" },
  { startFrame: 1102, endFrame: 1273, text: "建立最终统一的世界货币发行体系。这就是所谓'新世界秩序'！" },
];

// Scene 2: 豪斯上校 (65.3s = 1958帧)
export const houseColonelSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 287, text: "美国外交协会的创始人，第一次世界大战结束后国际联盟的首倡者豪斯上校就是这一计划在美国的一位重要操盘手。" },
  { startFrame: 287, endFrame: 435, text: "豪斯上校生在德克萨斯州的一个富裕的银行家的家庭。" },
  { startFrame: 435, endFrame: 620, text: "豪斯的父亲，托马斯在美国内战期间是欧洲罗斯柴尔德家族的代理人。" },
  { startFrame: 620, endFrame: 854, text: "1912年，豪斯发表了一本后来引起史学家强烈兴趣的匿名小说《菲利浦·杜：管理者》。" },
  { startFrame: 854, endFrame: 1019, text: "在小说中，他构思了一个仁慈的独裁者掌握了美国两党的权力。" },
  { startFrame: 1019, endFrame: 1193, text: "成立了中央银行，实施了联邦累进收入所得税，组成了国际联盟。" },
  { startFrame: 1193, endFrame: 1392, text: "他在书中所'预测'的未来世界与后来美国所发生的一切是如此惊人的相似。" },
  { startFrame: 1392, endFrame: 1584, text: "1912年总统大选民主党候选人威尔逊，在华尔街银行家举行的宴会上。" },
  { startFrame: 1584, endFrame: 1958, text: "豪斯在政治家和银行家之间起着沟通与协调的作用，威尔逊当选之前，豪斯向金融大佬们保证。豪斯上校很快成为精英圈子中的'精神教父'。" },
];

// Scene 3: 外交协会 (72.4s = 2172帧)
export const cfrEliteSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 113, text: "外交协会就是美国精英们的'中央党校'。" },
  { startFrame: 113, endFrame: 307, text: "第二次世界大战以来，除了3人例外，几乎所有总统候选人都是该协会会员。" },
  { startFrame: 307, endFrame: 596, text: "从1921年以来，绝大多数的财政部长都由该协会包办，艾森豪威尔以降的国家安全顾问基本就是由该协会内定。" },
  { startFrame: 596, endFrame: 824, text: "除此之外，外交协会还产生了14个国务卿，11个国防部长，和9个中央情报局局长。" },
  { startFrame: 824, endFrame: 1107, text: "'一旦外交协会的核心成员决定美国政府的某项特定政策后，外交协会规模庞大的研究机构就开始全速运转。'" },
  { startFrame: 1107, endFrame: 1448, text: "外交协会的成员把持了CBS、ABC、NBC、PBS等电视网络，控制了《纽约时报》、《华盛顿邮报》、《华尔街日报》等大报。" },
  { startFrame: 1448, endFrame: 1671, text: "在杂志领域，外交协会成员控制着：《时代》、《新闻周刊》、《财富》、《生活》等主流杂志。" },
  { startFrame: 1671, endFrame: 1929, text: "在出版领域，外交协会成员控制着迈克米兰、蓝德、西蒙舒斯特、哈波兄弟等最大的出版公司。" },
  { startFrame: 1929, endFrame: 2172, text: "美国的内外事务的决定权已经不在民主与共和两党的手中，而掌握在超级精英俱乐部的小圈子里。" },
];

// Scene 4: 国际清算银行 (68.2s = 2046帧)
export const bisSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 101, text: "国际清算银行是'中央银行家的银行'。" },
  { startFrame: 101, endFrame: 366, text: "除了8月和10月，每年有10次来自伦敦、华盛顿和东京的一批衣冠楚楚神秘人士来到瑞士的巴塞尔。" },
  { startFrame: 366, endFrame: 583, text: "只有那些制定各国每日利率、信贷规模、和货币供应的中央银行家才有资格加入。" },
  { startFrame: 583, endFrame: 831, text: "这个机构拥有400亿美元的现金，各国政府债券，和相当于世界外汇储备总量10％的黄金。" },
  { startFrame: 831, endFrame: 1110, text: "在第二次世界大战期间，英国和美国的国际银行家正是通过这个平台为纳粹德国提供了大量的资金扶持。" },
  { startFrame: 1110, endFrame: 1266, text: "国际清算银行的董事会竟然是由交战双方的银行家所组成。" },
  { startFrame: 1266, endFrame: 1542, text: "美国的托马斯·麦奇立克与纳粹德国工业托拉斯I. G. Farben的首脑人物赫曼·施密茨一起担任董事。" },
  { startFrame: 1542, endFrame: 1730, text: "它的账目从1930年到现在的76年中从未向任何政府公开过。" },
  { startFrame: 1730, endFrame: 2046, text: "这才是真正的'核心俱乐部'，由六七个中央银行家组成，最重要的理念就是要把各国政府坚决排除在国际货币决策过程之外。" },
];

// Scene 5: 彼尔德伯格 (42.6s = 1279帧)
export const bilderbergSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 106, text: "彼尔德伯格俱乐部成立于1954年。" },
  { startFrame: 106, endFrame: 202, text: "名称来自荷兰的彼尔德伯格酒店。" },
  { startFrame: 202, endFrame: 306, text: "它汇集了欧洲和美国最有权势的人物。" },
  { startFrame: 306, endFrame: 436, text: "国家元首、银行巨头、石油大亨、媒体大亨。" },
  { startFrame: 436, endFrame: 622, text: "他们每年秘密会面一次。没有媒体允许进入。没有公开记录。" },
  { startFrame: 622, endFrame: 775, text: "1975年的会议主题是'西方欧洲'和'日本日益增长的角色'。" },
  { startFrame: 775, endFrame: 938, text: "一年后，英国选举了撒切尔夫人。日本签署了广场协议。" },
  { startFrame: 938, endFrame: 1069, text: "1986年会议讨论了'美苏关系'和'全球金融体系'。" },
  { startFrame: 1069, endFrame: 1279, text: "1989年柏林墙倒塌。1991年苏联解体。这些绝非巧合！" },
];

// Scene 6: 三边委员会 (40.0s = 1200帧)
export const trilateralSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 95, text: "三边委员会成立于1973年。" },
  { startFrame: 95, endFrame: 227, text: "由银行家大卫·洛克菲勒和布热津斯基创立。" },
  { startFrame: 227, endFrame: 329, text: "汇集了北美、西欧和日本的精英。" },
  { startFrame: 329, endFrame: 467, text: "吉米·卡特在经三边委员会审查后成为总统。" },
  { startFrame: 467, endFrame: 594, text: "他任命了14名三边委员会成员担任重要职位。" },
  { startFrame: 594, endFrame: 752, text: "前世界银行首席经济学家斯蒂格利茨揭露了他们的方法。" },
  { startFrame: 752, endFrame: 977, text: "'IMF的决策是秘密的和不民主的。IMF的经济疗法经常使问题更加恶化。'" },
  { startFrame: 977, endFrame: 1075, text: "他因为说真话而被'强制退休'了。" },
  { startFrame: 1075, endFrame: 1200, text: "理解这些精英网络是走向金融独立的第一步。" },
];

// 合并所有字幕（使用 SCENE_OFFSETS 计算全局帧）
export const episode07Subtitles: SubtitleEntry[] = [
  ...openingSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[0], endFrame: s.endFrame + SCENE_OFFSETS[0] })),
  ...brettonWoodsSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[1], endFrame: s.endFrame + SCENE_OFFSETS[1] })),
  ...houseColonelSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[2], endFrame: s.endFrame + SCENE_OFFSETS[2] })),
  ...cfrEliteSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[3], endFrame: s.endFrame + SCENE_OFFSETS[3] })),
  ...bisSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[4], endFrame: s.endFrame + SCENE_OFFSETS[4] })),
  ...bilderbergSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[5], endFrame: s.endFrame + SCENE_OFFSETS[5] })),
  ...trilateralSubs.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[6], endFrame: s.endFrame + SCENE_OFFSETS[6] })),
];

export default episode07Subtitles;
