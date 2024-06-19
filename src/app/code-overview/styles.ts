import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const codeOverviewScreenStylesheet = createStyleSheet(theme => ({
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
  title: {
    fontSize: FontSize.L,
    fontFamily: Font.Bold,
    paddingVertical: 10,
  },
  label: {
    fontSize: FontSize.M,
    fontFamily: Font.Regular,
    paddingVertical: 4,
  },
  value: {
    fontSize: FontSize.M,
    fontFamily: Font.Bold,
    paddingVertical: 4,
  },
}));
