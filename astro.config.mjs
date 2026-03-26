import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://docksideweb.com",
  trailingSlash: 'always',
  output: "static",
  build: {
    format: 'directory' 
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});