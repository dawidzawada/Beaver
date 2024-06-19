import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const chooseTypeStyleSheet = createStyleSheet(theme => ({
  screenWrapper: {
    minHeight: "100%",
    backgroundColor: theme.colors.background,
    position: "relative",
    flex: 1,
    paddingBottom: 20,
  },
  codeItem: {
    padding: 20,
  },
  codeItemText: {
    fontSize: FontSize.S,
    fontFamily: Font.Regular,
    color: theme.colors.neutralContrast,
  },
}));
