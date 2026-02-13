/**
 * Subtitles Index
 *
 * Central export point for all episode subtitle data
 * Import type and data from here
 */

export interface SubtitleEntry {
  startFrame: number;
  endFrame: number;
  text: string;
  translation?: string; // 中文翻译
}

// Import and re-export all episode subtitles
export { episode01Subtitles } from "./episode01";
export { episode02Subtitles } from "./episode02";
export { episode03Subtitles } from "./episode03";
export { episode04Subtitles } from "./episode04";
export { episode05Subtitles } from "./episode05";
export { episode06Subtitles } from "./episode06";
