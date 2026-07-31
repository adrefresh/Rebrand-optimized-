// Dates are stored in blog frontmatter as "dd/mm/yyyy" (human-friendly to
// edit by hand). We parse that format explicitly rather than handing the
// raw string to `new Date()`, since native Date parsing of slash-separated
// strings is ambiguous (browsers/Node often assume mm/dd/yyyy) and would
// silently produce wrong sort order or an Invalid Date.
//
// This lives in its own file, separate from libraries/blogs.ts, on purpose:
// blogs.ts imports "fs" to read markdown files, which only works on the
// server. If a "use client" component (like BlogsPageClient.tsx) imports
// anything from blogs.ts — even just this one small function — the bundler
// has to pull in that entire module graph, including "fs", and ships it to
// the browser where "fs" doesn't exist. Keeping parseBlogDate in its own
// zero-dependency file lets client components use it safely.
export function parseBlogDate(d: string): Date {
  const [day, month, year] = d.split("/").map(Number);
  return new Date(year, month - 1, day);
}
