/**
 * Episode08 字幕 - 按Scene分离（保留完整字幕内容）
 *
 * 总时长：11分钟（660秒 = 19800帧 @30fps）
 *
 * 说明：每个Scene的字幕从第0帧开始，相对应的全局帧偏移如下：
 * - Scene 0 (Opening): 全局帧 0-900 → 相对帧 0-900
 * - Scene 1 (KennedyAssassination): 全局帧 900-2700 → 相对帧 0-1800
 * - Scene 2 (Motivation): 全局帧 2700-4500 → 相对帧 0-1800
 * - Scene 3 (SilverHistory): 全局帧 4500-6300 → 相对帧 0-1800
 * - Scene 4 (SilverStandardEnd): 全局帧 6300-8100 → 相对帧 0-1800
 * - Scene 5 (KennedyDeath): 全局帧 8100-9900 → 相对帧 0-1800
 * - Scene 6 (GoldPool): 全局帧 9900-11700 → 相对帧 0-1800
 * - Scene 7 (SDR): 全局帧 11700-13500 → 相对帧 0-1800
 * - Scene 8 (NixonGold): 全局帧 13500-15300 → 相对帧 0-1800
 * - Scene 9 (Petrodollar): 全局帧 15300-17100 → 相对帧 0-1800
 * - Scene 10 (Reagan): 全局帧 17100-18900 → 相对帧 0-1800
 * - Scene 11 (Summary): 全局帧 18900-19800 → 相对帧 0-900
 */
import { SubtitleEntry } from "./index";

// Scene 0: OpeningScene (30s = 900帧, 全局偏移 0)
export const openingSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 90, text: "Episode 08: The Last Stand of Honest Money", translation: "第八集：诚实货币的最后抗争" },
  { startFrame: 90, endFrame: 210, text: "In the modern history of the world,", translation: "在整个世界现代史中，" },
  { startFrame: 210, endFrame: 330, text: "no event has been so brazen, so overt,", translation: "没有一个事件像刺杀肯尼迪总统这样" },
  { startFrame: 330, endFrame: 450, text: "so ruthless in trampling democracy", translation: "明目张胆、这样毫无掩饰、这样无所顾及地" },
  { startFrame: 450, endFrame: 570, text: "as the assassination of President Kennedy.", translation: "践踏民主政治的了。" },
  { startFrame: 570, endFrame: 750, text: "Within three years of Kennedy's death,", translation: "在肯尼迪被刺杀后的短短三年中，" },
  { startFrame: 750, endFrame: 900, text: "18 key witnesses died under mysterious circumstances.", translation: "18名关键证人相继死亡。" },
];

// Scene 1: KennedyAssassinationScene (60s = 1800帧, 全局偏移 900)
export const kennedyAssassinationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 120, text: "November 22, 1963", translation: "1963年11月22日" },
  { startFrame: 120, endFrame: 240, text: "President Kennedy was assassinated in Dallas, Texas.", translation: "肯尼迪总统在德克萨斯州的达拉斯市遇刺身亡。" },
  { startFrame: 240, endFrame: 390, text: "The Warren Commission's conclusion:", translation: "美国官方的沃伦委员会的最终结论是：" },
  { startFrame: 390, endFrame: 540, text: "a lone assassin named Oswald.", translation: "凶手是一个名叫奥斯瓦德的单独作案者。" },
  { startFrame: 540, endFrame: 690, text: "But there were too many suspicious points.", translation: "但此案的疑点实在太多，" },
  { startFrame: 690, endFrame: 840, text: "The assassin was killed by another gunman", translation: "凶手被警方抓获不到48小时，" },
  { startFrame: 840, endFrame: 990, text: "in front of millions of TV viewers.", translation: "就在众目睽睽之下被另一名犹太杀手枪杀，" },
  { startFrame: 990, endFrame: 1140, text: "within 48 hours of his capture.", translation: "上百万人在电视机旁看到了谋杀全过程。" },
  { startFrame: 1140, endFrame: 1290, text: "The 'magic bullet' theory defies physics.", translation: "一发「神奇的子弹」的理论违背物理学。" },
  { startFrame: 1290, endFrame: 1440, text: "One bullet hit the governor first, then Kennedy.", translation: "一颗子弹先击中了坐在肯尼迪前方的德州州长，" },
  { startFrame: 1440, endFrame: 1620, text: "The probability of that happening was virtually zero.", translation: "再射中肯尼迪，这样的几率几乎为零。" },
  { startFrame: 1620, endFrame: 1800, text: "More than one assassin was clearly involved.", translation: "更多的专家相信，不只一人从不同的方向朝肯尼迪开枪。" },
];

