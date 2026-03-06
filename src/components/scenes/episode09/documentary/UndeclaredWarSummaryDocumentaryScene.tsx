import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const UndeclaredWarSummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const timelineItems = [
    { year: "1973", event: "Oil Crisis" },
    { year: "1979", event: "Volcker Shock" },
    { year: "1985", event: "Plaza Accord" },
    { year: "1992", event: "Pound Crisis" },
    { year: "1997", event: "Asian Crisis" },
  ];


  const quoteOpacity = interpolate(frame, [120, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame: frame - 30,
    fps: 30,
    from: 0.9,
    to: 1,
    config: { damping: 15 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-summary-documentary.jpg"
        kenBurns={{
          panDirection: "zoom-out",
          intensity: "moderate",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "vintage",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <ImageLayer
        src="/assets/images/ep09/ep09-soros-trading.jpg"
        kenBurns={{
          panDirection: "up",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.15,
          blendMode: "overlay",
          filter: "grayscale",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <Vignette intensity={0.7} />


      <FilmGrain opacity={0.08} />


      <CinematicText
        text="货币战争总结"
        fontSize={48}
        color="#ECC94B"
        frame={frame - 20}
        fadeInDuration={35}
        position="top"
      />


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40,
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [40, 70], [0, 1], {
              extrapolateRight: "clamp",
            }),
            transform: `scale(${scale})`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {timelineItems.map((item, index) => {
              const itemOpacity = interpolate(
                frame,
                [50 + index * 15, 70 + index * 15],
                [0, 1],
                { extrapolateRight: "clamp" },
              );
              return (
                <div
                  key={item.year}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    opacity: itemOpacity,
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      color: "#ECC94B",
                      fontFamily: "Cinzel, serif",
                      fontWeight: 700,
                      width: 100,
                      textAlign: "right",
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#ECC94B",
                      boxShadow: "0 0 10px rgba(236, 201, 75, 0.5)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 20,
                      color: "#CBD5E0",
                      fontFamily: "Merriweather, serif",
                    }}
                  >
                    {item.event}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 140,
        }}
      >
        <div
          style={{
            textAlign: "center",
            opacity: quoteOpacity,
            maxWidth: 600,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            "货币战争的硝烟从未散去，只是战场从公开转向隐蔽"
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginTop: 12,
            }}
          >
            The smoke of currency war never clears, only shifts from open to
            hidden
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="Episode Summary"
        subtitle="The Undeclared Currency War"
        year="1973-1997"
        source="Currency Wars by Song Hongbing"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
