import { createStyleSheet } from "react-native-unistyles";

export const addEditScreenStylesheet = createStyleSheet(theme => ({
  screenWrapper: {
    minHeight: "100%",
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    flex: 1,
    padding: 10,
    paddingBottom: 50,
  },
}));
