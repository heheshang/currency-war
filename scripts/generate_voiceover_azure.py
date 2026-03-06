#!/usr/bin/env python3
"""
Azure TTS Voiceover Generator for Currency Wars Documentary

Uses Azure Cognitive Services TTS to generate voiceover audio.
Supports Chinese voices with narrator style.

Usage:
    # Set Azure API key and region
    export AZURE_SPEECH_KEY="your-api-key"
    export AZURE_SPEECH_REGION="eastus"

    # Generate voiceover
    python3 scripts/generate_voiceover_azure.py --episode 01
    python3 scripts/generate_voiceover_azure.py --episode 01 --voice "zh-CN-XiaoxiaoNeural"
    python3 scripts/generate_voiceover_azure.py --episode 01 --voice "zh-CN-YunxiNeural" --style narrative
"""

import argparse
import os
import subprocess
import re
import asyncio
import aiohttp
from pathlib import Path
from typing import List, Dict, Optional
import sys

# Add project root to path
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

# Azure TTS endpoint
AZURE_TTS_URL = "https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"

# Chinese narrator voices
NARRATOR_VOICES = {
    # Standard Chinese voices
    "zh-CN-XiaoxiaoNeural": "晓晓 - 亲和女声",
    "zh-CN-YunxiNeural": "云希 - 自然男声",
    "zh-CN-YunyangNeural": "云扬 - 专业男声",
    "zh-CN-XiaoyiNeural": "晓伊 - 活泼女声",
    # Chinese-American accent
    "zh-CN-US-XiaoxiaoNeural": "晓晓(美式) - 女声",
    # Cantonese
    "zh-HK-HiuGaaiNeural": "晓佳 - 广东话女声",
    "zh-HK-HiuMaanNeural": "晓敏 - 广东话女声",
    "zh-TW-HsiaoChenNeural": "晓晨 - 台湾女声",
    "zh-TW-YunJheNeural": "云喆 - 台湾男声",
}

# Styles for neural voices
VOICE_STYLES = [
    "advertisement_upbeat",
    "affectionate",
    "angry",
    "assistant",
    "calm",
    "chat",
    "cheerful",
    "customerservice",
    "depressed",
    "disgruntled",
    "documentary_narration",
    "embarrassed",
    "empathetic",
    "energetic",
    "fearful",
    "friendly",
    "gentle",
    "happy",
    "hopeful",
    "lyrical",
    "narration",
    "narration_relaxed",
    "newscast",
    "newscast_casual",
    "newscast_formal",
    "poetry_reading",
    "sad",
    "serious",
    "sports_commentary",
    "sports_commentary_excited",
    "whispering",
    "worried",
]


