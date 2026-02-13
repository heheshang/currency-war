/**
 * Episode 04: The Federal Reserve - Subtitle System
 *
 * This file contains scene-specific subtitle arrays with relative frame offsets.
 * Each scene's subtitles start from frame 0 relative to that scene.
 *
 * Scene Structure (based on frame offsets):
 * - OpeningScene: 0-900 (30s) - Wilson's Regret
 * - JekyllIslandScene: 900-2700 (60s) - Secret Meeting
 * - WallStreetTycoonsScene: 2700-4500 (60s) - 7 Tycoons
 * - MorganRiseScene: 4500-6300 (60s) - Morgan Family Rise
 * - RockefellerEmpireScene: 6300-8100 (60s) - Rockefeller Empire
 * - Panic1907Scene: 8100-9900 (60s) - 1907 Panic
 * - GoldToFiatScene: 9900-11700 (60s) - Gold Standard to Fiat
 * - Election1912Scene: 11700-13500 (60s) - 1912 Election
 * - PlanBScene: 13500-15300 (60s) - Two Schemes
 * - ActPassesScene: 15300-17100 (60s) - Act Passage
 * - WhoOwnsFedScene: 17100-18900 (60s) - Who Owns The Fed
 * - HiddenControlScene: 18900-20700 (60s) - Hidden Control
 * - WilsonRealizationScene: 20700-22500 (60s) - Wilson's Realization
 * - SummaryScene: 22500-24300 (30s) - Summary
 */

import { SubtitleEntry } from "./index";

// =============================================================================
// Scene 0: OpeningScene - Wilson's Regret (frames 0-900, 30 seconds)
// =============================================================================

export const OpeningSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Episode 4: The Federal Reserve",
    translation: "第四集：美联储",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: '"A great industrial nation is controlled by its system of credit."',
    translation: '"一个伟大的工业国家被信用系统牢牢地控制着。"',
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Our system of credit is concentrated.",
    translation: "这个信用系统高度地集中。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "The growth of the nation, and all our activities, are in the hands of a few men.",
    translation: "国家的发展和我们所有的活动完全掌握在少数人手中。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "— Woodrow Wilson, 28th U.S. President",
    translation: "—— 伍德罗·威尔逊，美国第28任总统",
  },
];

// =============================================================================
// Scene 1: JekyllIslandScene - Secret Meeting on Jekyll Island (frames 900-2700, 60 seconds)
// =============================================================================

export const JekyllIslandSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 150,
    text: "November 22, 1910. A sealed train car leaves New York.",
    translation: "1910年11月22日。一节密封的火车车厢离开纽约。",
  },
  {
    startFrame: 150,
    endFrame: 300,
    text: "Destination: Jekyll Island, Georgia.",
    translation: "目的地：佐治亚州的哲基尔岛。",
  },
  {
    startFrame: 300,
    endFrame: 450,
    text: "Mission: Draft the Federal Reserve Act.",
    translation: "任务：起草《联邦储备法案》。",
  },
  {
    startFrame: 450,
    endFrame: 600,
    text: "Not a single journalist allowed within 50 miles.",
    translation: "50英里范围内不允许任何记者出现。",
  },
  {
    startFrame: 600,
    endFrame: 750,
    text: "The 7 men who met in secret:",
    translation: "秘密会面的7个人：",
  },
  {
    startFrame: 750,
    endFrame: 900,
    text: "Nelson Aldrich - Senator, Rockefeller's grandfather",
    translation: "尼尔森·奥尔德里奇——参议员，洛克菲勒的外祖父",
  },
  {
    startFrame: 900,
    endFrame: 1050,
    text: "Paul Warburg - Fed's chief architect, Rothschild's agent",
    translation: "保罗·沃伯格——美联储总设计师，罗斯柴尔德代理人",
  },
  {
    startFrame: 1050,
    endFrame: 1230,
    text: "Frank Vanderlip, Henry Davison, Charles Norton, Benjamin Strong, Piatt Andrew",
    translation: "弗兰克·范德利普、亨利·戴维森、查尔斯·诺顿、本杰明·斯特朗、派亚特·安德鲁",
  },
  {
    startFrame: 1230,
    endFrame: 1410,
    text: "9 days of secret meetings. The plan that would change America forever.",
    translation: "9天的秘密会议。将永远改变美国的计划。",
  },
  {
    startFrame: 1410,
    endFrame: 1590,
    text: "The name 'Federal Reserve' was chosen to hide the truth.",
    translation: "选择'联邦储备'这个名字是为了掩盖真相。",
  },
  {
    startFrame: 1590,
    endFrame: 1800,
    text: "It was a central bank in everything but name.",
    translation: "除了名称之外，它具备一切中央银行的特征。",
  },
];

