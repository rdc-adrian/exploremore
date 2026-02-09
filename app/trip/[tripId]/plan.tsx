import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TripPlan() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Plan view for trip {tripId}</Text>
    </View>
  );
}
