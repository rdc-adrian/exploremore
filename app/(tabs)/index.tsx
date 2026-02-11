import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Theme imports
import { colors, components, spacing, typography } from "@/theme";

export default function DashboardScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const currentTrip = {
    id: "123",
    title: "Summer in Italy",
    dates: "Jun 10 – Jun 20, 2026",
  };

  const suggested = [
    { id: "paris", title: "Paris", count: 5 },
    { id: "barcelona", title: "Barcelona", count: 4 },
    { id: "tokyo", title: "Tokyo", count: 6 },
  ];

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={{
        paddingTop: insets.top + spacing.md,
        paddingBottom: spacing.lg,
      }}
    >
      {/* Logo + Greeting header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/exploremore-logo.png")}
          style={styles.logo}
        />
        <Text style={[typography.screenTitle, { marginTop: spacing.md }]}>
          Good morning, Alex
        </Text>
        <Text style={typography.helper}>
          Ready to plan your next adventure?
        </Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Where to next?"
          placeholderTextColor={colors.textSecondary}
          style={styles.searchInput}
        />
      </View>

      {/* Quick actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={components.primaryButton.container}
          onPress={() => router.push("/explore/search")}
        >
          <Text style={components.primaryButton.text}>Search Destinations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={components.secondaryButton.container}
          onPress={() => router.push("/explore")}
        >
          <Text style={components.secondaryButton.text}>View Saved Places</Text>
        </TouchableOpacity>
      </View>

      {/* Current trip card */}
      <View style={components.card.container}>
        <Text style={typography.sectionTitle}>{currentTrip.title}</Text>
        <Text style={typography.helper}>{currentTrip.dates}</Text>
        <View style={styles.tripActions}>
          <TouchableOpacity
            style={components.primaryButton.container}
            onPress={() => router.push(`/trip/${currentTrip.id}/overview`)}
          >
            <Text style={components.primaryButton.text}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={components.secondaryButton.container}
            onPress={() => router.push("/trip/create")}
          >
            <Text style={components.secondaryButton.text}>+ Plan New</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Suggested destinations */}
      <View style={components.section.container}>
        <Text style={typography.sectionTitle}>Suggested Destinations</Text>
        <View style={styles.suggestionsRow}>
          {suggested.map((d) => (
            <View key={d.id} style={styles.suggestionCard}>
              <Text style={typography.body}>{d.title}</Text>
              <Text style={typography.helper}>{d.count} suggestions</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={[
            components.primaryButton.container,
            { marginTop: spacing.md },
          ]}
          onPress={() => router.push("/trip/create")}
        >
          <Text style={components.primaryButton.text}>+ Plan New Trip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: spacing.md,
  },

  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  logo: {
    width: "75%", // logo takes up 75% of header width
    height: 60,
    resizeMode: "contain",
  },

  searchBar: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.lg,
  },
  searchInput: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  tripActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.md,
  },

  suggestionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  suggestionCard: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: spacing.md,
    marginHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: colors.divider,
    alignItems: "center",
  },
});