// =============================================================================
// Scene 2: WallStreetTycoonsScene - Wall Street's 7 Tycoons (frames 2700-4500, 60 seconds)
// =============================================================================

export const WallStreetTycoonsSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Wall Street's 7 Tycoons controlled America.",
    translation: "华尔街的7巨头控制着美国。",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "J.P. Morgan Group. Standard Oil City Bank Group.",
    translation: "J.P.摩根集团。标准石油城市银行集团。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: '"The seven men control most of America\'s basic industries and resources."',
    translation: '"这7个人控制着美国大部分基础工业和资源。"',
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "— John Moody, Founder of Moody's, 1911",
    translation: "—— 约翰·穆迪，穆迪投资评估体系创始人，1911年",
  },
  {
    startFrame: 720,
    endFrame: 930,
    text: "All connected to the Rothschild family of London.",
    translation: "所有人都与伦敦的罗斯柴尔德家族有联系。",
  },
  {
    startFrame: 930,
    endFrame: 1140,
    text: "The invisible hand behind American finance.",
    translation: "美国金融背后的看不见的手。",
  },
  {
    startFrame: 1140,
    endFrame: 1350,
    text: "What appeared to be competition... was actually cooperation.",
    translation: "表面上的竞争……实际上是合作。",
  },
  {
    startFrame: 1350,
    endFrame: 1560,
    text: "Morgan, Rockefeller, Kuhn Loeb... all worked together.",
    translation: "摩根、洛克菲勒、库恩雷波……都在一起工作。",
  },
  {
    startFrame: 1560,
    endFrame: 1830,
    text: "Their real bosses sat in London and Paris.",
    translation: "他们真正的老板坐在伦敦和巴黎。",
  },
  {
    startFrame: 1830,
    endFrame: 2040,
    text: "The Rothschilds had waited nearly 100 years for this moment.",
    translation: "罗斯柴尔德家族等待这一刻已近100年。",
  },
  {
    startFrame: 2040,
    endFrame: 2250,
    text: "The Bank of England model... finally replicated in America.",
    translation: "英格兰银行模式……终于在美国复制成功。",
  },
];

// =============================================================================
// Scene 3: MorganRiseScene - The Rise of Morgan Family (frames 4500-6300, 60 seconds)
// =============================================================================

export const MorganRiseSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "The Rise of the Morgan Family",
    translation: "摩根家族的兴起",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "George Peabody arrived in London in 1835.",
    translation: "1835年，乔治·皮博迪来到伦敦。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "A dry goods merchant... who became a merchant banker.",
    translation: "一个干货商人……成为了承兑银行家。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Then came an invitation from Nathan Rothschild himself.",
    translation: "然后收到了内森·罗斯柴尔德本人的邀请。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "Peabody became Rothschild's secret PR agent in America.",
    translation: "皮博迪成为罗斯柴尔德在美国的秘密公关代理人。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "1857: The engineered crisis. The Bank of England's 'rescue'.",
    translation: "1857年：人为制造的危机。英格兰银行的'救援'。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "£80,000 'emergency credit'... at the perfect moment.",
    translation: "80万英镑的'紧急信用额度'……在完美的时机。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "Peabody bought distressed American bonds during panic.",
    translation: "皮博迪在恐慌中大量买进被抛售的美国债券。",
  },
  {
    startFrame: 1680,
    endFrame: 1890,
    text: "When economy recovered... he became supremely wealthy.",
    translation: "当经济复苏后……他成为超级富豪。",
  },
  {
    startFrame: 1890,
    endFrame: 2100,
    text: "Junius Morgan inherited it all. J.P. Morgan continued the legacy.",
    translation: "朱尼厄斯·摩根继承了一切。J.P.摩根延续了这一传统。",
  },
];

