# 配音生成指南

## 方案说明

单田芳是中国著名的评书艺术家，他的声音非常有特色（深沉、浑厚、叙事性强）。由于：
1. macOS 内置语音没有单田芳音色
2. Azure/Google 等云 TTS 没有预设的单田芳音色

**推荐方案**：使用 Azure TTS 的 `zh-CN-YunxiNeural`（云希）男声，这是目前最接近评书风格的中文 Neural 语音。

## 快速开始

### 1. 安装依赖

```bash
pip install aiohttp
```

### 2. 设置 Azure API

```bash
# 在终端中设置环境变量
export AZURE_SPEECH_KEY="你的Azure密钥"
export AZURE_SPEECH_REGION="eastus"
```

获取 Azure 密钥：
1. 访问 https://portal.azure.com
2. 创建"语音服务"资源
3. 在"密钥和端点"中获取密钥

### 3. 生成配音

```bash
# 测试语音
python3 scripts/generate_voiceover_azure.py --test "货币战争" --voice "zh-CN-YunxiNeural"

# 生成第01集
python3 scripts/generate_voiceover_azure.py --episode 01

# 生成所有剧集
for i in $(seq -w 1 11); do
  python3 scripts/generate_voiceover_azure.py --episode $i
done
```

### 4. 查看可用语音

```bash
python3 scripts/generate_voiceover_azure.py --list
```

## 语音推荐

| 语音 | 描述 | 适用场景 |
|------|------|----------|
| zh-CN-YunxiNeural | 云希 - 自然男声 | **推荐** 叙事内容 |
| zh-CN-YunyangNeural | 云扬 - 专业男声 | 正式场合 |
| zh-CN-XiaoxiaoNeural | 晓晓 - 亲和女声 | 对话/旁白 |

## 风格参数

```bash
# 使用叙事风格（推荐）
python3 scripts/generate_voiceover_azure.py --episode 01 --style narration

# 使用缓慢叙事风格
python3 scripts/generate_voiceover_azure.py --episode 01 --style narration_relaxed
```

## 已有音频文件

如果您已有单田芳的配音音频文件：

1. 将音频文件放入 `public/assets/audio/voiceover/episode01/` 目录
2. 文件命名格式：`episode01_merged.m4a`
3. 或者修改 `src/utils/audioConfig.ts` 中的路径配置
