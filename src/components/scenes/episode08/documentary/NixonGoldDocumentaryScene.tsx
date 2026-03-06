import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  Sequence,
  interpolate,
  spring,
} from "remotion";
import { useVideoConfig } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const fps = 30;

export const NixonGoldDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps: videoFps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Nixon/White House Theme */}
      <ImageLayer
        src="/assets/images/ep08/ep08-nixon.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "grayscale" }}
        startFrame={0}
        durationFrames={fps * 12}
      />

      {/* Year Stamp - Dramatic */}
      <Sequence from={fps * 0.3} durationInFrames={fps * 11}>
        <DocumentaryOverlay
          year="1971"
          title="尼克松冲击"
          subtitle="Nixon Shock - 黄金窗口关闭"
          frame={frame - fps * 0.3}
          fadeInDuration={fps * 0.8}
        />
      </Sequence>

      {/* Breaking News Style */}
      <Sequence from={fps * 0} durationInFrames={fps * 3}>
        <AbsoluteFill
          style={{
            top: 30,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "20px 40px",
          }}
        >
          <div
            style={{
              background: "#DC2626",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "8px 16px",
              fontFamily: "Arial, sans-serif",
              letterSpacing: 2,
              transform: `scale(${spring({
                frame: frame,
                fps: videoFps,
                config: { damping: 12 },
              })})`,
            }}
          >
            BREAKING NEWS
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Key Date */}
      <Sequence from={fps * 1.5} durationInFrames={fps * 4}>
        <CinematicText
          text="1971年8月15日"
          fontSize={48}
          color="#ECC94B"
          frame={frame - fps * 1.5}
          fadeInDuration={fps * 0.6}
          position="center"
        />
      </Sequence>

      {/* Main Statement */}
      <Sequence from={fps * 4} durationInFrames={fps * 7}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "15% 20%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#fff",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
              opacity: interpolate(
                frame - fps * 4,
                [0, fps * 0.5, fps * 6.5, fps * 7],
                [0, 1, 1, 0],
                { extrapolateRight: "clamp" },
              ),
              textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
              lineHeight: 1.6,
              background: "rgba(0,0,0,0.4)",
              padding: 30,
              borderRadius: 8,
            }}
          >
            "我指示财政部长暂停美元兑换黄金"
            <div
              style={{
                fontSize: 16,
                color: "#CBD5E0",
                marginTop: 16,
                fontStyle: "italic",
              }}
            >
              — 理查德·尼克松
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Impact Text */}
      <Sequence from={fps * 8} durationInFrames={fps * 4}>
        <CinematicText
          text="布雷顿森林体系终结"
          fontSize={36}
          color="#DC2626"
          frame={frame - fps * 8}
          fadeInDuration={fps * 0.5}
          position="bottom"
        />
      </Sequence>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.1} />
    </AbsoluteFill>
  );
};

export default NixonGoldDocumentaryScene;
