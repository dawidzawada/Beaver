import { createStyleSheet } from "react-native-unistyles";

export const floatingMenuStyleSheet = createStyleSheet(theme => ({
  button: (mode: "small" | "big") => ({
    display: "flex",
    width: mode === "small" ? 50 : 70,
    height: mode === "small" ? 50 : 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
  }),
  icon: {
    color: theme.colors.primaryContrast,
  },
}));
