/**
 * Episode02 字幕 - 按Scene分离（保留完整字幕内容）
 *
 * 总时长：13分钟（780秒 = 23400帧 @30fps）
 */
import { SubtitleEntry } from "./index";

// Scene 1: OpeningScene (30s = 900帧, 全局偏移 0)
export const openingSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 150, text: "Episode 2: The Rothschild Family", translation: "第二集：罗斯柴尔德家族" },
  { startFrame: 150, endFrame: 300, text: '"Let me issue and control a nation\'s money, and I care not who writes its laws."', translation: '"只要我能控制一个国家的货币发行，我不在乎谁制定法律。"' },
  { startFrame: 300, endFrame: 450, text: "— Mayer Amschel Rothschild", translation: "—— 梅耶·罗斯柴尔德" },
  { startFrame: 450, endFrame: 600, text: "When media talks about the world's richest people...", translation: "当媒体谈论世界首富时……" },
  { startFrame: 600, endFrame: 750, text: "They mention Bill Gates, Elon Musk, Jeff Bezos...", translation: "他们提到比尔·盖茨、埃隆·马斯克、杰夫·贝佐斯……" },
  { startFrame: 750, endFrame: 900, text: "But the truly wealthy remain invisible.", translation: "但真正的富人却隐形于世。" },
];

// Scene 2: RothschildIntroScene (60s = 1800帧, 全局偏移 900)
export const rothschildIntroSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Who is Rothschild?", translation: "谁是罗斯柴尔德？" },
  { startFrame: 180, endFrame: 360, text: "If you work in finance and don't know this name...", translation: "如果你从事金融行业却不知道这个名字……" },
  { startFrame: 360, endFrame: 540, text: "It's like a soldier not knowing Napoleon.", translation: "就像军人不知道拿破仑一样不可思议。" },
  { startFrame: 540, endFrame: 720, text: "Yet to most Chinese people, this name is virtually unknown.", translation: "然而对大多数中国人来说，这个名字却几乎无人知晓。" },
  { startFrame: 720, endFrame: 900, text: '"The great hermits hide in the royal court."', translation: '"大隐，隐于朝。"' },
  { startFrame: 900, endFrame: 1080, text: "Ask 100 people on Beijing's streets...", translation: "在北京街头随机问100个人……" },
  { startFrame: 1080, endFrame: 1260, text: "99 know Citibank. Maybe 1 knows Rothschild Bank.", translation: "99个知道花旗银行。也许有1个知道罗斯柴尔德银行。" },
  { startFrame: 1260, endFrame: 1440, text: "How much wealth does the Rothschild family have?", translation: "罗斯柴尔德家族究竟拥有多少财富？" },
  { startFrame: 1440, endFrame: 1620, text: "A conservative estimate: 30 trillion US dollars.", translation: "保守估计：30万亿美元。" },
  { startFrame: 1620, endFrame: 1800, text: "How did they amass such astronomical wealth?", translation: "他们是如何积累如此惊人的财富的？" },
];

// Scene 3: WaterlooPreludeScene (60s = 1800帧, 全局偏移 2700)
export const waterlooPreludeSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Our story begins on June 18, 1815.", translation: "我们的故事从1815年6月18日开始。" },
  { startFrame: 180, endFrame: 360, text: "The Battle of Waterloo.", translation: "滑铁卢战役。" },
  { startFrame: 360, endFrame: 540, text: "Napoleon versus Wellington.", translation: "拿破仑对阵威灵顿。" },
  { startFrame: 540, endFrame: 720, text: "The fate of Europe hung in the balance.", translation: "欧洲的命运悬于一线。" },
  { startFrame: 720, endFrame: 900, text: "If Napoleon won, France would dominate Europe.", translation: "如果拿破仑赢了，法国将主宰欧洲。" },
  { startFrame: 900, endFrame: 1080, text: "If Wellington won, Britain would lead.", translation: "如果威灵顿赢了，英国将主导。" },
  { startFrame: 1080, endFrame: 1260, text: "In London, investors waited frantically.", translation: "在伦敦，投资者焦急地等待着。" },
  { startFrame: 1260, endFrame: 1440, text: "British bonds would soar or crash based on the result.", translation: "英国公债将根据结果飙升或崩盘。" },
  { startFrame: 1440, endFrame: 1620, text: "Fortunes would be made. Or lost.", translation: "财富将被创造。或者毁灭。" },
  { startFrame: 1620, endFrame: 1800, text: "But one man already knew the outcome...", translation: "但有一个人已经知道了结果……" },
];

