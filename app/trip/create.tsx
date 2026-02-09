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

// Step 1: Create New Trip Intro
// Introduces the trip creation flow with high-level overview and first CTA
export default function CreateTripScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.lg },
      ]}
    >
      {/* Header with close button area */}
      <View style={styles.header}>
        <Text style={styles.stepIndicator}>1 of 5</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Main content area */}
      <View style={styles.heroSection}>
        <View style={styles.heroPlaceholder}>
          <Text style={styles.placeholderText}>[Illustration Placeholder]</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>Start Planning Your Trip</Text>
        <Text style={styles.subtitle}>
          Tell us where you want to go, when, and what interests you. We'll help
          you build the perfect itinerary in just a few simple steps.
        </Text>

        <View style={styles.stepsOverview}>
          <View style={styles.stepItem}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepLabel}>Destination</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepLabel}>Dates</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepLabel}>Preferences</Text>
          </View>
        </View>
      </View>

      {/* CTA at bottom */}
      <TouchableOpacity
        style={styles.primaryCta}
        onPress={() => router.push("/trip/select-destination")}
      >
        <Text style={styles.primaryCtaText}>Start Planning</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing.xl },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  stepIndicator: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  closeButton: { fontSize: 20, color: colors.textSecondary },

  heroSection: { marginBottom: spacing.xl },
  heroPlaceholder: {
    height: 180,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  placeholderText: { color: colors.textSecondary },

  contentSection: { marginBottom: spacing.xl },
  title: { fontSize: 28, fontWeight: "700", marginBottom: spacing.md },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  stepsOverview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
  },
  stepItem: { alignItems: "center" },
  stepNumber: { fontSize: 18, fontWeight: "700", color: colors.primary },
  stepLabel: { fontSize: 11, color: colors.textSecondary, marginTop: 4 },
  stepDivider: { width: 1, height: 30, backgroundColor: colors.border },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryCtaText: { color: colors.background, fontWeight: "700", fontSize: 16 },
});
