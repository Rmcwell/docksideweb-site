import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.docksideweb.com",
  adapter: cloudflare(),
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