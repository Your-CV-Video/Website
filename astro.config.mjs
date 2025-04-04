import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://your-cv-video.github.io',
  build: {
    css: {
      code: 'extract', // Extract CSS into separate files
    },
  },
  integrations: [partytown()],
});