// Compare two built JS bundles structurally, ignoring minifier-chosen names.
//
// Rollup reallocates single-letter identifiers whenever the module graph
// shifts, so two bundles of identical source routinely differ byte for byte.
// This parses both and compares an alpha-renamed AST skeleton instead: locals
// become $0, $1, ... in order of first appearance, so a consistent whole-program
// rename compares equal while a real change does not.
//
// Names that form a public contract - import/export names and non-computed
// property keys - are kept verbatim, because changing one IS a real change.
//
// Usage:  node tools/verify/compare-js.js <fileA> <fileB>
// Exits 0 if structurally identical, 1 if not, 2 on bad usage.
//
// See ./README.md for the intended workflow.
import { readFileSync } from 'fs';
import { createRequire } from 'module';
import { normalizeBuildNoise } from './normalize.js';

// acorn ships as a transitive dependency of vite. That is a deliberate bet, but
// vite is one of the things being upgraded, so fail with something actionable
// rather than a bare MODULE_NOT_FOUND if it ever stops being hoisted.
let parse;
try {
	({ parse } = createRequire(import.meta.url)('acorn'));
} catch {
	console.error('compare-js: acorn not found. Run `npm i -D acorn` and retry.');
	process.exit(2);
}

// Positional metadata, which is not structure. Nothing else needs listing:
// walk() ignores anything that is not a node, so primitive keys like
// Literal.value, Identifier.name and .raw are skipped naturally. Do NOT add
// 'value' here - Property.value and MethodDefinition.value are real child
// nodes, and skipping them blinds the comparison to every object property.
const SKIP = new Set(['start', 'end', 'loc', 'range']);

// The identifier under this node that is public contract rather than a local
// binding, or null. Never more than one, so no set is needed.
function publicIdent(node) {
	if (node.computed) return null;
	if (node.type === 'MemberExpression') return node.property;
	if (node.type === 'Property' || node.type === 'MethodDefinition') return node.key;
	return null;
}

function shape(file) {
	const ast = parse(normalizeBuildNoise(readFileSync(file, 'utf8')), {
		ecmaVersion: 2022,
		sourceType: 'module'
	});

	const names = new Map();
	const tokens = [];

	const local = (name) => {
		let alias = names.get(name);
		if (alias === undefined) names.set(name, (alias = '$' + names.size));
		return alias;
	};

	function walk(node, verbatim) {
		if (!node || typeof node !== 'object') return;
		if (Array.isArray(node)) {
			for (const child of node) walk(child, verbatim);
			return;
		}
		if (!node.type) return;

		// Normalize shorthand vs aliased specifiers: `export {j}` and
		// `export {Y as j}` are the same contract, but acorn reuses a single
		// node for the shorthand, which would otherwise look structural.
		if (node.type === 'ExportSpecifier' || node.type === 'ImportSpecifier') {
			const pub = node.type === 'ExportSpecifier' ? node.exported : node.imported;
			tokens.push(node.type, '#' + (pub.name ?? pub.value), 'Identifier', local(node.local.name));
			return;
		}

		// TemplateElement.value is a plain {raw, cooked} object, not a node, so
		// walk() would skip it and every template literal's text would be
		// invisible. Svelte compiles markup text into template literals, so
		// that blind spot hides real content changes in this codebase.
		if (node.type === 'TemplateElement') {
			tokens.push('TemplateElement', JSON.stringify(node.value?.cooked ?? node.value?.raw));
			tokens.push(`tail=${node.tail}`);
			return;
		}

		// Same normalization as specifiers above: acorn reuses one node for a
		// shorthand property, so `{a}` and `{a: b}` would otherwise compare as
		// different shapes even though minification only renamed the local.
		if (node.type === 'Property' && !node.computed && node.key.type === 'Identifier') {
			tokens.push('Property', node.kind, '#' + node.key.name);
			walk(node.value, null);
			return;
		}

		tokens.push(node.type);
		if (node.type === 'Identifier') {
			tokens.push(node === verbatim ? '#' + node.name : local(node.name));
		} else if (node.type === 'Literal') {
			// regex and bigint payloads do not survive JSON.stringify
			if (node.regex) tokens.push(`/${node.regex.pattern}/${node.regex.flags}`);
			else if (node.bigint !== undefined) tokens.push(node.bigint + 'n');
			else tokens.push(JSON.stringify(node.value));
		}

		const nested = publicIdent(node);
		for (const key of Object.keys(node)) {
			if (SKIP.has(key) || key === 'type') continue;
			const child = node[key];

			// Primitive fields carry real meaning - operators (> vs <, && vs ||,
			// === vs !==), declaration kinds (var/let/const), and flags like
			// async/generator/prefix/optional. Emit them, or an inverted
			// condition compares as identical.
			if (child !== null && typeof child !== 'object') {
				if (node.type === 'Identifier' && key === 'name') continue;
				if (node.type === 'Literal' && (key === 'value' || key === 'raw' || key === 'bigint')) {
					continue;
				}
				tokens.push(`${key}=${child}`);
				continue;
			}

			walk(child, nested);
		}
	}

	walk(ast, null);
	return { tokens, locals: names.size };
}

const [fileA, fileB] = process.argv.slice(2);
if (!fileA || !fileB) {
	console.error('usage: node tools/verify/compare-js.js <fileA> <fileB>');
	process.exit(2);
}

const a = shape(fileA);
const b = shape(fileB);

// One pass answers both "are they the same?" and "where do they first differ?"
const length = Math.max(a.tokens.length, b.tokens.length);
let i = 0;
while (i < length && a.tokens[i] === b.tokens[i]) i++;

if (i === length) {
	console.log(`STRUCTURALLY IDENTICAL (${a.locals} locals alpha-renamed)`);
	process.exit(0);
}

const context = (tokens) => tokens.slice(Math.max(0, i - 8), i + 8).join(' ');
console.log('STRUCTURALLY DIFFERENT');
console.log(`first divergence at token ${i}:`);
console.log('  A: ' + context(a.tokens));
console.log('  B: ' + context(b.tokens));
console.log(`token counts: A=${a.tokens.length} B=${b.tokens.length}`);
process.exit(1);
