import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export interface SubtitleEntry {
  startFrame: number;
  endFrame: number;
  text: string;
  translation?: string; // 中文翻译
}

interface SubtitlesProps {
  subtitles: SubtitleEntry[];
  offset?: number; // 全局偏移帧数（用于在 Sequence 中使用）
}

const subtitleStyle: React.CSSProperties = {
  fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  fontSize: 32,
  textAlign: "center",
  position: "absolute",
  bottom: 80,
  width: "100%",
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.7)",
  padding: "0 40px",
  boxSizing: "border-box",
};

const translationStyle: React.CSSProperties = {
  ...subtitleStyle,
  fontSize: 24,
  bottom: 40,
  color: "#d1d5db",
  fontStyle: "italic",
};

/**
 * Subtitles - 字幕组件
 *
 * 根据当前帧显示相应的字幕
 */
export const Subtitles: React.FC<SubtitlesProps> = ({
  subtitles,
  offset = 0,
}) => {
  const frame = useCurrentFrame();

  // 计算实际帧数（考虑偏移）
  const actualFrame = frame + offset;

  // 查找当前应该显示的字幕
  const currentSubtitle = subtitles.find(
    (sub) => actualFrame >= sub.startFrame && actualFrame < sub.endFrame,
  );

  if (!currentSubtitle) {
    return null;
  }

  // 计算淡入淡出效果
  const fadeInDuration = 15; // 帧数
  const fadeOutDuration = 15; // 帧数
  const duration = currentSubtitle.endFrame - currentSubtitle.startFrame;

  let opacity = 1;
  const timeInSubtitle = actualFrame - currentSubtitle.startFrame;

  if (timeInSubtitle < fadeInDuration) {
    opacity = interpolate(timeInSubtitle, [0, fadeInDuration], [0, 1]);
  } else if (timeInSubtitle > duration - fadeOutDuration) {
    opacity = interpolate(
      timeInSubtitle,
      [duration - fadeOutDuration, duration],
      [1, 0],
    );
  }

  return (
    <>
      <div style={{ ...subtitleStyle, opacity }}>{currentSubtitle.text}</div>
      {currentSubtitle.translation && (
        <div style={{ ...translationStyle, opacity }}>
          {currentSubtitle.translation}
        </div>
      )}
    </>
  );
};

/**
 * Episode01 字幕数据
 *
 * 基于《货币战争》序言内容重新设计
 * 总时长：8分钟（480秒 = 14400帧，假设30fps）
 */
export const episode01Subtitles: SubtitleEntry[] = [
  // 场景1: 古代集市 - 金币时代 (0-30s = 0-900帧)
  {
    startFrame: 0,
    endFrame: 120,
    text: "In the beginning, there was gold.",
    translation: "最初，只有黄金。",
  },
  {
    startFrame: 120,
    endFrame: 300,
    text: "Real money that cannot be printed at will.",
    translation: "真正的货币，无法随意印制。",
  },
  {
    startFrame: 300,
    endFrame: 480,
    text: "For thousands of years, gold and silver served as honest money.",
    translation: "数千年来，金银作为诚实的货币。",
  },
  {
    startFrame: 480,
    endFrame: 660,
    text: "Until... something changed.",
    translation: "直到……事情发生了变化。",
  },
  {
    startFrame: 660,
    endFrame: 900,
    text: "The birth of paper receipts.",
    translation: "纸币收据的诞生。",
  },

  // 场景2: 中国崛起 - 经济航母 (30-90s = 900-2700帧)
  {
    startFrame: 900,
    endFrame: 1080,
    text: "2006. A prophecy written at China's rise.",
    translation: "2006年。一篇预言写在中国崛起之时。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "China's economic aircraft carrier has set sail.",
    translation: "中国的经济航母已经起航。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "Amazing speed. Unprecedented growth.",
    translation: "惊人的速度。前所未有的增长。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "The world watches in awe.",
    translation: "世界瞩目。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "But will the journey be smooth?",
    translation: "但航程会一帆风顺吗？",
  },
  {
    startFrame: 1800,
    endFrame: 1980,
    text: "What unseen dangers lie beneath the surface?",
    translation: "水面之下潜伏着什么看不见的危险？",
  },
  {
    startFrame: 1980,
    endFrame: 2160,
    text: "The greatest threat may not come from military confrontation.",
    translation: "最大的威胁可能并非来自军事对抗。",
  },
  {
    startFrame: 2160,
    endFrame: 2340,
    text: "But from an invisible battlefield.",
    translation: "而是来自一个看不见的战场。",
  },
  {
    startFrame: 2340,
    endFrame: 2700,
    text: "Where money becomes a weapon of mass destruction.",
    translation: "在那里，金钱成为大规模杀伤性武器。",
  },

  // 场景3: 看不见的战场 (90-150s = 2700-4500帧)
  {
    startFrame: 2700,
    endFrame: 2880,
    text: "The author warned us in 2006...",
    translation: "作者在2006年就警告我们……",
  },
  {
    startFrame: 2880,
    endFrame: 3060,
    text: "China has joined the WTO.",
    translation: "中国加入了世界贸易组织。",
  },
  {
    startFrame: 3060,
    endFrame: 3240,
    text: "Financial markets are opening to foreign capital.",
    translation: "金融市场正对外资全面开放。",
  },
  {
    startFrame: 3240,
    endFrame: 3420,
    text: "But are we ready for what comes next?",
    translation: "但我们为接下来的一切做好准备了吗？",
  },
  {
    startFrame: 3420,
    endFrame: 3600,
    text: "Financial derivatives. Hedge funds. Hot money flows.",
    translation: "金融衍生工具。对冲基金。热钱流动。",
  },
  {
    startFrame: 3600,
    endFrame: 3780,
    text: "Invisible weapons. No smoke. No fire.",
    translation: "看不见的武器。没有硝烟。没有战火。",
  },
  {
    startFrame: 3780,
    endFrame: 3960,
    text: "Just the silent destruction of wealth.",
    translation: "只有财富的无声毁灭。",
  },
  {
    startFrame: 3960,
    endFrame: 4140,
    text: "Can China's financial system withstand such an attack?",
    translation: "中国的金融体系能抵御这样的攻击吗？",
  },
  {
    startFrame: 4140,
    endFrame: 4320,
    text: "The risk is even greater than military invasion.",
    translation: "这种风险甚至比军事入侵更可怕。",
  },
  {
    startFrame: 4320,
    endFrame: 4500,
    text: "Because financial war strikes at the very heart of a nation.",
    translation: "因为金融战直击一个国家的心脏。",
  },

  // 场景4: 历史教训 (150-210s = 4500-6300帧)
  {
    startFrame: 4500,
    endFrame: 4680,
    text: "History offers chilling precedents...",
    translation: "历史提供了令人胆寒的先例……",
  },
  {
    startFrame: 4680,
    endFrame: 4860,
    text: "1991. The Soviet Union collapsed.",
    translation: "1991年。苏联解体。",
  },
  {
    startFrame: 4860,
    endFrame: 5040,
    text: "The world's largest empire dismantled without a single shot.",
    translation: "世界最大的帝国在没有发射一颗子弹的情况下瓦解。",
  },
  {
    startFrame: 5040,
    endFrame: 5220,
    text: "Was it just political failure?",
    translation: "这只是政治失败吗？",
  },
  {
    startFrame: 5220,
    endFrame: 5400,
    text: "Or a carefully orchestrated financial attack?",
    translation: "还是一场精心策划的金融攻击？",
  },
  {
    startFrame: 5400,
    endFrame: 5580,
    text: "1997. The Asian Financial Crisis.",
    translation: "1997年。亚洲金融风暴。",
  },
  {
    startFrame: 5580,
    endFrame: 5760,
    text: "The Four Asian Tigers brought to their knees overnight.",
    translation: "亚洲四小龙一夜之间俯首称臣。",
  },
  {
    startFrame: 5760,
    endFrame: 5940,
    text: "Decades of prosperity wiped out in days.",
    translation: "数十年的繁荣在几天内化为乌有。",
  },
  {
    startFrame: 5940,
    endFrame: 6120,
    text: "Japan's Lost Decade that never ended.",
    translation: "日本失去的十年，至今未曾结束。",
  },
  {
    startFrame: 6120,
    endFrame: 6300,
    text: "Who was really behind these events?",
    translation: "这些事件的真正幕后推手是谁？",
  },

  // 场景5: 货币演变 (210-270s = 6300-8100帧)
  {
    startFrame: 6300,
    endFrame: 6480,
    text: "To understand, we must look at money itself.",
    translation: "要理解这些，我们必须审视货币本身。",
  },
  {
    startFrame: 6480,
    endFrame: 6660,
    text: "Goldsmiths began issuing paper receipts for gold deposits.",
    translation: "金匠开始为黄金存储发行纸币收据。",
  },
  {
    startFrame: 6660,
    endFrame: 6840,
    text: "People found it easier to trade paper than carry heavy gold.",
    translation: "人们发现交易纸币比携带沉重的黄金更容易。",
  },
  {
    startFrame: 6840,
    endFrame: 7020,
    text: "But then, the goldsmiths made a discovery...",
    translation: "但随后，金匠们有了一个发现……",
  },
  {
    startFrame: 7020,
    endFrame: 7200,
    text: "People rarely redeemed all their gold at once.",
    translation: "人们很少一次赎回所有黄金。",
  },
  {
    startFrame: 7200,
    endFrame: 7380,
    text: "So they could lend out paper that wasn't backed by real gold.",
    translation: "所以他们可以借出没有真实黄金支持的纸币。",
  },
  {
    startFrame: 7380,
    endFrame: 7560,
    text: "This was the birth of fractional reserve banking.",
    translation: "这是部分准备金银行制度的诞生。",
  },
  {
    startFrame: 7560,
    endFrame: 7740,
    text: "And the beginning of money's corruption.",
    translation: "也是货币腐败的开始。",
  },
  {
    startFrame: 7740,
    endFrame: 7920,
    text: "Today, this system has evolved into pure fiat currency.",
    translation: "今天，这个系统已演变为纯粹的法定货币。",
  },
  {
    startFrame: 7920,
    endFrame: 8100,
    text: "Money backed by nothing but government decree.",
    translation: "货币除了政府法令外没有任何支撑。",
  },

  // 场景6: 历史时间线 (270-330s = 8100-9900帧)
  {
    startFrame: 8100,
    endFrame: 8280,
    text: "Let's look at how we got here.",
    translation: "让我们看看我们是如何走到这一步的。",
  },
  {
    startFrame: 8280,
    endFrame: 8460,
    text: "1694: Bank of England founded.",
    translation: "1694年：英格兰银行成立。",
  },
  {
    startFrame: 8460,
    endFrame: 8640,
    text: "The first central bank to issue paper money.",
    translation: "第一家发行纸币的中央银行。",
  },
  {
    startFrame: 8640,
    endFrame: 8820,
    text: "1913: The Federal Reserve created in America.",
    translation: "1913年：美联储在美国建立。",
  },
  {
    startFrame: 8820,
    endFrame: 9000,
    text: "A private corporation controlling US money supply.",
    translation: "一家控制美国货币供应的私人公司。",
  },
  {
    startFrame: 9000,
    endFrame: 9180,
    text: "1971: Nixon ends dollar's convertibility to gold.",
    translation: "1971年：尼克松结束美元与黄金的兑换。",
  },
  {
    startFrame: 9180,
    endFrame: 9360,
    text: "The world enters the era of pure fiat money.",
    translation: "世界进入纯粹法定货币时代。",
  },
  {
    startFrame: 9360,
    endFrame: 9540,
    text: "And the beginning of endless money printing.",
    translation: "也是无休止印钞的开始。",
  },
  {
    startFrame: 9540,
    endFrame: 9720,
    text: "The hidden hands took control.",
    translation: "看不见的手开始掌控一切。",
  },
  {
    startFrame: 9720,
    endFrame: 9900,
    text: "War had already begun. Without a single shot.",
    translation: "战争已经开始。没有发射一颗子弹。",
  },

  // 场景7: 债务螺旋 (330-390s = 9900-11700帧)
  {
    startFrame: 9900,
    endFrame: 10080,
    text: "Today, every dollar in existence is debt.",
    translation: "今天，存在的每一美元都是债务。",
  },
  {
    startFrame: 10080,
    endFrame: 10260,
    text: "Created when someone borrows from a bank.",
    translation: "当有人从银行借款时被创造出来。",
  },
  {
    startFrame: 10260,
    endFrame: 10440,
    text: "And destroyed when the loan is repaid.",
    translation: "当贷款被偿还时被消灭。",
  },
  {
    startFrame: 10440,
    endFrame: 10620,
    text: "This system requires perpetual debt growth.",
    translation: "这个系统需要永久的债务增长。",
  },
  {
    startFrame: 10620,
    endFrame: 10800,
    text: "Or the entire money supply collapses.",
    translation: "否则整个货币供应就会崩溃。",
  },
  {
    startFrame: 10800,
    endFrame: 10980,
    text: "Global debt now exceeds 300 trillion dollars.",
    translation: "全球债务现已超过300万亿美元。",
  },
  {
    startFrame: 10980,
    endFrame: 11160,
    text: "And it continues growing exponentially.",
    translation: "并且呈指数级持续增长。",
  },
  {
    startFrame: 11160,
    endFrame: 11340,
    text: "A spiral that cannot end well.",
    translation: "一个结局不会好的螺旋。",
  },
  {
    startFrame: 11340,
    endFrame: 11700,
    text: "China's 1 trillion dollar reserves. Are they safe?",
    translation: "中国的一万亿美元外汇储备。它们安全吗？",
  },

  // 场景8: 通货膨胀 (390-450s = 11700-13500帧)
  {
    startFrame: 11700,
    endFrame: 11880,
    text: "But what does all this mean for you?",
    translation: "但这一切对你意味着什么？",
  },
  {
    startFrame: 11880,
    endFrame: 12060,
    text: "It means inflation is not an accident.",
    translation: "这意味着通货膨胀不是意外。",
  },
  {
    startFrame: 12060,
    endFrame: 12240,
    text: "It's a built-in feature of the debt money system.",
    translation: "它是债务货币系统的内置特征。",
  },
  {
    startFrame: 12240,
    endFrame: 12420,
    text: "Your money loses value every single year.",
    translation: "你的钱每年都在贬值。",
  },
  {
    startFrame: 12420,
    endFrame: 12600,
    text: "Since 1971, the dollar has lost over 85% of its purchasing power.",
    translation: "自1971年以来，美元已损失超过85%的购买力。",
  },
  {
    startFrame: 12600,
    endFrame: 12780,
    text: "What cost $100 then costs over $700 today.",
    translation: "当时100美元的东西现在要700多美元。",
  },
  {
    startFrame: 12780,
    endFrame: 12960,
    text: "This silent theft happens while you sleep.",
    translation: "这种无声的盗窃在你睡觉时发生。",
  },
  {
    startFrame: 12960,
    endFrame: 13140,
    text: "And most people never notice.",
    translation: "大多数人从未察觉。",
  },
  {
    startFrame: 13140,
    endFrame: 13320,
    text: "The author asked in 2006...",
    translation: "作者在2006年就问道……",
  },
  {
    startFrame: 13320,
    endFrame: 13500,
    text: "Can China's 'peaceful rise' survive this system?",
    translation: "中国的和平崛起能在这个系统中生存吗？",
  },

  // 场景9: 结尾警示 (450-480s = 13500-14400帧)
  {
    startFrame: 13500,
    endFrame: 13680,
    text: "This is not just history.",
    translation: "这不仅仅是历史。",
  },
  {
    startFrame: 13680,
    endFrame: 13860,
    text: "It's a warning for China's future.",
    translation: "这是对中国未来的警示。",
  },
  {
    startFrame: 13860,
    endFrame: 14040,
    text: "The book exposes the hidden hands behind 250 years of financial war.",
    translation: "本书揭示了250年金融战争背后的黑手。",
  },
  {
    startFrame: 14040,
    endFrame: 14220,
    text: "Understanding the game is the first step to survival.",
    translation: "理解游戏规则是生存的第一步。",
  },
  {
    startFrame: 14220,
    endFrame: 14400,
    text: "The war has already begun. Though we see no smoke.",
    translation: "战争已经开始，虽然看不见硝烟。",
  },
];