// Scene 2: MotivationScene (60s = 1800帧, 全局偏移 2700)
export const motivationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 150, text: "TheKennedy family was part of the inner circle.", translation: "肯尼迪家族也是国际银行家集团中的圈里人。" },
  { startFrame: 150, endFrame: 300, text: "His father Joseph was a billionaire,", translation: "其父约瑟夫就是1929年股票崩盘时大发其财，" },
  { startFrame: 300, endFrame: 450, text: "who made a fortune during the 1929 crash.", translation: "后来被罗斯福总统任命的首届美国证券交易委员会主席。" },
  { startFrame: 450, endFrame: 600, text: "Then why was Kennedy killed?", translation: "那麼肯尼迪何以开罪了整个统治精英阶层，" },
  { startFrame: 600, endFrame: 750, text: "What made him a threat to the ruling elite?", translation: "以至于落得杀身之祸呢？" },
  { startFrame: 750, endFrame: 930, text: "The answer lies in a single document:", translation: "答案就在一份文件上：" },
  { startFrame: 930, endFrame: 1110, text: "Executive Order 11110.", translation: "总统令11110号。" },
  { startFrame: 1110, endFrame: 1290, text: "Signed on June 4, 1963.", translation: "1963年6月4日签署。" },
  { startFrame: 1290, endFrame: 1470, text: "This order authorized the Treasury", translation: "着令美国财政部以财政部所拥有的任何形式的白银，" },
  { startFrame: 1470, endFrame: 1650, text: "to issue Silver Certificates.", translation: "包括：银锭、银币和标准白银美元作为支撑，" },
  { startFrame: 1650, endFrame: 1800, text: "to reclaim monetary control from the Federal Reserve.", translation: "发行白银券，并立刻进入货币流通。" },
];

// Scene 3: SilverHistoryScene (60s = 1800帧, 全局偏移 4500)
export const silverHistorySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "To understand Executive Order 11110,", translation: "要搞清楚11110号总统令的由来和意义，" },
  { startFrame: 180, endFrame: 360, text: "we must trace the history of silver in America.", translation: "我们必须从白银在美国的几起几落说起。" },
  { startFrame: 360, endFrame: 540, text: "In 1792, the Coinage Act", translation: "1792年的《1792年铸币法案》" },
  { startFrame: 540, endFrame: 720, text: "established the dollar based on silver.", translation: "奠定了美元的法律地位，" },
  { startFrame: 720, endFrame: 900, text: "One dollar contained 24.1 grams of pure silver.", translation: "一美元包含纯银24.1克，金银比价1比15。" },
  { startFrame: 900, endFrame: 1110, text: "In 1873, under pressure from European Rothschilds,", translation: "1873年2月，《1873年铸币法案》在欧洲罗斯柴尔德家族的" },
  { startFrame: 1110, endFrame: 1320, text: "the Coinage Act of 1873 abolished silver's monetary status.", translation: "压力下，废除了白银的货币地位，实行了单一的金本位，" },
  { startFrame: 1320, endFrame: 1500, text: "This became known as the 'Crime of 1873'.", translation: "人们称这个法案为1873年恶法。" },
  { startFrame: 1500, endFrame: 1680, text: "Western silver states erupted in protest.", translation: "美国西部产银州激起了强烈反对，" },
  { startFrame: 1680, endFrame: 1800, text: "The free silver movement was born.", translation: "随后产生了轰轰烈烈的支持白银的民间草根运动。" },
];

// Scene 4: SilverStandardEndScene (60s = 1800帧, 全局偏移 6300)
export const silverStandardEndSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "By the 1960s, the Treasury held", translation: "到30年代，美国财政部已经拥有高达" },
  { startFrame: 180, endFrame: 360, text: "nearly 2 billion ounces of silver.", translation: "60多亿盎司的白银，" },
  { startFrame: 360, endFrame: 540, text: "Silver certificates threatened the Federal Reserve.", translation: "一旦实现货币化发行白银券，" },
  { startFrame: 540, endFrame: 720, text: "The Federal Reserve could be forced out of business.", translation: "势必成为国际银行家最大的梦靥，很可能迫使美联储银行破产。" },
  { startFrame: 720, endFrame: 930, text: "In November 1961,", translation: "1961年11月29日，" },
  { startFrame: 930, endFrame: 1140, text: "Kennedy ordered the Treasury to stop selling silver.", translation: "肯尼迪总统已经下令财政部停止向工业界抛售货币白银。" },
  { startFrame: 1140, endFrame: 1350, text: "Silver prices surged to a 41-year high.", translation: "白银的价格冲上了41年来纽约市场的最高价位。" },
  { startFrame: 1350, endFrame: 1560, text: "This was a direct challenge to international bankers.", translation: "肯尼迪的这一行为颠覆性地破坏了国际银行家的图谋。" },
  { startFrame: 1560, endFrame: 1800, text: "The battle for silver had begun.", translation: "保卫白银和废除白银的货币地位成为肯尼迪和国际银行家斗争的焦点。" },
];

