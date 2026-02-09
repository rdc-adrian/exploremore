import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TripShare() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Share trip {tripId} with friends or export itinerary</Text>
    </View>
  );
}
