// Tailwind 4 moved its PostCSS plugin into its own package, and does its own
// vendor prefixing, so autoprefixer is gone.
const config = {
	plugins: {
		'@tailwindcss/postcss': {}
	}
};

module.exports = config;
