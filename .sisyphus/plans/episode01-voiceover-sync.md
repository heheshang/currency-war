# Episode01Documentary 字幕配音重制计划

## TL;DR

> **Quick Summary**: 修复 Episode01Documentary 音画不同步问题，根据 book1-introduction.md 重新生成中文解说词、字幕和配音，保持现有动画效果。
>
> **Deliverables**:
>
> - 8个场景的中文解说词脚本
> - 更新后的 src/subtitles/episode01.ts
> - 新生成的配音文件 (public/assets/audio/voiceover/episode01/)
> - 同步校准后的 Episode01Documentary.tsx
>
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: 内容提取 → 配音生成 → 同步校准

---

## Context

### Original Request

Episode01Documentary 声音和字幕不同步，需要根据 book1-introduction.md 重新生成助记词、字幕和配音。

### Interview Summary

**Key Discussions**:

- 字幕语言: 中文为主
- 配音语言: 中文配音
- TTS服务: Edge TTS (zh-CN-YunyangNeural - 云扬，成熟稳重)
- 内容范围: 完整序言 (~6分钟)
- 场景结构: 重新规划为8个场景
- 配音语速: 正常语速
- 动画效果: 保留现有效果
- 验证方式: 自动化验证

**Research Findings**:

- 现有78个配音文件与字幕不匹配
- Edge TTS 脚本已存在 (scripts/use_open_source_tts.py)
- buildVoiceoverEntries() 函数绑定配音和字幕

### Metis Review

**Identified Gaps** (addressed):

- BGM处理: 保留现有BGM，必要时循环调整
- 字幕字数上限: 每行15-20字（行业惯例）
- 配音切分: 按场景切分，每场景一个配音文件
- 验证标准: 自动化检查帧有效性、时长范围

---

## Work Objectives

### Core Objective

生成与 book1-introduction.md 内容一致的中文配音和字幕，确保音画同步。

### Concrete Deliverables

- `.sisyphus/drafts/episode01-scripts.md` - 8个场景的解说词
- `src/subtitles/episode01.ts` - 新的字幕数据
- `public/assets/audio/voiceover/episode01/voice_0000.mp3 ~ voice_0007.mp3` - 配音文件
- `public/assets/audio/voiceover/episode01/episode01_merged.mp3` - 合并配音
- `src/compositions/Episode01Documentary.tsx` - 更新后的配置

### Definition of Done

- [ ] 8个场景配音文件生成成功
- [ ] 字幕 startFrame < endFrame (100%)
- [ ] 配音时长总计在 330-390秒范围
- [ ] `bun run dev` 预览正常播放
- [ ] 自动化验证脚本全部通过

### Must Have

- 中文配音和字幕
- 与 book1-introduction.md 内容一致
- 音画同步误差 < 1秒

### Must NOT Have (Guardrails)

- ❌ 不要修改现有动画组件效果
- ❌ 不要改变场景的视觉呈现
- ❌ 不要扩展到序言之外的内容
- ❌ 不要添加新的 npm 依赖
- ❌ 不要重写不相关的代码
- ❌ 不要创建新工具脚本（复用现有）

---

## Verification Strategy

### Test Decision

- **Infrastructure exists**: YES (bun test)
- **Automated tests**: Tests-after
- **Framework**: bun test

### QA Policy

自动化验证脚本检查：

1. 配音文件数量匹配场景数
2. 字幕条目有效性 (startFrame < endFrame)
3. 总时长在预期范围 (330-390秒)
4. 每个配音文件可播放

### Verification Commands

```bash
# 检查配音文件数量
ls -1 public/assets/audio/voiceover/episode01/voice_*.mp3 | wc -l
# Expected: 8

# 检查字幕有效性
bun -e "
import { episode01Subtitles } from './src/subtitles/episode01';
const invalid = episode01Subtitles.filter(s => s.startFrame >= s.endFrame);
console.log(invalid.length === 0 ? 'PASS' : 'FAIL');
"

# 检查总时长
bun -e "
import { episode01Subtitles } from './src/subtitles/episode01';
const totalFrames = Math.max(...episode01Subtitles.map(s => s.endFrame));
const seconds = totalFrames / 30;
console.log(seconds >= 330 && seconds <= 390 ? 'PASS' : 'FAIL: ' + seconds + 's');
"

# Remotion 预览
bun run dev
```

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - foundation):
├── Task 1: 提取内容生成解说词 [quick]
├── Task 2: 分析现有TTS脚本 [quick]
└── Task 3: 分析Episode01Documentary结构 [quick]

