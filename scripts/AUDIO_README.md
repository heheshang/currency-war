# 音频文件下载说明

## 当前状态

✅ **占位文件已创建** - 所有音频文件位置已准备好
⚠️ **需要替换为实际音频** - 当前是文本占位文件，需要下载MP3替换

## 快速下载指南

### 最简单的方法 - FreePD (无需注册，无需署名)

1. **打开FreePD网站**:
   - 悬疑音乐: https://freepd.com/mysterious.html
   - 黑暗音乐: https://freepd.com/dark.html
   - 史诗音乐: https://freepd.com/epic.html

2. **下载背景音乐 (BGM)**:

   ```
   需要下载的文件:
   • tension.mp3 - 悬疑紧张音乐
   • conspiracy.mp3 - 阴谋氛围音乐
   • epic-main.mp3 - 史诗战斗音乐

   保存到: public/assets/audio/bgm/
   ```

3. **下载音效 (SFX)**:
   - 访问: https://freepd.com/effects.php
   - 搜索: "coin", "bell", "explosion"
   - 保存到: public/assets/audio/sfx/

### 备选方案 - Pixabay Music (需要免费账户)

1. 注册: https://pixabay.com/accounts/register/
2. 访问: https://pixabay.com/music/
3. 搜索关键词:
   - "suspense", "tension", "mysterious"
   - "dramatic", "epic", "battle"
   - "coin", "bell", "cannon"
4. 下载并重命名

### 第三选择 - Incompetech (需要署名)

1. 访问: https://incompetech.com/
2. 搜索关键词
3. 选择 "License" → "Free!"
4. 在视频中署名: "Music by [Artist Name]"

## 音频文件清单

### 背景音乐 (public/assets/audio/bgm/)

| 文件名         | 用途       | 时长    | 风格     |
| -------------- | ---------- | ------- | -------- |
| tension.mp3    | 戏剧场景   | 2-5分钟 | 悬疑紧张 |
| conspiracy.mp3 | 秘密会议   | 3-6分钟 | 神秘不祥 |
| epic-main.mp3  | 滑铁卢战役 | 3-5分钟 | 史诗激烈 |

### 音效 (public/assets/audio/sfx/)

| 文件名           | 用途     | 时长   |
| ---------------- | -------- | ------ |
| coin-clink.mp3   | 金币碰撞 | 1-3秒  |
| stock_bell.mp3   | 股市铃声 | 2-5秒  |
| cannon_fire.mp3  | 大炮声   | 2-4秒  |
| crowd_murmur.mp3 | 人群嘈杂 | 5-10秒 |

## 下载后操作

### 1. 验证文件

```bash
# 检查文件是否下载成功
ls -lh public/assets/audio/bgm/*.mp3
ls -lh public/assets/audio/sfx/*.mp3
```

### 2. 替换占位文件

直接用下载的MP3文件覆盖占位文件即可。

### 3. 测试播放

在Remotion Studio中测试音频是否能正常播放。

## 注意事项

⚠️ **重要**:

1. 确保下载的音频允许商业使用
2. 检查是否需要署名（FreePD不需要）
3. 优先选择高质量音频（128-192 kbps）
4. 音频格式必须是MP3

## 如果下载失败

如果无法下载音频，项目仍然可以运行（只是没有声音）。

所有音频引用在代码中都有注释，可以稍后添加。

## 下一步

音频下载完成后：

1. ✅ 在Remotion Studio中预览
2. ✅ 调整音量和混音
3. ✅ 渲染测试视频
4. ✅ 添加字幕和配音

---

**快速链接汇总**:

- FreePD: https://freepd.com/
- Pixabay: https://pixabay.com/music/
- Incompetech: https://incompetech.com/
- Freesound: https://freesound.org/

**需要帮助?**

查看完整指南: `scripts/AUDIO_DOWNLOAD_GUIDE.md`