// Scene 4: IntelligenceNetworkScene (60s = 1800帧, 全局偏移 4500)
export const intelligenceNetworkSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Nathan Rothschild, third son of Mayer Rothschild.", translation: "内森·罗斯柴尔德，梅耶的第三个儿子。" },
  { startFrame: 180, endFrame: 360, text: "A banker of extraordinary courage and calculation.", translation: "一位非凡勇气和算计的银行家。" },
  { startFrame: 360, endFrame: 540, text: "Since before the war, the Rothschilds had built something unprecedented...", translation: "战前，罗斯柴尔德家族就已经建立了前所未有的东西……" },
  { startFrame: 540, endFrame: 720, text: "Their own intelligence network.", translation: "他们自己的情报网络。" },
  { startFrame: 720, endFrame: 900, text: "Secret agents across every European capital.", translation: "遍布每个欧洲首都的秘密特工。" },
  { startFrame: 900, endFrame: 1080, text: "Faster than any official messenger system.", translation: "比任何官方信使系统都快。" },
  { startFrame: 1080, endFrame: 1260, text: '"Rothschild\'s carriages on every road..."', translation: '"罗斯柴尔德的马车在每条公路上……"' },
  { startFrame: 1260, endFrame: 1440, text: '"Rothschild\'s ships across every channel..."', translation: '"罗斯柴尔德的船只在每条海峡中……"' },
  { startFrame: 1440, endFrame: 1620, text: '"Rothschild\'s spies in every city street..."', translation: '"罗斯柴尔德的间谍在每条城市街道上……"' },
  { startFrame: 1620, endFrame: 1800, text: "But no message was as precious as Waterloo.", translation: "但没有任何消息比滑铁卢更珍贵。" },
];

// Scene 5: TradingManipulationScene (60s = 1800帧, 全局偏移 6300)
export const tradingManipulationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "June 19, 1815. Early morning.", translation: "1815年6月19日。清晨。" },
  { startFrame: 180, endFrame: 360, text: "Nathan Rothschild's messenger arrived in England.", translation: "内森·罗斯柴尔德的信使抵达英国。" },
  { startFrame: 360, endFrame: 540, text: "With news: Napoleon had been defeated.", translation: "带着消息：拿破仑被打败了。" },
  { startFrame: 540, endFrame: 720, text: "A full day before official news would reach London.", translation: "比官方消息到达伦敦早了整整一天。" },
  { startFrame: 720, endFrame: 900, text: "Nathan rode straight to the stock exchange.", translation: "内森直奔证券交易所。" },
  { startFrame: 900, endFrame: 1080, text: "His face was expressionless. Unreadable.", translation: "他的表情毫无波澜。高深莫测。" },
  { startFrame: 1080, endFrame: 1260, text: "Everyone watched him, waiting for any sign.", translation: "所有人看着他，等待任何迹象。" },
  { startFrame: 1260, endFrame: 1440, text: "Then, he gave a signal to his traders...", translation: "然后，他向他的交易员发出了信号……" },
  { startFrame: 1440, endFrame: 1620, text: "They began selling. Everything.", translation: "他们开始抛售。抛售一切。" },
  { startFrame: 1620, endFrame: 1800, text: "British bonds crashed. Panic spread like wildfire.", translation: "英国公债崩盘。恐慌像野火一样蔓延。" },
];