/**
 * Episode02 字幕数据 - 第一章：罗斯柴尔德家族："大道无形"的世界首富
 *
 * 基于《货币战争》第一章内容设计
 * 总时长：13分钟（780秒 = 23400帧，假设30fps）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 大道无形的世界首富
 * 2. [30-90s] 罗斯柴尔德家族简介
 * 3. [90-150s] 滑铁卢战役 - 前奏
 * 4. [150-210s] 情报网 - 先人一步
 * 5. [210-270s] 交易所操盘 - 假情报
 * 6. [270-330s] 20倍收益 - 真相揭晓
 * 7. [330-390s] 五兄弟欧洲布局
 * 8. [390-450s] 时代背景 - 英格兰银行
 * 9. [450-510s] 老罗斯柴尔德的第一桶金
 * 10. [510-570s] 内森主宰伦敦金融城
 * 11. [570-630s] 詹姆斯征服法兰西
 * 12. [630-690s] 所罗门问鼎奥地利
 * 13. [690-750s] 金融帝国全盛
 * 14. [750-780s] 总结
 */
export const episode02Subtitles: SubtitleEntry[] = [
  // 场景1: 开场 - 大道无形的世界首富 (0-30s = 0-900帧)
  {
    startFrame: 0,
    endFrame: 150,
    text: "Episode 2: The Rothschild Family",
    translation: "第二集：罗斯柴尔德家族",
  },
  {
    startFrame: 150,
    endFrame: 300,
    text: '"Let me issue and control a nation\'s money, and I care not who writes its laws."',
    translation: '"只要我能控制一个国家的货币发行，我不在乎谁制定法律。"',
  },
  {
    startFrame: 300,
    endFrame: 450,
    text: "— Mayer Amschel Rothschild",
    translation: "—— 梅耶·罗斯柴尔德",
  },
  {
    startFrame: 450,
    endFrame: 600,
    text: "When media talks about the world's richest people...",
    translation: "当媒体谈论世界首富时……",
  },
  {
    startFrame: 600,
    endFrame: 750,
    text: "They mention Bill Gates, Elon Musk, Jeff Bezos...",
    translation: "他们提到比尔·盖茨、埃隆·马斯克、杰夫·贝佐斯……",
  },
  {
    startFrame: 750,
    endFrame: 900,
    text: "But the truly wealthy remain invisible.",
    translation: "但真正的富人却隐形于世。",
  },

  // 场景2: 罗斯柴尔德家族简介 (30-90s = 900-2700帧)
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Who is Rothschild?",
    translation: "谁是罗斯柴尔德？",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "If you work in finance and don't know this name...",
    translation: "如果你从事金融行业却不知道这个名字……",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "It's like a soldier not knowing Napoleon.",
    translation: "就像军人不知道拿破仑一样不可思议。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "Yet to most Chinese people, this name is virtually unknown.",
    translation: "然而对大多数中国人来说，这个名字却几乎无人知晓。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: '"The great hermits hide in the royal court."',
    translation: '"大隐，隐于朝。"',
  },
  {
    startFrame: 1800,
    endFrame: 1980,
    text: "Ask 100 people on Beijing's streets...",
    translation: "在北京街头随机问100个人……",
  },
  {
    startFrame: 1980,
    endFrame: 2160,
    text: "99 know Citibank. Maybe 1 knows Rothschild Bank.",
    translation: "99个知道花旗银行。也许有1个知道罗斯柴尔德银行。",
  },
  {
    startFrame: 2160,
    endFrame: 2340,
    text: "How much wealth does the Rothschild family have?",
    translation: "罗斯柴尔德家族究竟拥有多少财富？",
  },
  {
    startFrame: 2340,
    endFrame: 2520,
    text: "A conservative estimate: 30 trillion US dollars.",
    translation: "保守估计：30万亿美元。",
  },
  {
    startFrame: 2520,
    endFrame: 2700,
    text: "How did they amass such astronomical wealth?",
    translation: "他们是如何积累如此惊人的财富的？",
  },

  // 场景3: 滑铁卢战役 - 前奏 (90-150s = 2700-4500帧)
  {
    startFrame: 2700,
    endFrame: 2880,
    text: "Our story begins on June 18, 1815.",
    translation: "我们的故事从1815年6月18日开始。",
  },
  {
    startFrame: 2880,
    endFrame: 3060,
    text: "The Battle of Waterloo.",
    translation: "滑铁卢战役。",
  },
  {
    startFrame: 3060,
    endFrame: 3240,
    text: "Napoleon versus Wellington.",
    translation: "拿破仑对阵威灵顿。",
  },
  {
    startFrame: 3240,
    endFrame: 3420,
    text: "The fate of Europe hung in the balance.",
    translation: "欧洲的命运悬于一线。",
  },
  {
    startFrame: 3420,
    endFrame: 3600,
    text: "If Napoleon won, France would dominate Europe.",
    translation: "如果拿破仑赢了，法国将主宰欧洲。",
  },
  {
    startFrame: 3600,
    endFrame: 3780,
    text: "If Wellington won, Britain would lead.",
    translation: "如果威灵顿赢了，英国将主导。",
  },
  {
    startFrame: 3780,
    endFrame: 3960,
    text: "In London, investors waited frantically.",
    translation: "在伦敦，投资者焦急地等待着。",
  },
  {
    startFrame: 3960,
    endFrame: 4140,
    text: "British bonds would soar or crash based on the result.",
    translation: "英国公债将根据结果飙升或崩盘。",
  },
  {
    startFrame: 4140,
    endFrame: 4320,
    text: "Fortunes would be made. Or lost.",
    translation: "财富将被创造。或者毁灭。",
  },
  {
    startFrame: 4320,
    endFrame: 4500,
    text: "But one man already knew the outcome...",
    translation: "但有一个人已经知道了结果……",
  },

  // 场景4: 情报网 - 先人一步 (150-210s = 4500-6300帧)
  {
    startFrame: 4500,
    endFrame: 4680,
    text: "Nathan Rothschild, third son of Mayer Rothschild.",
    translation: "内森·罗斯柴尔德，梅耶的第三个儿子。",
  },
  {
    startFrame: 4680,
    endFrame: 4860,
    text: "A banker of extraordinary courage and calculation.",
    translation: "一位非凡勇气和算计的银行家。",
  },
  {
    startFrame: 4860,
    endFrame: 5040,
    text: "Since before the war, the Rothschilds had built something unprecedented...",
    translation: "战前，罗斯柴尔德家族就已经建立了前所未有的东西……",
  },
  {
    startFrame: 5040,
    endFrame: 5220,
    text: "Their own intelligence network.",
    translation: "他们自己的情报网络。",
  },
  {
    startFrame: 5220,
    endFrame: 5400,
    text: "Secret agents across every European capital.",
    translation: "遍布每个欧洲首都的秘密特工。",
  },
  {
    startFrame: 5400,
    endFrame: 5580,
    text: "Faster than any official messenger system.",
    translation: "比任何官方信使系统都快。",
  },
  {
    startFrame: 5580,
    endFrame: 5760,
    text: '"Rothschild\'s carriages on every road..."',
    translation: '"罗斯柴尔德的马车在每条公路上……"',
  },
  {
    startFrame: 5760,
    endFrame: 5940,
    text: '"Rothschild\'s ships across every channel..."',
    translation: '"罗斯柴尔德的船只在每条海峡中……"',
  },
  {
    startFrame: 5940,
    endFrame: 6120,
    text: '"Rothschild\'s spies in every city street..."',
    translation: '"罗斯柴尔德的间谍在每条城市街道上……"',
  },
  {
    startFrame: 6120,
    endFrame: 6300,
    text: "But no message was as precious as Waterloo.",
    translation: "但没有任何消息比滑铁卢更珍贵。",
  },

  // 场景5: 交易所操盘 - 假情报 (210-270s = 6300-8100帧)
  {
    startFrame: 6300,
    endFrame: 6480,
    text: "June 19, 1815. Early morning.",
    translation: "1815年6月19日。清晨。",
  },
  {
    startFrame: 6480,
    endFrame: 6660,
    text: "Nathan Rothschild's messenger arrived in England.",
    translation: "内森·罗斯柴尔德的信使抵达英国。",
  },
  {
    startFrame: 6660,
    endFrame: 6840,
    text: "With news: Napoleon had been defeated.",
    translation: "带着消息：拿破仑被打败了。",
  },
  {
    startFrame: 6840,
    endFrame: 7020,
    text: "A full day before official news would reach London.",
    translation: "比官方消息到达伦敦早了整整一天。",
  },
  {
    startFrame: 7020,
    endFrame: 7200,
    text: "Nathan rode straight to the stock exchange.",
    translation: "内森直奔证券交易所。",
  },
  {
    startFrame: 7200,
    endFrame: 7380,
    text: "His face was expressionless. Unreadable.",
    translation: "他的表情毫无波澜。高深莫测。",
  },
  {
    startFrame: 7380,
    endFrame: 7560,
    text: "Everyone watched him, waiting for any sign.",
    translation: "所有人看着他，等待任何迹象。",
  },
  {
    startFrame: 7560,
    endFrame: 7740,
    text: "Then, he gave a signal to his traders...",
    translation: "然后，他向他的交易员发出了信号……",
  },
  {
    startFrame: 7740,
    endFrame: 7920,
    text: "They began selling. Everything.",
    translation: "他们开始抛售。抛售一切。",
  },
  {
    startFrame: 7920,
    endFrame: 8100,
    text: "British bonds crashed. Panic spread like wildfire.",
    translation: "英国公债崩盘。恐慌像野火一样蔓延。",
  },

  // 场景6: 20倍收益 - 真相揭晓 (270-330s = 8100-9900帧)
  {
    startFrame: 8100,
    endFrame: 8280,
    text: '"Rothschild knows! Wellington has lost!"',
    translation: '"罗斯柴尔德知道了！威灵顿输了！"',
  },
  {
    startFrame: 8280,
    endFrame: 8460,
    text: "The panic selling was catastrophic.",
    translation: "恐慌性抛售是灾难性的。",
  },
  {
    startFrame: 8460,
    endFrame: 8640,
    text: "British bonds fell to 5% of their value.",
    translation: "英国公债跌至面值的5%。",
  },
  {
    startFrame: 8640,
    endFrame: 8820,
    text: "Then, Nathan gave another signal...",
    translation: "然后，内森发出了另一个信号……",
  },
  {
    startFrame: 8820,
    endFrame: 9000,
    text: "His agents began buying. Everything.",
    translation: "他的代理开始买进。买进一切。",
  },
  {
    startFrame: 9000,
    endFrame: 9180,
    text: "Every single bond they could acquire.",
    translation: "他们能买到的每一张债券。",
  },
  {
    startFrame: 9180,
    endFrame: 9360,
    text: "When official news finally arrived the next day...",
    translation: "当官方消息第二天终于到达时……",
  },
  {
    startFrame: 9360,
    endFrame: 9540,
    text: "Wellington had won. British bonds soared.",
    translation: "威灵顿赢了。英国公债飙升。",
  },
  {
    startFrame: 9540,
    endFrame: 9720,
    text: "Nathan Rothschild now owned them all.",
    translation: "内森·罗斯柴尔德拥有了所有债券。",
  },
  {
    startFrame: 9720,
    endFrame: 9900,
    text: "His wealth multiplied 20 times in a single day.",
    translation: "他的财富在一天内增长了20倍。",
  },

  // 场景7: 五兄弟欧洲布局 (330-390s = 9900-11700帧)
  {
    startFrame: 9900,
    endFrame: 10080,
    text: "This was no accident.",
    translation: "这绝非偶然。",
  },
  {
    startFrame: 10080,
    endFrame: 10260,
    text: "Mayer Rothschild had sent five sons to five cities.",
    translation: "梅耶·罗斯柴尔德将五个儿子派往五个城市。",
  },
  {
    startFrame: 10260,
    endFrame: 10440,
    text: "Amschel in Frankfurt - the family base.",
    translation: "阿姆斯洛在法兰克福——家族基地。",
  },
  {
    startFrame: 10440,
    endFrame: 10620,
    text: "Salomon in Vienna - Austria.",
    translation: "所罗门在维也纳——奥地利。",
  },
  {
    startFrame: 10620,
    endFrame: 10800,
    text: "Nathan in London - England.",
    translation: "内森在伦敦——英国。",
  },
  {
    startFrame: 10800,
    endFrame: 10980,
    text: "Carl in Naples - Italy.",
    translation: "卡尔在那不勒斯——意大利。",
  },
  {
    startFrame: 10980,
    endFrame: 11160,
    text: "James in Paris - France.",
    translation: "詹姆斯在巴黎——法国。",
  },
  {
    startFrame: 11160,
    endFrame: 11340,
    text: "The world's first international banking group.",
    translation: "世界上第一个国际银行集团。",
  },
  {
    startFrame: 11340,
    endFrame: 11520,
    text: "Coordinated like clockwork.",
    translation: "像钟表一样精确协调。",
  },
  {
    startFrame: 11520,
    endFrame: 11700,
    text: "Always ahead of the market. Always ahead of the news.",
    translation: "永远领先市场。永远领先消息。",
  },

  // 场景8: 时代背景 - 英格兰银行 (390-450s = 11700-13500帧)
  {
    startFrame: 11700,
    endFrame: 11880,
    text: "To understand the Rothschilds...",
    translation: "要理解罗斯柴尔德家族……",
  },
  {
    startFrame: 11880,
    endFrame: 12060,
    text: "We must understand the world they operated in.",
    translation: "我们必须理解他们所处的世界。",
  },
  {
    startFrame: 12060,
    endFrame: 12240,
    text: "1694. The Bank of England was founded.",
    translation: "1694年。英格兰银行成立。",
  },
  {
    startFrame: 12240,
    endFrame: 12420,
    text: "A private corporation granted the power to issue money.",
    translation: "一家获准发行货币的私人公司。",
  },
  {
    startFrame: 12420,
    endFrame: 12600,
    text: "In exchange for a loan to the king.",
    translation: "作为给国王贷款的交换。",
  },
  {
    startFrame: 12600,
    endFrame: 12780,
    text: "The king's debt became the nation's permanent debt.",
    translation: "国王的债务变成了国家的永久债务。",
  },
  {
    startFrame: 12780,
    endFrame: 12960,
    text: "Backed by taxpayers' money forever.",
    translation: "永远由纳税人的钱支撑。",
  },
  {
    startFrame: 12960,
    endFrame: 13140,
    text: "The system was a trap.",
    translation: "这个系统是一个陷阱。",
  },
  {
    startFrame: 13140,
    endFrame: 13320,
    text: "New money could only be created by increasing debt.",
    translation: "新货币只能通过增加债务来创造。",
  },
  {
    startFrame: 13320,
    endFrame: 13500,
    text: "Paying off debt would destroy the money supply.",
    translation: "偿还债务会摧毁货币供应。",
  },

  // 场景9: 老罗斯柴尔德的第一桶金 (450-510s = 13500-15300帧)
  {
    startFrame: 13500,
    endFrame: 13680,
    text: "Mayer Amschel Rothschild was born in 1744.",
    translation: "梅耶·罗斯柴尔德出生于1744年。",
  },
  {
    startFrame: 13680,
    endFrame: 13860,
    text: "The son of a traveling goldsmith and moneylender.",
    translation: "一个巡回金匠和放贷人的儿子。",
  },
  {
    startFrame: 13860,
    endFrame: 14040,
    text: "At age 13, he became a banking apprentice.",
    translation: "13岁时，他成为了一名银行学徒。",
  },
  {
    startFrame: 14040,
    endFrame: 14220,
    text: "He learned a revolutionary idea from English banking...",
    translation: "他从英国银行学到了一个革命性的理念……",
  },
  {
    startFrame: 14220,
    endFrame: 14400,
    text: "Lending to kings and governments was safer and more profitable.",
    translation: "借钱给国王和政府更安全也更有利可图。",
  },
  {
    startFrame: 14400,
    endFrame: 14580,
    text: "He returned to Frankfurt and built connections with nobility.",
    translation: "他回到法兰克福，与贵族建立了关系。",
  },
  {
    startFrame: 14580,
    endFrame: 14760,
    text: "Using rare coins to gain access to royal courts.",
    translation: "用稀有硬币获得进入王室宫廷的途径。",
  },
  {
    startFrame: 14760,
    endFrame: 14940,
    text: "Prince William of Hesse trusted him with his fortune.",
    translation: "黑森-卡塞尔的威廉王子将财富托付给他。",
  },
  {
    startFrame: 14940,
    endFrame: 15120,
    text: "When Napoleon invaded, William fled...",
    translation: "当拿破仑入侵时，威廉逃跑了……",
  },
  {
    startFrame: 15120,
    endFrame: 15300,
    text: "Leaving 3 million dollars in Rothschild's care.",
    translation: "留下300万美元由罗斯柴尔德保管。",
  },

  // 场景10: 内森主宰伦敦金融城 (510-570s = 15300-17100帧)
  {
    startFrame: 15300,
    endFrame: 15480,
    text: "That 3 million dollars became the foundation.",
    translation: "那300万美元成为了基石。",
  },
  {
    startFrame: 15480,
    endFrame: 15660,
    text: "Nathan took the funds to London in 1798.",
    translation: "内森于1798年带着资金前往伦敦。",
  },
  {
    startFrame: 15660,
    endFrame: 15840,
    text: "He began by smuggling goods between England and France.",
    translation: "他开始在英国和法国之间走私货物。",
  },
  {
    startFrame: 15840,
    endFrame: 16020,
    text: "Profiting from the war blockade.",
    translation: "从战争封锁中获利。",
  },
  {
    startFrame: 16020,
    endFrame: 16200,
    text: "Then he learned: Wellington's army in Spain needed gold.",
    translation: "然后他得知：威灵顿在西班牙的军队需要黄金。",
  },
  {
    startFrame: 16200,
    endFrame: 16380,
    text: "Nathan bought 800,000 pounds of gold from the East India Company.",
    translation: "内森从东印度公司购买了80万英镑的黄金。",
  },
  {
    startFrame: 16380,
    endFrame: 16560,
    text: "Then offered to transport it through France to Spain.",
    translation: "然后提出将其通过法国运送到西班牙。",
  },
  {
    startFrame: 16560,
    endFrame: 16740,
    text: "The French government actually protected the shipment!",
    translation: "法国政府竟然保护了这批货物！",
  },
  {
    startFrame: 16740,
    endFrame: 16920,
    text: "In Paris, the gold was quietly exchanged for coins...",
    translation: "在巴黎，黄金被悄悄兑换成金币……",
  },
  {
    startFrame: 16920,
    endFrame: 17100,
    text: "And delivered to Wellington's army through Rothschild's network.",
    translation: "通过罗斯柴尔德的网络送到威灵顿的军队。",
  },

  // 场景11: 詹姆斯征服法兰西 (570-630s = 17100-18900帧)
  {
    startFrame: 17100,
    endFrame: 17280,
    text: "James Rothschild, the fifth son, was sent to Paris.",
    translation: "第五个儿子詹姆斯被派往巴黎。",
  },
  {
    startFrame: 17280,
    endFrame: 17460,
    text: "After Waterloo, France was in financial crisis.",
    translation: "滑铁卢之后，法国陷入财政危机。",
  },
  {
    startFrame: 17460,
    endFrame: 17640,
    text: "The French government needed loans.",
    translation: "法国政府需要贷款。",
  },
  {
    startFrame: 17640,
    endFrame: 17820,
    text: "But French aristocrats looked down on the Rothschilds.",
    translation: "但法国贵族看不起罗斯柴尔德家族。",
  },
  {
    startFrame: 17820,
    endFrame: 18000,
    text: '"These are just upstart commoners," they sneered.',
    translation: '"这些只是暴发户，"他们嘲笑道。',
  },
  {
    startFrame: 18000,
    endFrame: 18180,
    text: "James had a plan...",
    translation: "詹姆斯有一个计划……",
  },
  {
    startFrame: 18180,
    endFrame: 18360,
    text: "The Rothschilds began buying French bonds across Europe.",
    translation: "罗斯柴尔德家族开始在欧洲各地买入法国债券。",
  },
  {
    startFrame: 18360,
    endFrame: 18540,
    text: "Prices rose steadily.",
    translation: "价格稳步上涨。",
  },
  {
    startFrame: 18540,
    endFrame: 18720,
    text: "Then suddenly... they dumped everything at once.",
    translation: "然后突然……他们一次性全部抛售。",
  },
  {
    startFrame: 18720,
    endFrame: 18900,
    text: "French bonds collapsed. The government was desperate.",
    translation: "法国债券崩盘。政府绝望了。",
  },

  // 场景12: 所罗门问鼎奥地利 (630-690s = 18900-20700帧)
  {
    startFrame: 18900,
    endFrame: 19080,
    text: "Who could save France's economy?",
    translation: "谁能拯救法国的经济？",
  },
  {
    startFrame: 19080,
    endFrame: 19260,
    text: "Only one family had enough capital.",
    translation: "只有一个家族有足够的资本。",
  },
  {
    startFrame: 19260,
    endFrame: 19440,
    text: "James Rothschild rode to the rescue.",
    translation: "詹姆斯·罗斯柴尔德前来救援。",
  },
  {
    startFrame: 19440,
    endFrame: 19620,
    text: "The French government was now in his debt.",
    translation: "法国政府现在欠他的情了。",
  },
  {
    startFrame: 19620,
    endFrame: 19800,
    text: "Meanwhile, Salomon conquered Vienna...",
    translation: "与此同时，所罗门征服了维也纳……",
  },
  {
    startFrame: 19800,
    endFrame: 19980,
    text: "Through Prince Metternich, Austria's powerful chancellor.",
    translation: "通过奥地利强大的宰相梅特涅亲王。",
  },
  {
    startFrame: 19980,
    endFrame: 20160,
    text: "Salomon became the Habsburg court's favorite banker.",
    translation: "所罗门成为哈布斯堡宫廷最宠爱的银行家。",
  },
  {
    startFrame: 20160,
    endFrame: 20340,
    text: "Financing Austrian military adventures across Europe.",
    translation: "资助奥地利在欧洲各地的军事冒险。",
  },
  {
    startFrame: 20340,
    endFrame: 20520,
    text: "While Austria declined into debt...",
    translation: "随着奥地利陷入债务……",
  },
  {
    startFrame: 20520,
    endFrame: 20700,
    text: "Salomon's power only grew.",
    translation: "所罗门的权力只增不减。",
  },

  // 场景13: 金融帝国全盛 (690-750s = 20700-22500帧)
  {
    startFrame: 20700,
    endFrame: 20880,
    text: "By the mid-19th century...",
    translation: "到19世纪中叶……",
  },
  {
    startFrame: 20880,
    endFrame: 21060,
    text: "The Rothschilds controlled the money supply of Europe.",
    translation: "罗斯柴尔德家族控制了欧洲的货币供应。",
  },
  {
    startFrame: 21060,
    endFrame: 21240,
    text: "Britain. France. Germany. Austria. Italy.",
    translation: "英国。法国。德国。奥地利。意大利。",
  },
  {
    startFrame: 21240,
    endFrame: 21420,
    text: "Five brothers. Five hearts of European finance.",
    translation: "五兄弟。欧洲金融的五个心脏。",
  },
  {
    startFrame: 21420,
    endFrame: 21600,
    text: '"The kings and ministers of all nations listen to their teachings."',
    translation: '"所有国家的国王和部长都聆听他们的教诲。"',
  },
  {
    startFrame: 21600,
    endFrame: 21780,
    text: "They controlled gold prices across continents.",
    translation: "他们控制着各大洲的黄金价格。",
  },
  {
    startFrame: 21780,
    endFrame: 21960,
    text: "They invented the first international clearing system.",
    translation: "他们发明了第一个国际清算系统。",
  },
  {
    startFrame: 21960,
    endFrame: 22140,
    text: "Money moved without physical gold ever crossing borders.",
    translation: "资金流动无需实物黄金跨境。",
  },
  {
    startFrame: 22140,
    endFrame: 22320,
    text: "Sacred monarchy had been replaced by sacred wealth.",
    translation: "神圣的君权被神圣的金权所取代。",
  },
  {
    startFrame: 22320,
    endFrame: 22500,
    text: "The Rothschilds had become the true power behind the throne.",
    translation: "罗斯柴尔德家族已成为王座背后的真正权力。",
  },

  // 场景14: 总结 (750-780s = 22500-23400帧)
  {
    startFrame: 22500,
    endFrame: 22680,
    text: '"As long as you brothers remain united..."',
    translation: '"只要你们兄弟团结一致……"',
  },
  {
    startFrame: 22680,
    endFrame: 22860,
    text: '"No bank in the world can compete with you."',
    translation: '"世界上没有哪家银行能与你们竞争。"',
  },
  {
    startFrame: 22860,
    endFrame: 23040,
    text: "Strict family control. Total secrecy.",
    translation: "严格的家族控制。完全保密。",
  },
  {
    startFrame: 23040,
    endFrame: 23220,
    text: "Calculated risks. Cold rationality.",
    translation: "计算过的风险。冷酷的理性。",
  },
  {
    startFrame: 23220,
    endFrame: 23400,
    text: "They had built the largest financial empire in human history.",
    translation: "他们建立了人类历史上最大的金融帝国。",
  },
];

