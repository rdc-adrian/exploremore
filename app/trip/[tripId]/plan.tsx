import { Pressable, ScrollView, Text, View } from "react-native";

// TODO: Replace with real trip planning data (API, DB, AsyncStorage, etc.)
const mockDays = [1, 2, 3];
const mockActivities = [
  {
    time: "09:00 – 11:00",
    title: "Visit Louvre Museum",
    location: "Paris, France",
  },
  {
    time: "12:00 – 13:00",
    title: "Lunch at Café",
    location: "Placeholder location",
  },
  {
    time: "15:00 – 17:00",
    title: "City Walking Tour",
    location: "Placeholder location",
  },
];

export default function TripPlan() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {/* Screen Header */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Plan Your Trip</Text>
        <Text style={{ marginTop: 4, color: "gray" }}>
          Build and organize your daily activities
        </Text>
      </View>

      {/* Day Selector / Planner Scope */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          borderBottomWidth: 1,
          borderColor: "lightgray",
          paddingBottom: 8,
        }}
      >
        {mockDays.map((day) => (
          <Pressable
            key={day}
            onPress={() => console.log(`Selected Day ${day}`)}
            style={{
              marginRight: 12,
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 16,
              backgroundColor: day === 1 ? "#ddd" : "#fff", // Placeholder highlight
            }}
          >
            <Text>Day {day}</Text>
          </Pressable>
        ))}
      </View>

      {/* Daily Plan Builder */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Daily Plan
        </Text>
        {mockActivities.map((activity, idx) => (
          <View
            key={idx}
            style={{
              marginBottom: 12,
              padding: 12,
              borderWidth: 1,
              borderColor: "lightgray",
              borderRadius: 6,
              backgroundColor: "#fff",
            }}
          >
            {/* Time block */}
            <Text style={{ fontWeight: "bold" }}>{activity.time}</Text>
            {/* Activity title */}
            <Text>{activity.title}</Text>
            {/* Location */}
            <Text style={{ color: "gray" }}>{activity.location}</Text>

            {/* Action placeholders */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 8,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "blue" }}>✏️ Edit</Text>
              <Text style={{ color: "blue" }}>↕️ Reorder</Text>
              <Text style={{ color: "red" }}>🗑 Remove</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Add Activity Section */}
      <View style={{ marginBottom: 24 }}>
        <Pressable
          onPress={() => console.log("Add Activity pressed")}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 6,
            backgroundColor: "#eef",
          }}
        >
          <Text style={{ color: "blue", fontWeight: "bold" }}>
            + Add Activity
          </Text>
        </Pressable>
        <Text style={{ marginTop: 4, color: "gray" }}>
          Add places, meals, or experiences
        </Text>
      </View>

      {/* Planning Helpers (Optional Section) */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Planning Helpers
        </Text>
        <View
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 6,
            marginBottom: 8,
          }}
        >
          <Text>Suggested Places (placeholder)</Text>
        </View>
        <View
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 6,
            marginBottom: 8,
          }}
        >
          <Text>Saved Spots (placeholder)</Text>
        </View>
        <View
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 6,
          }}
        >
          <Text>Nearby Attractions (placeholder)</Text>
        </View>
      </View>
    </ScrollView>
  );
}
