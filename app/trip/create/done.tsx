import { colors, spacing } from "@/constants/theme";
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

// Step 5: Trip Ready Confirmation
// Shows summary of the trip and offers CTA to view overview
export default function TripReadyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const tripSummary = {
    destination: "Paris, France",
    dates: "Mar 15 - Mar 20, 2026",
    nights: 5,
    pace: "Balanced",
    interests: ["Culture", "Food", "Shopping"],
    budget: "Moderate",
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.lg },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.stepIndicator}>5 of 5</Text>
      </View>

      {/* Success Icon/Illustration */}
      <View style={styles.successSection}>
        <View style={styles.successIcon}>
          <Text style={styles.successEmoji}>✓</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Your Trip is Ready!</Text>
      <Text style={styles.subtitle}>
        We've created a personalized itinerary based on your preferences.
      </Text>

      {/* Trip Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryImagePlaceholder} />

        <View style={styles.summaryContent}>
          <Text style={styles.summaryDestination}>
            {tripSummary.destination}
          </Text>
          <Text style={styles.summaryDates}>{tripSummary.dates}</Text>

          <View style={styles.summaryMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Duration</Text>
              <Text style={styles.metaValue}>{tripSummary.nights} nights</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Pace</Text>
              <Text style={styles.metaValue}>{tripSummary.pace}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Budget</Text>
              <Text style={styles.metaValue}>{tripSummary.budget}</Text>
            </View>
          </View>

          <View style={styles.interestsTags}>
            {tripSummary.interests.map((interest, idx) => (
              <View key={idx} style={styles.interestTag}>
                <Text style={styles.interestTagText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* CTAs */}
      <TouchableOpacity
        style={styles.primaryCta}
        onPress={() => router.push("/trip/123/overview")}
      >
        <Text style={styles.primaryCtaText}>View Trip Overview</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryCta}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.secondaryCtaText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing.xl },

  header: {
    marginBottom: spacing.xl,
  },
  stepIndicator: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "600",
  },

  successSection: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  successEmoji: { fontSize: 40, color: colors.background },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: spacing.md,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: spacing.xl,
    lineHeight: 20,
  },

  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: spacing.xl,
  },

  summaryImagePlaceholder: {
    height: 140,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  summaryContent: { padding: spacing.lg },
  summaryDestination: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  summaryDates: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },

  summaryMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  metaItem: { alignItems: "center" },
  metaLabel: { fontSize: 10, color: colors.textSecondary, marginBottom: 2 },
  metaValue: { fontSize: 13, fontWeight: "600" },

  interestsTags: { flexDirection: "row", flexWrap: "wrap", gap: spacing.xs },
  interestTag: {
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  interestTagText: { fontSize: 11, color: colors.primary, fontWeight: "500" },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: spacing.md,
  },
  primaryCtaText: { color: colors.background, fontWeight: "700", fontSize: 16 },

  secondaryCta: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryCtaText: { color: colors.text, fontWeight: "600", fontSize: 16 },
});
