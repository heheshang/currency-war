import React from "react";

/**
 * CurrencyBill - 纸币组件
 *
 * 用于展示各种历史货币：殖民地货币、绿钞等
 */
export interface CurrencyBillProps {
  denomination: string;
  currencyName: string;
  year?: string;
  color?: string;
  scale?: number;
  showDetails?: boolean;
}

export const CurrencyBill: React.FC<CurrencyBillProps> = ({
  denomination,
  currencyName,
  year,
  color = "#228B22",
  scale = 1,
  showDetails = true,
}) => {
  const width = 300 * scale;
  const height = 120 * scale;

  return (
    <div
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%)`,
        borderRadius: `${8 * scale}px`,
        border: `${3 * scale}px solid ${adjustColor(color, -50)}`,
        boxShadow: `0 ${10 * scale}px ${30 * scale}px rgba(0, 0, 0, 0.3)`,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Cinzel, serif",
      }}
    >
      {/* 装饰边框 */}
      <div
        style={{
          position: "absolute",
          inset: `${8 * scale}px`,
          border: `${2 * scale}px solid ${adjustColor(color, 20)}`,
          borderRadius: `${4 * scale}px`,
          opacity: 0.5,
        }}
      />

      {/* 角落装饰 */}
      <div
        style={{
          position: "absolute",
          top: `${12 * scale}px`,
          left: `${12 * scale}px`,
          fontSize: `${14 * scale}px`,
          color: "rgba(255,255,255,0.6)",
          fontWeight: 700,
        }}
      >
        {currencyName}
      </div>

      {/* 中央面额 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: `${48 * scale}px`,
            color: "#fff",
            fontWeight: 700,
            textShadow: `0 ${2 * scale}px ${10 * scale}px rgba(0,0,0,0.3)`,
            lineHeight: 1,
          }}
        >
          {denomination}
        </div>
        <div
          style={{
            fontSize: `${12 * scale}px`,
            color: "rgba(255,255,255,0.8)",
            marginTop: `${5 * scale}px`,
          }}
        >
          {showDetails && "LEGAL TENDER"}
        </div>
      </div>

      {/* 年份 */}
      {year && (
        <div
          style={{
            position: "absolute",
            bottom: `${12 * scale}px`,
            right: `${12 * scale}px`,
            fontSize: `${12 * scale}px`,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {year}
        </div>
      )}

      {/* 序列号 */}
      {showDetails && (
        <div
          style={{
            position: "absolute",
            bottom: `${12 * scale}px`,
            left: `${12 * scale}px`,
            fontSize: `${10 * scale}px`,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          SERIES • {Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}
        </div>
      )}

      {/* 纸张纹理效果 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
          opacity: 0.5,
        }}
      />
    </div>
  );
};

/**
 * LegalDocument - 法律文档组件
 *
 * 用于展示历史法律文件：货币法案、银行特许状等
 */
export interface LegalDocumentProps {
  title: string;
  year: number;
  content: string[];
  scale?: number;
  seal?: boolean;
}

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  title,
  year,
  content,
  scale = 1,
  seal = true,
}) => {
  return (
    <div
      style={{
        width: 400 * scale,
        background: "linear-gradient(to bottom, #f5e6d3 0%, #e8d5c4 100%)",
        borderRadius: `${4 * scale}px`,
        boxShadow: `0 ${15 * scale}px ${40 * scale}px rgba(0, 0, 0, 0.4)`,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Merriweather, serif",
      }}
    >
      {/* 羊皮纸纹理 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(139, 90, 43, 0.05) 1px,
            rgba(139, 90, 43, 0.05) 2px
          )`,
          opacity: 0.6,
        }}
      />

      {/* 文档边框 */}
      <div
        style={{
          position: "absolute",
          inset: `${10 * scale}px`,
          border: `${3 * scale}px double #8b5a2b`,
          borderRadius: `${2 * scale}px`,
        }}
      />

      {/* 标题区域 */}
      <div
        style={{
          padding: `${30 * scale}px ${40 * scale}px ${20 * scale}px`,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: `${14 * scale}px`,
            color: "#8b5a2b",
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: `${10 * scale}px`,
          }}
        >
          An Act of Congress
        </div>
        <div
          style={{
            fontSize: `${24 * scale}px`,
            color: "#2c1810",
            fontWeight: 700,
            marginBottom: `${5 * scale}px`,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: `${16 * scale}px`,
            color: "#5c4033",
            fontStyle: "italic",
          }}
        >
          {year}
        </div>
      </div>

      {/* 分隔线 */}
      <div
        style={{
          height: `${2 * scale}px`,
          background: "#8b5a2b",
          margin: `0 ${40 * scale}px ${20 * scale}px`,
          opacity: 0.5,
        }}
      />

      {/* 内容 */}
      <div
        style={{
          padding: `0 ${40 * scale}px ${30 * scale}px`,
          position: "relative",
          zIndex: 1,
        }}
      >
        {content.map((line, index) => (
          <div
            key={index}
            style={{
              fontSize: `${13 * scale}px`,
              color: "#3d2817",
              lineHeight: "1.6",
              textAlign: "justify",
              marginBottom: `${8 * scale}px`,
              fontStyle: index === 0 ? "italic" : "normal",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* 印章 */}
      {seal && (
        <div
          style={{
            position: "absolute",
            bottom: `${30 * scale}px`,
            right: `${30 * scale}px`,
            width: `${80 * scale}px`,
            height: `${80 * scale}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, #c41e3a, #8b0000)`,
            boxShadow: `0 ${4 * scale}px ${12 * scale}px rgba(0,0,0,0.3)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: `${60 * scale}px`,
              height: `${60 * scale}px`,
              borderRadius: "50%",
              border: `${3 * scale}px solid rgba(255,255,255,0.3)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: `${10 * scale}px`,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            OFFICIAL
          </div>
        </div>
      )}

      {/* 签名线 */}
      <div
        style={{
          position: "absolute",
          bottom: `${30 * scale}px`,
          left: `${40 * scale}px`,
          right: seal ? `${120 * scale}px` : `${30 * scale}px`,
        }}
      >
        <div
          style={{
            height: `${1 * scale}px`,
            background: "#5c4033",
            marginBottom: `${8 * scale}px`,
          }}
        />
        <div
          style={{
            fontSize: `${11 * scale}px`,
            color: "#5c4033",
            fontStyle: "italic",
          }}
        >
          Approved
        </div>
      </div>
    </div>
  );
};

/**
 * 辅助函数：调整颜色亮度
 */
function adjustColor(color: string, amount: number): string {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