// =============================================================================
// Scene 4: RockefellerEmpireScene - The Rockefeller Empire (frames 6300-8100, 60 seconds)
// =============================================================================

export const RockefellerEmpireSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "The Rockefeller Empire",
    translation: "洛克菲勒帝国",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "1870: Standard Oil founded.",
    translation: "1870年：标准石油公司成立。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "Then came Jacob Schiff... Rothschild's agent.",
    translation: "然后雅各布·希夫来了……罗斯柴尔德的代理人。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "With Rothschild controlling 95% of American railways...",
    translation: "罗斯柴尔德控制了美国95%的铁路运力……",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "Schiff devised a railroad rebate scheme for Rockefeller.",
    translation: "希夫为洛克菲勒设计了铁路运费折扣计划。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "Competitors couldn't survive the discounted shipping.",
    translation: "竞争对手无法在折扣运输下生存。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Rockefeller's tactics: Cash buyout offers, then price wars.",
    translation: "洛克菲勒的策略：现金收购要约，然后价格战。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "If that failed... violent sabotage. Arson. Assault.",
    translation: "如果还不行……暴力破坏。纵火。袭击。",
  },
  {
    startFrame: 1680,
    endFrame: 1890,
    text: "The Rockefellers were mere front men.",
    translation: "洛克菲勒家族只是前台人物。",
  },
  {
    startFrame: 1890,
    endFrame: 2100,
    text: "The real power behind them: The House of Rothschild.",
    translation: "他们背后的真正力量：罗斯柴尔德家族。",
  },
];

// =============================================================================
// Scene 5: Panic1907Scene - 1907 Panic (frames 8100-9900, 60 seconds)
// =============================================================================

export const Panic1907SceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "1907 Panic - The Precursor",
    translation: "1907年恐慌——前奏",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "A panic scientifically engineered to create demand for central bank.",
    translation: "一场科学设计的恐慌，为中央银行创造需求。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "October 1907: Rumors spread. Knickerbocker Trust failing.",
    translation: "1907年10月：谣言传播。尼克伯克信托公司即将破产。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Bank runs spread across New York. Stock exchange nearly closed.",
    translation: "银行挤兑蔓延纽约。证交所几乎停盘。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "J.P. Morgan 'saves the day' with $25 million.",
    translation: "J.P.摩根用2500万美元'拯救了局面'。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "The real prize: Tennessee Coal and Iron Company.",
    translation: "真正的奖品：田纳西矿业和制铁公司。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Value: $1 billion. Morgan's cost: $45 million.",
    translation: "价值：10亿美元。摩根的成本：4500万美元。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "A 2,000% return on investment.",
    translation: "2000%的投资回报率。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "Create the problem. Offer the solution. Acquire assets.",
    translation: "制造问题。提供解决方案。收购资产。",
  },
];

// =============================================================================
// Scene 6: GoldToFiatScene - From Gold Standard to Fiat Money (frames 9900-11700, 60 seconds)
// =============================================================================

