import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { useSubtitleSync, getSubtitleRange } from "../../../hooks";
import type { SubtitleEntry } from "../../../subtitles/index";

interface SyncedSceneProps {
  subtitles: SubtitleEntry[];
  sceneDuration: number;
}

export const SyncedSceneExample: React.FC<SyncedSceneProps> = ({
  subtitles,
  sceneDuration,
}) => {
  const frame = useCurrentFrame();
  const {
    currentSubtitle,
    currentIndex,
    progress,
    sceneProgress,
    fadeOpacity,
  } = useSubtitleSync({
    subtitles,
    sceneDuration,
    fadeInDuration: 10,
    fadeOutDuration: 10,
  });



  const getSubtitleProgress = (index: number): number => {
    const range = getSubtitleRange(index, subtitles);
    if (!range) return 0;
    if (frame < range.startFrame) return 0;
    if (frame >= range.endFrame) return 1;
    return (frame - range.startFrame) / range.duration;
  };

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ECC94B",
            fontWeight: "bold",
            opacity: fadeOpacity,
          }}
        >
          {currentSubtitle ? currentSubtitle.text : ""}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {subtitles.map((sub, index) => {
          const range = getSubtitleRange(index, subtitles);
          if (!range) return null;

          const isActive = index === currentIndex;
          const isPast = index < currentIndex;
          const subProgress = getSubtitleProgress(index);

          const boxOpacity = isPast ? 0.5 : isActive ? 1 : 0.2;
          const scale = isActive ? 1.1 : 1;

          return (
            <div
              key={index}
              style={{
                display: "inline-block",
                width: 60,
                height: 40,
                margin: "0 4px",
                background: isActive
                  ? "#ECC94B"
                  : isPast
                    ? "#48BB78"
                    : "#4A5568",
                borderRadius: 4,
                opacity: boxOpacity,
                transform: `scale(${scale})`,
                transition: "all 0.1s",
                textAlign: "center",
                lineHeight: "40px",
                fontSize: 12,
                color: isActive ? "#1A202C" : "#fff",
              }}
            >
              {index}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: `${subProgress * 100}%`,
                    height: 3,
                    background: "#D69E2E",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
        }}
      >
        <div
          style={{
            height: 8,
            background: "#2D3748",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${sceneProgress * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg, #48BB78, #ECC94B)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            color: "#A0AEC0",
          }}
        >
          <span>Frame: {frame}</span>
          <span>
            Subtitle: {currentIndex >= 0 ? currentIndex + 1 : "-"}/
            {subtitles.length}
          </span>
          <span>Progress: {(sceneProgress * 100).toFixed(1)}%</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(236, 201, 75, ${
            0.3 + progress * 0.4
          }) 0%, transparent 70%)`,
          opacity: currentSubtitle ? fadeOpacity : 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#A0AEC0",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 10 }}>
          Current Subtitle Progress: {(progress * 100).toFixed(1)}%
        </div>
        {currentSubtitle?.translation && (
          <div style={{ color: "#ECC94B", fontSize: 20 }}>
            {currentSubtitle.translation}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default SyncedSceneExample;
