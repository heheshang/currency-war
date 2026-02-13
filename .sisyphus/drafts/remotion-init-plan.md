# Remotion项目初始化计划 - 纯视觉动画版

## 项目概览

**项目名称**: currency-war-animation
**技术栈**: Remotion 4.0 + React + TypeScript + Tailwind CSS
**动画风格**: 纯视觉叙事（无配音）
**总时长**: 60-90分钟（10集）
**MVP目标**: 第3集"滑铁卢战役"（9分钟）

---

## 🎯 纯视觉叙事策略

### 叙事方式设计

#### 1. 场景标题字幕

**用途**: 标注时间、地点、事件

**示例**:

```
┌─────────────────────────────────┐
│                                 │
│     1815年6月18日                │
│     比利时，滑铁卢               │
│                                 │
└─────────────────────────────────┘
```

**Remotion组件**:

```typescript
<SceneTitle
  date="1815年6月18日"
  location="比利时，滑铁卢"
  style="retro-historical"
/>
```

---

#### 2. 关键数据展示

**用途**: 突出重要数字和概念

**示例**:

```
┌─────────────────────────────────┐
│                                 │
│         20倍                    │
│      利润倍数                   │
│                                 │
│    300万英镑 → 6000万英镑       │
│                                 │
└─────────────────────────────────┘
```

**动画效果**:

- 数字滚动（0 → 6000万）
- 箭头动画（金币流动）
- 颜色渐变（绿色→金色）

---

#### 3. 逐字字幕（打字机效果）

**用途**: 代替旁白，讲述故事

**示例**:

```
他故意放出假消息...█
```

**动画效果**:

- 逐字显示（每字0.1秒）
- 打字机音效
- 闪烁光标
- 复古衬线字体

**Remotion组件**:

```typescript
<TypewriterSubtitle
  text="他故意放出假消息..."
  speed={100} // 每字100ms
  style="retro-typewriter"
/>
```

---

#### 4. 信息图表动画

**用途**: 可视化复杂信息

**类型**:

- **时间线**: 1694 → 1913 → 1971
- **股价曲线**: 100 → 85 → 70 → 5（暴跌）
- **地图路径**: 情报从滑铁卢传到伦敦
- **网络图**: 罗斯柴尔德5兄弟分布

---

#### 5. 视觉隐喻

**用途**: 传达抽象概念

**示例**:

- **金币流动**: 从民众流向银行家
- **债务锁链**: 锁链缠绕货币
- **情报网络**: 欧洲地图上的连线
- **权力金字塔**: 银行家在最顶层

---

## 🚀 项目初始化步骤

### 第1步：创建Remotion项目（5分钟）

#### 方法A：使用npx（推荐）

**打开终端**，输入：

```bash
npx create-video@latest currency-war-animation
```

**交互式选项**:

```
? The directory will be created. Continue? (Y/n)
→ Y

? Select the template you would like to use:
→ Hello World (简单模板)

? Select the syntax you would like to use:
→ TypeScript

? Which language do you want to use?
→ JavaScript

? Do you want to use a bundler?
→ Vite (快速开发)

? Install dependencies?
→ Yes
```

**等待安装完成**（约1-2分钟）

---

#### 方法B：手动创建

**创建项目文件夹**:

```bash
mkdir currency-war-animation
cd currency-war-animation
```

**初始化npm项目**:

```bash
bun init -y
```

**安装Remotion**:

```bash
bun install remotion@^4.0.0 @remotion/cli@^4.0.0
bun install react@^18.2.0 react-dom@^18.2.0
```

**安装开发依赖**:

```bash
bun install --save-dev vite@^5.0.0 typescript@^5.0.0
bun install --save-dev @types/react@^18.2.0 @types/react-dom@^18.2.0
```

---

### 第2步：配置Remotion（2分钟）

**创建配置文件**: `remotion.config.ts`

```typescript
import { Config } from "@remotion/cli/config";

export const config: Config = {
  // 项目配置
  entry: "src/root.tsx", // 入口文件
  // 输出配置
  outputPath: "dist", // 输出目录

  // 渲染配置
  // 可通过命令行参数覆盖

  // 环境变量
  env: {
    // 在代码中可通过process.env.API_KEY访问
  },

  // 并发渲染
  concurrency: 4, // 同时渲染4帧
};
```

---

**创建Vite配置**: `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 开发服务器端口
  },
  resolve: {
    alias: {
      "@": "/src", // 路径别名
    },
  },
});
```

---

### 第3步：创建项目结构（3分钟）

**文件夹结构**:

