/**
 * 主题：美元死穴与黄金一阳指
 *
 * Scene分离格式说明：
 * - 每个Scene有独立的字幕数组，从相对帧0开始
 * - 保留所有原始字幕内容
 * - 提供合并的 episode10Subtitles 数组用于兼容
 */
import { SubtitleEntry } from "./index";

// ========== Scene 1: OpeningScene (帧 0-900) ==========
// 开场介绍：债务货币的本质
export const OpeningScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 90,
    text: "Episode 10: The Dollar's Fatal Weakness",
    translation: "第十集：美元死穴与黄金一阳指",
  },
  {
    startFrame: 90,
    endFrame: 210,
    text: "Currency comes in two forms:",
    translation: "货币就其本质而言，可分为债务货币与非债务货币两大类。",
  },
  {
    startFrame: 210,
    endFrame: 330,
    text: "debt-based and non-debt.",
    translation: "债务货币就是当今主要发达国家所通械系统，它的主要部分是由政府、公司以及私人的货币化的债务所构成。",
  },
  {
    startFrame: 330,
    endFrame: 450,
    text: "Dollar is the quintessential debt currency.",
    translation: "美元就是其中最典型的例子。",
  },
  {
    startFrame: 450,
    endFrame: 570,
    text: "Every dollar is created when debt is created.",
    translation: "美元在债务产生的同时被创造出来，在债务偿还的同时被销毁。",
  },
  {
    startFrame: 570,
    endFrame: 690,
    text: "Every dollar carries interest.",
    translation: "流通中的每一个美元，都是一张债务欠条，每一张欠条在每一天里都在产生债务利息。",
  },
  {
    startFrame: 690,
    endFrame: 810,
    text: "Interest must be paid with more debt.",
    translation: "债务美元的利息是原有货币总量之外的部分，必然要求在现有货币总量之外再创造出新的债务美元。",
  },
  {
    startFrame: 810,
    endFrame: 900,
    text: "This is the fatal flaw.",
    translation: "人民借钱越多，就必须借更多的钱。债务与货币死锁在一起。",
  },
];

// ========== Scene 2: FractionalReserveScene (帧 900-2700) ==========
// 部分储备金体系：银行的货币创造
export const FractionalReserveScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 150,
    text: "Goldsmith bankers offered safe storage for gold coins.",
    translation: "最早的金匠银行家们提供的是纯粹的金币存放业务。",
  },
  {
    startFrame: 150,
    endFrame: 300,
    text: "They issued receipts for deposited gold.",
    translation: "当储户将金币交给银行家时，银行家提供标准格式的收据。",
  },
  {
    startFrame: 300,
    endFrame: 450,
    text: "These receipts became paper money.",
    translation: "这些收据就是银行券，这些金币的衍生物逐渐成为社会交易的媒介。",
  },
  {
    startFrame: 450,
    endFrame: 600,
    text: "Most depositors never redeemed their gold.",
    translation: "久而久之，聪明的金匠银行家发现平时只有很少的储户前来要求将银行券兑换成金币。",
  },
  {
    startFrame: 600,
    endFrame: 750,
    text: "So bankers started lending out depositors' gold.",
    translation: "社会上总有一些人急需用钱，于是银行家就告诉他们可以到银行来借钱。",
  },
  {
    startFrame: 750,
    endFrame: 900,
    text: "They printed more receipts than gold they had.",
    translation: "当借钱的人来到银行，银行家就用多开收据的办法，增发银行券来进行贷款，坐收利息。",
  },
  {
    startFrame: 900,
    endFrame: 1050,
    text: "This is how banks create money from nothing.",
    translation: "只要不增发得太过份，一般不会引起储户怀疑。",
  },
  {
    startFrame: 1050,
    endFrame: 1200,
    text: "The rule: lend 10x what you hold.",
    translation: "长期的经验说明，增发比如10倍的银行券是安全的。",
  },
  {
    startFrame: 1200,
    endFrame: 1350,
    text: "This is fractional reserve banking.",
    translation: "这就是部分储备金体系。",
  },
  {
    startFrame: 1350,
    endFrame: 1500,
    text: "It creates inflation inherently.",
    translation: "部分储备金系统天生就有模糊两种银行服务产品界限的冲动。",
  },
  {
    startFrame: 1500,
    endFrame: 1650,
    text: "This is the root of inflation.",
    translation: "这种欠条加许诺的银行券与生俱来就带有风险系数和通货膨胀的天性。",
  },
  {
    startFrame: 1650,
    endFrame: 1800,
    text: "And the foundation of the Fed.",
    translation: "1913年，国际银行家在美国终于成功地建立了部分准备金体系的楷模：美联储。",
  },
];

