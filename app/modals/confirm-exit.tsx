import { Text, View } from "react-native";

// Modal to warn about unsaved changes and confirm exit.
export default function ConfirmExitModal() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Confirm before exiting without saving</Text>
    </View>
  );
}
