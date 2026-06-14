import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ardadenizcolak.com",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "directory",
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@content": "/src/content",
        "@styles": "/src/styles",
        "@lib": "/src/lib",
        "@types": "/src/types",
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  },
});
