import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TripItinerary() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Itinerary for trip {tripId}</Text>
    </View>
  );
}