export const GoldToFiatSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "From Gold Standard to Fiat Money",
    translation: "从金本位到法定货币",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "The Great Shift in banker worldview.",
    translation: "银行家世界观的大转变。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "Old System: Money backed by gold. Limited supply.",
    translation: "旧系统：货币由黄金背书。供应有限。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Bankers opposed inflation. It hurt their interest income.",
    translation: "银行家反对通货膨胀。它损害了他们的利息收入。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "New System: Money backed by nothing. Unlimited supply.",
    translation: "新系统：货币没有任何背书。无限供应。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "Bankers CREATE inflation to steal wealth.",
    translation: "银行家制造通货膨胀来窃取财富。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Inflation is MORE profitable than interest!",
    translation: "通货膨胀比利息更有利可图！",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: '"By this method, the government can secretly confiscate wealth."',
    translation: '"用这个办法，政府可以秘密地没收人民的财富。"',
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "— John Maynard Keynes",
    translation: "—— 约翰·梅纳德·凯恩斯",
  },
];

// =============================================================================
// Scene 7: Election1912Scene - The 1912 Election (frames 11700-13500, 60 seconds)
// =============================================================================

export const Election1912SceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "The 1912 Election",
    translation: "1912年大选",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "Before election: Wilson fiercely opposed banking monopoly.",
    translation: "大选前：威尔逊强烈反对银行垄断。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "Refused to share stage with Senator Aldrich.",
    translation: "拒绝与奥尔德里奇参议员同台。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Bankers' strategy: Fund Wilson through Cleveland Dodge.",
    translation: "银行家的策略：通过克里夫兰·道奇资助威尔逊。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "Run Roosevelt to split Republican vote.",
    translation: "让老罗斯福参选来分散共和党选票。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "Wilson wins with only 41.8% of popular vote.",
    translation: "威尔逊仅以41.8%的普选票获胜。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: '"The governor of Princeton will become Governor of New Jersey."',
    translation: '"普林斯顿的校长将会成为新泽西州的州长。"',
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: '"He will not complete his term."',
    translation: '"他不会完成他的任期。"',
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "— Rabbi Wise, 1910",
    translation: "—— 拉比·怀斯，1910年",
  },
];

// =============================================================================
// Scene 8: PlanBScene - Plan B: Two Schemes (frames 13500-15300, 60 seconds)
// =============================================================================

export const PlanBSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "Plan B - The Two Schemes",
    translation: "B计划——两套方案",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "Plan A: Aldrich Plan. Openly Republican.",
    translation: "A计划：奥尔德里奇计划。公开支持共和党。",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "Deliberately unpopular to draw opposition fire.",
    translation: "故意不受欢迎，以吸引反对派的火力。",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Plan B: Glass-Owen Act. 'Democratic opposition'.",
    translation: "B计划：格拉斯-欧文法案。'民主党的反对'。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "Promised to break banking monopoly.",
    translation: "承诺打破银行垄断。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "Both plans created by the same bankers!",
    translation: "两份计划都由同一批银行家创造！",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Republicans oppose 'Democratic' bill.",
    translation: "共和党人反对'民主党的'法案。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "Democrats oppose 'Republican' bill.",
    translation: "民主党人反对'共和党的'法案。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "Bankers secretly support BOTH.",
    translation: "银行家秘密支持双方。",
  },
];

// =============================================================================
// Scene 9: ActPassesScene - December 1913: The Act Passes (frames 15300-17100, 60 seconds)
// =============================================================================

