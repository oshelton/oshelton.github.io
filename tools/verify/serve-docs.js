// Serve the built docs/ directory the way GitHub Pages does, so interactive
// checks exercise the actual deployed artifact.
//
// `vite preview` serves SvelteKit's own client output, which can drift from
// what the static adapter wrote into docs/; this avoids that confusion.
// Responses are sent no-store so a rebuild is always picked up on reload.
//
// Usage:  node tools/verify/serve-docs.js [dir] [port]
//
// See ./README.md for the intended workflow.
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname, normalize, resolve, sep } from 'path';

const root = resolve(process.argv[2] ?? 'docs');
const port = Number(process.argv[3] ?? 4180);

const TYPES = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.pdf': 'application/pdf',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.zip': 'application/zip',
	'.txt': 'text/plain; charset=utf-8'
};

createServer(async (req, res) => {
	try {
		const { pathname } = new URL(req.url, 'http://localhost');
		let requested = decodeURIComponent(pathname);
		if (requested.endsWith('/')) requested += 'index.html';

		let file = join(root, normalize(requested));
		// refuse anything that escaped the served directory
		if (file !== root && !file.startsWith(root + sep)) {
			res.writeHead(403, { 'content-type': 'text/plain' });
			res.end('403');
			return;
		}

		// An extensionless path is either a directory or, as GitHub Pages serves
		// a prerendered route, /foo standing in for /foo.html. Anything with an
		// extension is a real asset, so skip the stat entirely.
		if (!extname(file)) {
			const stats = await stat(file).catch(() => null);
			file = stats?.isDirectory() ? join(file, 'index.html') : file + '.html';
		}

		const body = await readFile(file);
		res.writeHead(200, {
			'content-type': TYPES[extname(file)] ?? 'application/octet-stream',
			'cache-control': 'no-store, no-cache, must-revalidate'
		});
		res.end(body);
	} catch {
		res.writeHead(404, { 'content-type': 'text/plain' });
		res.end('404');
	}
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
