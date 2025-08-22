// astro.config.mjs
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import compress from "astro-compress";

export default defineConfig({
  site: "https://www.arvindsuresh.in",
  integrations: [mdx(), compress()],
  vite: {
    plugins: [tailwindcss()],
  },
});