import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * 没有美联储就没有一战
 * 展示美联储成立与一战爆发的关系
 */
export const NoFedNoWarDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timelineOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const conclusionOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    fps: 30,
    frame: frame - 60,
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/wwi-soldier-reenactor.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={600}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1914"
        title="The Fed and the War"
        subtitle="A Deadly Connection"
        frame={frame - 30}
        fadeInDuration={45}
      />

      {/* Timeline */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          opacity: timelineOpacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TimelineItem year="1913" event="Fed Created" isHighlight={false} />
          <TimelineArrow />
          <TimelineItem year="1914" event="WWI Begins" isHighlight={true} />
          <TimelineArrow />
          <TimelineItem year="1917" event="US Enters War" isHighlight={true} />
        </div>
      </div>

      {/* Stats Box */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: conclusionOpacity,
        }}
      >
        <div
          style={{
            padding: "24px 40px",
            background: "rgba(139, 0, 0, 0.85)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            $30 BILLION
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Loans to Allies — Banker's Bonanza
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const TimelineItem: React.FC<{
  year: string;
  event: string;
  isHighlight: boolean;
}> = ({ year, event, isHighlight }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontFamily: "Cinzel, serif",
        fontSize: isHighlight ? 28 : 20,
        color: isHighlight ? "#ef4444" : "#ffd700",
        fontWeight: 700,
      }}
    >
      {year}
    </div>
    <div
      style={{
        fontFamily: "Merriweather, serif",
        fontSize: 14,
        color: isHighlight ? "#fff" : "#9ca3af",
        marginTop: 4,
      }}
    >
      {event}
    </div>
  </div>
);

const TimelineArrow: React.FC = () => (
  <div
    style={{
      color: "#ffd700",
      fontSize: 24,
    }}
  >
    →
  </div>
);

export default NoFedNoWarDocumentaryScene;
