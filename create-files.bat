@echo off
chcp 65001 >nul
echo ========================================
echo 货币战争动画项目 - 文件创建脚本
echo ========================================
echo.

REM 切换到项目目录
cd /d "%~dp0currency-war-animation"

if not exist "currency-war-animation" (
    echo 错误：找不到 currency-war-animation 文件夹！
    echo 请确保您在正确的位置运行此脚本。
    pause
    exit /b 1
)

echo 正在创建组件文件...
echo.

REM 创建 SceneTitle.tsx
echo 创建 SceneTitle.tsx...
(
cat > src\components\typography\SceneTitle.tsx << 'SCENETITLE_EOF'
import React from "react";
import { AbsoluteFill } from "remotion";

interface SceneTitleProps {
  date: string;
  location: string;
  style?: "retro-historical" | "modern-clean";
}

export const SceneTitle: React.FC<SceneTitleProps> = ({
  date,
  location,
  style = "retro-historical"
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: style === "retro-historical"
            ? '"Noto Serif SC", "Songti SC", serif'
            : '"Inter", sans-serif',
          fontSize: 72,
          fontWeight: 700,
          color: "#ffd700",
          textAlign: "center",
          textShadow: "0 4px 20px rgba(255, 215, 0, 0.3)",
          letterSpacing: 8,
          lineHeight: 1.6,
        }}
      >
        <div>{date}</div>
        <div
          style={{
            fontSize: 48,
            marginTop: 20,
            color: "#e8e8e8",
            letterSpacing: 4,
          }}
        >
          {location}
        </div>
      </div>
    </AbsoluteFill>
  );
};
SCENETITLE_EOF
) 2>nul
if %errorlevel% neq 0 (
    echo 使用备用方法创建 SceneTitle.tsx...
    echo import React from "react";> src\components\typography\SceneTitle.tsx
    echo import { AbsoluteFill } from "remotion";>> src\components\typography\SceneTitle.tsx
    echo.>> src\components\typography\SceneTitle.tsx
    echo interface SceneTitleProps {>> src\components\typography\SceneTitle.tsx
    echo   date: string;>> src\components\typography\SceneTitle.tsx
    echo   location: string;>> src\components\typography\SceneTitle.tsx
    echo   style?: "retro-historical" ^| "modern-clean";>> src\components\typography\SceneTitle.tsx
    echo }>> src\components\typography\SceneTitle.tsx
    echo.>> src\components\typography\SceneTitle.tsx
    echo export const SceneTitle: React.FC^<SceneTitleProps^> = (^({>> src\components\typography\SceneTitle.tsx
    echo   date,>> src\components\typography\SceneTitle.tsx
    echo   location,>> src\components\typography\SceneTitle.tsx
    echo   style = "retro-historical">> src\components\typography\SceneTitle.tsx
    echo ^}) = {>> src\components\typography\SceneTitle.tsx
    echo   return (^>> src\components\typography\SceneTitle.tsx
    echo     ^<AbsoluteFill>> src\components\typography\SceneTitle.tsx
    echo       style={{>> src\components\typography\SceneTitle.tsx
    echo         backgroundColor: "#0d1117",>> src\components\typography\SceneTitle.tsx
    echo         justifyContent: "center",>> src\components\typography\SceneTitle.tsx
    echo         alignItems: "center",>> src\components\typography\SceneTitle.tsx
    echo       }}>> src\components\typography\SceneTitle.tsx
    echo     ^>>> src\components\typography\SceneTitle.tsx
    echo       ^<div>> src\components\typography\SceneTitle.tsx
    echo         style={{>> src\components\typography\SceneTitle.tsx
    echo           fontFamily: style === "retro-historical">> src\components\typography\SceneTitle.tsx
    echo             ? '"Noto Serif SC", "Songti SC", serif'>> src\components\typography\SceneTitle.tsx
    echo             : '"Inter", sans-serif',>> src\components\typography\SceneTitle.tsx
    echo           fontSize: 72,>> src\components\typography\SceneTitle.tsx
    echo           fontWeight: 700,>> src\components\typography\SceneTitle.tsx
    echo           color: "#ffd700",>> src\components\typography\SceneTitle.tsx
    echo           textAlign: "center",>> src\components\typography\SceneTitle.tsx
    echo           textShadow: "0 4px 20px rgba(255, 215, 0, 0.3)",>> src\components\typography\SceneTitle.tsx
    echo           letterSpacing: 8,>> src\components\typography\SceneTitle.tsx
    echo           lineHeight: 1.6,>> src\components\typography\SceneTitle.tsx
    echo         }}>> src\components\typography\SceneTitle.tsx
    echo       ^>>> src\components\typography\SceneTitle.tsx
    echo         ^<div^>{date}^</div^>>> src\components\typography\SceneTitle.tsx
    echo         ^<div>> src\components\typography\SceneTitle.tsx
    echo           style={{>> src\components\typography\SceneTitle.tsx
    echo             fontSize: 48,>> src\components\typography\SceneTitle.tsx
    echo             marginTop: 20,>> src\components\typography\SceneTitle.tsx
    echo             color: "#e8e8e8",>> src\components\typography\SceneTitle.tsx
    echo             letterSpacing: 4,>> src\components\typography\SceneTitle.tsx
    echo           }}>> src\components\typography\SceneTitle.tsx
    echo         ^>>> src\components\typography\SceneTitle.tsx
    echo           {location}>> src\components\typography\SceneTitle.tsx
    echo         ^</div^>>> src\components\typography\SceneTitle.tsx
    echo       ^</div^>>> src\components\typography\SceneTitle.tsx
    echo     ^</AbsoluteFill^>>> src\components\typography\SceneTitle.tsx
    echo   ^);>> src\components\typography\SceneTitle.tsx
    echo };>> src\components\typography\SceneTitle.tsx
)

REM 创建 TypewriterSubtitle.tsx
echo 创建 TypewriterSubtitle.tsx...
echo import React from "react";> src\components\typography\TypewriterSubtitle.tsx
echo import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from "remotion";>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo interface TypewriterSubtitleProps {>> src\components\typography\TypewriterSubtitle.tsx
echo   text: string;>> src\components\typography\TypewriterSubtitle.tsx
echo   startTime: number;>> src\components\typography\TypewriterSubtitle.tsx
echo   speed?: number;>> src\components\typography\TypewriterSubtitle.tsx
echo   style?: "retro-typewriter" ^| "modern-clean";>> src\components\typography\TypewriterSubtitle.tsx
echo }>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo export const TypewriterSubtitle: React.FC^<TypewriterSubtitleProps^> = (^({>> src\components\typography\TypewriterSubtitle.tsx
echo   text,>> src\components\typography\TypewriterSubtitle.tsx
echo   startTime,>> src\components\typography\TypewriterSubtitle.tsx
echo   speed = 100,>> src\components\typography\TypewriterSubtitle.tsx
echo   style = "retro-typewriter">> src\components\typography\TypewriterSubtitle.tsx
echo ^}) = {>> src\components\typography\TypewriterSubtitle.tsx
echo   const frame = useCurrentFrame(^);>> src\components\typography\TypewriterSubtitle.tsx
echo   const { fps } = useVideoConfig(^);>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo   const currentTime = frame / fps;>> src\components\typography\TypewriterSubtitle.tsx
echo   const elapsedTime = currentTime - startTime;>> src\components\typography\TypewriterSubtitle.tsx
echo   const charsToShow = Math.max(0, Math.floor(elapsedTime * 1000 / speed^)^);>> src\components\typography\TypewriterSubtitle.tsx
echo   const displayText = text.slice(0, Math.min(charsToShow, text.length^)^);>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo   const cursorOpacity = interpolate^(>> src\components\typography\TypewriterSubtitle.tsx
echo     frame %% 30,>> src\components\typography\TypewriterSubtitle.tsx
echo     [0, 15, 30],>> src\components\typography\TypewriterSubtitle.tsx
echo     [1, 0, 1]>> src\components\typography\TypewriterSubtitle.tsx
echo   ^);>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo   if ^(currentTime ^< startTime^) {>> src\components\typography\TypewriterSubtitle.tsx
echo     return null;>> src\components\typography\TypewriterSubtitle.tsx
echo   }>> src\components\typography\TypewriterSubtitle.tsx
echo.>> src\components\typography\TypewriterSubtitle.tsx
echo   return (^>> src\components\typography\TypewriterSubtitle.tsx
echo     ^<AbsoluteFill>> src\components\typography\TypewriterSubtitle.tsx
echo       style={{>> src\components\typography\TypewriterSubtitle.tsx
echo         backgroundColor: "transparent",>> src\components\typography\TypewriterSubtitle.tsx
echo         justifyContent: "center",>> src\components\typography\TypewriterSubtitle.tsx
echo         alignItems: "center",>> src\components\typography\TypewriterSubtitle.tsx
echo         pointerEvents: "none",>> src\components\typography\TypewriterSubtitle.tsx
echo       }}>> src\components\typography\TypewriterSubtitle.tsx
echo     ^>>> src\components\typography\TypewriterSubtitle.tsx
echo       ^<div>> src\components\typography\TypewriterSubtitle.tsx
echo         style={{>> src\components\typography\TypewriterSubtitle.tsx
echo           fontFamily: style === "retro-typewriter">> src\components\typography\TypewriterSubtitle.tsx
echo             ? '"Courier New", monospace'>> src\components\typography\TypewriterSubtitle.tsx
echo             : '"Inter", sans-serif',>> src\components\typography\TypewriterSubtitle.tsx
echo           fontSize: 48,>> src\components\typography\TypewriterSubtitle.tsx
echo           fontWeight: 600,>> src\components\typography\TypewriterSubtitle.tsx
echo           color: "#e8e8e8",>> src\components\typography\TypewriterSubtitle.tsx
echo           textAlign: "center",>> src\components\typography\TypewriterSubtitle.tsx
echo           textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",>> src\components\typography\TypewriterSubtitle.tsx
echo           letterSpacing: 2,>> src\components\typography\TypewriterSubtitle.tsx
echo           maxWidth: 1400,>> src\components\typography\TypewriterSubtitle.tsx
echo           padding: 40,>> src\components\typography\TypewriterSubtitle.tsx
echo         }}>> src\components\typography\TypewriterSubtitle.tsx
echo       ^>>> src\components\typography\TypewriterSubtitle.tsx
echo         {displayText}>> src\components\typography\TypewriterSubtitle.tsx
echo         ^<span>> src\components\typography\TypewriterSubtitle.tsx
echo           style={{>> src\components\typography\TypewriterSubtitle.tsx
echo             opacity: cursorOpacity,>> src\components\typography\TypewriterSubtitle.tsx
echo             color: "#ffd700",>> src\components\typography\TypewriterSubtitle.tsx
echo           }}>> src\components\typography\TypewriterSubtitle.tsx
echo         ^>>> src\components\typography\TypewriterSubtitle.tsx
echo           █>> src\components\typography\TypewriterSubtitle.tsx
echo         ^</span^>>> src\components\typography\TypewriterSubtitle.tsx
echo       ^</div^>>> src\components\typography\TypewriterSubtitle.tsx
echo     ^</AbsoluteFill^>>> src\components\typography\TypewriterSubtitle.tsx
echo   ^);>> src\components\typography\TypewriterSubtitle.tsx
echo };>> src\components\typography\TypewriterSubtitle.tsx

echo.
echo ========================================
echo 文件创建完成！
echo ========================================
echo.
echo 已创建的文件：
echo - src\components\typography\SceneTitle.tsx
echo - src\components\typography\TypewriterSubtitle.tsx
echo.
echo 下一步：继续创建其他组件
echo.
pause
