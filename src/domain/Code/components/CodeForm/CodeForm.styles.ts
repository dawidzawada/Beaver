import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { createStyleSheet } from "react-native-unistyles";

export const codeFormStylesheet = createStyleSheet(theme => ({
  box: {
    marginVertical: 20,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 8,
  },
  spacer: {
    flex: 1,
  },
}));
