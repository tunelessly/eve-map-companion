import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';

const config = {
  preprocess: seqPreprocessor([preprocess(), vitePreprocess()])
};

export default config;
