# Episode02Documentary 优化工作计划

## TL;DR

> **核心目标**: 优化Episode02Documentary场景，下载缺失的背景图片，基于第一章内容生成新逐字稿、字幕和配音，确保音视频同步。
>
> **交付物**:
>
> - 新下载的背景图片 (6-7张)
> - 新的逐字稿文件
> - 基于配音时长的字幕文件
> - 32个配音音频文件
> - 更新的场景组件

---

## 背景

### 当前状态

- Episode02Documentary 有 13 个场景
- 现有图片: 10张 (部分场景重复使用)
- 现有字幕: 基于固定时长分配，未与配音同步
- 需要基于原书第一章重新生成逐字稿

### 源材料

- `markdown-books/book1-第一章-罗斯柴尔德家族：大道无形的世界首富.md`

---

## 工作任务

### Wave 1: 图片下载 (并行)

- [ ] 1. 下载罗斯柴尔德家族肖像图
  - 关键词: "Rothschild family portrait 19th century"
  - 输出: `ep02-rothschild-family.jpg`

- [ ] 2. 下载梅耶·罗斯柴尔德肖像
  - 关键词: "Mayer Amschel Rothschild portrait"
  - 输出: `ep02-mayer-portrait.jpg`

- [ ] 3. 下载内森·罗斯柴尔德图片
  - 关键词: "Nathan Rothschild London banker portrait"
  - 输出: `ep02-nathan-rothschild.jpg`

- [ ] 4. 下载詹姆斯·罗斯柴尔德图片
  - 关键词: "James Rothschild Paris France banking"
  - 输出: `ep02-james-rothschild.jpg`

- [ ] 5. 下载所罗门·罗斯柴尔德图片
  - 关键词: "Salomon Rothschild Vienna Austria"
  - 输出: `ep02-salomon-rothschild.jpg`

- [ ] 6. 下载金融帝国/银行图片
  - 关键词: "European banking dynasty 1800s grand building"
  - 输出: `ep02-banking-empire.jpg`

- [ ] 7. 下载黄金/财富图片
  - 关键词: "gold coins treasure vault wealth"
  - 输出: `ep02-gold-vault.jpg`

### Wave 2: 逐字稿和字幕生成 (顺序)

- [ ] 8. 创建逐字稿文件
  - 路径: `src/transcripts/episode02-transcript.ts`
  - 内容: 基于 book1-第一章，分9个场景，约32段文字
  - QA: 检查语法、场景分配合理

- [ ] 9. 创建字幕生成脚本
  - 路径: `scripts/generate-episode02-audio.ts`
  - 功能: 从逐字稿生成字幕文件和配音列表

- [ ] 10. 运行字幕生成
  - 输出: `src/subtitles/episode02.ts` (估算时长版本)

### Wave 3: 配音生成 (顺序)

- [ ] 11. 创建TTS生成脚本
  - 路径: `scripts/tts-generate-episode02.ts`
  - 使用 Edge TTS (zh-CN-YunyangNeural)

- [ ] 12. 执行配音生成
  - 输出: 32个 MP3 文件
  - 输出: `episode02_actual_merged.mp3`

- [ ] 13. 更新字幕为实际时长
  - 根据生成的音频实际时长更新字幕帧数

### Wave 4: 组件更新 (顺序)

- [ ] 14. 更新Episode02Documentary组件
  - 使用新的场景数量 (9个)
  - 使用新的字幕导入
  - 更新配音条目构建

- [ ] 15. 更新Root.tsx时长配置
  - 根据实际配音总时长设置

### Wave 5: 验证

- [ ] 16. 运行构建验证
  - `bun run build`
  - `bun run lint`

- [ ] 17. 渲染测试
  - 使用 Remotion Studio 预览

---

## 场景规划 (9个场景)

| Scene | 标题             | 主要内容             |
| ----- | ---------------- | -------------------- |
| 0     | 开场             | 罗斯柴尔德名言       |
| 1     | 隐形的世界首富   | 30万亿美元财富揭秘   |
| 2     | 梅耶的第一桶金   | 威廉王子300万美元    |
| 3     | 滑铁卢与情报网络 | 情报系统、战况传递   |
| 4     | 股票交易所操纵   | 内森抛售/买进公债    |
| 5     | 二十倍利润       | 一天内狂赚20倍       |
| 6     | 五兄弟征服欧洲   | 分兵占领5个金融中心  |
| 7     | 金融帝国巅峰     | 家族遗嘱、财富积累   |
| 8     | 隐形财富         | 战争与金权、展望美国 |

---

## 图片与场景映射

```
Scene 0 (开场): ep02-rothschild-family.jpg 或 ep02-rothschild-portrait.jpg
Scene 1 (隐形首富): ep02-rothschild-family.jpg
Scene 2 (第一桶金): ep02-mayer-portrait.jpg
Scene 3 (滑铁卢): ep02-waterloo-battle.jpg (已有)
Scene 4 (股票操纵): ep02-london-exchange.jpg (已有)
Scene 5 (二十倍利润): ep02-london-city.jpg (已有)
Scene 6 (五兄弟): ep02-europe-map.jpg (已有)
Scene 7 (帝国巅峰): ep02-banking-empire.jpg (新下载)
Scene 8 (隐形财富): ep02-gold-vault.jpg (新下载)
```

---

## 执行命令

```bash
# 开始执行
/start-work

# 或手动执行各步骤
bun run scripts/generate-episode02-audio.ts
bun run scripts/tts-generate-episode02.ts
bun run scripts/update-subtitles-from-audio-ep02.ts
```

---

## 成功标准

- [ ] 所有图片下载成功
- [ ] 逐字稿包含完整的9个场景
- [ ] 32个配音文件生成成功
- [ ] 字幕与配音时长精确同步
- [ ] 构建无错误
- [ ] Remotion Studio 预览正常
