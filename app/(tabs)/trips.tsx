import { colors, spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// My Trips screen (wireframe)
// Shows Current/Upcoming and Past trips, with search and quick actions.
export default function MyTripsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Mock trip data for wireframe purposes
  const [trips] = useState<Array<any>>([
    {
      id: "123",
      destination: "Rome & Amalfi",
      emoji: "🇮🇹",
      start: "Jun 10",
      end: "Jun 21",
      status: "ongoing", // ongoing | upcoming | past
      progress: 45,
      pending: 2,
    },
    {
      id: "124",
      destination: "Weekend in Portland",
      emoji: "🌲",
      start: "Mar 12",
      end: "Mar 14",
      status: "upcoming",
      progress: 10,
      pending: 1,
    },
    {
      id: "125",
      destination: "Yosemite Family Trip",
      emoji: "🗻",
      start: "Apr 2",
      end: "Apr 6",
      status: "upcoming",
      progress: 20,
      pending: 0,
    },
    {
      id: "100",
      destination: "Lisbon Getaway",
      emoji: "🇵🇹",
      start: "Jan 6",
      end: "Jan 10",
      status: "past",
      progress: 100,
      pending: 0,
    },
  ]);

  const [query, setQuery] = useState("");
  const [showAllPast, setShowAllPast] = useState(false);

  // Filter trips by search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trips;
    return trips.filter((t) => t.destination.toLowerCase().includes(q));
  }, [trips, query]);

  const currentUpcoming = filtered.filter((t) => t.status !== "past");
  const past = filtered.filter((t) => t.status === "past");

  return (
    <ScrollView
      style={[styles.root, { paddingTop: insets.top + spacing.md }]}
      contentContainerStyle={styles.content}
    >
      {/* Title + Search */}
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>
        <TextInput
          placeholder="Search trips by destination"
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={setQuery}
          style={styles.search}
          accessible
          accessibilityLabel="Search trips"
        />
      </View>

      {/* Empty state */}
      {trips.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No trips yet</Text>
          <Text style={styles.emptyHint}>Start planning your first trip.</Text>
          <TouchableOpacity
            style={styles.primaryCta}
            onPress={() => router.push("/trip/create")}
          >
            <Text style={styles.primaryCtaText}>Create New Trip</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Current / Upcoming Trips */}
      {currentUpcoming.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current & Upcoming</Text>
          {currentUpcoming.map((t) => (
            <TripCard
              key={t.id}
              trip={t}
              onPrimary={() =>
                router.push(
                  t.status === "ongoing"
                    ? `/trip/${t.id}/plan`
                    : `/trip/${t.id}/overview`,
                )
              }
            />
          ))}
        </View>
      )}

      {/* Past Trips */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Past Trips</Text>
          {past.length > 3 && (
            <TouchableOpacity onPress={() => setShowAllPast((s) => !s)}>
              <Text style={styles.showMore}>
                {showAllPast ? "Show less" : "Show more"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {past.length === 0 && (
          <Text style={styles.emptyHint}>No past trips</Text>
        )}

        {(showAllPast ? past : past.slice(0, 3)).map((t) => (
          <TripCard
            key={t.id}
            trip={t}
            onPrimary={() => router.push(`/trip/${t.id}/overview`)}
            past
          />
        ))}
      </View>
    </ScrollView>
  );
}

// Simple TripCard component used in this file (wireframe)
function TripCard({
  trip,
  onPrimary,
  past = false,
}: {
  trip: any;
  onPrimary: () => void;
  past?: boolean;
}) {
  const primaryLabel = past
    ? "View Itinerary"
    : trip.status === "ongoing"
      ? "Continue Planning"
      : "View Trip";

  return (
    <View style={[styles.card, past && styles.cardPast]}>
      <View style={styles.cardLeft}>
        <Text style={styles.emoji}>{trip.emoji ?? "📍"}</Text>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.destination}>{trip.destination}</Text>
        <Text style={styles.dates}>
          {trip.start} — {trip.end}
        </Text>
        <Text style={styles.status}>
          {past
            ? "Completed"
            : trip.status === "ongoing"
              ? "Ongoing"
              : `${trip.progress}% planned • ${trip.pending} pending`}
        </Text>
      </View>

      <View style={styles.cardRight}>
        <TouchableOpacity style={styles.smallButton} onPress={onPrimary}>
          <Text style={styles.smallButtonText}>{primaryLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing.xl },

  header: { marginBottom: spacing.md },
  title: { fontSize: 22, fontWeight: "700", marginBottom: spacing.sm },
  search: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
  },

  section: { marginTop: spacing.lg },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: spacing.sm },
  showMore: { color: colors.primary, fontWeight: "600" },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: 8,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  cardPast: { opacity: 0.85 },
  cardLeft: { width: 48, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 24 },

  cardBody: { flex: 1, paddingRight: spacing.sm },
  destination: { fontWeight: "700", fontSize: 15 },
  dates: { color: colors.textSecondary, marginTop: 4 },
  status: { color: colors.textSecondary, marginTop: 6, fontSize: 12 },

  cardRight: { alignItems: "flex-end" },
  smallButton: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  smallButtonText: { color: colors.primary, fontWeight: "700" },

  emptyState: { alignItems: "center", padding: spacing.lg },
  emptyTitle: { fontSize: 18, fontWeight: "700", marginBottom: spacing.sm },
  emptyHint: { color: colors.textSecondary, marginBottom: spacing.md },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
  },
  primaryCtaText: { color: colors.background, fontWeight: "700" },
});