// Scene 5: KennedyDeathScene (60s = 1800帧, 全局偏移 8100)
export const kennedyDeathSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "If silver production increased,", translation: "一旦白银重新开始大量供应，" },
  { startFrame: 180, endFrame: 360, text: "Kennedy could push for more Silver Certificates.", translation: "肯尼迪就可以与西部白银生产州联手推动美元货币的白银含量重估的立法，" },
  { startFrame: 360, endFrame: 540, text: "The Federal Reserve would be destroyed.", translation: "加大白银券的发行量，白银券势必再度崛起。" },
  { startFrame: 540, endFrame: 750, text: "Kennedy was virtually guaranteed re-election in 1964.", translation: "这个深受选民热爱的总统几乎可以肯定会在1964年底的大选中获得连任，" },
  { startFrame: 750, endFrame: 960, text: "If he served another 4 years, the situation would be irreversible.", translation: "如果肯尼迪再作4年总统，局面将变得无法收拾。" },
  { startFrame: 960, endFrame: 1170, text: "Eliminating Kennedy became the only option.", translation: "除掉肯尼迪成了唯一的选择。" },
  { startFrame: 1170, endFrame: 1380, text: "On November 22, 1963,", translation: "1963年11月22日，" },
  { startFrame: 1380, endFrame: 1590, text: "the president was assassinated in Dallas.", translation: "总统在达拉斯被刺杀。" },
  { startFrame: 1590, endFrame: 1800, text: "Johnson took over and reversed Kennedy's silver policy.", translation: "约翰逊上台后不久，就下令财政部停止白银券与实物白银的兑换。" },
];

// Scene 6: GoldPoolScene (60s = 1800帧, 全局偏移 9900)
export const goldPoolSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "In 1961, the international bankers created", translation: "1961年11月，经过密集协商，" },
  { startFrame: 180, endFrame: 360, text: "the London Gold Pool.", translation: "国际银行家达成一个高明的计划，" },
  { startFrame: 360, endFrame: 540, text: "Its purpose: to suppress gold prices.", translation: "由美国和7个欧洲主要国家建立了黄金互助基金，" },
  { startFrame: 540, endFrame: 720, text: "The gold price was to be held at $35.20 per ounce.", translation: "它的主旨就是压住伦敦市场的黄金价格。" },
  { startFrame: 720, endFrame: 900, text: "The fund was secretly controlled by central banks.", translation: "该基金由参加国的中央银行出份子，总额为2亿7000万美元的等价黄金，" },
  { startFrame: 900, endFrame: 1080, text: "The US contributed half of all the gold.", translation: "其中美国最为财大气粗，独家承担一半。" },
  { startFrame: 1080, endFrame: 1260, text: "By 1967, the Gold Pool had lost $1 billion.", translation: "到1967年11月底，黄金互助基金总共损失了10亿美元的黄金，" },
  { startFrame: 1260, endFrame: 1440, text: "The dollar faced a worldwide confidence crisis.", translation: "接近900吨。此时的美元已处在世界范围内的信心危机之中。" },
  { startFrame: 1440, endFrame: 1620, text: "On March 17, 1968, the Gold Pool collapsed.", translation: "1968年3月17日，黄金互助基金计划终于关门大吉。" },
  { startFrame: 1620, endFrame: 1800, text: "The London gold market was shut down for two weeks.", translation: "伦敦黄金市场应美国要求关闭了整整两个星期。" },
];

