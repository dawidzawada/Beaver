import { FontSize } from "@shared/enums/FontSize.enum";
import { createStyleSheet } from "react-native-unistyles";

export const chooseTypeStyleSheet = createStyleSheet(theme => ({
  screenWrapper: {
    minHeight: "100%",
    backgroundColor: theme.colors.background,
    position: "relative",
    flex: 1,
    paddingBottom: 20,
  },
  sectionTitle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: theme.colors.neutralContrast,
    backgroundColor: theme.colors.background,
    fontSize: FontSize.M,
  },
  codeItem: {
    padding: 20,
  },
  codeItemText: {
    fontSize: FontSize.S,
    color: theme.colors.neutralContrast,
  },
}));
