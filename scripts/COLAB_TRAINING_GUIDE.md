# Google Colab 训练指南

## 快速开始

### 步骤1: 打开 Colab
1. 打开 Google Drive
2. 上传 `scripts/rvc_colab.ipynb` 文件
3. 右键 → 打开方式 → Google Colaboratory

### 步骤2: 上传音频
1. 在左侧文件面板点击上传
2. 选择单田芳评书音频（建议30分钟以上）
3. 支持格式：MP3, WAV, FLAC, M4A

### 步骤3: 运行单元格
按顺序点击每个单元格的播放按钮：
1. 📦 安装依赖
2. 📁 上传音频
3. 🔧 预处理音频
4. 🚀 训练模型
5. 📥 下载模型

### 步骤4: 下载模型
训练完成后，将模型文件放入项目：
```
models/rvc/tianfangfang/
```

---

## 📋 音频收集建议

### 推荐来源
- **喜马拉雅** - 搜索"单田芳"
- **蜻蜓FM** - 评书频道
- **YouTube** - 评书视频

### 音频要求
- ✅ 格式：MP3, WAV, FLAC, M4A
- ✅ 时长：30分钟以上（越多越好）
- ✅ 质量：清晰无噪音

---

## ⚠️ 注意事项

1. **免费 Colab 限制**
   - GPU 有限，可能需要等待
   - 训练时间过长会断开连接

2. **推荐升级**
   - Colab Pro（约 140元/月）
   - 或使用 RunPod（按小时计费）

---

## 备选方案

如果 Colab 不方便，可以：

### 使用 Azure TTS（立即可用）
```bash
export AZURE_SPEECH_KEY="你的密钥"
python scripts/generate_voiceover_azure.py --episode 01
```

### 使用现成模型
搜索 Hugging Face 上的中文声音模型：
https://huggingface.co/models?pipeline_tag=text-to-speech&search=chinese
