#!/usr/bin/env python3
"""
喜马拉雅音频下载工具

Usage:
    python3 scripts/download_himalaya.py --help
    python3 scripts/download_himalaya.py --url "https://www.ximalaya.com/..."
"""

import os
import subprocess
import argparse
from pathlib import Path
import re

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "data" / "audio" / "source"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def get_audio_urls(album_url):
    """获取喜马拉雅专辑的所有音频URL"""
    print(f"\n📡 获取专辑信息: {album_url}")

    # 使用 yt-dlp 获取音频列表
    cmd = [
        "yt-dlp",
        "--flat-playlist",
        "--print", "%(url)s",
        album_url
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        urls = result.stdout.strip().split('\n')
        urls = [u for u in urls if u]  # 过滤空行
        print(f"✅ 找到 {len(urls)} 个音频")
        return urls
    except subprocess.CalledProcessError as e:
        print(f"❌ 获取失败: {e.stderr}")
        return []


def download_single(url, output_format="mp3"):
    """下载单个音频"""
    print(f"\n📥 下载: {url}")

    cmd = [
        "yt-dlp",
        "-x",  # 提取音频
        "--audio-format", output_format,
        "--audio-quality", "192k",
        "-o", str(OUTPUT_DIR / "%(title)s.%(ext)s"),
        url
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ 下载成功!")
            return True
        else:
            print(f"❌ 失败: {result.stderr[:200]}")
            return False
    except Exception as e:
        print(f"❌ 错误: {e}")
        return False


def download_playlist(url, output_format="mp3"):
    """下载整个播放列表"""
    urls = get_audio_urls(url)

    if not urls:
        print("❌ 没有找到音频")
        return False

    success = 0
    for i, audio_url in enumerate(urls):
        print(f"\n[{i+1}/{len(urls)}] ", end="")
        if download_single(audio_url, output_format):
            success += 1

    print(f"\n✅ 完成! 成功下载 {success}/{len(urls)} 个音频")
    return success > 0


def main():
    parser = argparse.ArgumentParser(
        description="喜马拉雅音频下载工具"
    )
    parser.add_argument(
        "--url", "-u",
        help="喜马拉雅专辑或音频URL"
    )
    parser.add_argument(
        "--format", "-f",
        default="mp3",
        choices=["mp3", "m4a", "wav"],
        help="输出格式"
    )
    parser.add_argument(
        "--list", "-l",
        action="store_true",
        help="显示常用喜马拉雅专辑URL"
    )

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║          📥 喜马拉雅音频下载工具                            ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    if args.list:
        print("""
📌 常用单田芳评书专辑（请复制完整URL）

🎧 乱世枭雄（推荐用于训练）
https://www.ximalaya.com/album/11111450

🎧 童林传
https://www.ximalaya.com/album/11110465

🎧 三侠剑
https://www.ximalaya.com/album/11110469

🎧 白眉英雄
https://www.ximalaya.com/album/11110471

🎧 隋唐演义
https://www.ximalaya.com/album/11110473

⚠️ 注意: 部分专辑可能需要付费会员才能下载
        """)
        return

    if not args.url:
        parser.print_help()
        print(f"""
\n📂 输出目录: {OUTPUT_DIR}

💡 使用方法:
   1. 打开喜马拉雅 https://www.ximalaya.com/
   2. 搜索"单田芳"
   3. 选择一个专辑，复制浏览器地址栏的URL
   4. 运行: python3 scripts/download_himalaya.py --url "复制的URL"
        """)
        return

    # 下载
    if "album" in args.url or "sound" in args.url:
        download_playlist(args.url, args.format)
    else:
        download_single(args.url, args.format)

    # 显示下载的文件
    files = list(OUTPUT_DIR.glob(f"*.{args.format}"))
    if files:
        print(f"\n📂 已下载的文件 ({OUTPUT_DIR}):")
        for f in files:
            size_mb = f.stat().st_size / (1024 * 1024)
            print(f"   - {f.name} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    main()
