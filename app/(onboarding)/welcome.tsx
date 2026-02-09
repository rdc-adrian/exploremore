import { router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* App name with emoji */}
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        ✈️ ExploreMore
      </Text>

      {/* Tagline */}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Plan trips effortlessly
      </Text>

      {/* Benefits list */}
      <Text>{"\u2022"} Smart itineraries</Text>
      <Text>{"\u2022"} Day-by-day planning</Text>
      <Text>{"\u2022"} Zero stress</Text>

      {/* Primary CTA */}
      <View style={{ marginTop: 30, width: "100%" }}>
        <Button
          title="Get Started →"
          onPress={() => router.push("/(onboarding)/value")}
        />
      </View>

      {/* Secondary action */}
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={{ color: "blue" }}>Already have trips? Skip</Text>
      </TouchableOpacity>
    </View>
  );
}
