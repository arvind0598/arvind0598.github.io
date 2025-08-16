// astro.config.mjs
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.arvindsuresh.in",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
