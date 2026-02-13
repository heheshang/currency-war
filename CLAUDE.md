# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an animated documentary video series based on the book "货币战争" (Currency Wars) by Song Hongbing. The project uses **Remotion** - a React-based framework for programmatic video creation.

**Tech Stack**: React 19, TypeScript 5.9, Tailwind CSS 4, Framer Motion, React Spring, Lottie React, Canvas Confetti, Remotion 4.0.419

## Common Commands

```bash
# Development
bun run dev              # Start Remotion Studio (development preview)

# Building
bun run build            # Bundle the project for production

# Linting / Type Checking
bun run lint             # Run ESLint and TypeScript type checking

# Upgrade
bun run upgrade          # Upgrade Remotion to latest version

# Audio utilities
bun run audio:status     # Check audio files status
bun run audio:guide      # Display audio download guide

# Render videos
npx remotion render HelloWorld out/video.mp4
npx remotion render Episode01 out/episode01.mp4
```

## High-Level Architecture

### Composition Structure

The project follows a **composition-based scene sequencing** pattern:

1. **Root.tsx** - Defines all `<Composition>` entries that appear in the Remotion Studio sidebar
2. **Episode compositions** (Episode01.tsx, Episode02.tsx, etc.) - Each contains multiple `<Sequence>` components
3. **Scene components** - Individual scenes within sequences
4. **Subtitles layer** - Overlay with frame-accurate timing

### Episode Pattern

Each episode follows this structure:

```tsx
export const EpisodeXX: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <Sequence durationInFrames={30 * fps}>
        <SceneComponent />
      </Sequence>
      {/* More sequences... */}
      <Subtitles subtitles={episodeXXSubtitles} />
    </AbsoluteFill>
  );
};
```

### Key Concepts

- **Frame-based animation**: All timing uses `useCurrentFrame()` hook
- **30 fps standard**: Frame calculations use `fps * seconds`
- **Interpolation**: `interpolate(frame, [inputRange], [outputRange])` for smooth transitions
- **Subtitles**: Bilingual (English + Chinese) with fade in/out effects

### Directory Structure

```
src/
├── Root.tsx              # Main entry - defines all compositions
├── compositions/         # Episode compositions (main video sequences)
├── components/
│   ├── scenes/           # Scene components (AncientMarketScene, etc.)
│   ├── characters/       # Character components with skeletal animation
│   ├── animations/       # Animation utilities (ParticleEffect, SpringAnimation, etc.)
│   ├── charts/           # Data visualization (DebtSpiralScene, etc.)
│   ├── data-viz/         # Data visualization scenes (TimelineScene, etc.)
│   └── Subtitles.tsx     # Subtitle system with timing
├── styles/               # Theme and component styles
└── utils/
    └── epubParser.ts     # EPUB to Markdown converter
```

### Content Pipeline

1. Extract EPUB content using `scripts/extractEpubContent.ts`
2. Parse chapters and convert to Markdown in `markdown-books/`
3. Design episode scenes based on book content
4. Create subtitle arrays with frame timing in `Subtitles.tsx`
5. Build scene components using reusable animations
6. Assemble episodes using `Sequence` components
7. Preview in Remotion Studio (`bun run dev`)
8. Render final video (`npx remotion render`)

## Character System

The project uses a **skeletal animation system** for cartoon-style SVG characters:

- **Bone-based animation** with calculated joint rotations
- **Action types**: `walking`, `standing`, `trading`, `talking`
- **Body types**: `slender`, `medium`, `heavy`
- Located in `src/components/characters/`

## Color Theme

- Primary gold: `#ffd700`
- Primary blue: `#1e3a5a`
- Danger red: `#8b0000`
- Dark background: `#0d1117`

## Remotion Configuration

- **Frame rate**: 30 fps
- **Resolution**: 1920x1080 (Full HD)
- **Video format**: JPEG
- **Overwrite**: Enabled (see `remotion.config.ts`)

## Audio

Audio files are stored in `public/assets/audio/`:

- `bgm/` - Background music
- `sfx/` - Sound effects

See `scripts/AUDIO_README.md` for detailed download guide (FreePD, Pixabay, Incompetech sources).

## Available Skills

The project includes Remotion best practices skills at `.cursor/skills/remotion-best-practices/` covering:

- 3D content, animations, assets, audio
- Charts, compositions, fonts, images
- Lottie, measuring, sequencing, timing
- Transitions, videos, parameters, maps
- Subtitles, captions

Use the `remotion-best-practices` skill when working with Remotion code.
