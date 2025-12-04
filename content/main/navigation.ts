/**
 * Centralized Navigation Paths
 *
 * This file contains all navigation paths used throughout the application.
 * By centralizing paths here, you can easily update routes in one place
 * without searching through multiple files.
 */

import { COMPANY_INFO } from "./company";

// ============================================================================
// BASE PATHS - Core route paths
// ============================================================================

/** Home page path */
export const PATH_HOME = "/";

/** Book Call page path */
export const PATH_BOOK_CALL = "/book-call";

/** Privacy Policy page path */
export const PATH_PRIVACY = "/privacy";

/** Terms of Service page path */
export const PATH_TERMS = "/terms";

// ============================================================================
// NAVIGATION MENU STRUCTURES - Pre-configured navigation arrays
// ============================================================================

export interface NavigationLink {
  label: string;
  href: string;
  sectionId?: string;
}

/** Main navigation links (shown in header on home page) */
export const MAIN_NAV_LINKS: NavigationLink[] = [
  {
    label: "Testimonials",
    href: "#testimonials",
    sectionId: "testimonials",
  },
  {
    label: "Our Stats",
    href: "#stats",
    sectionId: "stats",
  },
  {
    label: "Pricing",
    href: "#pricing",
    sectionId: "pricing",
  },
  {
    label: "How It Works",
    href: "#process",
    sectionId: "process",
  },
];

/** Footer Legal links */
export const FOOTER_LEGAL_LINKS: NavigationLink[] = [
  { label: "Privacy Policy", href: PATH_PRIVACY },
  { label: "Terms of Service", href: PATH_TERMS },
];

// ============================================================================
// ACTION BUTTON CONFIGURATIONS - Common button/link configurations
// ============================================================================

/**
 * Book Call button configuration
 */
export const BOOK_CALL_CONFIG = {
  href: PATH_BOOK_CALL,
  label: "Book Call",
  openInNewTab: false as const,
} as const;

// ============================================================================
// LEGACY EXPORTS - For backward compatibility
// ============================================================================

export const navigation = {
  logo: {
    text: COMPANY_INFO.name,
    href: PATH_HOME,
  },
  links: MAIN_NAV_LINKS,
  cta: BOOK_CALL_CONFIG,
};
