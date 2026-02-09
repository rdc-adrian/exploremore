import { Stack } from "expo-router";

export default function TripLayout() {
  return (
    <Stack>
      <Stack.Screen name="overview" options={{ title: "Overview" }} />
      <Stack.Screen name="plan" options={{ title: "Plan" }} />
      <Stack.Screen name="itinerary" options={{ title: "Itinerary" }} />
      <Stack.Screen name="review" options={{ title: "Review" }} />
      <Stack.Screen name="share" options={{ title: "Share" }} />
    </Stack>
  );
}
