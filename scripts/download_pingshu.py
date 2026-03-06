#!/usr/bin/env python3
"""
单田芳评书音频下载工具

支持从以下平台下载音频:
- YouTube
- 喜马拉雅 (ximalaya.com)
- 蜻蜓FM (qingting.fm)

Usage:
    python3 scripts/download_pingshu.py --url "https://www.youtube.com/watch?v=..."
    python3 scripts/download_pingshu.py --search "单田芳 评书"
"""

import os
import subprocess
import argparse
from pathlib import Path
import sys

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "data" / "audio" / "source"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def download_audio(url, output_format="mp3", quality="192k"):
    """下载音视频并提取音频"""
    print(f"\n{'='*60}")
    print(f"📥 下载音频: {url}")
    print(f"   输出目录: {OUTPUT_DIR}")
    print(f"   格式: {output_format}")
    print(f"{'='*60}\n")

    # yt-dlp 命令
    cmd = [
        "yt-dlp",
        "-x",  # 提取音频
        "--audio-format", output_format,
        "--audio-quality", quality,
        "-o", str(OUTPUT_DIR / "%(title)s.%(ext)s"),
    ]

    # 添加 URL
    cmd.append(url)

    print(f"运行命令: {' '.join(cmd)}\n")

    try:
        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            print("✅ 下载成功!")
            print(f"\n📂 文件保存在: {OUTPUT_DIR}")

            # 列出下载的文件
            files = list(OUTPUT_DIR.glob(f"*.{output_format}"))
            if files:
                print(f"\n📄 已下载的文件:")
                for f in files:
                    size_mb = f.stat().st_size / (1024 * 1024)
                    print(f"   - {f.name} ({size_mb:.1f} MB)")
        else:
            print(f"❌ 下载失败: {result.stderr}")
            return False

    except Exception as e:
        print(f"❌ 错误: {e}")
        return False

    return True


def list_popular_pingshu():
    """显示推荐的单田芳评书列表"""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║          单田芳评书推荐列表                                   ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  以下是一些热门单田芳评书（可在喜马拉雅/蜻蜓FM找到）:        ║
║                                                                  ║
║  1. 乱世枭雄                                                   ║
║  2. 童林传                                                     ║
║  3. 三侠剑                                                     ║
║  4. 白眉英雄                                                   ║
║  5. 三遂五鼠闹东京                                             ║
║  6. 隋唐演义                                                   ║
║  7. 明英烈                                                     ║
║  8. 铁伞怪侠                                                   ║
║  9. 百年风云                                                   ║
║  10. 话说中国                                                  ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
""")


def main():
    parser = argparse.ArgumentParser(
        description="单田芳评书音频下载工具",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 下载单个视频/音频
  python3 scripts/download_pingshu.py --url "https://www.youtube.com/watch?v=..."

  # 下载喜马拉雅专辑
  python3 scripts/download_pingshu.py --url "https://www.ximalaya.com/..."

  # 指定输出格式
  python3 scripts/download_pingshu.py --url "..." --format mp3 --quality 320k
        """
    )

    parser.add_argument(
        "--url", "-u",
        help="音视频 URL (YouTube, 喜马拉雅, 蜻蜓FM 等)"
    )
    parser.add_argument(
        "--format", "-f",
        default="mp3",
        choices=["mp3", "wav", "m4a", "flac", "aac"],
        help="输出格式 (默认: mp3)"
    )
    parser.add_argument(
        "--quality", "-q",
        default="192k",
        help="音频质量 (默认: 192k)"
    )
    parser.add_argument(
        "--list",
        "-l",
        action="store_true",
        help="显示推荐的评书列表"
    )

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║          📥 单田芳评书音频下载工具                            ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    if args.list:
        list_popular_pingshu()
        return

    if not args.url:
        parser.print_help()
        print(f"\n📂 输出目录: {OUTPUT_DIR}")
        print("""
\n💡 提示:
   1. 打开喜马拉雅或蜻蜓FM
   2. 找到单田芳评书页面
   3. 复制 URL
   4. 运行: python3 scripts/download_pingshu.py --url "复制的URL"
        """)
        return

    # 下载音频
    download_audio(args.url, args.format, args.quality)


if __name__ == "__main__":
    main()