// Scene 7: SDRScene (60s = 1800帧, 全局偏移 11700)
export const sdrSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "With the Gold Pool destroyed,", translation: "在黄金互助基金打光所有子弹之后，" },
  { startFrame: 180, endFrame: 360, text: "the bankers introduced a new invention:", translation: "国际银行家们又想起凯恩斯在40年代最早提出的纸黄金的思想，" },
  { startFrame: 360, endFrame: 540, text: "Special Drawing Rights (SDR).", translation: "对之加以重新包装，最后提出特别提款权这个伟大发明。" },
  { startFrame: 540, endFrame: 720, text: "The SDR was dubbed 'paper gold'.", translation: "法国著名经济学家雅克·鲁夫指出：货币学家们发明了一种新玩意儿" },
  { startFrame: 720, endFrame: 900, text: "It was designed to hide America's monetary bankruptcy.", translation: "来掩盖美国货币的破产状态的事实。" },
  { startFrame: 900, endFrame: 1080, text: "On March 18, 1969,", translation: "1969年3月18日，" },
  { startFrame: 1080, endFrame: 1260, text: "Congress removed the 25% gold requirement for the dollar.", translation: "美国国会取消了美联储发行的美元必须拥有25％的黄金支撑的强制要求，" },
  { startFrame: 1260, endFrame: 1440, text: "The last legal link between gold and the dollar was severed.", translation: "这一行为切断了黄金和美元发行的最后法律强制关系。" },
  { startFrame: 1440, endFrame: 1620, text: "The world moved closer to the final truth.", translation: "世界离最后的真相不远了。" },
  { startFrame: 1620, endFrame: 1800, text: "The era of honest money was ending.", translation: "诚实货币的时代即将终结。" },
];

// Scene 8: NixonGoldScene (60s = 1800帧, 全局偏移 13500)
export const nixonGoldSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "August 15, 1971", translation: "1971年8月15日，" },
  { startFrame: 180, endFrame: 360, text: "Nixon announced the closure of the gold window.", translation: "最后的真相终于来到了。" },
  { startFrame: 360, endFrame: 540, text: "America could no longer honor its international commitment", translation: "美国已经无力履行美元与黄金挂钩的国际承诺了，" },
  { startFrame: 540, endFrame: 720, text: "to exchange dollars for gold.", translation: "这是美国继1963年罗斯福对美国国内人民赖账以来，" },
  { startFrame: 720, endFrame: 900, text: "This was America's second default.", translation: "再次对国际社会赖账。" },
  { startFrame: 900, endFrame: 1080, text: "For the first time in human history,", translation: "让国际银行家紧张激动的时刻终于来到了，" },
  { startFrame: 1080, endFrame: 1260, text: "the entire world entered the era of fiat currency.", translation: "这是人类有史以来，全世界第一次一起进入法币时代。" },
  { startFrame: 1260, endFrame: 1440, text: "The Western industrial nations,", translation: "以美联储为首的西方工业国在挣脱了黄金这一紧箍咒之后，" },
  { startFrame: 1440, endFrame: 1620, text: "began an unprecedented credit expansion.", translation: "果然开始了前所未有的信贷扩张时代，" },
  { startFrame: 1620, endFrame: 1800, text: "By 2006, US total debt reached $44 trillion.", translation: "到2006年为止，美国的政府、公司和私人欠债总额已经高达44万亿美元。" },
];

// Scene 9: PetrodollarScene (60s = 1800帧, 全局偏移 15300)
export const petrodollarSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "October 6, 1973", translation: "1973年10月6日，" },
  { startFrame: 180, endFrame: 360, text: "The fourth Middle East war erupted.", translation: "第四次中东战争爆发。" },
  { startFrame: 360, endFrame: 540, text: "Arab nations proclaimed an oil embargo.", translation: "10月16日中东地区的伊朗、沙特和4个阿拉伯国家祭出石油武器，" },
  { startFrame: 540, endFrame: 720, text: "Oil prices surged 70%.", translation: "同时宣布油价上涨70％。" },
  { startFrame: 720, endFrame: 900, text: "International bankers saw an opportunity.", translation: "国际银行家则千方百计地谋划让流进沙特等国的石油美元必须流回美国。" },
  { startFrame: 900, endFrame: 1080, text: "Saudi Arabia became the key target.", translation: "经过仔细分析，美国决定采取分而制之的策略，从内部分化和瓦解中东石油出产国。" },
  { startFrame: 1080, endFrame: 1260, text: "The deal: oil sales in dollars only,", translation: "条件是，石油交易必须以美元结算，" },
  { startFrame: 1260, endFrame: 1440, text: "and Saudi petrodollars would buy US Treasury bonds.", translation: "沙特必须用赚来的石油美元购买美国国库券，" },
  { startFrame: 1440, endFrame: 1620, text: "The petrodollar system was born.", translation: "石油美元回流体系建立。" },
  { startFrame: 1620, endFrame: 1800, text: "The dollar found a new refuge: oil.", translation: "脱离了金本位庇护之下的风雨飘摇中的美元终于找到了石油这个避难所。" },
];

