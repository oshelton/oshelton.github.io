// The single definition of "a build-to-build difference that doesn't count".
//
// Both fingerprint.js and compare-js.js must agree on this exactly, or they
// answer subtly different questions and the whole workflow stops meaning
// anything. Keep it here rather than copied into each script.
//
// Two builds of identical source differ only by these, which is what makes the
// comparison worth trusting.

/** @param {string} text @returns {string} */
export function normalizeBuildNoise(text) {
	return (
		text
			// vite content hashes: name.a1b2c3d4.js / .css
			.replace(/\.[0-9a-f]{8}\.(js|css)/g, '.HASH.$1')
			// sveltekit's per-build global nonce, e.g. __sveltekit_57hdzo
			.replace(/__sveltekit_[a-z0-9]+/g, '__sveltekit_ID')
			// sveltekit's build timestamp (epoch ms); appears in version.json and
			// in the singletons chunk as the version to check against
			.replace(/"1[0-9]{12}"/g, '"TS"')
			.replace(/\r\n/g, '\n')
	);
}

/** Hashed filenames are themselves unstable, so paths need normalizing too. */
/** @param {string} path @returns {string} */
export function normalizePath(path) {
	return path.replace(/\.[0-9a-f]{8}\.(js|css)/g, '.HASH.$1');
}
