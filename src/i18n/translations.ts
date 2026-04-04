import type { Game, RawGame } from "../types/game";
import gamesData from "../data/games.json";
import siteData from "../data/site.json";

const games = gamesData as RawGame[];

export type Locale = "en" | "es";

/**
 * Helper to project raw game data into a locale
 * Falls back to 'en' if the field is missing in lang
 */
function getLocalizedGames(lang: Locale): Game[] {
  const fallback = "en" as const;
  return games.map((game) => ({
    id: game.id,
    videoUrl: game.videoUrl,
    steamUrl: game.steamUrl,
    screenshots: game.screenshots,
    title: game.title[lang] || game.title[fallback],
    genre: game.genre[lang] || game.genre[fallback],
    releaseDate: game.releaseDate[lang] || game.releaseDate[fallback],
    description: game.description[lang] || game.description[fallback],
  }));
}

const s = siteData;
const fallback = "en"; // universal fallback key

export const translations = {
  en: {
    title: s.title.en,
    tagline: s.tagline.en,
    gamesTitle: s.gamesTitle.en,
    heroVideo: s.heroVideo,
    heroIntro: s.heroIntro.en,
    buttons: {
      details: s.buttons.details.en,
      steam: s.buttons.steam.en
    },
    nav: {
      contact: s.nav.contact.en,
      language: s.nav.language.en
    },
    contact: {
      title: s.contact.title.en,
      socials: s.contact.socials,
      footer: {
        logo: s.contact.footer.logo,
        manifesto: s.contact.footer.manifesto.en,
        copyright: s.contact.footer.copyright.en,
        rights: s.contact.footer.rights.en
      }
    },
    games: getLocalizedGames('en')
  },
  es: {
    title: s.title.es || s.title[fallback],
    tagline: s.tagline.es || s.tagline[fallback],
    gamesTitle: s.gamesTitle.es || s.gamesTitle[fallback],
    heroVideo: s.heroVideo,
    heroIntro: s.heroIntro.es || s.heroIntro[fallback],
    buttons: {
      details: s.buttons.details.es || s.buttons.details[fallback],
      steam: s.buttons.steam.es || s.buttons.steam[fallback],
    },
    nav: {
      contact: s.nav.contact.es || s.nav.contact[fallback],
      language: s.nav.language.es || s.nav.language[fallback],
    },
    contact: {
      title: s.contact.title.es || s.contact.title[fallback],
      socials: s.contact.socials,
      footer: {
        logo: s.contact.footer.logo,
        manifesto:
          s.contact.footer.manifesto.es || s.contact.footer.manifesto[fallback],
        copyright:
          s.contact.footer.copyright.es || s.contact.footer.copyright[fallback],
        rights: s.contact.footer.rights.es || s.contact.footer.rights[fallback],
      },
    },
    games: getLocalizedGames("es"),
  },
};
