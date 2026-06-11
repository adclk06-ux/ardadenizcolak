import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ardadenizcolak.dev",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "file",
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  },
});
