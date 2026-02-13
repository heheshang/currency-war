/**
 * Episode07 字幕 - 按Scene分离
 *
 * 总时长：约7分钟（420秒 = 12600帧 @30fps）
 *
 * 基于《货币战争》book1-第六章：统治世界的精英俱乐部
 *
 * 每个Scene的字幕从第0帧开始：
 * - Scene 1 (OpeningScene): 全局帧 0-1800 → 相对帧 0-1800
 * - Scene 2 (BrettonWoodsScene): 全局帧 1800-3600 → 相对帧 0-1800
 * - Scene 3 (HouseColonelScene): 全局帧 3600-5400 → 相对帧 0-1800
 * - Scene 4 (CFREliteScene): 全局帧 5400-7200 → 相对帧 0-1800
 * - Scene 5 (BISScene): 全局帧 7200-9000 → 相对帧 0-1800
 * - Scene 6 (BilderbergScene): 全局帧 9000-10800 → 相对帧 0-1800
 * - Scene 7 (TrilateralScene): 全局帧 10800-12600 → 相对帧 0-1800
 */
import { SubtitleEntry } from "./index";

// Scene 1: OpeningScene (60s = 1800帧, 全局偏移 0)
export const openingSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "In our daily life, terms like 'World Government' and 'World Currency' appear with increasing frequency.", translation: "在我们的生活中，'世界政府'、'世界货币'之类的词汇出现的频率越来越高。" },
  { startFrame: 180, endFrame: 360, text: "Without historical context, you might dismiss these as mere media hype.", translation: "如果没有相关的历史背景，您将非常可能把这样的提法当成普通的新闻炒作。" },
  { startFrame: 360, endFrame: 540, text: "But a massive plan is underway.", translation: "其实，一个巨大的计划正在启动。" },
  { startFrame: 540, endFrame: 720, text: "Worryingly, China knows very little about this.", translation: "令人忧虑的是，中国对此仍然知之甚少。" },
  { startFrame: 720, endFrame: 900, text: "July 1944. While war still raged across Eurasia...", translation: "1944年7月，当整个欧亚大陆还被满天的烽火所笼罩。" },
  { startFrame: 900, endFrame: 1080, text: "Representatives from 44 countries gathered at Bretton Woods, New Hampshire.", translation: "来自世界各地的44个国家的代表来到美国新罕布什尔州的著名度假胜地布雷顿森林。" },
  { startFrame: 1080, endFrame: 1260, text: "They came to design the post-war world economic order.", translation: "商讨战后世界经济新秩序的蓝图。" },
  { startFrame: 1260, endFrame: 1440, text: "International bankers began implementing their long-planned scheme: control the world's money supply!", translation: "国际银行家们开始实施他们策划已久的计划：控制全世界的货币发行！" },
  { startFrame: 1440, endFrame: 1800, text: "This is the New World Order.", translation: "这就是所谓'新世界秩序'！" },
];

// Scene 2: BrettonWoodsScene (60s = 1800帧, 全局偏移 1800)
export const brettonWoodsSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The Bretton Woods system established the dollar as the world's reserve currency.", translation: "布雷顿森林体系确立了美元的世界储备货币地位。" },
  { startFrame: 180, endFrame: 360, text: "The International Monetary Fund and World Bank were created.", translation: "国际货币基金组织和世界银行应运而生。" },
  { startFrame: 360, endFrame: 540, text: "At its core were two key organizations: the British Royal Institute of International Affairs...", translation: "此时的国际银行家们已经建立起一系列核心的组织机构：英国皇家国际事务协会。" },
  { startFrame: 540, endFrame: 720, text: "...and the American Council on Foreign Relations.", translation: "和美国外交协会。" },
  { startFrame: 720, endFrame: 900, text: "From these two core institutions, two new branches emerged.", translation: "后来，由这两个核心机构又衍生出两个新的分支。" },
  { startFrame: 900, endFrame: 1080, text: "In economics: the Bilderberg Group.", translation: "经济领域由彼尔德伯格俱乐部执掌大政方针。" },
  { startFrame: 1080, endFrame: 1260, text: "In politics: the Trilateral Commission.", translation: "负责政治挂帅的是三边委员会。" },
  { startFrame: 1260, endFrame: 1440, text: "Their ultimate goal: a world government governed by a handful of Anglo-American elites.", translation: "这些组织的最终目的，就是建立一个由极少数英美精英分子所统治的世界政府。" },
  { startFrame: 1440, endFrame: 1800, text: "And a unified world currency system. This is the 'New World Order'.", translation: "建立最终统一的世界货币发行体系。这就是所谓'新世界秩序'！" },
];