/**
 * Episode03 字幕数据
 *
 * 国际银行家和美国总统的百年战争
 * 基于《货币战争》第二章内容
 *
 * 总时长：约12分钟（720秒 = 21600帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-30s] 开场 - 林肯名言
 * 1. [30-80s] 殖民地货币与独立战争
 * 2. [80-140s] 第一银行战役
 * 3. [140-200s] 特许权到期
 * 4. [200-280s] 杰克逊银行战
 * 5. [280-340s] 独立财政系统
 * 6. [340-400s] 1857年恐慌
 * 7. [400-460s] 内战前奏
 * 8. [460-520s] 林肯的绿钞
 * 9. [520-580s] 俄国同盟
 * 10. [580-640s] 林肯刺杀
 * 11. [640-700s] 1863年国民银行法
 * 12. [700-720s] 总结
 */
export const episode03Subtitles: SubtitleEntry[] = [
  // 场景0: 开场 - 林肯名言 (0-30s = 帧 0-900)
  {
    startFrame: 0,
    endFrame: 300,
    text: "I have two great enemies: the Southern army in front of me, and the financial institutions behind me.",
    translation: "我有两个强大的敌人：我面前的南方军队，还有后面的金融机构。"
  },
  {
    startFrame: 300,
    endFrame: 600,
    text: "Of the two, the latter is the greatest threat.",
    translation: "在这两者之中，后者才是最大的威胁。"
  },
  {
    startFrame: 600,
    endFrame: 900,
    text: "— Abraham Lincoln, 1864",
    translation: "—— 亚伯拉罕·林肯，1864年"
  },

  // 场景1: 殖民地货币与独立战争 (30-80s = 帧 900-2400)
  {
    startFrame: 900,
    endFrame: 1140,
    text: "The prosperity of the American colonies was due to their own money.",
    translation: "美洲殖民地的繁荣归功于他们自己的货币。"
  },
  {
    startFrame: 1140,
    endFrame: 1380,
    text: "Colonial Script — debt-free money issued by colonial governments.",
    translation: "殖民券 — 殖民地政府发行的无债务货币。"
  },
  {
    startFrame: 1380,
    endFrame: 1620,
    text: "Benjamin Franklin: We issue our own money according to the demands of trade.",
    translation: "本杰明·富兰克林：我们根据贸易需求发行自己的货币。"
  },
  {
    startFrame: 1620,
    endFrame: 1860,
    text: "It creates no debt. Pays no interest.",
    translation: "它不产生债务。无需支付利息。"
  },
  {
    startFrame: 1860,
    endFrame: 2100,
    text: "1764: Britain passes the Currency Act. Bans colonial currency.",
    translation: "1764年：英国通过《货币法案》。禁止殖民地发行货币。"
  },
  {
    startFrame: 2100,
    endFrame: 2400,
    text: "Prosperity collapses. This became the primary cause of the American Revolution.",
    translation: "繁荣崩塌。这成为了美国独立战争的主要原因。"
  },

  // 场景2: 第一银行战役 (80-140s = 帧 2400-4200)
  {
    startFrame: 2400,
    endFrame: 2640,
    text: "1791: Alexander Hamilton proposes the First Bank of the United States.",
    translation: "1791年：亚历山大·汉密尔顿提议成立美国第一银行。"
  },
  {
    startFrame: 2640,
    endFrame: 2880,
    text: "Modeled after the Bank of England. Privately owned.",
    translation: "仿照英格兰银行模式。私人拥有。"
  },
  {
    startFrame: 2880,
    endFrame: 3120,
    text: "Thomas Jefferson: Banking institutions are more dangerous than standing armies.",
    translation: "托马斯·杰斐逊：银行机构比常备军更危险。"
  },
  {
    startFrame: 3120,
    endFrame: 3360,
    text: "But Hamilton prevails. 20-year charter granted.",
    translation: "但汉密尔顿胜出。获得20年特许权。"
  },
  {
    startFrame: 3360,
    endFrame: 3600,
    text: "Ownership: 70% foreign capital, 20% American, 10% government.",
    translation: "所有权：70%外国资本，20%美国资本，10%政府。"
  },
  {
    startFrame: 3600,
    endFrame: 3840,
    text: "By 1811, English bankers and Rothschilds owned 70% of the bank.",
    translation: "到1811年，英格兰银行家和罗斯柴尔德家族拥有70%的银行股份。"
  },
  {
    startFrame: 3840,
    endFrame: 4080,
    text: "The power to issue money... transferred from the people to private banks.",
    translation: "货币发行权……从人民手中转移到了私人银行。"
  },
  {
    startFrame: 4080,
    endFrame: 4200,
    text: "But the charter was about to expire.",
    translation: "但特许权即将到期。"
  },

  // 场景3: 特许权到期 (140-200s = 帧 4200-6000)
  {
    startFrame: 4200,
    endFrame: 4440,
    text: "1811: The First Bank's charter expires.",
    translation: "1811年：第一银行的特许权到期。"
  },
  {
    startFrame: 4440,
    endFrame: 4680,
    text: "House vote: 65 to 64 against renewal.",
    translation: "众议院投票：65票对64票，反对续期。"
  },
  {
    startFrame: 4680,
    endFrame: 4920,
    text: "Senate: 17 to 17 tie. Vice President breaks tie against renewal.",
    translation: "参议院：17票对17票。副总统打破僵局，反对续期。"
  },
  {
    startFrame: 4920,
    endFrame: 5160,
    text: "March 3, 1811: The First Bank dies.",
    translation: "1811年3月3日：第一银行死亡。"
  },
  {
    startFrame: 5160,
    endFrame: 5400,
    text: "A brief victory for American independence!",
    translation: "美国独立的一次短暂胜利！"
  },
  {
    startFrame: 5400,
    endFrame: 5640,
    text: "But Nathan Rothschild was furious.",
    translation: "但内森·罗斯柴尔德暴怒。"
  },
  {
    startFrame: 5640,
    endFrame: 5880,
    text: "Either the bank gets a new charter... or America will face war.",
    translation: "要么给银行新特许权……要么美国将面临战争。"
  },
  {
    startFrame: 5880,
    endFrame: 6000,
    text: "A few months later: The War of 1812 begins.",
    translation: "几个月后：1812年战争爆发。"
  },

  // 场景4: 杰克逊银行战 (200-280s = 帧 6000-8400)
  {
    startFrame: 6000,
    endFrame: 6240,
    text: "1816: The Second Bank is chartered. International bankers return.",
    translation: "1816年：第二银行获得特许权。国际银行家卷土重来。"
  },
  {
    startFrame: 6240,
    endFrame: 6480,
    text: "1828: Andrew Jackson becomes president.",
    translation: "1828年：安德鲁·杰克逊成为总统。"
  },
  {
    startFrame: 6480,
    endFrame: 6720,
    text: "Jackson: You are a den of vipers. I intend to rout you out.",
    translation: "杰克逊：你们是一群毒蛇。我打算把你们连根拔除。"
  },
  {
    startFrame: 6720,
    endFrame: 6960,
    text: "The Bank wants to kill me... but I will kill it!",
    translation: "银行想要杀了我……但我将杀死银行！"
  },
  {
    startFrame: 6960,
    endFrame: 7200,
    text: "1832: Jackson vetoes bank renewal. The people celebrate.",
    translation: "1832年：杰克逊否决银行续期。人民庆祝。"
  },
  {
    startFrame: 7200,
    endFrame: 7440,
    text: "1835: National debt reduced to ZERO for the first time in history.",
    translation: "1835年：国债首次降至零。"
  },
  {
    startFrame: 7440,
    endFrame: 7680,
    text: "1836: The Second Bank dies. Victory for the people!",
    translation: "1836年：第二银行死亡。人民的胜利！"
  },
  {
    startFrame: 7680,
    endFrame: 7920,
    text: "Jackson's tombstone: I killed the bank.",
    translation: "杰克逊的墓志铭：我杀死了银行。"
  },
  {
    startFrame: 7920,
    endFrame: 8160,
    text: "But in January 1835... an assassin attempts to kill Jackson.",
    translation: "但在1835年1月……一名刺客试图刺杀杰克逊。"
  },
  {
    startFrame: 8160,
    endFrame: 8400,
    text: "Both pistols misfire. A 1 in 125,000 probability of survival.",
    translation: "两把手枪都炸膛。生存概率仅为1/125000。"
  },

  // 场景5: 独立财政系统 (280-340s = 帧 8400-10200)
  {
    startFrame: 8400,
    endFrame: 8640,
    text: "1837: Martin Van Buren establishes the Independent Treasury System.",
    translation: "1837年：马丁·范布伦建立独立财政系统。"
  },
  {
    startFrame: 8640,
    endFrame: 8880,
    text: "A divorce between government money and private banks.",
    translation: "政府资金与私人银行分离。"
  },
  {
    startFrame: 8880,
    endFrame: 9120,
    text: "Government funds stored in the Treasury's own system.",
    translation: "政府资金存放在财政部的自有系统中。"
  },
  {
    startFrame: 9120,
    endFrame: 9360,
    text: "Only gold and silver accepted.",
    translation: "只接受黄金和白银。"
  },
  {
    startFrame: 9360,
    endFrame: 9600,
    text: "Henry Clay and the Whig Party oppose: A dangerous experiment.",
    translation: "亨利·克莱和辉格党反对：这是一项危险的实验。"
  },
  {
    startFrame: 9600,
    endFrame: 9840,
    text: "European bankers retaliate: The Panic of 1837 follows.",
    translation: "欧洲银行家报复：1837年恐慌随之而来。"
  },
  {
    startFrame: 9840,
    endFrame: 10200,
    text: "Economic depression lasts 5 years.",
    translation: "经济萧条持续5年。"
  },

  // 场景6: 1857年恐慌 (340-400s = 帧 10200-12000)
  {
    startFrame: 10200,
    endFrame: 10440,
    text: "1848: Gold discovered in California. Gold supply explodes.",
    translation: "1848年：加州发现黄金。黄金供应激增。"
  },
  {
    startFrame: 10440,
    endFrame: 10680,
    text: "American economy strengthens. International bankers lose control of gold.",
    translation: "美国经济增强。国际银行家失去对黄金的控制。"
  },
  {
    startFrame: 10680,
    endFrame: 10920,
    text: "European bankers devise a new strategy: Financial control, political division.",
    translation: "欧洲银行家设计新策略：金融控制，政治分化。"
  },
  {
    startFrame: 10920,
    endFrame: 11160,
    text: "1857: They suddenly tighten credit. Railway stocks crash.",
    translation: "1857年：他们突然收紧信贷。铁路股票崩盘。"
  },
  {
    startFrame: 11160,
    endFrame: 11400,
    text: "Banks fail. Paper money exposed. Panic spreads.",
    translation: "银行倒闭。纸币暴露。恐慌蔓延。"
  },
  {
    startFrame: 11400,
    endFrame: 11640,
    text: "Bankers buy American assets at bargain prices.",
    translation: "银行家以低价收购美国资产。"
  },
  {
    startFrame: 11640,
    endFrame: 11880,
    text: "The division of America becomes their priority.",
    translation: "分裂美国成为他们的当务之急。"
  },
  {
    startFrame: 11880,
    endFrame: 12000,
    text: "The prelude to civil war...",
    translation: "内战的前奏……"
  },

  // 场景7: 内战前奏 (400-460s = 帧 12000-13800)
  {
    startFrame: 12000,
    endFrame: 12240,
    text: "Otto von Bismarck, German Chancellor:",
    translation: "奥托·冯·俾斯麦，德国首相："
  },
  {
    startFrame: 12240,
    endFrame: 12480,
    text: "The division of the United States was European financial policy.",
    translation: "美国的分裂是欧洲的金融政策。"
  },
  {
    startFrame: 12480,
    endFrame: 12720,
    text: "The London-Paris-Frankfurt axis behind the scenes.",
    translation: "伦敦-巴黎-法兰克福轴心在幕后操纵。"
  },
  {
    startFrame: 12720,
    endFrame: 12960,
    text: "Southern states offered cheap loans. War financed from both sides.",
    translation: "南方各州获得廉价贷款。战争从双方获得资金。"
  },
  {
    startFrame: 12960,
    endFrame: 13200,
    text: "Whatever the outcome... debt would be the winner.",
    translation: "无论结果如何……债务都将是赢家。"
  },
  {
    startFrame: 13200,
    endFrame: 13440,
    text: "European powers threaten intervention. Britain sends troops to Canada.",
    translation: "欧洲列强威胁干预。英国向加拿大派兵。"
  },
  {
    startFrame: 13440,
    endFrame: 13640,
    text: "France and Spain occupy Mexico. America surrounded.",
    translation: "法国和西班牙占领墨西哥。美国被包围。"
  },
  {
    startFrame: 13640,
    endFrame: 13800,
    text: "Lincoln's government faces extinction...",
    translation: "林肯政府面临灭绝……"
  },

  // 场景8: 林肯的绿钞 (460-520s = 帧 13800-15600)
  {
    startFrame: 13800,
    endFrame: 14040,
    text: "Bankers offer loans at 24-36% interest.",
    translation: "银行家提供24%-36%利息的贷款。"
  },
  {
    startFrame: 14040,
    endFrame: 14280,
    text: "Lincoln refuses. This would destroy America forever.",
    translation: "林肯拒绝。这将永远摧毁美国。"
  },
  {
    startFrame: 14280,
    endFrame: 14520,
    text: "Solution: Government issues its own money. Greenbacks.",
    translation: "解决方案：政府发行自己的货币。绿钞。"
  },
  {
    startFrame: 14520,
    endFrame: 14760,
    text: "1862 Legal Tender Act: Debt-free money issued by the Treasury.",
    translation: "1862年法币法案：财政部发行的无债务货币。"
  },
  {
    startFrame: 14760,
    endFrame: 15000,
    text: "Constitutional authority: Article I, Section 8. The power to coin money belongs to the people.",
    translation: "宪法授权：第一条第八款。货币发行权属于人民。"
  },
  {
    startFrame: 15000,
    endFrame: 15240,
    text: "$450 million issued during the war. No interest paid.",
    translation: "战争期间发行4.5亿美元。无需支付利息。"
  },
  {
    startFrame: 15240,
    endFrame: 15480,
    text: "This saved American taxpayers $40 billion in interest.",
    translation: "这为美国纳税人节省了400亿美元利息。"
  },
  {
    startFrame: 15480,
    endFrame: 15600,
    text: "Debt-free money... funded the Union victory.",
    translation: "无债务货币……资助了联盟的胜利。"
  },

  // 场景9: 俄国同盟 (520-580s = 帧 15600-17400)
  {
    startFrame: 15600,
    endFrame: 15840,
    text: "Lincoln needed allies. He turned to Tsar Alexander II of Russia.",
    translation: "林肯需要盟友。他转向俄国沙皇亚历山大二世。"
  },
  {
    startFrame: 15840,
    endFrame: 16080,
    text: "The Tsar said: I will agree to whatever he asks before I even read his letter.",
    translation: "沙皇说：在我阅读他的信之前，我就同意他的任何请求。"
  },
  {
    startFrame: 16080,
    endFrame: 16320,
    text: "Russia also opposed international banking. Shared the threat.",
    translation: "俄国也反对国际银行体系。面临共同威胁。"
  },
  {
    startFrame: 16320,
    endFrame: 16560,
    text: "1863: Russian fleet arrives in New York and San Francisco.",
    translation: "1863年：俄国舰队抵达纽约和旧金山。"
  },
  {
    startFrame: 16560,
    endFrame: 16800,
    text: "European powers hesitate to intervene.",
    translation: "欧洲列强犹豫是否干预。"
  },
  {
    startFrame: 16800,
    endFrame: 17040,
    text: "Lincoln gains crucial time to turn the tide of war.",
    translation: "林肯获得关键时间扭转战局。"
  },
  {
    startFrame: 17040,
    endFrame: 17280,
    text: "The Russian alliance... saves the Union.",
    translation: "俄国同盟……拯救了联盟。"
  },
  {
    startFrame: 17280,
    endFrame: 17400,
    text: "Both Lincoln and Alexander II would later be assassinated.",
    translation: "林肯和亚历山大二世后来都遭到刺杀。"
  },

  // 场景10: 林肯刺杀 (580-640s = 帧 17400-19200)
  {
    startFrame: 17400,
    endFrame: 17640,
    text: "April 14, 1865. Ford's Theatre.",
    translation: "1865年4月14日。福特剧院。"
  },
  {
    startFrame: 17640,
    endFrame: 17880,
    text: "Lincoln assassinated. Official story: Revenge for the South.",
    translation: "林肯遇刺。官方说法：为南方复仇。"
  },
  {
    startFrame: 17880,
    endFrame: 18120,
    text: "But who really benefited from his death?",
    translation: "但谁真正从他的死中获益？"
  },
  {
    startFrame: 18120,
    endFrame: 18360,
    text: "Greenbacks were soon withdrawn. National Bank Act became permanent.",
    translation: "绿钞很快被收回。国民银行法成为永久。"
  },
  {
    startFrame: 18360,
    endFrame: 18600,
    text: "The man who issued debt-free money... was silenced.",
    translation: "那个发行无债务货币的人……被消音了。"
  },
  {
    startFrame: 18600,
    endFrame: 18840,
    text: "41 days after his second inauguration.",
    translation: "在他第二次就职后41天。"
  },
  {
    startFrame: 18840,
    endFrame: 19080,
    text: "The connection between his death... and his monetary policy.",
    translation: "他的死……与他的货币政策之间的联系。"
  },
  {
    startFrame: 19080,
    endFrame: 19200,
    text: "A question that echoes through history...",
    translation: "一个回响在历史中的问题……"
  },

  // 场景11: 1863年国民银行法 (640-700s = 帧 19200-21000)
  {
    startFrame: 19200,
    endFrame: 19440,
    text: "The National Bank Act of 1863. Lincoln's fatal compromise.",
    translation: "1863年国民银行法。林肯的致命妥协。"
  },
  {
    startFrame: 19440,
    endFrame: 19680,
    text: "Private banks authorized to issue national currency.",
    translation: "私人银行获准发行国家货币。"
  },
  {
    startFrame: 19680,
    endFrame: 19920,
    text: "Currency backed by government debt.",
    translation: "货币由政府债务背书。"
  },
  {
    startFrame: 19920,
    endFrame: 20160,
    text: "Salmon Chase, Treasury Secretary: This is my greatest financial error.",
    translation: "财政部长索罗门·切斯：这是我最大的财政错误。"
  },
  {
    startFrame: 20160,
    endFrame: 20400,
    text: "The trap: Paying off debt would destroy the money supply.",
    translation: "陷阱：偿还债务会摧毁货币供应。"
  },
  {
    startFrame: 20400,
    endFrame: 20640,
    text: "The government can NEVER be debt-free.",
    translation: "政府永远无法无债。"
  },
  {
    startFrame: 20640,
    endFrame: 20880,
    text: "By 2006, US national debt exceeded $8 trillion.",
    translation: "到2006年，美国国债超过8万亿美元。"
  },
  {
    startFrame: 20880,
    endFrame: 21000,
    text: "All because of this compromise in 1863.",
    translation: "这一切都源于1863年的这个妥协。"
  },

  // 场景12: 总结 (700-720s = 帧 21000-21600)
  {
    startFrame: 21000,
    endFrame: 21240,
    text: "Key takeaways from this century-long war:",
    translation: "这场百年战争的关键要点："
  },
  {
    startFrame: 21240,
    endFrame: 21480,
    text: "Currency control is the ultimate power.",
    translation: "货币控制权是终极权力。"
  },
  {
    startFrame: 21480,
    endFrame: 21600,
    text: "7 presidents assassinated for resisting central banks. The battle continues.",
    translation: "7位总统因抵抗中央银行而被刺杀。战争仍在继续。"
  },
];

