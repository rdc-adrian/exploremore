import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function TripOverview() {
  const { tripId } = useLocalSearchParams();
  const router = useRouter();

  // TODO: Fetch real trip data using tripId (API, DB, AsyncStorage, etc.)
  const mockTrip = {
    name: "Summer in Italy",
    destination: "Rome, Italy",
    dateRange: "Jun 10 – Jun 20, 2026",
    status: "Planning",
    progress: 60,
    checklist: [
      { label: "Dates selected", done: true },
      { label: "Destination confirmed", done: true },
      { label: "Itinerary started", done: false },
      { label: "Bookings added", done: false },
    ],
    upcoming: [
      { day: "Day 1 – Arrival", items: ["Airport → Hotel", "Evening walk"] },
      { day: "Day 2 – City Highlights", items: ["Museum", "Food market"] },
    ],
    savedPlaces: ["Colosseum", "Trevi Fountain", "Vatican Museums"],
    notes: ["Check visa requirements", "Book train tickets"],
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* Trip Summary */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Trip Summary
        </Text>
        <Text>{mockTrip.name}</Text>
        <Text>Destination: {mockTrip.destination}</Text>
        <Text>Date Range: {mockTrip.dateRange}</Text>
        <Text>Status: {mockTrip.status}</Text>
      </View>

      {/* Trip Progress */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Trip Progress
        </Text>
        <Text>[■■■■■■□□□□] {mockTrip.progress}% Planned</Text>
        {mockTrip.checklist.map((item, idx) => (
          <Text key={idx}>
            {item.done ? "✔" : "○"} {item.label}
          </Text>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Quick Actions
        </Text>
        {/* Planning actions */}
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/trip/[tripId]/itinerary",
              params: { tripId: tripId as string },
            })
          }
        >
          <Text style={{ color: "blue" }}>+ Add Day Plan</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/trip/[tripId]/plan",
              params: { tripId: tripId as string },
            })
          }
        >
          <Text style={{ color: "blue" }}>+ Add Place</Text>
        </Pressable>

        {/* Capture / reminder actions */}
        <Pressable onPress={() => console.log("TODO: Add Note screen")}>
          <Text style={{ color: "blue" }}>+ Add Note</Text>
        </Pressable>
      </View>

      {/* Upcoming Plan Snapshot */}
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/trip/[tripId]/itinerary",
            params: { tripId: tripId as string },
          })
        }
        style={{ marginBottom: 20 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Upcoming Plan Snapshot
        </Text>
        {mockTrip.upcoming.slice(0, 2).map((day, idx) => (
          <View key={idx} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{day.day}</Text>
            {day.items.map((item, i) => (
              <Text key={i}>• {item}</Text>
            ))}
          </View>
        ))}
      </Pressable>

      {/* Saved Places Preview */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Saved Places Preview
        </Text>
        {mockTrip.savedPlaces.slice(0, 3).map((place, idx) => (
          <Text key={idx}>• {place}</Text>
        ))}
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/trip/[tripId]/plan",
              params: { tripId: tripId as string },
            })
          }
        >
          <Text style={{ color: "blue", marginTop: 5 }}>View all →</Text>
        </Pressable>
      </View>

      {/* Trip Notes / Reminders */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Trip Notes / Reminders
        </Text>
        {mockTrip.notes.map((note, idx) => (
          <Text key={idx}>• {note}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
