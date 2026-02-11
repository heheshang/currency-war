import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";
import { LegalDocument } from "../../documents/CurrencyBill";

/**
 * NationalBankActScene - 国民银行法案场景
 *
 * 1863年国民银行法 - 致命的妥协
 * 货币发行与政府债务永久锁定
 */
export const NationalBankActScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const documentShow = spring({ frame: frame - 60, fps: 30, config: { damping: 15, stiffness: 60 } });
  const quoteOpacity = interpolate(frame, [180, 270], [0, 1], { extrapolateRight: "clamp" });
  const explanationOpacity = interpolate(frame, [330, 420], [0, 1], { extrapolateRight: "clamp" });
  const resultOpacity = interpolate(frame, [510, 600], [0, 1], { extrapolateRight: "clamp" });

  // 锁链动画
  const chainOpacity = interpolate(frame, [390, 480], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a0a0a 0%, #0d1117 100%)",
      }}
    >
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
            fontSize: 32,
            color: "#8b0000",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Fatal Compromise
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          National Bank Act of 1863
        </div>
      </div>

      {/* 法律文档 */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: `translateY(-50%) scale(${documentShow})`,
        }}
      >
        <LegalDocument
          title="NATIONAL BANK ACT"
          year={1863}
          content={[
            "Private banks authorized to issue",
            "national currency",
            "",
            "Currency backed by",
            "government debt",
            "",
            "Money permanently tied",
            "to debt obligations",
          ]}
          scale={0.65}
          seal={true}
        />
      </div>

      {/* 索罗门·切斯名言 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "10%",
          opacity: quoteOpacity,
          width: "35%",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 12,
            color: "#9ca3af",
            marginBottom: 10,
            letterSpacing: 1,
          }}
        >
          SALMON CHASE — Lincoln's Treasury Secretary
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#e8e8e8",
            fontStyle: "italic",
            lineHeight: "1.5",
          }}
        >
          "This is my greatest financial error. The monopoly it creates will affect every aspect of this nation."
        </div>
      </div>

      {/* 银行家角色 */}
      <div
        style={{
          position: "absolute",
          right: "25%",
          bottom: "30%",
          opacity: explanationOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={0.9}
          characterType="banker"
          action="talk"
          facingRight={false}
          frame={frame}
          skinColor="#F5DEB3"
          clothColor="#1E3A5A"
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Merriweather, serif",
            fontSize: 11,
            color: "#8b0000",
            whiteSpace: "nowrap",
          }}
        >
          Private Bankers
        </div>
      </div>

      {/* 锁链效果 - 债务与货币的绑定 */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: chainOpacity,
          textAlign: "center",
        }}
      >
        <svg width={300} height={100} viewBox="0 0 300 100">
          {/* 左边：货币 */}
          <g transform="translate(30, 50)">
            <circle r={30} fill="#228B22" opacity={0.8} />
            <text
              x={0}
              y={5}
              fontSize={14}
              fill="#fff"
              fontWeight={700}
              textAnchor="middle"
              fontFamily="Cinzel, serif"
            >
              MONEY
            </text>
          </g>

          {/* 链条 */}
          <g opacity={0.7}>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(${80 + i * 35}, 50)`}>
                <ellipse
                  rx={15}
                  ry={10}
                  fill="none"
                  stroke="#8b4513"
                  strokeWidth={3}
                />
              </g>
            ))}
          </g>

          {/* 右边：债务 */}
          <g transform="translate(270, 50)">
            <circle r={30} fill="#8b0000" opacity={0.8} />
            <text
              x={0}
              y={5}
              fontSize={14}
              fill="#fff"
              fontWeight={700}
              textAnchor="middle"
              fontFamily="Cinzel, serif"
            >
              DEBT
            </text>
          </g>

          {/* 锁 */}
          <g transform="translate(150, 50)">
            <rect x={-10} y={-15} width={20} height={30} fill="#ffd700" opacity={0.8} />
            <circle r={8} fill="none" stroke="#ffd700" strokeWidth={2} />
          </g>
        </svg>
      </div>

      {/* 关键说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: explanationOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#8b0000",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          THE TRAP
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 15,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          Paying off debt would destroy the money supply
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
            marginTop: 8,
          }}
        >
          The government can NEVER be debt-free
        </div>
      </div>

      {/* 后果 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: resultOpacity,
          textAlign: "center",
          padding: "12px 25px",
          background: "rgba(139, 0, 0, 0.2)",
          border: "1px solid #8b0000",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 13,
            color: "#e8e8e8",
          }}
        >
          <span style={{ color: "#8b0000", fontWeight: 600 }}>Result:</span> By 2006, US national debt exceeded $8 trillion —
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#6b7280",
            marginTop: 4,
            fontStyle: "italic",
          }}
        >
          All because of this compromise made in 1863
        </div>
      </div>
    </AbsoluteFill>
  );
};
