/**
 * 场景动画语义化配置
 *
 * revealMethod 语义映射:
 * - zoom: 放大揭示 - 用于重要揭示、开场、权力展示
 * - lightBurst: 光芒希望 - 用于积极转折、金/银主题、财富展示
 * - shatter: 破碎危机 - 用于悲剧、危机、刺杀、阴谋揭示
 * - dissolve: 溶解历史 - 用于历史背景、过渡、严肃叙事
 *
 * accentColor 语义映射:
 * - #FFD700: 金色 - 财富、黄金、希望、胜利
 * - #C0C0C0: 银色 - 白银、货币历史、稳健
 * - #8B0000: 血红 - 悲剧、刺杀、战争利润、牺牲
 * - #E53E3E: 警告红 - 危机、警告、危险
 * - #4B0082: 深紫 - 神秘、阴谋、罗斯柴尔德、精英
 * - #2F4F4F: 深灰 - 严肃历史、秘密会议、阴影
 * - #483D8B: 皇室紫 - 权力、精英、帝国
 * - #FFFFFF: 白色 - 纯粹、总结、终章、光明
 * - #8B4513: 棕色 - 历史、古老、土地
 * - #4169E1: 皇家蓝 - 外交、联盟、国际
 * - #FF4500: 橙红 - 危机爆发、能源、石油
 */

// ============================================================
// EPISODE 01: 货币战争的序幕 - 危机/警示
// ============================================================
export const EP01_SCENE_CONFIG = [
  // Scene 0: 货币大厦的危机 - 危机警告开场
  { method: "zoom", color: "#FFD700", reason: "金色开场揭示货币危机" },
  // Scene 1: 黄金白银的终极地位 - 历史教育
  { method: "closeup", color: null, reason: "宁静历史叙述" },
  // Scene 2: 纸币与美元体系 - 阴谋揭示
  { method: "shatter", color: "#4B0082", reason: "深紫破碎揭示纸币阴谋" },
  // Scene 3: 债务货币的陷阱 - 陷阱/阴谋
  { method: "shatter", color: "#8B0000", reason: "血红破碎展示债务陷阱" },
  // Scene 4: 金融危机推论 - 预言警告
  { method: "lightBurst", color: "#E53E3E", reason: "警告红光芒预示危机" },
  // Scene 5: 中国经济航母起航 - 希望
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒象征中国希望" },
  // Scene 6: 看不见硝烟的战场 - 神秘战争
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解暗示隐形战场" },
  // Scene 7: 历史的警示 - 悲剧教训
  { method: "shatter", color: "#E53E3E", reason: "红色破碎警示历史悲剧" },
  // Scene 8: 战争已经开始 - 警示召唤
  { method: "zoom", color: "#8B0000", reason: "血红放大警示战争开始" },
];

// ============================================================
// EPISODE 02: 罗斯柴尔德家族 - 神秘/权力
// ============================================================
export const EP02_SCENE_CONFIG = [
  // Scene 0: 罗斯柴尔德名言 - 揭示开场
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解揭示神秘家族" },
  // Scene 1: 隐形的世界首富 - 神秘
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解暗示隐形财富" },
  // Scene 2: 梅耶的第一桶金 - 历史起源
  { method: "closeup", color: null, reason: "宁静历史叙述起源" },
  // Scene 3: 滑铁卢与情报网络 - 战争/阴谋
  { method: "shatter", color: "#8B0000", reason: "血红破碎揭示战争阴谋" },
  // Scene 4: 股票交易所操纵 - 金融阴谋
  { method: "shatter", color: "#4B0082", reason: "深紫破碎揭示操纵阴谋" },
  // Scene 5: 二十倍利润 - 贪婪利润
  { method: "lightBurst", color: "#8B0000", reason: "血红光芒象征血色利润" },
  // Scene 6: 五兄弟征服欧洲 - 帝国扩张
  { method: "zoom", color: "#483D8B", reason: "皇室紫放大展示帝国扩张" },
  // Scene 7: 金融帝国巅峰 - 权力巅峰
  { method: "zoom", color: "#FFD700", reason: "金色放大展示权力巅峰" },
  // Scene 8: 隐形财富 - 神秘结尾
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解回归神秘" },
];

