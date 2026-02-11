/**
 * AmericanMap.tsx
 *
 * Reusable American map component for Episode03
 * Displays the United States with state/regional markers and routes
 */

import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export interface AmericanCity {
  id: string;
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

export const DEFAULT_AMERICAN_CITIES: AmericanCity[] = [
  { id: "boston", name: "波士顿", x: 82, y: 22 },
  { id: "nyc", name: "纽约", x: 80, y: 30 },
  { id: "philadelphia", name: "费城", x: 77, y: 32 },
  { id: "washington", name: "华盛顿", x: 75, y: 38 },
  { id: "richmond", name: "里士满", x: 73, y: 40 },
  { id: "charleston", name: "查尔斯顿", x: 68, y: 52 },
  { id: "neworleans", name: "新奥尔良", x: 48, y: 65 },
  { id: "stlouis", name: "圣路易斯", x: 52, y: 40 },
  { id: "chicago", name: "芝加哥", x: 62, y: 25 },
];

export interface AmericanMapProps {
  cities?: AmericanCity[];
  visibleCityIds?: string[];
  showLabels?: boolean;
  showNorthSouth?: boolean; // Show North/South division
  markerSize?: number;
  animationDelay?: number;
  animationDuration?: number;
  theme?: "documentary" | "historical" | "dramatic";
}

const THEMES = {
  documentary: {
    background: "#0d1117",
    land: "#1a1a2e",
    water: "#0a0e17",
    border: "#2d3748",
    north: "#1e3a5a",
    south: "#8b0000",
    marker: "#ffd700",
    markerBorder: "#b8860b",
    text: "#e8e8e8",
    divider: "#ef4444",
  },
  historical: {
    background: "#1a1612",
    land: "#2d2520",
    water: "#0f0c0a",
    border: "#4a3c32",
    north: "#3d5a4a",
    south: "#5a3d3d",
    marker: "#d4af37",
    markerBorder: "#f0e68c",
    text: "#e8dcc8",
    divider: "#8b4513",
  },
  dramatic: {
    background: "#0a0a0a",
    land: "#1f1f1f",
    water: "#050505",
    border: "#333",
    north: "#1a3a5a",
    south: "#8b0000",
    marker: "#ffd700",
    markerBorder: "#ff4500",
    text: "#fff",
    divider: "#ff0000",
  },
};

const AmericanMap: React.FC<AmericanMapProps> = (props) => {
  const {
    cities = DEFAULT_AMERICAN_CITIES,
    visibleCityIds = [],
    showLabels = true,
    showNorthSouth = false,
    markerSize = 12,
    animationDelay = 0,
    animationDuration = 60,
    theme = "documentary",
  } = props;

  const frame = useCurrentFrame();
  const colors = THEMES[theme];

  const visibleCities = useMemo(() => {
    if (visibleCityIds.length === 0) return cities;
    return cities.filter((city) => visibleCityIds.includes(city.id));
  }, [cities, visibleCityIds]);

  const animationProgress = Math.min(
    Math.max((frame - animationDelay) / animationDuration, 0),
    1
  );

  const getCityOpacity = (index: number) => {
    const cityDelay = animationDelay + (index * animationDuration) / cities.length;
    return interpolate(frame, [cityDelay, cityDelay + 30], [0, 1], {
      extrapolateRight: "clamp",
    });
  };

  const getCityScale = (index: number) => {
    const cityDelay = animationDelay + (index * animationDuration) / cities.length;
    return spring({
      frame: frame - cityDelay,
      fps: 30,
      config: { damping: 12, stiffness: 80 },
    });
  };

  return (
    <AbsoluteFill style={{ background: colors.background }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 100 55"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "85%",
            height: "85%",
            maxWidth: "1200px",
          }}
        >
          <defs>
            <linearGradient id="usLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.land} />
              <stop offset="100%" stopColor={colors.border} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 美国大陆简化轮廓 */}
          <g opacity={animationProgress}>
            {/* 东海岸 */}
            <path
              d="M 75,15 L 80,18 L 82,22 L 85,25 L 83,28 L 82,32 L 80,35 L 78,38 L 75,42 L 72,45 L 70,48 L 65,50 L 60,52 L 55,50 L 52,48 L 50,45"
              fill={showNorthSouth ? colors.north : "url(#usLandGrad)"}
              stroke={colors.border}
              strokeWidth="0.4"
            />
            {/* 佛罗里达 */}
            <path
              d="M 70,48 L 72,45 L 75,42 L 78,45 L 80,50 L 78,52 L 72,52 L 68,50 Z"
              fill={showNorthSouth ? colors.south : "url(#usLandGrad)"}
              stroke={colors.border}
              strokeWidth="0.4"
            />
            {/* 墨西哥湾沿岸 */}
            <path
              d="M 50,45 L 52,48 L 55,50 L 50,52 L 45,50 L 42,48 L 40,45 L 42,42 L 45,40 L 48,42 Z"
              fill={showNorthSouth ? colors.south : "url(#usLandGrad)"}
              stroke={colors.border}
              strokeWidth="0.4"
            />
            {/* 中西部 */}
            <path
              d="M 50,45 L 48,42 L 45,40 L 42,38 L 40,35 L 38,32 L 35,30 L 32,28 L 30,25 L 28,22 L 25,20 L 22,18 L 20,15 L 18,12 L 15,10 L 12,8 L 10,5 L 8,8 L 10,12 L 12,15 L 15,18 L 18,20 L 20,22 L 22,25 L 25,28 L 28,30 L 30,32 L 32,35 L 35,38 L 38,40 L 42,42 L 45,45"
              fill={showNorthSouth ? colors.north : "url(#usLandGrad)"}
              stroke={colors.border}
              strokeWidth="0.4"
            />
            {/* 德克萨斯 */}
            <path
              d="M 25,20 L 22,18 L 20,15 L 18,12 L 15,10 L 12,8 L 10,10 L 8,15 L 10,20 L 12,25 L 15,30 L 18,35 L 20,40 L 22,45 L 25,50 L 30,48 L 28,45 L 25,40 L 22,35 L 20,30 L 18,25 L 18,20 L 20,15 L 22,12 Z"
              fill={showNorthSouth ? colors.south : "url(#usLandGrad)"}
              stroke={colors.border}
              strokeWidth="0.4"
            />
          </g>

          {/* 南北分界线 */}
          {showNorthSouth && (
            <g opacity={interpolate(frame, [animationDelay + 30, animationDelay + 60], [0, 0.6], {
              extrapolateRight: "clamp",
            })}>
              <line
                x1="15"
                y1="36"
                x2="75"
                y2="36"
                stroke={colors.divider}
                strokeWidth="0.5"
                strokeDasharray="2,1"
                opacity={0.8}
              />
            </g>
          )}

          {/* 城市标记 */}
          {visibleCities.map((city, index) => {
            const opacity = getCityOpacity(index);
            const scale = getCityScale(index);

            if (opacity <= 0) return null;

            return (
              <g
                key={city.id}
                transform={`translate(${city.x}, ${city.y}) scale(${scale})`}
                opacity={opacity}
              >
                {/* 外圈脉冲效果 */}
                <circle
                  r={markerSize / 3}
                  fill="none"
                  stroke={colors.marker}
                  strokeWidth="0.2"
                  opacity={0.4}
                >
                  <animate
                    attributeName="r"
                    values={`${markerSize / 3};${markerSize / 1.5};${markerSize / 3}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* 主标记点 */}
                <circle
                  r={markerSize / 5}
                  fill={colors.marker}
                  stroke={colors.markerBorder}
                  strokeWidth="0.15"
                  filter="url(#glow)"
                />
                <circle r={markerSize / 15} fill={colors.background} />
                {/* 城市标签 */}
                {showLabels && scale > 0.8 && (
                  <g
                    transform={`translate(${city.x > 50 ? -3 : 3}, ${city.y > 27 ? -2 : 2})`}
                  >
                    <text
                      x={0}
                      y={0}
                      fill={colors.text}
                      fontSize="1.8"
                      fontWeight="600"
                      textAnchor={city.x > 50 ? "end" : "start"}
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      {city.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </AbsoluteFill>
  );
};

export default AmericanMap;
