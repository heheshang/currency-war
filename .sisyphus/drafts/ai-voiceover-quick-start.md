# AI配音Demo执行指南 - 立即开始

## 📋 执行清单

检查以下准备工作是否完成：

- [ ] **电脑已准备**（Windows/Mac/Linux均可）
- [ ] **网络连接正常**（需要访问Azure）
- [ ] **Python已安装**（推荐3.8+）[检查方法：打开终端输入`python --version`]
- [ ] **文本编辑器**（VS Code / Notepad++ / 记事本）

---

## 第1步：注册Azure TTS（10分钟）

### 1.1 创建Azure账户

1. 访问：https://portal.azure.com
2. 点击右上角"免费开始"
3. 使用以下方式之一登录：
   - Microsoft账户（hotmail.com, outlook.com等）
   - GitHub账户
   - 创建新账户

### 1.2 创建语音服务资源

1. 登录后，在搜索框输入"Speech Services"
2. 点击"创建"
3. 填写以下信息：
   - **订阅**："免费试用"
   - **资源组**：创建新的，例如"currency-war-ai"
   - **区域**：选择"East Asia"（香港）或离你最近的区域
   - **名称**：例如"currency-war-tts"
   - **定价层**：选择"标准 (S0)" 或 "免费 (F0)"
     - 推荐选择**免费F0**：5小时/月免费额度
4. 点击"查看 + 创建"
5. 点击"创建"
6. 等待部署完成（约1-2分钟）
7. 点击"转到资源"

### 1.3 获取API密钥

1. 在语音服务页面，左侧菜单点击"密钥和终结点"
2. 复制以下信息并保存到记事本：
   - **密钥1**（KEY 1）
   - **区域**（REGION） - 例如：eastasia

**示例**：

```
密钥: abc123def456ghi789...
区域: eastasia
```

---

## 第2步：安装Python依赖（5分钟）

### 2.1 检查Python

打开终端（Windows按Win+R输入cmd，Mac按Command+Space输入terminal）：

```bash
python --version
```

**如果显示Python 3.x.x**：继续下一步

**如果未安装或版本过低**：

- 访问：https://www.python.org/downloads/
- 下载并安装Python 3.8+
- 安装时勾选"Add Python to PATH"

### 2.2 安装Azure Speech SDK

在终端输入：

```bash
pip install azure-cognitiveservices-speech
```

**如果提示pip不是命令**：

```bash
python -m pip install azure-cognitiveservices-speech
```

**验证安装**：

```bash
pip list | grep azure
```

应该看到：`azure-cognitiveservices-speech`

---

## 第3步：创建项目文件夹（2分钟）

### 文件夹结构

在桌面或任意位置创建以下文件夹结构：

```
currency-war-audio-demo/
├── scripts/              # Python脚本
│   └── generate_audio.py
├── ssml/                 # SSML脚本
│   ├── scene1.xml
│   ├── scene2.xml
│   ├── scene3.xml
│   ├── scene4.xml
│   └── scene5.xml
├── audio/                # 输出音频
│   ├── scene1.mp3
│   ├── scene2.mp3
│   ├── scene3.mp3
│   ├── scene4.mp3
│   ├── scene5.mp3
│   └── final_voiceover.mp3
└── config.py             # 配置文件
```

**创建方法**：

**Windows**：

```cmd
mkdir currency-war-audio-demo
cd currency-war-audio-demo
mkdir scripts ssml audio
```

**Mac/Linux**：

```bash
mkdir -p currency-war-audio-demo/{scripts,ssml,audio}
cd currency-war-audio-demo
```

---

## 第4步：准备配置文件（1分钟）

创建文件：`config.py`

**内容如下**（替换成你的API密钥）：

```python
# Azure TTS 配置
# 请替换成你在第1步获取的密钥和区域

AZURE_SPEECH_KEY = "你的密钥1粘贴到这里"
AZURE_SERVICE_REGION = "eastasia"  # 或你的区域

# 输出配置
OUTPUT_FORMAT = "Audio24Khz96KBitRateMonoMp3"  # MP3格式，24kHz
SAMPLE_RATE = 24000  # 24kHz

# 默认声音
DEFAULT_VOICE_ZH = "zh-CN-YunyangNeural"  # 中文男声
DEFAULT_VOICE_EN = "en-US-GuyNeural"      # 英文男声
```

**保存位置**：`currency-war-audio-demo/config.py`

---

## 第5步：准备SSML脚本（已提供）

我已经为您准备好了5个场景的SSML脚本，请按照以下步骤创建文件：