// Scene 3: HouseColonelScene (60s = 1800帧, 全局偏移 3600)
export const houseColonelSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Colonel Edward House was one of the most important figures in this plan.", translation: "美国外交协会的创始人，第一次世界大战结束后国际联盟的首倡者豪斯上校就是这一计划在美国的一位重要操盘手。" },
  { startFrame: 180, endFrame: 360, text: "He was from a wealthy Texas banking family.", translation: "豪斯上校生在德克萨斯州的一个富裕的银行家的家庭。" },
  { startFrame: 360, endFrame: 540, text: "His father was an agent for the European Rothschild family during the Civil War.", translation: "豪斯的父亲，托马斯在美国内战期间是欧洲罗斯柴尔德家族的代理人。" },
  { startFrame: 540, endFrame: 720, text: "In 1912, House published an anonymous novel: 'Philip Dru: Administrator'.", translation: "1912年，豪斯发表了一本后来引起史学家强烈兴趣的匿名小说《菲利浦·杜：管理者》。" },
  { startFrame: 720, endFrame: 900, text: "In his novel, he imagined a benevolent dictator seizing power in America.", translation: "在小说中，他构思了一个仁慈的独裁者掌握了美国两党的权力。" },
  { startFrame: 900, endFrame: 1080, text: "Establishing a central bank. Implementing income tax. Forming the League of Nations.", translation: "成立了中央银行，实施了联邦累进收入所得税，组成了国际联盟。" },
  { startFrame: 1080, endFrame: 1260, text: "What he 'predicted' in 1912 became reality in America.", translation: "他在书中所'预测'的未来世界与后来美国所发生的一切是如此惊人的相似。" },
  { startFrame: 1260, endFrame: 1440, text: "Woodrow Wilson became president with support from these bankers.", translation: "1912年总统大选民主党候选人威尔逊，在华尔街银行家举行的宴会上。" },
  { startFrame: 1440, endFrame: 1800, text: "House was the bridge between politicians and bankers. He was their 'spiritual godfather'.", translation: "豪斯在政治家和银行家之间起着沟通与协调的作用，威尔逊当选之前，豪斯向金融大佬们保证。豪斯上校很快成为精英圈子中的'精神教父'。" },
];

// Scene 4: CFREliteScene (60s = 1800帧, 全局偏移 5400)
export const cfrEliteSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The Council on Foreign Relations became the 'Central Party School' of American elites.", translation: "外交协会就是美国精英们的'中央党校'。" },
  { startFrame: 180, endFrame: 360, text: "Since World War II, almost all US presidents were members - with only 3 exceptions.", translation: "第二次世界大战以来，除了3人例外，几乎所有总统候选人都是该协会会员。" },
  { startFrame: 360, endFrame: 540, text: "The CFR controls Treasury Secretaries, National Security Advisors...", translation: "从1921年以来，绝大多数的财政部长都由该协会包办，艾森豪威尔以降的国家安全顾问基本就是由该协会内定。" },
  { startFrame: 540, endFrame: 720, text: "14 Secretaries of State, 11 Defense Secretaries, 9 CIA Directors.", translation: "除此之外，外交协会还产生了14个国务卿，11个国防部长，和9个中央情报局局长。" },
  { startFrame: 720, endFrame: 900, text: "Once the CFR core members decide a policy, their research institutions go into full operation.", translation: "'一旦外交协会的核心成员决定美国政府的某项特定政策后，外交协会规模庞大的研究机构就开始全速运转。'" },
  { startFrame: 900, endFrame: 1080, text: "They control major media: CBS, ABC, NBC, PBS, The New York Times, Washington Post...", translation: "外交协会的成员把持了CBS、ABC、NBC、PBS等电视网络，控制了《纽约时报》、《华盛顿邮报》、《华尔街日报》等大报。" },
  { startFrame: 1080, endFrame: 1260, text: "They control magazines: Time, Newsweek, Fortune, Life...", translation: "在杂志领域，外交协会成员控制着：《时代》、《新闻周刊》、《财富》、《生活》等主流杂志。" },
  { startFrame: 1260, endFrame: 1440, text: "They control publishing houses: Macmillan, Random House, HarperCollins...", translation: "在出版领域，外交协会成员控制着迈克米兰、蓝德、西蒙舒斯特、哈波兄弟等最大的出版公司。" },
  { startFrame: 1440, endFrame: 1800, text: "In America, the real power lies not in political parties, but in this elite circle.", translation: "美国的内外事务的决定权已经不在民主与共和两党的手中，而掌握在超级精英俱乐部的小圈子里。" },
];

