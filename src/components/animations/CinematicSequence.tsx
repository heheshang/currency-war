/**
 * CinematicSequence - 叙事镜头编排器
 *
 * 提供电影级的镜头序列编排
 * 支持自动镜头切换、节奏控制、叙事节奏
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

// ============================================
// NarrativeSequence - 叙事序列编排器
// ============================================

export interface NarrativeSequenceProps {
  /** 场景序列 */
  scenes: Array<{
    content: React.ReactNode;
    duration: number;
    transition?: "cut" | "fade" | "dissolve" | "sweep" | "zoom";
    transitionDuration?: number;
    metadata?: {
      title?: string;
      mood?: "tense" | "calm" | "epic" | "mysterious" | "triumphant";
      intensity?: number; // 0-1
    };
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 全局叙事节奏 */
  pacing?: "slow" | "normal" | "fast" | "adaptive";
  /** 是否显示时间线指示器 */
  showTimeline?: boolean;
  /** 是否显示场景标题 */
  showSceneTitles?: boolean;
}

export const NarrativeSequence: React.FC<NarrativeSequenceProps> = ({
  scenes,
  startFrame = 0,
  pacing = "normal",
  showTimeline = false,
  showSceneTitles = false,
}) => {
  const frame = useCurrentFrame();

  // 计算总时长
  const totalDuration = scenes.reduce((sum, scene) => sum + scene.duration, 0);

  // 找到当前场景
  let currentSceneIndex = 0;
  let currentFrameInScene = frame - startFrame;
  let isTransitioning = false;
  let transitionProgress = 0;

  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const transitionDur = scene.transitionDuration ?? 15;

    if (currentFrameInScene < scene.duration) {
      currentSceneIndex = i;
      // 检查过渡
      if (
        currentFrameInScene > scene.duration - transitionDur &&
        i < scenes.length - 1
      ) {
        isTransitioning = true;
        transitionProgress =
          (currentFrameInScene - (scene.duration - transitionDur)) /
          transitionDur;
      }
      break;
    }
    currentFrameInScene -= scene.duration;
  }

  const currentScene = scenes[currentSceneIndex];
  const nextScene = scenes[currentSceneIndex + 1];

  // 基于节奏的过渡时间
  const pacingMultipliers = { slow: 1.5, normal: 1, fast: 0.6, adaptive: 1 };
  // pacingMultipliers保留用于未来扩展
  void pacingMultipliers[pacing];

  // 渲染场景内容
  const renderScene = (
    scene: (typeof scenes)[0],
    index: number,
    opacity: number,
  ) => {
    const metadata = scene.metadata;
    const intensity = metadata?.intensity ?? 0.5;
    const mood = metadata?.mood ?? "calm";

    // 根据情绪调整视觉效果
    const moodStyles: Record<string, React.CSSProperties> = {
      tense: {
        filter: `saturate(${0.8 + intensity * 0.4}) contrast(${1 + intensity * 0.2})`,
      },
      calm: { filter: `saturate(${1}) brightness(${1 + intensity * 0.1})` },
      epic: { filter: `saturate(${1.2 + intensity * 0.3}) contrast(${1.1})` },
      mysterious: { filter: `saturate(${0.7}) brightness(${0.9})` },
      triumphant: { filter: `saturate(${1.3}) brightness(${1.1})` },
    };

    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity,
          ...moodStyles[mood],
        }}
      >
        {scene.content}

        {/* 场景标题 */}
        {showSceneTitles && metadata?.title && (
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#FFD700",
              opacity: 0.7,
              letterSpacing: 2,
            }}
          >
            {metadata.title}
          </div>
        )}
      </div>
    );
  };

  // 渲染过渡效果
  const renderTransition = () => {
    if (!isTransitioning || !currentScene) return null;

    const transitionType = currentScene.transition ?? "fade";

    switch (transitionType) {
      case "cut":
        return null;

      case "fade":
        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#000",
              opacity:
                transitionProgress < 0.5
                  ? transitionProgress * 2
                  : (1 - transitionProgress) * 2,
            }}
          />
        );

      case "dissolve":
        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,${transitionProgress}) 100%)`,
            }}
          />
        );

      case "sweep":
        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(90deg, transparent ${transitionProgress * 100}%, #000 ${transitionProgress * 100}%)`,
            }}
          />
        );

      case "zoom":
        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#000",
              clipPath: `circle(${transitionProgress * 50}% at 50% 50%)`,
              opacity: 1 - transitionProgress,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <AbsoluteFill>
      {/* 当前场景 */}
      {currentScene &&
        renderScene(
          currentScene,
          currentSceneIndex,
          isTransitioning ? 1 - transitionProgress : 1,
        )}

      {/* 过渡效果 */}
      {renderTransition()}

      {/* 下一个场景 */}
      {isTransitioning &&
        nextScene &&
        renderScene(nextScene, currentSceneIndex + 1, transitionProgress)}

      {/* 时间线指示器 */}
      {showTimeline && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 4,
          }}
        >
          {scenes.map((scene, index) => (
            <div
              key={index}
              style={{
                width: (scene.duration / totalDuration) * 300,
                height: 4,
                borderRadius: 2,
                background:
                  index < currentSceneIndex
                    ? "#FFD700"
                    : index === currentSceneIndex
                      ? "#FFD70080"
                      : "#333",
              }}
            />
          ))}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ============================================
