# Issues and Blockers

## 2025-02-09 - Subagent Failure to Fix Linting Errors

**Issue**: sisyphus-junior subagent failed 3 times to fix ESLint/TypeScript errors.

**Attempts**:

1. First attempt: Subagent claimed completion but made no changes (completed in 2s)
2. Second attempt: Subagent claimed completion but made no changes (completed in 1s)
3. Third attempt: Subagent claimed completion but made no changes (completed in 2s)

**Errors to fix**:

- NightTrainScene.tsx line 40: Math.random() should be random() from 'remotion'
- epubParser.ts lines 82, 118, 131: Replace `any` types
- epubParser.ts lines 204, 209: Remove unused variables

**Resolution**: ✅ Fixed manually by Orchestrator.

All linting errors have been resolved:

- NightTrainScene.tsx: Replaced Math.random() with random(null) from 'remotion'
- epubParser.ts: Added proper TypeScript types (OpfItem, OpfItemRef, ParsedOpfXml)
- epubParser.ts: Removed unused parameters (bookNumber, index)
- Subtitles.tsx: Removed unused fps variable and useVideoConfig import
- CongressScene.tsx: Fixed typo "Cechinzel" → "Cinzel"
- All call sites updated

Verification: `bun run lint` passes with zero errors.

## 2025-02-09 - Audio Files Status

**Current Status**: All audio files are placeholders (33 bytes each)

**Files requiring manual download**:

BGM (public/assets/audio/bgm/):

- tension.mp3 - Suspense/tension music (2-5 min)
- conspiracy.mp3 - Conspiracy atmosphere (3-6 min)
- dramatic.mp3 - Dramatic/epic music (3-5 min)

SFX (public/assets/audio/sfx/):

- bell.mp3 - Bell sound (2-5 sec)
- coin-clink.mp3 - Coin clink (1-3 sec)
- impact.mp3 - Impact sound (2-4 sec)

**Action Required**: Manual download from FreePD (https://freepd.com/)

- No registration required
- No attribution needed
- Commercial use allowed

**Reference**: `scripts/AUDIO_README.md` for detailed download instructions

**Blocking**: Not blocking - project works without audio for visual testing

## 2025-02-09 - Episode Composition Registration

**Fixed**: Episode07 was missing from Root.tsx composition list

**Resolution**: ✅ Added Episode07 to RemotionRoot component

All three P0 episodes are now registered and available in Remotion Studio:

- Episode01 (Prologue) - 6 minutes
- Episode03 (Battle of Waterloo) - 6 minutes
- Episode07 (Federal Reserve) - 8 minutes
