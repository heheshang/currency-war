#!/usr/bin/env python3
"""
TTS Voiceover Generator for Currency Wars Documentary

Uses macOS built-in 'say' command to generate voiceover audio from subtitles.
Supports Chinese (Tingting, Meijia, Sinji) and English voices.

Usage:
    python3 scripts/generate_voiceover.py --episode 01 --voice Tingting
    python3 scripts/generate_voiceover.py --episode 01 --voice en-US --text "Hello world"
"""

import argparse
import os
import subprocess
import sys
import re
from pathlib import Path
from typing import List, Dict

# Add project root to path
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

# Available voices
VOICES = {
    # Chinese (female)
    "zh-CN": "Tingting",
    "zh-TW": "Meijia",
    "zh-HK": "Sinji",
    # English (deep male - Fred is default)
    "en-US": "Fred",       # Deep male voice
    "en-GB": "Daniel",     # UK male
}

# Output directory
OUTPUT_DIR = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover"


def get_subtitle_texts(episode: str) -> List[Dict]:
    """Extract subtitle texts with timing from episode subtitle file."""
    subtitle_file = PROJECT_ROOT / "src" / "subtitles" / f"episode{episode}.ts"
    
    if not subtitle_file.exists():
        print(f"Error: Subtitle file not found: {subtitle_file}")
        return []
    
    with open(subtitle_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    pattern = r'\{\s*startFrame:\s*(\d+),\s*endFrame:\s*(\d+),\s*text:\s*"([^"]*)"'
    matches = re.findall(pattern, content)
    
    subtitles = []
    for start, end, text in matches:
        if text:
            subtitles.append({
                "startFrame": int(start),
                "endFrame": int(end),
                "text": text
            })
    
    return subtitles


def generate_voice(text: str, voice: str, output_file: str, rate: int = 150) -> bool:
    """Generate voice audio using macOS say command."""
    voice_cmd = VOICES.get(voice, voice)
    escaped_text = text.replace('"', '\\"')
    
    cmd = [
        "say",
        "-v", voice_cmd,
        "-r", str(rate),
        "-o", output_file,
        "--",
        escaped_text
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error generating voice: {text[:30]}...")
        return False


def generate_episode_voiceover(episode: str, voice: str = "en-US", output_format: str = "m4a"):
    """Generate complete voiceover for an episode."""
    print(f"\n{'='*60}")
    print(f"Generating voiceover for Episode {episode}")
    print(f"Voice: {voice}")
    print(f"{'='*60}\n")
    
    output_dir = OUTPUT_DIR / f"episode{episode}"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    subtitles = get_subtitle_texts(episode)
    
    if not subtitles:
        print(f"No subtitles found for Episode {episode}")
        return False
    
    print(f"Found {len(subtitles)} subtitle entries")
    
    success_count = 0
    for i, sub in enumerate(subtitles):
        text = sub["text"]
        start_frame = sub["startFrame"]
        end_frame = sub["endFrame"]
        output_file = output_dir / f"voice_{i:04d}.{output_format}"
        
        print(f"[{i+1}/{len(subtitles)}] Frame {start_frame}-{end_frame}: {text[:40]}...")
        
        if generate_voice(text, voice, str(output_file), 150):
            success_count += 1
    
    print(f"\n{success_count}/{len(subtitles)} voice files generated!")
    
    print("\nMerging voice files...")
    merged_file = output_dir / f"episode{episode}_merged.m4a"
    
    filelist = output_dir / "filelist.txt"
    with open(filelist, "w") as f:
        for i in range(len(subtitles)):
            f.write(f"file 'voice_{i:04d}.m4a'\n")
    
    merge_cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(filelist),
        "-c:a", "aac", "-b:a", "128k", str(merged_file)
    ]
    
    try:
        subprocess.run(merge_cmd, check=True, capture_output=True)
        print(f"Merged file: {merged_file}")
    except subprocess.CalledProcessError as e:
        print(f"Warning: Failed to merge: {e}")
    
    return success_count > 0


def list_available_voices():
    """List all available TTS voices."""
    print("\nAvailable Voices:")
    print("-" * 40)
    
    result = subprocess.run(["say", "-v", "?"], capture_output=True, text=True)
    lines = result.stdout.strip().split("\n")
    
    for line in lines[:30]:  # Show first 30
        print(line)
    print(f"\n... and {len(lines)-30} more")


def main():
    parser = argparse.ArgumentParser(
        description="Generate voiceover audio for Currency Wars episodes"
    )
    parser.add_argument(
        "--episode", "-e",
        help="Episode number (01-11)"
    )
    parser.add_argument(
        "--voice", "-v",
        default="en-US",
        help="Voice to use (default: en-US = Fred deep male)"
    )
    parser.add_argument(
        "--list-voices",
        action="store_true",
        help="List available voices and exit"
    )
    parser.add_argument(
        "--text", "-t",
        help="Single text to convert (for testing)"
    )
    parser.add_argument(
        "--rate", "-r",
        type=int,
        default=150,
        help="Speech rate (default: 150 for deep male)"
    )
    parser.add_argument(
        "--format", "-f",
        default="m4a",
        choices=["aiff", "m4a", "wav", "mp3"],
        help="Output audio format (default: m4a)"
    )
    
    args = parser.parse_args()
    
    if args.list_voices:
        list_available_voices()
        return
    
    if args.text:
        # Generate single text
        output = OUTPUT_DIR / f"test.{args.format}"
        output.parent.mkdir(parents=True, exist_ok=True)
        
        print(f"Generating: {args.text}")
        if generate_voice(args.text, args.voice, str(output), args.rate):
            print(f"Output: {output}")
        return
    
    if not args.episode:
        parser.print_help()
        print("\n\nExamples:")
        print("  python3 scripts/generate_voiceover.py --episode 01 --voice Tingting")
        print("  python3 scripts/generate_voiceover.py --text \"Hello world\" --voice Samantha")
        print("  python3 scripts/generate_voiceover.py --list-voices")
        return
    
    # Generate episode voiceover
    generate_episode_voiceover(args.episode, args.voice, args.format)


if __name__ == "__main__":
    main()
