#!/usr/bin/env python3
"""
使用开源中文 TTS 模型生成配音

支持多种开源模型：
1. GPT-SoVITS (需训练)
2. VITS (可直接使用)
3. Coqui TTS
4. Bark

Usage:
    python3 scripts/use_open_source_tts.py --episode 01
"""

import os
import subprocess
import argparse
from pathlib import Path
import sys

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# 字幕文件目录
SUBTITLE_DIR = PROJECT_ROOT / "src" / "subtitles"


def get_subtitle_texts(episode: str):
    """从字幕文件提取文本"""
    if episode.lower() == "trailer":
        subtitle_file = SUBTITLE_DIR / "trailer.ts"
    else:
        subtitle_file = SUBTITLE_DIR / f"episode{episode.zfill(2)}.ts"

    if not subtitle_file.exists():
        print(f"❌ 字幕文件不存在: {subtitle_file}")
        return []

    with open(subtitle_file, "r", encoding="utf-8") as f:
        content = f.read()

    import re
    # 同时提取 text 和 translation 字段
    pattern = r'startFrame:\s*(\d+).*?endFrame:\s*(\d+).*?text:\s*"([^"]*)".*?translation:\s*"([^"]*)"'
    matches = re.findall(pattern, content, re.DOTALL)

    subtitles = []
    for start, end, text, translation in matches:
        # 优先使用 translation（中文），如果没有则使用 text
        final_text = translation.strip() if translation.strip() else text.strip()
        if final_text:
            subtitles.append({
                "start": int(start),
                "end": int(end),
                "text": final_text
            })
    return subtitles


def generate_with_coqui(text: str, output_file: str) -> bool:
    """使用 Coqui TTS 生成语音"""
    try:
        from TTS.api import TTS

        # 选择中文模型
        model_name = "tts_models/zh-CN/baker/tacotron2-DDCG-ckpt"

        print(f"   加载模型: {model_name}")
        tts = TTS(model_name=model_name)

        print(f"   生成: {text[:20]}...")
        tts.tts_to_file(text=text, file_path=output_file)

        return True
    except Exception as e:
        print(f"   ❌ Coqui TTS 错误: {e}")
        return False


def generate_with_edge_tts(text: str, output_file: str) -> bool:
    """使用 Edge TTS (免费，不需要 API 密钥)"""
    try:
        import subprocess

        # 中文男声 - 云扬 (Yunyang) - 推荐，成熟稳重
        # 其他选项: Yunxi (活泼), Yunjian (体育), YunJhe (台湾)
        voice = "zh-CN-YunyangNeural"

        cmd = [
            "edge-tts",
            "-t", text,
            "-v", voice,
            "--write-media", output_file
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            # 检查文件是否有效
            import os
            if os.path.exists(output_file) and os.path.getsize(output_file) > 100:
                return True

        print(f"   ❌ Edge TTS 错误: {result.stderr}")
        return False
    except Exception as e:
        print(f"   ❌ Edge TTS 错误: {e}")
        return False


def generate_episode(episode: str, method: str = "edge"):
    """生成整集配音"""
    print(f"\n{'='*60}")
    print(f"📖 生成第 {episode} 集配音")
    print(f"   方法: {method}")
    print(f"{'='*60}")

    subtitles = get_subtitle_texts(episode)
    if not subtitles:
        print("❌ 没有找到字幕")
        return False

    print(f"📊 找到 {len(subtitles)} 条字幕")

    episode_dir = OUTPUT_DIR / f"episode{episode}"
    episode_dir.mkdir(parents=True, exist_ok=True)

    success = 0
    for i, sub in enumerate(subtitles):
        text = sub["text"]
        output_file = episode_dir / f"voice_{i:04d}.m4a"

        print(f"\n[{i+1}/{len(subtitles)}] ", end="")

        if method == "coqui":
            ok = generate_with_coqui(text, str(output_file))
        else:
            ok = generate_with_edge_tts(text, str(output_file))

        if ok:
            success += 1
            print(f"✅")
        else:
            print(f"❌")

    print(f"\n✅ 完成! 成功生成 {success}/{len(subtitles)} 个音频文件")

    # 合并音频
    if success > 0:
        merge_audio(episode_dir, episode)

    return success > 0


def merge_audio(episode_dir: Path, episode: str):
    """合并所有音频文件"""
    print("\n📦 合并音频文件...")

    merged_file = episode_dir / f"episode{episode}_merged.m4a"

    # 创建文件列表
    filelist = episode_dir / "filelist.txt"
    with open(filelist, "w") as f:
        for i in range(1000):  # 假设最多1000个文件
            audio_file = episode_dir / f"voice_{i:04d}.mp3"
            if audio_file.exists():
                f.write(f"file '{audio_file.absolute()}'\n")

    # 使用 ffmpeg 合并
    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(filelist),
        "-c", "copy", str(merged_file)
    ]

    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ 合并完成: {merged_file}")
    except subprocess.CalledProcessError as e:
        print(f"⚠️  合并失败: {e}")


def list_models():
    """列出可用的开源模型"""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║          开源中文 TTS 模型                               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  1. Edge TTS (推荐 - 免费且效果较好)                       ║
║     - 不需要 API 密钥                                         ║
║     - 支持多种中文语音                                       ║
║                                                                  ║
║  2. Coqui TTS                                               ║
║     - 开源免费                                                ║
║     - 需要安装模型                                            ║
║                                                                  ║
║  3. VITS                                                     ║
║     - 开源免费                                                ║
║     - 需要更多配置                                             ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝

推荐使用 Edge TTS，无需注册可直接使用！
    """)


def main():
    parser = argparse.ArgumentParser(description="开源 TTS 配音生成")
    parser.add_argument("--episode", "-e", help="剧集编号 (01-11)")
    parser.add_argument("--method", "-m", default="edge",
                       choices=["edge", "coqui"], help="TTS 方法")
    parser.add_argument("--test", "-t", help="测试文本")
    parser.add_argument("--list", "-l", action="store_true", help="列出可用模型")

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║          🎙️ 开源中文 TTS 配音生成                        ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    if args.list:
        list_models()
        return

    if args.test:
        output = OUTPUT_DIR / "test.mp3"
        print(f"测试生成: {args.test}")
        if args.method == "coqui":
            generate_with_coqui(args.test, str(output))
        else:
            generate_with_edge_tts(args.test, str(output))
        print(f"✅ 输出: {output}")
        return

    if not args.episode:
        parser.print_help()
        print("""

示例:
  # 测试 Edge TTS
  python3 scripts/use_open_source_tts.py --test "货币战争"

  # 生成第01集
  python3 scripts/use_open_source_tts.py --episode 01

  # 使用 Coqui TTS
  python3 scripts/use_open_source_tts.py --episode 01 --method coqui
        """)
        return

    generate_episode(args.episode, args.method)


if __name__ == "__main__":
    main()
