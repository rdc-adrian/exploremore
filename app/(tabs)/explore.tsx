import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Explore() {
  // Mock data
  const featured = {
    id: "f1",
    name: "Sample Destination",
    period: "Best in Spring",
  };
  const themes = ["Beach", "Nature", "Food", "City", "Slow Travel", "Budget"];
  const trending = [
    { id: "t1", name: "Tokyo", tags: ["Food", "Culture", "City"] },
    { id: "t2", name: "Bali", tags: ["Beach", "Nature"] },
    { id: "t3", name: "Paris", tags: ["Culture", "Food", "City"] },
  ];
  const [saved, setSaved] = useState<any[]>([]); // mock saved ideas
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* Header */}
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Explore</Text>
      <Text style={{ marginBottom: 10 }}>Where do you want to go?</Text>
      <TextInput
        placeholder="Search destinations or themes"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 8,
          marginBottom: 20,
        }}
      />

      {/* Featured Section */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Featured
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 15,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {featured.name}
        </Text>
        <Text style={{ marginBottom: 10 }}>{featured.period}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable onPress={() => setSaved([...saved, featured])}>
            <Text style={{ color: "blue" }}>Save</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/trip/create")}>
            <Text style={{ color: "blue" }}>Plan Trip</Text>
          </Pressable>
        </View>
      </View>

      {/* Browse by Theme */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Browse by Theme
      </Text>
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}
      >
        {themes.map((theme) => (
          <Pressable
            key={theme}
            onPress={() => setSelectedTheme(theme)}
            style={{
              borderWidth: 1,
              borderColor: selectedTheme === theme ? "blue" : "gray",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              margin: 5,
            }}
          >
            <Text style={{ color: selectedTheme === theme ? "blue" : "black" }}>
              {theme}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Trending Destinations */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Trending
      </Text>
      {trending
        .filter((d) => !selectedTheme || d.tags.includes(selectedTheme))
        .map((dest) => (
          <View
            key={dest.id}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 15,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {dest.name}
            </Text>
            <Text style={{ marginBottom: 10 }}>{dest.tags.join(", ")}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/explore/[placeId]",
                    params: { placeId: dest.id },
                  })
                }
              >
                <Text style={{ color: "blue" }}>View</Text>
              </Pressable>
              <Pressable onPress={() => setSaved([...saved, dest])}>
                <Text style={{ color: "blue" }}>Save</Text>
              </Pressable>
            </View>
          </View>
        ))}

      {/* Saved Ideas */}
      {saved.length > 0 ? (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Saved Ideas
          </Text>
          {saved.map((dest) => (
            <View
              key={dest.id}
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 15,
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {dest.name}
              </Text>
              <Text style={{ marginBottom: 10 }}>Saved for later</Text>
              <Pressable onPress={() => router.push("/trip/create")}>
                <Text style={{ color: "blue" }}>Plan Trip</Text>
              </Pressable>
            </View>
          ))}
        </>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>No saved ideas yet</Text>
          <Text>Save destinations to plan them later</Text>
        </View>
      )}
    </ScrollView>
  );
}
