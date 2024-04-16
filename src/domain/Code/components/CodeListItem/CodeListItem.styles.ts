import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { createStyleSheet } from "react-native-unistyles";

export const codeListItemStylesheet = createStyleSheet(theme => ({
  wrapper: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  box: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgroundHighlight,
    borderRadius: BorderRadius,
  },
  title: {
    textAlign: "center",
    color: theme.colors.neutralContrast,
  },
}));