// ========== Scene 3: DebtDollarScene (帧 2700-4500) ==========
// 债务美元：美联储如何创造货币
export const DebtDollarScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "The Federal Reserve admits:",
    translation: "美联储纽约银行是这样描述美元的：",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Banks create money when they lend.",
    translation: "银行在借款人承诺还钱时，产生出货币。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Money is created from debt.",
    translation: "银行是通过将这些私人和商业债务货币化来创造金钱的。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "The Fed admits: dollar has no intrinsic value.",
    translation: "美联储芝加哥银行的解释是：在美国，无论是纸币还是银行存款，都不像商品一样具有内在价值，美元仅仅是一张纸。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "Here's how the system works:",
    translation: "债务美元是怎样炼成的：",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Step 1: Treasury issues debt.",
    translation: "第一步，国会批准国债发行规模，财政部将国债设计成不同种类的债券。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "Step 2: Fed buys this debt with created money.",
    translation: "第二步：美联储照单全收，这时美联储的账目上将这些国债记录在证券资产项下。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "The Fed creates money from nothing.",
    translation: "当美联储获得了这一资产之后，就可以用它产生一项负债，这就是美联储印制的美联储支票。这是无中生有的关键步骤。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "Step 3: Commercial banks amplify by 10x.",
    translation: "第三步：商业银行储蓄在银行账目上被重新分类为银行储备。在部分准备金体系之下，美联储允许商业银行只保留其10%的储蓄做储备金，而将90%的储蓄贷出。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "This is how debt becomes money.",
    translation: "这就是债务货币化的全过程。",
  },
];

// ========== Scene 4: DebtRiverScene (帧 4500-6300) ==========
// 债务悬河：美国债务危机
export const DebtRiverScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "From 1913 to 2001:",
    translation: "从1913年到2001年，",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "US accumulated $6 trillion in debt.",
    translation: "美国在87年里一共积累了6万亿美元的国债。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "But from 2001 to 2006 alone:",
    translation: "而从2001年到2006年，",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "It added another $3 trillion!",
    translation: "短短的5年多的时间里，美国竟增加了近3万亿美元的国债！",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "Total US debt exceeds $44 trillion.",
    translation: "美国联邦国债总量已高达8万8000亿美元，并以每天25.5亿的速度增加着。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "That's $150,000 per American.",
    translation: "44万亿美元这些债务平摊到每一个美国人身上高达近15万美元。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "The debt can never be repaid.",
    translation: "一个四口之家要负担近60万美元的债务。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "Paying it off would destroy the dollar.",
    translation: "在债务货币之下，美国将永远无法偿还国债、公司和私人债务，因为还清债务之日，也正是美元消失之时。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "Interest payments are massive.",
    translation: "美国联邦政府的利息支出已在政府开支中高居第三位，仅次于医疗健康和国防，每年高达近4000亿美元。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "This is the debt spiral.",
    translation: "这就是债务货币的必然结果。",
  },
];

// ========== Scene 5: DerivativesScene (帧 6300-8100) ==========
// 金融衍生品：吸收多余美元的场所
export const DerivativesScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Where does all the money go?",
    translation: "这些天文数字的利息支出到哪里去了？",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "The answer: financial derivatives.",
    translation: "窍门在于必须有吸纳大量货币增发的去处，这就是近十几年来畸形膨胀起来的金融衍生品市场。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "In 2000, derivatives were near zero.",
    translation: "20年前，全世界的金融衍生产品的名义价值总额几乎为零，",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "By 2006: $370 trillion!",
    translation: "到2006年，这个市场的总规模已经达到370万亿美元！",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "That's 8 times global GDP.",
    translation: "相当于全世界的GDP总和的8倍多。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Derivatives are packaged debt.",
    translation: "金融衍生产品的本质是债务。它们是债务的打包，是债务的集合，是债务的集装箱。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "They absorb excess dollars.",
    translation: "它们吸收了多余的美元，维持着美元泡沫。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "But it's a ticking time bomb.",
    translation: "但这是 一个随时可能爆炸的定时炸弹。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "One crisis could collapse the system.",
    translation: "一个问题就可能使这个国际金融体系崩溃。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "This is the fatal weakness.",
    translation: "这就是美元的死穴。",
  },
];

