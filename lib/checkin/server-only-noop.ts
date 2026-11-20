// Stands in for "server-only" outside Next.js, where the real package throws on
// load. Wired up by ./tsconfig.json (read by Netlify's function bundler) and by
// vitest.config.mts.
export {};
