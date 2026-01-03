/**
 * Site Configuration
 */

export const SITE = {
  name: "NexTara AI Solutions",
  shortName: "NexTara",
  origin: "https://nextara-ai-solutions.com",
  defaultTitle: "NexTara AI Solutions — Digital Credibility System (DCS)",
  defaultDescription:
    "Governed digital growth systems. Measure credibility, fix trust gaps, and prove what's real—across humans and machines.",
  social: {
    twitter: "@nextaraai",
  },
} as const;

export type SiteConfig = typeof SITE;