/**
 * Episode04 字幕数据 - 美联储：私有的中央银行
 *
 * 基于《货币战争》第三章内容设计
 * 总时长：12-14分钟（720-840秒 = 21600-25200帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-35s] 开场 - 威尔逊的悔恨
 * 1. [35-95s] 哲基尔岛秘密会议
 * 2. [95-170s] 华尔街7巨头
 * 3. [170-240s] 摩根家族兴起
 * 4. [240-310s] 洛克菲勒帝国
 * 5. [310-370s] 1907年恐慌 - 前奏
 * 6. [370-430s] 金本位到法定货币
 * 7. [430-490s] 1912年大选
 * 8. [490-550s] B计划 - 两套方案
 * 9. [550-630s] 法案通过
 * 10. [630-700s] 谁拥有美联储
 * 11. [700-760s] 隐藏的控制
 * 12. [760-810s] 威尔逊的醒悟
 * 13. [810-840s] 总结
 */
export const episode04Subtitles: SubtitleEntry[] = [
  // Scene 0: 开场 - 威尔逊的悔恨 (0-35s = 帧 0-1050)
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
  {
    startFrame: 900,
    endFrame: 1050,
    text: '"I have unwittingly ruined my country."',
    translation: '"我在无意之中摧毁了我的国家。"',
  },

  // Scene 1: 哲基尔岛秘密会议 (35-95s = 帧 1050-2850)
  {
    startFrame: 1050,
    endFrame: 1200,
    text: "November 22, 1910. A sealed train car leaves New York.",
    translation: "1910年11月22日。一节密封的火车车厢离开纽约。",
  },
  {
    startFrame: 1200,
    endFrame: 1350,
    text: "Destination: Jekyll Island, Georgia.",
    translation: "目的地：佐治亚州的哲基尔岛。",
  },
  {
    startFrame: 1350,
    endFrame: 1500,
    text: "Mission: Draft the Federal Reserve Act.",
    translation: "任务：起草《联邦储备法案》。",
  },
  {
    startFrame: 1500,
    endFrame: 1650,
    text: "Not a single journalist allowed within 50 miles.",
    translation: "50英里范围内不允许任何记者出现。",
  },
  {
    startFrame: 1650,
    endFrame: 1800,
    text: "The 7 men who met in secret:",
    translation: "秘密会面的7个人：",
  },
  {
    startFrame: 1800,
    endFrame: 1950,
    text: "Nelson Aldrich - Senator, Rockefeller's grandfather",
    translation: "尼尔森·奥尔德里奇——参议员，洛克菲勒的外祖父",
  },
  {
    startFrame: 1950,
    endFrame: 2100,
    text: "Paul Warburg - Fed's chief architect, Rothschild's agent",
    translation: "保罗·沃伯格——美联储总设计师，罗斯柴尔德代理人",
  },
  {
    startFrame: 2100,
    endFrame: 2280,
    text: "Frank Vanderlip, Henry Davison, Charles Norton, Benjamin Strong, Piatt Andrew",
    translation: "弗兰克·范德利普、亨利·戴维森、查尔斯·诺顿、本杰明·斯特朗、派亚特·安德鲁",
  },
  {
    startFrame: 2280,
    endFrame: 2460,
    text: "9 days of secret meetings. The plan that would change America forever.",
    translation: "9天的秘密会议。将永远改变美国的计划。",
  },
  {
    startFrame: 2460,
    endFrame: 2640,
    text: "The name 'Federal Reserve' was chosen to hide the truth.",
    translation: "选择'联邦储备'这个名字是为了掩盖真相。",
  },
  {
    startFrame: 2640,
    endFrame: 2850,
    text: "It was a central bank in everything but name.",
    translation: "除了名称之外，它具备一切中央银行的特征。",
  },

  // Scene 2: 华尔街7巨头 (95-170s = 帧 2850-5100)
  {
    startFrame: 2850,
    endFrame: 3030,
    text: "Wall Street's 7 Tycoons controlled America.",
    translation: "华尔街的7巨头控制着美国。",
  },
  {
    startFrame: 3030,
    endFrame: 3210,
    text: "J.P. Morgan Group. Standard Oil City Bank Group.",
    translation: "J.P.摩根集团。标准石油城市银行集团。",
  },
  {
    startFrame: 3210,
    endFrame: 3390,
    text: '"The seven men control most of America\'s basic industries and resources."',
    translation: '"这7个人控制着美国大部分基础工业和资源。"',
  },
  {
    startFrame: 3390,
    endFrame: 3570,
    text: "— John Moody, Founder of Moody's, 1911",
    translation: "—— 约翰·穆迪，穆迪投资评估体系创始人，1911年",
  },
  {
    startFrame: 3570,
    endFrame: 3780,
    text: "All connected to the Rothschild family of London.",
    translation: "所有人都与伦敦的罗斯柴尔德家族有联系。",
  },
  {
    startFrame: 3780,
    endFrame: 3990,
    text: "The invisible hand behind American finance.",
    translation: "美国金融背后的看不见的手。",
  },
  {
    startFrame: 3990,
    endFrame: 4200,
    text: "What appeared to be competition... was actually cooperation.",
    translation: "表面上的竞争……实际上是合作。",
  },
  {
    startFrame: 4200,
    endFrame: 4410,
    text: "Morgan, Rockefeller, Kuhn Loeb... all worked together.",
    translation: "摩根、洛克菲勒、库恩雷波……都在一起工作。",
  },
  {
    startFrame: 4410,
    endFrame: 4680,
    text: "Their real bosses sat in London and Paris.",
    translation: "他们真正的老板坐在伦敦和巴黎。",
  },
  {
    startFrame: 4680,
    endFrame: 4890,
    text: "The Rothschilds had waited nearly 100 years for this moment.",
    translation: "罗斯柴尔德家族等待这一刻已近100年。",
  },
  {
    startFrame: 4890,
    endFrame: 5100,
    text: "The Bank of England model... finally replicated in America.",
    translation: "英格兰银行模式……终于在美国复制成功。",
  },

  // Scene 3: 摩根家族兴起 (170-240s = 帧 5100-7200)
  {
    startFrame: 5100,
    endFrame: 5310,
    text: "The Rise of the Morgan Family",
    translation: "摩根家族的兴起",
  },
  {
    startFrame: 5310,
    endFrame: 5520,
    text: "George Peabody arrived in London in 1835.",
    translation: "1835年，乔治·皮博迪来到伦敦。",
  },
  {
    startFrame: 5520,
    endFrame: 5730,
    text: "A dry goods merchant... who became a merchant banker.",
    translation: "一个干货商人……成为了承兑银行家。",
  },
  {
    startFrame: 5730,
    endFrame: 5940,
    text: "Then came an invitation from Nathan Rothschild himself.",
    translation: "然后收到了内森·罗斯柴尔德本人的邀请。",
  },
  {
    startFrame: 5940,
    endFrame: 6150,
    text: "Peabody became Rothschild's secret PR agent in America.",
    translation: "皮博迪成为罗斯柴尔德在美国的秘密公关代理人。",
  },
  {
    startFrame: 6150,
    endFrame: 6360,
    text: "1857: The engineered crisis. The Bank of England's 'rescue'.",
    translation: "1857年：人为制造的危机。英格兰银行的'救援'。",
  },
  {
    startFrame: 6360,
    endFrame: 6570,
    text: "£80,000 'emergency credit'... at the perfect moment.",
    translation: "80万英镑的'紧急信用额度'……在完美的时机。",
  },
  {
    startFrame: 6570,
    endFrame: 6780,
    text: "Peabody bought distressed American bonds during panic.",
    translation: "皮博迪在恐慌中大量买进被抛售的美国债券。",
  },
  {
    startFrame: 6780,
    endFrame: 6990,
    text: "When economy recovered... he became supremely wealthy.",
    translation: "当经济复苏后……他成为超级富豪。",
  },
  {
    startFrame: 6990,
    endFrame: 7200,
    text: "Junius Morgan inherited it all. J.P. Morgan continued the legacy.",
    translation: "朱尼厄斯·摩根继承了一切。J.P.摩根延续了这一传统。",
  },

  // Scene 4: 洛克菲勒帝国 (240-310s = 帧 7200-9300)
  {
    startFrame: 7200,
    endFrame: 7410,
    text: "The Rockefeller Empire",
    translation: "洛克菲勒帝国",
  },
  {
    startFrame: 7410,
    endFrame: 7620,
    text: "1870: Standard Oil founded.",
    translation: "1870年：标准石油公司成立。",
  },
  {
    startFrame: 7620,
    endFrame: 7830,
    text: "Then came Jacob Schiff... Rothschild's agent.",
    translation: "然后雅各布·希夫来了……罗斯柴尔德的代理人。",
  },
  {
    startFrame: 7830,
    endFrame: 8040,
    text: "With Rothschild controlling 95% of American railways...",
    translation: "罗斯柴尔德控制了美国95%的铁路运力……",
  },
  {
    startFrame: 8040,
    endFrame: 8250,
    text: "Schiff devised a railroad rebate scheme for Rockefeller.",
    translation: "希夫为洛克菲勒设计了铁路运费折扣计划。",
  },
  {
    startFrame: 8250,
    endFrame: 8460,
    text: "Competitors couldn't survive the discounted shipping.",
    translation: "竞争对手无法在折扣运输下生存。",
  },
  {
    startFrame: 8460,
    endFrame: 8670,
    text: "Rockefeller's tactics: Cash buyout offers, then price wars.",
    translation: "洛克菲勒的策略：现金收购要约，然后价格战。",
  },
  {
    startFrame: 8670,
    endFrame: 8880,
    text: "If that failed... violent sabotage. Arson. Assault.",
    translation: "如果还不行……暴力破坏。纵火。袭击。",
  },
  {
    startFrame: 8880,
    endFrame: 9090,
    text: "The Rockefellers were mere front men.",
    translation: "洛克菲勒家族只是前台人物。",
  },
  {
    startFrame: 9090,
    endFrame: 9300,
    text: "The real power behind them: The House of Rothschild.",
    translation: "他们背后的真正力量：罗斯柴尔德家族。",
  },

  // Scene 5: 1907年恐慌 - 前奏 (310-370s = 帧 9300-11100)
  {
    startFrame: 9300,
    endFrame: 9510,
    text: "1907 Panic - The Precursor",
    translation: "1907年恐慌——前奏",
  },
  {
    startFrame: 9510,
    endFrame: 9720,
    text: "A panic scientifically engineered to create demand for central bank.",
    translation: "一场科学设计的恐慌，为中央银行创造需求。",
  },
  {
    startFrame: 9720,
    endFrame: 9930,
    text: "October 1907: Rumors spread. Knickerbocker Trust failing.",
    translation: "1907年10月：谣言传播。尼克伯克信托公司即将破产。",
  },
  {
    startFrame: 9930,
    endFrame: 10140,
    text: "Bank runs spread across New York. Stock exchange nearly closed.",
    translation: "银行挤兑蔓延纽约。证交所几乎停盘。",
  },
  {
    startFrame: 10140,
    endFrame: 10350,
    text: "J.P. Morgan 'saves the day' with $25 million.",
    translation: "J.P.摩根用2500万美元'拯救了局面'。",
  },
  {
    startFrame: 10350,
    endFrame: 10560,
    text: "The real prize: Tennessee Coal and Iron Company.",
    translation: "真正的奖品：田纳西矿业和制铁公司。",
  },
  {
    startFrame: 10560,
    endFrame: 10770,
    text: "Value: $1 billion. Morgan's cost: $45 million.",
    translation: "价值：10亿美元。摩根的成本：4500万美元。",
  },
  {
    startFrame: 10770,
    endFrame: 10980,
    text: "A 2,000% return on investment.",
    translation: "2000%的投资回报率。",
  },
  {
    startFrame: 10980,
    endFrame: 11100,
    text: "Create the problem. Offer the solution. Acquire assets.",
    translation: "制造问题。提供解决方案。收购资产。",
  },

  // Scene 6: 金本位到法定货币 (370-430s = 帧 11100-12900)
  {
    startFrame: 11100,
    endFrame: 11310,
    text: "From Gold Standard to Fiat Money",
    translation: "从金本位到法定货币",
  },
  {
    startFrame: 11310,
    endFrame: 11520,
    text: "The Great Shift in banker worldview.",
    translation: "银行家世界观的大转变。",
  },
  {
    startFrame: 11520,
    endFrame: 11730,
    text: "Old System: Money backed by gold. Limited supply.",
    translation: "旧系统：货币由黄金背书。供应有限。",
  },
  {
    startFrame: 11730,
    endFrame: 11940,
    text: "Bankers opposed inflation. It hurt their interest income.",
    translation: "银行家反对通货膨胀。它损害了他们的利息收入。",
  },
  {
    startFrame: 11940,
    endFrame: 12150,
    text: "New System: Money backed by nothing. Unlimited supply.",
    translation: "新系统：货币没有任何背书。无限供应。",
  },
  {
    startFrame: 12150,
    endFrame: 12360,
    text: "Bankers CREATE inflation to steal wealth.",
    translation: "银行家制造通货膨胀来窃取财富。",
  },
  {
    startFrame: 12360,
    endFrame: 12570,
    text: "Inflation is MORE profitable than interest!",
    translation: "通货膨胀比利息更有利可图！",
  },
  {
    startFrame: 12570,
    endFrame: 12780,
    text: '"By this method, the government can secretly confiscate wealth."',
    translation: '"用这个办法，政府可以秘密地没收人民的财富。"',
  },
  {
    startFrame: 12780,
    endFrame: 12900,
    text: "— John Maynard Keynes",
    translation: "—— 约翰·梅纳德·凯恩斯",
  },

  // Scene 7: 1912年大选 (430-490s = 帧 12900-14700)
  {
    startFrame: 12900,
    endFrame: 13110,
    text: "The 1912 Election",
    translation: "1912年大选",
  },
  {
    startFrame: 13110,
    endFrame: 13320,
    text: "Before election: Wilson fiercely opposed banking monopoly.",
    translation: "大选前：威尔逊强烈反对银行垄断。",
  },
  {
    startFrame: 13320,
    endFrame: 13530,
    text: "Refused to share stage with Senator Aldrich.",
    translation: "拒绝与奥尔德里奇参议员同台。",
  },
  {
    startFrame: 13530,
    endFrame: 13740,
    text: "Bankers' strategy: Fund Wilson through Cleveland Dodge.",
    translation: "银行家的策略：通过克里夫兰·道奇资助威尔逊。",
  },
  {
    startFrame: 13740,
    endFrame: 13950,
    text: "Run Roosevelt to split Republican vote.",
    translation: "让老罗斯福参选来分散共和党选票。",
  },
  {
    startFrame: 13950,
    endFrame: 14160,
    text: "Wilson wins with only 41.8% of popular vote.",
    translation: "威尔逊仅以41.8%的普选票获胜。",
  },
  {
    startFrame: 14160,
    endFrame: 14370,
    text: '"The governor of Princeton will become Governor of New Jersey."',
    translation: '"普林斯顿的校长将会成为新泽西州的州长。"',
  },
  {
    startFrame: 14370,
    endFrame: 14580,
    text: '"He will not complete his term."',
    translation: '"他不会完成他的任期。"',
  },
  {
    startFrame: 14580,
    endFrame: 14700,
    text: "— Rabbi Wise, 1910",
    translation: "—— 拉比·怀斯，1910年",
  },

  // Scene 8: B计划 - 两套方案 (490-550s = 帧 14700-16500)
  {
    startFrame: 14700,
    endFrame: 14910,
    text: "Plan B - The Two Schemes",
    translation: "B计划——两套方案",
  },
  {
    startFrame: 14910,
    endFrame: 15120,
    text: "Plan A: Aldrich Plan. Openly Republican.",
    translation: "A计划：奥尔德里奇计划。公开支持共和党。",
  },
  {
    startFrame: 15120,
    endFrame: 15330,
    text: "Deliberately unpopular to draw opposition fire.",
    translation: "故意不受欢迎，以吸引反对派的火力。",
  },
  {
    startFrame: 15330,
    endFrame: 15540,
    text: "Plan B: Glass-Owen Act. 'Democratic opposition'.",
    translation: "B计划：格拉斯-欧文法案。'民主党的反对'。",
  },
  {
    startFrame: 15540,
    endFrame: 15750,
    text: "Promised to break banking monopoly.",
    translation: "承诺打破银行垄断。",
  },
  {
    startFrame: 15750,
    endFrame: 15960,
    text: "Both plans created by the same bankers!",
    translation: "两份计划都由同一批银行家创造！",
  },
  {
    startFrame: 15960,
    endFrame: 16170,
    text: "Republicans oppose 'Democratic' bill.",
    translation: "共和党人反对'民主党的'法案。",
  },
  {
    startFrame: 16170,
    endFrame: 16380,
    text: "Democrats oppose 'Republican' bill.",
    translation: "民主党人反对'共和党的'法案。",
  },
  {
    startFrame: 16380,
    endFrame: 16500,
    text: "Bankers secretly support BOTH.",
    translation: "银行家秘密支持双方。",
  },

  // Scene 9: 法案通过 (550-630s = 帧 16500-18900)
  {
    startFrame: 16500,
    endFrame: 16710,
    text: "December 1913. The Act Passes.",
    translation: "1913年12月。法案通过。",
  },
  {
    startFrame: 16710,
    endFrame: 16920,
    text: "December 20, Saturday: Conference meets all day",
    translation: "12月20日，星期六：会议全天进行",
  },
  {
    startFrame: 16920,
    endFrame: 17130,
    text: "December 21, Sunday: Continues meeting (unprecedented)",
    translation: "12月21日，星期日：继续会议（史无前例）",
  },
  {
    startFrame: 17130,
    endFrame: 17340,
    text: "December 22, Monday: 1:30 AM - Differences resolved",
    translation: "12月22日，星期一：凌晨1点30分——分歧解决",
  },
  {
    startFrame: 17340,
    endFrame: 17550,
    text: "4:30 AM - Final document sent to print",
    translation: "凌晨4点30分——最终文件送交打印",
  },
  {
    startFrame: 17550,
    endFrame: 17760,
    text: "7:00 AM - Final proofread. 2:00 PM - On desks",
    translation: "早上7点——最终校稿。下午2点——放在桌上",
  },
  {
    startFrame: 17760,
    endFrame: 17970,
    text: "4:00 PM - Session begins. 6:00 PM - Most at dinner",
    translation: "下午4点——会议开始。下午6点——大多数人去吃晚饭",
  },
  {
    startFrame: 17970,
    endFrame: 18180,
    text: "7:30 PM - 20-minute speech, then debate",
    translation: "晚上7点30分——20分钟演讲，然后辩论",
  },
  {
    startFrame: 18180,
    endFrame: 18390,
    text: "11:00 PM - House passes: 298 to 60",
    translation: "晚上11点——众议院通过：298对60票",
  },
  {
    startFrame: 18390,
    endFrame: 18600,
    text: "December 23: Senate passes: 43 to 25 (27 absent!)",
    translation: "12月23日：参议院通过：43对25票（27人缺席！）",
  },
  {
    startFrame: 18600,
    endFrame: 18810,
    text: "Wilson signs within ONE HOUR",
    translation: "威尔逊在一小时内签署",
  },
  {
    startFrame: 18810,
    endFrame: 18900,
    text: "The Crime: Passed when opponents away for Christmas",
    translation: "罪行：当反对者去过圣诞节不在时通过",
  },

  // Scene 10: 谁拥有美联储 (630-700s = 帧 18900-21000)
  {
    startFrame: 18900,
    endFrame: 19110,
    text: "Who Owns The Fed?",
    translation: "谁拥有美联储？",
  },
  {
    startFrame: 19110,
    endFrame: 19320,
    text: "Federal Reserve Bank of New York: 203,053 shares total",
    translation: "美联储纽约银行：总共203,053股",
  },
  {
    startFrame: 19320,
    endFrame: 19530,
    text: "Major shareholders in 1914:",
    translation: "1914年主要股东：",
  },
  {
    startFrame: 19530,
    endFrame: 19740,
    text: "National City Bank (Rockefeller/Kuhn Loeb) - 30,000 shares",
    translation: "纽约国家城市银行（洛克菲勒/库恩雷波）——30,000股",
  },
  {
    startFrame: 19740,
    endFrame: 19950,
    text: "First National Bank (J.P. Morgan) - 15,000 shares",
    translation: "纽约第一国家银行（J.P.摩根）——15,000股",
  },
  {
    startFrame: 19950,
    endFrame: 20160,
    text: "National Bank of Commerce (Warburg) - 21,000 shares",
    translation: "纽约国家商业银行（沃伯格）——21,000股",
  },
  {
    startFrame: 20160,
    endFrame: 20370,
    text: "These 6 banks: 40% ownership (53% by 1983)",
    translation: "这6家银行：40%所有权（到1983年为53%）",
  },
  {
    startFrame: 20370,
    endFrame: 20580,
    text: "The Fed is: NOT federal. NO reserves. NOT a bank.",
    translation: "美联储是：不是联邦的。没有储备。不是银行。",
  },
  {
    startFrame: 20580,
    endFrame: 20790,
    text: "Every Federal Reserve Note = Debt owed to the Fed",
    translation: "每一张美联储券 = 欠美联储的债务",
  },
  {
    startFrame: 20790,
    endFrame: 21000,
    text: "Private credit monopoly that issues America's money.",
    translation: "发行美国货币的私人信用垄断组织。",
  },

  // Scene 11: 隐藏的控制 (700-760s = 帧 21000-22800)
  {
    startFrame: 21000,
    endFrame: 21210,
    text: "The Hidden Control",
    translation: "隐藏的控制",
  },
  {
    startFrame: 21210,
    endFrame: 21420,
    text: "PUBLIC VIEW: President appoints → Senate confirms → Board",
    translation: "公众认为：总统任命 → 参议院确认 → 董事会",
  },
  {
    startFrame: 21420,
    endFrame: 21630,
    text: "REALITY: 12 Regional Bank Directors → Federal Advisory Council",
    translation: "现实：12家地区银行董事 → 联邦咨询委员会",
  },
  {
    startFrame: 21630,
    endFrame: 21840,
    text: "Council 'advises' → Board. Board always obeys.",
    translation: "委员会'建议' → 董事会。董事会总是服从。",
  },
  {
    startFrame: 21840,
    endFrame: 22050,
    text: "5 Wall Street giants dominate the Council.",
    translation: "华尔街5巨头主导咨询委员会。",
  },
  {
    startFrame: 22050,
    endFrame: 22260,
    text: "Who can say 'no' to men who control your bank's survival?",
    translation: "谁能对控制你银行生存的人说'不'？",
  },
  {
    startFrame: 22260,
    endFrame: 22470,
    text: "Paul Warburg's masterpiece: A hidden remote control device.",
    translation: "保罗·沃伯格的杰作：一个隐藏的遥控装置。",
  },
  {
    startFrame: 22470,
    endFrame: 22680,
    text: "Perfect illusion of democracy. Complete control.",
    translation: "完美的民主幻觉。完全的控制。",
  },
  {
    startFrame: 22680,
    endFrame: 22800,
    text: "The Federal Advisory Council: Unknown to most Americans.",
    translation: "联邦咨询委员会：大多数美国人不知道。",
  },

  // Scene 12: 威尔逊的醒悟 (760-810s = 帧 22800-24300)
  {
    startFrame: 22800,
    endFrame: 23010,
    text: "Wilson's Realization",
    translation: "威尔逊的醒悟",
  },
  {
    startFrame: 23010,
    endFrame: 23220,
    text: "Before he died, Woodrow Wilson admitted:",
    translation: "威尔逊总统去世前承认：",
  },
  {
    startFrame: 23220,
    endFrame: 23430,
    text: '"I have unwittingly ruined my country."',
    translation: '"我在无意之中摧毁了我的国家。"',
  },
  {
    startFrame: 23430,
    endFrame: 23640,
    text: "He realized he had been deceived.",
    translation: "他意识到自己被欺骗了。",
  },
  {
    startFrame: 23640,
    endFrame: 23850,
    text: "The Federal Reserve was NOT what he believed.",
    translation: "美联储不是他所相信的那样。",
  },
  {
    startFrame: 23850,
    endFrame: 24060,
    text: "The 'people's bank' was a private monopoly.",
    translation: "'人民的银行'是一个私人垄断组织。",
  },
  {
    startFrame: 24060,
    endFrame: 24270,
    text: "Government does NOT issue dollars.",
    translation: "政府不发行美元。",
  },
  {
    startFrame: 24270,
    endFrame: 24300,
    text: "Every dollar in your pocket = debt + interest owed to bankers.",
    translation: "你口袋里的每一美元 = 欠银行家的债务 + 利息。",
  },

  // Scene 13: 总结 (810-840s = 帧 24300-25200)
  {
    startFrame: 24300,
    endFrame: 24510,
    text: "Episode 04: Key Takeaways",
    translation: "第4集：关键要点",
  },
  {
    startFrame: 24510,
    endFrame: 24720,
    text: "1. The Federal Reserve Act was drafted in secret on Jekyll Island",
    translation: "1. 《美联储法案》在哲基尔岛秘密起草",
  },
  {
    startFrame: 24720,
    endFrame: 24930,
    text: "2. 7 Wall Street tycoons conspired with European bankers",
    translation: "2. 7位华尔街巨头与欧洲银行家密谋",
  },
  {
    startFrame: 24930,
    endFrame: 25140,
    text: "3. The 1907 panic was engineered to create demand",
    translation: "3. 1907年恐慌是人为制造的",
  },
  {
    startFrame: 25140,
    endFrame: 25200,
    text: "The Fed is privately owned, NOT federal.",
    translation: "美联储是私有的，不是联邦的。",
  },
];
/**
 * Episode05 字幕数据 - 一战与大衰退：国际银行家的"丰收时节"
 *
 * 基于《货币战争》第四章内容
 * 总时长：15分钟（900秒 = 27000帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-40s] 开场 - 斯特朗肖像
 * 1. [40-100s] 没有美联储，就没有一战
 * 2. [100-160s] 斯特朗的战时美联储
 * 3. [160-220s] 威尔逊的战争决策
 * 4. [220-280s] 大发战争财的银行家们
 * 5. [280-340s] 凡尔赛和约
 * 6. [340-410s] 1921年农业衰退
 * 7. [410-470s] 咆哮的二十年代
 * 8. [470-530s] 1927年秘密会议
 * 9. [530-600s] 泡沫膨胀
 * 10. [600-680s] 1929年崩盘
 * 11. [680-750s] 银行家廉价收购一切
 * 12. [750-820s] 大萧条加深
 * 13. [820-880s] 真正的图谋揭露
 * 14. [880-940s] 罗斯福新政
 * 15. [940-900s] 总结与警示
 */
