import { colors, spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Step 3: Select Dates
// User picks start and end dates, views nights count, and toggles flexible dates option
export default function SelectDates() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [startDate, setStartDate] = useState("Mar 15, 2026");
  const [endDate, setEndDate] = useState("Mar 20, 2026");
  const [isFlexible, setIsFlexible] = useState(false);
  const nights = 5;

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
        <Text style={styles.stepIndicator}>3 of 5</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>When are you traveling?</Text>

      {/* Calendar Placeholder */}
      <View style={styles.calendarPlaceholder}>
        <Text style={styles.placeholderText}>
          [Calendar Widget Placeholder]
        </Text>
      </View>

      {/* Date Range Summary */}
      <View style={styles.dateRangeCard}>
        <View style={styles.dateItem}>
          <Text style={styles.dateLabel}>Check-in</Text>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{startDate}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dateItem}>
          <Text style={styles.dateLabel}>Check-out</Text>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{endDate}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nightsSummary}>
          <Text style={styles.nightsLabel}>Duration</Text>
          <Text style={styles.nightsCount}>{nights} nights</Text>
        </View>
      </View>

      {/* Flexible Dates Toggle */}
      <View style={styles.toggleCard}>
        <View style={styles.toggleContent}>
          <Text style={styles.toggleLabel}>Flexible dates?</Text>
          <Text style={styles.toggleDescription}>
            Add ±1 day flexibility to find better deals
          </Text>
        </View>
        <Switch
          value={isFlexible}
          onValueChange={setIsFlexible}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={colors.background}
        />
      </View>

      {/* Continue CTA */}
      <TouchableOpacity
        style={styles.primaryCta}
        onPress={() => router.push("/trip/preferences")}
      >
        <Text style={styles.primaryCtaText}>Continue</Text>
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

  calendarPlaceholder: {
    height: 280,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  placeholderText: { color: colors.textSecondary },

  dateRangeCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  dateItem: { marginBottom: spacing.md },
  dateLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background,
  },
  dateButtonText: { fontWeight: "600" },

  nightsSummary: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  nightsLabel: { fontSize: 12, color: colors.textSecondary },
  nightsCount: { fontSize: 18, fontWeight: "700", marginTop: spacing.xs },

  toggleCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  toggleContent: { flex: 1 },
  toggleLabel: { fontWeight: "600", marginBottom: spacing.xs },
  toggleDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 16,
  },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.lg,
  },
  primaryCtaText: { color: colors.background, fontWeight: "700", fontSize: 16 },
});