// ============================================================
// EPISODE 03: 美联储起源 - 历史/悲剧
// ============================================================
export const EP03_SCENE_CONFIG = [
  // Scene 0: 林肯的警告 - 历史预言
  { method: "zoom", color: "#8B4513", reason: "棕色放大历史预言" },
  // Scene 1: 殖民地货币 - 战争起源
  { method: "dissolve", color: "#8B4513", reason: "棕色溶解历史背景" },
  // Scene 2: 第一银行 - 金融历史
  { method: "closeup", color: null, reason: "宁静金融历史" },
  // Scene 3: 杰克逊银行战争 - 胜利
  { method: "shatter", color: "#FFD700", reason: "金色破碎象征胜利" },
  // Scene 4: 内战前奏 - 战争危机
  { method: "dissolve", color: "#8B0000", reason: "血红溶解战争危机" },
  // Scene 5: 绿背纸币 - 创新
  { method: "lightBurst", color: "#4169E1", reason: "皇家蓝光芒展示创新" },
  // Scene 6: 俄国同盟 - 外交联盟
  { method: "dissolve", color: "#4169E1", reason: "皇家蓝溶解外交联盟" },
  // Scene 7: 林肯遇刺 - 悲剧
  { method: "shatter", color: "#8B0000", reason: "血红破碎悲剧刺杀" },
  // Scene 8: 国家银行法案 - 妥协结尾
  { method: "lightBurst", color: "#FFFFFF", reason: "白色光芒总结终章" },
];

// ============================================================
// EPISODE 04: 私有中央银行 - 阴谋/揭示
// ============================================================
export const EP04_SCENE_CONFIG = [
  // Scene 0: 威尔逊忏悔 - 悔恨开场
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解悔恨开场" },
  // Scene 1: 美联储真相 - 震惊揭示
  { method: "shatter", color: "#4B0082", reason: "深紫破碎震惊揭示" },
  // Scene 2: 华尔街七巨头 - 权力展示
  { method: "zoom", color: "#483D8B", reason: "皇室紫放大权力展示" },
  // Scene 3: 摩根崛起 - 帝国崛起
  { method: "zoom", color: "#FFD700", reason: "金色放大帝国崛起" },
  // Scene 4: 洛克菲勒帝国 - 石油垄断
  { method: "closeup", color: null, reason: "宁静垄断展示" },
  // Scene 5: 1907年危机 - 危机制造
  { method: "shatter", color: "#E53E3E", reason: "红色破碎危机制造" },
  // Scene 6: 金本位到法定货币 - 货币变革
  { method: "dissolve", color: "#FFD700", reason: "金色溶解货币变革" },
  // Scene 7: 1912年大选 - 政治操纵
  { method: "shatter", color: "#4B0082", reason: "深紫破碎政治操纵" },
  // Scene 8: B计划 - 秘密策划
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解秘密策划" },
  // Scene 9: 法案通过 - 阴谋成功
  { method: "shatter", color: "#8B0000", reason: "血红破碎阴谋成功" },
  // Scene 10: 谁拥有美联储 - 揭示真相
  { method: "lightBurst", color: "#4B0082", reason: "深紫光芒揭示真相" },
  // Scene 11: 隐形控制 - 阴谋控制
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解隐形控制" },
  // Scene 12: 威尔逊觉醒 - 悔恨觉醒
  { method: "dissolve", color: "#8B0000", reason: "血红溶解悔恨觉醒" },
  // Scene 13: 总结 - 总结
  { method: "zoom", color: "#FFFFFF", reason: "白色放大总结" },
];

// ============================================================
// EPISODE 05: 一战与大衰退 - 战争/收割
// ============================================================
export const EP05_SCENE_CONFIG = [
  // Scene 0: 本杰明·斯特朗 - 权力人物
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解严肃历史" },
  // Scene 1: 没有美联储就没有战争 - 因果关系
  { method: "shatter", color: "#8B0000", reason: "血红破碎战争因果" },
  // Scene 2: 战时美联储 - 战争操纵
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解战争操纵" },
  // Scene 3: 威尔逊战争决定 - 背叛
  { method: "shatter", color: "#8B0000", reason: "血红破碎背叛揭示" },
  // Scene 4: 战争利润 - 贪婪利润
  { method: "lightBurst", color: "#8B0000", reason: "血红光芒战争利润" },
  // Scene 5: 凡尔赛和约 - 阴谋布局
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解阴谋布局" },
  // Scene 6: 农业萧条 - 第一收割
  { method: "shatter", color: "#8B4513", reason: "棕色破碎农业萧条" },
  // Scene 7: 咆哮二十年代 - 虚假繁荣
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒虚假繁荣" },
  // Scene 8: 1927年秘密会议 - 阴谋会议
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解阴谋会议" },
  // Scene 9: 泡沫膨胀 - 危机布局
  { method: "zoom", color: "#E53E3E", reason: "红色放大的危机布局" },
];

