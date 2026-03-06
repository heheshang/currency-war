import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * WallStreetHitlerScene - 华尔街资助希特勒
 * 纳粹背后的资金
 */
export const WallStreetHitlerScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fundingOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const meetingsOpacity = interpolate(frame, [600, 660], [0, 1], {
    extrapolateRight: "clamp",
  });

  const companiesOpacity = interpolate(frame, [1050, 1110], [0, 1], {
    extrapolateRight: "clamp",
  });

  const conclusionOpacity = interpolate(frame, [1350, 1410], [0, 1], {
    extrapolateRight: "clamp",
  });

  const funding = [
    { plan: "道威斯计划 (1924-1929)", amount: "巨额贷款" },
    { plan: "杨计划 (1929-1931)", amount: "继续输血" },
    { plan: "德国实际获得", amount: "+520亿马克" },
  ];

  const meetings = [
    {
      date: "1929.6",
      participants: "摩根、洛克菲勒、美联储首脑",
      decision: "选择希特勒",
    },
    {
      date: "1929.12",
      participants: "西德尼·沃伯格会见希特勒",
      decision: "1000万美元",
    },
    {
      date: "1931.10",
      participants: "英格兰银行诺曼加入",
      decision: "追加资金",
    },
    { date: "1933.2", participants: "国会纵火案当晚", decision: "最终确认" },
  ];

  const usCompanies = ["标准石油", "通用汽车", "福特", "通用电气", "杜邦"];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 1930年代德国工厂或希特勒 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05new/ep05-hitler-1933.jpg"
          kenBurns={{ panDirection: "right", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.5 }}
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
          top: "5%",
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
          华尔街资助希特勒
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Wall Street Funded Hitler
        </div>
      </div>

      {/* 资金流向 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "4%",
          width: "42%",
          opacity: fundingOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "16px 20px",
            borderRadius: 8,
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            对德贷款 (1924-1931)
          </div>
          {funding.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                opacity: interpolate(
                  frame,
                  [210 + index * 60, 240 + index * 60],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <span style={{ fontSize: 13, color: "#e8e8e8" }}>
                {item.plan}
              </span>
              <span style={{ fontSize: 13, color: "#ef4444", fontWeight: 600 }}>
                {item.amount}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: 12,
              paddingTop: 12,
              borderTop: "1px solid rgba(255, 215, 0, 0.3)",
              fontSize: 12,
              color: "#9ca3af",
            }}
          >
            德国仅支付860亿马克战争赔款
          </div>
        </div>
      </div>

      {/* 秘密会议 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "4%",
          width: "48%",
          opacity: meetingsOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(30, 58, 90, 0.85)",
            padding: "16px 20px",
            borderRadius: 8,
            border: "2px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            《西德尼·沃伯格》揭秘
          </div>
          {meetings.map((m, index) => (
            <div
              key={index}
              style={{
                marginBottom: 10,
                opacity: interpolate(
                  frame,
                  [660 + index * 70, 690 + index * 70],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#ffd700",
                  fontFamily: "Cinzel, serif",
                }}
              >
                {m.date}
              </div>
              <div style={{ fontSize: 12, color: "#e8e8e8" }}>
                {m.participants}
              </div>
              <div style={{ fontSize: 11, color: "#ef4444" }}>
                → {m.decision}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 美国公司 */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: companiesOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(127, 29, 29, 0.7)",
            padding: "15px 25px",
            borderRadius: 8,
            border: "2px solid #ef4444",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#9ca3af",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            资助纳粹德国的美国公司
          </div>
          <div
            style={{
              display: "flex",
              gap: 15,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {usCompanies.map((company, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(239, 68, 68, 0.3)",
                  padding: "6px 12px",
                  borderRadius: 4,
                  fontSize: 13,
                  color: "#ffd700",
                }}
              >
                {company}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            全是摩根和洛克菲勒的公司
          </div>
        </div>
      </div>

      {/* 结论 */}
      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: conclusionOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            padding: "12px 20px",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 15,
              color: "#e8e8e8",
            }}
          >
            通往第二次世界大战的道路，铺满了华尔街的黄金。
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default WallStreetHitlerScene;
