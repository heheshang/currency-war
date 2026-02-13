/**
 * 主题：统治世界的精英俱乐部
 *
 * 重构说明：
 * - 每个Scene有独立的字幕数组，从相对帧0开始
 * - 提供统一的 episode06Subtitles 数组用于兼容
 */
import { SubtitleEntry } from "./index";

// ========== Scene 0: 开场 ==========
// 帧范围: 0-1200 (0-40秒)
export const scene00Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 120,
    text: "Episode 06: Ruling Elite Clubs",
    translation: "第六集：统治世界的精英俱乐部",
  },
  {
    startFrame: 120,
    endFrame: 300,
    text: "Behind the throne stands a shadowy power",
    translation: "王座背后站着黑暗的权力",
  },
  {
    startFrame: 300,
    endFrame: 480,
    text: "that controls the world's financial destiny.",
    translation: "控制着世界的金融命运。",
  },
  {
    startFrame: 480,
    endFrame: 660,
    text: "They meet in secret. They plan in shadows.",
    translation: "他们秘密聚会。他们在阴影中策划。",
  },
  {
    startFrame: 660,
    endFrame: 840,
    text: "They call themselves... the elite.",
    translation: "他们称自己为……精英。",
  },
  {
    startFrame: 840,
    endFrame: 1020,
    text: "From Washington to Basel, from Bilderberg to Trilateral.",
    translation: "从华盛顿到巴塞尔，从彼尔德伯格到三边委员会。",
  },
  {
    startFrame: 1020,
    endFrame: 1200,
    text: "Welcome to the hidden world of global governance.",
    translation: "欢迎来到全球治理的隐藏世界。",
  },
];

// ========== Scene 1: 豪斯上校 ==========
// 帧范围: 1200-3000 (40-100秒)
export const scene01Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Colonel Edward House — The Spiritual Godfather",
    translation: "爱德华·豪斯上校——「精神教父」",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "1858-1944. Advisor to President Woodrow Wilson.",
    translation: "1858-1944。伍德罗·威尔逊总统的顾问。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "House was the power behind the throne.",
    translation: "豪斯是王座背后的真正权力。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "While Wilson sat in the Oval Office,",
    translation: "当威尔逊坐在椭圆形办公室时，",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "House made the actual decisions.",
    translation: "豪斯做出了实际决策。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "In 1912, he wrote a mysterious book:",
    translation: "1912年，他写了一本神秘的书：",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "\"Philip Dru: Administrator\"",
    translation: "《菲利浦·杜：管理者》",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "The book outlined a plan for world government",
    translation: "这本书概述了世界政府的计划",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "through financial control.",
    translation: "通过金融控制来实现。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "The blueprint for a New World Order.",
    translation: "新世界秩序的蓝图。",
  },
];

// ========== Scene 2: 外交协会 ==========
// 帧范围: 3000-5100 (100-170秒)
export const scene02Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Council on Foreign Relations — The Central Party School",
    translation: "外交协会——美国政治精英的「中央党校」",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Founded in 1921, New York City.",
    translation: "1921年成立于纽约。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "The CFR is the most powerful policy group in America.",
    translation: "外交协会是美国最有影响力的政策团体。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "11 U.S. Presidents have been members.",
    translation: "11位美国总统曾是其成员。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "8 Secretaries of State. 6 CIA Directors.",
    translation: "8位国务卿。6位中情局局长。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Over 20 media moguls control the narrative.",
    translation: "超过20位媒体大亨控制着舆论。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "They call it \"shaping U.S. foreign policy.\"",
    translation: "他们称之为「塑造美国外交政策」。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "Critics call it a shadow government.",
    translation: "批评者称之为影子政府。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "The CFR is the closest thing to a",
    translation: "外交协会是最接近",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "ruling elite network in America.",
    translation: "美国统治精英网络的存在。",
  },
  {
    startFrame: 1800,
    endFrame: 2100,
    text: "It operates above party politics, above elections.",
    translation: "它超越党派政治，超越选举。",
  },
];

// ========== Scene 3: 国际清算银行 ==========
// 帧范围: 5100-7200 (170-240秒)
export const scene03Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Bank for International Settlements — The Bank of Bankers",
    translation: "国际清算银行——「银行家的银行」",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Located in Basel, Switzerland. Founded in 1930.",
    translation: "位于瑞士巴塞尔。1930年成立。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Owned exclusively by central banks.",
    translation: "仅由各国央行所有。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "It handles international gold settlements.",
    translation: "处理国际黄金结算。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "It coordinates global monetary policy.",
    translation: "协调全球货币政策。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Every January, central bank governors meet in Basel.",
    translation: "每年一月，各国央行行长在巴塞尔聚会。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "No minutes are published. No press allowed.",
    translation: "不公布会议记录。不允许媒体进入。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "These are the \"Basel Meetings\" —",
    translation: "这就是「巴塞尔会议」——",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "the most secretive gathering in finance.",
    translation: "金融界最隐秘的聚会。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "The BIS is where the world's most powerful",
    translation: "国际清算银行是世界上最强大的",
  },
  {
    startFrame: 1800,
    endFrame: 1980,
    text: "bankers make decisions affecting billions.",
    translation: "银行家做出影响数十亿人的决策的地方。",
  },
  {
    startFrame: 1980,
    endFrame: 2100,
    text: "Transparency? None. Accountability? Zero.",
    translation: "透明度？零。问责制？零。",
  },
];

