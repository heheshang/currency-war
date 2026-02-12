# 《货币战争》纪录片背景音乐系统实施计划

## TL;DR

为《货币战争》纪录片项目创建背景音乐（BGM）系统，实现每个剧集有匹配的背景音乐。当前项目已有 12 个音频文件（6 个 BGM + 6 个 SFX），但场景组件未使用。

**快速摘要**: 安装 `@remotion/media` 包，创建音频配置工具，更新所有场景组件使用背景音乐。

**交付成果**: 每个剧集有匹配的背景音乐，支持音量控制和循环播放

**预估工作量**: 中等 (~2-3 小时)

**并行执行**: 是 - 4 个任务组

**关键路径**: 安装依赖 → 创建配置工具 → 更新场景组件

---

## Context

### 原始需求

根据情节场景为每个 Episode 找到合适的背景音乐

### 项目现状分析

**当前音频文件**:

- `public/assets/audio/bgm/`: dramatic.mp3, tension.mp3, conspiracy.mp3, bell.mp3, coin-clink.mp3, impact.mp3 (6 个)
- `public/assets/audio/sfx/`: bell.mp3, coin-clink.mp3, impact.mp3 (3 个)
- **总计**: 9 个音频文件可用

**当前使用情况**:

- ❌ 场景组件中**未使用**任何 `<Audio>` 组件
- ❌ 无 `bgm` 属性传递
- ❌ 缺少统一的音频配置

**问题分析**:

1. 现有 9 个高质量音频文件未使用
2. 音频路径硬编码在各场景中
3. 缺少音量控制和播放逻辑
4. 无法根据场景情绪动态调整音乐

### 研究发现

**项目结构**:

- 使用 Remotion 4.0.419
- 剧集注册在 `src/Root.tsx`
- 场景组件在 `src/components/scenes/`
- 使用 `<Composition>` 组件注册视频

**音频 API**:

- 需要安装 `@remotion/media` 包
- 使用 `<Audio>` 组件从 `@remotion/media` 导入
- 使用 `staticFile()` 函数引用 `public/` 目录下的文件
- 支持音量控制、循环播放、淡入淡出

---

## Work Objectives

### 核心目标

为每个 Episode 创建匹配的背景音乐系统，提升纪录片观感体验

### 具体交付成果

1. ✅ 安装 `@remotion/media` 依赖
2. ✅ 创建 `src/utils/audioConfig.ts` 音频配置工具
3. ✅ 更新所有场景组件使用背景音乐
4. ✅ 创建 `src/components/Audio.tsx` 音频组件封装

### 完成标准

- [ ] 所有剧集有背景音乐配置
- [ ] 音量可在 0.3-0.5 范围内调整
- [ ] 背景音乐支持循环播放
- [ ] 运行 `npm run lint` 无错误

### 必须包含 (Guardrails)

- [ ] 使用 `staticFile()` 引用音频文件
- [ ] 音量不超过 0.5（避免过度干扰）
- [ ] 所有音频支持循环播放
- [ ] 音频配置集中管理

### 不包含 (Scope Exclusions)

- [ ] 不创建新的音频文件（使用现有文件）
- [ ] 不修改字幕系统
- [ ] 不更改视频渲染逻辑

---

## Verification Strategy

### 测试策略

使用 Remotion Studio 预览每个剧集，验证音频播放

### Agent-Executed QA Scenarios

**Scenario: Episode 01 背景音乐播放验证**

- Tool: Bash + curl
- Preconditions: Dev server running on localhost:3000
- Steps:
  1. 访问 http://localhost:3000/Episode01
  2. 检查网络请求是否有 BGM 文件请求
  3. 验证音频是否可以正常播放
- Expected Result: Episode 01 有 bell.mp3 背景音乐
- Evidence: 网络请求日志

**Scenario: Episode 02 背景音乐播放验证**

- Tool: Bash + curl
- Preconditions: Dev server running
- Steps:
  1. 访问 http://localhost:3000/Episode02
  2. 检查 conspiracy.mp3 是否加载
  3. 验证音量在 0.35 左右
- Expected Result: Episode 02 有 conspiracy.mp3 背景音乐
- Evidence: 网络请求日志

---

## TODOs

### Phase 1: 安装依赖

- [ ] 1.1 安装 `@remotion/media` 包
  - **命令**: `npx remotion add @remotion/media`
  - **验证**: 检查 `package.json` 中有 `@remotion/media`

### Phase 2: 创建音频配置工具

- [ ] 2.1 创建 `src/utils/audioConfig.ts`
  - **类型定义**: `BgmTrack`, `SfxTrack`, `EpisodeAudioConfig`
  - **路径常量**: `BGM`, `SFX` 对象映射
  - **剧集配置**: `EPISODE_AUDIO` 映射每个剧集到背景音乐
  - **辅助函数**: `getEpisodeBgm()`, `getEpisodeSfx()`, `audioPath()`

- [ ] 2.2 创建 `src/components/Audio.tsx`
  - **功能**: 封装 Remotion `<Audio>` 组件
  - **Props**: `src`, `volume`, `loop`, `fadeIn`, `fadeOut`
  - **用法**: 支持动态音量调整

### Phase 3: 更新 Root.tsx

- [ ] 3.1 注册 Audio 组件
  - **文件**: `src/Root.tsx`
  - **添加**: 导入 `Audio` 组件