export const ActPassesSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "December 1913. The Act Passes.",
    translation: "1913年12月。法案通过。",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "December 20, Saturday: Conference meets all day",
    translation: "12月20日，星期六：会议全天进行",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "December 21, Sunday: Continues meeting (unprecedented)",
    translation: "12月21日，星期日：继续会议（史无前例）",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "December 22, Monday: 1:30 AM - Differences resolved",
    translation: "12月22日，星期一：凌晨1点30分——分歧解决",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "4:30 AM - Final document sent to print",
    translation: "凌晨4点30分——最终文件送交打印",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "7:00 AM - Final proofread. 2:00 PM - On desks",
    translation: "早上7点——最终校稿。下午2点——放在桌上",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "4:00 PM - Session begins. 6:00 PM - Most at dinner",
    translation: "下午4点——会议开始。下午6点——大多数人去吃晚饭",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "7:30 PM - 20-minute speech, then debate",
    translation: "晚上7点30分——20分钟演讲，然后辩论",
  },
  {
    startFrame: 1680,
    endFrame: 1890,
    text: "11:00 PM - House passes: 298 to 60",
    translation: "晚上11点——众议院通过：298对60票",
  },
  {
    startFrame: 1890,
    endFrame: 2100,
    text: "December 23: Senate passes: 43 to 25 (27 absent!)",
    translation: "12月23日：参议院通过：43对25票（27人缺席！）",
  },
  {
    startFrame: 2100,
    endFrame: 2310,
    text: "Wilson signs within ONE HOUR",
    translation: "威尔逊在一小时内签署",
  },
  {
    startFrame: 2310,
    endFrame: 2400,
    text: "The Crime: Passed when opponents away for Christmas",
    translation: "罪行：当反对者去过圣诞节不在时通过",
  },
];

// =============================================================================
// Scene 10: WhoOwnsFedScene - Who Owns The Fed (frames 17100-18900, 60 seconds)
// =============================================================================

export const WhoOwnsFedSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "Who Owns The Fed?",
    translation: "谁拥有美联储？",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "Federal Reserve Bank of New York: 203,053 shares total",
    translation: "美联储纽约银行：总共203,053股",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "Major shareholders in 1914:",
    translation: "1914年主要股东：",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "National City Bank (Rockefeller/Kuhn Loeb) - 30,000 shares",
    translation: "纽约国家城市银行（洛克菲勒/库恩雷波）——30,000股",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "First National Bank (J.P. Morgan) - 15,000 shares",
    translation: "纽约第一国家银行（J.P.摩根）——15,000股",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "National Bank of Commerce (Warburg) - 21,000 shares",
    translation: "纽约国家商业银行（沃伯格）——21,000股",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "These 6 banks: 40% ownership (53% by 1983)",
    translation: "这6家银行：40%所有权（到1983年为53%）",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "The Fed is: NOT federal. NO reserves. NOT a bank.",
    translation: "美联储是：不是联邦的。没有储备。不是银行。",
  },
  {
    startFrame: 1680,
    endFrame: 1890,
    text: "Every Federal Reserve Note = Debt owed to the Fed",
    translation: "每一张美联储券 = 欠美联储的债务",
  },
  {
    startFrame: 1890,
    endFrame: 2100,
    text: "Private credit monopoly that issues America's money.",
    translation: "发行美国货币的私人信用垄断组织。",
  },
];

// =============================================================================
// Scene 11: HiddenControlScene - The Hidden Control (frames 18900-20700, 60 seconds)
// =============================================================================

export const HiddenControlSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "The Hidden Control",
    translation: "隐藏的控制",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "PUBLIC VIEW: President appoints → Senate confirms → Board",
    translation: "公众认为：总统任命 → 参议院确认 → 董事会",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "REALITY: 12 Regional Bank Directors → Federal Advisory Council",
    translation: "现实：12家地区银行董事 → 联邦咨询委员会",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "Council 'advises' → Board. Board always obeys.",
    translation: "委员会'建议' → 董事会。董事会总是服从。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "5 Wall Street giants dominate the Council.",
    translation: "华尔街5巨头主导咨询委员会。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "Who can say 'no' to men who control your bank's survival?",
    translation: "谁能对控制你银行生存的人说'不'？",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Paul Warburg's masterpiece: A hidden remote control device.",
    translation: "保罗·沃伯格的杰作：一个隐藏的遥控装置。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "Perfect illusion of democracy. Complete control.",
    translation: "完美的民主幻觉。完全的控制。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "The Federal Advisory Council: Unknown to most Americans.",
    translation: "联邦咨询委员会：大多数美国人不知道。",
  },
];

