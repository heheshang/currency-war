#!/usr/bin/env python3
"""
Fully Automated RVC Voice Training Pipeline

This script automates the entire process of training a RVC voice model
for generating Tian Fangfang style narration.

Usage:
    python3 scripts/auto_train_rvc.py --full
"""

import os
import subprocess
import shutil
from pathlib import Path
import sys
import argparse

# Project paths
PROJECT_ROOT = Path(__file__).parent.parent

# Add project to path
sys.path.insert(0, str(PROJECT_ROOT))


def run_command(cmd, description="", check=True, shell=False):
    """Run a shell command with error handling."""
    print(f"\n{'='*60}")
    if description:
        print(f"  {description}")
    print(f"  Command: {' '.join(cmd) if isinstance(cmd, list) else cmd}")
    print('='*60)

    if shell:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    else:
        result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        if check:
            sys.exit(1)
        return False

    print(f"✅ Success!")
    if result.stdout:
        print(result.stdout[:500])
    return True


def check_gpu():
    """Check if GPU is available."""
    try:
        result = subprocess.run(
            ["nvidia-smi", "--query-gpu=name", "--format=csv,noheader"],
            capture_output=True, text=True
        )
        if result.returncode == 0:
            gpu_name = result.stdout.strip()
            print(f"✅ GPU detected: {gpu_name}")
            return True
    except FileNotFoundError:
        pass

    print("⚠️  No GPU detected. Training will be very slow on CPU.")
    return False


def check_ffmpeg():
    """Check if ffmpeg is installed."""
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        return True
    except FileNotFoundError:
        return False


def clone_rvc():
    """Clone RVC repository."""
    rvc_dir = PROJECT_ROOT / "Retrieval-based-Voice-Conversion"

    if rvc_dir.exists():
        print(f"✅ RVC already exists at {rvc_dir}")
        return rvc_dir

    print("Cloning RVC repository...")
    run_command([
        "git", "clone",
        "--depth", "1",
        "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion.git",
        str(rvc_dir)
    ])

    return rvc_dir


def install_requirements(rvc_dir):
    """Install RVC requirements."""
    print("Installing RVC requirements...")

    # Create a modified requirements that works with newer packages
    req_file = rvc_dir / "requirements.txt"
    if req_file.exists():
        # Install main dependencies
        run_command([
            "pip", "install",
            "torch",
            "torchaudio",
            "--index-url", "https://download.pytorch.org/whl/cu121"
        ])

        run_command([
            "pip", "install",
            "-r", str(req_file)
        ])

    # Also install additional needed packages
    run_command([
        "pip", "install",
        "numpy", "scipy", "librosa", "praat-parselmouth"
    ])


def prepare_audio(audio_dir):
    """Prepare audio data for training."""
    processed_dir = PROJECT_ROOT / "data" / "training" / "processed"
    processed_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n📂 Looking for audio files in: {audio_dir}")

    # Find all audio files
    audio_extensions = [".mp3", ".wav", ".flac", ".m4a", ".ogg", ".aac"]
    audio_files = []

    for ext in audio_extensions:
        audio_files.extend(audio_dir.glob(f"*{ext}"))
        audio_files.extend(audio_dir.glob(f"*{ext.upper()}"))

    if not audio_files:
        print(f"❌ No audio files found in {audio_dir}")
        print("\n📌 Please download Tian Fangfang pingshu audio:")
        print("   - From Ximalaya (喜马拉雅)")
        print("   - From Qingting FM (蜻蜓FM)")
        print("   - Or purchase official audio")
        print(f"\n   Put files in: {audio_dir}")
        return False

    print(f"✅ Found {len(audio_files)} audio files")

    # Process each file
    for i, audio_file in enumerate(audio_files):
        print(f"\n[{i+1}/{len(audio_files)}] Processing: {audio_file.name}")

        output_wav = processed_dir / f"{audio_file.stem}.wav"

        # Convert to WAV 16kHz mono
        cmd = [
            "ffmpeg", "-y",
            "-i", str(audio_file),
            "-ar", "16000",
            "-ac", "1",
            "-acodec", "pcm_s16le",
            str(output_wav)
        ]

        try:
            subprocess.run(cmd, capture_output=True, check=True)
            print(f"  ✅ Converted: {output_wav.name}")
        except subprocess.CalledProcessError as e:
            print(f"  ❌ Failed: {e}")

    # Create filelist
    filelist = PROJECT_ROOT / "data" / "training" / "filelist.txt"
    with open(filelist, "w") as f:
        for wav_file in sorted(processed_dir.glob("*.wav")):
            f.write(f"{wav_file.absolute()}\n")

    print(f"\n✅ Audio preprocessing complete!")
    print(f"   Files: {processed_dir}")
    print(f"   Filelist: {filelist}")

    return True


