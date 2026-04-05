import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fimosoftgames.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ru', 'jp'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect'
    }
  },

  integrations: [sitemap()]
});