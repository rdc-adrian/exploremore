import { colors, spacing, typography } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Explore() {
  const insets = useSafeAreaInsets();

  // Mock data
  const featured = {
    id: "f1",
    name: "Sample Destination",
    period: "Best in Spring",
  };
  const themes = ["Beach", "Nature", "Food", "City", "Slow Travel", "Budget"];
  const trending = [
    { id: "t1", name: "Tokyo", tags: ["Food", "Culture", "City"] },
    { id: "t2", name: "Bali", tags: ["Beach", "Nature"] },
    { id: "t3", name: "Paris", tags: ["Culture", "Food", "City"] },
  ];
  const [saved, setSaved] = useState<any[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <ScrollView
      style={[
        styles.root,
        {
          paddingTop: insets.top + spacing.md,
          paddingBottom: insets.bottom + spacing.md,
        },
      ]}
    >
      {/* Header */}
      <Text style={typography.screenTitle}>Explore</Text>
      <Text style={typography.helper}>Where do you want to go?</Text>
      <TextInput
        placeholder="Search destinations or themes"
        placeholderTextColor={colors.textSecondary}
        style={styles.searchInput}
      />

      {/* Featured Section */}
      <Text style={typography.sectionTitle}>Featured</Text>
      <View style={styles.card}>
        <Text style={typography.body}>{featured.name}</Text>
        <Text style={typography.helper}>{featured.period}</Text>
        <View style={styles.row}>
          <Pressable onPress={() => setSaved([...saved, featured])}>
            <Text style={{ color: colors.primary }}>Save</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/trip/create")}>
            <Text style={{ color: colors.primary }}>Plan Trip</Text>
          </Pressable>
        </View>
      </View>

      {/* Browse by Theme */}
      <Text style={typography.sectionTitle}>Browse by Theme</Text>
      <View style={styles.themeRow}>
        {themes.map((theme) => (
          <Pressable
            key={theme}
            onPress={() => setSelectedTheme(theme)}
            style={[
              styles.themeButton,
              {
                borderColor:
                  selectedTheme === theme ? colors.primary : colors.divider,
              },
            ]}
          >
            <Text
              style={{
                color:
                  selectedTheme === theme ? colors.primary : colors.textPrimary,
              }}
            >
              {theme}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Trending Destinations */}
      <Text style={typography.sectionTitle}>Trending</Text>
      {trending
        .filter((d) => !selectedTheme || d.tags.includes(selectedTheme))
        .map((dest) => (
          <View key={dest.id} style={styles.card}>
            <Text style={typography.body}>{dest.name}</Text>
            <Text style={typography.helper}>{dest.tags.join(", ")}</Text>
            <View style={styles.row}>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/explore/[placeId]",
                    params: { placeId: dest.id },
                  })
                }
              >
                <Text style={{ color: colors.primary }}>View</Text>
              </Pressable>
              <Pressable onPress={() => setSaved([...saved, dest])}>
                <Text style={{ color: colors.primary }}>Save</Text>
              </Pressable>
            </View>
          </View>
        ))}

      {/* Saved Ideas */}
      {saved.length > 0 ? (
        <>
          <Text style={typography.sectionTitle}>Saved Ideas</Text>
          {saved.map((dest) => (
            <View key={dest.id} style={styles.card}>
              <Text style={typography.body}>{dest.name}</Text>
              <Text style={typography.helper}>Saved for later</Text>
              <Pressable onPress={() => router.push("/trip/create")}>
                <Text style={{ color: colors.primary }}>Plan Trip</Text>
              </Pressable>
            </View>
          ))}
        </>
      ) : (
        <View style={{ marginTop: spacing.md }}>
          <Text style={typography.sectionTitle}>No saved ideas yet</Text>
          <Text style={typography.helper}>
            Save destinations to plan them later
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: spacing.md,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 8,
    padding: spacing.sm,
    marginBottom: spacing.lg,
    color: colors.textPrimary,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.lg,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  themeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: spacing.lg,
  },
  themeButton: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    margin: spacing.xs,
  },
});
