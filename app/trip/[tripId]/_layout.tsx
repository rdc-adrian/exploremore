import { colors, spacing, typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// TODO: Replace with real trip data fetching (API, DB, AsyncStorage, etc.)
const mockTripData = {
  name: "Summer in Italy",
  dateRange: "Jun 10 – Jun 20, 2026",
};

// Mapping object for tab icons
const tabIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  overview: "home-outline",
  itinerary: "calendar-outline",
  plan: "map-outline",
  review: "checkmark-circle-outline",
  share: "share-social-outline",
};

export default function TripLayout() {
  const { tripId } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const trip = mockTripData;

  return (
    <View style={styles.root}>
      {/* Persistent Trip Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + spacing.sm,
          },
        ]}
      >
        {/* Back button always returns to My Trips list */}
        <Pressable onPress={() => router.replace("/trips")}>
          <Text style={{ color: colors.primary }}>← Back</Text>
        </Pressable>

        {/* Trip identity */}
        <Text style={[typography.screenTitle, { marginTop: spacing.sm }]}>
          {trip?.name || "Trip"}
        </Text>
        <Text style={typography.helper}>{trip?.dateRange || "Date range"}</Text>
      </View>

      {/* Trip Sub-Navigation (Top Tabs scoped to this trip) */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: {
            borderBottomWidth: 1,
            borderColor: colors.divider,
            paddingBottom: insets.bottom, // respect bottom safe area
            backgroundColor: colors.surface,
          },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={tabIcons[route.name] || "help-circle-outline"}
              size={size}
              color={color}
            />
          ),
        })}
      >
        <Tabs.Screen name="overview" options={{ title: "Overview" }} />
        <Tabs.Screen name="itinerary" options={{ title: "Itinerary" }} />
        <Tabs.Screen name="plan" options={{ title: "Plan" }} />
        <Tabs.Screen name="review" options={{ title: "Review" }} />
        <Tabs.Screen name="share" options={{ title: "Share" }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.backgroundAlt },
  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.divider,
    backgroundColor: colors.surface,
  },
});
