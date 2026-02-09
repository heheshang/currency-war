#!/bin/bash
# 快速下载音频文件脚本
# 使用curl从FreePD下载免费音频

AUDIO_DIR="public/assets/audio"

echo "🎵 Audio File Quick Downloader"
echo "================================"
echo ""

# 创建目录
mkdir -p "$AUDIO_DIR/bgm"
mkdir -p "$AUDIO_DIR/sfx"

# 检查是否已存在占位文件
if [ -f "$AUDIO_DIR/bgm/tension.mp3 ] && [ $(stat -f%z "$AUDIO_DIR/bgm/tension.mp3") -lt 1000 ]; then
    echo "⚠️  Placeholder files detected."
    echo ""
    echo "📝 Audio files need to be downloaded manually."
    echo ""
    echo "🌐 Recommended sources:"
    echo "1. FreePD (No attribution):"
    echo "   https://freepd.com/mysterious.html"
    echo "   https://freepd.com/dark.html"
    echo "   https://freepd.com/epic.html"
    echo ""
    echo "2. Pixabay Music (Free account required):"
    echo "   https://pixabay.com/music/"
    echo ""
    echo "3. Incompetech (Attribution required):"
    echo "   https://incompetech.com/"
    echo ""
    echo "📥 Quick download links for FreePD:"
    echo "   https://freepd.com/music/dark_puzzle.mp3"
    echo "   https://freepd.com/music/dark_intrigue.mp3"
    echo "   https://freepd.com/music/epic_battle.mp3"
    echo ""
    echo "💾 After downloading, place files in:"
    echo "   $AUDIO_DIR/bgm/"
    echo "   $AUDIO_DIR/sfx/"
    echo ""
    echo "✅ See scripts/AUDIO_DOWNLOAD_GUIDE.md for detailed instructions"
else
    echo "✅ Audio files appear to exist."
    ls -lh "$AUDIO_DIR/bgm/" "$AUDIO_DIR/sfx/" 2>/dev/null | tail -20
fi