// Scene 10: ReaganScene (60s = 1800帧, 全局偏移 17100)
export const reaganSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "By the late 1970s,", translation: "尽管在世界范围内，金本位已经被全面废除，" },
  { startFrame: 180, endFrame: 360, text: "gold was abolished worldwide.", translation: "除了瑞士金法郎等极少数国家，黄金与纸币已经全然没有任何联系，" },
  { startFrame: 360, endFrame: 540, text: "But international bankers feared gold's price surge.", translation: "但是最让国际银行家吃不香睡不好的还是黄金的价格在整个70年代的持续上涨，" },
  { startFrame: 540, endFrame: 720, text: "Preventing a gold standard revival was their top priority.", translation: "防止金本位复辟乃是国际银行家最高优先级的工作。" },
  { startFrame: 720, endFrame: 900, text: "In 1981, President Reagan took office.", translation: "1981年1月，里根上任伊始就要求国会成立黄金委员会，" },
  { startFrame: 900, endFrame: 1080, text: "He wanted to study the restoration of the gold standard.", translation: "研究恢复金本位的可行性。" },
  { startFrame: 1080, endFrame: 1260, text: "This directly challenged the bankers' forbidden zone.", translation: "此举直接触犯了国际银行家的禁区。" },
  { startFrame: 1260, endFrame: 1440, text: "On March 30, 1981,", translation: "1981年3月30日，" },
  { startFrame: 1440, endFrame: 1620, text: "Reagan was shot and critically wounded.", translation: "入主白宫仅69天的里根就被一名叫辛克利的追星族一枪打中，" },
  { startFrame: 1620, endFrame: 1800, text: "The last hope for the gold standard was shattered.", translation: "子弹距心脏仅1毫米。这一枪打碎了恢复金本位的最后希望。" },
];

// Scene 11: SummaryScene (30s = 900帧, 全局偏移 18900)
export const summarySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "Kennedy tried to reclaim monetary control,", translation: "★肯尼迪意图从美联储手中夺回货币发行权，" },
  { startFrame: 180, endFrame: 360, text: "and was assassinated for it.", translation: "剥夺国际银行家对美国的大部分影响力，这最终导致了他的遇刺身亡。" },
  { startFrame: 360, endFrame: 540, text: "Johnson abolished Silver Certificates after taking office.", translation: "★约翰逊上台后，废除了白银券的发行，同时大量抛售白银储备，" },
  { startFrame: 540, endFrame: 720, text: "ending silver's monetary role.", translation: "最终终结了白银货币。" },
  { startFrame: 720, endFrame: 900, text: "No president has dared to touch the gold standard since.", translation: "从此，再也没有一位美国总统敢动金本位的念头了。" },
];

// 合并所有字幕（保持全局帧偏移，用于兼容旧代码）
export const episode08Subtitles = [
  ...openingSubs.map(s => ({ ...s, startFrame: s.startFrame + 0, endFrame: s.endFrame + 0 })),
  ...kennedyAssassinationSubs.map(s => ({ ...s, startFrame: s.startFrame + 900, endFrame: s.endFrame + 900 })),
  ...motivationSubs.map(s => ({ ...s, startFrame: s.startFrame + 2700, endFrame: s.endFrame + 2700 })),
  ...silverHistorySubs.map(s => ({ ...s, startFrame: s.startFrame + 4500, endFrame: s.endFrame + 4500 })),
  ...silverStandardEndSubs.map(s => ({ ...s, startFrame: s.startFrame + 6300, endFrame: s.endFrame + 6300 })),
  ...kennedyDeathSubs.map(s => ({ ...s, startFrame: s.startFrame + 8100, endFrame: s.endFrame + 8100 })),
  ...goldPoolSubs.map(s => ({ ...s, startFrame: s.startFrame + 9900, endFrame: s.endFrame + 9900 })),
  ...sdrSubs.map(s => ({ ...s, startFrame: s.startFrame + 11700, endFrame: s.endFrame + 11700 })),
  ...nixonGoldSubs.map(s => ({ ...s, startFrame: s.startFrame + 13500, endFrame: s.endFrame + 13500 })),
  ...petrodollarSubs.map(s => ({ ...s, startFrame: s.startFrame + 15300, endFrame: s.endFrame + 15300 })),
  ...reaganSubs.map(s => ({ ...s, startFrame: s.startFrame + 17100, endFrame: s.endFrame + 17100 })),
  ...summarySubs.map(s => ({ ...s, startFrame: s.startFrame + 18900, endFrame: s.endFrame + 18900 })),
];

export default episode08Subtitles;
