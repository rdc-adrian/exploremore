/**
 * Capitalize the first letter of each word in a string.
 * Example: "planned" → "Planned"
 *          "in progress" → "In Progress"
 */
export function capitalizeWords(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Format trip status for display.
 * Uses capitalizeWords to ensure consistent casing.
 */
export function formatStatus(status: string): string {
  return capitalizeWords(status);
}

/**
 * Format a date range for display.
 * Example: "2026-06-10" and "2026-06-20" → "Jun 10, 2026 – Jun 20, 2026"
 */
export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return `${start.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} – ${end.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
}
