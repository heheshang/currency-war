#!/usr/bin/env python3
"""
使用有道免费 TTS 生成配音

Usage:
    python3 scripts/generate_voiceover_youdao.py --episode 01
    python3 scripts/generate_voiceover_youdao.py --test "测试文本"
"""

import subprocess
import re
import urllib.request
import urllib.parse
from pathlib import Path
import sys
import time

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


def generate_voice_youdao(text: str, output_file: str) -> bool:
    """使用有道 TTS 生成语音"""
    # 有道 TTS 对文本长度有限制，需要分段处理
    max_len = 200  # 限制单次请求长度

    if len(text) > max_len:
        # 分段处理
        parts = [text[i:i+max_len] for i in range(0, len(text), max_len)]
        temp_files = []

        for i, part in enumerate(parts):
            temp_file = f"/tmp/tts_part_{i}.mp3"
            temp_files.append(temp_file)
            url = f"https://dict.youdao.com/dictvoice?audio={urllib.parse.quote(part)}&type=1"
            try:
                urllib.request.urlretrieve(url, temp_file)
                time.sleep(0.3)  # 避免请求过快
            except Exception as e:
                print(f"❌ 分段失败: {e}")
                return False

        # 合并分段文件
        try:
            with open(output_file, 'wb') as outfile:
                for temp_file in temp_files:
                    with open(temp_file, 'rb') as infile:
                        outfile.write(infile.read())
            # 清理临时文件
            for temp_file in temp_files:
                Path(temp_file).unlink()
            return True
        except Exception as e:
            print(f"❌ 合并失败: {e}")
            return False
    else:
        # type=1 是男声，type=0 是女声
        url = f"https://dict.youdao.com/dictvoice?audio={urllib.parse.quote(text)}&type=1"

        try:
            urllib.request.urlretrieve(url, output_file)
            # 检查文件是否有效
            if Path(output_file).stat().st_size > 100:
                return True
            else:
                print(f"❌ 文件太小，可能是无效音频")
                return False
        except Exception as e:
            print(f"❌ 生成失败: {e}")
            return False


def list_voices():
    """列出可用的语音"""
    print("\n📢 有道 TTS 语音选项:")
    print("-" * 40)
    print("  type=0: 中文女声")
    print("  type=1: 中文男声")


def generate_episode(episode: str):
    """生成整集配音"""
    print(f"\n{'='*60}")
    print(f"📖 生成第 {episode} 集配音 (有道 TTS - 男声)")
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
        output_file = episode_dir / f"voice_{i:04d}.mp3"

        print(f"[{i+1}/{len(subtitles)}] ", end="", flush=True)

        if generate_voice_youdao(text, str(output_file)):
            success += 1
            print(f"✅")
        else:
            print(f"❌")

        # 避免请求过快
        if (i + 1) % 10 == 0:
            time.sleep(1)

    print(f"\n✅ 完成! 成功生成 {success}/{len(subtitles)} 个音频文件")

    # 合并音频
    if success > 0:
        merge_audio(episode_dir, episode)

    return success > 0


def merge_audio(episode_dir: Path, episode: str):
    """合并所有音频文件"""
    print("\n📦 合并音频文件...")

    merged_file = episode_dir / f"episode{episode}_merged.mp3"

    # 创建文件列表
    filelist = episode_dir / "filelist.txt"
    with open(filelist, "w") as f:
        for i in range(10000):
            audio_file = episode_dir / f"voice_{i:04d}.mp3"
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

    parser = argparse.ArgumentParser(description="使用有道 TTS 生成配音")
    parser.add_argument("--episode", "-e", help="剧集编号 (01-11)")
    parser.add_argument("--test", "-t", help="测试文本")
    parser.add_argument("--list", "-l", action="store_true", help="列出可用语音")

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║          🎙️ 有道配音生成工具 (免费中文男声)               ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    if args.list:
        list_voices()
        return

    if args.test:
        output = OUTPUT_DIR / "test_male.mp3"
        print(f"测试生成: {args.test}")
        if generate_voice_youdao(args.test, str(output)):
            print(f"✅ 输出: {output}")
        return

    if not args.episode:
        parser.print_help()
        print("""

📌 使用示例:

  # 列出可用语音
  python3 scripts/generate_voiceover_youdao.py --list

  # 测试语音
  python3 scripts/generate_voiceover_youdao.py --test "货币战争"

  # 生成第01集 (中文男声)
  python3 scripts/generate_voiceover_youdao.py --episode 01
        """)
        return

    generate_episode(args.episode)


if __name__ == "__main__":
    main()
