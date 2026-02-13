/**
 * Episode01 字幕 - 按Scene分离（保留完整字幕内容）
 *
 * 总时长：8分钟（480秒 = 14400帧 @30fps）
 *
 * 说明：每个Scene的字幕从第0帧开始，相对应的全局帧偏移如下：
 * - Scene 1 (AncientMarket): 全局帧 0-900 → 相对帧 0-900
 * - Scene 2 (ChinaRise): 全局帧 900-2700 → 相对帧 0-1800
 * - Scene 3 (InvisibleBattlefield): 全局帧 2700-4500 → 相对帧 0-1800
 * - Scene 4 (HistoricalLessons): 全局帧 4500-6300 → 相对帧 0-1800
 * - Scene 5 (MoneyEvolution): 全局帧 6300-8100 → 相对帧 0-1800
 * - Scene 6 (HistoricalTimeline): 全局帧 8100-9900 → 相对帧 0-1800
 * - Scene 7 (DebtSpiral): 全局帧 9900-11700 → 相对帧 0-1800
 * - Scene 8 (Inflation): 全局帧 11700-13500 → 相对帧 0-1800
 * - Scene 9 (Ending): 全局帧 13500-14400 → 相对帧 0-900
 */
import { SubtitleEntry } from "./index";

// Scene 1: AncientMarketScene (30s = 900帧, 全局偏移 0)
export const ancientMarketSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 120, text: "In the beginning, there was gold.", translation: "最初，只有黄金。" },
  { startFrame: 120, endFrame: 300, text: "Real money that cannot be printed at will.", translation: "真正的货币，无法随意印制。" },
  { startFrame: 300, endFrame: 480, text: "For thousands of years, gold and silver served as honest money.", translation: "数千年来，金银作为诚实的货币。" },
  { startFrame: 480, endFrame: 660, text: "Until... something changed.", translation: "直到……事情发生了变化。" },
  { startFrame: 660, endFrame: 900, text: "The birth of paper receipts.", translation: "纸币收据的诞生。" },
];

// Scene 2: ChinaRiseScene (60s = 1800帧, 全局偏移 900)
export const chinaRiseSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "2006. A prophecy written at China's rise.", translation: "2006年。一篇预言写在中国崛起之时。" },
  { startFrame: 180, endFrame: 360, text: "China's economic aircraft carrier has set sail.", translation: "中国的经济航母已经起航。" },
  { startFrame: 360, endFrame: 540, text: "Amazing speed. Unprecedented growth.", translation: "惊人的速度。前所未有的增长。" },
  { startFrame: 540, endFrame: 720, text: "The world watches in awe.", translation: "世界瞩目。" },
  { startFrame: 720, endFrame: 900, text: "But will the journey be smooth?", translation: "但航程会一帆风顺吗？" },
  { startFrame: 900, endFrame: 1080, text: "What unseen dangers lie beneath the surface?", translation: "水面之下潜伏着什么看不见的危险？" },
  { startFrame: 1080, endFrame: 1260, text: "The greatest threat may not come from military confrontation.", translation: "最大的威胁可能并非来自军事对抗。" },
  { startFrame: 1260, endFrame: 1440, text: "But from an invisible battlefield.", translation: "而是来自一个看不见的战场。" },
  { startFrame: 1440, endFrame: 1800, text: "Where money becomes a weapon of mass destruction.", translation: "在那里，金钱成为大规模杀伤性武器。" },
];

// Scene 3: InvisibleBattlefieldScene (60s = 1800帧, 全局偏移 2700)
export const invisibleBattlefieldSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "The author warned us in 2006...", translation: "作者在2006年就警告我们……" },
  { startFrame: 180, endFrame: 360, text: "China has joined the WTO.", translation: "中国加入了世界贸易组织。" },
  { startFrame: 360, endFrame: 540, text: "Financial markets are opening to foreign capital.", translation: "金融市场正对外资全面开放。" },
  { startFrame: 540, endFrame: 720, text: "But are we ready for what comes next?", translation: "但我们为接下来的一切做好准备了吗？" },
  { startFrame: 720, endFrame: 900, text: "Financial derivatives. Hedge funds. Hot money flows.", translation: "金融衍生工具。对冲基金。热钱流动。" },
  { startFrame: 900, endFrame: 1080, text: "Invisible weapons. No smoke. No fire.", translation: "看不见的武器。没有硝烟。没有战火。" },
  { startFrame: 1080, endFrame: 1260, text: "Just the silent destruction of wealth.", translation: "只有财富的无声毁灭。" },
  { startFrame: 1260, endFrame: 1440, text: "Can China's financial system withstand such an attack?", translation: "中国的金融体系能抵御这样的攻击吗？" },
  { startFrame: 1440, endFrame: 1620, text: "The risk is even greater than military invasion.", translation: "这种风险甚至比军事入侵更可怕。" },
  { startFrame: 1620, endFrame: 1800, text: "Because financial war strikes at the very heart of a nation.", translation: "因为金融战直击一个国家的心脏。" },
];

