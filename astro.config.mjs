// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextara-ai-solutions.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const p = typeof page === "string" ? page : page.pathname || String(page);
        return !p.includes("/dcs-diagnostic/") && !p.includes("/thank-you/");
      },
    }),
  ],
});