// =============================================================================
// Scene 12: WilsonRealizationScene - Wilson's Realization (frames 20700-22500, 60 seconds)
// =============================================================================

export const WilsonRealizationSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "Wilson's Realization",
    translation: "威尔逊的醒悟",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "Before he died, Woodrow Wilson admitted:",
    translation: "威尔逊总统去世前承认：",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: '"I have unwittingly ruined my country."',
    translation: '"我在无意之中摧毁了我的国家。"',
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "He realized he had been deceived.",
    translation: "他意识到自己被欺骗了。",
  },
  {
    startFrame: 840,
    endFrame: 1050,
    text: "The Federal Reserve was NOT what he believed.",
    translation: "美联储不是他所相信的那样。",
  },
  {
    startFrame: 1050,
    endFrame: 1260,
    text: "The 'people's bank' was a private monopoly.",
    translation: "'人民的银行'是一个私人垄断组织。",
  },
  {
    startFrame: 1260,
    endFrame: 1470,
    text: "Government does NOT issue dollars.",
    translation: "政府不发行美元。",
  },
  {
    startFrame: 1470,
    endFrame: 1680,
    text: "Every dollar in your pocket = debt + interest owed to bankers.",
    translation: "你口袋里的每一美元 = 欠银行家的债务 + 利息。",
  },
];

// =============================================================================
// Scene 13: SummaryScene - Episode Summary (frames 22500-24300, 30 seconds)
// =============================================================================

export const SummarySceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 210,
    text: "Episode 04: Key Takeaways",
    translation: "第4集：关键要点",
  },
  {
    startFrame: 210,
    endFrame: 420,
    text: "1. The Federal Reserve Act was drafted in secret on Jekyll Island",
    translation: "1. 《美联储法案》在哲基尔岛秘密起草",
  },
  {
    startFrame: 420,
    endFrame: 630,
    text: "2. 7 Wall Street tycoons conspired with European bankers",
    translation: "2. 7位华尔街巨头与欧洲银行家密谋",
  },
  {
    startFrame: 630,
    endFrame: 840,
    text: "3. The 1907 panic was engineered to create demand",
    translation: "3. 1907年恐慌是人为制造的",
  },
  {
    startFrame: 840,
    endFrame: 900,
    text: "The Fed is privately owned, NOT federal.",
    translation: "美联储是私有的，不是联邦的。",
  },
];

// =============================================================================
// Scene 14: WilsonQuoteScene - Additional Wilson Quote (frames 24300-25200, 30 seconds)
// =============================================================================

export const WilsonQuoteSceneSubtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 150,
    text: '"I have unwittingly ruined my country."',
    translation: '"我在无意之中摧毁了我的国家。"',
  },
];

// =============================================================================
// Combined Episode 04 Subtitles (Backward Compatibility)
// =============================================================================

/**
 * Combined episode subtitles with absolute frame offsets.
 * This array maintains backward compatibility with the old format.
 */