### 场景1：假消息发布

创建文件：`ssml/scene1.xml`

**内容**：（直接复制粘贴）

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
    <voice name="zh-CN-YunyangNeural">
        <prosody rate="0.9" pitch="-10%" volume="+20%">
            <mstts:express-as style="serious">
                "拿破仑赢了！"
            </mstts:express-as>
            <break time="800ms"/>
            他故意放出假消息。
            <break time="500ms"/>
            1815年6月20日，伦敦证券交易所。
            <break time="300ms"/>
            <mstts:express-as style="narration-problems">
                内森·罗斯柴尔德，
                这个拥有欧洲最强大情报网络的人，
            </mstts:express-as>
            <break time="400ms"/>
            开始了他人生中
            <prosody pitch="+5%" volume="+15%">
                最惊人的一次操作。
            </prosody>
        </prosody>
    </voice>
</speak>
```

---

### 场景2：恐慌蔓延

创建文件：`ssml/scene2.xml`

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
    <voice name="zh-CN-YunyangNeural">
        <prosody rate="1.2" pitch="-5%" volume="+20%">
            <mstts:express-as style="fearful">
                恐慌，瞬间席卷整个交易所。
            </mstts:express-as>
            <break time="600ms"/>
            债券价格，
            <prosody rate="1.3" pitch="+10%">
                从100英镑，暴跌到85英镑，
                再到70英镑...
            </prosody>
            <break time="400ms"/>
            人们惊慌失措，纷纷抛售。
            <break time="300ms"/>
            <prosody pitch="+15%">
                "英国完了！拿破仑会征服欧洲！"
            </prosody>
            <break time="500ms"/>
            <mstts:express-as style="fearful">
                恐惧，像瘟疫一样蔓延。
            </mstts:express-as>
        </prosody>
    </voice>
</speak>
```

---

### 场景3：反向操作

创建文件：`ssml/scene3.xml`

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
    <voice name="zh-CN-YunyangNeural">
        <prosody rate="0.85" pitch="-15%" volume="+15%">
            <mstts:express-as style="serious">
                但当所有人都在疯狂抛售时...
            </mstts:express-as>
            <break time="1000ms"/>
            <prosody rate="0.8" pitch="-10%">
                有一个人，
            </prosody>
            <break time="500ms"/>
            <prosody pitch="+5%" volume="+20%">
                却在悄然买入。
            </prosody>
            <break time="800ms"/>
            <mstts:express-as style="calm">
                内森·罗斯柴尔德，
            </mstts:express-as>
            通过他的代理人，
            <break time="300ms"/>
            <prosody pitch="-5%">
                以废纸般的价格，
            </prosody>
            <break time="300ms"/>
            <prosody pitch="+10%" volume="+15%">
                疯狂收购英国国债。
            </prosody>
        </prosody>
    </voice>
</speak>
```

---

### 场景4：真相大白

创建文件：`ssml/scene4.xml`

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
    <voice name="zh-CN-YunyangNeural">
        <prosody rate="1.0" pitch="0%" volume="+20%">
            <mstts:express-as style="serious">
                第二天上午，
            </mstts:express-as>
            <break time="300ms"/>
            官方消息终于传来：
            <break time="500ms"/>
            <prosody pitch="+15%" volume="+30%">
                威灵顿公爵在滑铁卢，
                <break time="400ms"/>
                大获全胜！
            </prosody>
            <break time="1000ms"/>
            <mstts:express-as style="serious">
                拿破仑，被彻底击败！
            </mstts:express-as>
            <break time="1200ms"/>
            真相揭晓的瞬间，
            <break time="400ms"/>
            交易所，一片死寂。
            <break time="1000ms"/>
            <prosody rate="1.1" pitch="+10%">
                英国国债价格，
            </prosody>
            <break time="300ms"/>
            从5英镑，
            <break time="300ms"/>
            <prosody pitch="+15%" volume="+25%">
                一夜之间，飙回原价。
            </prosody>
        </prosody>
    </voice>
</speak>
```

---

### 场景5：暴利与影响

