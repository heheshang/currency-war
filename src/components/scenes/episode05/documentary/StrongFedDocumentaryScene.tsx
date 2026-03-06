import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * 斯特朗操纵下的美联储
 */
export const StrongFedDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const profileOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const debtScale = spring({
    fps: 30,
    frame: frame - 150,
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
          src="/assets/images/episode05/historic-bank-facade.jpg"
          kenBurns={{ panDirection: "right", intensity: "moderate" }}
          layer={{ filter: "vintage", opacity: 0.6 }}
          startFrame={0}
          durationFrames={540}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1914-1920"
        title="Benjamin Strong"
        subtitle="The Fed's True Master"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "8%",
          opacity: profileOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 28px",
            background: "rgba(0,0,0,0.85)",
            border: "2px solid #ffd700",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#ffd700",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            GOVERNOR
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div>• NY Federal Reserve Bank</div>
            <div>• Morgan's chosen leader</div>
            <div>• Controlled entire Fed system</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          opacity: statsOpacity,
          transform: `scale(${debtScale})`,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.85)",
            border: "2px solid #ef4444",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#ef4444",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            US NATIONAL DEBT
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "Cinzel, serif",
                fontSize: 24,
                color: "#9ca3af",
                textDecoration: "line-through",
              }}>
                $1B
              </div>
              <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#718096" }}>
                1916
              </div>
            </div>
            <div style={{ color: "#ffd700", fontSize: 28 }}>→</div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#ef4444",
                fontWeight: 700,
              }}>
                $25B
              </div>
              <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#9ca3af" }}>
                1920
              </div>
            </div>
          </div>
          <div style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#ef4444",
            marginTop: 12,
            textAlign: "center",
          }}>
            25x increase in 4 years
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default StrongFedDocumentaryScene;
