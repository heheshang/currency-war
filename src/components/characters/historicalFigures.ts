/**
 * Historical Figures Configuration
 *
 * Contains all historical figures appearing in Currency Wars documentary series
 *
 * Photo sources from Wikimedia Commons (public domain/CC images)
 * Local files in public/assets/figures/ can be added later for offline use
 */

export interface HistoricalFigureConfig {
  /** Unique identifier */
  id: string;
  /** English name */
  nameEn: string;
  /** Chinese name */
  nameCn: string;
  /** Photo source URL */
  photoSrc: string;
  /** Reference URL for manual download */
  sourceUrl?: string;
  /** Year range of person */
  years?: string;
  /** Default frame style */
  frameStyle?: "none" | "classic" | "gold" | "vintage" | "modern";
  /** Default photo filter */
  photoFilter?: "none" | "sepia" | "grayscale" | "vintage" | "dramatic";
  /** Era for styling context */
  era: "18th_century" | "19th_century" | "early_20th_century" | "modern";
  /** Default scale for display */
  defaultScale?: number;
}

/**
 * Complete list of historical figures in documentary
 */
export const HISTORICAL_FIGURES: Record<string, HistoricalFigureConfig> = {
  // ========== EPISODE 02: Rothschild Family ==========
  mayer_rothschild: {
    id: "mayer_rothschild",
    nameEn: "Mayer Amschel Rothschild",
    nameCn: "老梅耶·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mayer_Amschel_Rothschild.jpg/400px-Mayer_Amschel_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mayer_Amschel_Rothschild.jpg",
    years: "1744–1812",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "18th_century",
    defaultScale: 1,
  },

  nathan_rothschild: {
    id: "nathan_rothschild",
    nameEn: "Nathan Mayer Rothschild",
    nameCn: "内森·梅耶·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nathan_Mayer_Rothschild.jpg/400px-Nathan_Mayer_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Nathan_Mayer_Rothschild.jpg",
    years: "1777–1836",
    frameStyle: "gold",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  james_rothschild: {
    id: "james_rothschild",
    nameEn: "James de Rothschild",
    nameCn: "詹姆斯·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/James_de_Rothschild.jpg/400px-James_de_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:James_de_Rothschild.jpg",
    years: "1792–1868",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  salomon_rothschild: {
    id: "salomon_rothschild",
    nameEn: "Salomon Mayer von Rothschild",
    nameCn: "所罗门·梅耶·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Salomon_Mayer_von_Rothschild.jpg/400px-Salomon_Mayer_von_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Salomon_Mayer_von_Rothschild.jpg",
    years: "1774–1855",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  amschel_rothschild: {
    id: "amschel_rothschild",
    nameEn: "Amschel Mayer von Rothschild",
    nameCn: "阿姆谢尔·梅耶·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Amschel_Mayer_von_Rothschild.jpg/400px-Amschel_Mayer_von_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Amschel_Mayer_von_Rothschild.jpg",
    years: "1773–1855",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  karl_rothschild: {
    id: "karl_rothschild",
    nameEn: "Carl Mayer von Rothschild",
    nameCn: "卡尔·梅耶·罗斯柴尔德",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carl_Mayer_von_Rothschild.jpg/400px-Carl_Mayer_von_Rothschild.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Carl_Mayer_von_Rothschild.jpg",
    years: "1788–1855",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  // ========== EPISODE 03: Presidents & Bankers ==========
  benjamin_franklin: {
    id: "benjamin_franklin",
    nameEn: "Benjamin Franklin",
    nameCn: "本杰明·富兰克林",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Benjamin_Franklin_by_Joseph_Siffrein_Duplessis_1778.jpg/400px-Benjamin_Franklin_by_Joseph_Siffrein_Duplessis_1778.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Benjamin_Franklin_by_Joseph_Siffrein_Duplessis_1778.jpg",
    years: "1706–1790",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "18th_century",
    defaultScale: 1,
  },

  alexander_hamilton: {
    id: "alexander_hamilton",
    nameEn: "Alexander Hamilton",
    nameCn: "亚历山大·汉密尔顿",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg/400px-Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg",
    years: "1755–1804",
    frameStyle: "classic",
    photoFilter: "vintage",
    era: "18th_century",
    defaultScale: 1,
  },

  thomas_jefferson: {
    id: "thomas_jefferson",
    nameEn: "Thomas Jefferson",
    nameCn: "托马斯·杰斐逊",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tjefferson.jpg/400px-Tjefferson.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tjefferson.jpg",
    years: "1743–1826",
    frameStyle: "classic",
    photoFilter: "vintage",
    era: "18th_century",
    defaultScale: 1,
  },

  andrew_jackson: {
    id: "andrew_jackson",
    nameEn: "Andrew Jackson",
    nameCn: "安德鲁·杰克逊",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Andrew_Jackson-head.jpg/400px-Andrew_Jackson-head.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Andrew_Jackson-head.jpg",
    years: "1767–1845",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "19th_century",
    defaultScale: 1,
  },

  abraham_lincoln: {
    id: "abraham_lincoln",
    nameEn: "Abraham Lincoln",
    nameCn: "亚伯拉罕·林肯",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/400px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    years: "1809–1865",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "19th_century",
    defaultScale: 1,
  },

  martin_van_buren: {
    id: "martin_van_buren",
    nameEn: "Martin Van Buren",
    nameCn: "马丁·范布伦",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Martin_Van_Buren_-_Brady-Handy.jpg/400px-Martin_Van_Buren_-_Brady-Handy.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Martin_Van_Buren_-_Brady-Handy.jpg",
    years: "1782–1862",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "19th_century",
    defaultScale: 1,
  },

  // ========== EPISODE 04: Federal Reserve Founders ==========
  woodrow_wilson: {
    id: "woodrow_wilson",
    nameEn: "Woodrow Wilson",
    nameCn: "伍德罗·威尔逊",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Woodrow_Wilson_1919.jpg/400px-Woodrow_Wilson_1919.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Woodrow_Wilson_1919.jpg",
    years: "1856–1924",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  jp_morgan: {
    id: "jp_morgan",
    nameEn: "J. P. Morgan",
    nameCn: "约翰·皮尔庞特·摩根",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/John_Pierpont_Morgan.jpg/400px-John_Pierpont_Morgan.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:John_Pierpont_Morgan.jpg",
    years: "1837–1913",
    frameStyle: "gold",
    photoFilter: "grayscale",
    era: "19th_century",
    defaultScale: 1,
  },

  john_d_rockefeller: {
    id: "john_d_rockefeller",
    nameEn: "John D. Rockefeller",
    nameCn: "约翰·洛克菲勒",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/John_D._Rockefeller_1885.jpg/400px-John_D._Rockefeller_1885.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:John_D._Rockefeller_1885.jpg",
    years: "1839–1937",
    frameStyle: "gold",
    photoFilter: "grayscale",
    era: "19th_century",
    defaultScale: 1,
  },

  nelson_aldrich: {
    id: "nelson_aldrich",
    nameEn: "Nelson W. Aldrich",
    nameCn: "纳尔逊·奥尔德里奇",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg/400px-Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg",
    years: "1841–1915",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  frank_vanderlip: {
    id: "frank_vanderlip",
    nameEn: "Frank A. Vanderlip",
    nameCn: "弗兰克·范德利普",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Frank_A._Vanderlip.jpg/400px-Frank_A._Vanderlip.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Frank_A._Vanderlip.jpg",
    years: "1864–1937",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  henry_davison: {
    id: "henry_davison",
    nameEn: "Henry P. Davison",
    nameCn: "亨利·戴维森",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Henry_Pomeroy_Davison.jpg/400px-Henry_Pomeroy_Davison.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Henry_Pomeroy_Davison.jpg",
    years: "1867–1922",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  benjamin_strong: {
    id: "benjamin_strong",
    nameEn: "Benjamin Strong Jr.",
    nameCn: "本杰明·斯特朗",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Benjamin_Strong_Jr.jpg/400px-Benjamin_Strong_Jr.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Benjamin_Strong_Jr.jpg",
    years: "1872–1928",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  paul_warburg: {
    id: "paul_warburg",
    nameEn: "Paul Warburg",
    nameCn: "保罗·沃伯格",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Paul_Warburg.jpg/400px-Paul_Warburg.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paul_Warburg.jpg",
    years: "1868–1932",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  // ========== EPISODE 05: WWI & Depression ==========
  franklin_roosevelt: {
    id: "franklin_roosevelt",
    nameEn: "Franklin D. Roosevelt",
    nameCn: "富兰克林·罗斯福",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FDR_in_1933.jpg/400px-FDR_in_1933.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:FDR_in_1933.jpg",
    years: "1882–1945",
    frameStyle: "modern",
    photoFilter: "grayscale",
    era: "modern",
    defaultScale: 1,
  },

  herbert_hoover: {
    id: "herbert_hoover",
    nameEn: "Herbert Hoover",
    nameCn: "赫伯特·胡佛",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Herbert_Hoover_1928.jpg/400px-Herbert_Hoover_1928.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Herbert_Hoover_1928.jpg",
    years: "1874–1964",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  // ========== EPISODE 06: Ruling Elite Clubs ==========
  edward_house: {
    id: "edward_house",
    nameEn: "Colonel Edward House",
    nameCn: "爱德华·豪斯上校",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Edward_Mandell_House.jpg/400px-Edward_Mandell_House.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Edward_Mandell_House.jpg",
    years: "1858–1944",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  david_rockefeller: {
    id: "david_rockefeller",
    nameEn: "David Rockefeller",
    nameCn: "戴维·洛克菲勒",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/David_Rockefeller_1977.jpg/400px-David_Rockefeller_1977.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:David_Rockefeller_1977.jpg",
    years: "1915–2017",
    frameStyle: "modern",
    photoFilter: "none",
    era: "modern",
    defaultScale: 1,
  },

  zbigniew_brzezinski: {
    id: "zbigniew_brzezinski",
    nameEn: "Zbigniew Brzezinski",
    nameCn: "兹比格涅夫·布热津斯基",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Zbigniew_Brzezinski.jpg/400px-Zbigniew_Brzezinski.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Zbigniew_Brzezinski.jpg",
    years: "1928–2017",
    frameStyle: "modern",
    photoFilter: "none",
    era: "modern",
    defaultScale: 1,
  },

  henry_kissinger: {
    id: "henry_kissinger",
    nameEn: "Henry Kissinger",
    nameCn: "亨利·基辛格",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kissinger_1973.jpg/400px-Kissinger_1973.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Kissinger_1973.jpg",
    years: "1923–2023",
    frameStyle: "modern",
    photoFilter: "none",
    era: "modern",
    defaultScale: 1,
  },

  // ========== Additional Figures ==========
  john_law: {
    id: "john_law",
    nameEn: "John Law",
    nameCn: "约翰·劳",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/John_Law_%28economist%29.jpg/400px-John_Law_%28economist%29.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:John_Law_(economist).jpg",
    years: "1671–1729",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "18th_century",
    defaultScale: 1,
  },

  nicholas_biddle: {
    id: "nicholas_biddle",
    nameEn: "Nicholas Biddle",
    nameCn: "尼古拉斯·比德尔",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nicholas_Biddle_-_Brady-Handy.jpg/400px-Nicholas_Biddle_-_Brady-Handy.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Nicholas_Biddle_-_Brady-Handy.jpg",
    years: "1786–1844",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  george_peabody: {
    id: "george_peabody",
    nameEn: "George Peabody",
    nameCn: "乔治·皮博迪",
    photoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/George_Peabody.jpg/400px-George_Peabody.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:George_Peabody.jpg",
    years: "1795–1869",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },
};

/**
 * Get figure config by ID
 */
export function getFigure(id: string): HistoricalFigureConfig | undefined {
  return HISTORICAL_FIGURES[id];
}

/**
 * Get all figures for a specific episode
 */
export function getFiguresForEpisode(
  episodeNum: number,
): HistoricalFigureConfig[] {
  const episodeFigures: Record<number, string[]> = {
    1: [],
    2: [
      "benjamin_franklin",
      "mayer_rothschild",
      "nathan_rothschild",
      "james_rothschild",
      "salomon_rothschild",
      "amschel_rothschild",
      "karl_rothschild",
    ],
    3: [
      "alexander_hamilton",
      "thomas_jefferson",
      "andrew_jackson",
      "abraham_lincoln",
    ],
    4: [
      "woodrow_wilson",
      "jp_morgan",
      "john_d_rockefeller",
      "nelson_aldrich",
      "frank_vanderlip",
      "henry_davison",
      "benjamin_strong",
      "paul_warburg",
    ],
    5: [
      "woodrow_wilson",
      "benjamin_strong",
      "franklin_roosevelt",
      "herbert_hoover",
    ],
    6: [
      "edward_house",
      "david_rockefeller",
      "zbigniew_brzezinski",
      "henry_kissinger",
    ],
    7: [
      "nelson_aldrich",
      "frank_vanderlip",
      "henry_davison",
      "benjamin_strong",
      "paul_warburg",
    ],
  };

  const figureIds = episodeFigures[episodeNum] || [];
  return figureIds
    .map((id) => HISTORICAL_FIGURES[id])
    .filter(Boolean) as HistoricalFigureConfig[];
}

/**
 * Get local photo path for a figure
 */
export function getLocalPhotoPath(figureId: string): string {
  return `/assets/figures/${figureId}.jpg`;
}
