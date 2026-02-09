#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
音频文件下载脚本 - 备用方案
使用Python下载免费音频资源

音频来源：
- Pixabay Music: https://pixabay.com/music/
- FreePD: https://freepd.com/
- Freesound: https://freesound.org/
"""

import os
import sys
import urllib.request
import urllib.error
from pathlib import Path

# 设置控制台编码
if sys.platform == "win32":
    import codecs
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.buffer, "strict")
    sys.stderr = codecs.getwriter("utf-8")(sys.stderr.buffer, "strict")

# 项目根目录
PROJECT_ROOT = Path(__file__).parent.parent
AUDIO_DIR = PROJECT_ROOT / "public" / "assets" / "audio"

# 音频文件配置
AUDIO_FILES = {
    "bgm": [
        {
            "name": "tension.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2022/03/10/audio_5b357619d0.mp3",
            "description": "Suspense tension music"
        },
        {
            "name": "conspiracy.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d0.mp3",
            "description": "Mysterious atmosphere music"
        },
        {
            "name": "dramatic.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2022/03/24/audio_21fc663520.mp3",
            "description": "Dramatic cinematic music"
        },
    ],
    "sfx": [
        {
            "name": "coin-clink.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2021/08/04/audio_49667085b0.mp3",
            "description": "Coin sound effect"
        },
        {
            "name": "bell.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2022/03/10/audio_13a4412832.mp3",
            "description": "Bell sound"
        },
        {
            "name": "impact.mp3",
            "url": "https://cdn.pixabay.com/download/audio/2021/08/08/audio_06b6288505.mp3",
            "description": "Impact sound effect"
        },
    ]
}

def download_file(url: str, dest_path: Path) -> bool:
    """下载文件到指定路径"""
    try:
        print(f"  [DOWNLOAD] {url}")
        
        # 创建请求
        req = urllib.request.Request(
            url,
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        )
        
        # 下载文件
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        
        print(f"  [OK] Saved: {dest_path}")
        return True
        
    except urllib.error.HTTPError as e:
        print(f"  [ERROR] HTTP {e.code}: {e.reason}")
        return False
    except urllib.error.URLError as e:
        print(f"  [ERROR] URL: {e.reason}")
        return False
    except Exception as e:
        print(f"  [ERROR] Failed: {e}")
        return False

def main():
    print("Music File Downloader for Currency War Animation\n")
    
    # 创建目录
    for category in ["bgm", "sfx", "voiceover"]:
        category_dir = AUDIO_DIR / category
        category_dir.mkdir(parents=True, exist_ok=True)
        print(f"[DIR] Created: {category_dir}")
    
    print("\n[DOWNLOAD] Starting...\n")
    
    success_count = 0
    fail_count = 0
    
    # 下载每个分类的文件
    for category, files in AUDIO_FILES.items():
        print(f"\n--- {category.upper()} ---")
        
        for audio in files:
            dest_path = AUDIO_DIR / category / audio["name"]
            
            if download_file(audio["url"], dest_path):
                print(f"   [INFO] {audio['description']}\n")
                success_count += 1
            else:
                print(f"   [SKIP] {audio['name']}\n")
                fail_count += 1
                
                # 创建占位文件
                dest_path.write_text("# Placeholder - download failed\n")
    
    print("\n" + "=" * 50)
    print(f"[SUCCESS] Downloaded: {success_count} files")
    print(f"[FAILED] {fail_count} files")
    print("=" * 50)
    
    if fail_count > 0:
        print("\n[TIPS] Some files failed to download. You can:")
        print("   1. Manually download from:")
        print("      - Pixabay Music: https://pixabay.com/music/")
        print("      - FreePD: https://freepd.com/")
        print(f"   2. Place in: {AUDIO_DIR}")
    
    print("\n[DONE] Complete!")

if __name__ == "__main__":
    main()
