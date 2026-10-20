// astro.config.mjs
import mdx from "@astrojs/mdx";
import because from "@because-dev/astro";
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
    because({
      content: "./blog",
      base: "/blog",
      siteName: "Arvind Suresh",
      // src/pages/blog/index.astro is the list page
      index: false,
      shell: "./src/layouts/IdeaShell.astro",
      // Phones open on the map, wider screens on the map with the article sidebar open.
      view: { narrow: "map", wide: "article" },
      // A view that differs from that default is kept as ?article=1 or ?article=0.
      viewParam: "article",
      legend: { narrow: "toggle", wide: "open" },
      dateFormat: {
        locale: "en-US",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      },
    }),
    compress(),
    // Inline whole stylesheets (they're small). Deferring the non-critical part made
    // every page jump when it loaded (Lighthouse layout shift).
    playformInline({
      Beasties: { pruneSource: false, inlineThreshold: 64 * 1024 },
    }),
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
