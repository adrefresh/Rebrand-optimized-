// Intentionally empty.
//
// Next.js unconditionally bundles its own IE11-era polyfill module
// (next/dist/build/polyfills/polyfill-module.js) into every production build,
// regardless of .browserslistsrc — this is documented framework behavior, not
// something our own build config can influence directly:
// https://github.com/vercel/next.js/discussions/64330
//
// It patches String.prototype.trimStart/trimEnd, Array.prototype.flat/flatMap/at,
// Object.fromEntries/hasOwn, and URL.canParse — all natively supported in every
// browser our .browserslistsrc targets (chrome/firefox/edge >= 90, safari >= 15).
// Lighthouse flags this as ~13-16KB of "Legacy JavaScript" sent to modern browsers
// for nothing.
//
// This file is aliased in place of that module via turbopack.resolveAlias in
// next.config.ts, so the bytes are never shipped. If you ever need to support
// browsers older than the current .browserslistsrc targets, remove the alias
// in next.config.ts instead of editing this file.
