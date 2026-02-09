import { Text, View } from "react-native";

// Trip-specific preferences: pace, budget, interests.
export default function TripPreferences() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Choose trip preferences: pace, budget, activities</Text>
    </View>
  );
}
