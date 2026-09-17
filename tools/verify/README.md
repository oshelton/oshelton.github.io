# Build verification scripts

Throwaway tooling for the dependency upgrade. This site has no test suite, so
the way to tell whether a dependency bump changed anything is to diff the built
output in `docs/` and account for every difference.

These are not wired into `npm run build` and nothing depends on them. Delete the
directory once the upgrade is finished.

## Why this is necessary

Two builds of identical source are **not** byte-identical, because SvelteKit
emits a random per-build nonce (`__sveltekit_<random>`) and a build timestamp.
The nonce cascades into the content hash of every chunk that references it, so a
naive diff shows most of the output as changed.

Normalize those two things and the build becomes fully deterministic — verified
against the committed baseline, all 82 output files. Anything left over after
normalization is a real change that needs explaining.

## Workflow

Fingerprint the build before and after a dependency change and diff the two:

```bash
node tools/verify/fingerprint.js docs > /tmp/before.txt
```

Then change dependencies, rebuild, and compare:

```bash
npm run build && node tools/verify/fingerprint.js docs > /tmp/after.txt && diff /tmp/before.txt /tmp/after.txt
```

Adding `body` reduces each page to its `<body>` contents, ignoring asset preload
ordering. It answers the narrower and more trustworthy question — "does this page
still render the same?" — and is the check worth leaning on when the full
fingerprint shows churn you have already explained:

```bash
node tools/verify/fingerprint.js docs body > /tmp/after-body.txt
```

Since `docs/` is committed, the "before" side can also come from git rather than
being captured in advance:

```bash
git stash push -u docs && node tools/verify/fingerprint.js docs all > /tmp/before.txt && git stash pop
```

## When a JS chunk differs

A differing chunk usually is not a real change. Rollup reallocates single-letter
identifiers whenever the module graph shifts, so compare structurally:

```bash
node tools/verify/compare-js.js old-chunk.js new-chunk.js
```

`STRUCTURALLY IDENTICAL` means the only difference was minifier naming.
Otherwise it prints the first diverging token, which is usually enough to see
what actually moved.

**Known limitation.** Free identifiers — globals and anything not declared in
the module — are alpha-renamed just like locals, so swapping one undeclared name
for another (`buildUrl` for `buildEvilUrl`) reads as identical. A minifier
cannot rename these, so in practice such a change never appears on its own, and
the fingerprint above remains the authoritative signal. `test.js` pins this
behavior so it stays visible rather than being rediscovered.

## Other false positives to normalize before believing a diff

- **Class attribute ordering** — flowbite-svelte merges classes with `twMerge`,
  so order shifts without meaning.
- **RTL logical properties** — `pl-3`/`ps-3`, `mr-4`/`me-4` and friends are
  equivalent in LTR; map them back before diffing.
- **Whitespace runs and attribute ordering** in the prerendered HTML.

## Interactive checks

```bash
node tools/verify/serve-docs.js
```

Serves `docs/` the way GitHub Pages does. Prefer this over `vite preview`, which
serves SvelteKit's own client output and can drift from what the static adapter
actually wrote.

Worth exercising by hand, since these are what break in practice: the nav
dropdowns (including the rightmost one, where floating-ui has to flip/shift),
image tooltips and the popup modal, the blog post table-of-contents popover, and
the blog search date picker.

## Sanity check

A verification tool that silently reports "no change" is worse than none, so
`compare-js.js` has its own mutation test. It asserts that seventeen edits —
changed literals, flipped operators, altered property values, renamed exports,
dropped parameters — are each reported as different, and that consistent local
renaming is not:

```bash
node tools/verify/test.js
```

Run it after touching `compare-js.js` or `normalize.js`. Two of the three bugs
this tooling has had were false negatives that only this test would have caught:
object property values were being skipped entirely, and operators were never
emitted, so `a > b` and `a < b` compared equal.
