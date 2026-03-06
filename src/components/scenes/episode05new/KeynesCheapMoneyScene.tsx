import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * KeynesCheapMoneyScene - 凯恩斯的廉价货币
 * 凯恩斯思想转变与使徒会
 */
export const KeynesCheapMoneyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timeline = [
    { year: "1919", event: "认识通货膨胀的危害" },
    { year: "1923", event: "德国超级通货膨胀验证" },
    { year: "剑桥", event: "加入「使徒会」秘密组织" },
    { year: "1936", event: "《通论》出版，成为银行家圣经" },
  ];

  const apostleInfo = {
    name: "使徒会 (Apostles)",
    desc: "剑桥大学最精英的秘密组织",
    members: ["凯恩斯", "罗素", "维克多·罗斯柴尔德"],
    mission: "控制英国统治阶层",
  };

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 凯恩斯肖像 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05new/ep05-keynes-portrait.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.6 }}
          startFrame={0}
          durationFrames={1800}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          凯恩斯的廉价货币
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Keynes's Cheap Money
        </div>
      </div>

      {/* 内容区域 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "5%",
          width: "42%",
          opacity: contentOpacity,
        }}
      >
        {/* 时间线 */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.75)",
            padding: "20px 25px",
            borderRadius: 8,
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            思想演变
          </div>
          {timeline.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
                opacity: interpolate(
                  frame,
                  [210 + index * 60, 240 + index * 60],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <div
                style={{
                  width: 60,
                  fontFamily: "Cinzel, serif",
                  fontSize: 14,
                  color: "#ffd700",
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ffd700",
                  marginRight: 12,
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  color: "#e8e8e8",
                }}
              >
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 使徒会信息 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          right: "5%",
          width: "42%",
          opacity: interpolate(frame, [450, 510], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            background: "rgba(30, 58, 90, 0.85)",
            padding: "20px 25px",
            borderRadius: 8,
            border: "2px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 22,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            {apostleInfo.name}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#9ca3af",
              marginBottom: 16,
            }}
          >
            {apostleInfo.desc}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              marginBottom: 8,
            }}
          >
            核心成员：
          </div>
          {apostleInfo.members.map((member, index) => (
            <div
              key={index}
              style={{
                fontSize: 14,
                color: "#ffd700",
                marginLeft: 12,
                marginBottom: 4,
              }}
            >
              • {member}
            </div>
          ))}
        </div>
      </div>

      {/* 底部名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: interpolate(frame, [1200, 1280], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            background: "rgba(0, 0, 0, 0.7)",
            padding: "15px 30px",
            borderRadius: 8,
          }}
        >
          "就长久而言，我们都会死。"
          <span style={{ color: "#ffd700", marginLeft: 16 }}>—— 凯恩斯</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default KeynesCheapMoneyScene;