// ========== Scene 4: IMF与世界银行 ==========
// 帧范围: 7200-9300 (240-310秒)
export const scene04Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "IMF & World Bank — Tools of Dollar Hegemony",
    translation: "IMF与世界银行——美元霸权的工具",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Created at Bretton Woods, 1944.",
    translation: "1944年成立于布雷顿森林。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "The IMF claims to \"stabilize\" currencies.",
    translation: "IMF声称「稳定」货币。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "The World Bank claims to promote \"development.\"",
    translation: "世界银行声称促进「发展」。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "But reality is different.",
    translation: "但现实截然不同。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Voting power is based on financial contributions.",
    translation: "投票权基于资金贡献。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "The U.S. holds effective veto power.",
    translation: "美国拥有有效的否决权。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "Loans come with \"conditions\" —",
    translation: "贷款附带「条件」——",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "Privatization, deregulation, austerity.",
    translation: "私有化、放松管制、紧缩政策。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "Sell state assets to Western corporations.",
    translation: "将国有资产出售给西方公司。",
  },
  {
    startFrame: 1800,
    endFrame: 1980,
    text: "Open markets to foreign banks.",
    translation: "向外国银行开放市场。",
  },
  {
    startFrame: 1980,
    endFrame: 2100,
    text: "The IMF is not financial — it's political.",
    translation: "IMF不是金融机构——它是政治工具。",
  },
];

// ========== Scene 5: 彼尔德伯格俱乐部 ==========
// 帧范围: 9300-11100 (310-370秒)
export const scene05Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Bilderberg Club — The Most Secretive Elite",
    translation: "彼尔德伯格俱乐部——最隐秘的精英俱乐部",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Founded in 1954, Netherlands.",
    translation: "1954年成立于荷兰。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Named after Hotel de Bilderberg.",
    translation: "以彼尔德伯格酒店命名。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "120-150 elites meet annually.",
    translation: "每年120-150名精英聚会。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "Participants must be 60+ years old.",
    translation: "参与者必须60岁以上。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "No minutes. No press. No chatter.",
    translation: "无记录。无媒体。禁言。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "Topics: Global economy, world order, geopolitics.",
    translation: "议题：全球经济、世界秩序、地缘政治。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "Key members include David Rockefeller,",
    translation: "关键成员包括戴维·洛克菲勒、",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "Henry Kissinger, George Soros.",
    translation: "亨利·基辛格、乔治·索罗斯。",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "The Bilderberg Group is a secret conspiracy",
    translation: "彼尔德伯格俱乐部是一个秘密阴谋",
  },
];

// ========== Scene 6: 三边委员会 ==========
// 帧范围: 11100-12900 (370-430秒)
export const scene06Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Trilateral Commission — The Road to World Government",
    translation: "三边委员会——世界政府之路",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "Founded in 1973 by David Rockefeller.",
    translation: "1973年由戴维·洛克菲勒创立。",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "Coordinates North America, Europe, Japan.",
    translation: "协调北美、欧洲、日本。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "Zbigniew Brzezinski was first Executive Director.",
    translation: "兹比格涅夫·布热津斯基是第一任执行主任。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "350+ global elites in membership.",
    translation: "350多名全球精英成员。",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "Their mission: Build global governance.",
    translation: "他们的使命：建立全球治理。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "They initiated the G7 summits.",
    translation: "他们发起了G7峰会。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "They shape international policy coordination.",
    translation: "他们塑造国际政策协调。",
  },
  {
    startFrame: 1440,
    endFrame: 1620,
    text: "The Trilateral Commission is the visible instrument",
    translation: "三边委员会是世界规划精英的",
  },
  {
    startFrame: 1620,
    endFrame: 1800,
    text: "of a world planner elite.",
    translation: "可见工具。",
  },
];

