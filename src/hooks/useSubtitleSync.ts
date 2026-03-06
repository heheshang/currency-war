import { useCurrentFrame } from "remotion";
import type { SubtitleEntry } from "../subtitles/index";

/**
 * 字幕同步信息
 */
export interface SubtitleSyncInfo {
  /** 当前字幕条目（如果没有则返回 undefined） */
  currentSubtitle: SubtitleEntry | undefined;
  /** 当前字幕索引 */
  currentIndex: number;
  /** 总字幕数量 */
  totalSubtitles: number;
  /** 在当前字幕内的进度 (0-1) */
  progress: number;
  /** 当前字幕已播放的帧数 */
  framesInSubtitle: number;
  /** 当前字幕剩余帧数 */
  framesRemaining: number;
  /** 是否处于淡入阶段 */
  isFadingIn: boolean;
  /** 是否处于淡出阶段 */
  isFadingOut: boolean;
  /** 淡入淡出的透明度 (0-1) */
  fadeOpacity: number;
  /** 场景总时长（帧数） */
  sceneDuration: number;
  /** 场景进度 (0-1) */
  sceneProgress: number;
}

/**
 * 字幕同步选项
 */
export interface UseSubtitleSyncOptions {
  /** 字幕数组 */
  subtitles: SubtitleEntry[];
  /** 淡入持续时间（帧数，默认15帧） */
  fadeInDuration?: number;
  /** 淡出持续时间（帧数，默认15帧） */
  fadeOutDuration?: number;
  /** 场景总时长（帧数） */
  sceneDuration?: number;
}

/**
 * useSubtitleSync - 字幕同步 Hook
 *
 * 提供字幕时间同步能力，让场景动画可以根据字幕时间调整
 *
 * @example
 * ```tsx
 * const MyScene = () => {
 *   const {
 *     currentSubtitle,
 *     progress,
 *     framesInSubtitle,
 *     fadeOpacity
 *   } = useSubtitleSync({ subtitles: mySubs });
 *
 *   // 根据字幕进度调整动画
 *   const contentOpacity = interpolate(progress, [0, 0.5], [0, 1]);
 *
 *   return (
 *     <AbsoluteFill>
 *       <div style={{ opacity: contentOpacity * fadeOpacity }}>
 *         {/* 内容 *\/}
 *       </div>
 *       <Subtitles subtitles={mySubs} />
 *     </AbsoluteFill>
 *   );
 * };
 * ```
 */
export function useSubtitleSync(
  options: UseSubtitleSyncOptions,
): SubtitleSyncInfo {
  const {
    subtitles,
    fadeInDuration = 15,
    fadeOutDuration = 15,
    sceneDuration = 0,
  } = options;

  const frame = useCurrentFrame();

  // 查找当前字幕
  let currentSubtitle: SubtitleEntry | undefined;
  let currentIndex = -1;
  let progress = 0;
  let framesInSubtitle = 0;
  let framesRemaining = 0;

  for (let i = 0; i < subtitles.length; i++) {
    const sub = subtitles[i];
    if (frame >= sub.startFrame && frame < sub.endFrame) {
      currentSubtitle = sub;
      currentIndex = i;
      framesInSubtitle = frame - sub.startFrame;
      const duration = sub.endFrame - sub.startFrame;
      progress = framesInSubtitle / duration;
      framesRemaining = sub.endFrame - frame;
      break;
    }
  }

  // 计算淡入淡出
  let isFadingIn = false;
  let isFadingOut = false;
  let fadeOpacity = 1;

  if (currentSubtitle) {
    const duration = currentSubtitle.endFrame - currentSubtitle.startFrame;

    if (framesInSubtitle < fadeInDuration) {
      isFadingIn = true;
      fadeOpacity = framesInSubtitle / fadeInDuration;
    } else if (framesInSubtitle > duration - fadeOutDuration) {
      isFadingOut = true;
      fadeOpacity = (currentSubtitle.endFrame - frame) / fadeOutDuration;
    }
  }

  // 场景进度
  const sceneProgress = sceneDuration > 0 ? frame / sceneDuration : 0;

  return {
    currentSubtitle,
    currentIndex,
    totalSubtitles: subtitles.length,
    progress,
    framesInSubtitle,
    framesRemaining,
    isFadingIn,
    isFadingOut,
    fadeOpacity,
    sceneDuration,
    sceneProgress,
  };
}

/**
 * 获取字幕时间轴信息
 *
 * 用于调试和可视化字幕时机
 */
export function getSubtitleTimeline(subtitles: SubtitleEntry[]): {
  totalDuration: number;
  subtitles: Array<{
    index: number;
    startFrame: number;
    endFrame: number;
    startTime: string;
    endTime: string;
    duration: string;
    text: string;
  }>;
} {
  if (subtitles.length === 0) {
    return { totalDuration: 0, subtitles: [] };
  }

  const fps = 30; // 标准 fps

  const formatTime = (frames: number): string => {
    const totalSeconds = frames / fps;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const ms = Math.floor((totalSeconds % 1) * 100);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  };

  const formatDuration = (frames: number): string => {
    const seconds = frames / fps;
    return `${seconds.toFixed(1)}s`;
  };

  const lastSubtitle = subtitles[subtitles.length - 1];
  const totalDuration = lastSubtitle.endFrame;

  return {
    totalDuration,
    subtitles: subtitles.map((sub, index) => ({
      index,
      startFrame: sub.startFrame,
      endFrame: sub.endFrame,
      startTime: formatTime(sub.startFrame),
      endTime: formatTime(sub.endFrame),
      duration: formatDuration(sub.endFrame - sub.startFrame),
      text: sub.text.slice(0, 50) + (sub.text.length > 50 ? "..." : ""),
    })),
  };
}

/**
 * 根据字幕索引获取时间点
 *
 * 用于场景动画与字幕对齐
 */
export function getSubtitleTimepoints(subtitles: SubtitleEntry[]): {
  [key: number]: { startFrame: number; endFrame: number };
} {
  const timepoints: {
    [key: number]: { startFrame: number; endFrame: number };
  } = {};

  subtitles.forEach((sub, index) => {
    timepoints[index] = {
      startFrame: sub.startFrame,
      endFrame: sub.endFrame,
    };
  });

  return timepoints;
}

/**
 * 在字幕期间执行动画
 *
 * @param subtitleIndex 字幕索引
 * @param subtitles 字幕数组
 * @param frame 当前帧
 * @returns 是否在字幕期间
 */
export function isDuringSubtitle(
  subtitleIndex: number,
  subtitles: SubtitleEntry[],
  frame: number,
): boolean {
  const sub = subtitles[subtitleIndex];
  if (!sub) return false;
  return frame >= sub.startFrame && frame < sub.endFrame;
}

/**
 * 获取字幕索引的时间范围
 */
export function getSubtitleRange(
  subtitleIndex: number,
  subtitles: SubtitleEntry[],
): { startFrame: number; endFrame: number; duration: number } | null {
  const sub = subtitles[subtitleIndex];
  if (!sub) return null;
  return {
    startFrame: sub.startFrame,
    endFrame: sub.endFrame,
    duration: sub.endFrame - sub.startFrame,
  };
}
