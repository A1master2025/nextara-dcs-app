/**
 * Schema Core — Stable @id Builders
 * src/lib/schema/core.ts
 *
 * Phase 5 — Structured Data + Indexing Maturity
 * Centralized @id generation ensures entity graph consistency.
 *
 * Convention:
 *   Organization: <origin>/#organization
 *   WebSite:      <origin>/#website
 *   WebPage:      <origin>/<path>/#webpage
 *   Service:      <origin>/services/<slug>/#service
 *   ItemList:     <origin>/services/#item-list
 */

import { buildSchemaId, buildUrl, normalizeOrigin } from './url';

// ============================================================
// STABLE @ID BUILDERS
// ============================================================

export function organizationId(origin: string): string {
  return normalizeOrigin(origin) + '/#organization';
}

export function webSiteId(origin: string): string {
  return normalizeOrigin(origin) + '/#website';
}

export function webPageId(origin: string, path: string): string {
  return buildSchemaId(origin, path, 'webpage');
}

export function serviceId(origin: string, slug: string): string {
  return buildSchemaId(origin, `/services/${slug}`, 'service');
}

export function itemListId(origin: string): string {
  return buildSchemaId(origin, '/services', 'item-list');
}

// ============================================================
// URL BUILDERS (for schema url/item properties)
// ============================================================

export function pageUrl(origin: string, path: string): string {
  return buildUrl(origin, path);
}

export function serviceUrl(origin: string, slug: string): string {
  return buildUrl(origin, `/services/${slug}`);
}

export function servicesHubUrl(origin: string): string {
  return buildUrl(origin, '/services');
}

export function homeUrl(origin: string): string {
  return buildUrl(origin, '/');
}