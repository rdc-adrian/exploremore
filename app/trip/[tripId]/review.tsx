import { Pressable, ScrollView, Text, View } from "react-native";

// TODO: Replace with real trip review data (API, DB, AsyncStorage, etc.)
const mockTrip = {
  destination: "Rome, Italy",
  dateRange: "Jun 10 – Jun 20, 2026",
  totalDays: 3,
  totalActivities: 7,
};

const mockItinerarySummary = [
  {
    dayNumber: 1,
    label: "Arrival",
    date: "Jun 10, Tue",
    activities: [
      { time: "09:00 – 11:00", title: "Airport arrival" },
      { time: "12:00 – 13:00", title: "Hotel check-in" },
      { time: "18:00 – 20:00", title: "Evening walk" },
    ],
  },
  {
    dayNumber: 2,
    label: "City Highlights",
    date: "Jun 11, Wed",
    activities: [
      { time: "09:00 – 11:00", title: "Museum" },
      { time: "12:00 – 13:00", title: "Food market" },
      { time: "15:00 – 17:00", title: "Free time" },
    ],
  },
  {
    dayNumber: 3,
    label: "Exploration",
    date: "Jun 12, Thu",
    activities: [],
  },
];

export default function TripReview() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {/* Screen Header */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Review Your Trip
          </Text>
          <Text style={{ marginTop: 4, color: "gray" }}>
            One last look before you share
          </Text>
        </View>

        {/* Trip Snapshot Card */}
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
          <Text>Planned Activities: {mockTrip.totalActivities}</Text>
        </View>

        {/* Daily Itinerary Summary */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Daily Itinerary Summary
          </Text>
          {mockItinerarySummary.map((day) => (
            <View key={day.dayNumber} style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: "bold" }}>
                Day {day.dayNumber} – {day.label}
              </Text>
              <Text style={{ color: "gray" }}>{day.date}</Text>
              {day.activities.length > 0 ? (
                day.activities.map((act, idx) => (
                  <Text key={idx}>
                    {act.time} • {act.title}
                  </Text>
                ))
              ) : (
                <Text>○ No activities planned</Text>
              )}
            </View>
          ))}
        </View>

        {/* Validation / Checklist Section */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Validation Checklist
          </Text>
          <Text>✔ All days have activities</Text>
          <Text>⚠ Some activities missing locations</Text>
          <Text>✔ No overlapping times</Text>
        </View>

        {/* Travel Logistics Summary */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Travel Logistics
          </Text>
          <Text>Accommodation: Hotel placeholder</Text>
          <Text>Transportation: Flight + Train placeholder</Text>
          <Text>Notes: Remember to pack adapters</Text>
        </View>
      </ScrollView>

      {/* Primary Actions */}
      <View
        style={{
          padding: 16,
          borderTopWidth: 1,
          borderColor: "lightgray",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Pressable
          onPress={() => console.log("Share Trip pressed")}
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
            Share Trip
          </Text>
        </Pressable>
        <Pressable onPress={() => console.log("Back to Plan pressed")}>
          <Text style={{ color: "blue", textAlign: "center" }}>
            Back to Plan
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
