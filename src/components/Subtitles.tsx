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
 */
export const episode01Subtitles: SubtitleEntry[] = [
  // 场景1: 古代集市 (0-30s = 0-900帧)
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

  // 场景2: 货币演变 (30-120s = 900-3600帧)
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Goldsmiths began issuing paper receipts for gold deposits.",
    translation: "金匠开始为黄金存储发行纸币收据。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "People found it easier to trade paper than carry heavy gold.",
    translation: "人们发现交易纸币比携带沉重的黄金更容易。",
  },
  {
    startFrame: 1260,
    endFrame: 1500,
    text: "But then, the goldsmiths made a discovery...",
    translation: "但随后，金匠们有了一个发现……",
  },
  {
    startFrame: 1500,
    endFrame: 1740,
    text: "People rarely redeemed all their gold at once.",
    translation: "人们很少一次赎回所有黄金。",
  },
  {
    startFrame: 1740,
    endFrame: 1980,
    text: "So they could lend out paper that wasn't backed by real gold.",
    translation: "所以他们可以借出没有真实黄金支持的纸币。",
  },
  {
    startFrame: 1980,
    endFrame: 2220,
    text: "This was the birth of fractional reserve banking.",
    translation: "这是部分准备金银行制度的诞生。",
  },
  {
    startFrame: 2220,
    endFrame: 2460,
    text: "And the beginning of money's corruption.",
    translation: "也是货币腐败的开始。",
  },
  {
    startFrame: 2460,
    endFrame: 2700,
    text: "Today, this system has evolved into pure fiat currency.",
    translation: "今天，这个系统已演变为纯粹的法定货币。",
  },
  {
    startFrame: 2700,
    endFrame: 2940,
    text: "Money backed by nothing but government decree.",
    translation: "货币除了政府法令外没有任何支撑。",
  },
  {
    startFrame: 2940,
    endFrame: 3240,
    text: "They can print as much as they want.",
    translation: "他们想印多少就可以印多少。",
  },
  {
    startFrame: 3240,
    endFrame: 3600,
    text: "And your savings quietly disappear.",
    translation: "你的储蓄在悄悄消失。",
  },

  // 场景3: 历史时间线 (120-180s = 3600-5400帧)
  {
    startFrame: 3600,
    endFrame: 3840,
    text: "Let's look at how we got here.",
    translation: "让我们看看我们是如何走到这一步的。",
  },
  {
    startFrame: 3840,
    endFrame: 4080,
    text: "1694: Bank of England founded.",
    translation: "1694年：英格兰银行成立。",
  },
  {
    startFrame: 4080,
    endFrame: 4320,
    text: "The first central bank to issue paper money.",
    translation: "第一家发行纸币的中央银行。",
  },
  {
    startFrame: 4320,
    endFrame: 4560,
    text: "1913: The Federal Reserve created in America.",
    translation: "1913年：美联储在美国建立。",
  },
  {
    startFrame: 4560,
    endFrame: 4800,
    text: "A private corporation controlling US money supply.",
    translation: "一家控制美国货币供应的私人公司。",
  },
  {
    startFrame: 4800,
    endFrame: 5040,
    text: "1971: Nixon ends dollar's convertibility to gold.",
    translation: "1971年：尼克松结束美元与黄金的兑换。",
  },
  {
    startFrame: 5040,
    endFrame: 5280,
    text: "The world enters the era of pure fiat money.",
    translation: "世界进入纯粹法定货币时代。",
  },
  {
    startFrame: 5280,
    endFrame: 5400,
    text: "And the beginning of endless money printing.",
    translation: "也是无休止印钞的开始。",
  },

  // 场景4: 债务螺旋 (180-240s = 5400-7200帧)
  {
    startFrame: 5400,
    endFrame: 5640,
    text: "Today, every dollar in existence is debt.",
    translation: "今天，存在的每一美元都是债务。",
  },
  {
    startFrame: 5640,
    endFrame: 5880,
    text: "Created when someone borrows from a bank.",
    translation: "当有人从银行借款时被创造出来。",
  },
  {
    startFrame: 5880,
    endFrame: 6120,
    text: "And destroyed when the loan is repaid.",
    translation: "当贷款被偿还时被消灭。",
  },
  {
    startFrame: 6120,
    endFrame: 6360,
    text: "This system requires perpetual debt growth.",
    translation: "这个系统需要永久的债务增长。",
  },
  {
    startFrame: 6360,
    endFrame: 6600,
    text: "Or the entire money supply collapses.",
    translation: "否则整个货币供应就会崩溃。",
  },
  {
    startFrame: 6600,
    endFrame: 6840,
    text: "Global debt now exceeds 300 trillion dollars.",
    translation: "全球债务现已超过300万亿美元。",
  },
  {
    startFrame: 6840,
    endFrame: 7080,
    text: "And it continues growing exponentially.",
    translation: "并且呈指数级持续增长。",
  },
  {
    startFrame: 7080,
    endFrame: 7200,
    text: "A spiral that cannot end well.",
    translation: "一个结局不会好的螺旋。",
  },

  // 场景5: 通货膨胀 (240-300s = 7200-9000帧)
  {
    startFrame: 7200,
    endFrame: 7440,
    text: "But what does all this mean for you?",
    translation: "但这一切对你意味着什么？",
  },
  {
    startFrame: 7440,
    endFrame: 7680,
    text: "It means inflation is not an accident.",
    translation: "这意味着通货膨胀不是意外。",
  },
  {
    startFrame: 7680,
    endFrame: 7920,
    text: "It's a built-in feature of the debt money system.",
    translation: "它是债务货币系统的内置特征。",
  },
  {
    startFrame: 7920,
    endFrame: 8160,
    text: "Your money loses value every single year.",
    translation: "你的钱每年都在贬值。",
  },
  {
    startFrame: 8160,
    endFrame: 8400,
    text: "Since 1971, the dollar has lost over 85% of its purchasing power.",
    translation: "自1971年以来，美元已损失超过85%的购买力。",
  },
  {
    startFrame: 8400,
    endFrame: 8640,
    text: "What cost $100 then costs over $700 today.",
    translation: "当时100美元的东西现在要700多美元。",
  },
  {
    startFrame: 8640,
    endFrame: 8880,
    text: "This silent theft happens while you sleep.",
    translation: "这种无声的盗窃在你睡觉时发生。",
  },
  {
    startFrame: 8880,
    endFrame: 9000,
    text: "And most people never notice.",
    translation: "大多数人从未察觉。",
  },

  // 场景6: 结尾警示 (300-360s = 9000-10800帧)
  {
    startFrame: 9000,
    endFrame: 9240,
    text: "This is not just history.",
    translation: "这不仅仅是历史。",
  },
  {
    startFrame: 9240,
    endFrame: 9480,
    text: "It's happening right now.",
    translation: "它正在发生。",
  },
  {
    startFrame: 9480,
    endFrame: 9720,
    text: "Understanding money is the first step to protecting your wealth.",
    translation: "理解货币是保护你财富的第一步。",
  },
  {
    startFrame: 9720,
    endFrame: 9960,
    text: "The system is designed to transfer wealth from savers to debtors.",
    translation: "这个系统旨在将财富从储蓄者转移给债务人。",
  },
  {
    startFrame: 9960,
    endFrame: 10200,
    text: "From the productive to the privileged.",
    translation: "从生产者转移到特权阶层。",
  },
  {
    startFrame: 10200,
    endFrame: 10440,
    text: "But knowledge is power.",
    translation: "但知识就是力量。",
  },
  {
    startFrame: 10440,
    endFrame: 10680,
    text: "And understanding the game is the only way to win it.",
    translation: "理解游戏是赢得游戏的唯一方式。",
  },
  {
    startFrame: 10680,
    endFrame: 10800,
    text: "The Currency War continues...",
    translation: "货币战争继续……",
  },
];
