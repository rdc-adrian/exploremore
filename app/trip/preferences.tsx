import { colors, spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Step 4: Trip Preferences
// User selects travel pace, interests, and budget level
export default function TripPreferences() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [pace, setPace] = useState<"relaxed" | "balanced" | "fast">("balanced");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "culture",
    "food",
  ]);
  const [budget, setBudget] = useState<"budget" | "moderate" | "luxury">(
    "moderate",
  );

  const interests = [
    { id: "food", label: "Food & Dining" },
    { id: "culture", label: "Culture & History" },
    { id: "nature", label: "Nature" },
    { id: "shopping", label: "Shopping" },
    { id: "nightlife", label: "Nightlife" },
    { id: "adventure", label: "Adventure" },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
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
        <Text style={styles.stepIndicator}>4 of 5</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Your Preferences</Text>

      {/* Travel Pace */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel Pace</Text>
        {(["relaxed", "balanced", "fast"] as const).map((p) => (
          <TouchableOpacity
            key={p}
            style={[styles.choiceCard, pace === p && styles.choiceCardSelected]}
            onPress={() => setPace(p)}
          >
            <View
              style={[
                styles.choiceRadio,
                pace === p && styles.choiceRadioSelected,
              ]}
            />
            <View>
              <Text style={styles.choiceLabel}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Text>
              <Text style={styles.choiceDescription}>
                {p === "relaxed"
                  ? "Plenty of downtime & exploration"
                  : p === "balanced"
                    ? "Mix of activities & relaxation"
                    : "Packed itinerary with many activities"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.tagsGrid}>
          {interests.map((interest) => (
            <TouchableOpacity
              key={interest.id}
              style={[
                styles.tag,
                selectedInterests.includes(interest.id) && styles.tagSelected,
              ]}
              onPress={() => toggleInterest(interest.id)}
            >
              <Text
                style={[
                  styles.tagText,
                  selectedInterests.includes(interest.id) &&
                    styles.tagTextSelected,
                ]}
              >
                {interest.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Budget */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Budget Level</Text>
        {(["budget", "moderate", "luxury"] as const).map((b) => (
          <TouchableOpacity
            key={b}
            style={[
              styles.choiceCard,
              budget === b && styles.choiceCardSelected,
            ]}
            onPress={() => setBudget(b)}
          >
            <View
              style={[
                styles.choiceRadio,
                budget === b && styles.choiceRadioSelected,
              ]}
            />
            <View>
              <Text style={styles.choiceLabel}>
                {b.charAt(0).toUpperCase() + b.slice(1)}
              </Text>
              <Text style={styles.choiceDescription}>
                {b === "budget" ? "$" : b === "moderate" ? "$$" : "$$$"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Generate Trip CTA */}
      <TouchableOpacity
        style={styles.primaryCta}
        onPress={() => router.push("/trip/create/done")}
      >
        <Text style={styles.primaryCtaText}>Generate Trip</Text>
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
    marginBottom: spacing.lg,
  },
  stepIndicator: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  closeButton: { fontSize: 20, color: colors.textSecondary },

  title: { fontSize: 24, fontWeight: "700", marginBottom: spacing.lg },

  section: { marginBottom: spacing.xl },
  sectionTitle: { fontSize: 14, fontWeight: "600", marginBottom: spacing.md },

  choiceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  choiceCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },

  choiceRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: spacing.md,
  },
  choiceRadioSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },

  choiceLabel: { fontWeight: "600", marginBottom: spacing.xs },
  choiceDescription: { fontSize: 12, color: colors.textSecondary },

  tagsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.surface,
  },
  tagSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  tagText: { fontSize: 12, fontWeight: "600", color: colors.text },
  tagTextSelected: { color: colors.background },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.lg,
  },
  primaryCtaText: { color: colors.background, fontWeight: "700", fontSize: 16 },
});
