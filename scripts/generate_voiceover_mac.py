#!/usr/bin/env python3
"""
使用 macOS say 命令生成配音

Usage:
    python3 scripts/generate_voiceover_mac.py --episode 01
    python3 scripts/generate_voiceover_mac.py --test "测试文本"
"""

import subprocess
import re
from pathlib import Path
import sys

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover"
SUBTITLE_DIR = PROJECT_ROOT / "src" / "subtitles"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


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

    pattern = r'startFrame:\s*(\d+).*?endFrame:\s*(\d+).*?text:\s*"([^"]*)"'
    matches = re.findall(pattern, content, re.DOTALL)

    subtitles = []
    for start, end, text in matches:
        if text.strip():
            subtitles.append({
                "start": int(start),
                "end": int(end),
                "text": text.strip()
            })
    return subtitles


def generate_voice(text: str, output_file: str, voice: str = "Tingting", rate: int = 150) -> bool:
    """使用 macOS say 命令生成语音"""
    escaped_text = text.replace('"', '\\"')

    cmd = [
        "say",
        "-v", voice,
        "-r", str(rate),
        "-o", output_file,
        "--",
        escaped_text
    ]

    try:
        subprocess.run(cmd, check=True, capture_output=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ 生成失败: {e}")
        return False


def list_voices():
    """列出可用的语音"""
    print("\n📢 可用的中文语音:")
    print("-" * 40)

    result = subprocess.run(["say", "-v", "?"], capture_output=True, text=True)
    lines = result.stdout.strip().split("\n")

    for line in lines:
        if "zh" in line.lower() or "chinese" in line.lower():
            print(line)


def generate_episode(episode: str, voice: str = "Tingting", rate: int = 150):
    """生成整集配音"""
    print(f"\n{'='*60}")
    print(f"📖 生成第 {episode} 集配音")
    print(f"   语音: {voice}")
    print(f"   语速: {rate}")
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

        print(f"[{i+1}/{len(subtitles)}] ", end="", flush=True)

        if generate_voice(text, str(output_file), voice, rate):
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
        for i in range(10000):
            audio_file = episode_dir / f"voice_{i:04d}.m4a"
            if audio_file.exists():
                f.write(f"file '{audio_file.absolute()}'\n")

    # 使用 ffmpeg 合并
    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(filelist),
        "-c:a", "aac", "-b:a", "128k", str(merged_file)
    ]

    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ 合并完成: {merged_file}")
        size_mb = merged_file.stat().st_size / (1024 * 1024)
        print(f"   文件大小: {size_mb:.1f} MB")
    except subprocess.CalledProcessError as e:
        print(f"⚠️  合并失败: {e}")


def main():
    import argparse

    parser = argparse.ArgumentParser(description="使用 macOS say 生成配音")
    parser.add_argument("--episode", "-e", help="剧集编号 (01-11)")
    parser.add_argument("--voice", "-v", default="Tingting", help="语音名称")
    parser.add_argument("--rate", "-r", type=int, default=150, help="语速 (默认 150)")
    parser.add_argument("--test", "-t", help="测试文本")
    parser.add_argument("--list", "-l", action="store_true", help="列出可用语音")

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║          🎙️ macOS 配音生成工具                            ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    if args.list:
        list_voices()
        return

    if args.test:
        output = OUTPUT_DIR / "test.m4a"
        print(f"测试生成: {args.test}")
        if generate_voice(args.test, str(output), args.voice, args.rate):
            print(f"✅ 输出: {output}")
        return

    if not args.episode:
        parser.print_help()
        print("""

📌 使用示例:

  # 列出可用语音
  python3 scripts/generate_voiceover_mac.py --list

  # 测试语音
  python3 scripts/generate_voiceover_mac.py --test "货币战争"

  # 生成第01集 (使用婷婷语音)
  python3 scripts/generate_voiceover_mac.py --episode 01

  # 使用不同语音和语速
  python3 scripts/generate_voiceover_mac.py --episode 01 --voice Tingting --rate 130

📌 可用中文语音:
  - Tingting (婷婷) - 语速较快
  - Meijia (美佳) - 台湾女声
  - Sinji (善怡) - 香港女声
        """)
        return

    generate_episode(args.episode, args.voice, args.rate)


if __name__ == "__main__":
    main()