// Scene 6: TwentyTimesProfitScene (60s = 1800帧, 全局偏移 8100)
export const twentyTimesProfitSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: '"Rothschild knows! Wellington has lost!"', translation: '"罗斯柴尔德知道了！威灵顿输了！"' },
  { startFrame: 180, endFrame: 360, text: "The panic selling was catastrophic.", translation: "恐慌性抛售是灾难性的。" },
  { startFrame: 360, endFrame: 540, text: "British bonds fell to 5% of their value.", translation: "英国公债跌至面值的5%。" },
  { startFrame: 540, endFrame: 720, text: "Then, Nathan gave another signal...", translation: "然后，内森发出了另一个信号……" },
  { startFrame: 720, endFrame: 900, text: "His agents began buying. Everything.", translation: "他的代理开始买进。买进一切。" },
  { startFrame: 900, endFrame: 1080, text: "Every single bond they could acquire.", translation: "他们能买到的每一张债券。" },
  { startFrame: 1080, endFrame: 1260, text: "When official news finally arrived the next day...", translation: "当官方消息第二天终于到达时……" },
  { startFrame: 1260, endFrame: 1440, text: "Wellington had won. British bonds soared.", translation: "威灵顿赢了。英国公债飙升。" },
  { startFrame: 1440, endFrame: 1620, text: "Nathan Rothschild now owned them all.", translation: "内森·罗斯柴尔德拥有了所有债券。" },
  { startFrame: 1620, endFrame: 1800, text: "His wealth multiplied 20 times in a single day.", translation: "他的财富在一天内增长了20倍。" },
];

// Scene 7: FiveBrothersScene (60s = 1800帧, 全局偏移 9900)
export const fiveBrothersSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "This was no accident.", translation: "这绝非偶然。" },
  { startFrame: 180, endFrame: 360, text: "Mayer Rothschild had sent five sons to five cities.", translation: "梅耶·罗斯柴尔德将五个儿子派往五个城市。" },
  { startFrame: 360, endFrame: 540, text: "Amschel in Frankfurt - the family base.", translation: "阿姆斯洛在法兰克福——家族基地。" },
  { startFrame: 540, endFrame: 720, text: "Salomon in Vienna - Austria.", translation: "所罗门在维也纳——奥地利。" },
  { startFrame: 720, endFrame: 900, text: "Nathan in London - England.", translation: "内森在伦敦——英国。" },
  { startFrame: 900, endFrame: 1080, text: "Carl in Naples - Italy.", translation: "卡尔在那不勒斯——意大利。" },
  { startFrame: 1080, endFrame: 1260, text: "James in Paris - France.", translation: "詹姆斯在巴黎——法国。" },
  { startFrame: 1260, endFrame: 1440, text: "The world's first international banking group.", translation: "世界上第一个国际银行集团。" },
  { startFrame: 1440, endFrame: 1620, text: "Coordinated like clockwork.", translation: "像钟表一样精确协调。" },
  { startFrame: 1620, endFrame: 1800, text: "Always ahead of the market. Always ahead of the news.", translation: "永远领先市场。永远领先消息。" },
];

// Scene 8: BankOfEnglandScene (60s = 1800帧, 全局偏移 11700)
export const bankOfEnglandSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "To understand the Rothschilds...", translation: "要理解罗斯柴尔德家族……" },
  { startFrame: 180, endFrame: 360, text: "We must understand the world they operated in.", translation: "我们必须理解他们所处的世界。" },
  { startFrame: 360, endFrame: 540, text: "1694. The Bank of England was founded.", translation: "1694年。英格兰银行成立。" },
  { startFrame: 540, endFrame: 720, text: "A private corporation granted the power to issue money.", translation: "一家获准发行货币的私人公司。" },
  { startFrame: 720, endFrame: 900, text: "In exchange for a loan to the king.", translation: "作为给国王贷款的交换。" },
  { startFrame: 900, endFrame: 1080, text: "The king's debt became the nation's permanent debt.", translation: "国王的债务变成了国家的永久债务。" },
  { startFrame: 1080, endFrame: 1260, text: "Backed by taxpayers' money forever.", translation: "永远由纳税人的钱支撑。" },
  { startFrame: 1260, endFrame: 1440, text: "The system was a trap.", translation: "这个系统是一个陷阱。" },
  { startFrame: 1440, endFrame: 1620, text: "New money could only be created by increasing debt.", translation: "新货币只能通过增加债务来创造。" },
  { startFrame: 1620, endFrame: 1800, text: "Paying off debt would destroy the money supply.", translation: "偿还债务会摧毁货币供应。" },
];

