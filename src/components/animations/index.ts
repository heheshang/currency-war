/**
 * 动画组件库导出
 *
 * 统一导出所有动画组件，方便其他模块引用
 */

export {
  ParticleEffect,
  GoldCoinRain,
  SparkleEffect,
  FireworksEffect,
} from "./ParticleEffect";

export {
  AnimatedTransition,
  StaggerTransition,
  ZoomInTransition,
  FadeInTransition,
  SlideInTransition,
  ParallaxLayer,
} from "./TransitionEffect";

export {
  SpringAnimation,
  ElasticText,
  PulseAnimation,
  ShakeAnimation,
  FloatAnimation,
  RotateAnimation,
} from "./SpringAnimation";

// Animation hooks
export {
  useFadeIn,
  useScaleIn,
  useSlideIn,
  useBreathing,
  useFloat,
  useSpotlight,
  useStagger,
  useReveal,
  useShimmer,
  useTyping,
  useCounter,
} from "./useAnimation";

// UI Animation components
export {
  AnimatedTitle,
  AnimatedCard,
  AnimatedList,
  AnimatedStat,
  AnimatedDivider,
  AnimatedQuote,
  PulsingDot,
  RotatingBorder,
} from "./UIAnimations";

// Cinematic Camera
export {
  CinematicCamera,
  MultiFocusContainer,
  RackFocusCamera,
  CameraShake,
  KenBurnsEffect,
  SlowPan,
  DollyIn,
  DollyOut,
  ImpactShake,
  CinematicKenBurns,
} from "./CinematicCamera";

export type {
  CameraMovementType,
  CameraDirection,
  EasingType,
} from "./CinematicCamera";

// Scene Transition
export {
  SceneTransition,
  TransitionOverlay,
  SceneTransitionWithOverlay,
  CinematicFade,
  CinematicSlide,
  SceneCut,
  VignetteOverlay,
} from "./SceneTransition";

export type {
  TransitionType,
  EasingFunction,
} from "./SceneTransition";

// Epic Narrative Scene
export {
  EpicNarrativeScene,
  HistoricalPanorama,
  GrandRevealScene,
  CinematicTitleSequence,
  ThemeBackground,
} from "./EpicNarrativeScene";

export type {
  NarrativeTheme,
  EpicNarrativeSceneProps,
  HistoricalPanoramaProps,
  GrandRevealProps,
  CinematicTitleSequenceProps,
  ThemeBackgroundProps,
} from "./EpicNarrativeScene";

// Close Up Shot
export {
  CloseUpShot,
  RackFocusReveal,
  DramaticRevealShot,
  FaceReveal,
  CinematicZoom,
  PullFocus,
} from "./CloseUpShot";

export type {
  CloseUpShotProps,
  RackFocusRevealProps,
  DramaticRevealShotProps,
  FaceRevealProps,
  CinematicZoomProps,
  PullFocusProps,
} from "./CloseUpShot";

// Themed Transition
export {
  ThemedTransition,
  CrossFadeSequence,
  MorphingTransition,
  CinematicCut,
  SceneDivider,
} from "./ThemedTransition";

export type {
  TransitionTheme,
  ThemedTransitionProps,
  CrossFadeSequenceProps,
  MorphingType,
  MorphingTransitionProps,
  CutStyle,
  CinematicCutProps,
  SceneDividerProps,
} from "./ThemedTransition";

// Cinematic Sequence
export {
  NarrativeSequence,
  CinematicSequence,
  SceneComposer,
  RhythmController,
  MultiCameraSequence,
} from "./CinematicSequence";

export type {
  NarrativeSequenceProps,
  CinematicSequenceProps,
  SceneComposerProps,
  RhythmControllerProps,
  MultiCameraSequenceProps,
} from "./CinematicSequence";
