// Emit a normalized fingerprint of the built site, one line of "<hash> <path>"
// per file, so two builds can be compared across a dependency change.
//
// The build is deterministic apart from a per-build nonce and a build
// timestamp; normalizing those (see ./normalize.js) makes two builds of
// identical source compare equal, so anything left over is a real change.
//
// Usage:  node tools/verify/fingerprint.js <dir> [all|body]
//
//   all   every emitted html/css/js/json file (default)
//   body  html files reduced to their <body> contents, which ignores asset
//         preload ordering and answers "does the page still render the same?"
//
// See ./README.md for the intended workflow.
import { readdirSync, readFileSync } from 'fs';
import { join, relative, sep } from 'path';
import { createHash } from 'crypto';
import { normalizeBuildNoise, normalizePath } from './normalize.js';

const root = process.argv[2];
const mode = process.argv[3] ?? 'all';

if (!root || !['all', 'body'].includes(mode)) {
	console.error('usage: node tools/verify/fingerprint.js <dir> [all|body]');
	process.exit(2);
}

// Filter before reading, so the multi-MB zips and images are never opened.
// isFile() matters: a recursive readdir also yields directories, and one named
// like an asset would otherwise be read and throw EISDIR mid-run.
const files = readdirSync(root, { recursive: true, withFileTypes: true })
	.filter((entry) => entry.isFile() && /\.(html|css|js|json)$/.test(entry.name))
	.map((entry) => relative(root, join(entry.parentPath, entry.name)).split(sep).join('/'))
	.sort();

for (const file of files) {
	let text = readFileSync(join(root, file), 'utf8');

	if (mode === 'body' && file.endsWith('.html')) {
		const body = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
		text = body ? body[1] : text;
		// the inline bootstrap script is pure plumbing, not rendered content
		text = text.replace(/<script>[\s\S]*?<\/script>/g, '<script>BOOTSTRAP</script>');
	}

	const hash = createHash('sha256').update(normalizeBuildNoise(text)).digest('hex').slice(0, 16);
	console.log(hash, normalizePath(file));
}
