import { Text, View } from "react-native";

// Final onboarding screen confirming setup completion.
export default function OnboardingDone() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>You're all set! Enjoy ExploreMore.</Text>
    </View>
  );
}
