/**
 * Navigation Data
 * Primary navigation structure for Header component.
 * Routes align with Phase 3 IA stubs.
 */

export interface NavItem {
  label: string;
  href: string;
  /** If true, link opens in new tab */
  external?: boolean;
  /** DIOS tracking attribute value */
  ntEvent?: string;
}

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services/", ntEvent: "nav_services" },
  { label: "DCS", href: "/dcs/", ntEvent: "nav_dcs" },
  { label: "Resources", href: "/resources/", ntEvent: "nav_resources" },
  { label: "About", href: "/about/", ntEvent: "nav_about" },
  { label: "Contact", href: "/contact/", ntEvent: "nav_contact" },
];

export const ctaNav: NavItem = {
  label: "Get Your DCS Score",
  href: "/dcs-diagnostic/",
  ntEvent: "nav_cta_diagnostic",
};