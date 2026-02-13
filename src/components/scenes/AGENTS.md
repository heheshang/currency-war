# AGENTS.md: src/components/scenes

**Generated:** 2026-02-13
**Type:** Scene Components Directory

## OVERVIEW

Episode-specific and shared animation scenes organized by episode number with frame-based Remotion components.

## STRUCTURE

```
src/components/scenes/
├── episode02/          # 12 scenes (NO index.ts - MEDIUM priority)
├── episode03/          # 13 scenes + index.ts
├── episode04/          # 14 scenes + index.ts
├── episode05/          # 16 scenes + index.ts
├── episode06/          # 8 scenes + index.ts
├── episode09/          # 11 scenes + index.ts
├── episode10/          # 10 scenes + index.ts
├── episode11/          # 9 scenes + index.ts
└── [13 top-level scenes]  # BattleOfWaterloo, JekyllIslandScene, etc.
```

**Note:** No episode01/ directory - episode 01 scenes live at top level (LOW priority refactor).

## WHERE TO LOOK

| Task                    | Location                                                    |
| ----------------------- | ----------------------------------------------------------- |
| Add episode scene       | `src/components/scenes/episodeXX/SceneName.tsx`             |
| Add shared scene        | `src/components/scenes/SharedSceneName.tsx`                 |
| Use animation utilities | `src/components/animations/` (import via `../animations`)   |
| Episode imports         | `import { Scene } from "../../components/scenes/episodeXX"` |
| Top-level scene         | `import { Scene } from "../components/scenes/SceneName"`    |

## CONVENTIONS

**Scene Pattern:**

- All scenes use `AbsoluteFill` wrapper from Remotion
- Frame-based animation via `useCurrentFrame()` hook
- Transitions via `interpolate(frame, [start, end], [from, to])`
- Named exports: `export const SceneName: React.FC = () => {}`

**Naming:**

- Descriptive names: `BankOfEnglandScene`, `SorosScene`, `JekyllIslandScene`
- Episode prefixes for shared: `EpisodeXXSummaryScene` (ep02, 05, 06) OR plain `SummaryScene` (ep03, 04, 09, 10)
- Opening scenes: `OpeningScene` (ep09-11), `Episode06OpeningScene`, `OpeningLincolnScene` (ep03), `OpeningWilsonScene` (ep04)

**File Sizes:**

- Typical: 150-400 lines
- Large scenes: 400-775 lines (SalomonInAustriaScene=774, JamesConquersFranceScene=768)

**Barrel Files:**

- Episodes 03-11 have `index.ts` for named exports
- Episode 02 missing barrel (import directly: `from "./scenes/episode02/SceneName"`)

## ANTI-PATTERNS

| Issue                  | Pattern                               | Fix Priority                  |
| ---------------------- | ------------------------------------- | ----------------------------- |
| Missing barrel         | episode02/ has no index.ts            | MEDIUM                        |
| Inconsistent naming    | Episode02SummaryScene vs SummaryScene | LOW                           |
| episode01 at top-level | 13 scenes should be in episode01/     | LOW                           |
| Large scenes           | 770+ line scenes exist                | LOW (consider sub-components) |

## NOTES

- Top-level scenes use `../animations` utilities (FadeInTransition, PulseAnimation, etc.)
- Episode scenes mostly use direct Remotion primitives
- All scenes are frame-timed (30 fps standard)
- Scene duration varies: 30-90 seconds typical
