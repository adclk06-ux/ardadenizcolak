/**
 * Shared metadata types — enums, constants, and utility types.
 * Single source of truth for values used across content types.
 */

/** Six lifecycle states. Every piece of content exists in exactly one. */
export type LifecycleState =
  | "project"
  | "published"
  | "updated"
  | "archived"
  | "referenced"
  | "deprecated";

/** Seven mutually exclusive intellectual domains for notes. */
export type NoteCategory =
  | "Engineering"
  | "Architecture"
  | "Performance"
  | "AI"
  | "Systems"
  | "Design"
  | "Observations";

/** Navigation item — six destinations, one source of truth. */
export interface NavItem {
  label: string;
  href: string;
  destination: string;
}

/** Inquiry type — what contact is welcome. */
export type InquiryType = "Collaboration" | "Consulting" | "Speaking" | "Hiring";