### Phase 4: 更新场景组件

- [ ] 4.1 更新 `src/compositions/Episode01.tsx`
  - **添加**: 导入 `EPISODE_AUDIO`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: bell.mp3, 音量 0.4

- [ ] 4.2 更新 `src/compositions/Episode02.tsx`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: conspiracy.mp3, 音量 0.35

- [ ] 4.3 更新 `src/compositions/Episode03.tsx`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: dramatic.mp3, 音量 0.4

- [ ] 4.4 更新 `src/compositions/Episode04.tsx`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: tension.mp3, 音量 0.35

- [ ] 4.5 更新 `src/compositions/Episode05.tsx`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: tension.mp3, 音量 0.4

- [ ] 4.6 更新 `src/compositions/Episode07.tsx`
  - **添加**: 背景音乐 `<Audio>` 组件
  - **音乐**: conspiracy.mp3, 音量 0.35

### Phase 5: 组织音频文件

- [ ] 5.1 检查现有音频文件
  - **位置**: `public/assets/audio/`
  - **验证**: 所有 BGM 和 SFX 文件存在

### Phase 6: 测试集成

- [ ] 6.1 运行 lint 检查
  - **命令**: `npm run lint`
  - **验证**: 无错误

- [ ] 6.2 启动开发服务器
  - **命令**: `npm run dev`
  - **验证**: Remotion Studio 正常启动

---

## 代码示例

### audioConfig.ts

```typescript
import { staticFile } from "remotion";

export const BGM = {
  DRAMATIC: "assets/audio/bgm/dramatic.mp3",
  TENSION: "assets/audio/bgm/tension.mp3",
  CONSPIRACY: "assets/audio/bgm/conspiracy.mp3",
  BELL: "assets/audio/bgm/bell.mp3",
} as const;

export const EPISODE_AUDIO: Record<
  string,
  { bgm: { src: string; volume: number; loop: boolean } }
> = {
  Episode01: {
    bgm: { src: BGM.BELL, volume: 0.4, loop: true },
  },
  Episode02: {
    bgm: { src: BGM.CONSPIRACY, volume: 0.35, loop: true },
  },
  // ... 其他剧集
};

export function getEpisodeBgm(episodeId: string) {
  return EPISODE_AUDIO[episodeId]?.bgm;
}
```

### Episode Composition Usage

```tsx
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";
import { getEpisodeBgm } from "../utils/audioConfig";

export const Episode01: React.FC = () => {
  const bgmConfig = getEpisodeBgm("Episode01");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgmConfig && (
        <Audio
          src={staticFile(bgmConfig.src)}
          volume={bgmConfig.volume}
          loop={bgmConfig.loop}
        />
      )}
      {/* Sequences and scenes */}
    </AbsoluteFill>
  );
};
```

---

## Execution Strategy

### 并行执行波次

**Wave 1 (立即开始)**:

- Phase 1: 安装依赖
- Phase 2: 创建配置工具

**Wave 2 (Phase 1 & 2 完成)**:

- Phase 3: 更新 Root.tsx
- Phase 4: 更新场景组件（并行）

**Wave 3 (Wave 2 完成)**:

- Phase 5: 组织音频文件
- Phase 6: 测试集成

### 依赖矩阵

| 任务                | 依赖     | 阻塞 |
| ------------------- | -------- | ---- |
| 1.1 安装依赖        | 无       | 无   |
| 2.1 创建配置工具    | 1.1      | 无   |
| 2.2 创建 Audio 组件 | 2.1      | 无   |
| 3.1 更新 Root.tsx   | 2.2      | 无   |
| 4.1-4.6 更新场景    | 2.2, 3.1 | 3.1  |
| 5.1 检查音频文件    | 无       | 无   |
| 6.1-6.2 测试        | 4.1-4.6  | 无   |

### 加速估计

- 顺序执行: ~3 小时
- 并行执行: ~1.5 小时

---

## Commit Strategy

| 完成后任务 | 消息                                                | 文件                                               |
| ---------- | --------------------------------------------------- | -------------------------------------------------- |
| Phase 1    | `feat(audio): install @remotion/media dependency`   | package.json                                       |
| Phase 2    | `feat(audio): add audio configuration utility`      | src/utils/audioConfig.ts, src/components/Audio.tsx |
| Phase 3    | `feat(audio): update Root.tsx with Audio component` | src/Root.tsx                                       |
| Phase 4    | `feat(audio): add background music to all episodes` | src/compositions/Episode\*.tsx                     |
| Phase 5    | `chore(audio): verify audio files organization`     | public/assets/audio/                               |
| Phase 6    | `test(audio): verify audio integration`             | -                                                  |

---

## Success Criteria

### 验证命令

```bash
npm run lint  # 无错误
npm run dev   # 启动成功
```

### 最终检查清单

- [ ] 所有剧集有背景音乐配置
- [ ] Episode 01: bell.mp3 @ 40%
- [ ] Episode 02: conspiracy.mp3 @ 35%
- [ ] Episode 03: dramatic.mp3 @ 40%
- [ ] Episode 04: tension.mp3 @ 35%
- [ ] Episode 05: tension.mp3 @ 40%
- [ ] Episode 07: conspiracy.mp3 @ 35%
- [ ] 音量不超过 0.5
- [ ] 所有音乐支持循环播放
