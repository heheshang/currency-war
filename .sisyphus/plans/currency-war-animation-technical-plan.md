# Remotion 技术配置方案

## Remotion 项目配置

### 基础配置

```json
{
  "name": "currency-war",
  "version": "1.0.0",
  "description": "《货币战争1：债务的魔咒》动画系列",
  "type": "module",
  "scripts": {
    "start": "remotion studio",
    "build": "remotion render SeriesPreview",
    "render:all": "node render-all.js",
    "render:episode": "remotion render Episode01",
    "preview": "remotion watch",
    "upgrade": "remotion upgrade"
  },
  "dependencies": {
    "@remotion/cli": "^4.0.0",
    "react": "^18.2.0",
    "@remotion/opengl-ts": "^4.0.0",
    "remotion": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0"
  }
}
```

### Remotion 配置文件结构

```typescript
// remotion.config.ts
import { Config } from "@remotion/cli/config";

export const remotionConfig: Config = {
  projects: [
    // 预告片
    {
      composition: "SeriesPreview",
      format: "mp4",
      size: { width: 1920, height: 1080 },
      fps: 30,
      bitrate: "8M",
      audioBitrate: "192k",
      codec: "h264-aac",
      chromiumOpenGlRenderer: "angle",
      concurrency: 4,
    },
    // 10集系列
    ...Array.from({ length: 10 }, (_, i) => {
      const episode = String(i + 1).padStart(2, "0");
      return {
        composition: `Episode${episode}`,
        format: "mp4",
        size: { width: 1920, height: 1080 },
        fps: 30,
        bitrate: "8M",
        defaultProps: {
          episodeNumber: i + 1,
        },
      };
    }),
  ],
};
```

## 项目文件结构