// CinematicSequence - 电影级序列
// ============================================

export interface CinematicSequenceProps {
  /** 镜头序列 */
  shots: Array<{
    content: React.ReactNode;
    duration: number;
    camera?: {
      movement?: "static" | "pan" | "tilt" | "zoom" | "dolly" | "crane";
      speed?: "slow" | "normal" | "fast";
      direction?: "left" | "right" | "up" | "down" | "in" | "out";
    };
    audio?: {
      music?: string;
      sfx?: string[];
    };
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 序列风格 */
  style?: "documentary" | "action" | "dramatic" | "epic";
}

export const CinematicSequence: React.FC<CinematicSequenceProps> = ({
  shots,
  startFrame = 0,
  style = "documentary",
}) => {
  const frame = useCurrentFrame();

  // 风格配置
  const styleConfigs = {
    documentary: {
      transitionDuration: 20,
      defaultCamera: { movement: "static" as const, speed: "slow" as const, direction: "right" as const },
    },
    action: {
      transitionDuration: 8,
      defaultCamera: { movement: "pan" as const, speed: "fast" as const, direction: "right" as const },
    },
    dramatic: {
      transitionDuration: 30,
      defaultCamera: { movement: "zoom" as const, speed: "slow" as const, direction: "in" as const },
    },
    epic: {
      transitionDuration: 45,
      defaultCamera: { movement: "crane" as const, speed: "slow" as const, direction: "up" as const },
    },
  };

  const config = styleConfigs[style];

  // 计算当前镜头
  let currentShotIndex = 0;
  let currentFrameInShot = frame - startFrame;

  for (let i = 0; i < shots.length; i++) {
    if (currentFrameInShot < shots[i].duration) {
      currentShotIndex = i;
      break;
    }
    currentFrameInShot -= shots[i].duration;
  }

  const currentShot = shots[currentShotIndex];
  const camera = currentShot?.camera ?? config.defaultCamera;

  // 计算镜头运动
  const getCameraTransform = () => {
    if (!currentShot) return {};

    const progress = currentFrameInShot / currentShot.duration;
    const speedMultiplier =
      camera.speed === "fast" ? 1.5 : camera.speed === "slow" ? 0.5 : 1;
    const amount = progress * 50 * speedMultiplier;

    switch (camera.movement) {
      case "pan":
        return {
          transform: `translateX(${(camera.direction ?? "right") === "left" ? -amount : amount}px)`,
        };
      case "tilt":
        return {
          transform: `translateY(${(camera.direction ?? "down") === "up" ? -amount : amount}px)`,
        };
      case "zoom":
        return {
          transform: `scale(${(camera.direction ?? "in") === "in" ? 1 + progress * 0.3 : 1 - progress * 0.2})`,
        };
      case "dolly":
        return {
          transform: `scale(${(camera.direction ?? "in") === "in" ? 1 + progress * 0.5 : 1 - progress * 0.3})`,
        };
      case "crane":
        return {
          transform: `translateY(${-amount}px) scale(${1 + progress * 0.1})`,
        };
      default:
        return {};
    }
  };

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...getCameraTransform(),
          transformOrigin: "center center",
        }}
      >
        {currentShot?.content}
      </div>
    </AbsoluteFill>
  );
};

