import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import liveReload from 'vite-plugin-live-reload';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    liveReload(["./**/*.ts", "./**/*.svelte"], { root: process.cwd() }),
    ViteRestart({
      restart: ["./**/*.ts", "./**/*.svelte"]
    })
  ],
  ssr: {
    noExternal: ["three", "troika-three-text"]
  }
});