```
currency-war/
├── src/
│   ├── Root.tsx                          // Remotion根组件
│   ├── index.ts                          // 入口文件
│   ├── compositions/
│   │   ├── SeriesPreview.tsx            // 系列预告
│   │   ├── Episode01.tsx                 // 第1集
│   │   ├── Episode02.tsx                 // 第2集
│   │   ├── Episode03.tsx                 // 第3集（滑铁卢）
│   │   └── ...
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Frame.tsx                 // 通用边框
│   │   │   ├── TitleCard.tsx             // 标题卡片
│   │   │   ├── ChapterHeader.tsx         // 章节标题
│   │   │   └── EndCredits.tsx           // 片尾字幕
│   │   ├── maps/
│   │   │   ├── EuropeMap.tsx             // 欧洲地图
│   │   │   ├── USAMap.tsx                // 美国地图
│   │   │   └── WorldMap.tsx              // 世界地图
│   │   ├── charts/
│   │   │   ├── LineChart.tsx             // 折线图
│   │   │   ├── BarChart.tsx              // 柱状图
│   │   │   ├── PieChart.tsx              // 饼图
│   │   │   └── DebtSpiral.tsx           // 债务螺旋动画
│   │   ├── data-viz/
│   │   │   ├── GoldFlow.tsx              // 金金流动
│   │   │   ├── InformationNetwork.tsx   // 信息网络
│   │   │   ├── MoneySupply.tsx           // 货币供应量
│   │   │   └── TimelineEvents.tsx        // 时间线事件
│   │   ├── characters/
│   │   │   ├── NathanRothschild.tsx      // 内森·罗斯柴尔德
│   │   │   ├── MayerRothschild.tsx      // 梅耶·罗斯柴尔德
│   │   │   ├── FamilyFive.tsx             // 5兄弟
│   │   │   └── BankerShadow.tsx          // 银行家剪影
│   │   ├── scenes/
│   │   │   ├── BattleOfWaterloo.tsx     // 滑铁卢战役
│   │   │   ├── StockCrash1929.tsx       // 1929股灾
│   │   │   ├── JekyllIsland.tsx          // 哲基尔岛会议
│   │   │   ├── GoldConfiscation.tsx      // 黄金充公
│   │   │   └── WarScene.tsx              // 战争场景
│   │   ├── effects/
│   │   │   ├── GlitchEffect.tsx         // 故障效果
│   │   │   ├── ParticleSystem.tsx        // 粒子系统
│   │   │   ├── TypewriterText.tsx         // 打字机效果
│   │   │   ├── FadeTransition.tsx         // 淡入淡出
│   │   │   └── ZoomEffect.tsx            // 缩放效果
│   │   └── ui/
│   │       ├── ProgressBar.tsx           // 进度条
│   │       ├── EpisodeSelector.tsx       // 集数选择器
│   │       └── ShareButtons.tsx          // 分享按钮
│   ├── assets/
│   │   ├── images/
│   │   │   ├── europe-map.png
│   │   │   ├── gold-coin.png
│   │   │   ├── paper-money.png
│   │   │   ├── battle-scenes/
│   │   │   ├── characters/
│   │   │   └── icons/
│   │   ├── fonts/
│   │   │   ├── Cinzel-Bold.ttf
│   │   │   ├── SourceHanSans.ttf
│   │   │   └── JetBrainsMono.ttf
│   │   ├── audio/
│   │   │   ├── bgm/
│   │   │   │   ├── epic-main.mp3
│   │   │   │   ├── tension.mp3
│   │   │   │   ├── conspiracy.mp3
│   │   │   │   └── victory.mp3
│   │   │   ├── sfx/
│   │   │   │   ├── coin-clink.mp3
│   │   │   │   ├── stock-bell.mp3
│   │   │   │   ├── war-drums.mp3
│   │   │   │   └── paper-rustle.mp3
│   │   │   └── voiceover/
│   │   │       ├── episode-01-zh.mp3
│   │   │       ├── episode-02-zh.mp3
│   │   │       └── ...
│   │   └── data/
│   │       ├── episodes.json             // 各集元数据
│   │       ├── characters.json           // 人物数据
│   │       ├── timeline.json             // 历史时间线
│   │       └── quotes.json               // 引用语句
│   ├── styles/
│   │   ├── theme.css                     // 主题样式
│   │   ├── animations.css                // 动画定义
│   │   └── components.css                // 组件样式
│   ├── utils/
│   │   ├── interpolate.ts                // 插值函数
│   │   ├── timing.ts                     // 时间控制
│   │   ├── easing.ts                     // 缓动函数
│   │   └── formatters.ts                 // 格式化工具
│   ├── HelloWorld.tsx                    // 现有的示例文件
│   └── HelloWorld/
├── public/
│   └── subtitles/                        // 字幕JSON文件
│       ├── episode-1.json
│       ├── episode-2.json
│       └── ...
├── subtitle-assets/                       // 字幕源文件
│   ├── zh-CN/
│   │   └── episode-*.srt
│   └── en-US/
│       └── episode-*.srt
├── scripts/
│   └── import-subtitles.ts               // 字幕导入工具
├── remotion.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

currency-war/
├── src/
│ ├── Root.tsx // Remotion根组件
│ ├── index.ts // 入口文件
│ ├── compositions/
│ │ ├── SeriesPreview.tsx // 系列预告
│ │ ├── Episode01.tsx // 第1集
│ │ ├── Episode02.tsx // 第2集
│ │ ├── Episode03.tsx // 第3集（滑铁卢）
│ │ └── ...
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Frame.tsx // 通用边框
│ │ │ ├── TitleCard.tsx // 标题卡片
│ │ │ ├── ChapterHeader.tsx // 章节标题
│ │ │ └── EndCredits.tsx // 片尾字幕
│ │ ├── maps/
│ │ │ ├── EuropeMap.tsx // 欧洲地图
│ │ │ ├── USAMap.tsx // 美国地图
│ │ │ └── WorldMap.tsx // 世界地图
│ │ ├── charts/
│ │ │ ├── LineChart.tsx // 折线图
│ │ │ ├── BarChart.tsx // 柱状图
│ │ │ ├── PieChart.tsx // 饼图
│ │ │ └── DebtSpiral.tsx // 债务螺旋动画
│ │ ├── data-viz/
│ │ │ ├── GoldFlow.tsx // 金金流动
│ │ │ ├── InformationNetwork.tsx // 信息网络
│ │ │ ├── MoneySupply.tsx // 货币供应量
│ │ │ └── TimelineEvents.tsx // 时间线事件
│ │ ├── characters/
│ │ │ ├── NathanRothschild.tsx // 内森·罗斯柴尔德
│ │ │ ├── MayerRothschild.tsx // 梅耶·罗斯柴尔德
│ │ │ ├── FamilyFive.tsx // 5兄弟
│ │ │ └── BankerShadow.tsx // 银行家剪影
│ │ ├── scenes/
│ │ │ ├── BattleOfWaterloo.tsx // 滑铁卢战役
│ │ │ ├── StockCrash1929.tsx // 1929股灾
│ │ │ ├── JekyllIsland.tsx // 哲基尔岛会议
│ │ │ ├── GoldConfiscation.tsx // 黄金充公
│ │ │ └── WarScene.tsx // 战争场景
│ │ ├── effects/
│ │ │ ├── GlitchEffect.tsx // 故障效果
│ │ │ ├── ParticleSystem.tsx // 粒子系统
│ │ │ ├── TypewriterText.tsx // 打字机效果
│ │ │ ├── FadeTransition.tsx // 淡入淡出
│ │ │ └── ZoomEffect.tsx // 缩放效果
│ │ └── ui/
│ │ ├── ProgressBar.tsx // 进度条
│ │ ├── EpisodeSelector.tsx // 集数选择器
│ │ └── ShareButtons.tsx // 分享按钮
│ ├── assets/
│ │ ├── images/
│ │ │ ├── europe-map.png
│ │ │ ├── gold-coin.png
│ │ │ ├── paper-money.png
│ │ │ ├── battle-scenes/
│ │ │ ├── characters/
│ │ │ └── icons/
│ │ ├── fonts/
│ │ │ ├── Cinzel-Bold.ttf
│ │ │ ├── SourceHanSans.ttf
│ │ │ └── JetBrainsMono.ttf
│ │ ├── audio/
│ │ │ ├── bgm/
│ │ │ │ ├── epic-main.mp3
│ │ │ │ ├── tension.mp3
│ │ │ │ ├── conspiracy.mp3
│ │ │ │ └── victory.mp3
│ │ │ ├── sfx/
│ │ │ │ ├── coin-clink.mp3
│ │ │ │ ├── stock-bell.mp3
│ │ │ │ ├── war-drums.mp3
│ │ │ │ └── paper-rustle.mp3
│ │ │ └── voiceover/
│ │ │ ├── episode-01-zh.mp3
│ │ │ ├── episode-02-zh.mp3
│ │ │ └── ...
│ │ └── data/
│ │ ├── episodes.json // 各集元数据
│ │ ├── characters.json // 人物数据
│ │ ├── timeline.json // 历史时间线
│ │ └── quotes.json // 引用语句
│ ├── styles/
│ │ ├── theme.css // 主题样式
│ │ ├── animations.css // 动画定义
│ │ └── components.css // 组件样式
│ ├── utils/
│ │ ├── interpolate.ts // 插值函数
│ │ ├── timing.ts // 时间控制
│ │ ├── easing.ts // 缓动函数
│ │ └── formatters.ts // 格式化工具
│ ├── HelloWorld.tsx // 现有的示例文件
│ └── HelloWorld/
├── public/
│ └── subtitles/ // 字幕JSON文件
│ ├── episode-1.json
│ ├── episode-2.json
│ └── ...
├── subtitle-assets/ // 字幕源文件
│ ├── zh-CN/
│ │ └── episode-_.srt
│ └── en-US/
│ └── episode-_.srt
├── scripts/
│ └── import-subtitles.ts // 字幕导入工具
├── remotion.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md

````

## 核心组件设计

### 1. 欧洲地图组件（EuropeMap.tsx）

**功能**：展示罗斯柴尔德5兄弟的金融网络
**技术要点**：

- 使用SVG绘制可交互地图
- 动画路径：信使在城市间穿梭
- 城市标记点闪烁效果
- 信息流动的粒子效果

**关键动画**：

```typescript
// 信使从滑铁卢到伦敦的路径动画
<AnimatedPath
  path="M 400 300 L 350 280 L 300 320"
  stroke="gold"
  strokeWidth={3}
  strokeDasharray="1000"
  strokeDashoffset={interpolate(
    frame,
    [0, 1000],
    [0, -1000]
  )}
  duration={60}