// Scene 4: HistoricalLessonsScene (60s = 1800帧, 全局偏移 4500)
export const historicalLessonsSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "History offers chilling precedents...", translation: "历史提供了令人胆寒的先例……" },
  { startFrame: 180, endFrame: 360, text: "1991. The Soviet Union collapsed.", translation: "1991年。苏联解体。" },
  { startFrame: 360, endFrame: 540, text: "The world's largest empire dismantled without a single shot.", translation: "世界最大的帝国在没有发射一颗子弹的情况下瓦解。" },
  { startFrame: 540, endFrame: 720, text: "Was it just political failure?", translation: "这只是政治失败吗？" },
  { startFrame: 720, endFrame: 900, text: "Or a carefully orchestrated financial attack?", translation: "还是一场精心策划的金融攻击？" },
  { startFrame: 900, endFrame: 1080, text: "1997. The Asian Financial Crisis.", translation: "1997年。亚洲金融风暴。" },
  { startFrame: 1080, endFrame: 1260, text: "The Four Asian Tigers brought to their knees overnight.", translation: "亚洲四小龙一夜之间俯首称臣。" },
  { startFrame: 1260, endFrame: 1440, text: "Decades of prosperity wiped out in days.", translation: "数十年的繁荣在几天内化为乌有。" },
  { startFrame: 1440, endFrame: 1620, text: "Japan's Lost decade that never ended.", translation: "日本失去的十年，至今未曾结束。" },
  { startFrame: 1620, endFrame: 1800, text: "Who was really behind these events?", translation: "这些事件的真正幕后推手是谁？" },
];

// Scene 5: MoneyEvolutionScene (60s = 1800帧, 全局偏移 6300)
export const moneyEvolutionSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "To understand, we must look at money itself.", translation: "要理解这些，我们必须审视货币本身。" },
  { startFrame: 180, endFrame: 360, text: "Goldsmiths began issuing paper receipts for gold deposits.", translation: "金匠开始为黄金存储发行纸币收据。" },
  { startFrame: 360, endFrame: 540, text: "People found it easier to trade paper than carry heavy gold.", translation: "人们发现交易纸币比携带沉重的黄金更容易。" },
  { startFrame: 540, endFrame: 720, text: "But then, the goldsmiths made a discovery...", translation: "但随后，金匠们有了一个发现……" },
  { startFrame: 720, endFrame: 900, text: "People rarely redeemed all their gold at once.", translation: "人们很少一次赎回所有黄金。" },
  { startFrame: 900, endFrame: 1080, text: "So they could lend out paper that wasn't backed by real gold.", translation: "所以他们可以借出没有真实黄金支持的纸币。" },
  { startFrame: 1080, endFrame: 1260, text: "This was the birth of fractional reserve banking.", translation: "这是部分准备金银行制度的诞生。" },
  { startFrame: 1260, endFrame: 1440, text: "And the beginning of money's corruption.", translation: "也是货币腐败的开始。" },
  { startFrame: 1440, endFrame: 1620, text: "Today, this system has evolved into pure fiat currency.", translation: "今天，这个系统已演变为纯粹的法定货币。" },
  { startFrame: 1620, endFrame: 1800, text: "Money backed by nothing but government decree.", translation: "货币除了政府法令外没有任何支撑。" },
];

// Scene 6: HistoricalTimelineScene (60s = 1800帧, 全局偏移 8100)
export const historicalTimelineSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Let's look at how we got here.", translation: "让我们看看我们是如何走到这一步的。" },
  { startFrame: 180, endFrame: 360, text: "1694: Bank of England founded.", translation: "1694年：英格兰银行成立。" },
  { startFrame: 360, endFrame: 540, text: "The first central bank to issue paper money.", translation: "第一家发行纸币的中央银行。" },
  { startFrame: 540, endFrame: 720, text: "1913: The Federal Reserve created in America.", translation: "1913年：美联储在美国建立。" },
  { startFrame: 720, endFrame: 900, text: "A private corporation controlling US money supply.", translation: "一家控制美国货币供应的私人公司。" },
  { startFrame: 900, endFrame: 1080, text: "1971: Nixon ends dollar's convertibility to gold.", translation: "1971年：尼克松结束美元与黄金的兑换。" },
  { startFrame: 1080, endFrame: 1260, text: "The world enters the era of pure fiat money.", translation: "世界进入纯粹法定货币时代。" },
  { startFrame: 1260, endFrame: 1440, text: "And the beginning of endless money printing.", translation: "也是无休止印钞的开始。" },
  { startFrame: 1440, endFrame: 1620, text: "The hidden hands took control.", translation: "看不见的手开始掌控一切。" },
  { startFrame: 1620, endFrame: 1800, text: "War had already begun. Without a single shot.", translation: "战争已经开始。没有发射一颗子弹。" },
];

