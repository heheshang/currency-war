/**
 * Episode03 字幕 - 按Scene分离
 *
 * 每个Scene导出自己的字幕常量
 * Episode组件直接从这里导入字幕，无需计算帧偏移
 */
import { SubtitleEntry } from "./index";

// ========== Scene 0: OpeningLincolnScene (15s) ==========
export const openingLincolnSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 150, text: "I have two great enemies: the Southern army in front of me, and the financial institutions behind me.", translation: "我有两个强大的敌人：我面前的南方军队，还有后面的金融机构。" },
  { startFrame: 150, endFrame: 300, text: "Of the two, the latter is the greatest threat.", translation: "在这两者之中，后者才是最大的威胁。" },
  { startFrame: 300, endFrame: 450, text: "— Abraham Lincoln, 1864", translation: "—— 亚伯拉罕·林肯，1864年" },
];

// ========== Scene 1: ColonialCurrencyScene (30s) ==========
export const colonialCurrencySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "The prosperity of the American colonies was due to their own money.", translation: "美洲殖民地的繁荣归功于他们自己的货币。" },
  { startFrame: 300, endFrame: 600, text: "Colonial Script — debt-free money issued by colonial governments.", translation: "殖民券 — 殖民地政府发行的无债务货币。" },
  { startFrame: 600, endFrame: 900, text: "Benjamin Franklin: We issue our own money according to the demands of trade.", translation: "本杰明·富兰克林：我们根据贸易需求发行自己的货币。" },
];

// ========== Scene 2: FirstBankScene (30s) ==========
export const firstBankSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1791: Alexander Hamilton proposes the First Bank of the United States.", translation: "1791年：亚历山大·汉密尔顿提议成立美国第一银行。" },
  { startFrame: 300, endFrame: 600, text: "Modeled after the Bank of England. Privately owned.", translation: "仿照英格兰银行模式。私人拥有。" },
  { startFrame: 600, endFrame: 900, text: "Thomas Jefferson: Banking institutions are more dangerous than standing armies.", translation: "托马斯·杰斐逊：银行机构比常备军更危险。" },
];

// ========== Scene 3: CharterExpirationScene (30s) ==========
export const charterExpirationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1811: The First Bank's charter expires. House votes 65 to 64 against renewal.", translation: "1811年：第一银行特许权到期。众议院65票对64票反对续期。" },
  { startFrame: 300, endFrame: 600, text: "By 1811, English bankers and Rothschilds owned 70% of the bank.", translation: "到1811年，英格兰银行家和罗斯柴尔德家族拥有70%的银行股份。" },
  { startFrame: 600, endFrame: 900, text: "The power to issue money transferred from the people to private banks.", translation: "货币发行权从人民手中转移到了私人银行。" },
];

// ========== Scene 4: JacksonBankWarScene (30s) ==========
export const jacksonBankWarSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1816: The Second Bank is chartered. International bankers return.", translation: "1816年：第二银行获得特许权。国际银行家卷土重来。" },
  { startFrame: 300, endFrame: 600, text: "Andrew Jackson: You are a den of vipers. I intend to rout you out.", translation: "杰克逊：你们是一群毒蛇。我打算把你们连根拔除。" },
  { startFrame: 600, endFrame: 900, text: "The Bank wants to kill me... but I will kill it!", translation: "银行想要杀了我……但我将杀死银行！" },
];

// ========== Scene 5: CivilWarPreludeScene (30s) ==========
export const civilWarPreludeSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1836: The Second Bank dies. Victory for the people!", translation: "1836年：第二银行死亡。人民的胜利！" },
  { startFrame: 300, endFrame: 600, text: "1848: Gold discovered in California. Gold supply explodes.", translation: "1848年：加州发现黄金。黄金供应激增。" },
  { startFrame: 600, endFrame: 900, text: "European bankers devise a new strategy: Financial control, political division.", translation: "欧洲银行家设计新策略：金融控制，政治分化。" },
];

// ========== Scene 6: GreenbackScene (30s) ==========
export const greenbackSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1861: The Civil War begins. Bankers offer loans at 24-36% interest.", translation: "1861年内战爆发。银行家提供24%-36%利息的贷款。" },
  { startFrame: 300, endFrame: 600, text: "Lincoln refuses. This would destroy America forever.", translation: "林肯拒绝。这将永远摧毁美国。" },
  { startFrame: 600, endFrame: 900, text: "Solution: Government issues its own money. Greenbacks.", translation: "解决方案：政府发行自己的货币。绿钞。" },
];

// ========== Scene 7: RussianAllianceScene (30s) ==========
export const russianAllianceSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "1863: Russian fleet arrives. European powers hesitate to intervene.", translation: "1863年：俄国舰队抵达。欧洲列强犹豫是否干预。" },
  { startFrame: 300, endFrame: 600, text: "Lincoln needed allies. He turned to Tsar Alexander II of Russia.", translation: "林肯需要盟友。他转向俄国沙皇亚历山大二世。" },
  { startFrame: 600, endFrame: 900, text: "The Russian alliance saves the Union.", translation: "俄国同盟拯救了联盟。" },
];

// ========== Scene 8: AssassinationScene (30s) ==========
export const assassinationSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "April 14, 1865. Lincoln assassinated at Ford's Theatre.", translation: "1865年4月14日。林肯在福特剧院遇刺。" },
  { startFrame: 300, endFrame: 600, text: "Greenbacks were soon withdrawn. National Bank Act became permanent.", translation: "绿钞很快被收回。国民银行法成为永久。" },
  { startFrame: 600, endFrame: 900, text: "41 days after his second inauguration.", translation: "在他第二次就职后41天。" },
];

// ========== Scene 9: NationalBankActScene (30s) ==========
export const nationalBankActSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 300, text: "The National Bank Act of 1863. Lincoln's fatal compromise.", translation: "1863年国民银行法。林肯的致命妥协。" },
  { startFrame: 300, endFrame: 600, text: "The trap: Currency backed by government debt. The government can NEVER be debt-free.", translation: "陷阱：货币由政府债务背书。政府永远无法无债。" },
  { startFrame: 600, endFrame: 900, text: "By 2006, US national debt exceeded $8 trillion.", translation: "到2006年，美国国债超过8万亿美元。" },
];

// ========== Scene 10-11: SummaryScene (60s) ==========
export const summarySubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 900, text: "Key takeaways: Currency control is the ultimate power.", translation: "关键要点：货币控制权是终极权力。" },
  { startFrame: 900, endFrame: 1800, text: "7 presidents assassinated for resisting central banks. The battle continues.", translation: "7位总统因抵抗中央银行而被刺杀。战争仍在继续。" },
];

// ========== 导出合并的字幕数组（兼容旧代码） ==========
export const episode03Subtitles = [
  ...openingLincolnSubs,
  ...colonialCurrencySubs,
  ...firstBankSubs,
  ...charterExpirationSubs,
  ...jacksonBankWarSubs,
  ...civilWarPreludeSubs,
  ...greenbackSubs,
  ...russianAllianceSubs,
  ...assassinationSubs,
  ...nationalBankActSubs,
  ...summarySubs,
];

export default episode03Subtitles;