// Scene 9: MayerRothschildScene (60s = 1800帧, 全局偏移 13500)
export const mayerRothschildSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Mayer Amschel Rothschild was born in 1744.", translation: "梅耶·罗斯柴尔德出生于1744年。" },
  { startFrame: 180, endFrame: 360, text: "The son of a traveling goldsmith and moneylender.", translation: "一个巡回金匠和放贷人的儿子。" },
  { startFrame: 360, endFrame: 540, text: "At age 13, he became a banking apprentice.", translation: "13岁时，他成为了一名银行学徒。" },
  { startFrame: 540, endFrame: 720, text: "He learned a revolutionary idea from English banking...", translation: "他从英国银行学到了一个革命性的理念……" },
  { startFrame: 720, endFrame: 900, text: "Lending to kings and governments was safer and more profitable.", translation: "借钱给国王和政府更安全也更有利可图。" },
  { startFrame: 900, endFrame: 1080, text: "He returned to Frankfurt and built connections with nobility.", translation: "他回到法兰克福，与贵族建立了关系。" },
  { startFrame: 1080, endFrame: 1260, text: "Using rare coins to gain access to royal courts.", translation: "用稀有硬币获得进入王室宫廷的途径。" },
  { startFrame: 1260, endFrame: 1440, text: "Prince William of Hesse trusted him with his fortune.", translation: "黑森-卡塞尔的威廉王子将财富托付给他。" },
  { startFrame: 1440, endFrame: 1620, text: "When Napoleon invaded, William fled...", translation: "当拿破仑入侵时，威廉逃跑了……" },
  { startFrame: 1620, endFrame: 1800, text: "Leaving 3 million dollars in Rothschild's care.", translation: "留下300万美元由罗斯柴尔德保管。" },
];

// Scene 10: NathanLondonScene (60s = 1800帧, 全局偏移 15300)
export const nathanLondonSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "That 3 million dollars became the foundation.", translation: "那300万美元成为了基石。" },
  { startFrame: 180, endFrame: 360, text: "Nathan took the funds to London in 1798.", translation: "内森于1798年带着资金前往伦敦。" },
  { startFrame: 360, endFrame: 540, text: "He began by smuggling goods between England and France.", translation: "他开始在英国和法国之间走私货物。" },
  { startFrame: 540, endFrame: 720, text: "Profiting from the war blockade.", translation: "从战争封锁中获利。" },
  { startFrame: 720, endFrame: 900, text: "Then he learned: Wellington's army in Spain needed gold.", translation: "然后他得知：威灵顿在西班牙的军队需要黄金。" },
  { startFrame: 900, endFrame: 1080, text: "Nathan bought 800,000 pounds of gold from the East India Company.", translation: "内森从东印度公司购买了80万英镑的黄金。" },
  { startFrame: 1080, endFrame: 1260, text: "Then offered to transport it through France to Spain.", translation: "然后提出将其通过法国运送到西班牙。" },
  { startFrame: 1260, endFrame: 1440, text: "The French government actually protected the shipment!", translation: "法国政府竟然保护了这批货物！" },
  { startFrame: 1440, endFrame: 1620, text: "In Paris, the gold was quietly exchanged for coins...", translation: "在巴黎，黄金被悄悄兑换成金币……" },
  { startFrame: 1620, endFrame: 1800, text: "And delivered to Wellington's army through Rothschild's network.", translation: "通过罗斯柴尔德的网络送到威灵顿的军队。" },
];

