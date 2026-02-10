import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ThemeBrowse() {
  const { theme } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Browsing theme: {theme}</Text>
    </View>
  );
}
