import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TripsTab() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Trips Overview</Text>

      <Button
        title="Create New Trip"
        onPress={() => router.push("/trips/new")}
      />

      <Button
        title="Plan Trip 123"
        onPress={() => router.push("/trips/123/plan")}
      />

      <Button
        title="Edit Trip 456"
        onPress={() => router.push("/trips/456/edit")}
      />
    </View>
  );
}
