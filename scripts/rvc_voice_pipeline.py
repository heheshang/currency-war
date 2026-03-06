#!/usr/bin/env python3
"""
RVC Voice Training and Inference Script for Currency Wars

This script helps train a RVC (Retrieval-based Voice Conversion) model
for generating Tian Fangfang style narration.

Usage:
    # 1. Prepare audio data
    python3 scripts/rvc_voice_pipeline.py --prepare --input-dir /path/to/audio

    # 2. Train model
    python3 scripts/rvc_voice_pipeline.py --train --name tianfangfang

    # 3. Generate voiceover
    python3 scripts/rvc_voice_pipeline.py --generate --input text.txt --model tianfangfang
"""

import argparse
import os
import subprocess
import shutil
from pathlib import Path
import sys

# Project paths
PROJECT_ROOT = Path(__file__).parent.parent
RVC_DIR = PROJECT_ROOT / "rvc_models"
AUDIO_INPUT_DIR = PROJECT_ROOT / "data" / "audio" / "source"
TRAIN_DATA_DIR = PROJECT_ROOT / "data" / "training"
MODEL_OUTPUT_DIR = PROJECT_ROOT / "models" / "rvc"

# Ensure directories exist
RVC_DIR.mkdir(parents=True, exist_ok=True)
AUDIO_INPUT_DIR.mkdir(parents=True, exist_ok=True)
TRAIN_DATA_DIR.mkdir(parents=True, exist_ok=True)
MODEL_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def check_ffmpeg():
    """Check if ffmpeg is installed."""
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False


def install_rvc():
    """Install RVC dependencies."""
    print("Installing RVC...")

    # Clone RVC if not exists
    rvc_repo = PROJECT_ROOT / "Retrieval-based-Voice-Conversion"
    if not rvc_repo.exists():
        print("Cloning RVC repository...")
        subprocess.run([
            "git", "clone",
            "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion.git",
            str(rvc_repo)
        ], check=True)

    # Install requirements
    print("Installing Python dependencies...")
    subprocess.run([
        "pip", "install", "-r", str(rvc_repo / "requirements.txt")
    ], check=True)

    print("RVC installation complete!")


def download_sample_audio():
    """Download sample audio for testing."""
    print("\n" + "="*60)
    print("Downloading sample Tian Fangfang audio...")
    print("="*60)

    # Create sample download script
    download_script = PROJECT_ROOT / "scripts" / "download_tianfangfang.py"

    script_content = '''#!/usr/bin/env python3
"""
Download Tian Fangfang Pingshu audio from public sources.

Note: These are public domain/CC licensed samples. For production use,
please purchase or obtain proper licensing.
"""

import os
import urllib.request
from pathlib import Path

# Sample URLs (replace with actual sources)
SAMPLE_URLS = [
    # These are placeholder URLs - replace with actual audio sources
    # "https://example.com/tianfangfang_sample_1.mp3",
]

OUTPUT_DIR = Path(__file__).parent.parent / "data" / "audio" / "source"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def download_file(url, filename):
    """Download a file from URL."""
    output_path = OUTPUT_DIR / filename
    if output_path.exists():
        print(f"Skipping {filename} (already exists)")
        return

    print(f"Downloading {filename}...")
    try:
        urllib.request.urlretrieve(url, output_path)
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

if __name__ == "__main__":
    print("Sample audio downloader")
    print("Please add your audio files to:")
    print(f"  {OUTPUT_DIR}")
    print("")
    print("Recommended: Collect 30+ minutes of Tian Fangfang pingshu audio")
    print("Sources: Ximalaya, Qingting FM, or purchase official audio")
'''

    with open(download_script, "w") as f:
        f.write(script_content)

    print(f"\nPlease add audio files to: {AUDIO_INPUT_DIR}")
    print("Recommended: 30+ minutes of Tian Fangfang pingshu audio")


