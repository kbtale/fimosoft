import type { Game, RawGame } from "../types/game";
import gamesData from "../data/games.json";

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
    title: "Fimosoft | Where nightmares take shape",
    tagline: ["Where", "Nightmares", "Take shape"],
    gamesTitle: "Our Games",
    nav: {
      contact: "Contact Us",
      language: "ES"
    },
    contact: {
      title: "Contact Us",
      socials: {
        x: "https://x.com/fimosoft",
        instagram: "https://instagram.com/fimosoft",
        tiktok: "https://tiktok.com/@fimosoft",
        youtube: "https://youtube.com/@fimosoft",
        email: "mailto:fimosoftgames@outlook.com"
      },
      footer: {
        copyright: "© 2026 FIMOSOFT",
        rights: "ALL NIGHTMARES RESERVED"
      }
    },
    games: getLocalizedGames('en')
  },
  es: {
    title: "Fimosoft | Donde las pesadillas toman forma",
    tagline: ["Donde", "Las pesadillas", "Toman forma"],
    gamesTitle: "Nuestros Juegos",
    nav: {
      contact: "Contacto",
      language: "EN"
    },
    contact: {
      title: "Contáctanos",
      socials: {
        x: "https://x.com/fimosoft",
        instagram: "https://instagram.com/fimosoft",
        tiktok: "https://tiktok.com/@fimosoft",
        youtube: "https://youtube.com/@fimosoft",
        email: "mailto:fimosoftgames@outlook.com"
      },
      footer: {
        copyright: "© 2026 FIMOSOFT",
        rights: "TODOS LOS SUSTOS RESERVADOS"
      }
    },
    games: getLocalizedGames('es')
  }
};

export type Locale = keyof typeof translations;
