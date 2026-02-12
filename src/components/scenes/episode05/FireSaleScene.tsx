import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
// 真实历史人物替换：通用银行家角色用抽象剪影

/**
 * FireSaleScene - 场景11：银行家廉价收购一切
 *
 * 资产价格暴跌动画
 * 银行家角色收购：银行、工厂、农场
 * "美分换美元"视觉
 */
export const FireSaleScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 银行家角色淡入
  const bankerOpacity = interpolate(frame, [60, 180], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 价格标签动画
  const priceDrop = interpolate(frame, [180, 540], [0, 100], {
    extrapolateRight: "clamp",
  });

  // 收购项目显示
  const itemsOpacity = interpolate(frame, [240, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0d0d 0%, #0d1117 100%)",
      }}
    >
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
            color: "#ef4444",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          THE FIRE SALE
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Bankers Buy America For Pennies
        </div>
      </div>

      {/* 银行家角色 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "20%",
          opacity: bankerOpacity,
        }}
      >
        {/* 抽象银行家剪影 */}
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 130,
            background:
              "linear-gradient(180deg, rgba(139, 0, 0, 0.8) 0%, rgba(30, 58, 90, 0.6) 100%)",
            borderRadius: "50% 50% 25px 25px",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Wall Street
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              textAlign: "center",
            }}
          >
            "Buying everything"
          </div>
        </div>
      </div>

      {/* 资产收购列表 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          opacity: itemsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Assets Acquired
          </div>

          {/* 收购项目 */}
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "2" }}>
            <div
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: 24 }}>🏦</span>
              <span>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>
                  Banks:
                </span>{" "}
                $1.2B → $0.05B
              </span>
            </div>

            <div
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: 24 }}>🏭</span>
              <span>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>
                  Factories:
                </span>{" "}
                90% acquired
              </span>
            </div>

            <div
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: 24 }}>🌾</span>
              <span>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>
                  Farms:
                </span>{" "}
                50% foreclosed
              </span>
            </div>

            <div
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: 24 }}>🏢</span>
              <span>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>
                  Railroads:
                </span>{" "}
                For pennies
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 价格暴跌可视化 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "15%",
          opacity: priceDrop > 0 ? 1 : 0,
        }}
      >
        <svg width="300" height="150" viewBox="0 0 300 150">
          <defs>
            <linearGradient id="priceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* 价格标签 */}
          <g transform={`translate(50, ${30 + priceDrop * 0.5})`}>
            {/* 标签 */}
            <rect
              x="-30"
              y="-15"
              width="60"
              height="30"
              fill="#f5f5f4"
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* 价格 */}
            <text
              x="0"
              y="5"
              fontSize="20"
              fill="#ef4444"
              textAnchor="middle"
              fontWeight="700"
            >
              10¢
            </text>
            <text x="0" y="25" fontSize="10" fill="#9ca3af" textAnchor="middle">
              on the dollar
            </text>

            {/* 删除线 */}
            <line
              x1="-40"
              y1="0"
              x2="40"
              y2="0"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text x="0" y="-8" fontSize="12" fill="#22c55e" textAnchor="middle">
              WAS
            </text>
          </g>

          {/* 向下箭头 */}
          <path
            d="M 50,50 Q 50,70 50,90"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />

          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
            >
              <path d="M 0,0 L 0,10 L 5,5 z" fill="#22c55e" />
            </marker>
          </defs>

          {/* 摧毁资产 */}
          <g transform="translate(150, 80)" opacity={priceDrop / 100}>
            <rect
              x="-40"
              y="-25"
              width="30"
              height="20"
              fill="rgba(139, 0, 0, 0.5)"
              stroke="#ef4444"
              strokeWidth="1"
            />
            <text
              x="-25"
              y="-10"
              fontSize="10"
              fill="#ef4444"
              textAnchor="middle"
            >
              Banks
            </text>

            <rect
              x="5"
              y="-20"
              width="30"
              height="20"
              fill="rgba(139, 0, 0, 0.5)"
              stroke="#ef4444"
              strokeWidth="1"
            />
            <text
              x="20"
              y="-5"
              fontSize="10"
              fill="#ef4444"
              textAnchor="middle"
            >
              Farms
            </text>

            <rect
              x="-20"
              y="-15"
              width="30"
              height="20"
              fill="rgba(139, 0, 0, 0.5)"
              stroke="#ef4444"
              strokeWidth="1"
            />
            <text x="-5" y="0" fontSize="10" fill="#ef4444" textAnchor="middle">
              Factories
            </text>
          </g>

          {/* 收购 */}
          <g transform="translate(220, 100)">
            <text x="0" y="0" fontSize="14" fill="#ffd700" textAnchor="middle">
              Bankers Buy
            </text>
            <text x="0" y="20" fontSize="12" fill="#22c55e" textAnchor="middle">
              For 1-2 cents!
            </text>
          </g>
        </svg>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: itemsOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "Buy when blood is in the streets."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Transfer wealth from public to private hands.
        </div>
      </div>
    </AbsoluteFill>
  );
};
