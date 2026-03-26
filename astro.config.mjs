import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.docksideweb.com",
  trailingSlash: 'always',
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});