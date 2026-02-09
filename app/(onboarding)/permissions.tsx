import { View, Text } from "react-native";

// Requests location/notifications permissions needed for ExploreMore.
export default function PermissionsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Permissions — request location and notification access</Text>
    </View>
  );
}
