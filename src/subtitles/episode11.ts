/**
 * episode11 字幕 - 基于实际配音时长
 * 
 * 生成日期：2026-03-05
 * 总时长：593.6秒 = 17812帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 48.4秒 = 1451帧 - Opening
 * - Scene 1: 70.8秒 = 2126帧 - Monetary Standard
 * - Scene 2: 69.5秒 = 2085帧 - Gold Silver
 * - Scene 3: 49.6秒 = 1490帧 - Debt Obesity
 * - Scene 4: 35.5秒 = 1066帧 - Financial Air Force
 * - Scene 5: 145.4秒 = 4364帧 - Strategy
 * - Scene 6: 60.4秒 = 1812帧 - World Reserve
 * - Scene 7: 79.2秒 = 2376帧 - Financial Risk
 * - Scene 8: 34.7秒 = 1042帧 - Ending
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  1451, // Scene 0: 48.4s - Opening
  2126, // Scene 1: 70.8s - Monetary Standard
  2085, // Scene 2: 69.5s - Gold Silver
  1490, // Scene 3: 49.6s - Debt Obesity
  1066, // Scene 4: 35.5s - Financial Air Force
  4364, // Scene 5: 145.4s - Strategy
  1812, // Scene 6: 60.4s - World Reserve
  2376, // Scene 7: 79.2s - Financial Risk
  1042, // Scene 8: 34.7s - Ending
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0: Opening (48.4s = 1451帧)
export const OpeningSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 72, text: "第十一集：谋万世者" },
  { startFrame: 72, endFrame: 220, text: "1850年，伦敦毫无疑问的是世界金融体系的太阳，" },
  { startFrame: 220, endFrame: 339, text: "1950年，纽约成为了全球财富的中心，" },
  { startFrame: 339, endFrame: 466, text: "2050年，谁将问鼎国际金融霸主的宝座呢？" },
  { startFrame: 466, endFrame: 709, text: "人类有史以来的经验表明，崛起中的国家或地区总是以更加旺盛的生产力创造出巨大的财富，" },
  { startFrame: 709, endFrame: 977, text: "为了保护自己的财富在贸易中不被别人稀释的货币所窃取，这些地区有着保持高纯度货币的内在动力。" },
  { startFrame: 977, endFrame: 1127, text: "世界的财富从来就是自动流向能够保护其价值的地方。" },
  { startFrame: 1127, endFrame: 1451, text: "坚挺稳定的货币反过来又极大地促进了社会分工和市场资源的合理分布，从而形成更加有效率的经济结构，创造出更多的财富。" },
];

// Scene 1: Monetary Standard (70.8s = 2126帧)
export const MonetaryStandardSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 132, text: "货币是整个经济领域最基本最核心的度量衡，" },
  { startFrame: 132, endFrame: 307, text: "货币的作用类似于物理世界中的千克、米、秒等最重要的尺度，" },
  { startFrame: 307, endFrame: 589, text: "一个每天都在剧烈动荡的货币体系，就如同千克、米、秒的定义时时刻刻都不停地变化一样荒谬而危险。" },
  { startFrame: 589, endFrame: 782, text: "一个工程师手中的尺子每天长短都不一样，他该怎么修建几十层的高楼呢？" },
  { startFrame: 782, endFrame: 984, text: "当今世界经济的根本问题之一就是在于没有一个稳定而合理的货币度量衡标准，" },
  { startFrame: 984, endFrame: 1208, text: "从而导致政府无法准确测算经济活动的规模，公司难以正确地判断长期投资的合理性，" },
  { startFrame: 1208, endFrame: 1482, text: "人民对财富的任何长远规划丧失了安全的参照系。货币对经济的作用在银行家任意和武断的操控下，" },
  { startFrame: 1482, endFrame: 1715, text: "已经严重扭曲了市场资源的合理分配。美国的美元从1971年完全脱离黄金之后，" },
  { startFrame: 1715, endFrame: 1934, text: "其购买力已经下降了94.4％，今天的一美元只值70年代初的5.6美分。" },
  { startFrame: 1934, endFrame: 2126, text: "这是一种隐蔽的盗窃，它通过使货币购买力贬值来实现社会财富的转移。" },
];

// Scene 2: Gold Silver (69.5s = 2085帧)
export const GoldSilverSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 195, text: "黄金与白银在市场的自然进化过程中所形成的高度稳定的价格体系，" },
  { startFrame: 195, endFrame: 340, text: "可以让所有20世纪以来的天才经济规划者们汗颜。" },
  { startFrame: 340, endFrame: 458, text: "黄金和白银作为货币是自然进化的产物，" },
  { startFrame: 458, endFrame: 593, text: "是真正市场经济的产物，是人类信赖的诚实的货币。" },
  { startFrame: 593, endFrame: 855, text: "1974年7月13日，《经济学家》杂志发表了一份令人震惊的英国整个工业革命时代的物价统计报告。" },
  { startFrame: 855, endFrame: 1209, text: "从1664年到1914年的250年间，在金本位的运作下，英国的物价在长达250年的漫长岁月中保持着平稳而略微下降的趋势。" },
  { startFrame: 1209, endFrame: 1503, text: "在金银本位之下的美国，情况也非常类似。1787年，美国宪法第一章第八节授权国会发行和定义货币。" },
  { startFrame: 1503, endFrame: 2085, text: "1800年，美国的物价指数约为102.2，到1913年时，物价下降到80.7。在整个美国工业化的巨变时代，物价波动幅度不超过26％，在1879年到1913年的金本位时代，物价波动幅度小于17％。" },
];

// Scene 3: Debt Obesity (49.6s = 1490帧)
export const DebtObesitySceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 104, text: "以GDP增加为导向的经济发展模式，" },
  { startFrame: 104, endFrame: 230, text: "恰如以体重增加为健康核心任务的生活方式。" },
  { startFrame: 230, endFrame: 463, text: "政府以财政赤字拉动经济增长的政策，就好比是靠注射激素来刺激体重增加。" },
  { startFrame: 463, endFrame: 691, text: "而债务货币呢，就是增生出来的脂肪。一个看起来越来越越臃肿的人，真的非常健康？" },
  { startFrame: 691, endFrame: 881, text: "一种模式就是债务拉动型经济增长，国家、企业和个人大量负债，" },
  { startFrame: 881, endFrame: 1131, text: "这些债务经过银行系统的货币化之后，巨额债务货币增发产生了泡沫财富感，货币贬值无可避免，" },
  { startFrame: 1131, endFrame: 1490, text: "市场资源配置被人为扭曲，贫富分化日趋严重，其后果是经济脂肪大量增生。债务驱动型经济犹如依靠注射激素迅速增肥。" },
];

// Scene 4: Financial Air Force (35.5s = 1066帧)
export const FinancialAirForceSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 156, text: "世界储备货币地位是所有主权国家发行货币的最高境界，" },
  { startFrame: 156, endFrame: 291, text: "它代表着无与伦比的权威，它拥有普天之下的信赖。" },
  { startFrame: 291, endFrame: 441, text: "对储备货币国的经济而言，它的泽被将无远弗界。" },
  { startFrame: 441, endFrame: 593, text: "金融行业就像一个国家的战略空军，没有空中打击的支援，" },
  { startFrame: 593, endFrame: 785, text: "地面的各行各业势必陷入与其他国家惨烈的肉搏战，甚至自相残杀。" },
  { startFrame: 785, endFrame: 917, text: "拼价格低廉、拼资源消耗，拼工作环境恶劣。" },
  { startFrame: 917, endFrame: 1066, text: "这就是为什么中国的货币必须成为世界储备货币的原因。" },
];

// Scene 5: Strategy (145.4s = 4364帧)
export const StrategySceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 186, text: "高筑墙：要建立对内金融防火墙和对外金融防洪墙两条防御体系。" },
  { startFrame: 186, endFrame: 351, text: "国际银行家即将大举深入中国金融腹地，中国已无险可守。" },
  { startFrame: 351, endFrame: 582, text: "外资银行通过部分准备金制度，将大举推进中国国家、企业和个人的债务的货币化进程，" },
  { startFrame: 582, endFrame: 824, text: "这些外资银行增发的信贷人民币将通过银行支票、银行票据、信用卡、房地产按揭贷款、" },
  { startFrame: 824, endFrame: 1007, text: "企业流动资金贷款、金融衍生产品等多种方式进入中国的经济体内。" },
  { startFrame: 1007, endFrame: 1245, text: "中国对内的金融防火墙，旨在防范外资银行恶意制造通货膨胀推高中国资产泡沫化，" },
  { startFrame: 1245, endFrame: 1437, text: "广积粮就是官民并举，大幅度提高中国官方和民间的黄金白银储备。" },
  { startFrame: 1437, endFrame: 1713, text: "中国境内的所有金矿和银矿资源，必须作为最重要的战略资产加以严密保护，并逐步实行全面国有化。" },
  { startFrame: 1713, endFrame: 1852, text: "在国际上，应该大力收购黄金和白银的生产公司，" },
  { startFrame: 1852, endFrame: 2194, text: "作为中国未来黄金白银资源的补充。中国货币的改革的最终方向就是建立一套符合中国国情的黄金、白银支撑下的双轨制货币体系，" },
  { startFrame: 2194, endFrame: 2369, text: "实现稳定的货币度量衡，完成作为世界主要储备货币的战略准备。" },
  { startFrame: 2369, endFrame: 2627, text: "如果中国政府与人民每年以2000亿美元的规模吃进黄金的话，如果以650美元一盎司的价格计算，" },
  { startFrame: 2627, endFrame: 3010, text: "中国将可购买9500吨黄金，相当于一年买光美国所有的黄金储备。战役的开始阶段，国际银行家势必通过金融衍生工具拼命压制黄金价格。" },
  { startFrame: 3010, endFrame: 3162, text: "缓称王就是必须充分考虑到中国自身的困难和局限。" },
  { startFrame: 3162, endFrame: 3310, text: "世界强国崛起无不是以无与伦比的创新能力独步世界，" },
  { startFrame: 3310, endFrame: 3502, text: "所谓强国就是能够大量生产出别国无法替代的全新产品和全新服务，" },
  { startFrame: 3502, endFrame: 3737, text: "大量孕育出世界领先的技术与科学创新，大量产生引领世界文明方向的伟大思想和理念。" },
  { startFrame: 3737, endFrame: 3904, text: "中国目前还仅仅是在大规模模仿西方生产技术方面很有进展，" },
  { startFrame: 3904, endFrame: 4171, text: "在思想理念与科学技术创新方面还差之甚远。尤其是在思想文化领域，严重缺乏文明自信心。" },
  { startFrame: 4171, endFrame: 4364, text: "这一切，不是一朝一夕就能解决的问题。所以中国只能徐图缓进。" },
];

// Scene 6: World Reserve (60.4s = 1812帧)
export const WorldReserveSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 194, text: "一个崛起的世界强国，其坚实的基石不会只有领先的科技与强大的军事。" },
  { startFrame: 194, endFrame: 352, text: "只有当她建立起具备普世公信力的货币体系和金融系统时，" },
  { startFrame: 352, endFrame: 460, text: "才能在世界民族之林中立于不败之地。" },
  { startFrame: 460, endFrame: 730, text: "货币无可置疑是人类社会经济机体的血液。能够执掌和人供应血源者，自然占据了先机动性强势。" },
  { startFrame: 730, endFrame: 1123, text: "这套完备而坚实的体系应该是以多元化背景为支撑的，而当前仅靠强劲出口大量换汇，紧盯美元超量购买美国国债的单一战术越来越显露出致使伤。" },
  { startFrame: 1123, endFrame: 1438, text: "一国多元化良性循环的货币金融体系的具体解构，我们在本书中，只是集中思索一种设想——在多元化背景中注入金银元素。" },
  { startFrame: 1438, endFrame: 1812, text: "盖因金银历经千年历史淘沙，已具备天然的公信度和无可匹敌的受接性质，以金银背书的货币体制，不可不谓一条通向世界储备货币地位的捷径。" },
];

// Scene 7: Financial Risk (79.2s = 2376帧)
export const FinancialRiskSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 134, text: "早在2006年底，中国将全面开放金融领域，" },
  { startFrame: 134, endFrame: 333, text: "国际银行家们早已磨刀霍霍，一场不见硝烟的货币战争已经迫在眉睫了。" },
  { startFrame: 333, endFrame: 473, text: "这一次，人们看不见洋枪洋炮，也听不到战场撕杀，" },
  { startFrame: 473, endFrame: 609, text: "但这场战争的最后结局将注定中国未来的命运。" },
  { startFrame: 609, endFrame: 739, text: "国际银行家大举进入中国的根本战略目的有两个，" },
  { startFrame: 739, endFrame: 906, text: "控制中国的货币发行权，和制造中国经济的有控制的解体，" },
  { startFrame: 906, endFrame: 1137, text: "最终为建立一个由伦敦－华儿街轴心主导下的世界政府和世界货币扫平最后一个障碍。" },
  { startFrame: 1137, endFrame: 1239, text: "在探讨中国金融开放的风险问题时，" },
  { startFrame: 1239, endFrame: 1379, text: "大多数学者和决策者关注的是战术层面上的风险，" },
  { startFrame: 1379, endFrame: 1503, text: "其实，金融开放的最大风险源自战略层面，" },
  { startFrame: 1503, endFrame: 1745, text: "即金融开放的本质实际上是一场货币战争，缺乏战争的意识和准备是中国当前最大的风险！" },
  { startFrame: 1745, endFrame: 1899, text: "外资银行们会引进大量令人眼花缭乱的创新金融产品，" },
  { startFrame: 1899, endFrame: 2091, text: "以各种方式创造债务工具并使之货币化，这就是货币的类似物流动性。" },
  { startFrame: 2091, endFrame: 2376, text: "这些金融货币完全具备实体经济领域货币的购买力，从这个意义上说，外资银行将参与中国人民币的货币发行。" },
];

// Scene 8: Ending (34.7s = 1042帧)
export const EndingSceneSubtitles: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 200, text: "★当今世界经济的根本问题之一，就在于没有一个稳定而合理的货币度量衡标准。" },
  { startFrame: 200, endFrame: 424, text: "货币对经济的作用在银行家任意和武断的操控下，已经严重扭曲了市场资源的合理分配。" },
  { startFrame: 424, endFrame: 542, text: "★黄金和白银作为货币是自然进化的产物，" },
  { startFrame: 542, endFrame: 1042, text: "是真正市场经济的产物，是人类依赖的诚实的货币。★中国应建立对内金融防火墙和对外金融防洪墙两条防御体系，同时官民并举，大幅度提高中国官方和民间的黄金白银储备，徐图缓进。" },
];

// 别名导出（兼容旧代码）
export const openingSubs = OpeningSceneSubtitles;
export const monetaryStandardSubs = MonetaryStandardSceneSubtitles;
export const goldSilverSubs = GoldSilverSceneSubtitles;
export const debtObesitySubs = DebtObesitySceneSubtitles;
export const financialAirForceSubs = FinancialAirForceSceneSubtitles;
export const strategySubs = StrategySceneSubtitles;
export const worldReserveSubs = WorldReserveSceneSubtitles;
export const financialRiskSubs = FinancialRiskSceneSubtitles;
export const endingSubs = EndingSceneSubtitles;

// 合并所有字幕（使用 SCENE_OFFSETS 计算全局帧）
export const episode11Subtitles: SubtitleEntry[] = [
  ...OpeningSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[0], endFrame: s.endFrame + SCENE_OFFSETS[0] })),
  ...MonetaryStandardSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[1], endFrame: s.endFrame + SCENE_OFFSETS[1] })),
  ...GoldSilverSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[2], endFrame: s.endFrame + SCENE_OFFSETS[2] })),
  ...DebtObesitySceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[3], endFrame: s.endFrame + SCENE_OFFSETS[3] })),
  ...FinancialAirForceSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[4], endFrame: s.endFrame + SCENE_OFFSETS[4] })),
  ...StrategySceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[5], endFrame: s.endFrame + SCENE_OFFSETS[5] })),
  ...WorldReserveSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[6], endFrame: s.endFrame + SCENE_OFFSETS[6] })),
  ...FinancialRiskSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[7], endFrame: s.endFrame + SCENE_OFFSETS[7] })),
  ...EndingSceneSubtitles.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[8], endFrame: s.endFrame + SCENE_OFFSETS[8] })),
];

export default episode11Subtitles;
