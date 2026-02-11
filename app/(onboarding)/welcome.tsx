import { colors, components, spacing, typography } from "@/theme";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      {/* Centered avatar logo */}
      <Image
        source={require("@/assets/images/exploremore-avatar.png")}
        style={styles.avatar}
      />

      {/* App name */}
      <Text style={[typography.screenTitle, { marginTop: spacing.md }]}>
        ExploreMore
      </Text>

      {/* Tagline */}
      <Text style={[typography.body, { marginTop: spacing.sm }]}>
        Plan trips effortlessly
      </Text>

      {/* Benefits list */}
      <View style={{ marginTop: spacing.md }}>
        <Text style={typography.body}>• Smart itineraries</Text>
        <Text style={typography.body}>• Day-by-day planning</Text>
        <Text style={typography.body}>• Zero stress</Text>
      </View>

      {/* Primary CTA */}
      <TouchableOpacity
        style={[
          components.primaryButton.container,
          { marginTop: spacing.lg, width: "100%" },
        ]}
        onPress={() => router.push("/(onboarding)/value")}
      >
        <Text style={components.primaryButton.text}>Get Started →</Text>
      </TouchableOpacity>

      {/* Secondary action */}
      <TouchableOpacity
        style={{ marginTop: spacing.md }}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={{ color: colors.primary }}>Already have trips? Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  avatar: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
