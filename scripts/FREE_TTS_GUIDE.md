# 免费 TTS 方案

## 方案1: Edge TTS (推荐 - 免费)

### 安装
```bash
# macOS/Linux 需要先安装 pipx
brew install pipx
pipx install edge-tts

# 或者使用 Python
python3 -m pip install edge-tts
```

### 测试
```bash
# 测试生成
python3 scripts/use_open_source_tts.py --test "货币战争"
```

### 生成配音
```bash
# 生成第01集
python3 scripts/use_open_source_tts.py --episode 01
```

---

## 方案2: 使用 Azure TTS (免费额度)

```bash
# 设置密钥
export AZURE_SPEECH_KEY="你的密钥"

# 生成配音
python3 scripts/generate_voiceover_azure.py --episode 01
```

---

## 方案3: macOS say 命令 (免费)

macOS 自带的中文语音：

```bash
# 列出可用语音
say -v "?"

# 使用中文语音
say -v "Tingting" -o output.m4a -- "你好"
```

---

## 推荐

先尝试 **Edge TTS**，效果不错且完全免费！