// ========== Scene 7: 总结 ==========
// 帧范围: 12900-14400 (430-480秒)
export const scene07Subtitles: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 180,
    text: "Summary — The Elite Club Network",
    translation: "总结——精英俱乐部网络",
  },
  {
    startFrame: 180,
    endFrame: 360,
    text: "From Colonel House to Trilateral Commission,",
    translation: "从豪斯上校到三边委员会，",
  },
  {
    startFrame: 360,
    endFrame: 540,
    text: "a hidden network controls global affairs.",
    translation: "一个隐藏的网络控制着全球事务。",
  },
  {
    startFrame: 540,
    endFrame: 720,
    text: "These clubs cross borders, parties, and governments.",
    translation: "这些俱乐部跨越国界、党派和政府。",
  },
  {
    startFrame: 720,
    endFrame: 900,
    text: "They form a shadowy power structure",
    translation: "形成一个隐秘的权力结构",
  },
  {
    startFrame: 900,
    endFrame: 1080,
    text: "that affects billions of lives.",
    translation: "影响着数十亿人的生活。",
  },
  {
    startFrame: 1080,
    endFrame: 1260,
    text: "Knowledge is power. Information is power.",
    translation: "知识就是力量。信息就是力量。",
  },
  {
    startFrame: 1260,
    endFrame: 1440,
    text: "The secret of their control is hidden in plain sight.",
    translation: "他们控制秘诀就隐藏在众目睽睽之下。",
  },
  {
    startFrame: 1440,
    endFrame: 1500,
    text: "Understanding is our only defense.",
    translation: "理解是我们唯一的防线。",
  },
];

// ========== 场景定义 ==========
export interface SceneSubtitles {
  sceneName: string;
  sceneIndex: number;
  startFrame: number;
  endFrame: number;
  subtitles: SubtitleEntry[];
}

export const episode06Scenes: SceneSubtitles[] = [
  {
    sceneName: "开场",
    sceneIndex: 0,
    startFrame: 0,
    endFrame: 1200,
    subtitles: scene00Subtitles,
  },
  {
    sceneName: "豪斯上校",
    sceneIndex: 1,
    startFrame: 1200,
    endFrame: 3000,
    subtitles: scene01Subtitles,
  },
  {
    sceneName: "外交协会",
    sceneIndex: 2,
    startFrame: 3000,
    endFrame: 5100,
    subtitles: scene02Subtitles,
  },
  {
    sceneName: "国际清算银行",
    sceneIndex: 3,
    startFrame: 5100,
    endFrame: 7200,
    subtitles: scene03Subtitles,
  },
  {
    sceneName: "IMF与世界银行",
    sceneIndex: 4,
    startFrame: 7200,
    endFrame: 9300,
    subtitles: scene04Subtitles,
  },
  {
    sceneName: "彼尔德伯格俱乐部",
    sceneIndex: 5,
    startFrame: 9300,
    endFrame: 11100,
    subtitles: scene05Subtitles,
  },
  {
    sceneName: "三边委员会",
    sceneIndex: 6,
    startFrame: 11100,
    endFrame: 12900,
    subtitles: scene06Subtitles,
  },
  {
    sceneName: "总结",
    sceneIndex: 7,
    startFrame: 12900,
    endFrame: 14400,
    subtitles: scene07Subtitles,
  },
];

// ========== 兼容：合并的字幕数组 ==========
// 将所有场景字幕按全局帧偏移合并，用于向后兼容
export const episode06Subtitles: SubtitleEntry[] = [
  ...scene00Subtitles,
  ...scene01Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 1200,
    endFrame: s.endFrame + 1200,
  })),
  ...scene02Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 3000,
    endFrame: s.endFrame + 3000,
  })),
  ...scene03Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 5100,
    endFrame: s.endFrame + 5100,
  })),
  ...scene04Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 7200,
    endFrame: s.endFrame + 7200,
  })),
  ...scene05Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 9300,
    endFrame: s.endFrame + 9300,
  })),
  ...scene06Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 11100,
    endFrame: s.endFrame + 11100,
  })),
  ...scene07Subtitles.map((s) => ({
    ...s,
    startFrame: s.startFrame + 12900,
    endFrame: s.endFrame + 12900,
  })),
];

// ========== 辅助函数 ==========

/**
 * 获取指定场景的字幕数组
 */
export const getSceneSubtitles = (sceneIndex: number): SubtitleEntry[] | undefined => {
  const scene = episode06Scenes.find((s) => s.sceneIndex === sceneIndex);
  return scene?.subtitles;
};

/**
 * 获取指定场景的全局帧偏移
 */
export const getSceneOffset = (sceneIndex: number): number => {
  const scene = episode06Scenes.find((s) => s.sceneIndex === sceneIndex);
  return scene?.startFrame ?? 0;
};

/**
 * 获取指定帧所在的场景索引
 */
export const getSceneIndexAtFrame = (frame: number): number => {
  for (let i = episode06Scenes.length - 1; i >= 0; i--) {
    if (frame >= episode06Scenes[i].startFrame) {
      return i;
    }
  }
  return 0;
};
