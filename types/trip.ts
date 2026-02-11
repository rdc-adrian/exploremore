export interface Trip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  status: "draft" | "planning" | "completed";
  preferences?: {
    pace?: "relaxed" | "balanced" | "packed";
    budget?: "low" | "mid" | "high";
    interests?: string[];
  };
  segments: Segment[];
  createdAt: string;
  updatedAt: string;
}

export interface Segment {
  id: string;
  order: number;
  timezone?: string;
  destination: {
    country: string;
    city?: string;
    placeId?: string;
    lat?: number;
    lng?: number;
  };
  startDate: string;
  endDate: string;
  days: Day[];
}

export interface Day {
  id: string;
  date: string;
  dayNumber: number; // Day number within this segment
  activities: Activity[];
}

export type ActivityType = "place" | "meal" | "transport" | "note" | "lodging";

export interface Activity {
  id: string;
  title: string;
  type: ActivityType;
  startTime?: string;
  endTime?: string;
  location?: {
    name: string;
    placeId?: string;
    lat?: number;
    lng?: number;
  };
  source: "manual" | "google";
  notes?: string;
}