// ========== Scene 6: FannieFreddieScene (帧 8100-9900) ==========
// 房利美和房地美：第二美联储
export const FannieFreddieScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Fannie Mae and Freddie Mac",
    translation: "政府特许机构在这里指美国政府特许授权的最大的两家房地产贷款的公司：房利美和房地美。",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Hold $4 trillion in mortgage bonds.",
    translation: "这两家公司负责建立美国房地产贷款的二级市场，其发行的以房地产为抵押品的债券总额高达4万亿美元。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "They act as a second Federal Reserve.",
    translation: "可以不算夸张地说，这两家公司的债券在一定程度上发挥着美国财政部债券的角色。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "Providing liquidity to the banking system.",
    translation: "他们实际上成为了第二美联储，为美国银行系统提供大量的流动性。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "But their capital ratio is dangerously low: 3.5%.",
    translation: "尤其在政府不方便的时候。这就造成了在美联储进行了17次连续升息之后，金融市场上仍然呈现出流动性泛滥。GSE的自有资本金已经下降到极度危险的3.5%的水平上。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "A single crisis could collapse everything.",
    translation: "想起当年长期资本管理基金在世界上号称最懂经济的大师指导下，一个俄罗斯债务危机就使这个国际仰慕的完美对冲基金頃刻之间灰飞烟灭。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "This is systemic risk.",
    translation: "这就是系统风险。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "The whole system is fragile.",
    translation: "整个金融体系异常脆弱。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "One spark can ignite a global fire.",
    translation: "一个火星就可能引发全球大火。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "Gold is the only alternative.",
    translation: "黄金虽然已经不是世界货币，可黄金始终是制约国际银行家通过通货膨胀劫掠世界人民财富的最大障碍。",
  },
];

// ========== Scene 7: GoldPrisonScene (帧 9900-11700) ==========
// 被软禁的黄金：央行出租黄金
export const GoldPrisonScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 240,
    text: "Gold has been imprisoned outside the monetary system.",
    translation: "黄金虽然已经不是世界货币，",
  },
  {
    startFrame: 240,
    endFrame: 480,
    text: "But it remains the ultimate form of wealth.",
    translation: "但黄金始终是制约国际银行家通过通货膨胀劫掠世界人民财富的最大障碍。",
  },
  {
    startFrame: 480,
    endFrame: 720,
    text: "In 1999, England sold half its gold at $280/oz.",
    translation: "最让人无法理解的是英格兰银行在1999年5月7日悍然宣布卖掉一半的黄金储备（415吨）的声明了。这一石破天惊的消息使本已疲软的国际金价狂跌到280美元一盎司。",
  },
  {
    startFrame: 720,
    endFrame: 960,
    text: "This made no business sense.",
    translation: "人们不禁狐疑，英格兰银行究竟要干吗？",
  },
  {
    startFrame: 960,
    endFrame: 1200,
    text: "The truth: central banks had rented their gold.",
    translation: "英格兰银行违背基本的商业规律行事，只因为一件事：它恐惧金价持续上涨！",
  },
  {
    startFrame: 1200,
    endFrame: 1440,
    text: "The gold had been loaned to banks.",
    translation: "英格兰银行的黄金到哪里去了呢？原来，早已被租借给了金锭银行家们。",
  },
  {
    startFrame: 1440,
    endFrame: 1680,
    text: "Central banks rented gold at 1% interest.",
    translation: "在90年代初，国际银行家开始推销一种说法：黄金放在中央银行的仓库里，没有任何利息收入，",
  },
  {
    startFrame: 1680,
    endFrame: 1920,
    text: "Then they sold the gold at market price.",
    translation: "不如出租给信誉好的金锭银行家，利息可以低到1%，但好转也是一笔稳定的收入，果然此法在欧洲很快蔚然成风。",
  },
  {
    startFrame: 1920,
    endFrame: 2160,
    text: "They used proceeds to buy US bonds at 5%.",
    translation: "JP摩根公司为首的国际银行家以自己良好信誉从中央银行手中以1%的超低利息借来黄金，再到黄金市场上出售，拿到手的钱转手就购买5%回报率的美国国债，稳吃4%的利差，这被称为黄金套利交易。",
  },
  {
    startFrame: 2160,
    endFrame: 2400,
    text: "This suppressed gold prices for decades.",
    translation: "这样一来，抛售中央银行的黄金既打压了黄金价格，又吃到了利差的美餐，还同时刺激了美国国债的需求，压低了长期利率，真可谓一箭数雕的妙计。",
  },
  {
    startFrame: 2400,
    endFrame: 2640,
    text: "But in 1999, the scheme began to collapse.",
    translation: "1999年是黄金战场的重要战略转折点，其意义相当于二战中的斯大林格勒保卫战。",
  },
  {
    startFrame: 2640,
    endFrame: 2880,
    text: "Gold prices started rising.",
    translation: "从此以后，打压金价的企图，再也未能取得黄金战场的战略主动权。",
  },
  {
    startFrame: 2880,
    endFrame: 3120,
    text: "Central banks lost control.",
    translation: "黄金价格开始进入上升通道。",
  },
  {
    startFrame: 3120,
    endFrame: 3360,
    text: "The gold bull market began.",
    translation: "黄金牛市开始了。",
  },
  {
    startFrame: 3360,
    endFrame: 3600,
    text: "This threatens the dollar system.",
    translation: "这威胁到美元霸权体系。",
  },
];

