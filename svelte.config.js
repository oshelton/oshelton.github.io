// SvelteKit 2 no longer re-exports vitePreprocess; it comes from the plugin,
// which is now a peer dependency rather than something kit bundles.
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs'
		})
		/* Don't need this for the primary profile site on Github.
		paths: {
			base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
		},
		*/
	},

	preprocess: [vitePreprocess({})]
};

export default config;
