import React from "react";
import { AbsoluteFill, useCurrentFrame, Sequence, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const fps = 30;

export const SDRDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - IMF/Global Finance Theme */}
      <ImageLayer
        src="/assets/images/ep08/IMF_international_meeting_conference_diplomacy_1_pexels.jpeg"
        kenBurns={{ panDirection: "left", intensity: "subtle" }}
        layer={{ opacity: 0.9, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={fps * 10}
      />

      {/* Year and Title */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 9}>
        <DocumentaryOverlay
          year="1969"
          title="特别提款权"
          subtitle="Special Drawing Rights (SDR)"
          source="国际货币基金组织"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Concept Explanation */}
      <Sequence from={fps * 1.5} durationInFrames={fps * 4}>
        <CinematicText
          text="纸黄金的诞生"
          fontSize={40}
          color="#ECC94B"
          frame={frame - fps * 1.5}
          fadeInDuration={fps * 0.6}
          position="top"
        />
      </Sequence>

      {/* Currency Basket */}
      <Sequence from={fps * 3} durationInFrames={fps * 6}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "5% 15%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              opacity: interpolate(frame - fps * 3, [0, fps * 0.5], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            {[
              { code: "USD", pct: "43.38%" },
              { code: "EUR", pct: "29.31%" },
              { code: "CNY", pct: "12.28%" },
              { code: "JPY", pct: "7.59%" },
              { code: "GBP", pct: "7.44%" },
              { code: "SDR", pct: "一篮子" },
            ].map((item, idx) => (
              <div
                key={item.code}
                style={{
                  background: "rgba(0,0,0,0.6)",
                  padding: 16,
                  borderRadius: 8,
                  textAlign: "center",
                  transform: `translateY(${interpolate(
                    frame - fps * 3,
                    [0, fps * 0.8 + idx * fps * 0.1],
                    [20, 0],
                    { extrapolateRight: "clamp" },
                  )}px)`,
                  opacity: interpolate(
                    frame - fps * 3,
                    [0, fps * 0.5 + idx * fps * 0.1],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  ),
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#ECC94B",
                    fontFamily: "monospace",
                  }}
                >
                  {item.code}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#CBD5E0",
                    marginTop: 4,
                  }}
                >
                  {item.pct}
                </div>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      <Vignette intensity={0.65} />
      <FilmGrain opacity={0.06} />
    </AbsoluteFill>
  );
};

export default SDRDocumentaryScene;