/>
````

### 2. 股票市场组件（StockMarket.tsx）

**功能**：模拟滑铁卢战役后的股市崩盘
**技术要点**：

- 实时价格曲线动画
- 恐慌人群的粒子效果
- 颜色从绿到红的渐变

**关键动画**：

```typescript
// 股价下跌动画
const price = useTransform((frame) => interpolate(frame, [0, 180], [100, 5]));

const color = useTransform((frame) =>
  interpolateColor(frame, [0, 90, 180], ["#22c55e", "#fbbf24", "#ef4444"]),
);
```

### 3. 时间轴组件（Timeline.tsx）

**功能**：展示从1694年到1971年的货币体系演变
**技术要点**：

- 横向滚动时间轴
- 关键事件标记点
- 点击事件展开详情

### 4. 黄金流动动画（GoldFlow.tsx）

**功能**：可视化的金币流动
**技术要点**：

- 金币的3D旋转效果
- 从民众流向银行的动画
- 银行家累积金币的堆叠效果

**实现方式**：

- 使用React Three.js或纯CSS 3D变换
- 粒子系统表现流动感

## 关键场景实现

### 场景1：滑铁卢情报传递（Episode03核心场景）

**时间线**：30秒
**分镜头**：

1. [0-5s] 战场场景，炮火连天
2. [5-10s] 罗斯伍兹骑快马奔向布鲁塞尔
3. [10-15s] 夜渡英吉利海峡（风急浪高）
4. [15-20s] 到达英国，内森亲自等候
5. [20-25s] 内森策马奔向伦敦
6. [25-30s] 到达交易所，开始表演

