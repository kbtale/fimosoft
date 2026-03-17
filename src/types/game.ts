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
  content: Record<Locale, GameContent>;
  mainMedia: string;
  screenshots: string[];
}
