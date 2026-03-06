#!/usr/bin/env python3
"""
通用音频下载工具 - 支持多个平台

Usage:
    python3 scripts/download_audio.py --url "视频URL"
"""

import os
import subprocess
import argparse
from pathlib import Path
import sys

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "data" / "audio" / "source"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def download(url, format="mp3", quality="192k"):
    """下载音视频并提取音频"""
    print(f"\n{'='*60}")
    print(f"📥 下载: {url}")
    print(f"   格式: {format}, 音质: {quality}")
    print(f"   输出: {OUTPUT_DIR}")
    print('='*60)

    cmd = [
        "yt-dlp",
        "-x",  # 提取音频
        "--audio-format", format,
        "--audio-quality", quality,
        "-o", str(OUTPUT_DIR / "%(title)s.%(ext)s"),
        "--verbose",
        url
    ]

    print(f"\n命令: {' '.join(cmd)}\n")

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)

        if result.returncode == 0:
            print("✅ 下载成功!")
            return True
        else:
            print(f"❌ 失败: {result.stderr}")
            return False
    except subprocess.TimeoutExpired:
        print("⏱️  下载超时")
        return False
    except Exception as e:
        print(f"❌ 错误: {e}")
        return False


def show_help():
    """显示帮助信息"""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║          📥 通用音频下载工具                              ║
╚══════════════════════════════════════════════════════════════════╝

支持平台:
  - YouTube
  - 喜马拉雅
  - 蜻蜓FM
  - B站
  - 以及其他 yt-dlp 支持的网站

使用方法:
  python3 scripts/download_audio.py --url "URL"

示例:
  # YouTube
  python3 scripts/download_audio.py --url "https://www.youtube.com/watch?v=..."

  # 喜马拉雅
  python3 scripts/download_audio.py --url "https://www.ximalaya.com/sound/..."

  # 指定格式
  python3 scripts/download_audio.py --url "URL" --format m4a --quality 320k

📂 输出目录: data/audio/source/
    """)


def main():
    parser = argparse.ArgumentParser(description="通用音频下载工具")
    parser.add_argument("--url", "-u", help="音视频URL")
    parser.add_argument("--format", "-f", default="mp3", help="输出格式")
    parser.add_argument("--quality", "-q", default="192k", help="音频质量")
    parser.add_argument("--help", "-h", action="store_true", help="显示帮助")

    args = parser.parse_args()

    if not args.url:
        show_help()
        return

    download(args.url, args.format, args.quality)

    # 显示下载的文件
    files = list(OUTPUT_DIR.glob(f"*.{args.format}"))
    if files:
        print(f"\n📂 已下载的文件:")
        for f in files:
            size_mb = f.stat().st_size / (1024 * 1024)
            print(f"   - {f.name} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    main()
