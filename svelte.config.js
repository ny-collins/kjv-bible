import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Use the static adapter
    adapter: adapter({
      // default options are fine
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Use 'index.html' for single-page app behavior
      precompress: false
    })
  }
};

export default config;