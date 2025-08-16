// astro.config.mjs
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx()], // MDX goes here
  vite: {
    plugins: [tailwindcss()], // Only Tailwind in vite plugins
  },
});
