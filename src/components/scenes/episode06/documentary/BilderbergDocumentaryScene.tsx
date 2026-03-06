import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * BilderbergDocumentaryScene - Bilderberg Group meetings
 * The most secretive gathering of global elites
 */
export const BilderbergDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const secrecyOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const attendeesOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const agendaOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  const notableAttendees = [
    "Royalty & Politicians",
    "Bank CEOs",
    "Media Moguls",
    "Tech Giants",
    "Military Leaders",
    "Academic Elites",
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-bilderberg-meeting.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1954"
        title="Bilderberg Group"
        subtitle="The World's Most Secretive Meeting"
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
            padding: "24px 60px",
            background: "rgba(0, 0, 0, 0.9)",
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
              letterSpacing: 4,
            }}
          >
            BILDERBERG
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Hotel de Bilderberg, Oosterbeek, Netherlands
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          opacity: secrecyOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.75)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            width: "280px",
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
            🔒 RULES OF SECRECY
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>• No press allowed inside</div>
            <div style={{ marginBottom: 8 }}>• No minutes recorded</div>
            <div style={{ marginBottom: 8 }}>• Chatham House Rule</div>
            <div style={{ marginBottom: 8 }}>• Identities protected</div>
            <div>• Location changes yearly</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "5%",
          opacity: attendeesOpacity,
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
            WHO ATTENDS
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.9,
            }}
          >
            {notableAttendees.map((attendee, index) => (
              <div key={index}>• {attendee}</div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: agendaOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(0, 0, 0, 0.85)",
            borderLeft: "4px solid #ffd700",
            maxWidth: "700px",
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
            HIDDEN AGENDA
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 15,
              color: "#e8e8e8",
              lineHeight: 1.7,
            }}
          >
            Topics discussed: Global governance, monetary policy, geopolitical
            strategy, population control, and the future of democracy.
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: agendaOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 28,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              130
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Elite Attendees
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 28,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              70+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Years of Meetings
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 28,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              Zero
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Public Records
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default BilderbergDocumentaryScene;