创建文件：`ssml/scene5.xml`

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
    <voice name="zh-CN-YunyangNeural">
        <prosody rate="0.8" pitch="-20%" volume="+15%">
            <mstts:express-as style="calm">
                在这短短的一天里，
            </mstts:express-as>
            <break time="600ms"/>
            内森·罗斯柴尔德，
            <break time="400ms"/>
            <prosody pitch="+5%" volume="+20%">
                赚取了
                <break time="300ms"/>
                20倍的利润。
            </prosody>
            <break time="1200ms"/>
            他投入的300万英镑，
            <break time="400ms"/>
            <prosody pitch="+10%" volume="+25%">
                变成了6000万英镑。
            </prosody>
            <break time="1500ms"/>
            <mstts:express-as style="serious">
                这不仅是金钱的胜利，
            </mstts:express-as>
            <break time="500ms"/>
            <prosody pitch="+5%">
                更是信息的胜利。
            </prosody>
            <break time="800ms"/>
            这一天，
            <break time="400ms"/>
            英国经济命脉，
            <break time="400ms"/>
            <prosody pitch="-5%">
                落入了罗斯柴尔德家族手中。
            </prosody>
            <break time="1200ms"/>
            <prosody rate="0.75" pitch="-15%">
                从此，
            </prosody>
            <break time="600ms"/>
            一个超越王权的金融帝国，
            <break time="500ms"/>
            <prosody pitch="+10%" volume="+20%">
                正式崛起。
            </prosody>
            <break time="2000ms"/>
        </prosody>
    </voice>
</speak>
```

---

## 第6步：创建生成脚本（2分钟）

创建文件：`scripts/generate_audio.py`

**内容**：（直接复制粘贴）

```python
import os
import sys
import azure.cognitiveservices.speech as speechsdk

# 添加父目录到路径
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# 导入配置
try:
    from config import AZURE_SPEECH_KEY, AZURE_SERVICE_REGION, OUTPUT_FORMAT
except ImportError:
    print("错误：找不到配置文件！")
    print("请确保 config.py 文件存在并且包含正确的API密钥。")
    sys.exit(1)

# 场景配置
SCENES = [
    {"id": 1, "name": "假消息发布", "ssml": "ssml/scene1.xml", "output": "audio/scene1.mp3"},
    {"id": 2, "name": "恐慌蔓延", "ssml": "ssml/scene2.xml", "output": "audio/scene2.mp3"},
    {"id": 3, "name": "反向操作", "ssml": "ssml/scene3.xml", "output": "audio/scene3.mp3"},
    {"id": 4, "name": "真相大白", "ssml": "ssml/scene4.xml", "output": "audio/scene4.mp3"},
    {"id": 5, "name": "暴利与影响", "ssml": "ssml/scene5.xml", "output": "audio/scene5.mp3"},
]

def generate_audio(ssml_file, output_file):
    """生成单个音频文件"""
    # 创建语音配置
    speech_config = speechsdk.SpeechConfig(
        subscription=AZURE_SPEECH_KEY,
        region=AZURE_SERVICE_REGION
    )

    # 设置输出格式
    speech_config.set_speech_synthesis_output_format(
        getattr(speechsdk.SpeechSynthesisOutputFormat, OUTPUT_FORMAT)
    )

    # 创建合成器（输出到文件）
    audio_config = speechsdk.audio.AudioOutputConfig(filename=output_file)
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config,
        audio_config=audio_config
    )

    # 读取SSML文件
    try:
        with open(ssml_file, "r", encoding="utf-8") as f:
            ssml_text = f.read()
    except FileNotFoundError:
        print(f"❌ 错误：找不到文件 {ssml_file}")
        return False

    # 生成音频
    try:
        print(f"🎙️  正在生成: {ssml_file}...")
        result = synthesizer.speak_ssml_async(ssml_text).get()

        # 检查结果
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print(f"✅ 成功生成: {output_file}")
            return True
        else:
            print(f"❌ 生成失败: {result.reason}")
            if result.reason == speechsdk.ResultReason.Canceled:
                cancellation_details = result.cancellation_details
                print(f"   错误详情: {cancellation_details.reason}")
                if cancellation_details.reason == speechsdk.CancellationReason.Error:
                    print(f"   错误代码: {cancellation_details.error_code}")
                    print(f"   错误详情: {cancellation_details.error_details}")
            return False

    except Exception as e:
        print(f"❌ 异常: {str(e)}")
        return False

