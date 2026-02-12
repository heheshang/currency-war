/**
 * Character Components Library
 *
 * Includes both cartoon characters and historical figure photo components
 */

// Cartoon Characters
export { CartoonCharacter } from "./CartoonCharacter";
export type { CartoonCharacterProps } from "./CartoonCharacter";

// Specialized Characters
export { NathanRothschild } from "./NathanRothschild";

// Historical Figures with Real Photos
export { HistoricalFigure } from "./HistoricalFigure";
export type { HistoricalFigureProps } from "./HistoricalFigure";
export {
  HISTORICAL_FIGURES,
  getFigure,
  getFiguresForEpisode,
  getLocalPhotoPath,
  type HistoricalFigureConfig,
} from "./historicalFigures";
