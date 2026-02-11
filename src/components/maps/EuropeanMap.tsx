/**
 * EuropeanMap.tsx
 *
 * Reusable European map component for Episode02
 * Displays the five key cities where Rothschild brothers established their banking empire
 */

import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export interface CityMarker {
  id: string;
  name: string;
  x: number;
  y: number;
  brother: string;
  established: number;
}

export const DEFAULT_CITIES: CityMarker[] = [
  {
    id: "frankfurt",
    name: "法兰克福",
    x: 52,
    y: 35,
    brother: "阿姆斯洛·罗斯柴尔德",
    established: 1760,
  },
  {
    id: "london",
    name: "伦敦",
    x: 38,
    y: 28,
    brother: "内森·罗斯柴尔德",
    established: 1809,
  },
  {
    id: "paris",
    name: "巴黎",
    x: 40,
    y: 40,
    brother: "詹姆斯·罗斯柴尔德",
    established: 1812,
  },
  {
    id: "vienna",
    name: "维也纳",
    x: 60,
    y: 38,
    brother: "所罗门·罗斯柴尔德",
    established: 1820,
  },
  {
    id: "naples",
    name: "那不勒斯",
    x: 62,
    y: 55,
    brother: "卡尔·罗斯柴尔德",
    established: 1821,
  },
];

export interface RouteConnection {
  from: string;
  to: string;
}

export const DEFAULT_ROUTES: RouteConnection[] = [
  { from: "frankfurt", to: "london" },
  { from: "frankfurt", to: "paris" },
  { from: "frankfurt", to: "vienna" },
  { from: "frankfurt", to: "naples" },
  { from: "london", to: "paris" },
  { from: "london", to: "vienna" },
  { from: "paris", to: "vienna" },
];

export interface EuropeanMapProps {
  cities?: CityMarker[];
  routes?: RouteConnection[];
  visibleCityIds?: string[];
  visibleRouteIds?: string[];
  markerSize?: number;
  showLabels?: boolean;
  showBrotherNames?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  theme?: "documentary" | "elegant" | "dramatic";
}

const THEMES = {
  documentary: {
    background: "#0d1117",
    land: "#1a1a2e",
    water: "#0a0e17",
    border: "#2d3748",
    marker: "#ffd700",
    markerBorder: "#b8860b",
    text: "#e8e8e8",
    route: "#4a5568",
    routeActive: "#ffd700",
  },
  elegant: {
    background: "#1a1a2e",
    land: "#2d2d44",
    water: "#15152a",
    border: "#4a4a6a",
    marker: "#d4af37",
    markerBorder: "#f0e68c",
    text: "#f5e6d3",
    route: "#6b6b8a",
    routeActive: "#d4af37",
  },
  dramatic: {
    background: "#0a0a0a",
    land: "#1f1f1f",
    water: "#050505",
    border: "#333",
    marker: "#ffd700",
    markerBorder: "#ff4500",
    text: "#fff",
    route: "#444",
    routeActive: "#ff4500",
  },
};

const EuropeanMap: React.FC<EuropeanMapProps> = (props) => {
  const {
    cities = DEFAULT_CITIES,
    routes = DEFAULT_ROUTES,
    visibleCityIds = [],
    visibleRouteIds = [],
    markerSize = 16,
    showLabels = true,
    showBrotherNames = false,
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

  const visibleRoutes = useMemo(() => {
    if (visibleRouteIds.length === 0) return routes;
    return routes.filter((route) => {
      const routeId = `${route.from}-${route.to}`;
      return visibleRouteIds.includes(routeId);
    });
  }, [routes, visibleRouteIds]);

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

  const getRouteOpacity = (index: number) => {
    const routeDelay = animationDelay + 30 + index * 20;
    return interpolate(frame, [routeDelay, routeDelay + 30], [0, 1], {
      extrapolateRight: "clamp",
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
          viewBox="0 0 100 60"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "90%",
            height: "90%",
            maxWidth: "1400px",
          }}
        >
          <defs>
            <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.land} />
              <stop offset="100%" stopColor={colors.border} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <style>
              {`
                @keyframes pulse {
                  0%, 100% { opacity: 0.6; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.1); }
                }
                .pulse-circle {
                  animation: pulse 2s ease-in-out infinite;
                  transform-origin: center;
                }
              `}
            </style>
          </defs>

          <rect width="100" height="60" fill={colors.water} />

          <g opacity={animationProgress}>
            <path
              d="M 32,15 L 38,12 L 42,15 L 45,25 L 42,32 L 36,30 L 32,25 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 38,20 L 45,18 L 50,20 L 52,28 L 48,35 L 42,38 L 38,32 L 36,25 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 36,30 L 45,28 L 48,35 L 46,42 L 40,45 L 35,40 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 32,40 L 38,38 L 40,45 L 38,55 L 32,52 L 30,45 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 52,35 L 58,32 L 62,38 L 64,48 L 60,55 L 56,52 L 54,45 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 48,20 L 58,18 L 62,22 L 60,30 L 55,32 L 48,28 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
            <path
              d="M 58,28 L 68,26 L 72,32 L 70,40 L 62,42 L 58,36 Z"
              fill="url(#landGradient)"
              stroke={colors.border}
              strokeWidth="0.3"
            />
          </g>

          {visibleRoutes.map((route, index) => {
            const fromCity = cities.find((c) => c.id === route.from);
            const toCity = cities.find((c) => c.id === route.to);
            if (!fromCity || !toCity) return null;

            const opacity = getRouteOpacity(index);
            if (opacity <= 0) return null;

            return (
              <g key={`${route.from}-${route.to}`} opacity={opacity}>
                <line
                  x1={fromCity.x}
                  y1={fromCity.y}
                  x2={toCity.x}
                  y2={toCity.y}
                  stroke={colors.routeActive}
                  strokeWidth="0.2"
                  strokeDasharray="1,0.5"
                  opacity={0.6}
                />
                {opacity > 0.5 && (
                  <>
                    <circle
                      cx={fromCity.x}
                      cy={fromCity.y}
                      r="0.3"
                      fill={colors.marker}
                      className="pulse-circle"
                    />
                    <circle
                      cx={toCity.x}
                      cy={toCity.y}
                      r="0.3"
                      fill={colors.marker}
                      className="pulse-circle"
                    />
                  </>
                )}
              </g>
            );
          })}

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
                <circle
                  r={markerSize / 3}
                  fill="none"
                  stroke={colors.marker}
                  strokeWidth="0.3"
                  opacity={0.3}
                  className="pulse-circle"
                />
                <circle
                  r={markerSize / 5}
                  fill={colors.marker}
                  stroke={colors.markerBorder}
                  strokeWidth="0.2"
                  filter="url(#glow)"
                />
                <circle r={markerSize / 12} fill={colors.background} />
                {showLabels && scale > 0.8 && (
                  <g
                    transform={`translate(${city.x > 50 ? -4 : 4}, ${city.y > 30 ? -3 : 3})`}
                  >
                    <text
                      x={0}
                      y={0}
                      fill={colors.text}
                      fontSize="2"
                      fontWeight="bold"
                      textAnchor={city.x > 50 ? "end" : "start"}
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      {city.name}
                    </text>
                    {showBrotherNames && (
                      <text
                        x={0}
                        y={2.5}
                        fill={colors.marker}
                        fontSize="1.2"
                        textAnchor={city.x > 50 ? "end" : "start"}
                        opacity={0.8}
                      >
                        {city.brother}
                      </text>
                    )}
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

export default EuropeanMap;
