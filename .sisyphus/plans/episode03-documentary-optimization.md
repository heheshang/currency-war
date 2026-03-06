# Episode03Documentary 优化工作计划

## TL;DR

> **核心目标**: 优化Episode03Documentary场景，下载缺失的背景图片，基于第二章内容生成新逐字稿、字幕和配音，确保音视频同步。

---

## 工作任务

### Wave 1: 图片下载 + 逐字稿生成

- [ ] 1. 创建逐字稿文件 `src/transcripts/episode03-transcript.ts`
  - 基于 book1-第二章内容
  - 9个场景，约33段文字

- [ ] 2. 下载背景图片 (7张)
  - ep03-lincoln-portrait.jpg
  - ep03-jackson-president.jpg
  - ep03-civil-war-battle.jpg
  - ep03-greenback-currency.jpg
  - ep03-first-bank.jpg
  - ep03-american-independence.jpg
  - ep03-historic-document.jpg

### Wave 2: 字幕和配音生成

- [ ] 3. 创建字幕生成脚本 `scripts/generate-episode03-audio.ts`

- [ ] 4. 执行配音生成 (Edge TTS)
  - 33个 MP3 文件

- [ ] 5. 更新字幕文件 `src/subtitles/episode03.ts`

### Wave 3: 组件更新

- [ ] 6. 更新 Episode03Documentary 组件
  - 使用新的9场景结构
  - 使用新字幕

- [ ] 7. 更新 Root.tsx 时长配置

### Wave 4: 验证

- [ ] 8. 构建验证

---

## 场景规划 (9个场景)

| Scene | 标题             | 主要内容               |
| ----- | ---------------- | ---------------------- |
| 0     | 开场             | 林肯的警告             |
| 1     | 殖民地货币       | 美国独立战争的金融背景 |
| 2     | 第一银行         | 美国第一银行的诞生     |
| 3     | 杰克逊银行战争   | 废除第二银行的斗争     |
| 4     | 南北战争金融背景 | 国际银行家的阴谋       |
| 5     | 绿币             | 林肯的货币新政         |
| 6     | 俄国同盟         | 俄国舰队支援           |
| 7     | 林肯遇刺         | 刺杀真相               |
| 8     | 国家银行法       | 致命妥协               |

---

## 执行命令

```bash
# 开始执行
/start-work
```

---

## 成功标准

- [ ] 所有图片下载成功
- [ ] 逐字稿包含完整的9个场景
- [ ] 配音文件生成成功
- [ ] 字幕与配音时长同步
- [ ] 构建无错误
