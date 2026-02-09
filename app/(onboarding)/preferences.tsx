import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Preferences() {
  const [pace, setPace] = useState<string | null>("balanced");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (tag: string) => {
    setInterests((prev) =>
      prev.includes(tag) ? prev.filter((i) => i !== tag) : [...prev, tag],
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Section header */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 30 }}>
        Your travel style
      </Text>

      {/* Pace selection */}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Pace</Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text
          onPress={() => setPace("relaxed")}
          style={{ marginHorizontal: 10 }}
        >
          {pace === "relaxed" ? "(●)" : "( )"} Relaxed
        </Text>
        <Text
          onPress={() => setPace("balanced")}
          style={{ marginHorizontal: 10 }}
        >
          {pace === "balanced" ? "(●)" : "( )"} Balanced
        </Text>
        <Text onPress={() => setPace("fast")} style={{ marginHorizontal: 10 }}>
          {pace === "fast" ? "(●)" : "( )"} Fast
        </Text>
      </View>

      {/* Interests */}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Interests</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Food", "Culture", "Nature", "Shopping", "Nightlife"].map((tag) => (
          <TouchableOpacity
            key={tag}
            onPress={() => toggleInterest(tag)}
            style={{
              borderWidth: 1,
              borderColor: interests.includes(tag) ? "blue" : "gray",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              margin: 5,
            }}
          >
            <Text style={{ color: interests.includes(tag) ? "blue" : "black" }}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Note */}
      <Text style={{ marginTop: 20 }}>You can change this anytime</Text>

      {/* Actions */}
      <View style={{ marginTop: 30, width: "100%" }}>
        <Button
          title="Continue →"
          onPress={() => router.push("/(onboarding)/done")}
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.push("/(onboarding)/done")}
      >
        <Text style={{ color: "blue" }}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}
