
export type Locale = "en" | "es" | "ru" | "jp";

export interface LocalizedField {
  en: string;
  es: string;
  ru: string;
  jp: string;
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

export interface Translation {
  title: string;
  description: string;
  siteUrl: string;
  siteLogo: string;
  tagline: string[];
  gamesTitle: string;
  heroVideo: string;
  heroIntro: string[];
  buttons: {
    details: string;
    steam: string;
  };
  nav: {
    contact: string;
    language: string;
  };
  contact: {
    title: string;
    socials: {
      x: string;
      instagram: string;
      tiktok: string;
      youtube: string;
      email: string;
    };
    footer: {
      logo: string;
      manifesto: string;
      copyright: string;
      rights: string;
    };
  };
  games: Game[];
}
