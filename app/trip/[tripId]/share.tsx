import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TripShare() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Share trip {tripId} with friends or export itinerary</Text>
    </View>
  );
}