// Scene 5: BISScene (60s = 1800帧, 全局偏移 7200)
export const bisSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The Bank for International Settlements is the 'bankers' bank'.", translation: "国际清算银行是'中央银行家的银行'。" },
  { startFrame: 180, endFrame: 360, text: "Located in Basel, Switzerland, it meets 10 times a year.", translation: "除了8月和10月，每年有10次来自伦敦、华盛顿和东京的一批衣冠楚楚神秘人士来到瑞士的巴塞尔。" },
  { startFrame: 360, endFrame: 540, text: "Only central bankers who set daily interest rates can join this club.", translation: "只有那些制定各国每日利率、信贷规模、和货币供应的中央银行家才有资格加入。" },
  { startFrame: 540, endFrame: 720, text: "It holds $40 billion in cash and government bonds, plus 10% of world gold reserves.", translation: "这个机构拥有400亿美元的现金，各国政府债券，和相当于世界外汇储备总量10％的黄金。" },
  { startFrame: 720, endFrame: 900, text: "During WWII, American and British bankers used BIS to fund Nazi Germany.", translation: "在第二次世界大战期间，英国和美国的国际银行家正是通过这个平台为纳粹德国提供了大量的资金扶持。" },
  { startFrame: 900, endFrame: 1080, text: "The BIS board included bankers from both warring sides.", translation: "国际清算银行的董事会竟然是由交战双方的银行家所组成。" },
  { startFrame: 1080, endFrame: 1260, text: "Thomas McKittrick from America worked alongside Hermann Shmitz from I.G. Farben.", translation: "美国的托马斯·麦奇立克与纳粹德国工业托拉斯I. G. Farben的首脑人物赫曼·施密茨一起担任董事。" },
  { startFrame: 1260, endFrame: 1440, text: "The BIS never published its accounts to any government for 76 years.", translation: "它的账目从1930年到现在的76年中从未向任何政府公开过。" },
  { startFrame: 1440, endFrame: 1800, text: "This 'Core Club' of 6-7 central bankers keeps governments out of monetary decisions.", translation: "这才是真正的'核心俱乐部'，由六七个中央银行家组成，最重要的理念就是要把各国政府坚决排除在国际货币决策过程之外。" },
];

