// The single definition of "a build-to-build difference that doesn't count".
//
// Both fingerprint.js and compare-js.js must agree on this exactly, or they
// answer subtly different questions and the whole workflow stops meaning
// anything. Keep it here rather than copied into each script.
//
// Two builds of identical source differ only by these, which is what makes the
// comparison worth trusting.

// Vite 4 emitted lowercase-hex hashes (name.a1b2c3d4.js). Vite 5 emits
// base64url hashes and SvelteKit 2 drops the readable chunk name entirely, so
// a chunk is just DWJ8cIu7.js. Match both, and the bare form.
const HASHED_ASSET = /(?:\.[0-9a-f]{8}|\.[A-Za-z0-9_-]{8})\.(js|css)/g;
const BARE_HASH_CHUNK = /\b[A-Za-z0-9_-]{8}\.(js|css)/g;

/** @param {string} text @returns {string} */
export function normalizeBuildNoise(text) {
	return (
		text
			.replace(HASHED_ASSET, '.HASH.$1')
			.replace(BARE_HASH_CHUNK, 'HASH.$1')
			// sveltekit's per-build global nonce, e.g. __sveltekit_57hdzo
			.replace(/__sveltekit_[a-z0-9]+/g, '__sveltekit_ID')
			// sveltekit's build timestamp (epoch ms); appears in version.json and
			// in the singletons chunk as the version to check against
			.replace(/"1[0-9]{12}"/g, '"TS"')
			.replace(/\r\n/g, '\n')
	);
}

/**
 * Hashed filenames are themselves unstable, so paths need normalizing too.
 *
 * Caveat: under Vite 5 / SvelteKit 2 a chunk's filename is ONLY a hash, so
 * normalizing collapses every chunk to the same name and per-chunk comparison
 * by filename stops being meaningful. Compare the prerendered HTML instead -
 * see README.md.
 *
 * @param {string} path @returns {string}
 */
export function normalizePath(path) {
	return path.replace(HASHED_ASSET, '.HASH.$1').replace(BARE_HASH_CHUNK, 'HASH.$1');
}
