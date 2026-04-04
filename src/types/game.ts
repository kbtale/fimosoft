
export interface LocalizedField {
  en: string;
  es: string;
}

/**
 * The raw structure in games.json
 */
export interface RawGame {
  id: string;
  videoUrl?: string;
  steamUrl?: string;
  screenshots: string[];
  title: LocalizedField;
  genre: LocalizedField;
  releaseDate: LocalizedField;
  description: LocalizedField;
}

/**
 * The flat structure used by components after localization
 */
export interface Game {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  description: string;
  videoUrl?: string;
  steamUrl?: string;
  screenshots: string[];
}
