#!/usr/bin/env tsx
/**
 * 字幕导入工具
 * 从SRT文件导入字幕并生成Remotion可用的JSON格式
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

// 字幕条目接口
interface SubtitleEntry {
  startTime: number; // 毫秒
  endTime: number; // 毫秒
  text: string;
}

// 双语字幕接口
interface BilingualSubtitle {
  startTime: number; // 秒
  endTime: number; // 秒
  zhText: string;
  enText: string;
}

// 简单的SRT解析器
function parseSRT(srtContent: string): SubtitleEntry[] {
  const subtitles: SubtitleEntry[] = [];
  const blocks = srtContent.trim().split(/\n\n+/);

  for (const block of blocks) {
    const lines = block.split("\n");
    if (lines.length < 3) continue;

    // 解析时间轴
    const timeLine = lines[1];
    const timeMatch = timeLine.match(
      /(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/,
    );

    if (!timeMatch) continue;

    const startTime =
      parseInt(timeMatch[1]) * 3600000 +
      parseInt(timeMatch[2]) * 60000 +
      parseInt(timeMatch[3]) * 1000 +
      parseInt(timeMatch[4]);

    const endTime =
      parseInt(timeMatch[5]) * 3600000 +
      parseInt(timeMatch[6]) * 60000 +
      parseInt(timeMatch[7]) * 1000 +
      parseInt(timeMatch[8]);

    // 解析文本（跳过序号）
    const text = lines.slice(2).join("\n").trim();

    subtitles.push({
      startTime,
      endTime,
      text,
    });
  }

  return subtitles;
}

// 从SRT文件导入字幕
function importSubtitles(srtPath: string): SubtitleEntry[] {
  if (!existsSync(srtPath)) {
    console.error(`文件不存在: ${srtPath}`);
    return [];
  }

  const srtContent = readFileSync(srtPath, "utf-8");
  return parseSRT(srtContent);
}

// 生成Remotion可用的JSON
function generateSubtitleJson(episodes: number[]): void {
  const baseDir = process.cwd();

  episodes.forEach((ep) => {
    const episodeNum = String(ep).padStart(2, "0");
    const zhPath = join(
      baseDir,
      "subtitle-assets",
      "zh-CN",
      `episode-${episodeNum}.srt`,
    );
    const enPath = join(
      baseDir,
      "subtitle-assets",
      "en-US",
      `episode-${episodeNum}.srt`,
    );
    const outputPath = join(
      baseDir,
      "public",
      "subtitles",
      `episode-${episodeNum}.json`,
    );

    // 检查文件是否存在
    if (!existsSync(zhPath)) {
      console.warn(`中文字幕文件不存在: ${zhPath}`);
      return;
    }

    if (!existsSync(enPath)) {
      console.warn(`英文字幕文件不存在: ${enPath}`);
      return;
    }

    // 导入中英文字幕
    const zhSubs = importSubtitles(zhPath);
    const enSubs = importSubtitles(enPath);

    // 合并中英字幕
    const bilingualSubs: BilingualSubtitle[] = zhSubs.map((zh, i) => ({
      startTime: zh.startTime / 1000, // 转换为秒
      endTime: zh.endTime / 1000,
      zhText: zh.text,
      enText: enSubs[i]?.text || "",
    }));

    // 写入JSON文件
    writeFileSync(outputPath, JSON.stringify(bilingualSubs, null, 2), "utf-8");
    console.log(
      `✓ 生成字幕文件: episode-${episodeNum}.json (${bilingualSubs.length} 条字幕)`,
    );
  });
}

// 主函数
function main() {
  console.log("🎬 字幕导入工具 - Currency War Animation\n");

  // 获取命令行参数
  const args = process.argv.slice(2);
  const episodesArg = args.find((arg) => arg.startsWith("--episodes="));

  let episodes: number[];

  if (episodesArg) {
    // 从命令行参数获取集数
    const episodesStr = episodesArg.split("=")[1];
    episodes = episodesStr.split(",").map((e) => parseInt(e.trim()));
  } else {
    // 默认生成所有集数字幕（1-10集）
    episodes = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  console.log(`📝 处理集数: ${episodes.join(", ")}\n`);

  // 生成字幕JSON
  generateSubtitleJson(episodes);

  console.log("\n✅ 字幕导入完成！");
}

// 运行主函数
main();