// Scene 6: BilderbergScene (60s = 1800帧, 全局偏移 9000)
export const bilderbergSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The Bilderberg Group was founded in 1954.", translation: "彼尔德伯格俱乐部成立于1954年。" },
  { startFrame: 180, endFrame: 360, text: "Named after the hotel in the Netherlands where they first met.", translation: "名称来自荷兰的彼尔德伯格酒店。" },
  { startFrame: 360, endFrame: 540, text: "It brings together Europe's and America's most powerful figures.", translation: "它汇集了欧洲和美国最有权势的人物。" },
  { startFrame: 540, endFrame: 720, text: "Heads of state, top bankers, oil tycoons, media moguls...", translation: "国家元首、银行巨头、石油大亨、媒体大亨。" },
  { startFrame: 720, endFrame: 900, text: "They meet annually in secret. No press allowed. No public records.", translation: "他们每年秘密会面一次。没有媒体允许进入。没有公开记录。" },
  { startFrame: 900, endFrame: 1080, text: "The 1975 meeting focused on 'Western Europe' and 'Japan's growing role'.", translation: "1975年的会议主题是'西方欧洲'和'日本日益增长的角色'。" },
  { startFrame: 1080, endFrame: 1260, text: "One year later, Britain elected Margaret Thatcher. Japan signed the Plaza Accord.", translation: "一年后，英国选举了撒切尔夫人。日本签署了广场协议。" },
  { startFrame: 1260, endFrame: 1440, text: "1986 meeting discussed 'US-Soviet relations' and 'global financial system'.", translation: "1986年会议讨论了'美苏关系'和'全球金融体系'。" },
  { startFrame: 1440, endFrame: 1800, text: "The Berlin Wall fell in 1989. The Soviet Union collapsed in 1991.", translation: "1989年柏林墙倒塌。1991年苏联解体。这些绝非巧合！" },
];

// Scene 7: TrilateralScene (60s = 1800帧, 全局偏移 10800)
export const trilateralSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The Trilateral Commission was founded in 1973.", translation: "三边委员会成立于1973年。" },
  { startFrame: 180, endFrame: 360, text: "By banker David Rockefeller and Zbigniew Brzezinski.", translation: "由银行家大卫·洛克菲勒和布热津斯基创立。" },
  { startFrame: 360, endFrame: 540, text: "It brings together elites from North America, Western Europe, and Japan.", translation: "汇集了北美、西欧和日本的精英。" },
  { startFrame: 540, endFrame: 720, text: "Jimmy Carter became president after being vetted by the Trilateral Commission.", translation: "吉米·卡特在经三边委员会审查后成为总统。" },
  { startFrame: 720, endFrame: 900, text: "He appointed 14 Trilateral Commission members to key positions.", translation: "他任命了14名三边委员会成员担任重要职位。" },
  { startFrame: 900, endFrame: 1080, text: "Former World Bank economist Stiglitz exposed their methods.", translation: "前世界银行首席经济学家斯蒂格利茨揭露了他们的方法。" },
  { startFrame: 1080, endFrame: 1260, text: "'IMF decisions are secret and undemocratic. Their policies make problems worse.'", translation: "'IMF的决策是秘密的和不民主的。IMF的经济疗法经常使问题更加恶化。'" },
  { startFrame: 1260, endFrame: 1440, text: "He was fired for speaking the truth.", translation: "他因为说真话而被'强制退休'了。" },
  { startFrame: 1440, endFrame: 1800, text: "Understanding these elite networks is the first step to financial independence.", translation: "理解这些精英网络是走向金融独立的第一步。" },
];

// 合并所有字幕（保持全局帧偏移，用于兼容旧代码）
export const episode07Subtitles = [
  ...openingSubs.map(s => ({ ...s, startFrame: s.startFrame + 0, endFrame: s.endFrame + 0 })),
  ...brettonWoodsSubs.map(s => ({ ...s, startFrame: s.startFrame + 1800, endFrame: s.endFrame + 1800 })),
  ...houseColonelSubs.map(s => ({ ...s, startFrame: s.startFrame + 3600, endFrame: s.endFrame + 3600 })),
  ...cfrEliteSubs.map(s => ({ ...s, startFrame: s.startFrame + 5400, endFrame: s.endFrame + 5400 })),
  ...bisSubs.map(s => ({ ...s, startFrame: s.startFrame + 7200, endFrame: s.endFrame + 7200 })),
  ...bilderbergSubs.map(s => ({ ...s, startFrame: s.startFrame + 9000, endFrame: s.endFrame + 9000 })),
  ...trilateralSubs.map(s => ({ ...s, startFrame: s.startFrame + 10800, endFrame: s.endFrame + 10800 })),
];

export default episode07Subtitles;
