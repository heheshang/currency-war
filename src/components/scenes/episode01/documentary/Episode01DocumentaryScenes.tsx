import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary";
import { IMAGE_BASE } from "../../../../utils/mediaConfig";
import { ElasticText } from "../../../animations";
/**
 * Episode01 Documentary Scene Components
 *
 * 场景只负责视觉渲染，字幕由 Episode 层级统一管理
 * 每个场景保留：
 * - ImageLayer: 背景图片与 Ken Burns 效果
 * - Vignette/FilmGrain: 电影感效果
 * - DocumentaryOverlay: 纪录片风格标题叠加
 * - CinematicText: 电影感文字
 * - SVG 动画: 场景特有的视觉动画
 */

// 场景 0: 货币大厦的危机 - 黄金与货币历史
export const AncientMarketDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/gold-ancient.jpg`}
        kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
        layer={{ filter: "vintage", opacity: 1 }}
        durationFrames={durationFrames}
      />
      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.05} />
      <CinematicText
        text="In the Beginning..."
        fontSize={56}
        frame={frame}
        fadeInDuration={45}
        position="center"
      />
      {frame > 90 && (
        <DocumentaryOverlay
          title="The Ancient Marketplace"
          subtitle="Where gold was the universal language of trade"
          frame={frame - 90}
          fadeInDuration={30}
        />
      )}
    </AbsoluteFill>
  );
};

// 场景 1: 中国经济航母起航
export const ChinaRiseDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/china-economic-rise.jpg`}
        kenBurns={{ panDirection: "right", intensity: "dramatic" }}
        layer={{ filter: "dramatic", opacity: 0.95 }}
        durationFrames={durationFrames}
      />
      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.06} />
      <DocumentaryOverlay
        year="2006"
        title="China's Economic Rise"
        subtitle="The aircraft carrier has set sail"
        frame={frame}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};

// 场景 2: 看不见硝烟的战场
export const FinancialWarDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/financial-war.jpg`}
        kenBurns={{ panDirection: "zoom-out", intensity: "moderate" }}
        layer={{ filter: "dramatic", opacity: 0.9 }}
        durationFrames={durationFrames}
      />
      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.08} />
      <CinematicText
        text="The Invisible Battlefield"
        fontSize={48}
        color="#FC8181"
        frame={frame}
        fadeInDuration={30}
        position="top"
      />
    </AbsoluteFill>
  );
};

// 场景 3: 债务货币的陷阱 - 带债务螺旋动画
export const DebtTrapDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 债务螺旋动画
  const spiralRotation = interpolate(frame, [0, durationFrames], [0, 720]);
  const spiralScale = interpolate(frame, [0, 60], [0.3, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 债务危机背景图 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/ep01-debt-crisis.jpg`}
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.7 }}
        durationFrames={durationFrames}
      />
      {/* 深色叠加层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(10,10,10,0.4) 100%)",
        }}
      />

      {/* 债务螺旋SVG动画 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${spiralScale})`,
        }}
      >
        <svg width={400} height={400} viewBox="0 0 400 400">
          <defs>
            <linearGradient
              id="debtGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9F7AEA" />
              <stop offset="50%" stopColor="#6B46C1" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* 债务螺旋 */}
          <g
            transform={`rotate(${spiralRotation}, 200, 200)`}
            filter="url(#glow)"
          >
            {[...Array(6)].map((_, i) => {
              const radius = 50 + i * 30;
              const opacity = 1 - i * 0.12;
              return (
                <circle
                  key={i}
                  cx={200}
                  cy={200}
                  r={radius}
                  fill="none"
                  stroke="url(#debtGradient)"
                  strokeWidth={3}
                  strokeDasharray={`${10 + i * 5} ${5 + i * 3}`}
                  opacity={opacity}
                />
              );
            })}
          </g>
          {/* 中心 "$" 符号 */}
          <text
            x={200}
            y={215}
            textAnchor="middle"
            fill="#ECC94B"
            fontSize={60}
            fontWeight="bold"
            fontFamily="Cinzel, serif"
          >
            $
          </text>
          {/* 债务标签 */}
          {frame > 100 &&
            [
              { angle: 0, label: "DEBT" },
              { angle: 60, label: "INTEREST" },
              { angle: 120, label: "INFLATION" },
              { angle: 180, label: "CONTROL" },
              { angle: 240, label: "CRISIS" },
              { angle: 300, label: "REPEAT" },
            ].map((item, i) => {
              const delay = i * 15;
              const opacity = interpolate(
                frame,
                [100 + delay, 130 + delay],
                [0, 0.8],
                { extrapolateRight: "clamp" },
              );
              const angle = (item.angle * Math.PI) / 180;
              const x = 200 + Math.cos(angle) * 160;
              const y = 200 + Math.sin(angle) * 160;
              return (
                <text
                  key={i}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fill="#9F7AEA"
                  fontSize={14}
                  fontWeight="600"
                  opacity={opacity}
                  fontFamily="Merriweather, serif"
                >
                  {item.label}
                </text>
              );
            })}
        </svg>
      </div>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.06} />

      <DocumentaryOverlay
        title="The Debt Trap"
        subtitle="When money becomes debt, debt becomes power"
        frame={frame}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};

