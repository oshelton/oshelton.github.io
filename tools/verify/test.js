// Validate compare-js.js against a battery of mutations.
//
// Each case asserts what the tool SHOULD report. Cases marked with a note are
// deliberate design limitations, pinned here so they stay visible.
import { writeFileSync, mkdtempSync } from 'fs';
import { execFileSync } from 'child_process';
import { join } from 'path';
import { tmpdir } from 'os';
import { fileURLToPath } from 'url';

const dir = mkdtempSync(join(tmpdir(), 'cmp-'));
// resolve the tool next to this file, so the test runs from any cwd
const TOOL = fileURLToPath(new URL('compare-js.js', import.meta.url));

const BASE = `
const config = { url: buildUrl("https://example.com/first"), retries: 3, opts: { deep: true } };
const list = [1, 2, 3];
const label = \`some text and \${config.retries} more text\`;
const re = /^ab+c$/i;
function check(leftSide, rightSide) {
	if (leftSide > rightSide) { return leftSide.toFixed(2); }
	return rightSide;
}
export { config as settings, check, list, label, re };
`;

// [name, mutated source, expectedIdentical, note]
const CASES = [
	// locals the minifier is free to rename -> must compare identical
	['consistent param rename', BASE.replace(/leftSide/g, 'zq').replace(/rightSide/g, 'wj'), true],
	['whitespace only', BASE.replace(/\n/g, '\n  '), true],

	// real semantic changes -> must be detected
	['string literal changed', BASE.replace('example.com/first', 'evil.com/first'), false],
	['number literal changed', BASE.replace('retries: 3', 'retries: 99'), false],
	['property key changed', BASE.replace('retries:', 'attempts:'), false],
	['nested property value changed', BASE.replace('deep: true', 'deep: false'), false],
	['property added', BASE.replace('retries: 3,', 'retries: 3, extra: 1,'), false],
	['array element changed', BASE.replace('[1, 2, 3]', '[1, 2, 4]'), false],
	['comparison operator inverted', BASE.replace('>', '<'), false],
	['equality strictness changed', BASE.replace('leftSide > rightSide', 'leftSide >= rightSide'), false],
	['logical operator added', BASE.replace('leftSide > rightSide', 'leftSide > rightSide && leftSide'), false],
	['const changed to let', BASE.replace('const list', 'let list'), false],
	['statement removed', BASE.replace('return rightSide;', ''), false],
	['member access changed', BASE.replace('toFixed', 'toPrecision'), false],
	['export name changed', BASE.replace('config as settings', 'config as options'), false],
	['parameter dropped', BASE.replace('leftSide, rightSide', 'leftSide'), false],
	// Svelte compiles markup text into template literals, so these two matter
	// more here than they look
	['template literal text changed', BASE.replace('some text and', 'some OTHER text and'), false],
	['template literal whitespace moved', BASE.replace('text and ${', 'text and  ${'), false],
	['regex literal changed', BASE.replace('/^ab+c$/i', '/^xy*z$/g'), false],

	// KNOWN LIMITATION: free/global identifiers are alpha-renamed like locals,
	// so swapping one undeclared name for another is invisible. A minifier
	// cannot rename these, so in practice such a change never appears alone.
	// The fingerprint (exact text hash) remains the authoritative signal.
	['free identifier swapped (known gap)', BASE.replace('buildUrl(', 'buildEvilUrl('), true]
];

writeFileSync(join(dir, 'base.js'), BASE);

let pass = 0;
let fail = 0;
for (const [name, mutated, expectIdentical] of CASES) {
	const file = join(dir, 'm.js');
	writeFileSync(file, mutated);
	if (mutated === BASE) {
		console.log(`FAIL  ${name.padEnd(36)} mutation was a no-op`);
		fail++;
		continue;
	}
	let identical;
	try {
		execFileSync('node', [TOOL, join(dir, 'base.js'), file], { encoding: 'utf8' });
		identical = true;
	} catch {
		identical = false;
	}
	const ok = identical === expectIdentical;
	ok ? pass++ : fail++;
	const label = (v) => (v ? 'IDENTICAL' : 'DIFFERENT');
	console.log(
		`${ok ? 'pass' : 'FAIL'}  ${name.padEnd(36)} want=${label(expectIdentical)} got=${label(identical)}`
	);
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
