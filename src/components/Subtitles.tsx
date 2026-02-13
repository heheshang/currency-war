import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

// Import and re-export subtitle types and data from separate episode files
import type { SubtitleEntry } from "../subtitles/index";
export type { SubtitleEntry };
export {
  episode01Subtitles,
  episode02Subtitles,
  episode03Subtitles,
  episode04Subtitles,
  episode05Subtitles,
  episode06Subtitles,
} from "../subtitles/index";

interface SubtitlesProps {
  subtitles: SubtitleEntry[];
  offset?: number; // 全局偏移帧数（用于在 Sequence 中使用）
}

const subtitleStyle: React.CSSProperties = {
  fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
  fontSize: 32,
  textAlign: "center",
  position: "absolute",
  bottom: 80,
  width: "100%",
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.7)",
  padding: "0 40px",
  boxSizing: "border-box",
};

const translationStyle: React.CSSProperties = {
  ...subtitleStyle,
  fontSize: 24,
  bottom: 40,
  color: "#d1d5db",
  fontStyle: "italic",
};

/**
 * Subtitles - 字幕组件
 *
 * 根据当前帧显示相应的字幕
 */
export const Subtitles: React.FC<SubtitlesProps> = ({
  subtitles,
  offset = 0,
}) => {
  const frame = useCurrentFrame();

  // 计算实际帧数（考虑偏移）
  const actualFrame = frame + offset;

  // 查找当前应该显示的字幕
  const currentSubtitle = subtitles.find(
    (sub) => actualFrame >= sub.startFrame && actualFrame < sub.endFrame,
  );

  if (!currentSubtitle) {
    return null;
  }

  // 计算淡入淡出效果
  const fadeInDuration = 15; // 帧数
  const fadeOutDuration = 15; // 帧数
  const duration = currentSubtitle.endFrame - currentSubtitle.startFrame;

  let opacity = 1;
  const timeInSubtitle = actualFrame - currentSubtitle.startFrame;

  if (timeInSubtitle < fadeInDuration) {
    opacity = interpolate(timeInSubtitle, [0, fadeInDuration], [0, 1]);
  } else if (timeInSubtitle > duration - fadeOutDuration) {
    opacity = interpolate(
      timeInSubtitle,
      [duration - fadeOutDuration, duration],
      [1, 0],
    );
  }

  return (
    <>
      <div style={{ ...subtitleStyle, opacity }}>{currentSubtitle.text}</div>
      {currentSubtitle.translation && (
        <div style={{ ...translationStyle, opacity }}>
          {currentSubtitle.translation}
        </div>
      )}
    </>
  );
};

// Note: All episode subtitle data has been moved to src/subtitles/
// Import from '../subtitles/index' or use the re-exports above