// ========== Scene 8: GoldCounterScene (帧 11700-13500) ==========
// 2004年黄金定价权的转变
export const GoldCounterScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 240,
    text: "April 14, 2004",
    translation: "2004年4月14日，",
  },
  {
    startFrame: 240,
    endFrame: 480,
    text: "The Rothschild family announced",
    translation: "罗斯柴尔德家族突然宣布退出伦敦黄金定价体系，",
  },
  {
    startFrame: 480,
    endFrame: 720,
    text: "they were leaving the London Gold Fix.",
    translation: "这一石破天惊的消息立刻震撼了全世界的投资者。",
  },
  {
    startFrame: 720,
    endFrame: 960,
    text: "After 200 years of controlling gold pricing.",
    translation: "戴维·罗斯柴尔德解释道：我们在伦敦商品市场（包括黄金）交易的收入在过去5年中已经下降到不足我们业务总收入的1%，",
  },
  {
    startFrame: 960,
    endFrame: 1200,
    text: "Why would they leave at the peak?",
    translation: "从战略分析的角度看，黄金交易已经不是我们的核心业务，所以我们选择退出这个市场。",
  },
  {
    startFrame: 1200,
    endFrame: 1440,
    text: "Perhaps they knew gold prices would surge.",
    translation: "另外一种可能就是：黄金和白银的价格最终将会失控，",
  },
  {
    startFrame: 1440,
    endFrame: 1680,
    text: "Or they wanted to distance from manipulation.",
    translation: "早早地摘清与黄金之间的任何关系，如果10年以后，金银价格果然出了什么问题，谁也怪不到罗斯柴尔德家族身上。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "Time will tell.",
    translation: "时间会证明一切。",
  },
];

// ========== Scene 9: RothschildScene (帧 13500-15300) ==========
// 美元泡沫与黄金的关系
export const RothschildScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 240,
    text: "The dollar bubble cannot last forever.",
    translation: "从上世纪70年代黄金遭到软禁开始，世界的证券市场和大宗商品市场呈现出反向关系。",
  },
  {
    startFrame: 240,
    endFrame: 480,
    text: "When gold rises, stocks fall.",
    translation: "大宗商品市场极为火暴的70年代，也正是证券市场表现奇差的10年。",
  },
  {
    startFrame: 480,
    endFrame: 720,
    text: "1980-2000: stocks rose, commodities fell.",
    translation: "而从80年代初开始的证券市场18年大牛市，则代表着大宗商品市场熊气弥漫的时代。",
  },
  {
    startFrame: 720,
    endFrame: 960,
    text: "Since 2001: commodities rising, stocks rising too.",
    translation: "而从2001年开始，大宗商品市场开始了牛气冲天的征途，与此同时，股市、债市、房地产、金融衍生市场也同步狂长。",
  },
  {
    startFrame: 960,
    endFrame: 1200,
    text: "This is unsustainable.",
    translation: "表面上看是美元资产增值，实际上是债务美元的爆炸性扩张所致。",
  },
  {
    startFrame: 1200,
    endFrame: 1440,
    text: "Gold is the Achilles heel of the dollar.",
    translation: "看似庞然大物的美元泡沫体系，其致命的死穴就在信心二字，",
  },
  {
    startFrame: 1440,
    endFrame: 1680,
    text: "Rising gold prices will force interest rates up.",
    translation: "而黄金则是点中这一命门的一阳指。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "This will collapse the derivatives market.",
    translation: "黄金价格上涨将逼迫利率上升，这将导致金融衍生品市场崩溃。",
  },
];

