# COMPOSITIONS DIRECTORY

## OVERVIEW

Episode composition orchestrators - timeline sequences with scene/subtitle coordination (12 files, 101-1866 lines).

## WHERE TO LOOK

| Need               | File/Pattern                               |
| ------------------ | ------------------------------------------ |
| Standard episode   | Episode01-06, 09-11 (~100-160 lines)       |
| Timeline structure | `<Sequence from={x} durationInFrames={y}>` |
| Scene imports      | `from "../components/scenes/episodeXX"`    |
| Subtitle imports   | `from "../subtitles/episodeXX"`            |
| Audio config       | `getEpisodeBGM("EpisodeXX")`               |

## CONVENTIONS

**Standard Episode Pattern** (Episodes 01-06, 09-11):

```tsx
// 1. Import scenes from components/scenes/episodeXX
import { SceneA, SceneB } from "../components/scenes/episode05";
// 2. Import per-scene subtitles
import { sceneASubs, sceneBSubs } from "../subtitles/episode05";
// 3. Timeline via Sequence components
<Sequence from={0} durationInFrames={60 * fps}>
  <SceneA />
  <Subtitles subtitles={sceneASubs} />
</Sequence>;
```

**Timing**: `seconds * fps` for frame calculations (30 fps standard)
**Exports**: Named export + `export default`
**Audio**: Wrapped in `<Audio {...bgm} />`

## ANTI-PATTERNS

| File          | Issue                         | Impact                                     |
| ------------- | ----------------------------- | ------------------------------------------ |
| Episode07.tsx | 7 inline scenes (1866 lines)  | Refactor to `components/scenes/episode07/` |
| Episode08.tsx | 12 inline scenes (1614 lines) | Refactor to `components/scenes/episode08/` |

**Why**: Standard episodes use `episodeXX/` subdirs for scenes. Episode07/08 violate this by defining scenes inline (e.g., `const OpeningScene: React.FC = () => { ... }` at line 472+ in Episode07, line 397+ in Episode08).

## FILE METRICS

```
Episode01-06, 09-11:  101-159 lines (✓ standard)
Trailer:              136 lines
Episode07:          1866 lines (❌ inline scenes - 7 components)
Episode08:          1614 lines (❌ inline scenes - 12 components)
```