```
currency-war-animation/
├── public/                 # 静态资源
│   ├── fonts/             # 字体文件
│   ├── images/            # 图片素材
│   │   ├── characters/    # 人物插图
│   │   ├── backgrounds/   # 背景图
│   │   └── textures/      # 纹理材质
│   └── audio/             # 音频资源
│       ├── music/         # 背景音乐
│       └── sfx/           # 音效
├── src/
│   ├── compositions/      # 各集动画
│   │   ├── Episode1.tsx
│   │   ├── Episode2.tsx
│   │   ├── Episode3.tsx   # MVP：第3集
│   │   └── ...
│   ├── components/        # 可复用组件
│   │   ├── typography/    # 文字组件
│   │   │   ├── SceneTitle.tsx
│   │   │   ├── TypewriterSubtitle.tsx
│   │   │   └── NumberRoll.tsx
│   │   ├── charts/        # 图表组件
│   │   │   ├── Timeline.tsx
│   │   │   ├── StockChart.tsx
│   │   │   └── MapPath.tsx
│   │   ├── characters/    # 人物组件
│   │   │   └── NathanRothschild.tsx
│   │   ├── scenes/        # 场景组件
│   │   │   ├── BattleOfWaterloo.tsx
│   │   │   ├── StockExchange.tsx
│   │   │   └── JekyllIsland.tsx
│   │   └── effects/       # 特效组件
│   │       ├── GoldFlow.tsx
│   │       ├── ParticleSystem.tsx
│   │       └── GlitchEffect.tsx
│   ├── utils/             # 工具函数
│   │   └── animations.ts  # 动画工具
│   ├── styles/            # 样式文件
│   │   └── global.css
│   └── root.tsx           # 根组件
├── index.html             # HTML入口
├── package.json
├── remotion.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

**创建文件夹** (Windows/Mac/Linux通用):

```bash
# 进入项目目录
cd currency-war-animation

# 创建所有文件夹
mkdir -p public/{fonts,images/{characters,backgrounds,textures},audio/{music,sfx}}
mkdir -p src/{compositions,components/{typography,charts,characters,scenes,effects},utils,styles}

# 验证结构
tree . -L 3 -I "node_modules"
```

---

### 第4步：创建基础组件（10分钟）

#### 4.1 根组件 (`src/root.tsx`)

```typescript
import { Composition } from "remotion";
import { Episode3 } from "./compositions/Episode3";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 第3集：滑铁卢战役 - MVP */}
      <Composition
        id="Episode3"
        component={Episode3}
        durationInFrames={16200}  // 9分钟 @ 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          // 默认props
        }}
      />
    </>
  );
};
```

---

#### 4.2 场景标题组件 (`src/components/typography/SceneTitle.tsx`)

```typescript
import React from "react";
import { AbsoluteFill } from "remotion";

interface SceneTitleProps {
  date: string;
  location: string;
  style?: "retro-historical" | "modern-clean";
}

export const SceneTitle: React.FC<SceneTitleProps> = ({
  date,
  location,
  style = "retro-historical"
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: style === "retro-historical"
            ? '"Noto Serif SC", "Songti SC", serif'
            : '"Inter", sans-serif',
          fontSize: 72,
          fontWeight: 700,
          color: "#ffd700",
          textAlign: "center",
          textShadow: "0 4px 20px rgba(255, 215, 0, 0.3)",
          letterSpacing: 8,
          lineHeight: 1.6,
        }}
      >
        <div>{date}</div>
        <div
          style={{
            fontSize: 48,
            marginTop: 20,
            color: "#e8e8e8",
            letterSpacing: 4,
          }}
        >
          {location}
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

---

#### 4.3 打字机字幕组件 (`src/components/typography/TypewriterSubtitle.tsx`)

```typescript
import React from "react";
import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from "remotion";

interface TypewriterSubtitleProps {
  text: string;
  startTime: number;  // 开始时间（秒）
  speed?: number;     // 每字毫秒数
  style?: "retro-typewriter" | "modern-clean";
}

export const TypewriterSubtitle: React.FC<TypewriterSubtitleProps> = ({
  text,
  startTime,
  speed = 100,
  style = "retro-typewriter"
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 计算当前时间（秒）
  const currentTime = frame / fps;

  // 计算应该显示多少个字符
  const elapsedTime = currentTime - startTime;
  const charsToShow = Math.max(0, Math.floor(elapsedTime * 1000 / speed));

  // 截取文本
  const displayText = text.slice(0, Math.min(charsToShow, text.length));

  // 光标闪烁
  const cursorOpacity = interpolate(
    frame % 30,  // 每30帧一个周期
    [0, 15, 30],
    [1, 0, 1]
  );

  // 如果还没到开始时间，不显示
  if (currentTime < startTime) {
    return null;
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontFamily: style === "retro-typewriter"
            ? '"Courier New", monospace'
            : '"Inter", sans-serif',
          fontSize: 48,
          fontWeight: 600,
          color: "#e8e8e8",
          textAlign: "center",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
          letterSpacing: 2,
          maxWidth: 1400,
          padding: 40,
        }}
      >
        {displayText}
        <span
          style={{
            opacity: cursorOpacity,
            color: "#ffd700",
          }}
        >
          █
        </span>
      </div>
    </AbsoluteFill>
  );
};
```

