import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Done() {
  const completeOnboarding = () => {
    // Placeholder for persistent storage (AsyncStorage)
    console.log("Onboarding completed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        You're ready to explore!
      </Text>
      <Button
        title="Create New Trip"
        onPress={() => {
          completeOnboarding();
          router.replace("/trip/create");
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Dashboard"
          onPress={() => {
            completeOnboarding();
            router.replace("/(tabs)");
          }}
        />
      </View>
    </View>
  );
}
