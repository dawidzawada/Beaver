import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const listScreenStyleSheet = createStyleSheet(theme => ({
  container: {
    minHeight: "100%",
    flex: 1,
    position: "relative",
    backgroundColor: theme.colors.background,
  },
  list: {
    paddingBottom: 200,
    paddingHorizontal: 16,
  },
  menu: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 2,
  },
  noCodes: {
    fontSize: FontSize.M,
    fontFamily: Font.Regular,
    color: theme.colors.neutralContrast,
    opacity: 0.4,
    marginVertical: 50,
    width: "100%",
    textAlign: "center",
  },
}));