// 场景 4: 金融危机预言成真 - 带数据可视化
export const ProphecyDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 数据增长动画
  const barHeights = [0.7, 0.85, 0.6, 0.95, 0.75];
  const warningFlash = Math.sin(frame * 0.1) > 0.5 ? 1 : 0.3;

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 2008金融危机背景图 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/ep01-financial-crisis-2008.jpg`}
        kenBurns={{ panDirection: "zoom-out", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.6 }}
        durationFrames={durationFrames}
      />
      {/* 深红色叠加层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(45,31,31,0.3) 0%, rgba(13,17,23,0.5) 100%)",
        }}
      />

      {/* 危机数据可视化 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "flex-end",
          gap: 20,
        }}
      >
        {barHeights.map((height, i) => {
          const barOpacity = interpolate(frame, [i * 15, i * 15 + 30], [0, 1], {
            extrapolateRight: "clamp",
          });
          const animatedHeight = interpolate(
            frame,
            [i * 15, i * 15 + 45],
            [0, height * 200],
            { extrapolateRight: "clamp" },
          );
          const isHighest = i === 3;
          return (
            <div key={i} style={{ opacity: barOpacity, textAlign: "center" }}>
              <div
                style={{
                  width: 50,
                  height: animatedHeight,
                  background: isHighest
                    ? `linear-gradient(180deg, #E53E3E 0%, #9B2C2C 100%)`
                    : `linear-gradient(180deg, #4A5568 0%, #2D3748 100%)`,
                  borderRadius: 4,
                  boxShadow: isHighest
                    ? `0 0 20px rgba(229, 62, 62, ${warningFlash * 0.5})`
                    : "none",
                }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: "#718096" }}>
                {2004 + i}
              </div>
            </div>
          );
        })}
      </div>

      {/* 预言年份标记 */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [90, 120], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#E53E3E",
            fontFamily: "Cinzel, serif",
          }}
        >
          2006 PREDICTION → 2008 CRISIS
        </div>
        <div
          style={{
            width: "100%",
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #E53E3E, transparent)",
            marginTop: 10,
          }}
        />
      </div>

      <Vignette intensity={0.5} />

      <CinematicText
        text="The Prophecy Fulfilled"
        fontSize={42}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={35}
        position="top"
      />
    </AbsoluteFill>
  );
};

// 场景 5: 历史的警示 - 苏联解体、亚洲金融风暴、日本衰退
export const HistoryWarningDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  const events = [
    { year: "1991", event: "USSR Collapse", flag: "🇷🇺" },
    { year: "1997", event: "Asian Crisis", flag: "🌏" },
    { year: "1990s", event: "Japan Stagnation", flag: "🇯🇵" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 苏联解体背景图 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/ep01-soviet-collapse.jpg`}
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ filter: "vintage", opacity: 0.6 }}
        durationFrames={durationFrames}
      />
      {/* 深色历史感叠加层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(26,26,46,0.4) 0%, rgba(13,17,23,0.5) 50%, rgba(26,10,10,0.4) 100%)",
        }}
      />

      {/* 历史事件时间线 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        {events.map((item, i) => {
          const delay = i * 40;
          const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
            extrapolateRight: "clamp",
          });
          const translateX = interpolate(frame, [delay, delay + 30], [-50, 0], {
            extrapolateRight: "clamp",
          });
          const shakeX = frame > delay + 100 ? Math.sin(frame * 0.2) * 2 : 0;

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${translateX}px) translateX(${shakeX}px)`,
                display: "flex",
                alignItems: "center",
                gap: 15,
                background: "rgba(0, 0, 0, 0.5)",
                padding: "12px 20px",
                borderRadius: 8,
                borderLeft: "4px solid #E53E3E",
              }}
            >
              <span style={{ fontSize: 32 }}>{item.flag}</span>
              <div>
                <div
                  style={{
                    fontSize: 24,
                    color: "#ECC94B",
                    fontFamily: "Cinzel, serif",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#CBD5E0",
                    fontFamily: "Merriweather, serif",
                  }}
                >
                  {item.event}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.05} />

      <DocumentaryOverlay
        title="Lessons from History"
        subtitle="Coincidence or calculated?"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

