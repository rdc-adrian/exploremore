import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Value() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Section header */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 30 }}>
        What you can do
      </Text>

      {/* Feature list */}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        🗺️ Create a trip in minutes
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        📅 Auto-generate itineraries
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        🧭 Adjust plans anytime
      </Text>

      {/* Clarification */}
      <Text style={{ marginTop: 20 }}>No bookings. No ads.</Text>
      <Text>Just planning.</Text>

      {/* CTA */}
      <View style={{ marginTop: 40, width: "100%" }}>
        <Button
          title="Continue →"
          onPress={() => router.push("/(onboarding)/permissions")}
        />
      </View>
    </View>
  );
}