// Scene 7: DebtSpiralScene (60s = 1800帧, 全局偏移 9900)
export const debtSpiralSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Today, every dollar in existence is debt.", translation: "今天，存在的每一美元都是债务。" },
  { startFrame: 180, endFrame: 360, text: "Created when someone borrows from a bank.", translation: "当有人从银行借款时被创造出来。" },
  { startFrame: 360, endFrame: 540, text: "And destroyed when the loan is repaid.", translation: "当贷款被偿还时被消灭。" },
  { startFrame: 540, endFrame: 720, text: "This system requires perpetual debt growth.", translation: "这个系统需要永久的债务增长。" },
  { startFrame: 720, endFrame: 900, text: "Or the entire money supply collapses.", translation: "否则整个货币供应就会崩溃。" },
  { startFrame: 900, endFrame: 1080, text: "Global debt now exceeds 300 trillion dollars.", translation: "全球债务现已超过300万亿美元。" },
  { startFrame: 1080, endFrame: 1260, text: "And it continues growing exponentially.", translation: "并且呈指数级持续增长。" },
  { startFrame: 1260, endFrame: 1440, text: "A spiral that cannot end well.", translation: "一个结局不会好的螺旋。" },
  { startFrame: 1440, endFrame: 1800, text: "China's 1 trillion dollar reserves. Are they safe?", translation: "中国的一万亿美元外汇储备。它们安全吗？" },
];

// Scene 8: InflationScene (60s = 1800帧, 全局偏移 11700)
export const inflationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "But what does all this mean for you?", translation: "但这一切对你意味着什么？" },
  { startFrame: 180, endFrame: 360, text: "It means inflation is not an accident.", translation: "这意味着通货膨胀不是意外。" },
  { startFrame: 360, endFrame: 540, text: "It's a built-in feature of the debt money system.", translation: "它是债务货币系统的内置特征。" },
  { startFrame: 540, endFrame: 720, text: "Your money loses value every single year.", translation: "你的钱每年都在贬值。" },
  { startFrame: 720, endFrame: 900, text: "Since 1971, the dollar has lost over 85% of its purchasing power.", translation: "自1971年以来，美元已损失超过85%的购买力。" },
  { startFrame: 900, endFrame: 1080, text: "What cost $100 then costs over $700 today.", translation: "当时100美元的东西现在要700多美元。" },
  { startFrame: 1080, endFrame: 1260, text: "This silent theft happens while you sleep.", translation: "这种无声的盗窃在你睡觉时发生。" },
  { startFrame: 1260, endFrame: 1440, text: "And most people never notice.", translation: "大多数人从未察觉。" },
  { startFrame: 1440, endFrame: 1620, text: "The author asked in 2006...", translation: "作者在2006年就问道……" },
  { startFrame: 1620, endFrame: 1800, text: "Can China's 'peaceful rise' survive this system?", translation: "中国的和平崛起能在这个系统中生存吗？" },
];

// Scene 9: EndingScene (30s = 900帧, 全局偏移 13500)
export const endingSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "This is not just history.", translation: "这不仅仅是历史。" },
  { startFrame: 180, endFrame: 360, text: "It's a warning for China's future.", translation: "这是对中国未来的警示。" },
  { startFrame: 360, endFrame: 540, text: "The book exposes the hidden hands behind 250 years of financial war.", translation: "本书揭示了250年金融战争背后的黑手。" },
  { startFrame: 540, endFrame: 720, text: "Understanding the game is the first step to survival.", translation: "理解游戏规则是生存的第一步。" },
  { startFrame: 720, endFrame: 900, text: "The war has already begun. Though we see no smoke.", translation: "战争已经开始，虽然看不见硝烟。" },
];

// 合并所有字幕（保持全局帧偏移，用于兼容旧代码）
export const episode01Subtitles = [
  ...ancientMarketSubs.map(s => ({ ...s, startFrame: s.startFrame + 0, endFrame: s.endFrame + 0 })),
  ...chinaRiseSubs.map(s => ({ ...s, startFrame: s.startFrame + 900, endFrame: s.endFrame + 900 })),
  ...invisibleBattlefieldSubs.map(s => ({ ...s, startFrame: s.startFrame + 2700, endFrame: s.endFrame + 2700 })),
  ...historicalLessonsSubs.map(s => ({ ...s, startFrame: s.startFrame + 4500, endFrame: s.endFrame + 4500 })),
  ...moneyEvolutionSubs.map(s => ({ ...s, startFrame: s.startFrame + 6300, endFrame: s.endFrame + 6300 })),
  ...historicalTimelineSubs.map(s => ({ ...s, startFrame: s.startFrame + 8100, endFrame: s.endFrame + 8100 })),
  ...debtSpiralSubs.map(s => ({ ...s, startFrame: s.startFrame + 9900, endFrame: s.endFrame + 9900 })),
  ...inflationSubs.map(s => ({ ...s, startFrame: s.startFrame + 11700, endFrame: s.endFrame + 11700 })),
  ...endingSubs.map(s => ({ ...s, startFrame: s.startFrame + 13500, endFrame: s.endFrame + 13500 })),
];

export default episode01Subtitles;