// 场景 6: 战争已经开始 - 结尾警示
export const WarBeginsDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 战争效果
  const alertPulse = Math.sin(frame * 0.08) * 0.15;
  const scale = interpolate(frame, [0, 45], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 货币战争背景图 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/ep01-currency-war.jpg`}
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.5 }}
        durationFrames={durationFrames}
      />
      {/* 红色警报叠加层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(229, 62, 62, ${0.1 + alertPulse}) 0%, rgba(13,17,23,0.6) 70%)`,
        }}
      />

      {/* 主标题动画 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 56,
            color: "#E53E3E",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            textShadow: "0 0 30px rgba(229, 62, 62, 0.5)",
            letterSpacing: 6,
            marginBottom: 20,
          }}
        >
          <ElasticText text="WAR HAS BEGUN" delay={0} stagger={3} />
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#ECC94B",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
            opacity: interpolate(frame, [30, 60], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          Though you cannot see the smoke
        </div>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [60, 90], [0, 1], {
            extrapolateRight: "clamp",
          }),
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 16,
            color: "#718096",
            fontFamily: "Merriweather, serif",
          }}
        >
          Currency War • Episode 1
        </div>
      </div>

      <Vignette intensity={0.7} />
    </AbsoluteFill>
  );
};

// 保留 InflationDocumentary 作为备用
export const InflationDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/inflation-graph.jpg`}
        kenBurns={{ panDirection: "left", intensity: "subtle" }}
        layer={{ filter: "none", opacity: 0.85 }}
        durationFrames={durationFrames}
      />
      <Vignette intensity={0.5} />
      <DocumentaryOverlay
        year="1971"
        title="The Era of Fiat Money"
        subtitle="When money became debt"
        source="Federal Reserve Data"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

// ============================================
// 新增组件 - 修复场景-字幕不匹配问题
// ============================================

/**
 * Scene 0: 作者2006年写作背景
 * 字幕内容：2006年夏，房地产泡沫如日中天，作者对金融海啸的忧虑
 * 视觉意境：作者视角，时代背景，危机前夜的宁静
 */
export const AuthorWarningDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 年份脉冲效果
  const yearPulse = Math.sin(frame * 0.05) * 0.1 + 0.9;
  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 2006时代背景图 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/ep01-financial-crisis-2008.jpg`}
        kenBurns={{ panDirection: "zoom-out", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.4 }}
        durationFrames={durationFrames}
      />
      {/* 深蓝忧虑叠加层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(30,41,59,0.6) 0%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      {/* 年份标记 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
            color: "#ECC94B",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: bgOpacity * yearPulse,
            textShadow: "0 0 40px rgba(236, 201, 75, 0.3)",
          }}
        >
          2006
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94A3B8",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
            opacity: interpolate(frame, [60, 100], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          The Summer Before the Storm
        </div>
      </div>

      {/* 作者引言框 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "70%",
          opacity: interpolate(frame, [90, 130], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "24px 32px",
            borderRadius: 8,
            borderLeft: "4px solid #ECC94B",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#E2E8F0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "The currency edifice is built on the sand of American debt."
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#94A3B8",
              fontFamily: "Cinzel, serif",
              marginTop: 12,
            }}
          >
            — Song Hongbing, Currency Wars
          </div>
        </div>
      </div>

      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.04} />
    </AbsoluteFill>
  );
};

/**
 * Scene 2: 纸币演变史
 * 字幕内容：纸币作为金银收据，1971年美元与黄金脱钩，债务货币诞生
 * 视觉意境：货币演变时间线，从金银到纸币到债务
 */
export const PaperMoneyEvolutionDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 时间线节点
  const timeline = [
    { year: "Ancient", label: "Gold & Silver", icon: "🪙" },
    { year: "1694", label: "Bank of England", icon: "🏦" },
    { year: "1913", label: "Federal Reserve", icon: "💵" },
    { year: "1971", label: "Nixon Shock", icon: "⚡" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 金币背景 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/gold-coins-roman.jpg`}
        kenBurns={{ panDirection: "left", intensity: "subtle" }}
        layer={{ filter: "vintage", opacity: 0.35 }}
        durationFrames={durationFrames}
      />
      {/* 深紫历史感叠加 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(75,0,130,0.2) 0%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      {/* 标题 */}
      <DocumentaryOverlay
        title="The Evolution of Money"
        subtitle="From gold receipts to debt instruments"
        frame={frame}
        fadeInDuration={40}
      />

      {/* 时间线 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "10%",
          right: "10%",
        }}
      >
        {/* 连接线 */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 40,
            right: 40,
            height: 2,
            background:
              "linear-gradient(90deg, #FFD700, #9F7AEA, #4B0082, #E53E3E)",
            opacity: interpolate(frame, [0, 60], [0, 0.6], {
              extrapolateRight: "clamp",
            }),
          }}
        />

        {/* 时间节点 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {timeline.map((item, i) => {
            const delay = i * 30;
            const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
              extrapolateRight: "clamp",
            });
            const scale = interpolate(frame, [delay, delay + 20], [0.5, 1], {
              extrapolateRight: "clamp",
            });
            const isHighlight = i === 3; // 1971 Nixon Shock

            return (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  opacity,
                  transform: `scale(${scale})`,
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    marginBottom: 8,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: isHighlight
                      ? "#E53E3E"
                      : "rgba(255,215,0,0.2)",
                    border: isHighlight
                      ? "3px solid #E53E3E"
                      : "2px solid #FFD700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    boxShadow: isHighlight
                      ? "0 0 20px rgba(229,62,62,0.5)"
                      : "none",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: isHighlight ? "#fff" : "#FFD700",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: isHighlight ? "#E53E3E" : "#ECC94B",
                    fontFamily: "Cinzel, serif",
                    marginTop: 12,
                    fontWeight: isHighlight ? 700 : 400,
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#94A3B8",
                    fontFamily: "Merriweather, serif",
                    marginTop: 4,
                    maxWidth: 80,
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 1971关键信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [120, 160], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#E53E3E",
            fontFamily: "Merriweather, serif",
            textAlign: "center",
          }}
        >
          "August 15, 1971: The dollar divorced gold."
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#94A3B8",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Money became pure debt.
        </div>
      </div>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.05} />
    </AbsoluteFill>
  );
};

/**
 * Scene 6: 中国金融风险警示
 * 字幕内容：中国经济航母会一帆风顺吗？金融战争的隐蔽性和残酷性
 * 视觉意境：中国航母航行，暗流涌动，危机四伏
 */
export const ChinaFinancialRiskDocumentary: React.FC<{
  durationFrames: number;
}> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 雷达扫描效果
  const radarAngle = interpolate(frame, [0, 180], [0, 360]);
  const alertPulse = Math.sin(frame * 0.08) * 0.2 + 0.8;

  // 风险指标
  const risks = [
    { label: "Capital Flow", value: 85 },
    { label: "Exchange Rate", value: 72 },
    { label: "Derivatives", value: 91 },
    { label: "Shadow Banking", value: 68 },
  ];

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 中国经济背景 */}
      <ImageLayer
        src={`${IMAGE_BASE}/ep01/china-economic-rise.jpg`}
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.3 }}
        durationFrames={durationFrames}
      />
      {/* 深红危机叠加 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 70% 50%, rgba(139,0,0,0.3) 0%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      {/* 标题 */}
      <DocumentaryOverlay
        year="2006+"
        title="Hidden Dangers"
        subtitle="The aircraft carrier sails into uncertain waters"
        frame={frame}
        fadeInDuration={40}
      />

      {/* 雷达/风险显示 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 300,
          height: 300,
        }}
      >
        {/* 雷达圆圈 */}
        <svg width={300} height={300} viewBox="0 0 300 300">
          <defs>
            <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E53E3E" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#8B0000" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {[1, 2, 3].map((r) => (
            <circle
              key={r}
              cx={150}
              cy={150}
              r={r * 45}
              fill="none"
              stroke="#E53E3E"
              strokeWidth={1}
              opacity={0.3}
              strokeDasharray="4 4"
            />
          ))}
          {/* 扫描线 */}
          <line
            x1={150}
            y1={150}
            x2={150 + Math.cos((radarAngle * Math.PI) / 180) * 135}
            y2={150 + Math.sin((radarAngle * Math.PI) / 180) * 135}
            stroke="#E53E3E"
            strokeWidth={2}
            opacity={0.6}
          />
          {/* 中心点 */}
          <circle cx={150} cy={150} r={8} fill="#E53E3E" opacity={alertPulse} />
        </svg>

        {/* 风险标签 */}
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
              fontSize: 14,
              color: "#E53E3E",
              fontFamily: "Cinzel, serif",
              letterSpacing: 2,
            }}
          >
            FINANCIAL WAR
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#94A3B8",
              marginTop: 4,
            }}
          >
            Threat Level: HIGH
          </div>
        </div>
      </div>

      {/* 风险指标条 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          right: "15%",
          opacity: interpolate(frame, [90, 130], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        {risks.map((risk, i) => {
          const barWidth = interpolate(
            frame,
            [130 + i * 20, 130 + i * 20 + 30],
            [0, risk.value],
            { extrapolateRight: "clamp" }
          );
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 100,
                  fontSize: 11,
                  color: "#94A3B8",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {risk.label}
              </div>
              <div
                style={{
                  flex: 1,
                  height: 8,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${barWidth}%`,
                    height: "100%",
                    background:
                      risk.value > 80
                        ? "linear-gradient(90deg, #E53E3E, #C53030)"
                        : "linear-gradient(90deg, #ECC94B, #D69E2E)",
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.05} />
    </AbsoluteFill>
  );
};
