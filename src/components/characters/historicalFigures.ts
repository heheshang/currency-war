/**
 * Historical Figures Configuration
 *
 * Contains all historical figures appearing in Currency Wars documentary series
 *
 * Photo sources for Chinese users (Wikipedia is not accessible):
 * 1. Local files in public/assets/figures/
 * 2. Alternative sources: Bing Images, Baidu Images, etc.
 * 3. Manual download from various history websites
 *
 * User can manually download photos and place them in public/assets/figures/
 * The component will automatically use local files if they exist.
 */

export interface HistoricalFigureConfig {
  /** Unique identifier */
  id: string;
  /** English name */
  nameEn: string;
  /** Chinese name */
  nameCn: string;
  /**
   * Photo source path
   *
   * Priority order:
   * 1. Local file: public/assets/figures/{id}.jpg (if exists)
   * 2. Original remote URL (as backup)
   */
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
 * Helper to get local file path
 */
function getLocalPath(id: string): string {
  return `/assets/figures/${id}.jpg`;
}

/**
 * Helper to check if local file exists (runtime check)
 * Note: This is a runtime check using window.location
 */
function hasLocalFile(id: string): boolean {
  // In browser, we can't check file existence directly
  // The component will try the local path first, then fall back to remote
  return true; // Assume local files exist for now
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
    photoSrc: hasLocalFile("mayer_rothschild")
      ? getLocalPath("mayer_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mayer_Amschel_Rothschild.jpg/400px-Mayer_Amschel_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mayer_Amschel_Rothschild.jpg",
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
    photoSrc: hasLocalFile("nathan_rothschild")
      ? getLocalPath("nathan_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nathan_Mayer_Rothschild.jpg/400px-Nathan_Mayer_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nathan_Mayer_Rothschild.jpg",
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
    photoSrc: hasLocalFile("james_rothschild")
      ? getLocalPath("james_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/James_de_Rothschild.jpg/400px-James_de_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:James_de_Rothschild.jpg",
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
    photoSrc: hasLocalFile("salomon_rothschild")
      ? getLocalPath("salomon_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Salomon_Mayer_von_Rothschild.jpg/400px-Salomon_Mayer_von_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Salomon_Mayer_von_Rothschild.jpg",
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
    photoSrc: hasLocalFile("amschel_rothschild")
      ? getLocalPath("amschel_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Amschel_Mayer_von_Rothschild.jpg/400px-Amschel_Mayer_von_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Amschel_Mayer_von_Rothschild.jpg",
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
    photoSrc: hasLocalFile("karl_rothschild")
      ? getLocalPath("karl_rothschild")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carl_Mayer_von_Rothschild.jpg/400px-Carl_Mayer_von_Rothschild.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Carl_Mayer_von_Rothschild.jpg",
    years: "1788–1855",
    frameStyle: "vintage",
    photoFilter: "vintage",
    era: "19th_century",
    defaultScale: 1,
  },

  // ========== EPISODE 03: Presidents & Bankers ==========
  alexander_hamilton: {
    id: "alexander_hamilton",
    nameEn: "Alexander Hamilton",
    nameCn: "亚历山大·汉密尔顿",
    photoSrc: hasLocalFile("alexander_hamilton")
      ? getLocalPath("alexander_hamilton")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg/400px-Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg",
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
    photoSrc: hasLocalFile("thomas_jefferson")
      ? getLocalPath("thomas_jefferson")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tjefferson.jpg/400px-Tjefferson.jpg",
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
    photoSrc: hasLocalFile("andrew_jackson")
      ? getLocalPath("andrew_jackson")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Andrew_Jackson-head.jpg/400px-Andrew_Jackson-head.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Andrew_Jackson-head.jpg",
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
    photoSrc: hasLocalFile("abraham_lincoln")
      ? getLocalPath("abraham_lincoln")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/400px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    years: "1809–1865",
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
    photoSrc: hasLocalFile("woodrow_wilson")
      ? getLocalPath("woodrow_wilson")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Woodrow_Wilson_1919.jpg/400px-Woodrow_Wilson_1919.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Woodrow_Wilson_1919.jpg",
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
    photoSrc: hasLocalFile("jp_morgan")
      ? getLocalPath("jp_morgan")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/John_Pierpont_Morgan.jpg/400px-John_Pierpont_Morgan.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Pierpont_Morgan.jpg",
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
    photoSrc: hasLocalFile("john_d_rockefeller")
      ? getLocalPath("john_d_rockefeller")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/John_D._Rockefeller_1885.jpg/400px-John_D._Rockefeller_1885.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_D._Rockefeller_1885.jpg",
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
    photoSrc: hasLocalFile("nelson_aldrich")
      ? getLocalPath("nelson_aldrich")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg/400px-Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg",
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
    photoSrc: hasLocalFile("frank_vanderlip")
      ? getLocalPath("frank_vanderlip")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Frank_A._Vanderlip.jpg/400px-Frank_A._Vanderlip.jpg",
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
    photoSrc: hasLocalFile("henry_davison")
      ? getLocalPath("henry_davison")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Henry_Pomeroy_Davison.jpg/400px-Henry_Pomeroy_Davison.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Henry_Pomeroy_Davison.jpg",
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
    photoSrc: hasLocalFile("benjamin_strong")
      ? getLocalPath("benjamin_strong")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Benjamin_Strong_Jr.jpg/400px-Benjamin_Strong_Jr.jpg",
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
    photoSrc: hasLocalFile("paul_warburg")
      ? getLocalPath("paul_warburg")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Paul_Warburg.jpg/400px-Paul_Warburg.jpg",
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
    photoSrc: hasLocalFile("franklin_roosevelt")
      ? getLocalPath("franklin_roosevelt")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FDR_in_1933.jpg/400px-FDR_in_1933.jpg",
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
    photoSrc: hasLocalFile("herbert_hoover")
      ? getLocalPath("herbert_hoover")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Herbert_Hoover_1928.jpg/400px-Herbert_Hoover_1928.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbert_Hoover_1928.jpg",
    years: "1874–1964",
    frameStyle: "classic",
    photoFilter: "grayscale",
    era: "early_20th_century",
    defaultScale: 1,
  },

  // ========== Additional Figures ==========
  john_law: {
    id: "john_law",
    nameEn: "John Law",
    nameCn: "约翰·劳",
    photoSrc: hasLocalFile("john_law")
      ? getLocalPath("john_law")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/John_Law_%28economist%29.jpg/400px-John_Law_%28economist%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Law_(economist).jpg",
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
    photoSrc: hasLocalFile("nicholas_biddle")
      ? getLocalPath("nicholas_biddle")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nicholas_Biddle_-_Brady-Handy.jpg/400px-Nicholas_Biddle_-_Brady-Handy.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nicholas_Biddle_-_Brady-Handy.jpg",
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
    photoSrc: hasLocalFile("george_peabody")
      ? getLocalPath("george_peabody")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/George_Peabody.jpg/400px-George_Peabody.jpg",
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
export function getFiguresForEpisode(episodeNum: number): HistoricalFigureConfig[] {
  const episodeFigures: Record<number, string[]> = {
    1: [], // No historical figures in Ep 1
    2: [
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
    6: [], // To be determined
    7: [
      // Jekyll Island conspirators from Ep 4
      "nelson_aldrich",
      "frank_vanderlip",
      "henry_davison",
      "benjamin_strong",
      "paul_warburg",
    ],
  };

  const figureIds = episodeFigures[episodeNum] || [];
  return figureIds.map((id) => HISTORICAL_FIGURES[id]).filter(Boolean) as HistoricalFigureConfig[];
}

/**
 * Local file path helper for downloaded photos
 */
export function getLocalPhotoPath(figureId: string): string {
  return `/assets/figures/${figureId}.jpg`;
}