// ============================================
// SceneComposer - 场景编排器
// ============================================

export interface SceneComposerProps {
  /** 场景配置 */
  scenes: Array<{
    id: string;
    content: React.ReactNode;
    duration: number;
    intro?: {
      type: "fade" | "slide" | "zoom" | "reveal";
      duration?: number;
    };
    outro?: {
      type: "fade" | "slide" | "zoom" | "reveal";
      duration?: number;
    };
    layers?: Array<{
      content: React.ReactNode;
      zIndex?: number;
      parallax?: number;
    }>;
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 默认过渡时长 */
  defaultTransitionDuration?: number;
}

export const SceneComposer: React.FC<SceneComposerProps> = ({
  scenes,
  startFrame = 0,
  defaultTransitionDuration = 30,
}) => {
  const frame = useCurrentFrame();

  // 计算当前场景
  let currentSceneIndex = 0;
  let currentFrameInScene = frame - startFrame;
  

  for (let i = 0; i < scenes.length; i++) {
    if (currentFrameInScene < scenes[i].duration) {
      currentSceneIndex = i;
      break;
    }
    currentFrameInScene -= scenes[i].duration;
    
  }

  const currentScene = scenes[currentSceneIndex];

  // 计算入场/出场动画
  const introDuration =
    currentScene?.intro?.duration ?? defaultTransitionDuration;
  const outroDuration =
    currentScene?.outro?.duration ?? defaultTransitionDuration;

  const introProgress = interpolate(
    currentFrameInScene,
    [0, introDuration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  const outroProgress = interpolate(
    currentFrameInScene,
    [currentScene.duration - outroDuration, currentScene.duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // 应用过渡效果
  const getTransitionStyle = (
    progress: number,
    type: string,
    isIn: boolean,
  ): React.CSSProperties => {
    const p = isIn ? progress : 1 - progress;

    switch (type) {
      case "fade":
        return { opacity: p };

      case "slide":
        return {
          opacity: p,
          transform: `translateY(${(1 - p) * (isIn ? -50 : 50)}px)`,
        };

      case "zoom":
        return {
          opacity: p,
          transform: `scale(${isIn ? 0.8 + p * 0.2 : 1.2 - p * 0.2})`,
        };

      case "reveal":
        return {
          clipPath: `circle(${p * 70}% at 50% 50%)`,
        };

      default:
        return { opacity: p };
    }
  };

  // 计算视差层偏移
  const getParallaxOffset = (parallax: number = 0) => {
    return interpolate(
      currentFrameInScene,
      [0, currentScene?.duration ?? 100],
      [0, parallax * 100],
      { extrapolateRight: "clamp" },
    );
  };

  return (
    <AbsoluteFill>
      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...(currentScene?.intro
            ? getTransitionStyle(introProgress, currentScene.intro.type, true)
            : {}),
          ...(currentScene?.outro
            ? getTransitionStyle(outroProgress, currentScene.outro.type, false)
            : {}),
        }}
      >
        {currentScene?.content}
      </div>

      {/* 视差层 */}
      {currentScene?.layers?.map((layer, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: layer.zIndex ?? 0,
            transform: `translateY(${getParallaxOffset(layer.parallax)}px)`,
          }}
        >
          {layer.content}
        </div>
      ))}
    </AbsoluteFill>
  );
};

// ============================================
// RhythmController - 节奏控制器
// ============================================

export interface RhythmControllerProps {
  children: React.ReactNode;
  /** 节奏模式 */
  pattern: Array<{
    duration: number;
    intensity: number; // 0-1
    action?: "none" | "pulse" | "flash" | "shake" | "zoom";
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 循环模式 */
  loop?: boolean;
}

export const RhythmController: React.FC<RhythmControllerProps> = ({
  children,
  pattern,
  startFrame = 0,
  loop = false,
}) => {
  const frame = useCurrentFrame();

  // 计算总时长
  const totalDuration = pattern.reduce((sum, p) => sum + p.duration, 0);

  // 计算当前节奏段
  let currentFrame = frame - startFrame;
  if (loop) {
    currentFrame = currentFrame % totalDuration;
  }

  let currentIntensity = 0.5;
  let currentAction = "none";
  let patternProgress = 0;

  let accumulated = 0;
  for (const segment of pattern) {
    if (currentFrame < accumulated + segment.duration) {
      currentIntensity = segment.intensity;
      currentAction = segment.action ?? "none";
      patternProgress = (currentFrame - accumulated) / segment.duration;
      break;
    }
    accumulated += segment.duration;
  }

  // 应用动作效果
  const getActionStyle = (): React.CSSProperties => {
    switch (currentAction) {
      case "pulse":
        return {
          transform: `scale(${1 + Math.sin(patternProgress * Math.PI) * currentIntensity * 0.1})`,
        };

      case "flash":
        return {
          filter: `brightness(${1 + Math.sin(patternProgress * Math.PI) * currentIntensity * 0.5})`,
        };

      case "shake": {
        const shakeAmount =
          currentIntensity * 5 * Math.sin(patternProgress * Math.PI);
        return {
          transform: `translateX(${shakeAmount}px)`,
        };
      }

      case "zoom":
        return {
          transform: `scale(${1 + patternProgress * currentIntensity * 0.2})`,
        };

      default:
        return {};
    }
  };

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...getActionStyle(),
        }}
      >
        {children}
      </div>

