+ import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		/* Disabled until confirmed it is actually necessary ffor my primary profile page.
		paths: {
			base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
		},
		*/
	}
};

export default config;