**技术实现**：

```typescript
const WaterlooScene: React.FC = () => {
  return (
    <Sequence from={0} duration={30}>
      {/* 战场背景 */}
      <BattleScene />

      {/* 信使路径叠加 */}
      <CourierPathAnimation />

      {/* 内森到达 */}
      <NathanArrival />

      {/* 交易所门口 */}
      <StockExchangeScene />
    </Sequence>
  );
};
```

### 场景2：股票交易所操作（Episode03高潮）

**时间线**：60秒
**关键元素**：

- 内森入场慢镜头
- 第一次抛售（价格从100→5）
- 人群恐慌的粒子效果
- 反向买进
- 数字滚动：+20倍

**技术实现**：

```typescript
const StockExchangeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const price = useTransform(frame =>
    interpolate(frame, [0, 180], [100, 5])
  );

  const crowdDensity = useTransform(frame =>
    interpolate(frame, [0, 180], [0, 1])
  );

  return (
    <div style={styles.exchange}>
      {/* 价格图表 */}
      <PriceChart price={price} />

      {/* 内森表情 */}
      <NathanExpression frame={frame} />

      {/* 恐慌人群 */}
      <PanicCrowd density={crowdDensity} />

      {/* 数字动画 */}
      <AnimatedNumber
        value={interpolate(frame, [0, 180], [0, 20])}
        suffix="倍"
      />
    </div>
  );
};
```

### 场景3：哲基尔岛秘密会议（Episode07核心场景）

**风格**：悬疑、神秘
**关键元素**：

- 神秘火车夜行
- 孤岛豪华会所
- 7位银行家的剪影
- 秘密文件起草

**技术实现**：

