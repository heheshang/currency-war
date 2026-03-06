import React from "react";
import { useCurrentFrame } from "remotion";
import type { SubtitleEntry } from "../../subtitles/index";

interface SubtitleTimelineProps {
  subtitles: SubtitleEntry[];
  width?: number;
  height?: number;
  showLabels?: boolean;
}

export const SubtitleTimelineDebug: React.FC<SubtitleTimelineProps> = ({
  subtitles,
  width = 1280,
  height = 60,
  showLabels = true,
}) => {
  const frame = useCurrentFrame();

  if (subtitles.length === 0) {
    return null;
  }

  const totalFrames = subtitles[subtitles.length - 1].endFrame;
  const frameWidth = width / totalFrames;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        background: "rgba(0, 0, 0, 0.8)",
        borderBottom: "2px solid #333",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {subtitles.map((sub, index) => {
        const x = sub.startFrame * frameWidth;
        const subWidth = (sub.endFrame - sub.startFrame) * frameWidth;
        const isActive = frame >= sub.startFrame && frame < sub.endFrame;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: x,
              top: 5,
              width: subWidth,
              height: height - 15,
              background: isActive ? "#ECC94B" : "#4A5568",
              border: isActive ? "2px solid #D69E2E" : "1px solid #2D3748",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: isActive ? "#1A202C" : "#A0AEC0",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              padding: "0 4px",
            }}
            title={sub.text}
          >
            {showLabels && subWidth > 60 && (
              <span style={{ fontSize: 9 }}>
                #{index}: {sub.startFrame}-{sub.endFrame}
              </span>
            )}
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          left: frame * frameWidth,
          top: 0,
          width: 2,
          height: height,
          background: "#E53E3E",
          zIndex: 10,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 10,
          top: 5,
          fontSize: 12,
          color: "#A0AEC0",
          fontFamily: "monospace",
        }}
      >
        Frame: {frame} / {totalFrames}
      </div>
    </div>
  );
};

interface SubtitleInfoPanelProps {
  subtitles: SubtitleEntry[];
}

export const SubtitleInfoPanel: React.FC<SubtitleInfoPanelProps> = ({
  subtitles,
}) => {
  const frame = useCurrentFrame();

  const currentSub = subtitles.find(
    (sub) => frame >= sub.startFrame && frame < sub.endFrame,
  );
  const currentIndex = subtitles.findIndex(
    (sub) => frame >= sub.startFrame && frame < sub.endFrame,
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        right: 10,
        background: "rgba(0, 0, 0, 0.85)",
        padding: 10,
        borderRadius: 8,
        border: "1px solid #333",
        minWidth: 200,
        fontSize: 12,
        color: "#A0AEC0",
        zIndex: 1000,
      }}
    >
      <div style={{ marginBottom: 8, fontWeight: "bold", color: "#ECC94B" }}>
        Subtitle Debug
      </div>
      <div>
        Index: {currentIndex >= 0 ? currentIndex : "-"} / {subtitles.length - 1}
      </div>
      {currentSub && (
        <>
          <div>
            Frame: {currentSub.startFrame} - {currentSub.endFrame}
          </div>
          <div>
            Duration:{" "}
            {((currentSub.endFrame - currentSub.startFrame) / 30).toFixed(1)}s
          </div>
          <div style={{ marginTop: 8, color: "#fff" }}>
            {currentSub.text.slice(0, 40)}...
          </div>
        </>
      )}
    </div>
  );
};
