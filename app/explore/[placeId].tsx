import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

// Mock data for now
// TODO: Replace with Google Maps Places Details API + Nearby Search results
const mockDestination = {
  placeId: "mock123",
  name: "Sample Destination",
  description: "A vibrant city with rich culture and amazing food.",
  coordinates: { lat: 1.3521, lng: 103.8198 }, // Example: Singapore
  highlights: ["Historic Old Town", "Riverfront Walk", "Local Markets"],
  popularPlaces: [
    { id: "p1", name: "Central Park", type: "Landmark", rating: "4.7" },
    { id: "p2", name: "Museum of Art", type: "Attraction", rating: "4.5" },
    { id: "p3", name: "Street Food Market", type: "Food", rating: "4.6" },
  ],
  bestTime: "Mar – May, Oct – Nov",
  travelTags: ["Food", "Culture", "City", "Nightlife"],
};

export default function DestinationDetail() {
  const { placeId } = useLocalSearchParams();

  // TODO: Fetch real data using placeId from Google Maps API
  const destination = mockDestination; // fallback to mock

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* Header */}
      <Pressable onPress={() => router.back()} style={{ marginBottom: 10 }}>
        <Text style={{ color: "blue" }}>← Back</Text>
      </Pressable>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {destination?.name || "Destination"}
      </Text>

      {/* Map Section */}
      <View
        style={{
          height: 200,
          borderWidth: 1,
          borderColor: "gray",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* TODO: Replace with real Google Maps component centered on coordinates */}
        <Text>
          Map placeholder (lat: {destination.coordinates.lat}, lng:{" "}
          {destination.coordinates.lng})
        </Text>
      </View>

      {/* About Section */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        About
      </Text>
      <Text style={{ marginBottom: 20 }}>
        {destination?.description || "No description available."}
      </Text>

      {/* Key Highlights */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Key Highlights
      </Text>
      {destination.highlights.map((h, idx) => (
        <Text key={idx}>• {h}</Text>
      ))}
      <View style={{ marginBottom: 20 }} />

      {/* Popular Places */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Popular Places
      </Text>
      {destination.popularPlaces.map((place) => (
        <View
          key={place.id}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{place.name}</Text>
          <Text>{place.type}</Text>
          <Text>Rating: {place.rating}</Text>
        </View>
      ))}

      {/* Best Time to Visit */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Best Time to Visit
      </Text>
      <Text style={{ marginBottom: 20 }}>{destination.bestTime}</Text>

      {/* Travel Vibe */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Travel Vibe
      </Text>
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}
      >
        {destination.travelTags.map((tag) => (
          <View
            key={tag}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              paddingHorizontal: 8,
              paddingVertical: 4,
              margin: 5,
            }}
          >
            <Text>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Actions */}
      <Pressable
        onPress={() => console.log("Save destination")}
        style={{ marginBottom: 15 }}
      >
        <Text style={{ color: "blue" }}>Save Destination</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/trip/create")}
        style={{ marginBottom: 30 }}
      >
        <Text style={{ color: "blue", fontWeight: "bold" }}>Plan a Trip</Text>
      </Pressable>
    </ScrollView>
  );
}
