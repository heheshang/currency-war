#!/usr/bin/env python3
"""
从解说词脚本生成配音文件

Usage:
    python3 scripts/generate_voiceover_from_scripts.py
"""

import subprocess
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
SCRIPTS_FILE = PROJECT_ROOT / ".sisyphus" / "drafts" / "episode01-scripts.md"
OUTPUT_DIR = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover" / "episode01"

# Edge TTS 语音配置
VOICE = "zh-CN-YunyangNeural"  # 云扬 - 成熟稳重


def parse_scripts_file(file_path: Path) -> list[dict]:
    """解析解说词脚本文件，提取每个场景的内容"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 按 ## Scene 分割
    scenes = []
    pattern = r'## Scene (\d+): (.+?) \((\d+)秒\)\n\n(.+?)(?=\n---|\n## |$)'
    matches = re.findall(pattern, content, re.DOTALL)
    
    for match in matches:
        scene_num = int(match[0])
        title = match[1].strip()
        duration = int(match[2])
        text = match[3].strip()
        
        # 清理文本中的多余换行
        text = re.sub(r'\n+', ' ', text)
        text = re.sub(r'\s+', ' ', text)
        
        scenes.append({
            'scene': scene_num,
            'title': title,
            'duration': duration,
            'text': text
        })
    
    return scenes


def get_audio_duration(file_path: Path) -> float:
    """使用 ffprobe 获取音频时长（秒）"""
    cmd = [
        "ffprobe", "-v", "quiet",
        "-print_format", "json",
        "-show_format", str(file_path)
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        return float(data["format"]["duration"])
    except Exception as e:
        print(f"   ⚠️ 无法获取时长: {e}")
        return 0.0


def generate_voiceover(text: str, output_file: Path) -> tuple[bool, float]:
    """使用 Edge TTS 生成配音"""
    cmd = [
        "edge-tts",
        "-t", text,
        "-v", VOICE,
        "--write-media", str(output_file)
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if result.returncode == 0 and output_file.exists():
            duration = get_audio_duration(output_file)
            return True, duration
        else:
            print(f"   ❌ 生成失败: {result.stderr}")
            return False, 0.0
    except subprocess.TimeoutExpired:
        print(f"   ❌ 超时")
        return False, 0.0
    except Exception as e:
        print(f"   ❌ 错误: {e}")
        return False, 0.0


def main():
    print("""
╔══════════════════════════════════════════════════════════════════╗
║          🎙️ Episode01 配音生成工具                              ║
║          语音: zh-CN-YunyangNeural (云扬)                        ║
╚══════════════════════════════════════════════════════════════════╝
    """)
    
    # 确保输出目录存在
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # 解析脚本
    print(f"📖 读取解说词: {SCRIPTS_FILE}")
    scenes = parse_scripts_file(SCRIPTS_FILE)
    print(f"📊 找到 {len(scenes)} 个场景\n")
    
    if not scenes:
        print("❌ 未找到场景内容")
        return
    
    # 生成配音
    results = []
    total_duration = 0.0
    
    for scene in scenes:
        print(f"[Scene {scene['scene']}] {scene['title']} (预估 {scene['duration']}秒)")
        
        output_file = OUTPUT_DIR / f"voice_{scene['scene']-1:04d}.mp3"
        print(f"   生成: {output_file.name}")
        
        success, actual_duration = generate_voiceover(scene['text'], output_file)
        
        if success:
            total_duration += actual_duration
            print(f"   ✅ 完成: {actual_duration:.1f}秒")
            results.append({
                'scene': scene['scene'],
                'title': scene['title'],
                'file': output_file.name,
                'estimated': scene['duration'],
                'actual': round(actual_duration, 1)
            })
        else:
            print(f"   ❌ 失败")
    
    # 输出统计
    print(f"\n{'='*60}")
    print(f"📊 生成统计:")
    print(f"   成功: {len(results)}/{len(scenes)} 个场景")
    print(f"   总时长: {total_duration:.1f}秒 ({total_duration/60:.1f}分钟)")
    
    # 保存时长数据（供字幕生成使用）
    durations_file = OUTPUT_DIR / "scene_durations.json"
    with open(durations_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"   时长数据: {durations_file}")
    
    # 合并音频
    if len(results) == len(scenes):
        print("\n📦 合并音频文件...")
        merge_audio_files()
    
    print("\n✅ 完成！")


def merge_audio_files():
    """合并所有音频文件"""
    merged_file = OUTPUT_DIR / "episode01_merged.mp3"
    
    # 创建文件列表
    filelist = OUTPUT_DIR / "filelist.txt"
    with open(filelist, 'w') as f:
        for i in range(8):
            audio_file = OUTPUT_DIR / f"voice_{i:04d}.mp3"
            if audio_file.exists():
                f.write(f"file '{audio_file.absolute()}'\n")
    
    # 使用 ffmpeg 合并
    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", str(filelist),
        "-c:a", "libmp3lame", "-b:a", "128k",
        str(merged_file)
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        size_mb = merged_file.stat().st_size / (1024 * 1024)
        print(f"   ✅ 合并完成: {merged_file.name} ({size_mb:.1f} MB)")
    except subprocess.CalledProcessError as e:
        print(f"   ⚠️ 合并失败: {e}")


if __name__ == "__main__":
    main()