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

export const ReaganDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Reagan Era Theme */}
      <ImageLayer
        src="/assets/images/ep08/ronald_reagan_president_portrait_vintage_1_pexels.jpeg"
        kenBurns={{ panDirection: "left", intensity: "subtle" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={fps * 10}
      />

      {/* Year and Title */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 9}>
        <DocumentaryOverlay
          year="1981"
          title="里根黄金委员会"
          subtitle="U.S. Gold Commission"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Main Title */}
      <Sequence from={fps * 1} durationInFrames={fps * 4}>
        <CinematicText
          text="回归金本位的讨论"
          fontSize={40}
          color="#ECC94B"
          frame={frame - fps * 1}
          fadeInDuration={fps * 0.5}
          position="top"
        />
      </Sequence>

      {/* Commission Members */}
      <Sequence from={fps * 2} durationInFrames={fps * 7}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10% 20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              opacity: interpolate(frame - fps * 2, [0, fps * 0.5], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            {[
              { name: "罗纳德·里根", role: "美国总统" },
              { name: "保罗·沃尔克", role: "美联储主席" },
              { name: "亚历山大·黑格", role: "国务卿" },
            ].map((person, idx) => (
              <div
                key={person.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "rgba(0,0,0,0.5)",
                  padding: 16,
                  borderRadius: 8,
                  transform: `translateX(${interpolate(
                    frame - fps * 2,
                    [0, fps * 0.6 + idx * fps * 0.15],
                    [-50, 0],
                    { extrapolateRight: "clamp" },
                  )}px)`,
                  opacity: interpolate(
                    frame - fps * 2,
                    [0, fps * 0.4 + idx * fps * 0.15],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  ),
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #ECC94B 0%, #D69E2E 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    color: "#1a1a1a",
                    fontWeight: 700,
                  }}
                >
                  {person.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{ fontSize: 18, color: "#E2E8F0", fontWeight: 600 }}
                  >
                    {person.name}
                  </div>
                  <div style={{ fontSize: 14, color: "#718096" }}>
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Outcome */}
      <Sequence from={fps * 7} durationInFrames={fps * 3}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 20% 15%",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#DC2626",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
              opacity: interpolate(frame - fps * 7, [0, fps * 0.3], [0, 1], {
                extrapolateRight: "clamp",
              }),
              textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              fontStyle: "italic",
            }}
          >
            结论: "恢复金本位并非可行方案"
          </div>
        </AbsoluteFill>
      </Sequence>

      <Vignette intensity={0.65} />
      <FilmGrain opacity={0.06} />
    </AbsoluteFill>
  );
};

export default ReaganDocumentaryScene;
