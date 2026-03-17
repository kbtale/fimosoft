import type { Locale } from '../i18n/translations';

/**
 * Represents a game's localized metadata.
 */
export interface GameContent {
  title: string;
  description: string;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  description: string;
  videoUrl?: string;
  screenshots: string[];
}
