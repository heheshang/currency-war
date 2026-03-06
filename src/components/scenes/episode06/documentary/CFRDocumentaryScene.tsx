import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * CFRDocumentaryScene - Council on Foreign Relations
 * America's most influential foreign policy organization
 */
export const CFRDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const membersOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const influenceOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  const notableMembers = [
    "David Rockefeller",
    "Henry Kissinger",
    "Zbigniew Brzezinski",
    "Alan Greenspan",
    "George H.W. Bush",
    "Dick Cheney",
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-cfr-meeting.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1921"
        title="Council on Foreign Relations"
        subtitle="The Shadow Government's Think Tank"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 50px",
            background: "rgba(0, 0, 0, 0.85)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 42,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            CFR
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 16,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Council on Foreign Relations
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "5%",
          opacity: membersOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: 8,
            width: "280px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            NOTABLE MEMBERS
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.9,
            }}
          >
            {notableMembers.map((member, index) => (
              <div key={index}>• {member}</div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          right: "5%",
          opacity: influenceOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            width: "300px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ef4444",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            SPHERE OF INFLUENCE
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>• Shapes US foreign policy</div>
            <div style={{ marginBottom: 8 }}>
              • Controls major media outlets
            </div>
            <div style={{ marginBottom: 8 }}>• Trains future leaders</div>
            <div style={{ marginBottom: 8 }}>• Publishes Foreign Affairs</div>
            <div>• Members in every administration</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              5,000+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Elite Members
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              100+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Years of Influence
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              12
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              CIA Directors
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default CFRDocumentaryScene;
