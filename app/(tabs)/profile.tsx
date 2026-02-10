import { Pressable, ScrollView, Text, View } from "react-native";

// TODO: Replace with real user data (API, DB, Auth, etc.)
const mockUser = {
  name: "Adrian Explorer",
  email: "adrian@example.com",
  tripsCreated: 5,
  tripsCompleted: 3,
  savedPlaces: 12,
};

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {/* Profile Header */}
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#ddd",
              marginBottom: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Avatar</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {mockUser.name}
          </Text>
          <Text style={{ color: "gray" }}>{mockUser.email}</Text>
          <Pressable onPress={() => console.log("Edit Profile pressed")}>
            <Text style={{ color: "blue", marginTop: 8 }}>Edit Profile</Text>
          </Pressable>
        </View>

        {/* Quick Stats */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 24,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{mockUser.tripsCreated}</Text>
            <Text>Trips Created</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>
              {mockUser.tripsCompleted}
            </Text>
            <Text>Trips Completed</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{mockUser.savedPlaces}</Text>
            <Text>Saved Places</Text>
          </View>
        </View>

        {/* My Trips Shortcut */}
        <Pressable
          onPress={() => console.log("My Trips pressed")}
          style={{
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderColor: "lightgray",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>My Trips</Text>
            <Text style={{ color: "gray" }}>View and manage all trips</Text>
          </View>
          <Text style={{ color: "gray" }}>›</Text>
        </Pressable>

        {/* Preferences Section */}
        <View style={{ marginTop: 24, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
            Preferences
          </Text>
          {[
            {
              icon: "🌍",
              title: "Travel Preferences",
              description: "Placeholder value",
            },
            {
              icon: "🔔",
              title: "Notification Settings",
              description: "Enabled",
            },
            {
              icon: "💱",
              title: "Currency & Language",
              description: "USD / English",
            },
          ].map((item, idx) => (
            <Pressable
              key={idx}
              onPress={() => console.log(`${item.title} pressed`)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <Text style={{ marginRight: 8 }}>{item.icon}</Text>
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ color: "gray" }}>{item.description}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Saved Content */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
            Saved Content
          </Text>
          {[
            { title: "Saved Destinations", count: 4 },
            { title: "Saved Ideas", count: 7 },
          ].map((item, idx) => (
            <Pressable
              key={idx}
              onPress={() => console.log(`${item.title} pressed`)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <Text>{item.title}</Text>
              <Text style={{ color: "gray" }}>{item.count}</Text>
            </Pressable>
          ))}
        </View>

        {/* Support & Info */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
            Support & Info
          </Text>
          {[
            "Help & Support",
            "Privacy Policy",
            "Terms of Service",
            "About ExploreMore",
          ].map((item, idx) => (
            <Pressable
              key={idx}
              onPress={() => console.log(`${item} pressed`)}
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Sign Out */}
      <View
        style={{
          padding: 16,
          borderTopWidth: 1,
          borderColor: "lightgray",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Pressable
          onPress={() => console.log("Sign Out pressed")}
          style={{
            padding: 12,
            borderRadius: 6,
            backgroundColor: "#fee",
          }}
        >
          <Text
            style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
          >
            Sign Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
