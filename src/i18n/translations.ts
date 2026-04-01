import type { Game, RawGame } from "../types/game";
import gamesData from "../data/games.json";
import siteData from "../data/site.json";

const games = gamesData as RawGame[];

/**
 * Helper to project raw game data into a locale
 */
function getLocalizedGames(lang: 'en' | 'es'): Game[] {
  return games.map(game => ({
    id: game.id,
    videoUrl: game.videoUrl,
    steamUrl: game.steamUrl,
    screenshots: game.screenshots,
    title: game.title[lang],
    genre: game.genre[lang],
    releaseDate: game.releaseDate[lang],
    description: game.description[lang],
  }));
}

export const translations = {
  en: {
    title: siteData.title.en,
    tagline: siteData.tagline.en,
    gamesTitle: siteData.gamesTitle.en,
    nav: {
      contact: siteData.nav.contact.en,
      language: siteData.nav.language.en
    },
    contact: {
      title: siteData.contact.title.en,
      socials: siteData.contact.socials,
      footer: {
        copyright: siteData.contact.footer.copyright.en,
        rights: siteData.contact.footer.rights.en
      }
    },
    games: getLocalizedGames('en')
  },
  es: {
    title: siteData.title.es,
    tagline: siteData.tagline.es,
    gamesTitle: siteData.gamesTitle.es,
    nav: {
      contact: siteData.nav.contact.es,
      language: siteData.nav.language.es
    },
    contact: {
      title: siteData.contact.title.es,
      socials: siteData.contact.socials,
      footer: {
        copyright: siteData.contact.footer.copyright.es,
        rights: siteData.contact.footer.rights.es
      }
    },
    games: getLocalizedGames('es')
  }
};

export type Locale = keyof typeof translations;
