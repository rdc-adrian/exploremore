import { StyleSheet } from 'react-native';

// Color Palette
export const colors = {
  primary: '#2b6ef6',
  primaryLight: '#eef4ff',
  background: '#fff',
  surface: '#f6f7fb',
  border: '#e3e6ee',
  text: '#000',
  textSecondary: '#666',
  accent: '#4f8ff7',
  divider: '#f0f0f0',
};

// Typography
export const typography = {
  heading1: { fontSize: 22, fontWeight: '700' as const },
  heading2: { fontSize: 16, fontWeight: '600' as const },
  body: { fontSize: 14, fontWeight: '400' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

// Common Styles
export const commonStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  // Text
  heading: {
    ...typography.heading1,
    marginBottom: spacing.sm,
  },
  subheading: {
    color: colors.textSecondary,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
  },

  // Buttons
  primaryButton: {
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.background,
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    marginHorizontal: spacing.sm,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontWeight: '600',
  },
  smallButton: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 6,
  },
  smallButtonText: {
    color: colors.primary,
    fontWeight: '600',
  },

  // Progress
  progressBarTrack: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: colors.accent,
  },

  // Dividers
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