      {/* 节奏指示器（调试用） */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: `rgba(255, 215, 0, ${currentIntensity})`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// ============================================
// MultiCameraSequence - 多机位序列
// ============================================

export interface MultiCameraSequenceProps {
  /** 机位配置 */
  cameras: Array<{
    id: string;
    position: { x: number; y: number; z: number };
    fov?: number;
    content: React.ReactNode;
  }>;
  /** 镜头切换序列 */
  sequence: Array<{
    cameraId: string;
    duration: number;
    transition?: "cut" | "fade" | "sweep";
  }>;
  /** 开始帧 */
  startFrame?: number;
}

export const MultiCameraSequence: React.FC<MultiCameraSequenceProps> = ({
  cameras,
  sequence,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();

  // 找到当前镜头
  let currentShotIndex = 0;
  let currentFrameInShot = frame - startFrame;
  let isTransitioning = false;
  let transitionProgress = 0;
  

  for (let i = 0; i < sequence.length; i++) {
    const shot = sequence[i];
    const transitionDur = shot.transition === "cut" ? 0 : 15;

    if (currentFrameInShot < shot.duration) {
      currentShotIndex = i;
      // 检查过渡
      if (
        currentFrameInShot > shot.duration - transitionDur &&
        i < sequence.length - 1
      ) {
        isTransitioning = true;
        transitionProgress =
          (currentFrameInShot - (shot.duration - transitionDur)) /
          transitionDur;
        
      }
      break;
    }
    currentFrameInShot -= shot.duration;
  }

  const currentShot = sequence[currentShotIndex];
  const currentCamera = cameras.find((c) => c.id === currentShot?.cameraId);
  const nextShot = sequence[currentShotIndex + 1];
  const nextCamera = cameras.find((c) => c.id === nextShot?.cameraId);

  return (
    <AbsoluteFill>
      {/* 当前机位 */}
      {currentCamera && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isTransitioning ? 1 - transitionProgress : 1,
            transform: `translate(${currentCamera.position.x}px, ${currentCamera.position.y}px) scale(${1 + currentCamera.position.z * 0.01})`,
          }}
        >
          {currentCamera.content}
        </div>
      )}

      {/* 过渡到下一个机位 */}
      {isTransitioning && nextCamera && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: transitionProgress,
            transform: `translate(${nextCamera.position.x}px, ${nextCamera.position.y}px) scale(${1 + nextCamera.position.z * 0.01})`,
          }}
        >
          {nextCamera.content}
        </div>
      )}
    </AbsoluteFill>
  );
};
