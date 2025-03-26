import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // Enables external access
    port: 4321, // Change if needed
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
  },
});
