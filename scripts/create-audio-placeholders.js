#!/usr/bin/env node
/**
 * 创建占位音频文件
 * 
 * 由于外部音频源需要登录或有访问限制，
 * 这个脚本创建基本的占位音频文件，让项目可以运行
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const AUDIO_DIR = join(process.cwd(), "public", "assets", "audio");

/**
 * 创建一个简单的MP3占位文件的提示
 */
function createPlaceholderFiles() {
  console.log("🎵 Creating placeholder audio files...\n");

  const categories = ["bgm", "sfx", "voiceover"];

  categories.forEach((category) => {
    const dir = join(AUDIO_DIR, category);
    try {
      mkdirSync(dir, { recursive: true });
    } catch (err: any) {
      if (err.code !== "EEXIST") throw err;
    }
  });

  // BGM 占位文件
  const bgmFiles = [
    {
      name: "tension.mp3",
      description: "Suspense tension music for dramatic scenes",
    },
    {
      name: "conspiracy.mp3",
      description: "Mysterious conspiracy atmosphere music",
    },
    {
      name: "epic-main.mp3",
      description: "Epic battle theme for Waterloo scene",
    },
  ];

  // SFX 占位文件
  const sfxFiles = [
    {
      name: "coin-clink.mp3",
      description: "Gold coin clinking sound",
    },
    {
      name: "stock_bell.mp3",
      description: "Stock exchange bell",
    },
    {
      name: "cannon_fire.mp3",
      description: "Cannon fire sound effect",
    },
    {
      name: "crowd_murmur.mp3",
      description: "Crowd murmuring and panic",
    },
  ];

  // 创建占位文件
  [...bgmFiles.map((f) => ({ ...f, category: "bgm" })), ...sfxFiles.map((f) => ({ ...f, category: "sfx" }))].forEach((file) => {
    const filePath = join(AUDIO_DIR, file.category, file.name);
    const placeholder = `# PLACEHOLDER AUDIO FILE
# 
# This is a placeholder for: ${file.name}
# Description: ${file.description}
# 
# TO REPLACE WITH ACTUAL AUDIO:
# 1. Download free audio from:
#    - FreePD: https://freepd.com/ (royalty-free, no attribution required)
#    - Incompetech: https://incompetech.com/ (royalty-free, attribution required)
#    - Pixabay Music: https://pixabay.com/music/ (free, no attribution required)
#    - YouTube Audio Library: https://www.youtube.com/audiolibrary/
# 
# 2. Search for: ${file.description.split(" ")[0]}
# 
# 3. Download and save as: ${filePath}
# 
# 4. Recommended formats:
#    - MP3 (128-192 kbps, 44.1kHz)
#    - Duration: varies by need
# 
# Created by: scripts/create-audio-placeholders.js
`;

    writeFileSync(filePath, placeholder, "utf-8");
    console.log(`✅ Created: ${file.category}/${file.name}`);
    console.log(`   ${file.description}\n`);
  });

  console.log("\n" + "=".repeat(60));
  console.log("✅ Placeholder files created!");
  console.log("=".repeat(60));
  console.log("\n📝 NEXT STEPS:");
  console.log("\n1. Download free audio from recommended sources:");
  console.log("   • FreePD (No attribution needed):");
  console.log("     - https://freepd.com/mysterious.html");
  console.log("     - https://freepd.com/dark.html");
  console.log("     - https://freepd.com/epic.html");
  console.log("\n   • Incompetech (Attribution required):");
  console.log("     - https://incompetech.com/genre/search/?genre=soundtrack");
  console.log("\n   • Pixabay Music (No attribution needed):");
  console.log("     - https://pixabay.com/music/search/");
  console.log("\n2. Search for keywords:");
  console.log("   • 'suspense', 'tension', 'mysterious'");
  console.log("   • 'dramatic', 'epic', 'battle'");
  console.log("   • 'coin', 'bell', 'cannon'");
  console.log("\n3. Replace placeholder files in:");
  console.log(`   ${AUDIO_DIR}`);
  console.log("\n" + "=".repeat(60));
}

// 运行
createPlaceholderFiles();
