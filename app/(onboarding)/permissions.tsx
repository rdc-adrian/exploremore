import { router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Permissions() {
  const requestPermissions = () => {
    // Mock logic for permissions
    console.log("Requesting location and notifications...");
  };

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
        Help us help you
      </Text>

      {/* Location permission */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        📍 Location (optional)
      </Text>
      <Text style={{ marginBottom: 20 }}>Suggest nearby destinations</Text>

      {/* Notifications permission */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        🔔 Notifications (optional)
      </Text>
      <Text style={{ marginBottom: 20 }}>Trip reminders & planning tips</Text>

      {/* Primary CTA */}
      <View style={{ marginTop: 30, width: "100%" }}>
        <Button
          title="Allow & Continue →"
          onPress={() => {
            requestPermissions();
            router.push("/(onboarding)/preferences");
          }}
        />
      </View>

      {/* Secondary action */}
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.push("/(onboarding)/preferences")}
      >
        <Text style={{ color: "blue" }}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}
