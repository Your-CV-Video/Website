import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    css: {
      code: 'extract', // Extract CSS into separate files
    },
  },
});