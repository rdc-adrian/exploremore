import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

// TODO: Replace with real itinerary data fetching (API, DB, AsyncStorage, etc.)
const mockItinerary = [
  {
    dayNumber: 1,
    label: "Arrival",
    date: "Jun 10, Tue",
    timeline: {
      morning: ["Airport arrival"],
      afternoon: ["Hotel check-in"],
      evening: ["Evening walk"],
    },
  },
  {
    dayNumber: 2,
    label: "City Highlights",
    date: "Jun 11, Wed",
    timeline: {
      morning: ["Museum"],
      afternoon: ["Food market"],
      evening: ["Free time"],
    },
  },
  {
    dayNumber: 3,
    label: "Day 3",
    date: "Jun 12, Thu",
    timeline: {
      morning: [],
      afternoon: [],
      evening: [],
    },
  },
  {
    dayNumber: 4,
    label: "Day 4",
    date: "Jun 13, Fri",
    timeline: {
      morning: [],
      afternoon: [],
      evening: [],
    },
  },
];

export default function TripItinerary() {
  const { tripId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Sticky Day Selector */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderBottomWidth: 1,
          borderColor: "gray",
          backgroundColor: "#f9f9f9",
        }}
      >
        {mockItinerary.map((day) => (
          <Pressable
            key={day.dayNumber}
            onPress={() => {
              // TODO: Scroll to the selected day section
              console.log(`Scroll to Day ${day.dayNumber}`);
            }}
            style={{ marginRight: 12 }}
          >
            <Text style={{ color: "blue" }}>Day {day.dayNumber}</Text>
          </Pressable>
        ))}
      </View>

      {/* Scrollable Day Cards */}
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {mockItinerary.map((day) => (
          <View
            key={day.dayNumber}
            style={{
              marginBottom: 24,
              padding: 12,
              borderWidth: 1,
              borderColor: "lightgray",
              borderRadius: 6,
              backgroundColor: "#fff",
            }}
          >
            {/* Day Header */}
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Day {day.dayNumber} – {day.label}
            </Text>
            <Text style={{ marginBottom: 8 }}>{day.date}</Text>

            {/* Timeline */}
            <Text style={{ fontWeight: "bold", marginTop: 8 }}>Timeline</Text>

            <Text style={{ marginTop: 4 }}>• Morning</Text>
            {day.timeline.morning.length > 0 ? (
              day.timeline.morning.map((activity, idx) => (
                <Text key={idx}> ○ {activity}</Text>
              ))
            ) : (
              <Text> ○ (No activities yet)</Text>
            )}

            <Text style={{ marginTop: 4 }}>• Afternoon</Text>
            {day.timeline.afternoon.length > 0 ? (
              day.timeline.afternoon.map((activity, idx) => (
                <Text key={idx}> ○ {activity}</Text>
              ))
            ) : (
              <Text> ○ (No activities yet)</Text>
            )}

            <Text style={{ marginTop: 4 }}>• Evening</Text>
            {day.timeline.evening.length > 0 ? (
              day.timeline.evening.map((activity, idx) => (
                <Text key={idx}> ○ {activity}</Text>
              ))
            ) : (
              <Text> ○ (No activities yet)</Text>
            )}

            {/* Add Activity CTA */}
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/trip/[tripId]/plan",
                  params: { tripId: tripId as string, day: day.dayNumber },
                })
              }
              style={{ marginTop: 12 }}
            >
              <Text style={{ color: "blue" }}>+ Add Activity</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