def prepare_audio(input_dir: Path = None):
    """Prepare audio for training."""
    if input_dir is None:
        input_dir = AUDIO_INPUT_DIR

    print("\n" + "="*60)
    print("Preparing audio data for training...")
    print("="*60)

    if not check_ffmpeg():
        print("Error: ffmpeg not found. Please install ffmpeg first.")
        return False

    # Create processed directory
    processed_dir = TRAIN_DATA_DIR / "processed"
    processed_dir.mkdir(parents=True, exist_ok=True)

    # Find all audio files
    audio_extensions = [".mp3", ".wav", ".flac", ".m4a", ".ogg"]
    audio_files = []
    for ext in audio_extensions:
        audio_files.extend(input_dir.glob(f"*{ext}"))
        audio_files.extend(input_dir.glob(f"*{ext.upper()}"))

    if not audio_files:
        print(f"No audio files found in {input_dir}")
        print("Please add audio files first!")
        return False

    print(f"Found {len(audio_files)} audio files")

    # Process each file
    for i, audio_file in enumerate(audio_files):
        print(f"\n[{i+1}/{len(audio_files)}] Processing: {audio_file.name}")

        # Output paths
        wav_path = processed_dir / f"{audio_file.stem}.wav"

        # Convert to WAV 16kHz mono
        cmd = [
            "ffmpeg", "-y",
            "-i", str(audio_file),
            "-ar", "16000",  # 16kHz
            "-ac", "1",       # Mono
            "-acodec", "pcm_s16le",
            str(wav_path)
        ]

        try:
            subprocess.run(cmd, capture_output=True, check=True)
            print(f"  ✓ Converted to {wav_path.name}")
        except subprocess.CalledProcessError as e:
            print(f"  ✗ Failed: {e}")

    print(f"\n✓ Audio preprocessing complete!")
    print(f"  Output: {processed_dir}")

    # Create filelist
    filelist_path = TRAIN_DATA_DIR / "filelist.txt"
    with open(filelist_path, "w") as f:
        for wav_file in processed_dir.glob("*.wav"):
            f.write(f"{wav_file.absolute()}\n")

    print(f"  Filelist: {filelist_path}")

    return True


def train_model(
    model_name: str = "tianfangfang",
    epochs: int = 100,
    batch_size: int = 32,
    pitch_method: str = "harvest"
):
    """Train RVC model."""
    print("\n" + "="*60)
    print(f"Training RVC model: {model_name}")
    print("="*60)

    rvc_repo = PROJECT_ROOT / "Retrieval-based-Voice-Conversion"
    if not rvc_repo.exists():
        print("RVC not installed. Installing...")
        install_rvc()

    # Check training data
    processed_dir = TRAIN_DATA_DIR / "processed"
    if not processed_dir.exists() or not list(processed_dir.glob("*.wav")):
        print("No training data found. Please run --prepare first.")
        return False

    # Create model directory
    model_dir = MODEL_OUTPUT_DIR / model_name
    model_dir.mkdir(parents=True, exist_ok=True)

    # Training command (adjust based on RVC version)
    # Note: RVC training requires GPU
    cmd = [
        "python",
        str(rvc_repo / "train.py"),
        "--name", model_name,
        "--epochs", str(epochs),
        "--batch_size", str(batch_size),
        "--f0method", pitch_method,
        "--train_path", str(processed_dir),
    ]

    print(f"\nTraining command:")
    print(f"  {' '.join(cmd)}")
    print(f"\nNote: Training requires GPU. On CPU it will be very slow.")
    print(f"Consider using Google Colab or RunPod for GPU training.")

    # Run training (commented out by default - uncomment to run)
    # subprocess.run(cmd)

    print("\nTo start training manually:")
    print(f"  cd {rvc_repo}")
    print(f"  python train.py --name {model_name}")

    return True


