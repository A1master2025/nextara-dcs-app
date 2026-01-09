/**
 * Schema URL Utilities
 * src/lib/schema/url.ts
 *
 * Phase 5 — Structured Data + Indexing Maturity
 * Deterministic URL handling for schema @id generation.
 *
 * CRITICAL: Origin derived from Astro site config, NOT hardcoded.
 */

/**
 * Ensures path has leading slash, no trailing slash (for joining)
 */
export function normalizePath(path: string): string {
  let p = path.trim();
  if (!p.startsWith('/')) p = '/' + p;
  if (p.endsWith('/') && p.length > 1) p = p.slice(0, -1);
  return p;
}

/**
 * Ensures URL has trailing slash (for canonical consistency)
 */
export function ensureTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : url + '/';
}

/**
 * Removes trailing slash from origin for clean joining
 */
export function normalizeOrigin(origin: string): string {
  return origin.endsWith('/') ? origin.slice(0, -1) : origin;
}

/**
 * Joins origin + path into full URL with trailing slash
 */
export function buildUrl(origin: string, path: string): string {
  const cleanOrigin = normalizeOrigin(origin);
  const cleanPath = normalizePath(path);
  const url = cleanPath === '/' ? cleanOrigin + '/' : cleanOrigin + cleanPath + '/';
  return url;
}

/**
 * Builds schema @id with fragment identifier
 * Example: buildSchemaId('https://example.com', '/services/seo/', 'service')
 *          → 'https://example.com/services/seo/#service'
 */
export function buildSchemaId(origin: string, path: string, fragment: string): string {
  const url = buildUrl(origin, path);
  return url + '#' + fragment;
}