// Scene 11: JamesParisScene (60s = 1800帧, 全局偏移 17100)
export const jamesParisSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "James Rothschild, the fifth son, was sent to Paris.", translation: "第五个儿子詹姆斯被派往巴黎。" },
  { startFrame: 180, endFrame: 360, text: "After Waterloo, France was in financial crisis.", translation: "滑铁卢之后，法国陷入财政危机。" },
  { startFrame: 360, endFrame: 540, text: "The French government needed loans.", translation: "法国政府需要贷款。" },
  { startFrame: 540, endFrame: 720, text: "But French aristocrats looked down on the Rothschilds.", translation: "但法国贵族看不起罗斯柴尔德家族。" },
  { startFrame: 720, endFrame: 900, text: '"These are just upstart commoners," they sneered.', translation: '"这些只是暴发户，"他们嘲笑道。' },
  { startFrame: 900, endFrame: 1080, text: "James had a plan...", translation: "詹姆斯有一个计划……" },
  { startFrame: 1080, endFrame: 1260, text: "The Rothschilds began buying French bonds across Europe.", translation: "罗斯柴尔德家族开始在欧洲各地买入法国债券。" },
  { startFrame: 1260, endFrame: 1440, text: "Prices rose steadily.", translation: "价格稳步上涨。" },
  { startFrame: 1440, endFrame: 1620, text: "Then suddenly... they dumped everything at once.", translation: "然后突然……他们一次性全部抛售。" },
  { startFrame: 1620, endFrame: 1800, text: "French bonds collapsed. The government was desperate.", translation: "法国债券崩盘。政府绝望了。" },
];

// Scene 12: SalomonViennaScene (60s = 1800帧, 全局偏移 18900)
export const salomonViennaSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Who could save France's economy?", translation: "谁能拯救法国的经济？" },
  { startFrame: 180, endFrame: 360, text: "Only one family had enough capital.", translation: "只有一个家族有足够的资本。" },
  { startFrame: 360, endFrame: 540, text: "James Rothschild rode to the rescue.", translation: "詹姆斯·罗斯柴尔德前来救援。" },
  { startFrame: 540, endFrame: 720, text: "The French government was now in his debt.", translation: "法国政府现在欠他的情了。" },
  { startFrame: 720, endFrame: 900, text: "Meanwhile, Salomon conquered Vienna...", translation: "与此同时，所罗门征服了维也纳……" },
  { startFrame: 900, endFrame: 1080, text: "Through Prince Metternich, Austria's powerful chancellor.", translation: "通过奥地利强大的宰相梅特涅亲王。" },
  { startFrame: 1080, endFrame: 1260, text: "Salomon became the Habsburg court's favorite banker.", translation: "所罗门成为哈布斯堡宫廷最宠爱的银行家。" },
  { startFrame: 1260, endFrame: 1440, text: "Financing Austrian military adventures across Europe.", translation: "资助奥地利在欧洲各地的军事冒险。" },
  { startFrame: 1440, endFrame: 1620, text: "While Austria declined into debt...", translation: "随着奥地利陷入债务……" },
  { startFrame: 1620, endFrame: 1800, text: "Salomon's power only grew.", translation: "所罗门的权力只增不减。" },
];

