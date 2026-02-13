# SUBTITLES KNOWLEDGE BASE

**Generated:** 2026-02-13
**Directory:** src/subtitles/

## OVERVIEW

Bilingual subtitle data arrays for all episodes and trailer, exported as scene-specific constants and combined episode arrays.

## WHERE TO LOOK

| Task                   | Location                                      |
| ---------------------- | --------------------------------------------- |
| Add episode subtitles  | `src/subtitles/episodeXX.ts`                  |
| Import subtitle type   | `from "./subtitles"` (index.ts barrel export) |
| Add scene subtitles    | Export new scene array in episodeXX.ts        |
| Modify timing          | Edit startFrame/endFrame in SubtitleEntry     |
| View trailer subtitles | `src/subtitles/trailer.ts`                    |

## CONVENTIONS

### SubtitleEntry Type

```typescript
interface SubtitleEntry {
  startFrame: number; // Frame when subtitle appears (30 fps)
  endFrame: number; // Frame when subtitle disappears
  text: string; // English text
  translation?: string; // Chinese translation (optional)
}
```

### File Structure

```typescript
// Scene-level exports (preferred for episodes 03+)
export const sceneNameSubs: SubtitleEntry[] = [
  { startFrame: 0, endFrame: 180, text: "...", translation: "..." },
  // Each scene starts from frame 0 (scene-relative)
];

// Combined episode export (required for compatibility)
export const episodeXXSubtitles = [
  ...scene1Subs,
  ...scene2Subs,
  // Add frame offset in scene component, not here
];

export default episodeXXSubtitles;
```

### Import Pattern

```typescript
// Import from barrel (preferred)
import { SubtitleEntry, episode01Subtitles } from "../subtitles";

// Or import specific scenes (episodes 03+)
import { ancientMarketSubs } from "../subtitles/episode01";
```

## ANTI-PATTERNS

- ❌ Global frame offset comments in scene exports (episodes 01-02 have these)
- ❌ Exporting only combined array without scene exports (reusability)
- ❌ Missing `translation` field for Chinese content

## BEST PRACTICES

- ✅ Keep scenes scene-relative (start from frame 0)
- ✅ Export scene-specific constants for reusability
- ✅ Handle frame offset in component, not subtitle data
- ✅ Provide bilingual content (text + translation)

## NOTES

- 13 subtitle files total (trailer + episodes 01-11)
- index.ts provides barrel export for all episodes
- Episodes 03+ follow cleaner scene-relative pattern
- Episodes 01-02 still use global offset comments (technical debt)
