import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * RooseveltIdentityScene - 罗斯福的真实身份
 * 罗斯福的银行背景
 */
export const RooseveltIdentityScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const connectionsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const companiesOpacity = interpolate(frame, [600, 660], [0, 1], {
    extrapolateRight: "clamp",
  });

  const revealOpacity = interpolate(frame, [1200, 1260], [0, 1], {
    extrapolateRight: "clamp",
  });

  const familyConnections = [
    {
      relation: "曾祖父",
      name: "杰姆斯·罗斯福",
      achievement: "1784年创建纽约银行",
    },
    {
      relation: "父亲",
      name: "杰姆斯·罗斯福",
      achievement: "铁路大亨、哈佛法学院",
    },
    {
      relation: "表兄",
      name: "乔治·爱姆伦·罗斯福",
      achievement: "摩根麾下担保信托董事",
    },
  ];

  const wallStreetTies = [
    { org: "J.P. 摩根公司", role: "主要法律客户" },
    { org: "联合欧洲投资公司", role: "创始人兼总裁" },
    { org: "多家金融机构", role: "董事/副总裁" },
  ];

  const keyPeople = [
    { name: "威赫穆·库诺", role: "制造1923年德国超级通货膨胀" },
    { name: "麦克斯·沃伯格", role: "保罗·沃伯格（美联储设计师）之兄" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 罗斯福肖像 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05new/ep05-roosevelt-1932.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.55 }}
          startFrame={0}
          durationFrames={1650}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 28,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          罗斯福的真实身份
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Roosevelt's True Identity
        </div>
      </div>

      {/* 家族银行背景 */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "4%",
          width: "44%",
          opacity: connectionsOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "18px 22px",
            borderRadius: 8,
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            家族银行背景
          </div>
          {familyConnections.map((conn, index) => (
            <div
              key={index}
              style={{
                marginBottom: 10,
                opacity: interpolate(
                  frame,
                  [210 + index * 60, 240 + index * 60],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#9ca3af",
                  background: "rgba(255, 215, 0, 0.2)",
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                {conn.relation}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "#e8e8e8",
                  marginLeft: 10,
                }}
              >
                {conn.name}
              </span>
              <div
                style={{
                  fontSize: 12,
                  color: "#ffd700",
                  marginLeft: 60,
                  marginTop: 2,
                }}
              >
                {conn.achievement}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 华尔街关系 */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          right: "4%",
          width: "44%",
          opacity: companiesOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(30, 58, 90, 0.85)",
            padding: "18px 22px",
            borderRadius: 8,
            border: "2px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            华尔街关系网
          </div>
          {wallStreetTies.map((tie, index) => (
            <div
              key={index}
              style={{
                marginBottom: 10,
                opacity: interpolate(
                  frame,
                  [660 + index * 60, 690 + index * 60],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "#e8e8e8",
                }}
              >
                {tie.org}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#ffd700",
                }}
              >
                → {tie.role}
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: "1px solid rgba(255, 215, 0, 0.3)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#9ca3af",
                marginBottom: 8,
              }}
            >
              联合欧洲投资公司董事：
            </div>
            {keyPeople.map((person, index) => (
              <div
                key={index}
                style={{
                  fontSize: 12,
                  color: "#ef4444",
                  marginBottom: 4,
                }}
              >
                • {person.name} — {person.role}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 揭示真相 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: revealOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(127, 29, 29, 0.7)",
            padding: "15px 25px",
            borderRadius: 8,
            border: "2px solid #ef4444",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 16,
              color: "#e8e8e8",
              fontStyle: "italic",
            }}
          >
            "当罗斯福把自己标榜为人民拯救者时， 他的经历却在讲述另一个故事。"
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#ffd700",
              marginTop: 8,
            }}
          >
            银行家们找到了他们的人。
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default RooseveltIdentityScene;