def main():
    """主函数"""
    print("=" * 60)
    print("🎬 货币战争 - 第3集AI配音生成器")
    print("=" * 60)
    print()

    # 检查API密钥
    if AZURE_SPEECH_KEY == "你的密钥1粘贴到这里":
        print("❌ 错误：请先在 config.py 中配置你的Azure API密钥！")
        print()
        print("操作步骤：")
        print("1. 打开 config.py 文件")
        print("2. 将 AZURE_SPEECH_KEY 替换为你的实际密钥")
        print("3. 保存文件后重新运行此脚本")
        print()
        sys.exit(1)

    # 确认开始
    print("准备生成以下场景的音频：")
    for scene in SCENES:
        print(f"  {scene['id']}. {scene['name']}")
    print()
    input("按回车键开始生成...")

    # 生成所有场景
    success_count = 0
    for scene in SCENES:
        print()
        print(f"📌 场景 {scene['id']}: {scene['name']}")
        if generate_audio(scene['ssml'], scene['output']):
            success_count += 1

    # 总结
    print()
    print("=" * 60)
    print(f"✅ 生成完成！成功: {success_count}/{len(SCENES)}")
    print("=" * 60)
    print()

    if success_count == len(SCENES):
        print("🎉 所有场景生成成功！")
        print()
        print("📁 音频文件位置：")
        for scene in SCENES:
            print(f"   - {scene['output']}")
        print()
        print("🎵 下一步：使用Audacity拼接音频")
        print("   1. 下载Audacity: https://www.audacityteam.org/")
        print("   2. 导入所有场景音频")
        print("   3. 按顺序排列：scene1 → scene2 → ... → scene5")
        print("   4. 导出为完整文件：audio/final_voiceover.mp3")
    else:
        print("⚠️  部分场景生成失败，请检查错误信息")

if __name__ == "__main__":
    main()
```

---

## 第7步：生成音频（5分钟）

### 7.1 打开终端

**Windows**：

- 按 `Win + R`
- 输入 `cmd`
- 按回车

**Mac**：

- 按 `Command + Space`
- 输入 `terminal`
- 按回车

### 7.2 进入项目目录

```bash
cd Desktop/currency-war-audio-demo
```

**如果不在桌面**：

```bash
cd /path/to/your/currency-war-audio-demo
```

### 7.3 运行生成脚本

```bash
python scripts/generate_audio.py
```

**如果提示python不是命令**：

```bash
python3 scripts/generate_audio.py
```

### 7.4 等待生成

脚本会显示进度：

```
============================================================
🎬 货币战争 - 第3集AI配音生成器
============================================================

准备生成以下场景的音频：
  1. 假消息发布
  2. 恐慌蔓延
  3. 反向操作
  4. 真相大白
  5. 暴利与影响

按回车键开始生成...

📌 场景 1: 假消息发布
🎙️  正在生成: ssml/scene1.xml...
✅ 成功生成: audio/scene1.mp3

📌 场景 2: 恐慌蔓延
🎙️  正在生成: ssml/scene2.xml...
✅ 成功生成: audio/scene2.mp3

...

============================================================
✅ 生成完成！成功: 5/5
============================================================

🎉 所有场景生成成功！

📁 音频文件位置：
   - audio/scene1.mp3
   - audio/scene2.mp3
   - audio/scene3.mp3
   - audio/scene4.mp3
   - audio/scene5.mp3

