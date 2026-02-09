import { Text, View } from "react-native";

// Start a new trip creation flow.
export default function CreateTrip() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Create a new trip — pick destination, dates, preferences</Text>
    </View>
  );
}