export const episode05Subtitles: SubtitleEntry[] = [
  // Scene 0: 开场 - 斯特朗肖像 (0-40s = 帧 0-1200)
  {
    startFrame: 0,
    endFrame: 180,
    text: "Episode 5: War and Depression",
    translation: "第五集：一战与大衰退",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "The real power behind the Federal Reserve.",
    translation: "美联储背后的真正权力。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Benjamin Strong — The man who controlled America's money.",
    translation: "本杰明·斯特朗——控制美国货币的人。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "\"The power to issue money is the supreme authority.\"",
    translation: '"货币发行权是终极权力。"',
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "And Benjamin Strong held that power for two decades.",
    translation: "本杰明·斯特朗掌握那项权力长达二十年。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Former J.P. Morgan lieutenant. Wall Street's golden boy.",
    translation: "前J.P.摩根副手。华尔街的宠儿。",
  },
  {
    startFrame: 1080,
    endFrame: 1200,
    text: "Governor of the Federal Reserve Bank of New York.",
    translation: "纽约联邦储备银行行长。",
  },

  // Scene 1: 没有美联储，就没有一战 (40-100s = 帧 1200-3000)
  {
    startFrame: 1200,
    endFrame: 1380,
    text: "1913: The Federal Reserve was created.",
    translation: "1913年：美联储成立了。",
  },
  {
    startFrame: 1380,
    endFrame: 1560,
    text: "1914: World War I began in Europe.",
    translation: "1914年：第一次世界大战在欧洲爆发。",
  },
  {
    startFrame: 1560,
    endFrame: 1740,
    text: "America declared neutrality. No central bank, no war financing.",
    translation: "美国宣布中立。没有中央银行，无法资助战争。",
  },
  {
    startFrame: 1740,
    endFrame: 1920,
    text: "But bankers needed to Fed first... then came the war.",
    translation: "但银行家需要先有美联储……然后战争来了。",
  },
  {
    startFrame: 1920,
    endFrame: 2100,
    text: "A war America could finally finance. For bankers' profit.",
    translation: "一场美国终于可以资助的战争。为了银行家的利润。",
  },
  {
    startFrame: 2100,
    endFrame: 2280,
    text: "1917: America entered the war. $30 billion in loans to allies.",
    translation: "1917年：美国参战。向盟友贷款300亿美元。",
  },
  {
    startFrame: 2280,
    endFrame: 2460,
    text: "The Fed made it all possible. The bankers harvested unprecedented wealth.",
    translation: "美联储使一切成为可能。银行家收获了前所未有的财富。",
  },
  {
    startFrame: 2460,
    endFrame: 2640,
    text: "War financed by debt. Future generations would pay the price.",
    translation: "由债务资助的战争。未来几代人将付出代价。",
  },
  {
    startFrame: 2640,
    endFrame: 2820,
    text: "1919: The Treaty of Versailles. Germany forced to pay impossible reparations.",
    translation: "1919年：《凡尔赛和约》。德国被迫支付不可能完成的赔偿。",
  },
  {
    startFrame: 2820,
    endFrame: 3000,
    text: "320 billion gold marks — more than all German gold reserves combined.",
    translation: "3200亿金马克——超过德国全部黄金储备的总和。",
  },

  // Scene 2-3: 斯特朗的战时美联储 + 威尔逊的战争决策 (100-220s = 帧 3000-6600)
  {
    startFrame: 3000,
    endFrame: 3180,
    text: "Benjamin Strong controlled the New York Fed.",
    translation: "本杰明·斯特朗控制了纽约美联储。",
  },
  {
    startFrame: 3180,
    endFrame: 3360,
    text: "Through it, he controlled the entire Federal Reserve System.",
    translation: "通过它，他控制了整个美联储系统。",
  },
  {
    startFrame: 3360,
    endFrame: 3540,
    text: "U.S. national debt exploded from $1 billion to $25 billion.",
    translation: "美国国债从10亿美元暴涨至250亿美元。",
  },
  {
    startFrame: 3540,
    endFrame: 3720,
    text: "Every dollar created was debt owed to the Fed.",
    translation: "创造的每一美元都是欠美联储的债务。",
  },
  {
    startFrame: 3720,
    endFrame: 3900,
    text: "President Wilson: \"We fight for moral principles.\"",
    translation: "威尔逊总统：\"我们为道德原则而战。\"",
  },
  {
    startFrame: 3900,
    endFrame: 4080,
    text: "The reality: Protecting $30 billion in loans to allies.",
    translation: "真相：保护向盟友提供的300亿美元贷款。",
  },
  {
    startFrame: 4080,
    endFrame: 4260,
    text: "Not democracy. Not freedom. Just business. The war business.",
    translation: "不是民主。不是自由。只是生意。战争生意。",
  },
  {
    startFrame: 4260,
    endFrame: 4440,
    text: "Wilson elected on peace platform, then led America into war.",
    translation: "威尔逊以和平纲领当选，然后带领美国参战。",
  },
  {
    startFrame: 4440,
    endFrame: 4620,
    text: "The puppet masters pulled the strings from Wall Street.",
    translation: "木偶大师们从华尔街拉动了线。",
  },
  {
    startFrame: 4620,
    endFrame: 4800,
    text: "American soldiers died. Bankers counted the profits.",
    translation: "美国士兵阵亡。银行家计算着利润。",
  },

  // Scene 4-5: 战争暴利 + 凡尔赛和约 (220-340s = 帧 6600-10200)
  {
    startFrame: 4800,
    endFrame: 4980,
    text: "War is consumption at combustion speed.",
    translation: "战争是以燃烧速度消耗资源。",
  },
  {
    startFrame: 4980,
    endFrame: 5160,
    text: "And bankers harvested unprecedented profits.",
    translation: "银行家收获了前所未有的利润。",
  },
  {
    startFrame: 5160,
    endFrame: 5340,
    text: "1919: The Treaty of Versailles.",
    translation: "1919年：《凡尔赛和约》。",
  },
  {
    startFrame: 5340,
    endFrame: 5520,
    text: "Germany forced to pay 320 billion gold marks.",
    translation: "德国被迫支付3200亿金马克。",
  },
  {
    startFrame: 5520,
    endFrame: 5700,
    text: "Impossible sum. Equivalent to ALL German gold reserves.",
    translation: "不可能的金额。相当于德国全部黄金储备。",
  },
  {
    startFrame: 5700,
    endFrame: 5880,
    text: "Marshal Foch: \"This is not peace. It is an armistice for twenty years.\"",
    translation: "福煦元帅：\"这不是和平。这是为期二十年的休战书。\"",
  },
  {
    startFrame: 5880,
    endFrame: 6060,
    text: "The Paris Peace Conference: A carnival for international bankers.",
    translation: "巴黎和会：国际银行家的狂欢节。",
  },
  {
    startFrame: 6060,
    endFrame: 6240,
    text: "The stage was set for World War II.",
    translation: "第二次世界大战的舞台已经搭好。",
  },

  // Scene 6: 1921年农业衰退 (340-410s = 帧 10200-12300)
  {
    startFrame: 6240,
    endFrame: 6420,
    text: "1920: The post-war economy cooled.",
    translation: "1920年：战后经济冷却。",
  },
  {
    startFrame: 6420,
    endFrame: 6600,
    text: "Then came 1921. The first \"shearing\" operation.",
    translation: "然后1921年来临。第一次\"剪羊毛\"行动。",
  },
  {
    startFrame: 6600,
    endFrame: 6780,
    text: "Farm prices collapsed 50%. 30% of farms faced foreclosure.",
    translation: "农产品价格下跌50%。30%的农场面临止赎。",
  },
  {
    startFrame: 6780,
    endFrame: 6960,
    text: "Targeted financial bombing: Farmers driven into bankruptcy.",
    translation: "定向金融轰炸：农民被驱入破产。",
  },
  {
    startFrame: 6960,
    endFrame: 7140,
    text: "Banks acquired millions of acres of farmland for pennies.",
    translation: "银行以几美分收购了数百万英亩农田。",
  },
  {
    startFrame: 7140,
    endFrame: 7320,
    text: "The first harvest: American agriculture.",
    translation: "第一次收割：美国农业。",
  },
  {
    startFrame: 7320,
    endFrame: 7500,
    text: "Land ownership concentrated. Rural poverty followed.",
    translation: "土地所有权集中。随之而来的是农村贫困。",
  },

  // Scene 7-8: 咆哮的二十年代 + 1927年秘密会议 (410-530s = 帧 12300-15900)
  {
    startFrame: 7500,
    endFrame: 7680,
    text: "The 1920s: Easy money, low interest rates, stock market boom.",
    translation: "1920年代：容易的钱、低利率、股市繁荣。",
  },
  {
    startFrame: 7680,
    endFrame: 7860,
    text: "\"Everyone should get rich\" — The new national obsession.",
    translation: "\"每个人都应该发财\"——新的全民痴迷。",
  },
  {
    startFrame: 7860,
    endFrame: 8040,
    text: "Margin buying encouraged. Credit expanded wildly.",
    translation: "保证金交易受到鼓励。信贷疯狂扩张。",
  },
  {
    startFrame: 8040,
    endFrame: 8220,
    text: "Underneath: The setup for the greatest crash in history.",
    translation: "暗流：历史上最大崩盘的布局。",
  },
  {
    startFrame: 8220,
    endFrame: 8400,
    text: "1927: Secret meeting on Long Island.",
    translation: "1927年：长岛上的秘密会议。",
  },
  {
    startFrame: 8400,
    endFrame: 8580,
    text: "Montagu Norman, Benjamin Strong, Hjalmar Schacht.",
    translation: "蒙塔古·诺曼、本杰明·斯特朗、雅尔马·沙赫特。",
  },
  {
    startFrame: 8580,
    endFrame: 8760,
    text: "Agreement: Lower NY Fed rates to stop gold flowing to America.",
    translation: "协议：降低纽约美联储利率以阻止黄金流向美国。",
  },
  {
    startFrame: 8760,
    endFrame: 8940,
    text: "Goal: Inflate the bubble further. Set up for 1929 crash.",
    translation: "目标：进一步吹大泡沫。为1929年崩盘做布局。",
  },
  {
    startFrame: 8940,
    endFrame: 9120,
    text: "\"Lower interest rates. Inflate the bubble. Then pop it and harvest.\"",
    translation: "\"降低利率。吹大泡沫。然后刺破它并收割。\"",
  },
  {
    startFrame: 9120,
    endFrame: 9300,
    text: "The policy that led to 1929. The bankers' masterpiece.",
    translation: "导致1929年的政策。银行家的杰作。",
  },

  // Scene 9-10: 泡沫膨胀 + 1929年崩盘 (530-680s = 帧 15900-20400)
  {
    startFrame: 9300,
    endFrame: 9480,
    text: "Stock market became a national obsession.",
    translation: "股市成为全民的痴迷。",
  },
  {
    startFrame: 9480,
    endFrame: 9660,
    text: "Fed's easy money created multiple asset bubbles.",
    translation: "美联储的容易的钱创造了多种资产泡沫。",
  },
  {
    startFrame: 9660,
    endFrame: 9840,
    text: "Stocks up 400%. Real estate. Margin. Bonds. Speculation.",
    translation: "股票上涨400%。房地产。保证金。债券。投机。",
  },
  {
    startFrame: 9840,
    endFrame: 10020,
    text: "Warning signs ignored. \"This time it's different.\"",
    translation: "警示信号被忽视。\"这次不一样。\"",
  },
  {
    startFrame: 10020,
    endFrame: 10200,
    text: "October 29, 1929: Black Tuesday.",
    translation: "1929年10月29日：黑色星期二。",
  },
  {
    startFrame: 10200,
    endFrame: 10380,
    text: "The bubble burst. Panic selling. Margin calls triggered.",
    translation: "泡沫破裂。恐慌性抛售。保证金追缴触发。",
  },
  {
    startFrame: 10380,
    endFrame: 10560,
    text: "Stocks crashed. $1600 billion in wealth evaporated.",
    translation: "股市崩盘。1600亿美元财富蒸发。",
  },
  {
    startFrame: 10560,
    endFrame: 10740,
    text: "40% of the nation's wealth disappeared into thin air.",
    translation: "国家40%的财富消失在稀薄空气中。",
  },
  {
    startFrame: 10740,
    endFrame: 10900,
    text: "And the harvest began.",
    translation: "收割开始了。",
  },
  {
    startFrame: 10900,
    endFrame: 11070,
    text: "25 billion in paper losses. Banks failed.",
    translation: "250亿美元账面损失。银行倒闭。",
  },
  {
    startFrame: 11070,
    endFrame: 11240,
    text: "The day the bubble burst. A disaster engineered for maximum gain.",
    translation: "泡沫破裂的那一天。为最大利益设计的灾难。",
  },
  {
    startFrame: 11240,
    endFrame: 11400,
    text: "\"Buy when blood is in the streets.\"",
    translation: "\"当血流成河时买入。\"",
  },
  {
    startFrame: 11400,
    endFrame: 11580,
    text: "Bankers moved in and acquired assets for pennies on the dollar.",
    translation: "银行家进场并以美元几美分的价格收购资产。",
  },
  {
    startFrame: 11580,
    endFrame: 11740,
    text: "Banks acquired for 1-2 cents. Factories for 5 cents.",
    translation: "银行以1-2美分收购。工厂以5美分。",
  },
  {
    startFrame: 11740,
    endFrame: 11920,
    text: "Millions became homeless. Bankers became wealthier than ever.",
    translation: "数百万人无家可归。银行家比以往任何时候都更富有。",
  },

  // Scene 11-13: 廉价收购 + 大萧条加深 + 真正的图谋揭露 (680-880s = 帧 20400-26400)
  {
    startFrame: 11920,
    endFrame: 12120,
    text: "The Great Depression began.",
    translation: "大萧条开始了。",
  },
  {
    startFrame: 12120,
    endFrame: 12360,
    text: "25% unemployment. 8,812 banks failed in 4 years.",
    translation: "25%失业率。4年内8812家银行倒闭。",
  },
  {
    startFrame: 12360,
    endFrame: 12540,
    text: "Bread lines. Soup kitchens. 15 million homeless.",
    translation: "面包队。施粥所。1500万人无家可归。",
  },
  {
    startFrame: 12540,
    endFrame: 12720,
    text: "GDP fell 45%. Economic activity collapsed.",
    translation: "GDP下降45%。经济活动崩溃。",
  },
  {
    startFrame: 12720,
    endFrame: 12900,
    text: "But was this crisis an accident? Or was it by design?",
    translation: "这场危机是意外？还是被设计的？",
  },
  {
    startFrame: 12900,
    endFrame: 13080,
    text: "The Fed's action: Tighten credit to shrink money supply.",
    translation: "美联储的行动：紧缩信贷以减少货币供应。",
  },
  {
    startFrame: 13080,
    endFrame: 13260,
    text: "Money supply collapsed 33%. The crisis was deliberately engineered.",
    translation: "货币供应萎缩33%。危机是被精心设计的。",
  },
  {
    startFrame: 13260,
    endFrame: 13440,
    text: "Economic devastation serves the banking elite's interests.",
    translation: "经济破坏服务于银行精英的利益。",
  },
  {
    startFrame: 13440,
    endFrame: 13620,
    text: "Create the problem. Pop the bubble. Harvest the assets.",
    translation: "制造问题。吹大泡沫。收割资产。",
  },
  {
    startFrame: 13620,
    endFrame: 13800,
    text: "The cycle: War, recession, and consolidation of wealth.",
    translation: "这个循环：战争、衰退和财富集中。",
  },

  // Scene 14-15: 罗斯福新政 + 总结 (880-900s = 帧 26400-27000)
  {
    startFrame: 13800,
    endFrame: 13980,
    text: "1933: Franklin D. Roosevelt launches the New Deal.",
    translation: "1933年：富兰克林·德拉诺·罗斯福启动新政。",
  },
  {
    startFrame: 13980,
    endFrame: 14160,
    text: "\"The only thing we have to fear is fear itself.\"",
    translation: "\"我们唯一恐惧的是恐惧本身。\"",
  },
  {
    startFrame: 14160,
    endFrame: 14340,
    text: "New Deal agencies: AAA, CCC, PWA, FDIC, SEC, TVA, and hundreds more.",
    translation: "新政机构：农业调整局、民间资源保护队、公共工程署、存款保险公司、证券交易委员会、田纳西河流域管理局，还有数百家。",
  },
  {
    startFrame: 14340,
    endFrame: 14520,
    text: "But behind the scenes: Executive Order 6102.",
    translation: "但暗流之中：6102号行政命令。",
  },
  {
    startFrame: 14520,
    endFrame: 14700,
    text: "All gold coins, bullion, and certificates surrendered to the government.",
    translation: "所有金币、金条和金证书都必须上交给政府。",
  },
  {
    startFrame: 14700,
    endFrame: 14880,
    text: "Penalty: Up to $10,000 fine and 10 years in prison.",
    translation: "惩罚：高达1万美元罚款和10年监禁。",
  },
  {
    startFrame: 14880,
    endFrame: 15060,
    text: "The real gold confiscation. Bank credit monopoly expanded further.",
    translation: "真正的黄金没收。银行信贷垄断进一步扩大。",
  },
  {
    startFrame: 15060,
    endFrame: 15240,
    text: "Government expanded. Bankers gained more power than ever.",
    translation: "政府扩大。银行家获得了比以往任何时候都多的权力。",
  },
  {
    startFrame: 15240,
    endFrame: 15400,
    text: "The harvest was complete. American agriculture and industry transferred.",
    translation: "收割完成。美国农业和工业被转移。",
  },
  {
    startFrame: 15400,
    endFrame: 15580,
    text: "Episode 05: Key lessons from 1914-1939.",
    translation: "第五集：从1914到1939年的关键教训。",
  },
  {
    startFrame: 15580,
    endFrame: 15720,
    text: "1. The Fed enabled war financing. Bankers harvested $30 billion.",
    translation: "1. 美联储使战争融资成为可能。银行家收割了300亿美元。",
  },
  {
    startFrame: 15720,
    endFrame: 15860,
    text: "2. The 1920s bubble was deliberately planned.",
    translation: "2. 1920年代的泡沫是故意策划的。",
  },
  {
    startFrame: 15860,
    endFrame: 16000,
    text: "3. The 1929 crash was engineered for asset acquisition.",
    translation: "3. 1929年崩盘是为资产收购而设计的。",
  },
  {
    startFrame: 16000,
    endFrame: 16140,
    text: "4. The Depression was used to transfer wealth to private hands.",
    translation: "4. 大萧条被用来将财富转移到私人手中。",
  },
  {
    startFrame: 16140,
    endFrame: 16320,
    text: "5. Understanding is the first defense against manipulation.",
    translation: "5. 理解是对抗操纵的第一道防线。",
  },
  {
    startFrame: 16320,
    endFrame: 16440,
    text: "War and recession: The harvest cycle that continues today.",
    translation: "战争和衰退：今天仍在继续的收割循环。",
  },
  {
    startFrame: 16440,
    endFrame: 16600,
    text: "Next Episode 06: The Rise of Hitler — 希特勒的崛起",
    translation: "下一集：希特勒的崛起",
  },
  {
    startFrame: 16600,
    endFrame: 16800,
    text: "Bankers fund both sides... again. The harvest cycle continues.",
    translation: "银行家资助双方……又一次。收割循环继续。",
  },
  {
    startFrame: 16800,
    endFrame: 17000,
    text: "Until we stop it. Understanding is our only defense.",
    translation: "直到我们阻止它。理解是我们唯一的防线。",
  },
  {
    startFrame: 17000,
    endFrame: 18000,
    text: "The war has already begun. Though we see no smoke.",
    translation: "战争已经开始。虽然看不见硝烟。",
  },
  {
    startFrame: 17000,
    endFrame: 18000,
    text: "See you in Episode 06.",
    translation: "第六集见。",
  },
];