// Scene 13: EmpirePeakScene (60s = 1800帧, 全局偏移 20700)
export const empirePeakSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "By the mid-19th century...", translation: "到19世纪中叶……" },
  { startFrame: 180, endFrame: 360, text: "The Rothschilds controlled the money supply of Europe.", translation: "罗斯柴尔德家族控制了欧洲的货币供应。" },
  { startFrame: 360, endFrame: 540, text: "Britain. France. Germany. Austria. Italy.", translation: "英国。法国。德国。奥地利。意大利。" },
  { startFrame: 540, endFrame: 720, text: "Five brothers. Five hearts of European finance.", translation: "五兄弟。欧洲金融的五个心脏。" },
  { startFrame: 720, endFrame: 900, text: '"The kings and ministers of all nations listen to their teachings."', translation: '"所有国家的国王和部长都聆听他们的教诲。"' },
  { startFrame: 900, endFrame: 1080, text: "They controlled gold prices across continents.", translation: "他们控制着各大洲的黄金价格。" },
  { startFrame: 1080, endFrame: 1260, text: "They invented the first international clearing system.", translation: "他们发明了第一个国际清算系统。" },
  { startFrame: 1260, endFrame: 1440, text: "Money moved without physical gold ever crossing borders.", translation: "资金流动无需实物黄金跨境。" },
  { startFrame: 1440, endFrame: 1620, text: "Sacred monarchy had been replaced by sacred wealth.", translation: "神圣的君权被神圣的金权所取代。" },
  { startFrame: 1620, endFrame: 1800, text: "The Rothschilds had become the true power behind the throne.", translation: "罗斯柴尔德家族已成为王座背后的真正权力。" },
];

// Scene 14: SummaryScene (30s = 900帧, 全局偏移 22500)
export const summarySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: '"As long as you brothers remain united..."', translation: '"只要你们兄弟团结一致……"' },
  { startFrame: 180, endFrame: 360, text: '"No bank in the world can compete with you."', translation: '"世界上没有哪家银行能与你们竞争。"' },
  { startFrame: 360, endFrame: 540, text: "Strict family control. Total secrecy.", translation: "严格的家族控制。完全保密。" },
  { startFrame: 540, endFrame: 720, text: "Calculated risks. Cold rationality.", translation: "计算过的风险。冷酷的理性。" },
  { startFrame: 720, endFrame: 900, text: "They had built the largest financial empire in human history.", translation: "他们建立了人类历史上最大的金融帝国。" },
];

// 合并所有字幕（保持全局帧偏移，用于兼容旧代码）
export const episode02Subtitles = [
  ...openingSubs.map(s => ({ ...s, startFrame: s.startFrame + 0, endFrame: s.endFrame + 0 })),
  ...rothschildIntroSubs.map(s => ({ ...s, startFrame: s.startFrame + 900, endFrame: s.endFrame + 900 })),
  ...waterlooPreludeSubs.map(s => ({ ...s, startFrame: s.startFrame + 2700, endFrame: s.endFrame + 2700 })),
  ...intelligenceNetworkSubs.map(s => ({ ...s, startFrame: s.startFrame + 4500, endFrame: s.endFrame + 4500 })),
  ...tradingManipulationSubs.map(s => ({ ...s, startFrame: s.startFrame + 6300, endFrame: s.endFrame + 6300 })),
  ...twentyTimesProfitSubs.map(s => ({ ...s, startFrame: s.startFrame + 8100, endFrame: s.endFrame + 8100 })),
  ...fiveBrothersSubs.map(s => ({ ...s, startFrame: s.startFrame + 9900, endFrame: s.endFrame + 9900 })),
  ...bankOfEnglandSubs.map(s => ({ ...s, startFrame: s.startFrame + 11700, endFrame: s.endFrame + 11700 })),
  ...mayerRothschildSubs.map(s => ({ ...s, startFrame: s.startFrame + 13500, endFrame: s.endFrame + 13500 })),
  ...nathanLondonSubs.map(s => ({ ...s, startFrame: s.startFrame + 15300, endFrame: s.endFrame + 15300 })),
  ...jamesParisSubs.map(s => ({ ...s, startFrame: s.startFrame + 17100, endFrame: s.endFrame + 17100 })),
  ...salomonViennaSubs.map(s => ({ ...s, startFrame: s.startFrame + 18900, endFrame: s.endFrame + 18900 })),
  ...empirePeakSubs.map(s => ({ ...s, startFrame: s.startFrame + 20700, endFrame: s.endFrame + 20700 })),
  ...summarySubs.map(s => ({ ...s, startFrame: s.startFrame + 22500, endFrame: s.endFrame + 22500 })),
];

export default episode02Subtitles;
