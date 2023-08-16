import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import liveReload from 'vite-plugin-live-reload';
import ViteRestart from 'vite-plugin-restart';
import topLevelAwait from "vite-plugin-top-level-await"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    liveReload(["./**/*.ts", "./**/*.svelte"], { root: process.cwd() }),
    ViteRestart({
      restart: ["./**/*.ts", "./**/*.svelte"]
    }),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`
    })
  ],
  ssr: {
    noExternal: ["three", "troika-three-text"]
  },
  base: "/eve-map-companion/",
});
