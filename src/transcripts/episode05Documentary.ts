/**
 * Episode05 纪录片逐字稿 - 一战与大衰退：国际银行家的"丰收时节"
 *
 * 基于第四章内容生成
 * 总时长: 约180秒 (5400帧 @30fps)
 *
 * 场景划分:
 * - Scene 0: 开场 - 战争序幕 (10s)
 * - Scene 1: 没有美联储就没有一战 (20s)
 * - Scene 2: 斯特朗操纵下的美联储 (18s)
 * - Scene 3: 威尔逊走向战争 (18s)
 * - Scene 4: 大发战争财的银行家们 (20s)
 * - Scene 5: 凡尔赛和约 (18s)
 * - Scene 6: 1921年农业萧条 (18s)
 * - Scene 7: 1927年密谋 (20s)
 * - Scene 8: 1929泡沫破裂 (22s)
 * - Scene 9: 总结揭示 (16s)
 */

export interface TranscriptSegment {
  id: string;
  scene: number;
  startTime: number; // 秒
  endTime: number; // 秒
  speaker: string;
  text: string;
  textCn: string;
  notes?: string;
}

export const episode05DocumentaryTranscript: TranscriptSegment[] = [
  // ========== Scene 0: 开场 (0-10s) ==========
  {
    id: "ep05_00_01",
    scene: 0,
    startTime: 0,
    endTime: 5,
    speaker: "Narrator",
    text: '"The real threat to our republic is this invisible government, which like a giant octopus sprawls its slimy legs over our cities, states and nation."',
    textCn:
      '"我们共和国的真正威胁是这个看不见的政府，它就像一只巨大的章鱼，用它无数黏糊糊的触角紧紧裹挟着我们的城市、州和国家。"',
    notes: "John Hylan, Mayor of New York, 1927",
  },
  {
    id: "ep05_00_02",
    scene: 0,
    startTime: 5,
    endTime: 10,
    speaker: "Narrator",
    text: "The head of this octopus is the Rockefeller Standard Oil group and a small group of international bankers who practically run the United States government for their own selfish purposes.",
    textCn:
      "这只章鱼的头是洛克菲勒的标准石油集团和一小撮被称为国际银行家的具有极大能量的金融寡头，他们实际上操纵着美国政府来满足他们自己的私欲。",
  },

  // ========== Scene 1: 没有美联储就没有一战 (10-30s) ==========
  {
    id: "ep05_01_01",
    scene: 1,
    startTime: 10,
    endTime: 15,
    speaker: "Narrator",
    text: "June 28, 1914. Archduke Franz Ferdinand was assassinated in Sarajevo. No one imagined this would trigger a world war.",
    textCn:
      "1914年6月28日，斐迪南大公在萨拉热窝被刺杀。没人想到这会引发一场世界大战。",
  },
  {
    id: "ep05_01_02",
    scene: 1,
    startTime: 15,
    endTime: 20,
    speaker: "Narrator",
    text: "European governments were already deeply in debt from military buildup. War seemed impossible without financing.",
    textCn:
      "欧洲各国政府因军备建设已深陷债务泥潭。没有资金支持，战争似乎是不可能的。",
  },
  {
    id: "ep05_01_03",
    scene: 1,
    startTime: 20,
    endTime: 25,
    speaker: "Narrator",
    text: "Then on December 23, 1913, the Federal Reserve Act was passed. The conditions for world war were finally ripe.",
    textCn:
      "然后，1913年12月23日，《美联储法案》通过。世界大战的条件终于成熟了。",
  },
  {
    id: "ep05_01_04",
    scene: 1,
    startTime: 25,
    endTime: 30,
    speaker: "Narrator",
    text: "November 16, 1914, the Fed began operations. By December, Morgan had negotiated a 10 million pound loan to Britain.",
    textCn:
      "1914年11月16日，美联储开始运作。到12月，摩根已与英国谈判了1000万英镑的贷款。",
  },

  // ========== Scene 2: 斯特朗操纵下的美联储 (30-48s) ==========
  {
    id: "ep05_02_01",
    scene: 2,
    startTime: 30,
    endTime: 36,
    speaker: "Narrator",
    text: "Benjamin Strong became the de facto head of the Federal Reserve System. The wishes of Morgan, Paul Warburg, and Schiff were faithfully executed.",
    textCn:
      "本杰明·斯特朗成为美联储系统实质上的首脑人物。摩根、保罗·沃伯格和希夫的意图得到了不折不扣的贯彻执行。",
  },
  {
    id: "ep05_02_02",
    scene: 2,
    startTime: 36,
    endTime: 42,
    speaker: "Narrator",
    text: "U.S. national debt exploded from $1 billion to $25 billion in just 4 years. Every dollar created was debt owed to the Federal Reserve.",
    textCn:
      "美国国债在短短4年内从10亿美元暴涨至250亿美元。创造的每一美元都是欠美联储的债务。",
  },
  {
    id: "ep05_02_03",
    scene: 2,
    startTime: 42,
    endTime: 48,
    speaker: "Narrator",
    text: "The bankers made their fortunes. The people paid in blood and taxes.",
    textCn: "银行家们大赚其钱，而人民却出钱、出力和流血。",
  },

  // ========== Scene 3: 威尔逊走向战争 (48-66s) ==========
  {
    id: "ep05_03_01",
    scene: 3,
    startTime: 48,
    endTime: 54,
    speaker: "Narrator",
    text: '"We fight for democracy and moral principles." — President Wilson\'s noble words. But the reality was far different.',
    textCn:
      '"我们为民主和道德原则而战。" — 威尔逊总统的高尚言辞。但真相远非如此。',
  },
  {
    id: "ep05_03_02",
    scene: 3,
    startTime: 54,
    endTime: 60,
    speaker: "Narrator",
    text: "The U.S. had provided $30 billion in loans and $60 billion in exports to the Allies. If Germany won, these bonds would be worthless.",
    textCn:
      "美国向协约国提供了300亿美元贷款和600亿美元出口物资。如果德国获胜，这些债券将一文不值。",
  },
  {
    id: "ep05_03_03",
    scene: 3,
    startTime: 60,
    endTime: 66,
    speaker: "Narrator",
    text: "Morgan, Rockefeller, Warburg, and Schiff pushed America into war to protect their investments.",
    textCn: "摩根、洛克菲勒、沃伯格和希夫为了保护他们的投资，将美国推向战争。",
  },

  // ========== Scene 4: 大发战争财的银行家们 (66-86s) ==========
  {
    id: "ep05_04_01",
    scene: 4,
    startTime: 66,
    endTime: 72,
    speaker: "Narrator",
    text: "Paul Warburg's brother Max headed German intelligence. Brothers on opposite sides, both serving banking interests.",
    textCn:
      "保罗·沃伯格的兄弟麦克斯是德国情报部门首脑。兄弟俩在敌对两边，都服务于银行利益。",
  },
  {
    id: "ep05_04_02",
    scene: 4,
    startTime: 72,
    endTime: 78,
    speaker: "Narrator",
    text: "Bernard Baruch controlled all U.S. wartime industry. Eugene Meyer's War Finance Corporation issued billions in war bonds.",
    textCn:
      "伯纳德·巴鲁控制了美国所有战时工业。尤金·梅耶的战时金融公司发行了数十亿美元的战争债券。",
  },
  {
    id: "ep05_04_03",
    scene: 4,
    startTime: 78,
    endTime: 86,
    speaker: "Narrator",
    text: "War became the most profitable enterprise in history. For the bankers, World War I was a harvest festival.",
    textCn:
      "战争成为历史上最赚钱的生意。对银行家来说，第一次世界大战是一场丰收节。",
  },

  // ========== Scene 5: 凡尔赛和约 (86-104s) ==========
  {
    id: "ep05_05_01",
    scene: 5,
    startTime: 86,
    endTime: 92,
    speaker: "Narrator",
    text: "November 11, 1918. The Great War ended. Germany lost 13% of its territory and owed 320 billion gold marks in reparations.",
    textCn:
      "1918年11月11日。大战结束。德国失去13%的领土，欠下3200亿金马克的战争赔款。",
  },
  {
    id: "ep05_05_02",
    scene: 5,
    startTime: 92,
    endTime: 98,
    speaker: "Narrator",
    text: '"This is not peace. It is an armistice for twenty years." — Marshal Foch\'s prophetic words.',
    textCn: '"这不是和平。这是为期二十年的休战书。" — 福煦元帅的预言。',
  },
  {
    id: "ep05_05_03",
    scene: 5,
    startTime: 98,
    endTime: 104,
    speaker: "Narrator",
    text: "The Paris Peace Conference was a carnival for international bankers. The seeds of World War II were already planted.",
    textCn: "巴黎和会是国际银行家的狂欢节。二战的种子已经播下。",
  },

  // ========== Scene 6: 1921年农业萧条 (104-122s) ==========
  {
    id: "ep05_06_01",
    scene: 6,
    startTime: 104,
    endTime: 110,
    speaker: "Narrator",
    text: '"Shearing" — a banker\'s term for acquiring property at a fraction of its value after creating economic chaos.',
    textCn: '"剪羊毛"——银行家术语，指在制造经济混乱后以极低价格收购资产。',
  },
  {
    id: "ep05_06_02",
    scene: 6,
    startTime: 110,
    endTime: 116,
    speaker: "Narrator",
    text: "1921. The Federal Reserve suddenly tightened credit to farmers. Farm prices collapsed 50%.",
    textCn: "1921年。美联储突然对农民收紧信贷。农产品价格暴跌50%。",
  },
  {
    id: "ep05_06_03",
    scene: 6,
    startTime: 116,
    endTime: 122,
    speaker: "Narrator",
    text: "Millions of acres of farmland were acquired for pennies. The first harvest after the war: American agriculture.",
    textCn: "数百万英亩农田以极低价格被收购。战后的第一次收割：美国农业。",
  },

  // ========== Scene 7: 1927年密谋 (122-142s) ==========
  {
    id: "ep05_07_01",
    scene: 7,
    startTime: 122,
    endTime: 128,
    speaker: "Narrator",
    text: "1927. A secret meeting on Long Island. Montagu Norman of the Bank of England, Benjamin Strong of the New York Fed, and Hjalmar Schacht of the Reichsbank.",
    textCn:
      "1927年。长岛上的秘密会议。英格兰银行的蒙塔古·诺曼、纽约美联储的本杰明·斯特朗、德国央行的雅尔马·沙赫特。",
  },
  {
    id: "ep05_07_02",
    scene: 7,
    startTime: 128,
    endTime: 134,
    speaker: "Narrator",
    text: "The agreement: lower New York interest rates to stop gold flowing to America. Inflate the bubble further.",
    textCn: "协议：降低纽约利率以阻止黄金流向美国。进一步吹大泡沫。",
  },
  {
    id: "ep05_07_03",
    scene: 7,
    startTime: 134,
    endTime: 142,
    speaker: "Narrator",
    text: 'The trap was set. The American "fat sheep" was being fattened for the greatest shearing in history.',
    textCn:
      '陷阱已经设好。美国这只"肥羊"正在被催肥，准备历史上最大规模的剪羊毛。',
  },

  // ========== Scene 8: 1929泡沫破裂 (142-164s) ==========
  {
    id: "ep05_08_01",
    scene: 8,
    startTime: 142,
    endTime: 148,
    speaker: "Narrator",
    text: "October 29, 1929. Black Tuesday. $160 billion in wealth vanished in a single day.",
    textCn: "1929年10月29日。黑色星期二。1600亿美元财富在一天之内蒸发。",
  },
  {
    id: "ep05_08_02",
    scene: 8,
    startTime: 148,
    endTime: 154,
    speaker: "Narrator",
    text: "40% of the nation's wealth destroyed. 8,812 banks failed in four years.",
    textCn: "全国40%的财富被摧毁。四年间8812家银行倒闭。",
  },
  {
    id: "ep05_08_03",
    scene: 8,
    startTime: 154,
    endTime: 164,
    speaker: "Narrator",
    text: '"Buy when blood is in the streets." The insiders had already sold. They returned to buy assets for pennies on the dollar.',
    textCn:
      '"当血流成河时买入。"内部人士早已卖出。他们回来以极低价格收购资产。',
  },

  // ========== Scene 9: 总结揭示 (164-180s) ==========
  {
    id: "ep05_09_01",
    scene: 9,
    startTime: 164,
    endTime: 172,
    speaker: "Narrator",
    text: "Create the problem. Inflate the bubble. Pop it. Harvest the assets. The cycle repeats.",
    textCn: "制造问题。吹大泡沫。刺破它。收割资产。循环往复。",
  },
  {
    id: "ep05_09_02",
    scene: 9,
    startTime: 172,
    endTime: 180,
    speaker: "Narrator",
    text: "War and recession: the harvest cycle of international bankers. It continues to this day.",
    textCn: "战争与衰退：国际银行家的收割循环。一直持续到今天。",
  },
];

export default episode05DocumentaryTranscript;