- 使用暗色调，低饱和度
- 剪影风格表现人物
- 火光、阴影营造氛围

```typescript
const JekyllIslandScene: React.FC = () => {
  return (
    <Sequence from={0} duration={90}>
      {/* 夜行火车 */}
      <NightTrain />

      {/* 哲基尔岛外观 */}
      <IslandEstablishment />

      {/* 会议场景 - 剪影 */}
      <SecretMeeting />

      {/* 文件签署 */}
      <DocumentSigning />
    </Sequence>
  );
};
```

### 场景4：黄金充公（Episode09核心场景）

**时间线**：45秒
**关键元素**：

- 民众上缴黄金
- 金价从20.67跳到35
- 金币变成纸币的视觉隐喻
- 国债锁链的可视化

**技术实现**：

```typescript
const GoldConfiscation: React.FC = () => {
  return (
    <Sequence from={0} duration={45}>
      {/* 罗斯福行政命令公告 */}
      <ExecutiveOrder />

      {/* 黄金流向 */}
      <GoldFlowAnimation
        from="people"
        to="government"
        amount={100}
      />

      {/* 金价跳变 */}
      <PriceJump
        from={20.67}
        to={35}
        duration={15}
      />

      {/* 纸币取代金币 */}
      <PaperMoneyTakesOver />
    </Sequence>
  );
};
```

## 动画效果库

### 1. 缓动函数库

```typescript
// utils/easing.ts
export const easings = {
  // 平滑进入
  easeIn: (t: number) => t * t,
  // 平滑退出
  easeOut: (t: number) => t * (2 - t),
  // 平滑进出
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // 弹性效果
  elastic: (t: number) => (t === 0 ? 0 : t * t * (7 * t - 2.5)),
  // 回弹效果
  bounce: (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    const n2 = 2.70158;
    const d2 = d1 * 1.5;
    return t === 0
      ? 0
      : t === 1
        ? 1
        : t < 0.5
          ? (-8 * Math.pow(2, 10 * t - 10)) / 27
          : (8 * Math.pow(2, -10 * t + 10) - 1) / 27;
  },
};
```

### 2. 时间控制工具

```typescript
// utils/timing.ts
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const waitFor = (condition: () => boolean, timeout: number = 5000) => {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error("Timeout waiting for condition");
    }
  }
};
```

### 3. 插值函数

```typescript
// utils/interpolate.ts
export const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
```

## 样式系统

### 主题色彩

```css
:root {
  /* 主色调 */
  --color-primary-gold: #ffd700;
  --color-primary-blue: #1e3a5a;
  --color-danger-red: #8b0000;
  --color-dark-bg: #0d1117;
  --color-text-light: #e8e8e8;

  /* 功能色 */
  --color-success: #22c55e;
  --color-warning: #fbbf24;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* 渐变色 */
  --gradient-gold: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
  --gradient-dark: linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%);
  --gradient-blue: linear-gradient(135deg, #1e3a5a 0%, #3b82f6 100%);
}
```

### 动画关键帧

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

## 性能优化策略

### 1. 组件懒加载

```typescript
// 按需加载重型组件
const HeavyChart = React.lazy(() => import("./charts/HeavyChart"));
```

### 2. 资源预加载

```typescript
// 在Root组件中预加载关键资源
const preloadAssets = () => {
  const images = [
    "/images/europe-map.png",
    "/images/gold-coin.png",
    // ...
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
```

### 3. 渲染优化

- 使用 `Composition.shouldStillRender` 避免不必要的重新渲染
- 使用 `React.memo` 包装纯展示组件
- 合理使用 `useMemo` 和 `useCallback`

### 4. 内存管理

- 及时清理大型定时器
- 使用 `useRef` 保存不需要触发重新渲染的数据
- 控制同时播放的音频数量

## 音频同步设计

### 背景音乐层次

