import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TripOverview() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Overview for trip {tripId}</Text>
    </View>
  );
}
