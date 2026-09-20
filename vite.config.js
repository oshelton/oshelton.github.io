import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// Tailwind runs as a Vite plugin rather than through PostCSS: Vite 8 resolves
	// @import with postcss-import before any PostCSS plugin sees it, so
	// `@import 'tailwindcss'` would be looked up as a file and fail.
	plugins: [tailwindcss(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
