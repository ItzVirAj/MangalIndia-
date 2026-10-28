/**
 * Helper for unconfirmed content items per docs/DESIGN.md & AGENTS.md.
 * Marks items that must be settled with the client before launch.
 */
export function confirm(field: string, fallback = `[CONFIRM: ${field}]`): string {
  return fallback;
}
