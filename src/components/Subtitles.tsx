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
 * 场景0: 开场任务 (0-10s = 0-300帧)
 * 场景1: 滑铁卢战场 (10-70s = 300-2100帧)
 * 场景2: 情报传递 (70-160s = 2100-4800帧)
 * 场景3: 交易所门口 (160-190s = 4800-5700帧)
 * 场景4: 第一次抛售 (190-250s = 5700-7500帧)
 * 场景5: 恐慌蔓延 (250-310s = 7500-9300帧)
 * 场景6: 反向操作 (310-340s = 9300-10200帧)
 * 场景7: 20倍收益 (340-360s = 10200-10800帧)
 */
export const episode03Subtitles: SubtitleEntry[] = [
  // 场景0: 开场任务 (0-10s = 0-300帧)
  {
    startFrame: 0,
    endFrame: 120,
    text: "Episode 3: Waterloo",
    translation: "第三集：滑铁卢",
  },
  {
    startFrame: 120,
    endFrame: 300,
    text: "The battle where information became the ultimate weapon.",
    translation: "这场战役中，信息成为了终极武器。",
  },

  // 场景1: 滑铁卢战场 (10-70s = 300-2100帧)
  {
    startFrame: 300,
    endFrame: 450,
    text: "June 18, 1815.",
    translation: "1815年6月18日。",
  },
  {
    startFrame: 450,
    endFrame: 630,
    text: "The Battle of Waterloo.",
    translation: "滑铁卢战役。",
  },
  {
    startFrame: 630,
    endFrame: 810,
    text: "Napoleon Bonaparte faces the Duke of Wellington.",
    translation: "拿破仑·波拿巴对阵威灵顿公爵。",
  },
  {
    startFrame: 810,
    endFrame: 1020,
    text: "The fate of Europe hangs in the balance.",
    translation: "欧洲的命运悬于一线。",
  },
  {
    startFrame: 1020,
    endFrame: 1230,
    text: "But another battle was being fought...",
    translation: "但另一场战斗也在进行着……",
  },
  {
    startFrame: 1230,
    endFrame: 1440,
    text: "Not with armies and cannons.",
    translation: "不是用军队和大炮。",
  },
  {
    startFrame: 1440,
    endFrame: 1650,
    text: "But with information.",
    translation: "而是用信息。",
  },
  {
    startFrame: 1650,
    endFrame: 1860,
    text: "In London, Nathan Rothschild waits...",
    translation: "在伦敦，内森·罗斯柴尔德等待着……",
  },
  {
    startFrame: 1860,
    endFrame: 2100,
    text: "For news that will make him the richest man in the world.",
    translation: "等着那个将让他成为世界首富的消息。",
  },

  // 场景2: 情报传递 (70-160s = 2100-4800帧)
  {
    startFrame: 2100,
    endFrame: 2310,
    text: "Rothschild had built his own intelligence network.",
    translation: "罗斯柴尔德建立了自己的情报网络。",
  },
  {
    startFrame: 2310,
    endFrame: 2550,
    text: "Carrier pigeons, fast ships, and trusted messengers.",
    translation: "信鸽、快船和值得信赖的信使。",
  },
  {
    startFrame: 2550,
    endFrame: 2790,
    text: "He would know the result before anyone else in London.",
    translation: "他会在伦敦其他人之前知道结果。",
  },
  {
    startFrame: 2790,
    endFrame: 3030,
    text: "Because in the financial world...",
    translation: "因为在金融世界里……",
  },
  {
    startFrame: 3030,
    endFrame: 3270,
    text: "Information is more valuable than gold.",
    translation: "信息比黄金更有价值。",
  },
  {
    startFrame: 3270,
    endFrame: 3510,
    text: "His messenger watched the entire battle from a safe distance.",
    translation: "他的信使从安全距离观看了整个战役。",
  },
  {
    startFrame: 3510,
    endFrame: 3780,
    text: "And when the outcome was clear...",
    translation: "当结果变得清晰时……",
  },
  {
    startFrame: 3780,
    endFrame: 4020,
    text: "He raced to the coast.",
    translation: "他冲向海岸。",
  },
  {
    startFrame: 4020,
    endFrame: 4260,
    text: "Across the channel to England.",
    translation: "穿越海峡到达英国。",
  },
  {
    startFrame: 4260,
    endFrame: 4530,
    text: "And galloped to London with the news.",
    translation: "带着消息飞奔向伦敦。",
  },
  {
    startFrame: 4530,
    endFrame: 4800,
    text: "Days before the official messenger arrived.",
    translation: "比官方信使早到几天。",
  },

  // 场景3: 交易所门口 (160-190s = 4800-5700帧)
  {
    startFrame: 4800,
    endFrame: 5010,
    text: "Nathan Rothschild walked into the London Stock Exchange.",
    translation: "内森·罗斯柴尔德走进伦敦证券交易所。",
  },
  {
    startFrame: 5010,
    endFrame: 5250,
    text: "His face was grave.",
    translation: "他的表情凝重。",
  },
  {
    startFrame: 5250,
    endFrame: 5490,
    text: "Everyone assumed he knew bad news.",
    translation: "所有人都以为他知道坏消息。",
  },
  {
    startFrame: 5490,
    endFrame: 5700,
    text: '"Wellington has lost," he seemed to say.',
    translation: '"威灵顿输了，"他似乎在说。',
  },

  // 场景4: 第一次抛售 (190-250s = 5700-7500帧)
  {
    startFrame: 5700,
    endFrame: 5940,
    text: "Rothschild began selling.",
    translation: "罗斯柴尔德开始抛售。",
  },
  {
    startFrame: 5940,
    endFrame: 6180,
    text: "Everything. British bonds. Consols. Government securities.",
    translation: "抛售一切。英国债券。统一公债。政府证券。",
  },
  {
    startFrame: 6180,
    endFrame: 6450,
    text: "Panic spread through the exchange.",
    translation: "恐慌在交易所蔓延。",
  },
  {
    startFrame: 6450,
    endFrame: 6720,
    text: '"If Rothschild is selling, Wellington must have lost!"',
    translation: '"如果罗斯柴尔德在抛售，威灵顿一定输了！"',
  },
  {
    startFrame: 6720,
    endFrame: 6990,
    text: "The panic selling drove prices to nearly zero.",
    translation: "恐慌性抛售将价格推至几乎归零。",
  },
  {
    startFrame: 6990,
    endFrame: 7260,
    text: "British securities became worthless.",
    translation: "英国证券变得一文不值。",
  },
  {
    startFrame: 7260,
    endFrame: 7500,
    text: "Everyone rushed to sell before losing everything.",
    translation: "所有人都赶在血本无归前抛售。",
  },

  // 场景5: 恐慌蔓延 (250-310s = 7500-9300帧)
  {
    startFrame: 7500,
    endFrame: 7740,
    text: "The panic spread beyond the exchange.",
    translation: "恐慌从交易所蔓延开来。",
  },
  {
    startFrame: 7740,
    endFrame: 8010,
    text: "Merchants closed their shops.",
    translation: "商人们关上了店门。",
  },
  {
    startFrame: 8010,
    endFrame: 8280,
    text: "Banks stopped lending.",
    translation: "银行停止放贷。",
  },
  {
    startFrame: 8280,
    endFrame: 8550,
    text: "London prepared for the worst.",
    translation: "伦敦为最坏的情况做准备。",
  },
  {
    startFrame: 8550,
    endFrame: 8820,
    text: "News of Napoleon's victory seemed certain.",
    translation: "拿破仑胜利的消息似乎已成定局。",
  },
  {
    startFrame: 8820,
    endFrame: 9090,
    text: "The British economy would collapse.",
    translation: "英国经济将会崩溃。",
  },
  {
    startFrame: 9090,
    endFrame: 9300,
    text: "And Rothschild was leading the sell-off.",
    translation: "而罗斯柴尔德正在带头抛售。",
  },

  // 场景6: 反向操作 (310-340s = 9300-10200帧)
  {
    startFrame: 9300,
    endFrame: 9540,
    text: "But while everyone sold...",
    translation: "但当所有人都在抛售时……",
  },
  {
    startFrame: 9540,
    endFrame: 9780,
    text: "Rothschild's agents were buying.",
    translation: "罗斯柴尔德的代理人在买进。",
  },
  {
    startFrame: 9780,
    endFrame: 10050,
    text: "Secretly. Quietly. Desperately.",
    translation: "秘密地。悄悄地。拼命地。",
  },
  {
    startFrame: 10050,
    endFrame: 10200,
    text: "Buying everything they could.",
    translation: "买进他们能买到的一切。",
  },

  // 场景7: 20倍收益 (340-360s = 10200-10800帧)
  {
    startFrame: 10200,
    endFrame: 10440,
    text: "When the official news finally arrived...",
    translation: "当官方消息终于到达时……",
  },
  {
    startFrame: 10440,
    endFrame: 10680,
    text: "Wellington had won. Napoleon was defeated.",
    translation: "威灵顿赢了。拿破仑被打败了。",
  },
  {
    startFrame: 10680,
    endFrame: 10800,
    text: "British securities soared. Rothschild owned it all.",
    translation: "英国证券飙升。罗斯柴尔德拥有了这一切。",
  },
  {
    startFrame: 10800,
    endFrame: 11040,
    text: "His fortune multiplied 20 times in one day.",
    translation: "他的财富在一天内增长了20倍。",
  },
  {
    startFrame: 11040,
    endFrame: 11280,
    text: "Information is the ultimate currency.",
    translation: "信息是终极货币。",
  },
  {
    startFrame: 11280,
    endFrame: 11400,
    text: "And those who control it... control the world.",
    translation: "而那些控制信息的人……控制着世界。",
  },
];
