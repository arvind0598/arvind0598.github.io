// astro.config.mjs
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

import compressor from "astro-compressor";

export default defineConfig({
  site: "https://www.arvindsuresh.in",
  integrations: [
    mdx(),
    compress(),
    playformInline(),
    compressor({ gzip: true, brotli: true }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
