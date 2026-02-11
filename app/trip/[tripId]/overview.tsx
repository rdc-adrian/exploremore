import { useTrip } from "@/store/TripContext";
import { colors, spacing, typography } from "@/theme";
import { Activity, Day, Trip } from "@/types/trip";
import { calculateTotalDays } from "@/utils/date";
import { formatStatus } from "@/utils/format";

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TripOverview() {
  const { trip } = useTrip();

  if (!trip.segments || trip.segments.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={typography.helper}>No trip segments available</Text>
      </View>
    );
  }

  const destinations = trip.segments
    .map((s) => s.destination.city || s.destination.country)
    .join(" → ");

  const totalDays = calculateTotalDays(trip);
  const upcomingDays: Day[] = trip.segments
    .flatMap((seg) => seg.days)
    .slice(0, 2);
  const savedPlaces: Activity[] = trip.segments
    .flatMap((seg) => seg.days.flatMap((d) => d.activities))
    .filter((act) => act.type === "place")
    .slice(0, 3);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <TripSummaryCard
        title={trip.title}
        destinations={destinations}
        dateRange={`${trip.startDate} – ${trip.endDate}`}
        totalDays={totalDays}
        status={trip.status}
      />

      <TripProgressCard />
      <QuickActionsCard />
      <UpcomingPlanPreview days={upcomingDays} />
      <SavedPlacesPreview places={savedPlaces} />
    </ScrollView>
  );
}

/* -------------------- Local Components -------------------- */

interface TripSummaryCardProps {
  title: string;
  destinations: string;
  dateRange: string;
  totalDays: number;
  status: Trip["status"];
}

function TripSummaryCard({
  title,
  destinations,
  dateRange,
  totalDays,
  status,
}: TripSummaryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={typography.screenTitle}>Trip Summary</Text>
      <Text style={typography.helper}>Destinations: {destinations}</Text>
      <Text style={typography.helper}>Dates: {dateRange}</Text>
      <Text style={typography.helper}>Total Days: {totalDays}</Text>
      <Text style={typography.helper}>Status: {formatStatus(status)}</Text>
    </View>
  );
}

function TripProgressCard() {
  return (
    <View style={styles.card}>
      <Text style={typography.sectionTitle}>Trip Progress</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={typography.helper}>60% Planned</Text>
      <View style={{ marginTop: spacing.sm }}>
        <Text style={typography.body}>✔ Dates selected</Text>
        <Text style={typography.body}>✔ Destinations confirmed</Text>
        <Text style={typography.body}>◻ Itinerary partially planned</Text>
        <Text style={typography.body}>◻ Bookings added</Text>
      </View>
    </View>
  );
}

function QuickActionsCard() {
  return (
    <View style={styles.card}>
      <Text style={typography.sectionTitle}>Quick Actions</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+ Add Day Plan</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+ Add Place</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+ Add Note</Text>
      </Pressable>
    </View>
  );
}

interface UpcomingPlanPreviewProps {
  days: Day[];
}

function UpcomingPlanPreview({ days }: UpcomingPlanPreviewProps) {
  return (
    <View style={styles.card}>
      <Text style={typography.sectionTitle}>Upcoming Plan</Text>
      {days.map((day) => (
        <View key={day.id} style={{ marginTop: spacing.sm }}>
          <Text style={typography.body}>
            Day {day.dayNumber} — {day.date}
          </Text>
          {day.activities.slice(0, 2).map((act) => (
            <Text key={act.id} style={typography.helper}>
              • {act.title}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

interface SavedPlacesPreviewProps {
  places: Activity[];
}

function SavedPlacesPreview({ places }: SavedPlacesPreviewProps) {
  return (
    <View style={styles.card}>
      <Text style={typography.sectionTitle}>Saved Places</Text>
      {places.map((place) => (
        <Text key={place.id} style={typography.helper}>
          • {place.location?.name || place.title}
        </Text>
      ))}
      <Text
        style={[
          typography.helper,
          { color: colors.primary, marginTop: spacing.sm },
        ]}
      >
        View all →
      </Text>
    </View>
  );
}

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  scrollContent: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.divider,
    borderRadius: 4,
    marginVertical: spacing.sm,
  },
  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  buttonText: {
    ...typography.body,
    color: colors.onPrimary,
    textAlign: "center",
  },
});