---

#### 4.4 数字滚动组件 (`src/components/typography/NumberRoll.tsx`)

```typescript
import React from "react";
import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from "remotion";

interface NumberRollProps {
  start: number;
  end: number;
  startTime: number;
  duration: number;  // 动画时长（秒）
  unit?: string;
  format?: number;   // 小数位数
}

export const NumberRoll: React.FC<NumberRollProps> = ({
  start,
  end,
  startTime,
  duration,
  unit = "",
  format = 0
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 当前时间（秒）
  const currentTime = frame / fps;

  // 计算动画进度（0-1）
  const progress = Math.min(
    Math.max((currentTime - startTime) / duration, 0),
    1
  );

  // 缓动函数（easeOutExpo）
  const easedProgress = progress === 1
    ? 1
    : 1 - Math.pow(2, -10 * progress);

  // 当前数字
  const current = start + (end - start) * easedProgress;

  return (
    <div
      style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 120,
        fontWeight: 700,
        color: "#ffd700",
        textAlign: "center",
        textShadow: "0 4px 20px rgba(255, 215, 0, 0.5)",
      }}
    >
      {current.toFixed(format)}
      {unit && (
        <span
          style={{
            fontSize: 48,
            marginLeft: 20,
            color: "#e8e8e8",
          }}
        >
          {unit}
        </span>
      )}
    </div>
  );
};
```

---

### 第5步：创建第3集动画（15分钟）

**文件**: `src/compositions/Episode3.tsx`

```typescript
import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneTitle } from "../components/typography/SceneTitle";
import { TypewriterSubtitle } from "../components/typography/TypewriterSubtitle";
import { NumberRoll } from "../components/typography/NumberRoll";

export const Episode3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
      }}
    >
      {/* 场景1：开场标题（0-3秒） */}
      <Sequence
        from={0}
        durationInFrames={3 * fps}
        name="Scene-Title"
      >
        <SceneTitle
          date="1815年6月18日"
          location="比利时，滑铁卢"
          style="retro-historical"
        />
      </Sequence>

      {/* 场景2：内森·罗斯柴尔德（3-10秒） */}
      <Sequence
        from={3 * fps}
        durationInFrames={7 * fps}
        name="Nathan-Intro"
      >
        <AbsoluteFill>
          {/* 人物插图占位 */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 400,
              backgroundColor: "#1e3a5a",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 24,
              color: "#e8e8e8",
            }}
          >
            内森·罗斯柴尔德
            <br />
            （插图占位）
          </div>

          {/* 打字机字幕 */}
          <TypewriterSubtitle
            text="内森·罗斯柴尔德，拥有欧洲最强大的情报网络。"
            startTime={3}
            speed={100}
          />
        </AbsoluteFill>
      </Sequence>

      {/* 场景3：假消息发布（10-30秒） */}
      <Sequence
        from={10 * fps}
        durationInFrames={20 * fps}
        name="Fake-News"
      >
        <AbsoluteFill>
          {/* 交易所场景占位 */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1200,
              height: 600,
              backgroundColor: "#16213e",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 36,
              color: "#e8e8e8",
            }}
          >
            伦敦证券交易所
            <br />
            （场景占位）
          </div>

          {/* 打字机字幕 */}
          <TypewriterSubtitle
            text="'拿破仑赢了！'——他故意放出假消息。"
            startTime={10}
            speed={100}
          />
        </AbsoluteFill>
      </Sequence>

      {/* 场景4：股价暴跌（30-50秒） */}
      <Sequence
        from={30 * fps}
        durationInFrames={20 * fps}
        name="Stock-Crash"
      >
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 36,
              color: "#e8e8e8",
              marginBottom: 40,
            }}
          >
            英国国债价格暴跌
          </div>

          <NumberRoll
            start={100}
            end={5}
            startTime={30}
            duration={20}
            unit="英镑"
          />

          {/* 说明文字 */}
          <div
            style={{
              position: "absolute",
              bottom: 200,
              fontFamily: '"Noto Serif SC", serif',
              fontSize: 32,
              color: "#ef4444",
              textAlign: "center",
            }}
          >
            恐慌瞬间席卷整个交易所
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 场景5：真相大白（50-70秒） */}
      <Sequence
        from={50 * fps}
        durationInFrames={20 * fps}
        name="Truth-Revealed"
      >
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 36,
              color: "#e8e8e8",
              marginBottom: 40,
            }}
          >
            第二天，真相揭晓
          </div>

          <NumberRoll
            start={5}
            end={100}
            startTime={50}
            duration={20}
            unit="英镑"
          />

          <div
            style={{
              position: "absolute",
              bottom: 200,
              fontFamily: '"Noto Serif SC", serif',
              fontSize: 32,
              color: "#22c55e",
              textAlign: "center",
            }}
          >
            威灵顿公爵大获全胜！
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 场景6：暴利展示（70-90秒） */}
      <Sequence
        from={70 * fps}
        durationInFrames={20 * fps}
        name="Huge-Profit"
      >
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 48,
              color: "#e8e8e8",
              marginBottom: 60,
            }}
          >
            在这短短的一天里
          </div>

          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 96,
              fontWeight: 700,
              color: "#ffd700",
              marginBottom: 40,
            }}
          >
            20倍
          </div>

          <div style={{ display: "flex", gap: 80, alignItems: "center" }}>
            <div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 48,
                  color: "#e8e8e8",
                }}
              >
                300万英镑
              </div>
            </div>

            <div
              style={{
                fontSize: 72,
                color: "#ffd700",
              }}
            >
              →
            </div>

            <div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 48,
                  color: "#ffd700",
                }}
              >
                6000万英镑
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 后续场景... */}
      {/* 您可以继续添加更多场景 */}
    </AbsoluteFill>
  );
};
```

