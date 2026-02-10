import { Pressable, ScrollView, Text, View } from "react-native";

// TODO: Replace with real trip data (API, DB, AsyncStorage, etc.)
const mockTrip = {
  destination: "Rome, Italy",
  dateRange: "Jun 10 – Jun 20, 2026",
  totalDays: 3,
  preview: [
    { day: 1, label: "Arrival" },
    { day: 2, label: "City Highlights" },
    { day: 3, label: "Exploration" },
  ],
};

const shareOptions = [
  {
    title: "Share Link",
    description: "Anyone with the link can view",
    icon: "🔗",
  },
  {
    title: "Export as PDF",
    description: "Printable itinerary",
    icon: "📄",
  },
  {
    title: "Send to Friend",
    description: "Invite collaborators",
    icon: "👥",
  },
  {
    title: "Copy Summary",
    description: "Text-only version",
    icon: "📋",
  },
];

export default function TripShare() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {/* Screen Header */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Share Your Trip
          </Text>
          <Text style={{ marginTop: 4, color: "gray" }}>
            Send it to friends or save it for later
          </Text>
        </View>

        {/* Trip Preview Card */}
        <View
          style={{
            marginBottom: 24,
            padding: 16,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 6,
            backgroundColor: "#fff",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {mockTrip.destination}
          </Text>
          <Text>{mockTrip.dateRange}</Text>
          <Text>Total Days: {mockTrip.totalDays}</Text>
          <Text style={{ marginTop: 8, fontWeight: "bold" }}>
            Itinerary Preview:
          </Text>
          {mockTrip.preview.map((day) => (
            <Text key={day.day}>
              Day {day.day} – {day.label}
            </Text>
          ))}
          {/* Optional placeholder image/map thumbnail */}
          <View
            style={{
              marginTop: 12,
              height: 80,
              backgroundColor: "#eee",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Map/Image Placeholder</Text>
          </View>
        </View>

        {/* Share Options */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Share Options
          </Text>
          {shareOptions.map((option, idx) => (
            <Pressable
              key={idx}
              onPress={() => console.log(`${option.title} pressed`)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                borderWidth: 1,
                borderColor: "lightgray",
                borderRadius: 6,
                marginBottom: 8,
                backgroundColor: "#fff",
              }}
            >
              <Text style={{ marginRight: 8 }}>{option.icon}</Text>
              <View>
                <Text style={{ fontWeight: "bold" }}>{option.title}</Text>
                <Text style={{ color: "gray" }}>{option.description}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Privacy & Access Section */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Privacy & Access
          </Text>
          <Text>You can change access permissions later</Text>
          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              borderRadius: 6,
              backgroundColor: "#fff",
            }}
          >
            <Text>🔒 Public / Private (visual toggle placeholder)</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View
        style={{
          padding: 16,
          borderTopWidth: 1,
          borderColor: "lightgray",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Pressable
          onPress={() => console.log("Done pressed")}
          style={{
            padding: 12,
            borderRadius: 6,
            backgroundColor: "#eef",
            marginBottom: 8,
          }}
        >
          <Text
            style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}
          >
            Done
          </Text>
        </Pressable>
        <Pressable onPress={() => console.log("Back to Review pressed")}>
          <Text style={{ color: "blue", textAlign: "center" }}>
            Back to Review
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
