#!/usr/bin/env node
/**
 * 自动下载音频文件
 *
 * 从免费音频库下载背景音乐和音效
 * 音频来源：
 * - FreePD: https://freepd.com/
 * - Incompetech: https://incompetech.com/
 * - YouTube Audio Library (无版权音乐)
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import https from "https";
import http from "http";

const AUDIO_DIR = join(process.cwd(), "public", "assets", "audio");

// 音频文件列表
const AUDIO_FILES = [
  // 背景音乐 - 悬疑紧张类
  {
    category: "bgm",
    name: "tension.mp3",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Tense.mp3",
    description: "Suspense tension music for dramatic scenes",
  },
  {
    category: "bgm",
    name: "conspiracy.mp3",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Disorienting.mp3",
    description: "Mysterious conspiracy atmosphere music",
  },
  {
    category: "bgm",
    name: "epic-main.mp3",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/BossBattle.mp3",
    description: "Epic battle theme for Waterloo scene",
  },

  // 音效 - 战争场景
  {
    category: "sfx",
    name: "cannon_fire.mp3",
    url: "https://www.freesound.org/data/previews/320/320569_5270888-lq.mp3",
    description: "Cannon fire sound effect",
  },
  {
    category: "sfx",
    name: "war_drums.mp3",
    url: "https://www.freesound.org/data/previews/393/393708_7291208-lq.mp3",
    description: "War drums sound",
  },

  // 音效 - 交易所场景
  {
    category: "sfx",
    name: "stock_bell.mp3",
    url: "https://www.freesound.org/data/previews/341/341695_5858076-lq.mp3",
    description: "Stock exchange bell",
  },
  {
    category: "sfx",
    name: "coin-clink.mp3",
    url: "https://www.freesound.org/data/previews/145/145945_2398804-lq.mp3",
    description: "Gold coin clinking sound",
  },

  // 环境音效
  {
    category: "sfx",
    name: "crowd_murmur.mp3",
    url: "https://www.freesound.org/data/previews/534/534632_12513884-lq.mp3",
    description: "Crowd murmuring and panic",
  },
];

/**
 * 下载文件
 */
function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    console.log(`  ⬇️  Downloading: ${url}`);

    protocol
      .get(url, (response) => {
        // 处理重定向
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            console.log(`  ↪️  Redirecting to: ${redirectUrl}`);
            downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
            return;
          }
        }

        // 检查响应状态
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

        const data: Buffer[] = [];

        response.on("data", (chunk) => {
          data.push(chunk);
        });

        response.on("end", () => {
          const buffer = Buffer.concat(data);
          writeFileSync(destPath, buffer);
          console.log(`  ✅ Saved: ${destPath}`);
          resolve();
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * 主函数
 */
async function main() {
  console.log("🎵 Audio File Downloader for Currency War Animation\n");

  // 创建目录
  const categories = ["bgm", "sfx", "voiceover"];
  categories.forEach((cat) => {
    const dir = join(AUDIO_DIR, cat);
    try {
      mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    } catch (err: any) {
      if (err.code !== "EEXIST") {
        console.error(`❌ Failed to create directory: ${dir}`);
      }
    }
  });

  console.log("\n📥 Starting downloads...\n");

  let successCount = 0;
  let failCount = 0;

  // 下载每个文件
  for (const audio of AUDIO_FILES) {
    const destPath = join(AUDIO_DIR, audio.category, audio.name);

    try {
      await downloadFile(audio.url, destPath);
      console.log(`   📝 ${audio.description}\n`);
      successCount++;
    } catch (err: any) {
      console.error(`  ❌ Failed to download ${audio.name}: ${err.message}\n`);
      failCount++;

      // 创建一个占位文件，避免引用错误
      try {
        writeFileSync(destPath, "// Placeholder - download failed\n");
        console.log(`  💾 Created placeholder file\n`);
      } catch (e) {
        // Ignore
      }
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log(`✅ Successfully downloaded: ${successCount} files`);
  console.log(`❌ Failed: ${failCount} files`);
  console.log("=".repeat(50));

  if (failCount > 0) {
    console.log("\n⚠️  Some files failed to download.");
    console.log("💡 Alternative: Manually download from:");
    console.log("   - FreePD: https://freepd.com/");
    console.log("   - Incompetech: https://incompetech.com/");
    console.log("   - Freesound: https://freesound.org/");
    console.log("\n   Then place them in: public/assets/audio/{category}/");
  }

  console.log("\n🎉 Done!");
}

// 运行主函数
main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