🎵 下一步：使用Audacity拼接音频
```

---

## 第8步：试听音频（2分钟）

### 方法1：使用播放器

1. 打开`audio`文件夹
2. 双击`scene1.mp3`播放
3. 依次试听所有5个场景
4. 评估质量：
   - ✅ 语音清晰度
   - ✅ 情感表达
   - ✅ 语速是否合适
   - ✅ 是否需要调整

### 方法2：使用Audacity批量试听

1. 打开Audacity
2. 文件 → 导入 → 音频
3. 选择所有5个mp3文件
4. 点击播放按钮试听

---

## 第9步：拼接完整音频（5分钟）

### 9.1 下载Audacity

访问：https://www.audacityteam.org/download/

- 下载对应系统版本
- 安装（下一步、下一步...）

### 9.2 导入音频

1. 打开Audacity
2. 文件 → 导入 → 音频
3. 选择`audio`文件夹中的所有5个文件
4. 按住Ctrl/Command，依次点击：
   - scene1.mp3
   - scene2.mp3
   - scene3.mp3
   - scene4.mp3
   - scene5.mp3
5. 点击"打开"

### 9.3 调整顺序

确保轨道从上到下是：

1. scene1
2. scene2
3. scene3
4. scene4
5. scene5

**如果顺序不对**：

- 点击轨道名称选中
- 拖动到正确位置

### 9.4 对齐时间轴

1. 选择"时间位移工具"（或按F5）
2. 依次将每个场景拖动到正确位置：
   - scene1: 从0:00开始
   - scene2: 紧接scene1结束位置
   - scene3: 紧接scene2结束位置
   - scene4: 紧接scene3结束位置
   - scene5: 紧接scene4结束位置

### 9.5 添加场景间停顿（可选）

在每个场景之间添加0.5-1秒停顿：

1. 选择"选择工具"（或按F1）
2. 点击场景末尾
3. 生成 → 静音
4. 输入时长：0.5秒或1秒

### 9.6 统一音量

1. 按 Ctrl+A（全选）
2. 效果 → 音量 → 压缩/放大
3. 选择"放大到 -3.0 dB"
4. 点击"应用"

### 9.7 导出完整音频

1. 文件 → 导出音频
2. 文件名：`final_voiceover`
3. 保存位置：`audio/`文件夹
4. 格式：MP3
5. 点击"保存"
6. 在元数据对话框中填写：
   - 标题：货币战争第3集 - 滑铁卢战役
   - 艺人：AI配音（Azure TTS）
   - 年份：2025
7. 点击"确定"

---

## 第10步：验证质量（2分钟）

### 检查清单

播放`final_voiceover.mp3`，检查：

- [ ] **总时长**: 2分30秒 - 2分50秒
- [ ] **语音清晰**: 无模糊、无卡顿
- [ ] **情感表达**: 5个场景情感可区分
  - 场景1：悬疑严肃
  - 场景2：紧张快速
  - 场景3：戏剧转折
  - 场景4：激动震撼
  - 场景5：深沉史诗
- [ ] **音量一致**: 无忽大忽小
- [ ] **场景过渡**: 自然流畅

### 如果不满意

**调整方案**：

1. **调整语速**：
   - 修改SSML中的`rate`参数
   - 例如：`rate="0.9"`改为`rate="0.8"`（更慢）

2. **调整音调**：
   - 修改SSML中的`pitch`参数
   - 例如：`pitch="-10%"`改为`pitch="-15%"`（更低沉）

3. **调整音量**：
   - 修改SSML中的`volume`参数
   - 例如：`volume="+20%"`改为`volume="+30%"`（更大声）

4. **更换声音**：
   - 修改SSML中的`<voice name="...">`
   - 例如：`zh-CN-YunyangNeural`改为`zh-CN-YunxiNeural`

修改后重新运行：

```bash
python scripts/generate_audio.py
```

---

## 常见问题排查

### 问题1：提示"找不到config.py"

**原因**：config.py文件不在正确位置

**解决**：

1. 确认文件结构：

```
currency-war-audio-demo/
├── config.py         ← 必须在项目根目录
├── scripts/
│   └── generate_audio.py
├── ssml/
└── audio/
```

2. 在终端中确认当前目录：

```bash
pwd  # 查看当前目录
ls   # 查看文件列表
```

---

### 问题2：提示"API密钥无效"

**原因**：API密钥配置错误

**解决**：

1. 检查`config.py`文件
2. 确保密钥已正确粘贴（无多余空格）
3. 确保区域正确（例如：eastasia）
4. 确认账户状态正常（登录Azure查看）

---

### 问题3：生成失败，提示"Quota exceeded"

**原因**：超出免费配额

**解决**：

1. 检查配额使用情况：
   - 登录Azure Portal
   - 进入语音服务资源
   - 查看"配额和使用情况"
2. 等待下月重置（免费版：5小时/月）
3. 或升级到付费版（约¥200/月）

---

### 问题4：音频太机械

**原因**：SSML参数需要调整

**解决**：

1. 增加停顿：`<break time="1000ms"/>`
2. 添加情感：`<mstts:express-as style="serious">`
3. 调整语速：`rate="0.9"`（更慢）
4. 调整音调：`pitch="-10%"`（更低沉）

---

## 🎉 完成！

恭喜！如果前面的步骤都顺利完成，你现在应该拥有：

✅ **5个场景的AI配音文件**（MP3格式）
✅ **完整的配音文件**（`final_voiceover.mp3`）
✅ **总时长约2分40秒**

**下一步**：

- 📝 添加背景音乐（使用免费音乐库）
- 🔊 添加音效（战争、交易所、金币）
- 🎚️ 最终混音（对白优先，音乐配合）
- 🎬 开始视频制作（Remotion）

**需要继续吗？**

1. **继续音乐制作** - 我教您如何找到合适的背景音乐
2. **继续音效制作** - 我教您如何添加音效
3. **开始视频制作** - 直接开始Remotion项目
4. **先休息一下** - 您已经完成了很多工作！

---

**文档版本**: 1.0
**创建日期**: 2025年2月9日
**预计完成时间**: 30-40分钟

**祝您制作顺利！** 🎉
