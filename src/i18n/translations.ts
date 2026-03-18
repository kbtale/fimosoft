import type { Game } from "../types/game";

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
    games: [
      {
        id: "prologue",
        title: "Day at the Office - Prologue",
        genre: "Action, Adventure, Indie, Free To Play",
        releaseDate: "31 Oct, 2024",
        description: "Try to escape from the office, make your decisions carefully, and keep your cool to get home safe and sound... Do you hear that...? The phone is ringing, and it's for you.",
        videoUrl: "/videos/games/prologue-bg.mp4",
        steamUrl: "https://store.steampowered.com/app/2904740/Day_at_the_Office__Prologue/",
        screenshots: ["/images/games/dato-p1.jpg", "/images/games/dato-p2.jpg", "/images/games/dato-p3.jpg", "/images/games/dato-p4.jpg"]
      },
      {
        id: "signed",
        title: "Day at the Office - Signed",
        genre: "Action, Adventure, Indie, Free To Play",
        releaseDate: "To be announced",
        description: "This is going to be downloadable content for the main game.",
        steamUrl: "https://store.steampowered.com/app/3537780/Day_at_the_Office__Signed/",
        screenshots: ["/images/games/dato-s1.jpg", "/images/games/dato-s2.jpg", "/images/games/dato-s3.jpg"]
      },
      {
        id: "hippocratic",
        title: "Hippocratic",
        genre: "Action, Adventure, Indie",
        releaseDate: "To be announced",
        description: "Hippocratic is a first-person psychological survival horror where you play as the last doctor in a post-apocalyptic hospital. Diagnose, operate, manage scarce resources, and decide who lives or dies as your sanity slowly unravels.",
        steamUrl: "https://store.steampowered.com/app/4404990/Hippocratic/",
        screenshots: ["/images/games/hpc1.jpg", "/images/games/hpc2.jpg", "/images/games/hpc3.jpg", "/images/games/hpc4.jpg"]
      }
    ] as Game[]
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
    games: [
      {
        id: "prologue",
        title: "Day at the Office - Prologue",
        genre: "Acción, Aventura, Indie, Free To Play",
        releaseDate: "31 Oct, 2024",
        description: "Intenta escapar de la oficina, toma tus decisiones con cuidado y mantén la calma para llegar a casa sano y salvo... ¿Escuchas eso...? El teléfono está sonando, y es para ti.",
        videoUrl: "/videos/games/prologue-bg.mp4",
        steamUrl: "https://store.steampowered.com/app/2904740/Day_at_the_Office__Prologue/",
        screenshots: ["/images/games/dato-p1.jpg", "/images/games/dato-p2.jpg", "/images/games/dato-p3.jpg", "/images/games/dato-p4.jpg"]
      },
      {
        id: "signed",
        title: "Day at the Office - Signed",
        genre: "Acción, Aventura, Indie, Free To Play",
        releaseDate: "Por anunciar",
        description: "Esto será contenido descargable para el juego principal.",
        steamUrl: "https://store.steampowered.com/app/3537780/Day_at_the_Office__Signed/",
        screenshots: ["/images/games/dato-s1.jpg", "/images/games/dato-s2.jpg", "/images/games/dato-s3.jpg"]
      },
      {
        id: "hippocratic",
        title: "Hippocratic",
        genre: "Acción, Aventura, Indie",
        releaseDate: "Por anunciar",
        description: "Hippocratic es un survival horror psicológico en primera persona donde juegas como el último médico en un hospital post-apocalíptico. Diagnostica, opera, administra recursos escasos y decide quién vive o muere mientras tu cordura se desmorona lentamente.",
        steamUrl: "https://store.steampowered.com/app/4404990/Hippocratic/",
        screenshots: ["/images/games/hpc1.jpg", "/images/games/hpc2.jpg", "/images/games/hpc3.jpg", "/images/games/hpc4.jpg"]
      }
    ] as Game[]
  }
};

export type Locale = keyof typeof translations;
