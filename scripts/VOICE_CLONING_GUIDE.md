# 单田芳声音克隆方案

## 方案概述

要实现单田芳风格的配音，有以下几种方案：

---

## 方案1: RVC 声音转换（推荐）

**RVC (Retrieval-based Voice Conversion)** 是目前最流行的开源声音转换方案。

### 特点
- ✅ 开源免费
- ✅ 支持中文
- ✅ 保持音色相似度较高
- ⚠️ 需要原始音频进行训练

### 使用步骤

```bash
# 1. 克隆 RVC 项目
git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion
cd Retrieval-based-Voice-Conversion

# 2. 安装依赖
pip install -r requirements.txt

# 3. 准备训练数据
# 收集单田芳评书音频片段（建议30分钟以上）

# 4. 训练模型
python train.py --name tianfangfang --f0method harvest
```

### 预训练模型
- 可以在 Hugging Face 上搜索是否有已训练好的中文评书声音模型
- 搜索关键词：`Chinese pingshu voice model`

---

## 方案2: Coqui XTTS v2

**Coqui XTTS** 是开源的语音合成系统，支持声音克隆。

### 特点
- ✅ 开源免费
- ✅ 支持多语言
- ✅ 只需短音频即可克隆（10秒-30秒）
- ⚠️ 克隆质量可能不如专有方案

### 使用示例

```python
from xtts import XTTS

# 加载模型
model = XTTS()
model.load("path/to/model")

# 克隆声音（需要参考音频）
wav = model.tts(
    text="货币战争",
    speaker_wav="path/to/tianfangfang_audio.wav",
    language="zh"
)
```

---

## 方案3: 租借云计算资源训练

如果本地 GPU 不足，可以使用云端 GPU：

### Google Colab
- 免费 GPU 时间有限
- 可以运行 RVC/So-VITS

### RunPod / Paperspace
- 按需付费
- 适合大规模训练

---

## 方案4: 使用现有的中文评书声音

如果没有单田芳的原声素材，可以使用其他评书艺术家的声音：

### 推荐的 TTS 方案
1. **Azure TTS** - `zh-CN-YunxiNeural`（云希）- 最接近男声叙事
2. **火山引擎** - 有更多中文声音可选
3. **讯飞语音** - 中文效果较好

---

## 快速开始：使用现有音频文件

如果您已经有单田芳的评书音频：

```python
# 使用 RVC 进行声音转换
# 1. 先用 Azure TTS 生成基础配音
# 2. 用 RVC 将音色转换为单田芳声音
```

---

## 数据准备

要训练自己的声音模型，需要准备：

### 单田芳评书音频获取
1. **喜马拉雅** - 搜索单田芳评书
2. **蜻蜓FM** - 评书专辑
3. **YouTube** - 单田芳评书视频
4. **购买正版音频** - 尊重版权

### 音频处理
```bash
# 使用 ffmpeg 提取音频
ffmpeg -i video.mp3 -vn -acodec libmp3lame audio.mp3

# 转换为单声道
ffmpeg -i audio.mp3 -ac 1 audio_mono.wav

# 降噪（可选）
ffmpeg -i audio_mono.wav -af denoise=noise.wav audio_clean.wav
```

---

## 简化方案：使用 ElevenLabs（商业）

ElevenLabs 提供高质量语音克隆：

```python
from elevenlabs import clone, generate

# 克隆声音（需要原始音频）
voice = clone(
    name="Tian Fangfang",
    files=["path/to/tianfangfang_audio1.mp3", "path/to/tianfangfang_audio2.mp3"]
)

# 生成语音
audio = generate(
    text="货币战争",
    voice=voice
)
```

**注意**：需要付费订阅，且单田芳声音可能涉及版权问题。

---

## 建议

1. **短期**：使用 Azure `zh-CN-YunxiNeural` 语音，先完成视频制作
2. **长期**：收集单田芳音频素材，训练 RVC 模型
3. **折中**：搜索 Hugging Face 上是否有现成的中文评书声音模型

---

## 资源链接

- [RVC GitHub](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion)
- [Coqui XTTS](https://github.com/coqui-ai/TTS)
- [Hugging Face Voice Models](https://huggingface.co/models?pipeline_tag=text-to-speech&search=chinese)
