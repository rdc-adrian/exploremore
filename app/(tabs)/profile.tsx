import { colors, spacing, typography } from "@/theme";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const mockUser = {
  name: "Alex Explorer",
  email: "alex@example.com",
  tripsCreated: 5,
  tripsCompleted: 3,
  savedPlaces: 12,
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingTop: insets.top + spacing.md,
          paddingBottom: insets.bottom + spacing.md,
        }}
      >
        {/* Profile Header */}
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/exploremore-avatar.png")}
            style={styles.avatar}
          />
          <Text style={typography.screenTitle}>{mockUser.name}</Text>
          <Text style={typography.helper}>{mockUser.email}</Text>
          <Pressable onPress={() => console.log("Edit Profile pressed")}>
            <Text
              style={[
                typography.helper,
                { color: colors.primary, marginTop: spacing.sm },
              ]}
            >
              Edit Profile
            </Text>
          </Pressable>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={typography.sectionTitle}>{mockUser.tripsCreated}</Text>
            <Text style={typography.helper}>Trips Created</Text>
          </View>
          <View style={styles.stat}>
            <Text style={typography.sectionTitle}>
              {mockUser.tripsCompleted}
            </Text>
            <Text style={typography.helper}>Trips Completed</Text>
          </View>
          <View style={styles.stat}>
            <Text style={typography.sectionTitle}>{mockUser.savedPlaces}</Text>
            <Text style={typography.helper}>Saved Places</Text>
          </View>
        </View>

        {/* My Trips Shortcut */}
        <Pressable
          style={styles.listItem}
          onPress={() => console.log("My Trips pressed")}
        >
          <View>
            <Text style={typography.body}>My Trips</Text>
            <Text style={typography.helper}>View and manage all trips</Text>
          </View>
          <Text style={typography.helper}>›</Text>
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
        <View style={styles.section}>
          <Text style={typography.sectionTitle}>Saved Content</Text>
          {[
            { title: "Saved Destinations", count: 4 },
            { title: "Saved Ideas", count: 7 },
          ].map((item, idx) => (
            <Pressable
              key={idx}
              style={styles.listItem}
              onPress={() => console.log(`${item.title} pressed`)}
            >
              <Text style={typography.body}>{item.title}</Text>
              <Text style={typography.helper}>{item.count}</Text>
            </Pressable>
          ))}
        </View>

        {/* Support & Info */}
        <View style={styles.section}>
          <Text style={typography.sectionTitle}>Support & Info</Text>
          {[
            "Help & Support",
            "Privacy Policy",
            "Terms of Service",
            "About ExploreMore",
          ].map((item, idx) => (
            <Pressable
              key={idx}
              style={styles.listItem}
              onPress={() => console.log(`${item} pressed`)}
            >
              <Text style={typography.body}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {/* Logo Footer */}
        <View style={styles.logoFooter}>
          <Image
            source={require("@/assets/images/exploremore-logo.png")}
            style={styles.logo}
          />
        </View>
      </ScrollView>

      {/* Sign Out */}
      <View style={styles.signOutContainer}>
        <Pressable
          style={styles.signOutButton}
          onPress={() => console.log("Sign Out pressed")}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.backgroundAlt },
  scroll: { flex: 1, paddingHorizontal: spacing.md },
  header: { alignItems: "center", marginBottom: spacing.lg },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.md,
    resizeMode: "contain",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: spacing.lg,
  },
  stat: { alignItems: "center" },
  section: { marginBottom: spacing.lg },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  logoFooter: {
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  logo: {
    width: "60%",
    height: 50,
    resizeMode: "contain",
    marginBottom: spacing.xs,
  },
  signOutContainer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderColor: colors.divider,
    backgroundColor: colors.surface,
  },
  signOutButton: {
    padding: spacing.md,
    borderRadius: 6,
    backgroundColor: "#fee",
  },
  signOutText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});
