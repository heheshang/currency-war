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

export const PetrodollarDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Oil/Petroleum Theme */}
      <ImageLayer
        src="/assets/images/ep08/oil_refinery_petroleum_industry_middle_east_1_pexels.jpeg"
        kenBurns={{ panDirection: "right", intensity: "moderate" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={fps * 12}
      />

      {/* Year and Title */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 11}>
        <DocumentaryOverlay
          year="1974"
          title="石油美元体系"
          subtitle="Petrodollar System"
          source="美沙货币协定"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Main Concept */}
      <Sequence from={fps * 1} durationInFrames={fps * 5}>
        <CinematicText
          text="石油 = 美元 = 权力"
          fontSize={44}
          color="#ECC94B"
          frame={frame - fps * 1}
          fadeInDuration={fps * 0.6}
          position="top"
        />
      </Sequence>

      {/* The Deal */}
      <Sequence from={fps * 3} durationInFrames={fps * 8}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10% 15%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              opacity: interpolate(frame - fps * 3, [0, fps * 0.5], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: "#E2E8F0",
                fontFamily: "Merriweather, serif",
                textAlign: "center",
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
                background: "rgba(0,0,0,0.5)",
                padding: 20,
                borderRadius: 8,
              }}
            >
              美国与沙特阿拉伯达成秘密协议
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 40,
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  background: "rgba(0,0,0,0.4)",
                  padding: 20,
                  borderRadius: 8,
                }}
              >
                <div style={{ fontSize: 32, color: "#ECC94B" }}>🇺🇸</div>
                <div style={{ fontSize: 16, color: "#CBD5E0", marginTop: 8 }}>
                  军事保护
                </div>
              </div>

              <div
                style={{
                  fontSize: 32,
                  color: "#ECC94B",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ⟷
              </div>

              <div
                style={{
                  textAlign: "center",
                  background: "rgba(0,0,0,0.4)",
                  padding: 20,
                  borderRadius: 8,
                }}
              >
                <div style={{ fontSize: 32, color: "#ECC94B" }}>🇸🇦</div>
                <div style={{ fontSize: 16, color: "#CBD5E0", marginTop: 8 }}>
                  石油仅以美元计价
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Consequence */}
      <Sequence from={fps * 8} durationInFrames={fps * 4}>
        <CinematicText
          text="全球石油贸易必须持有美元"
          fontSize={28}
          color="#10B981"
          frame={frame - fps * 8}
          fadeInDuration={fps * 0.5}
          position="bottom"
        />
      </Sequence>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.07} />
    </AbsoluteFill>
  );
};

export default PetrodollarDocumentaryScene;
