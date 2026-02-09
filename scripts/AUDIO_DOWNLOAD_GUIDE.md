# 音频资源下载指南

## 项目音频需求

### 背景音乐 (BGM) - 悬疑紧张风格

**位置**: `public/assets/audio/bgm/`

需要的文件：

1. **tension.mp3** - 悬疑紧张音乐
   - 用于：戏剧性场景、情节推进
   - 时长：2-5分钟
   - 风格：悬疑、紧张、节奏感强

2. **conspiracy.mp3** - 阴谋氛围音乐
   - 用于：哲基尔岛密谋、秘密会议
   - 时长：3-6分钟
   - 风格：神秘、低沉、不祥

3. **epic-main.mp3** - 史诗战斗音乐
   - 用于：滑铁卢战役场景
   - 时长：3-5分钟
   - 风格：史诗、激烈、管弦乐

### 音效 (SFX)

**位置**: `public/assets/audio/sfx/`

需要的文件：

1. **coin-clink.mp3** - 金币碰撞声
   - 用于：金币流动、交易场景
   - 时长：1-3秒

2. **stock_bell.mp3** - 股市铃声
   - 用于：交易所场景
   - 时长：2-5秒

3. **cannon_fire.mp3** - 大炮声
   - 用于：滑铁卢战场
   - 时长：2-4秒

4. **crowd_murmur.mp3** - 人群嘈杂声
   - 用于：恐慌蔓延场景
   - 时长：5-10秒

## 推荐音频源

### 1. FreePD (最佳选择 - 无需署名)

**网址**: https://freepd.com/

**推荐专辑**:

- Mysterious: https://freepd.com/mysterious.html
- Dark: https://freepd.com/dark.html
- Epic: https://freepd.com/epic.html

**下载步骤**:

1. 访问网站
2. 浏览类别
3. 点击 "Download MP3"
4. 保存到对应的 `public/assets/audio/bgm/` 或 `sfx/` 目录

**优点**:

- ✅ 完全免费
- ✅ 无需署名
- ✅ 高质量
- ✅ 可商用

### 2. Incompetech (需要署名)

**网址**: https://incompetech.com/

**推荐搜索**:

- "Suspense"
- "Dramatic"
- "Soundtrack"

**下载步骤**:

1. 搜索关键词
2. 选择曲目
3. 点击 "License" 选择 "Free!"
4. 下载并保存

**注意事项**:

- ⚠️ 需要在视频说明中署名
- 署名格式：`"Music by [Artist Name]"`

### 3. Pixabay Music (无需署名)

**网址**: https://pixabay.com/music/

**推荐搜索**:

- "Suspense"
- "Dramatic"
- "Epic"
- "Coin", "Bell", "Cannon"

**下载步骤**:

1. 创建免费账户
2. 搜索关键词
3. 选择音频质量
4. 下载

**优点**:

- ✅ 免费且无需署名
- ✅ 大量选择
- ✅ 高质量

### 4. YouTube Audio Library

**网址**: https://www.youtube.com/audiolibrary/

**步骤**:

1. 登录YouTube账户
2. 访问Audio Library
3. 筛选 "Royalty-free music"
4. 搜索并下载

## 快速下载指南

### 方案A: 使用FreePD（最快）

1. 打开 https://freepd.com/mysterious.html
2. 下载 3-5首悬疑音乐
3. 重命名为：
   - tension.mp3
   - conspiracy.mp3
   - epic-main.mp3
4. 放到 `public/assets/audio/bgm/`

5. 打开 https://freepd.com/effects.php
6. 下载音效：coin, bell, explosion
7. 重命名并放到 `public/assets/audio/sfx/`

### 方案B: 使用Pixabay（最全）

1. 注册免费账户
2. 访问 https://pixabay.com/music/search/suspense/
3. 下载多个选项试听
4. 选择最佳匹配
5. 重命名并保存

## 音频文件规格

**推荐格式**:

- 格式：MP3
- 比特率：128-192 kbps
- 采样率：44.1kHz
- 声道：立体声

**文件大小参考**:

- BGM: 3-8 MB per file
- SFX: 50-500 KB per file

## 验证

下载完成后，运行以下命令验证：

```bash
# 检查文件是否存在
ls -la public/assets/audio/bgm/
ls -la public/assets/audio/sfx/

# 检查文件大小
du -h public/assets/audio/*/*.mp3
```

## 注意事项

1. **版权**: 确保下载的音频允许商业使用
2. **署名**: 检查是否需要在视频中署名
3. **质量**: 优先选择高质量音频
4. **测试**: 下载后在Remotion中测试播放

## 占位文件

当前项目中的占位文件是文本文件，需要替换为实际的MP3文件才能正常播放音频。

请尽快下载音频文件并替换占位文件！