export const episode04Subtitles: SubtitleEntry[] = [
  // Scene 0: OpeningScene (frames 0-900)
  ...OpeningSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 0,
    endFrame: sub.endFrame + 0,
  })),
  {
    startFrame: 900,
    endFrame: 1050,
    text: '"I have unwittingly ruined my country."',
    translation: '"我在无意之中摧毁了我的国家。"',
  },

  // Scene 1: JekyllIslandScene (frames 1050-2850)
  ...JekyllIslandSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 1050,
    endFrame: sub.endFrame + 1050,
  })),

  // Scene 2: WallStreetTycoonsScene (frames 2850-5100)
  ...WallStreetTycoonsSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 2850,
    endFrame: sub.endFrame + 2850,
  })),

  // Scene 3: MorganRiseScene (frames 5100-7200)
  ...MorganRiseSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 5100,
    endFrame: sub.endFrame + 5100,
  })),

  // Scene 4: RockefellerEmpireScene (frames 7200-9300)
  ...RockefellerEmpireSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 7200,
    endFrame: sub.endFrame + 7200,
  })),

  // Scene 5: Panic1907Scene (frames 9300-11100)
  ...Panic1907SceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 9300,
    endFrame: sub.endFrame + 9300,
  })),

  // Scene 6: GoldToFiatScene (frames 11100-12900)
  ...GoldToFiatSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 11100,
    endFrame: sub.endFrame + 11100,
  })),

  // Scene 7: Election1912Scene (frames 12900-14700)
  ...Election1912SceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 12900,
    endFrame: sub.endFrame + 12900,
  })),

  // Scene 8: PlanBScene (frames 14700-16500)
  ...PlanBSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 14700,
    endFrame: sub.endFrame + 14700,
  })),

  // Scene 9: ActPassesScene (frames 16500-18900)
  ...ActPassesSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 16500,
    endFrame: sub.endFrame + 16500,
  })),

  // Scene 10: WhoOwnsFedScene (frames 18900-21000)
  ...WhoOwnsFedSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 18900,
    endFrame: sub.endFrame + 18900,
  })),

  // Scene 11: HiddenControlScene (frames 21000-22800)
  ...HiddenControlSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 21000,
    endFrame: sub.endFrame + 21000,
  })),

  // Scene 12: WilsonRealizationScene (frames 22800-24300)
  ...WilsonRealizationSceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 22800,
    endFrame: sub.endFrame + 22800,
  })),

  // Scene 13: SummaryScene (frames 24300-25200)
  ...SummarySceneSubtitles.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + 24300,
    endFrame: sub.endFrame + 24300,
  })),
];

// =============================================================================
// Scene Duration Constants (for reference)
// =============================================================================

/**
 * Scene durations in frames (30 fps)
 * Each scene is approximately 60 seconds (1800 frames) except:
 * - OpeningScene: 30 seconds (900 frames)
 * - SummaryScene: 30 seconds (900 frames)
 */
export const EPISODE_04_SCENE_DURATIONS = {
  OpeningScene: 900,           // 30s
  JekyllIslandScene: 1800,      // 60s
  WallStreetTycoonsScene: 1800, // 60s
  MorganRiseScene: 1800,        // 60s
  RockefellerEmpireScene: 1800, // 60s
  Panic1907Scene: 1800,        // 60s
  GoldToFiatScene: 1800,       // 60s
  Election1912Scene: 1800,     // 60s
  PlanBScene: 1800,            // 60s
  ActPassesScene: 2400,        // 80s
  WhoOwnsFedScene: 2100,       // 70s
  HiddenControlScene: 1800,     // 60s
  WilsonRealizationScene: 1680, // 56s
  SummaryScene: 900,            // 30s
} as const;

// =============================================================================
// Export All Scene Subtitles
// =============================================================================

/**
 * All scene subtitle arrays for direct import
 */
export const episode04SceneSubtitles = {
  OpeningScene: OpeningSceneSubtitles,
  JekyllIslandScene: JekyllIslandSceneSubtitles,
  WallStreetTycoonsScene: WallStreetTycoonsSceneSubtitles,
  MorganRiseScene: MorganRiseSceneSubtitles,
  RockefellerEmpireScene: RockefellerEmpireSceneSubtitles,
  Panic1907Scene: Panic1907SceneSubtitles,
  GoldToFiatScene: GoldToFiatSceneSubtitles,
  Election1912Scene: Election1912SceneSubtitles,
  PlanBScene: PlanBSceneSubtitles,
  ActPassesScene: ActPassesSceneSubtitles,
  WhoOwnsFedScene: WhoOwnsFedSceneSubtitles,
  HiddenControlScene: HiddenControlSceneSubtitles,
  WilsonRealizationScene: WilsonRealizationSceneSubtitles,
  SummaryScene: SummarySceneSubtitles,
  WilsonQuoteScene: WilsonQuoteSceneSubtitles,
} as const;
