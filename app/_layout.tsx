import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Onboarding flow */}
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />

      {/* Main tab bar */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Modals group */}
      <Stack.Screen name="modals" options={{ presentation: "modal" }} />
    </Stack>
  );
}
