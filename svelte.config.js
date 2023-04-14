import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

const config = {
  preprocess: seqPreprocessor([preprocess(), preprocessThrelte(), vitePreprocess()])
};

export default config;
