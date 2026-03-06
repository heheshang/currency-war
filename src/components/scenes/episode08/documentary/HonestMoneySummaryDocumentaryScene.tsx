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

export const HonestMoneySummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Abstract/Global Theme */}
      <ImageLayer
        src="/assets/images/ep08/ep08-silver.jpg"
        kenBurns={{ panDirection: "zoom-out", intensity: "subtle" }}
        layer={{ opacity: 0.8, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={fps * 14}
      />

      {/* Chapter End */}
      <Sequence from={fps * 0.3} durationInFrames={fps * 13}>
        <DocumentaryOverlay
          title="本章结语"
          subtitle="诚实货币的未来"
          frame={frame - fps * 0.3}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Key Timeline */}
      <Sequence from={fps * 1} durationInFrames={fps * 6}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "5% 15%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 30,
              opacity: interpolate(frame - fps * 1, [0, fps * 0.5], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            {[
              { year: "1963", event: "白银券终结" },
              { year: "1971", event: "金本位结束" },
              { year: "1974", event: "石油美元" },
            ].map((item) => (
              <div
                key={item.year}
                style={{
                  textAlign: "center",
                  background: "rgba(0,0,0,0.6)",
                  padding: 20,
                  borderRadius: 8,
                  minWidth: 140,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#ECC94B",
                    fontFamily: "monospace",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#CBD5E0",
                    marginTop: 8,
                  }}
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Reflection */}
      <Sequence from={fps * 5} durationInFrames={fps * 6}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "20% 15%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#E2E8F0",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
              opacity: interpolate(
                frame - fps * 5,
                [0, fps * 0.5, fps * 5.5, fps * 6],
                [0, 1, 1, 0],
                { extrapolateRight: "clamp" },
              ),
              textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              lineHeight: 1.7,
              background: "rgba(0,0,0,0.4)",
              padding: 30,
              borderRadius: 8,
            }}
          >
            诚实货币的抗争从未真正结束
            <br />
            <span
              style={{ color: "#CBD5E0", fontSize: 18, fontStyle: "italic" }}
            >
              它只是换了一种形式延续着...
            </span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* End Title */}
      <Sequence from={fps * 10} durationInFrames={fps * 4}>
        <CinematicText
          text="未完待续"
          fontSize={52}
          color="#ECC94B"
          frame={frame - fps * 10}
          fadeInDuration={fps * 0.8}
          position="center"
        />
      </Sequence>

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.08} />
    </AbsoluteFill>
  );
};

export default HonestMoneySummaryDocumentaryScene;