---

### 第6步：添加背景音乐（可选，5分钟）

**创建音频文件夹**:

```bash
mkdir -p public/audio/music
mkdir -p public/audio/sfx
```

**放置音乐文件**:

- 下载或生成背景音乐（MP3格式）
- 放入 `public/audio/music/` 文件夹
- 命名例如：`suspense_theme.mp3`

**在Episode3中添加音乐**:

```typescript
import { Audio } from "remotion";

// 在组件中添加
<Audio
  src="audio/music/suspense_theme.mp3"
  volume={0.5}
/>
```

---

### 第7步：启动开发服务器（2分钟）

**启动Remotion预览**:

```bash
bun run dev
```

**或使用**:

```bash
npx remotion preview
```

**打开浏览器**:

- 访问：http://localhost:3000
- 您应该看到Remotion Studio界面
- 左侧显示"Episode3"合成
- 点击可以预览动画

---

### 第8步：测试渲染（3分钟）

**在Remotion Studio中**:

1. 选择"Episode3"合成
2. 点击"Render"按钮
3. 选择输出格式（MP4）
4. 点击"Start Render"

**或使用命令行**:

```bash
npx remotion render Episode3 output.mp4
```

**等待渲染完成**（第3集9分钟视频，根据电脑性能，可能需要5-30分钟）

---

## 📊 完整工作流程

### MVP阶段（1-2周）

**第1周**:

- [ ] 创建Remotion项目
- [ ] 实现基础组件（SceneTitle, TypewriterSubtitle, NumberRoll）
- [ ] 完成第3集前30秒（开场→假消息→恐慌）
- [ ] 测试渲染

**第2周**:

- [ ] 完成第3集剩余部分（真相→暴利→影响）
- [ ] 优化动画效果
- [ ] 添加背景音乐
- [ ] 完成第3集完整版

### 后续阶段（4-6周）

- [ ] 制作其余9集
- [ ] 统一视觉风格
- [ ] 添加片头片尾
- [ ] 质量检查和优化

---

## 🎨 设计资源

### 免费图片资源

- **Unsplash**: https://unsplash.com（历史题材图片）
- **Pexels**: https://pexels.com（视频和图片）
- **Pixabay**: https://pixabay.com（插图）

### 免费字体

- **思源宋体**: https://fonts.google.com/noto/specimen/Noto+Serif+SC
- **JetBrains Mono**: https://fonts.google.com/specimen/JetBrains+Mono
- **Inter**: https://fonts.google.com/specimen/Inter

### 免费音乐

- **Epidemic Sound**: $15/月（订阅制，高质量）
- **YouTube Audio Library**: 免费
- **Free Music Archive**: 免费

---

## ✅ 验证清单

完成初始化后，检查：

- [ ] Remotion项目成功创建
- [ ] 开发服务器正常启动（localhost:3000）
- [ ] 可以在浏览器中预览动画
- [ ] 基础组件正常工作
- [ ] 能够渲染输出MP4文件
- [ ] 第3集前90秒基本完成

---

## 🚀 下一步

### 立即执行

1. 打开终端
2. 运行 `npx create-video@latest currency-war-animation`
3. 按照上述步骤创建文件
4. 启动开发服务器
5. 开始制作动画！

### 需要帮助

- 如果遇到问题，告诉我具体错误
- 我会提供解决方案
- 或者我可以帮您创建特定组件

---

**文档版本**: 1.0
**创建日期**: 2025年2月9日
**预计完成时间**: 30-45分钟（初始化）

**祝您制作顺利！** 🎉
