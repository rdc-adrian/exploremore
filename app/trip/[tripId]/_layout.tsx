import { Ionicons } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

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

  // TODO: Fetch trip metadata using tripId
  const trip = mockTripData;

  return (
    <View style={{ flex: 1 }}>
      {/* Persistent Trip Header */}
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderColor: "gray",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Back button always returns to My Trips list */}
        <Pressable onPress={() => router.replace("/trips")}>
          <Text style={{ color: "blue" }}>← Back</Text>
        </Pressable>

        {/* Trip identity */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 8 }}>
          {trip?.name || "Trip"}
        </Text>
        <Text style={{ marginTop: 4 }}>{trip?.dateRange || "Date range"}</Text>
      </View>

      {/* Trip Sub-Navigation (Top Tabs scoped to this trip) */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: { borderBottomWidth: 1, borderColor: "gray" },
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