// ============================================================
// EPISODE 06: 精英俱乐部 - 阴谋/秘密
// ============================================================
export const EP06_SCENE_CONFIG = [
  // Scene 0: 开场 - 秘密权力
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解秘密权力" },
  // Scene 1: 豪斯上校 - 精英教父
  { method: "zoom", color: "#2F4F4F", reason: "深灰放大精英教父" },
  // Scene 2: 外交协会 - 政策控制
  { method: "dissolve", color: "#483D8B", reason: "皇室紫溶解政策控制" },
  // Scene 3: 国际清算银行 - 银行家银行
  { method: "closeup", color: null, reason: "宁静银行展示" },
  // Scene 4: IMF与世界银行 - 剥削工具
  { method: "shatter", color: "#8B0000", reason: "血红破碎剥削工具" },
  // Scene 5: 彼尔德伯格 - 秘密聚会
  { method: "lightBurst", color: "#4B0082", reason: "深紫光芒秘密聚会" },
  // Scene 6: 三边委员会 - 全球治理
  { method: "dissolve", color: "#483D8B", reason: "皇室紫溶解全球治理" },
  // Scene 7: 总结 - 网络揭示
  { method: "zoom", color: "#FFFFFF", reason: "白色放大网络揭示" },
];

// ============================================================
// EPISODE 07: 新世界秩序 - 全球阴谋
// ============================================================
export const EP07_SCENE_CONFIG = [
  // Scene 0: 新世界秩序开场 - 全球计划
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解全球计划" },
  // Scene 1: 布雷顿森林 - 国际体系
  { method: "closeup", color: null, reason: "宁静国际体系" },
  // Scene 2: 豪斯上校背景 - 精英背景
  { method: "lightBurst", color: "#2F4F4F", reason: "深灰光芒精英背景" },
  // Scene 3: CFR精英控制 - 媒体控制
  { method: "shatter", color: "#4B0082", reason: "深紫破碎媒体控制" },
  // Scene 4: BIS银行家银行 - 秘密银行
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解秘密银行" },
  // Scene 5: 彼尔德伯格俱乐部 - 年度聚会
  { method: "zoom", color: "#4B0082", reason: "深紫放大年度聚会" },
  // Scene 6: 三边委员会 - 全球协调
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒全球协调" },
];

// ============================================================
// EPISODE 08: 肯尼迪与白银 - 悲剧/抗争
// ============================================================
export const EP08_SCENE_CONFIG = [
  // Scene 0: 开场 - 刺杀悬念
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解刺杀悬念" },
  // Scene 1: 肯尼迪遇刺 - 悲剧刺杀
  { method: "shatter", color: "#8B0000", reason: "血红破碎悲剧刺杀" },
  // Scene 2: 动机 - 11110号总统令
  { method: "lightBurst", color: "#2F4F4F", reason: "深灰光芒揭示动机" },
  // Scene 3: 白银历史 - 货币历史
  { method: "zoom", color: "#C0C0C0", reason: "银色放大货币历史" },
  // Scene 4: 白银本位终结 - 货币终结
  { method: "closeup", color: null, reason: "宁静货币终结" },
  // Scene 5: 肯尼迪之死 - 死亡后果
  { method: "shatter", color: "#8B0000", reason: "血红破碎死亡后果" },
  // Scene 6: 黄金池崩溃 - 金融崩溃
  { method: "closeup", color: null, reason: "宁静金融崩溃" },
  // Scene 7: SDR创造 - 纸黄金
  { method: "dissolve", color: "#FFD700", reason: "金色溶解纸黄金" },
  // Scene 8: 尼克松关闭黄金窗口 - 历史转折
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒历史转折" },
  // Scene 9: 石油美元 - 全球体系
  { method: "closeup", color: null, reason: "宁静全球体系" },
  // Scene 10: 里根黄金委员会 - 失败尝试
  { method: "shatter", color: "#2F4F4F", reason: "深灰破碎失败尝试" },
  // Scene 11: 总结 - 历史总结
  { method: "zoom", color: "#FFFFFF", reason: "白色放大历史总结" },
];

