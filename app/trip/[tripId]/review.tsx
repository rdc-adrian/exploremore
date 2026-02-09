import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TripReview() {
  const { tripId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Review trip {tripId} before sharing or publishing</Text>
    </View>
  );
}