```typescript
// utils/audio-mixer.ts
interface AudioLayer {
  id: string;
  src: string;
  volume: number; // 0-1
  fadeIn: number; // 淡入时间（帧）
  fadeOut: number; // 淡出时间（帧）
  loop: boolean;
}

export const mixAudio = (layers: AudioLayer[], frame: number) => {
  return layers.map((layer) => ({
    ...layer,
    currentVolume: interpolate(
      frame,
      [0, layer.fadeIn, 1, layer.fadeOut],
      [0, 0, layer.volume, 0],
    ),
  }));
};
```

### 音效时机

```typescript
// utils/sound-effects.ts
export const playSoundAtFrame = (
  soundPath: string,
  triggerFrame: number,
  currentFrame: number,
) => {
  if (currentFrame === triggerFrame) {
    const audio = new Audio(soundPath);
    audio.play();
  }
};
```

## 输出格式

### 视频规格

- **格式**：MP4 (H.264)
- **分辨率**：1920x1080 (Full HD)
- **帧率**：30fps
- **比特率**：8 Mbps
- **音频**：AAC, 192 kbps, 48kHz

### 备选格式

- **720p版本**：网站预览（4 Mbps）
- **4K版本**：未来可能需求（16 Mbps）

### 字幕格式

- SRT格式
- 嵌入式字幕
- 可切换中英文字幕

---

## 开发工作流

### 第1阶段：项目搭建（第1周）

- [ ] 初始化Remotion项目
- [ ] 配置Tailwind CSS
- [ ] 设置项目文件结构
- [ ] 创建基础组件（Frame, TitleCard等）
- [ ] 测试视频输出

### 第2阶段：核心组件开发（第2-3周）

- [ ] 地图组件（EuropeMap, USAMap）
- [ ] 图表组件（LineChart, BarChart）
- [ ] 角色组件（人物、剪影）
- [ ] 特效组件（Glitch, ParticleSystem）

### 第3阶段：场景制作（第4-7周）

- [ ] 第1-3集完整制作
- [ ] 第4-6集完整制作
- [ ] 第7-10集完整制作
- [ ] 转场和标题序列

### 第4阶段：后期制作（第8周）

- [ ] 配音录制
- [ ] 音频混音
- [ ] 最终渲染
- [ ] 质量检查

### 第5阶段：发布（第9周）

- [ ] YouTube上传
- [ ] 创建预告片
- [ ] 营销材料准备
- [ ] 发布并推广

---

## 预算时间表

| 任务         | 预计时间 | 依赖        |
| ------------ | -------- | ----------- |
| 项目初始化   | 2天      | -           |
| 设计系统建立 | 3天      | 项目初始化  |
| 核心组件开发 | 2周      | 设计系统    |
| 第1-3集制作  | 2周      | 核心组件    |
| 第4-6集制作  | 2周      | 第1-3集完成 |
| 第7-10集制作 | 2周      | 第4-6集完成 |
| 后期制作     | 1周      | 所有集完成  |
| 总计         | **9周**  | -           |

---

## 测试策略

### 单元测试

- 组件渲染测试
- 动画时序测试
- 数据格式测试

### 集成测试

- 完整集渲染测试
- 音视频同步测试
- 输出格式验证

### 用户验收测试

- 内容准确性审查
- 视觉效果评审
- 专家顾问意见收集

---

## 风险控制

### 技术风险

- **风险**：某些场景动画复杂度超预期
- **应对**：简化为信息图表风格，重点在逻辑清晰

### 内容风险

- **风险**：史实争议
- **应对**：添加免责声明，标注参考资料

### 进度风险

- **风险**：开发周期延误
- **应对**：优先制作核心集（第1、3、7集），其他可后续

---

## 成功指标

- [ ] 按时完成10集动画
- [ ] 平均每集观看完成率 > 60%
- [ ] YouTube订阅增长 > 10%/月
- [ ] 正面评价率 > 85%
- [ ] 被引用/转载 > 100次

---

**文档版本**: 1.0
**创建日期**: 2025年2月9日
**最后更新**: 2025年2月9日
**维护者**: Prometheus Planning System
