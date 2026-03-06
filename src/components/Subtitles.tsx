import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { useSubtitleSync } from "../hooks";
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
  offset?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
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

export const Subtitles: React.FC<SubtitlesProps> = ({
  subtitles,
  offset = 0,
  fadeInDuration = 15,
  fadeOutDuration = 15,
}) => {
  const frame = useCurrentFrame();
  const actualFrame = frame + offset;

  const currentSubtitle = subtitles.find(
    (sub) => actualFrame >= sub.startFrame && actualFrame < sub.endFrame,
  );

  if (!currentSubtitle) {
    return null;
  }

  const duration = currentSubtitle.endFrame - currentSubtitle.startFrame;
  const timeInSubtitle = actualFrame - currentSubtitle.startFrame;

  let opacity = 1;
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

interface SubtitleIndicatorProps {
  subtitles: SubtitleEntry[];
  position?: "top" | "bottom";
  height?: number;
}

export const SubtitleIndicator: React.FC<SubtitleIndicatorProps> = ({
  subtitles,
  position = "top",
  height = 4,
}) => {
  const frame = useCurrentFrame();
  const totalSubtitles = subtitles.length;

  if (totalSubtitles === 0) return null;

  const currentIndex = subtitles.findIndex(
    (sub) => frame >= sub.startFrame && frame < sub.endFrame,
  );

  return (
    <div
      style={{
        position: "absolute",
        [position]: 0,
        left: 0,
        right: 0,
        height,
        background: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        zIndex: 100,
      }}
    >
      {subtitles.map((_, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            background:
              index < currentIndex
                ? "#48BB78"
                : index === currentIndex
                  ? "#ECC94B"
                  : "rgba(255, 255, 255, 0.2)",
            borderRight: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        />
      ))}
    </div>
  );
};

interface SyncedSubtitleProps {
  subtitles: SubtitleEntry[];
  children: React.ReactNode;
}

export const SyncedSubtitle: React.FC<SyncedSubtitleProps> = ({
  subtitles,
  children,
}) => {
  const { currentSubtitle, fadeOpacity } = useSubtitleSync({ subtitles });

  if (!currentSubtitle) {
    return null;
  }

  return <div style={{ opacity: fadeOpacity }}>{children}</div>;
};