Wave 2 (After Wave 1 - core generation):
├── Task 4: 修改TTS脚本支持批量生成 [quick]
└── Task 5: 生成配音文件 [quick]

Wave 3 (After Wave 2 - integration):
├── Task 6: 生成字幕数据 [quick]
├── Task 7: 更新Episode01Documentary.tsx [quick]
└── Task 8: 自动化验证 [quick]

Wave FINAL (After ALL tasks):
├── Task F1: 同步效果验证 [quick]
└── Task F2: 最终质量检查 [quick]
```

### Agent Dispatch Summary

- **Wave 1**: 3 tasks → `quick` x3
- **Wave 2**: 2 tasks → `quick` x2
- **Wave 3**: 3 tasks → `quick` x3
- **Final**: 2 tasks → `quick` x2

---

## TODOs

- [ ] 1. 提取内容并生成8场景解说词

  **What to do**:
  - 从 book1-introduction.md 提取关键段落
  - 按8个场景分配内容（已在draft中确定）
  - 生成适合口语表达的中文解说词
  - 输出到 .sisyphus/drafts/episode01-scripts.md

  **Scene Division**:
  | 场景 | 标题 | 时长 | 内容来源 |
  |------|------|------|----------|
  | Scene 1 | 货币大厦的危机 | 45秒 | 升级版序言第1段 |
  | Scene 2 | 黄金的终极地位 | 50秒 | 升级版序言第2-3段 |
  | Scene 3 | 债务货币的陷阱 | 55秒 | 升级版序言第4-5段 |
  | Scene 4 | 预言成真 | 50秒 | 升级版序言第6-7段 |
  | Scene 5 | 中国经济航母起航 | 40秒 | 序言第9-10段 |
  | Scene 6 | 看不见硝烟的战场 | 50秒 | 序言第11段 |
  | Scene 7 | 历史的警示 | 45秒 | 序言第12段 |
  | Scene 8 | 战争已经开始 | 35秒 | 序言第13段 |

  **Must NOT do**:
  - 不要改变原文核心观点
  - 不要添加书中没有的内容

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Tasks 4, 5
  - **Blocked By**: None

  **References**:
  - `markdown-books/book1-introduction.md` - 内容来源
  - `.sisyphus/drafts/episode01-voiceover-sync.md` - 场景划分方案

  **Acceptance Criteria**:
  - [ ] 8个场景解说词完成
  - [ ] 每个场景解说词时长标注
  - [ ] 内容与原文一致

  **QA Scenarios**:

  ```
  Scenario: 解说词内容验证
    Tool: Read
    Steps:
      1. 读取 .sisyphus/drafts/episode01-scripts.md
      2. 检查8个场景是否都有内容
      3. 检查每个场景内容长度是否合理
    Expected Result: 8个场景都有解说词，每段200-400字
    Evidence: .sisyphus/evidence/task-01-scripts-check.txt
  ```

  **Commit**: NO

---

- [ ] 2. 分析现有TTS脚本

  **What to do**:
  - 阅读 scripts/use_open_source_tts.py
  - 确认 Edge TTS 调用方式
  - 确定如何修改支持批量生成
  - 记录需要的修改点

  **Must NOT do**:
  - 不要修改脚本（此任务仅分析）

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3)
  - **Blocks**: Task 4
  - **Blocked By**: None

  **References**:
  - `scripts/use_open_source_tts.py` - Edge TTS 脚本
  - `scripts/FREE_TTS_GUIDE.md` - 使用指南

  **Acceptance Criteria**:
  - [ ] 确认 Edge TTS 命令行调用方式
  - [ ] 确认语音参数 (zh-CN-YunyangNeural)
  - [ ] 列出需要的脚本修改点

  **QA Scenarios**:

  ```
  Scenario: TTS脚本分析验证
    Tool: Bash
    Steps:
      1. 检查 edge-tts 是否已安装
      2. 测试 edge-tts 命令是否可用
    Expected Result: edge-tts 可用或提示安装方式
    Evidence: .sisyphus/evidence/task-02-tts-check.txt
  ```

  **Commit**: NO

---

- [ ] 3. 分析Episode01Documentary组件结构

  **What to do**:
  - 阅读 Episode01Documentary.tsx
  - 理解 buildVoiceoverEntries() 函数
  - 确认场景配置方式 (SCENE_FRAMES, SCENE_OFFSETS)
  - 记录需要更新的配置点

  **Must NOT do**:
  - 不要修改组件（此任务仅分析）

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`remotion-best-practices`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2)
  - **Blocks**: Tasks 6, 7
  - **Blocked By**: None

  **References**:
  - `src/compositions/Episode01Documentary.tsx` - 目标组件
  - `src/components/Voiceover.tsx` - 配音组件

  **Acceptance Criteria**:
  - [ ] 理解 SCENE_FRAMES 和 SCENE_OFFSETS 计算方式
  - [ ] 理解字幕与配音绑定机制
  - [ ] 列出需要更新的配置项

  **QA Scenarios**:

  ```
  Scenario: 组件结构分析验证
    Tool: Read
    Steps:
      1. 读取 Episode01Documentary.tsx
      2. 确认 buildVoiceoverEntries 函数定义
      3. 确认 Sequence 配置数量
    Expected Result: 确认有8个场景配置
    Evidence: .sisyphus/evidence/task-03-component-check.txt
  ```

  **Commit**: NO

---

- [ ] 4. 修改TTS脚本支持批量生成

  **What to do**:
  - 创建新的配音生成脚本或修改现有脚本
  - 支持从文本文件读取解说词
  - 支持按场景批量生成配音
  - 自动获取生成的配音时长

  **Must NOT do**:
  - 不要删除现有脚本
  - 不要修改其他不相关的功能

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 5)
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 5
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `scripts/use_open_source_tts.py` - 现有脚本
  - `.sisyphus/drafts/episode01-scripts.md` - 解说词来源

  **Acceptance Criteria**:
  - [ ] 脚本可读取外部文本文件
  - [ ] 支持指定语音参数 (zh-CN-YunyangNeural)
  - [ ] 测试生成成功

  **QA Scenarios**:

  ```
  Scenario: TTS脚本测试
    Tool: Bash
    Steps:
      1. pip3 install edge-tts (如果未安装)
      2. 测试生成一个短音频
      3. 检查生成的音频文件大小 > 0
    Expected Result: 生成测试音频成功
    Evidence: .sisyphus/evidence/task-04-tts-test.txt
  ```

  **Commit**: NO

---

- [ ] 5. 生成8个场景配音文件

  **What to do**:
  - 使用修改后的脚本生成配音
  - 为每个场景生成一个配音文件
  - 获取每个配音的实际时长
  - 合并为 episode01_merged.mp3

  **Must NOT do**:
  - 不要覆盖现有配音文件（先备份）
  - 不要使用非云扬语音

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 4)
  - **Parallel Group**: Wave 2
  - **Blocks**: Tasks 6, 7
  - **Blocked By**: Tasks 4

  **References**:
  - `.sisyphus/drafts/episode01-scripts.md` - 解说词
  - `public/assets/audio/voiceover/episode01/` - 输出目录

  **Acceptance Criteria**:
  - [ ] 8个配音文件生成成功
  - [ ] 每个配音文件可播放
  - [ ] 记录每个配音的实际时长

  **QA Scenarios**:

  ```
  Scenario: 配音文件验证
    Tool: Bash
    Steps:
      1. ls public/assets/audio/voiceover/episode01/voice_*.mp3
      2. 检查文件数量为8
      3. 检查每个文件大小 > 10KB
    Expected Result: 8个有效的mp3文件
    Evidence: .sisyphus/evidence/task-05-audio-check.txt
  ```

  **Commit**: NO

---

- [ ] 6. 生成字幕数据

  **What to do**:
  - 根据配音时长计算帧数
  - 生成 SubtitleEntry 数组
  - 更新 src/subtitles/episode01.ts
  - 保持字幕格式一致性

  **Must NOT do**:
  - 不要改变 SubtitleEntry 类型定义
  - 不要删除其他导出

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 7, 8)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 3, 5

  **References**:
  - `src/subtitles/episode01.ts` - 目标文件
  - `src/subtitles/index.ts` - 类型定义
  - Task 5输出的配音时长数据

  **Acceptance Criteria**:
  - [ ] 8个场景的字幕数据
  - [ ] startFrame < endFrame (100%)
  - [ ] 总时长在330-390秒范围

  **QA Scenarios**:

  ```
  Scenario: 字幕数据验证
    Tool: Bash
    Steps:
      1. bun -e "import { episode01Subtitles } from './src/subtitles/episode01'; console.log(episode01Subtitles.length)"
      2. 检查 startFrame < endFrame
      3. 计算总时长
    Expected Result: 字幕数量匹配配音，所有条目有效
    Evidence: .sisyphus/evidence/task-06-subtitle-check.txt
  ```

  **Commit**: NO

---

- [ ] 7. 更新Episode01Documentary.tsx

  **What to do**:
  - 更新 SCENE_FRAMES 数组（基于配音实际时长）
  - 更新 SCENE_OFFSETS 计算
  - 更新 buildVoiceoverEntries() 函数
  - 更新场景字幕引用

  **Must NOT do**:
  - 不要修改动画效果
  - 不要改变组件结构
  - 不要删除现有场景组件

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`remotion-best-practices`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 6, 8)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 3, 5, 6

  **References**:
  - `src/compositions/Episode01Documentary.tsx` - 目标文件
  - Task 3分析结果
  - Task 6字幕数据

  **Acceptance Criteria**:
  - [ ] SCENE_FRAMES 基于配音时长更新
  - [ ] buildVoiceoverEntries 正确绑定配音
  - [ ] `bun run dev` 启动成功

  **QA Scenarios**:

  ```
  Scenario: 组件更新验证
    Tool: Bash
    Steps:
      1. bun run dev (后台启动)
      2. 等待服务启动
      3. 检查无报错
    Expected Result: Remotion Studio 正常启动
    Evidence: .sisyphus/evidence/task-07-component-update.txt
  ```

  **Commit**: NO

---

- [ ] 8. 自动化验证

  **What to do**:
  - 运行所有验证命令
  - 检查配音文件数量
  - 检查字幕帧有效性
  - 检查总时长范围

  **Must NOT do**:
  - 不要跳过任何验证项

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 6, 7)
  - **Parallel Group**: Wave 3
  - **Blocks**: None
  - **Blocked By**: Tasks 5, 6, 7

  **References**:
  - 本计划的 Verification Strategy 部分

  **Acceptance Criteria**:
  - [ ] 配音文件数量检查通过
  - [ ] 字幕有效性检查通过
  - [ ] 总时长检查通过

  **QA Scenarios**:

  ```
  Scenario: 自动化验证
    Tool: Bash
    Steps:
      1. 执行所有验证命令
      2. 记录结果
      3. 全部PASS则成功
    Expected Result: 所有验证项PASS
    Evidence: .sisyphus/evidence/task-08-auto-verify.txt
  ```

  **Commit**: NO

---

## Final Verification Wave

- [ ] F1. 同步效果验证

  **What to do**:
  - 运行 Remotion 预览
  - 逐场景检查字幕配音同步
  - 记录问题场景

  **QA Scenarios**:

  ```
  Scenario: 同步效果检查
    Tool: Bash (Remotion render preview frame)
    Steps:
      1. 渲染关键帧截图
      2. 检查字幕与配音时间点
      3. 误差 < 1秒为合格
    Expected Result: 所有场景同步误差 < 1秒
    Evidence: .sisyphus/evidence/final-01-sync-check/
  ```

- [ ] F2. 最终质量检查

  **What to do**:
  - 运行 TypeScript 类型检查
  - 运行 lint 检查
  - 确认无编译错误

  **QA Scenarios**:

  ```
  Scenario: 质量检查
    Tool: Bash
    Steps:
      1. bun run lint
      2. 检查无error级别问题
    Expected Result: lint PASS
    Evidence: .sisyphus/evidence/final-02-quality-check.txt
  ```

---

## Commit Strategy

- **Commit 1**: `feat(episode01): update subtitles and voiceover data`
  - Files: src/subtitles/episode01.ts, src/compositions/Episode01Documentary.tsx
  - Pre-commit: `bun run lint`

---

## Success Criteria

### Verification Commands

```bash
# 检查配音文件
ls -1 public/assets/audio/voiceover/episode01/voice_*.mp3 | wc -l
# Expected: 8

# 检查字幕有效性
bun -e "
import { episode01Subtitles } from './src/subtitles/episode01';
const invalid = episode01Subtitles.filter(s => s.startFrame >= s.endFrame);
console.log(invalid.length === 0 ? 'PASS' : 'FAIL');
"
# Expected: PASS

# 检查总时长
bun -e "
import { episode01Subtitles } from './src/subtitles/episode01';
const totalFrames = Math.max(...episode01Subtitles.map(s => s.endFrame));
const seconds = totalFrames / 30;
console.log(seconds >= 330 && seconds <= 390 ? 'PASS: ' + seconds + 's' : 'FAIL: ' + seconds + 's');
"
# Expected: PASS: XXXs

# Remotion 预览
bun run dev
# Expected: 正常启动，可预览
```

### Final Checklist

- [ ] 所有 "Must Have" 存在
- [ ] 所有 "Must NOT Have" 不存在
- [ ] 所有测试通过
- [ ] `bun run dev` 正常启动
- [ ] 字幕配音同步误差 < 1秒
