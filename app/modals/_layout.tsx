import { Stack } from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <Stack.Screen name="date-picker" />
      <Stack.Screen name="location-search" />
      <Stack.Screen name="add-activity" />
      <Stack.Screen name="confirm-exit" />
    </Stack>
  );
}
