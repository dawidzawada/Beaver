import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { createStyleSheet } from "react-native-unistyles";

export const codeDrawerStylesheet = createStyleSheet(theme => ({
  codeDrawer: {
    minHeight: 150,
    backgroundColor: theme.colors.backgroundHighlight,
    paddingVertical: 8,
    borderRadius: BorderRadius,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
}));
