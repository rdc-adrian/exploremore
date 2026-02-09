import { colors, spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Step 2: Select Destination
// User searches for or selects a destination from suggestions and saved list
export default function SelectDestination() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null,
  );
  const [searchText, setSearchText] = useState("");

  const popularDestinations = [
    { id: "1", name: "Paris", country: "France" },
    { id: "2", name: "Tokyo", country: "Japan" },
    { id: "3", name: "Barcelona", country: "Spain" },
    { id: "4", name: "New York", country: "USA" },
  ];

  const savedDestinations = [
    { id: "5", name: "Rome", country: "Italy" },
    { id: "6", name: "Amsterdam", country: "Netherlands" },
  ];

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
        <Text style={styles.stepIndicator}>2 of 5</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Where are you going?</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search city or country..."
          placeholderTextColor={colors.textSecondary}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Popular Destinations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        {popularDestinations.map((dest) => (
          <TouchableOpacity
            key={dest.id}
            style={[
              styles.destinationCard,
              selectedDestination === dest.id && styles.destinationCardSelected,
            ]}
            onPress={() => setSelectedDestination(dest.id)}
          >
            <View style={styles.destinationImagePlaceholder} />
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationName}>{dest.name}</Text>
              <Text style={styles.destinationMeta}>{dest.country}</Text>
            </View>
            {selectedDestination === dest.id && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Saved Destinations */}
      {savedDestinations.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Destinations</Text>
          {savedDestinations.map((dest) => (
            <TouchableOpacity
              key={dest.id}
              style={[
                styles.destinationCard,
                selectedDestination === dest.id &&
                  styles.destinationCardSelected,
              ]}
              onPress={() => setSelectedDestination(dest.id)}
            >
              <View style={styles.destinationImagePlaceholder} />
              <View style={styles.destinationInfo}>
                <Text style={styles.destinationName}>{dest.name}</Text>
                <Text style={styles.destinationMeta}>{dest.country}</Text>
              </View>
              {selectedDestination === dest.id && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Continue CTA - disabled until selection */}
      <TouchableOpacity
        style={[
          styles.primaryCta,
          !selectedDestination && styles.primaryCtaDisabled,
        ]}
        disabled={!selectedDestination}
        onPress={() => router.push("/trip/select-dates")}
      >
        <Text
          style={[
            styles.primaryCtaText,
            !selectedDestination && styles.primaryCtaTextDisabled,
          ]}
        >
          Continue
        </Text>
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

  searchContainer: { marginBottom: spacing.lg },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    color: colors.text,
  },

  section: { marginBottom: spacing.lg },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: spacing.md,
    textTransform: "uppercase",
  },

  destinationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  destinationCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },

  destinationImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: colors.border,
    borderRadius: 6,
    marginRight: spacing.md,
  },
  destinationInfo: { flex: 1 },
  destinationName: { fontWeight: "600", fontSize: 14 },
  destinationMeta: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },

  checkmark: { fontSize: 18, color: colors.primary, fontWeight: "700" },

  primaryCta: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.lg,
  },
  primaryCtaDisabled: { backgroundColor: colors.border, opacity: 0.5 },
  primaryCtaText: { color: colors.background, fontWeight: "700", fontSize: 16 },
  primaryCtaTextDisabled: { color: colors.textSecondary },
});