def get_subtitle_texts(episode: str) -> List[Dict]:
    """Extract subtitle texts with timing from episode subtitle file."""
    if episode.lower() == "trailer":
        subtitle_file = PROJECT_ROOT / "src" / "subtitles" / "trailer.ts"
    else:
        # Try both episode formats
        subtitle_file = PROJECT_ROOT / "src" / "subtitles" / f"episode{episode.zfill(2)}.ts"
        if not subtitle_file.exists():
            subtitle_file = PROJECT_ROOT / "src" / "subtitles" / f"episode{episode}.ts"

    if not subtitle_file.exists():
        print(f"Error: Subtitle file not found: {subtitle_file}")
        return []

    with open(subtitle_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Handle both array and export formats
    patterns = [
        r'\{\s*startFrame:\s*(\d+),\s*endFrame:\s*(\d+),\s*text:\s*"([^"]*)"',
        r'startFrame:\s*(\d+).*?endFrame:\s*(\d+).*?text:\s*"([^"]*)"',
    ]

    subtitles = []
    for pattern in patterns:
        matches = re.findall(pattern, content, re.DOTALL)
        for start, end, text in matches:
            if text and text.strip():
                subtitles.append({
                    "startFrame": int(start),
                    "endFrame": int(end),
                    "text": text.strip()
                })

    return subtitles


async def generate_azure_voice(
    text: str,
    voice: str,
    output_file: str,
    style: str = "narration",
    pitch: str = "+0Hz",
    rate: str = "+0%"
) -> bool:
    """Generate voice audio using Azure TTS REST API."""
    import xml.etree.ElementTree as ET

    # Get API key and region from environment
    api_key = os.environ.get("AZURE_SPEECH_KEY")
    region = os.environ.get("AZURE_SPEECH_REGION", "eastus")

    if not api_key:
        print("Error: AZURE_SPEECH_KEY not set")
        return False

    # Build SSML
    ssml = f"""<?xml version="1.0" encoding="UTF-8"?>
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="zh-CN">
  <voice name="{voice}">
    <mstts:express-as type="{style}" style="narration">
      <prosody pitch="{pitch}" rate="{rate}">
        {text}
      </prosody>
    </mstts:express-as>
  </voice>
</speak>"""

    headers = {
        "Ocp-Apim-Subscription-Key": api_key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
    }

    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"

    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(url, headers=headers, data=ssml.encode()) as response:
                if response.status == 200:
                    audio_data = await response.read()
                    with open(output_file, "wb") as f:
                        f.write(audio_data)
                    return True
                else:
                    error_text = await response.text()
                    print(f"Azure TTS error: {response.status} - {error_text}")
                    return False
    except Exception as e:
        print(f"Error generating voice: {e}")
        return False


def generate_voice_sync(
    text: str,
    voice: str,
    output_file: str,
    style: str = "narration",
    pitch: str = "+0Hz",
    rate: str = "+0%"
) -> bool:
    """Synchronous wrapper for Azure TTS."""
    try:
        asyncio.run(generate_azure_voice(text, voice, output_file, style, pitch, rate))
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False


def list_voices():
    """List available Azure TTS voices."""
    api_key = os.environ.get("AZURE_SPEECH_KEY")
    region = os.environ.get("AZURE_SPEACH_REGION", "eastus")

    if not api_key:
        print("Error: AZURE_SPEECH_KEY not set")
        return

    import aiohttp

    headers = {
        "Ocp-Apim-Subscription-Key": api_key,
    }
    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/voices/list"

    try:
        async def fetch_voices():
            async with aiohttp.ClientSession() as session:
                async with session.get(url, headers=headers) as response:
                    return await response.json()

        voices = asyncio.run(fetch_voices())

        print("\nChinese Voices:")
        print("-" * 60)
        for voice in voices:
            if voice["Locale"].startswith("zh-"):
                print(f"{voice['Name']:50} {voice['Locale']:15} {voice['Gender']}")
    except Exception as e:
        print(f"Error listing voices: {e}")


def generate_episode_voiceover(
    episode: str,
    voice: str = "zh-CN-YunxiNeural",
    output_format: str = "mp3",
    style: str = "narration"
):
    """Generate complete voiceover for an episode."""
    print(f"\n{'='*60}")
    print(f"Generating voiceover for Episode {episode}")
    print(f"Voice: {voice}")
    print(f"Style: {style}")
    print(f"{'='*60}\n")

    output_dir = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover" / f"episode{episode}"
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

        if generate_voice_sync(text, voice, str(output_file), style):
            success_count += 1

    print(f"\n{success_count}/{len(subtitles)} voice files generated!")

    if success_count > 0:
        print("\nMerging voice files...")
        merged_file = output_dir / f"episode{episode}_merged.m4a"

        filelist = output_dir / "filelist.txt"
        with open(filelist, "w") as f:
            for i in range(len(subtitles)):
                f.write(f"file 'voice_{i:04d}.{output_format}'\n")

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


def main():
    parser = argparse.ArgumentParser(
        description="Generate voiceover audio using Azure TTS"
    )
    parser.add_argument(
        "--episode", "-e",
        help="Episode number (01-11)"
    )
    parser.add_argument(
        "--voice", "-v",
        default="zh-CN-YunxiNeural",
        help=f"Voice to use (default: zh-CN-YunxiNeural). Use --list to see available voices."
    )
    parser.add_argument(
        "--style", "-s",
        default="narration",
        help=f"Voice style (default: narration). Use --styles to see available styles."
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="List available Azure TTS voices"
    )
    parser.add_argument(
        "--styles",
        action="store_true",
        help="List available voice styles"
    )
    parser.add_argument(
        "--format", "-f",
        default="mp3",
        choices=["mp3", "wav", "m4a"],
        help="Output audio format (default: mp3)"
    )
    parser.add_argument(
        "--test", "-t",
        help="Test voice with single text"
    )

    args = parser.parse_args()

    if args.list:
        list_voices()
        return

    if args.styles:
        print("\nAvailable Voice Styles:")
        print("-" * 40)
        for style in VOICE_STYLES:
            print(f"  {style}")
        return

    if args.test:
        output = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover" / f"test.{args.format}"
        output.parent.mkdir(parents=True, exist_ok=True)

        print(f"Generating: {args.test}")
        print(f"Voice: {args.voice}")
        print(f"Style: {args.style}")

        if generate_voice_sync(args.test, args.voice, str(output), args.style):
            print(f"Output: {output}")
        return

    if not args.episode:
        parser.print_help()
        print("\n\nExamples:")
        print("  # Set Azure API key")
        print('  export AZURE_SPEECH_KEY="your-key"')
        print('  export AZURE_SPEECH_REGION="eastus"')
        print("")
        print("  # Generate episode with default voice (Yunxi - male narrator)")
        print("  python3 scripts/generate_voiceover_azure.py --episode 01")
        print("")
        print("  # Generate with different voice")
        print("  python3 scripts/generate_voiceover_azure.py --episode 01 --voice zh-CN-XiaoxiaoNeural")
        print("")
        print("  # Test voice")
        print('  python3 scripts/generate_voiceover_azure.py --test "货币战争"'  )
        return

    # Generate episode voiceover
    generate_episode_voiceover(args.episode, args.voice, args.format, args.style)


if __name__ == "__main__":
    main()
