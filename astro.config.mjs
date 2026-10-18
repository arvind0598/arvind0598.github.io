// astro.config.mjs
import mdx from "@astrojs/mdx";
import branchwork from "@branchwork/astro";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import compressor from "astro-compressor";
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";

export default defineConfig({
  site: "https://www.arvindsuresh.in",
  compressHTML: true,
  integrations: [
    mdx(),
    branchwork({
      content: "./blog",
      base: "/blog",
      siteName: "Arvind Suresh",
      layout: "./src/layouts/BlogLayout.astro",
    }),
    compress(),
    playformInline({ Beasties: { pruneSource: false } }),
    compressor({ gzip: true, brotli: true }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      FontaineTransform.vite({
        fallbacks: ["Arial", "Roboto", "Times New Roman"],
        resolvePath: (id) => {
          return new URL(`./public${id}`, import.meta.url);
        },
      }),
    ],
  },
});