def generate_voice(
    text: str,
    model_name: str = "tianfangfang",
    output_file: str = None
):
    """Generate voice using trained model."""
    print("\n" + "="*60)
    print(f"Generating voice with model: {model_name}")
    print("="*60)

    if output_file is None:
        output_file = PROJECT_ROOT / "public" / "assets" / "audio" / "voiceover" / "generated.mp3"

    # Check if model exists
    model_path = MODEL_OUTPUT_DIR / model_name
    if not model_path.exists():
        print(f"Model not found: {model_path}")
        print("Please train the model first with --train")
        return False

    # Use RVC for inference
    # Note: This is a placeholder - adjust based on RVC version
    print(f"\nText to generate: {text}")
    print(f"Output file: {output_file}")

    print("\nTo generate voice manually:")
    print(f"  cd {PROJECT_ROOT / 'Retrieval-based-Voice-Conversion'}")
    print(f"  python infer.py --model {model_name} --text \"{text}\"")

    return True


def list_commands():
    """List all available commands."""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║          RVC Voice Pipeline for Currency Wars                   ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Step 1: Prepare Audio Data                                    ║
║  ─────────────────────────────                                   ║
║  1. Collect Tian Fangfang pingshu audio (30+ minutes)         ║
║  2. Put audio files in: data/audio/source/                    ║
║  3. Run: python3 scripts/rvc_voice_pipeline.py --prepare     ║
║                                                                  ║
║  Step 2: Train Model                                           ║
║  ──────────────────                                              ║
║  Run: python3 scripts/rvc_voice_pipeline.py --train           ║
║       --name tianfangfang --epochs 100                         ║
║                                                                  ║
║  Step 3: Generate Voice                                         ║
║  ───────────────────────                                        ║
║  Run: python3 scripts/rvc_voice_pipeline.py --generate       ║
║       --text "货币战争"                                         ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝

Quick Start:
1. Add audio files to: data/audio/source/
2. Run: python3 scripts/rvc_voice_pipeline.py --prepare
3. Run: python3 scripts/rvc_voice_pipeline.py --train --name tianfangfang
""")


def main():
    parser = argparse.ArgumentParser(
        description="RVC Voice Training and Inference Pipeline"
    )

    parser.add_argument(
        "--prepare",
        action="store_true",
        help="Prepare audio data for training"
    )
    parser.add_argument(
        "--train",
        action="store_true",
        help="Train RVC model"
    )
    parser.add_argument(
        "--generate",
        action="store_true",
        help="Generate voice from text"
    )
    parser.add_argument(
        "--input-dir",
        type=Path,
        help="Input directory for audio files"
    )
    parser.add_argument(
        "--name",
        type=str,
        default="tianfangfang",
        help="Model name"
    )
    parser.add_argument(
        "--epochs",
        type=int,
        default=100,
        help="Number of training epochs"
    )
    parser.add_argument(
        "--batch-size",
        type=int,
        default=32,
        help="Batch size for training"
    )
    parser.add_argument(
        "--text",
        type=str,
        help="Text to generate"
    )
    parser.add_argument(
        "--output",
        type=str,
        help="Output file path"
    )
    parser.add_argument(
        "--install",
        action="store_true",
        help="Install RVC dependencies"
    )
    parser.add_argument(
        "--download-sample",
        action="store_true",
        help="Download sample audio (placeholder)"
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="List all commands"
    )

    args = parser.parse_args()

    if args.list or (not args.prepare and not args.train and
                     not args.generate and not args.install and
                     not args.download_sample):
        list_commands()
        return

    if args.download_sample:
        download_sample_audio()
        return

    if args.install:
        install_rvc()
        return

    if args.prepare:
        prepare_audio(args.input_dir)
        return

    if args.train:
        train_model(args.name, args.epochs, args.batch_size)
        return

    if args.generate:
        if not args.text:
            print("Error: --text is required for generation")
            return
        generate_voice(args.text, args.name, args.output)
        return


if __name__ == "__main__":
    main()
