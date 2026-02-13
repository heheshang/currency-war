# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-13
**Type:** Remotion Video Documentary Project

## OVERVIEW

Animated documentary series based on "货币战争" (Currency Wars) by Song Hongbing. Uses Remotion (React-based video framework) with composition-based scene sequencing.

## STRUCTURE

```
./
├── src/
│   ├── Root.tsx              # Composition registry (14 entries)
│   ├── compositions/         # Episode compositions (12 files)
│   ├── components/
│   │   ├── scenes/           # Scene components (episodeXX/ subdirs)
│   │   ├── animations/       # Animation utilities
│   │   ├── characters/       # SVG skeletal animation
│   │   ├── charts/           # Data viz
│   │   └── data-viz/        # Timeline, graphs
│   ├── subtitles/            # Subtitle arrays with timing
│   └── styles/               # Theme CSS variables
├── public/assets/audio/      # BGM + SFX
├── scripts/                  # Build utilities
└── markdown-books/           # Source content
```

## WHERE TO LOOK

| Task            | Location                                                |
| --------------- | ------------------------------------------------------- |
| Add new episode | `src/compositions/`, `src/components/scenes/episodeXX/` |
| Add scene       | `src/components/scenes/` (create episodeXX/ subdir)     |
| Edit subtitles  | `src/subtitles/episodeXX.ts`                            |
| Configure video | `remotion.config.ts`                                    |
| Theme/colors    | `src/styles/theme.css`                                  |

## CODE MAP

- **Root.tsx**: 14 Composition entries (Episode01-11, Trailer, HelloWorld)
- **EpisodeXX.tsx**: 120-160 lines (EXCEPT 07=1866, 08=1614 - inline scenes!)
- **Scene components**: Frame-based animation via `useCurrentFrame()`

## CONVENTIONS (THIS PROJECT)

- **FPS**: 30 fps standard
- **Timing**: `fps * seconds` for frame calculations
- **Exports**: Named exports + barrel index.ts (episodes 03-06, 09-11)
- **Import**: `import { Scene } from "../components/scenes/episodeXX"`
- **Audio**: `src/components/Audio.tsx` wrapper component

## ANTI-PATTERNS

- ❌ `any` type (HIGH risk) - in scripts/ only
- ❌ `console.*` in src/ (MEDIUM)
- ❌ Episode07/08: Inline scenes (1600+ lines each) - extract to episode07/, episode08/
- ❌ Episode02: Missing index.ts barrel file

## DEVIATIONS FROM STANDARD

| Issue                 | File          | Fix Priority |
| --------------------- | ------------- | ------------ |
| Monolithic 1866 lines | Episode07.tsx | HIGH         |
| Monolithic 1614 lines | Episode08.tsx | HIGH         |
| No index.ts           | episode02/    | MEDIUM       |
| Top-level scenes      | episode01/    | LOW          |

## COMMANDS

```bash
bun run dev          # Remotion Studio preview
bun run build        # Bundle
bun run lint         # ESLint + tsc
npx remotion render Episode01 out/ep01.mp4
```

## NOTES

- CLAUDE.md already documents project extensively (145 lines)
- AGENTS.md adds scoring-based directory knowledge
- Episodes 07-08 need refactoring (scenes inline)
