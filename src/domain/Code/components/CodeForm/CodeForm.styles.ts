import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const codeFormStylesheet = createStyleSheet(theme => ({
  keyboardView: { width: "100%" },
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
  stylingWrapper: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerBox: {
    paddingVertical: 10,
    backgroundColor: theme.colors.backgroundHighlight,
    borderRadius: BorderRadius,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    fontFamily: Font.Bold,
    fontSize: FontSize.XS,
    paddingHorizontal: 5,
  },
  icon: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: Font.Bold,
    color: theme.colors.neutralContrast,
  },
}));
