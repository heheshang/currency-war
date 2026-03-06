/**
 * DocumentaryBankOfEnglandScene.tsx
 *
 * Documentary-style scene for Episode 02 - Bank of England Historical Background
 * Features historical imagery with Ken Burns effects and vintage filters
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const DocumentaryBankOfEnglandScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-bank-of-england.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ opacity: 0.7, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.06} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <CinematicText
              text="THE BANK OF ENGLAND"
              fontSize={42}
              color="#ECC94B"
              frame={frame}
              fadeInDuration={30}
              position="top"
            />
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
                marginTop: 15,
              }}
            >
              私人控制国家货币的起源
            </p>
          </div>
        )}

        {frame >= 180 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [180, 210, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "100px",
                color: "#ECC94B",
                fontWeight: 700,
                textShadow: "0 0 50px rgba(236, 201, 75, 0.6)",
                letterSpacing: "10px",
              }}
            >
              1694
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#9ca3af",
                marginTop: "15px",
              }}
            >
              年成立
            </div>
          </div>
        )}

        {frame >= 540 && frame < 1050 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "800px",
              opacity: interpolate(frame, [540, 570, 990, 1050], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #ECC94B",
                borderRadius: "12px",
                padding: "30px 40px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "20px",
                  color: "#ECC94B",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                威廉三世的"创新"
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                }}
              >
                为筹集战争经费，英国国王向私人银行家借款120万英镑。
                <br />
                作为交换，这些银行家获得特许权成立"英格兰银行"——
                <br />
                <span style={{ color: "#ECC94B" }}>
                  一家私人银行，但有权发行国家货币
                </span>
                。
              </p>
            </div>
          </div>
        )}

        {frame >= 990 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [990, 1020], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              当罗斯柴尔德家族进入伦敦时，
              <br />
              <span style={{ color: "#ECC94B" }}>英格兰银行</span>
              已经控制英国金融超过一个世纪
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1694"
        title="Bank of England"
        subtitle="Private Control of National Currency"
        source="Historical Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryBankOfEnglandScene;