def train_rvc(model_name, epochs, batch_size):
    """Train RVC model."""
    rvc_dir = PROJECT_ROOT / "Retrieval-based-Voice-Conversion"

    # Check training data
    processed_dir = PROJECT_ROOT / "data" / "training" / "processed"
    if not list(processed_dir.glob("*.wav")):
        print("❌ No training data found. Run with --prepare first.")
        return False

    print(f"\n🚀 Starting RVC training...")
    print(f"   Model name: {model_name}")
    print(f"   Epochs: {epochs}")
    print(f"   Batch size: {batch_size}")

    # Create output directory
    output_dir = PROJECT_ROOT / "models" / "rvc" / model_name
    output_dir.mkdir(parents=True, exist_ok=True)

    # Note: RVC training command varies by version
    # This is for the latest RVC v2 version

    # Try to run training
    train_script = rvc_dir / "train.py"

    if not train_script.exists():
        print(f"❌ Training script not found: {train_script}")
        print("\nTrying infer-train script...")
        train_script = rvc_dir / "infer-train.py"

    if train_script.exists():
        cmd = [
            "python", str(train_script),
            "--name", model_name,
            "--epochs", str(epochs),
            "--batch_size", str(batch_size),
            "--train_path", str(processed_dir),
            "--output_path", str(output_dir),
        ]

        print(f"\nRunning: {' '.join(cmd)}")
        print("\n⚠️  Training requires GPU. If it fails, please run on a GPU machine.")

        # Don't actually run automatically - let user confirm
        confirm = input("\nStart training? (y/n): ")
        if confirm.lower() == 'y':
            run_command(cmd, "Training RVC model", check=False)
        else:
            print("Training cancelled.")
    else:
        print("❌ Training script not found in RVC directory")

    return True


def check_existing_models():
    """Check for existing voice models."""
    print("\n" + "="*60)
    print("  Checking for pre-trained models...")
    print("="*60)

    # Check local models
    model_dir = PROJECT_ROOT / "models" / "rvc"
    if model_dir.exists():
        models = list(model_dir.glob("*"))
        if models:
            print(f"\n📦 Local models found in {model_dir}:")
            for m in models:
                print(f"   - {m.name}")
        else:
            print("   No local models found.")

    # Note about online models
    print("""
🌐 Online Model Sources:
   - https://huggingface.co/models?search=rvc+chinese
   - https://github.com/RVC-Project/Retrieval-based-Voice-Conversion#models

📌 For Tian Fangfang voice, you would need to:
   1. Collect 30+ minutes of his audio
   2. Train your own model (recommended)
   Or use Azure TTS as temporary solution
""")


def quick_test():
    """Quick test with sample audio."""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║           RVC Voice Training - Quick Test                     ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Step 1: Prepare Audio Data                                   ║
║  ─────────────────────────────                                   ║
║  1. Download Tian Fangfang pingshu audio                       ║
║     - Ximalaya: https://www.ximalaya.com/                      ║
║     - Or search for "单田芳评书下载"                           ║
║                                                                  ║
║  2. Put audio files in:                                        ║
║     data/audio/source/                                          ║
║                                                                  ║
║  3. Run:                                                       ║
║     python3 scripts/auto_train_rvc.py --prepare                ║
║                                                                  ║
║  Step 2: Train Model                                           ║
║  ──────────────────                                              ║
║  Run:                                                           ║
║     python3 scripts/auto_train_rvc.py --train                  ║
║                                                                  ║
║  GPU Required: NVIDIA GPU with 8GB+ VRAM                       ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
""")


def main():
    parser = argparse.ArgumentParser(
        description="Automated RVC Voice Training Pipeline"
    )

    parser.add_argument(
        "--full",
        action="store_true",
        help="Run full pipeline (clone, prepare, train)"
    )
    parser.add_argument(
        "--prepare",
        action="store_true",
        help="Prepare audio data"
    )
    parser.add_argument(
        "--train",
        action="store_true",
        help="Train RVC model"
    )
    parser.add_argument(
        "--clone",
        action="store_true",
        help="Clone RVC repository"
    )
    parser.add_argument(
        "--audio-dir",
        type=str,
        default="data/audio/source",
        help="Directory containing audio files"
    )
    parser.add_argument(
        "--model-name",
        type=str,
        default="tianfangfang",
        help="Name for the trained model"
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
        "--check",
        action="store_true",
        help="Check system and show status"
    )

    args = parser.parse_args()

    print("""
╔══════════════════════════════════════════════════════════════════╗
║        RVC Voice Training Pipeline for Currency Wars            ║
║                                                                  ║
║        Training Tian Fangfang Style Voice Model                 ║
╚══════════════════════════════════════════════════════════════════╝
    """)

    # Check system
    print("\n📋 System Check:")
    check_ffmpeg_result = check_ffmpeg()
    print(f"   ffmpeg: {'✅' if check_ffmpeg_result else '❌'}")

    gpu_available = check_gpu()
    print(f"   GPU: {'✅' if gpu_available else '⚠️  (CPU mode will be slow)'}")

    if args.check:
        check_existing_models()
        return

    # Default: show quick test
    if not any([args.full, args.prepare, args.train, args.clone]):
        quick_test()
        return

    # Clone RVC
    if args.clone or args.full:
        clone_rvc()

    # Prepare audio
    audio_dir = PROJECT_ROOT / args.audio_dir

    if args.prepare or args.full:
        if not check_ffmpeg_result:
            print("❌ ffmpeg is required. Please install it first.")
            print("   macOS: brew install ffmpeg")
            print("   Linux: sudo apt install ffmpeg")
            return

        if not audio_dir.exists():
            audio_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n📂 Audio directory: {audio_dir}")

        # Check if files exist
        audio_files = list(audio_dir.glob("*.mp3")) + list(audio_dir.glob("*.wav"))
        if not audio_files:
            print(f"""
❌ No audio files found in {audio_dir}

📌 Please add Tian Fangfang pingshu audio files:
   1. Download from Ximalaya, Qingting FM, etc.
   2. Put MP3/WAV files in: {audio_dir}
   3. Recommended: 30+ minutes of audio

Then run: python3 scripts/auto_train_rvc.py --prepare
            """)
            return

        prepare_audio(audio_dir)

    # Train
    if args.train or args.full:
        train_rvc(args.model_name, args.epochs, args.batch_size)

    print("\n✅ Pipeline complete!")


if __name__ == "__main__":
    main()