// ========== Scene 10: SummaryScene (帧 15300-17100) ==========
// 总结：债务货币的终局
export const SummaryScene: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 240,
    text: "Fractional reserve plus debt currency",
    translation: "部分储备金制度加上债务货币体系，是长期通货膨胀的元凶，",
  },
  {
    startFrame: 240,
    endFrame: 480,
    text: "is the root cause of inflation.",
    translation: "在债务货币之下，美国将永远无法偿还国债以及公司和私人债务，因为还清之日，也是美元消失之时。",
  },
  {
    startFrame: 480,
    endFrame: 720,
    text: "The debt can never be repaid.",
    translation: "这个问题无解。",
  },
  {
    startFrame: 720,
    endFrame: 960,
    text: "China and US are in financial terror balance.",
    translation: "如果中国停止平均每星期几十亿美元国债的购买，美国经济就会有大麻烦，",
  },
  {
    startFrame: 960,
    endFrame: 1200,
    text: "But both depend on each other.",
    translation: "但是由于向美国出口萎缩，中国经济也会有大麻烦，双方已经陷入金融恐怖平衡的状态。",
  },
  {
    startFrame: 1200,
    endFrame: 1440,
    text: "Gold is the only solution.",
    translation: "黄金是唯一的解决方案。",
  },
  {
    startFrame: 1440,
    endFrame: 1680,
    text: "When gold rises, the dollar falls.",
    translation: "当黄金价格大幅上涨时，美元霸权就会动摇。",
  },
  {
    startFrame: 1680,
    endFrame: 1800,
    text: "This is the dollar's fatal weakness.",
    translation: "这就是美元的死穴。",
  },
];

// ========== Scene Offsets ==========
// 每个Scene的全局帧偏移量（用于合并计算）
export const sceneOffsets = {
  OpeningScene: 0,
  FractionalReserveScene: 900,
  DebtDollarScene: 2700,
  DebtRiverScene: 4500,
  DerivativesScene: 6300,
  FannieFreddieScene: 8100,
  GoldPrisonScene: 9900,
  GoldCounterScene: 11700,
  RothschildScene: 13500,
  SummaryScene: 15300,
};

// ========== 兼容层：合并的字幕数组 ==========
// 为向后兼容，将所有Scene的字幕合并为一个全局帧偏移的数组
export const episode10Subtitles: SubtitleEntry[] = [
  // OpeningScene (offset: 0)
  ...OpeningScene,

  // FractionalReserveScene (offset: 900)
  ...FractionalReserveScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.FractionalReserveScene,
    endFrame: sub.endFrame + sceneOffsets.FractionalReserveScene,
  })),

  // DebtDollarScene (offset: 2700)
  ...DebtDollarScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.DebtDollarScene,
    endFrame: sub.endFrame + sceneOffsets.DebtDollarScene,
  })),

  // DebtRiverScene (offset: 4500)
  ...DebtRiverScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.DebtRiverScene,
    endFrame: sub.endFrame + sceneOffsets.DebtRiverScene,
  })),

  // DerivativesScene (offset: 6300)
  ...DerivativesScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.DerivativesScene,
    endFrame: sub.endFrame + sceneOffsets.DerivativesScene,
  })),

  // FannieFreddieScene (offset: 8100)
  ...FannieFreddieScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.FannieFreddieScene,
    endFrame: sub.endFrame + sceneOffsets.FannieFreddieScene,
  })),

  // GoldPrisonScene (offset: 9900)
  ...GoldPrisonScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.GoldPrisonScene,
    endFrame: sub.endFrame + sceneOffsets.GoldPrisonScene,
  })),

  // GoldCounterScene (offset: 11700)
  ...GoldCounterScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.GoldCounterScene,
    endFrame: sub.endFrame + sceneOffsets.GoldCounterScene,
  })),

  // RothschildScene (offset: 13500)
  ...RothschildScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.RothschildScene,
    endFrame: sub.endFrame + sceneOffsets.RothschildScene,
  })),

  // SummaryScene (offset: 15300)
  ...SummaryScene.map((sub) => ({
    ...sub,
    startFrame: sub.startFrame + sceneOffsets.SummaryScene,
    endFrame: sub.endFrame + sceneOffsets.SummaryScene,
  })),
];

// Alias exports for compatibility with compositions using per-scene format
export const openingSubs = OpeningScene;
export const fractionalReserveSubs = FractionalReserveScene;
export const debtDollarSubs = DebtDollarScene;
export const debtRiverSubs = DebtRiverScene;
export const derivativesSubs = DerivativesScene;
export const fannieFreddieSubs = FannieFreddieScene;
export const goldPrisonSubs = GoldPrisonScene;
export const goldCounterSubs = GoldCounterScene;
export const rothschildSubs = RothschildScene;
export const summarySubs = SummaryScene;

export default episode10Subtitles;
