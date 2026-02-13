import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Episode06SummaryScene - 场景7：总结与警示
 *
 * 总结Episode06的关键内容
 * 强调精英俱乐部的全球影响力
 * 启发观众思考
 *
 * 时长：50秒（1,500帧 @ 30fps）
 * 开始帧：12,900（430秒 @ 30fps）
 */
export const Episode06SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 要点1淡入
  const point1Opacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 要点2淡入
  const point2Opacity = interpolate(frame, [270, 360], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 要点3淡入
  const point3Opacity = interpolate(frame, [390, 480], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 警示淡入
  const warningOpacity = interpolate(frame, [660, 750], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [840, 930], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 背景动画
  const lineRotate = interpolate(frame, [0, 900], [0, 180], {
    extrapolateRight: "clamp",
  });

  const keyPoints = [
    {
      title: "Colonel House",
      desc: "The 'spiritual godfather' who wrote the blueprint for world government",
      cn: "豪斯上校 — 撰写世界政府蓝图的「精神教父」",
    },
    {
      title: "Council on Foreign Relations",
      desc: "The 'central party school' of American political elite",
      cn: "外交协会 — 美国政治精英的「中央党校」",
    },
    {
      title: "BIS",
      desc: "The 'bank of bankers' making secret decisions in Basel",
      cn: "国际清算银行 — 在巴塞尔秘密决策的「银行家的银行」",
    },
    {
      title: "IMF & World Bank",
      desc: "Tools of dollar hegemony with 'conditional' loans",
      cn: "IMF与世界银行 — 美元霸权的工具",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 背景装饰 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${lineRotate}deg)`,
          width: "900px",
          height: "900px",
          border: "1px solid rgba(255, 215, 0, 0.08)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${-lineRotate * 0.5}deg)`,
          width: "700px",
          height: "700px",
          border: "1px solid rgba(255, 215, 0, 0.12)",
          borderRadius: "50%",
        }}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 44,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Summary
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 26,
            color: "#d4d4d4",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          总结与警示
        </div>
      </div>

      {/* 要点1 & 2 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "42%",
          opacity: point1Opacity,
        }}
      >
        <div
          style={{
            padding: "16px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 8,
            }}
          >
            1. {keyPoints[0].title}
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.5" }}>
            {keyPoints[0].desc}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 6,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {keyPoints[0].cn}
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 8,
            }}
          >
            2. {keyPoints[1].title}
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.5" }}>
            {keyPoints[1].desc}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 6,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {keyPoints[1].cn}
          </div>
        </div>
      </div>

      {/* 要点3 & 4 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "5%",
          width: "42%",
          opacity: point2Opacity,
        }}
      >
        <div
          style={{
            padding: "16px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 8,
            }}
          >
            3. {keyPoints[2].title}
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.5" }}>
            {keyPoints[2].desc}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 6,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {keyPoints[2].cn}
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 8,
            }}
          >
            4. {keyPoints[3].title}
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.5" }}>
            {keyPoints[3].desc}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 6,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {keyPoints[3].cn}
          </div>
        </div>
      </div>

      {/* 神秘俱乐部网络 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          opacity: point3Opacity,
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "rgba(13, 17, 23, 0.9)",
            borderRadius: "12px",
            border: "2px solid rgba(255, 215, 0, 0.5)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            The Elite Club Network
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: "10px 16px",
                background: "#1e3a5a",
                borderRadius: "6px",
                border: "2px solid #ffd700",
              }}
            >
              <span style={{ color: "#ffd700", fontWeight: 600 }}>House</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 16 }}>→</div>
            <div
              style={{
                padding: "10px 16px",
                background: "#1e3a5a",
                borderRadius: "6px",
                border: "2px solid #3b82f6",
              }}
            >
              <span style={{ color: "#3b82f6", fontWeight: 600 }}>CFR</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 16 }}>→</div>
            <div
              style={{
                padding: "10px 16px",
                background: "#1e3a5a",
                borderRadius: "6px",
                border: "2px solid #22c55e",
              }}
            >
              <span style={{ color: "#22c55e", fontWeight: 600 }}>BIS</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 16 }}>→</div>
            <div
              style={{
                padding: "10px 16px",
                background: "#1e3a5a",
                borderRadius: "6px",
                border: "2px solid #ef4444",
              }}
            >
              <span style={{ color: "#ef4444", fontWeight: 600 }}>Bilderberg</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 16 }}>→</div>
            <div
              style={{
                padding: "10px 16px",
                background: "#1e3a5a",
                borderRadius: "6px",
                border: "2px solid #ffd700",
              }}
            >
              <span style={{ color: "#ffd700", fontWeight: 600 }}>Trilateral</span>
            </div>
          </div>
        </div>
      </div>

      {/* 警示 */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "5%",
          width: "90%",
          opacity: warningOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
            textAlign: "center",
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
            ⚠️ Key Warning
          </div>
          <div
            style={{
              fontSize: 15,
              color: "#e8e8e8",
              lineHeight: "1.7",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            这些精英俱乐部跨越国界、政治党派和政府机构，
            <br />
            形成一个隐秘的权力网络，影响着全球数十亿人的命运。
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
            maxWidth: "80%",
          }}
        >
          "Knowledge is power. Information is power.
          <br />
          The secret of their control is hidden in plain sight."
        </div>
      </div>
    </AbsoluteFill>
  );
};
