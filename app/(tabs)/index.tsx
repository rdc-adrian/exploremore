import { colors, commonStyles, spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Low-fidelity, content-first dashboard wireframe for ExploreMore.
export default function DashboardScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Set to null to test "Start a New Trip" state, or provide trip object for active trip
  const currentTrip = {
    id: "123",
    title: "European Summer — Rome & Amalfi",
    dates: "Jun 10 — Jun 21",
    progress: 45,
  };

  const upcoming = [
    { id: "1", title: "Weekend in Portland", dates: "Mar 12–14" },
    { id: "2", title: "Family trip to Yosemite", dates: "Apr 2–6" },
  ];

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.lg },
      ]}
    >
      {/* Greeting header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning, Alex</Text>
        <Text style={styles.sub}>Ready to plan your next adventure?</Text>
      </View>

      {/* Current trip card */}
      <View style={styles.card}>
        {currentTrip ? (
          <>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{currentTrip.title}</Text>
              <Text style={styles.cardMeta}>{currentTrip.dates}</Text>
            </View>

            <View style={styles.progressRow}>
              <View style={commonStyles.progressBarTrack}>
                <View
                  style={[
                    commonStyles.progressBarFill,
                    { width: `${currentTrip.progress}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressBarLabel}>
                {currentTrip.progress}% planned
              </Text>
            </View>

            <TouchableOpacity
              style={styles.primaryCta}
              onPress={() => router.push(`/trip/${currentTrip.id}/plan`)}
            >
              <Text style={styles.primaryCtaText}>Continue Planning</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>No Active Trip</Text>
              <Text style={styles.cardMeta}>
                Start planning your next adventure
              </Text>
            </View>

            <TouchableOpacity
              style={styles.primaryCta}
              onPress={() => router.push("/trip/create")}
            >
              <Text style={styles.primaryCtaText}>Start a New Trip</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Quick actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/trip/create")}
        >
          <Text style={styles.actionText}>+ New Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/trip/create?focus=today")}
        >
          <Text style={styles.actionText}>Plan Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/explore")}
        >
          <Text style={styles.actionText}>Explore</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming trips list */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        {upcoming.map((t) => (
          <View key={t.id} style={styles.tripRow}>
            <View style={styles.tripInfo}>
              <Text style={styles.tripTitle}>{t.title}</Text>
              <Text style={styles.tripDates}>{t.dates}</Text>
            </View>
            <TouchableOpacity
              style={commonStyles.smallButton}
              onPress={() => router.push(`/trip/${t.id}/overview`)}
            >
              <Text style={commonStyles.smallButtonText}>Open</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Inspiration section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inspiration</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.inspoRow}
        >
          <View style={styles.inspoCard}>
            <Text>Beach escapes</Text>
          </View>
          <View style={styles.inspoCard}>
            <Text>City breaks</Text>
          </View>
          <View style={styles.inspoCard}>
            <Text>Road trips</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg },
  header: { marginBottom: spacing.md },
  greeting: { fontSize: 22, fontWeight: "700", marginBottom: spacing.xs },
  sub: { color: colors.textSecondary },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  cardHeader: { marginBottom: spacing.md },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  cardMeta: { color: colors.textSecondary, marginTop: spacing.xs },

  progressRow: { marginBottom: spacing.md },
  progressBarLabel: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: 12,
  },

  primaryCta: {
    marginTop: spacing.xs,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryCtaText: { color: colors.background, fontWeight: "600" },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: spacing.sm,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  actionText: { fontWeight: "600" },

  section: { marginBottom: spacing.lg },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: spacing.sm },

  tripRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  tripInfo: {},
  tripTitle: { fontWeight: "600" },
  tripDates: { color: colors.textSecondary, marginTop: spacing.xs },

  inspoRow: { paddingVertical: spacing.sm },
  inspoCard: {
    width: 140,
    height: 100,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginRight: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.divider,
  },
});
