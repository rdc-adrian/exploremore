import { Trip } from "@/types/trip";

/**
 * Calculate total number of days across all segments
 * based on segment startDate and endDate ranges.
 * Inclusive of both start and end dates.
 */
export function calculateTotalDays(trip: Trip): number {
  return trip.segments.reduce((sum, seg) => {
    const start = new Date(seg.startDate);
    const end = new Date(seg.endDate);
    const diffMs = end.getTime() - start.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    return sum + diffDays;
  }, 0);
}
