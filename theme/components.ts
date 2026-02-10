import { TextStyle, ViewStyle } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const components = {
  primaryButton: {
    container: {
      backgroundColor: colors.primary,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: 6,
    } as ViewStyle,
    text: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
    } as TextStyle,
  },
  secondaryButton: {
    container: {
      backgroundColor: colors.secondary,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: 6,
    } as ViewStyle,
    text: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
    } as TextStyle,
  },
  card: {
    container: {
      backgroundColor: colors.surface,
      padding: spacing.md,
      borderRadius: 8,
      marginBottom: spacing.md,
    } as ViewStyle,
  },
  section: {
    container: {
      marginBottom: spacing.lg,
    } as ViewStyle,
  },
};
