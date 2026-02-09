import { Text, View } from "react-native";

// Welcome screen shown to new users when they first open the app.
export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to ExploreMore — get started planning your trip!</Text>
    </View>
  );
}