// ============================================================
// EPISODE 09: 不宣而战的货币战争 - 经济战争
// ============================================================
export const EP09_SCENE_CONFIG = [
  // Scene 0: 货币战争开场 - 经济战争
  { method: "shatter", color: "#8B0000", reason: "血红破碎经济战争" },
  // Scene 1: 彼尔德伯格1973 - 石油阴谋
  { method: "lightBurst", color: "#FF4500", reason: "橙红光芒石油阴谋" },
  // Scene 2: 1973年石油危机 - 危机爆发
  { method: "closeup", color: null, reason: "宁静危机爆发" },
  // Scene 3: 沃尔克冲击 - 利率攻击
  { method: "dissolve", color: "#2F4F4F", reason: "深灰溶解利率攻击" },
  // Scene 4: 高利率摧毁发展中国家 - 经济摧毁
  { method: "closeup", color: null, reason: "宁静经济摧毁" },
  // Scene 5: IMF条件 - 剥削条件
  { method: "zoom", color: "#FFD700", reason: "金色放大剥削条件" },
  // Scene 6: 日本泡沫破裂 - 泡沫攻击
  { method: "shatter", color: "#8B0000", reason: "血红破碎泡沫攻击" },
  // Scene 7: 索罗斯亚洲金融危机 - 金融攻击
  { method: "shatter", color: "#8B0000", reason: "血红破碎金融攻击" },
];

// ============================================================
// EPISODE 10: 美元死穴 - 系统危机
// ============================================================
export const EP10_SCENE_CONFIG = [
  // Scene 0: 债务货币开场 - 债务系统
  { method: "dissolve", color: "#4B0082", reason: "深紫溶解债务系统" },
  // Scene 1: 部分准备金 - 银行秘密
  { method: "closeup", color: null, reason: "宁静银行秘密" },
  // Scene 2: 债务美元 - 美元创造
  { method: "shatter", color: "#8B0000", reason: "血红破碎美元创造" },
  // Scene 3: 衍生品市场 - 金融炸弹
  { method: "lightBurst", color: "#FF4500", reason: "橙红光芒金融炸弹" },
  // Scene 4: 房利美房地美 - 系统风险
  { method: "closeup", color: null, reason: "宁静系统风险" },
  // Scene 5: 黄金监狱 - 黄金操纵
  { method: "dissolve", color: "#FFD700", reason: "金色溶解黄金操纵" },
  // Scene 6: 黄金反击 - 反击希望
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒反击希望" },
  // Scene 7: 罗斯柴尔德 - 精英操作
  { method: "closeup", color: null, reason: "宁静精英操作" },
  // Scene 8: 总结 - 无解困境
  { method: "zoom", color: "#FFFFFF", reason: "白色放大无解困境" },
];

// ============================================================
// EPISODE 11: 谋万世者 - 战略希望
// ============================================================
export const EP11_SCENE_CONFIG = [
  // Scene 0: 终章开场 - 未来展望
  { method: "lightBurst", color: "#FFD700", reason: "金色光芒未来展望" },
  // Scene 1: 货币标准问题 - 分析问题
  { method: "zoom", color: "#C0C0C0", reason: "银色放大分析问题" },
  // Scene 2: 金银诚实货币 - 诚实货币
  { method: "closeup", color: null, reason: "宁静诚实货币" },
  // Scene 3: 债务肥胖 - 系统问题
  { method: "shatter", color: "#8B0000", reason: "血红破碎系统问题" },
  // Scene 4: 金融空军 - 战略防御
  { method: "lightBurst", color: "#FF4500", reason: "橙红光芒战略防御" },
  // Scene 5: 大战略 - 高筑墙广积粮
  { method: "dissolve", color: "#FFD700", reason: "金色溶解大战略" },
  // Scene 6: 世界储备货币 - 全球野心
  { method: "closeup", color: null, reason: "宁静全球野心" },
  // Scene 7: 金融风险 - 风险警示
  { method: "shatter", color: "#8B0000", reason: "血红破碎风险警示" },
  // Scene 8: 终章结尾 - 希望未来
  { method: "zoom", color: "#FFD700", reason: "金色放大希望未来" },
];
