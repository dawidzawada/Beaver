import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const inputStylesheet = createStyleSheet(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 6,
  },
  label: (disabled: boolean) => ({
    paddingLeft: 6,
    opacity: disabled ? 0.4 : 1,
    fontSize: FontSize.XS,
    fontFamily: Font.Bold,
    color: theme.colors.neutralContrast,
  }),
  input: (disabled: boolean) => ({
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.outline,
    color: theme.colors.neutralContrast,
    opacity: disabled ? 0.4 : 1,
    borderRadius: 12,
    fontSize: FontSize.S,
    fontFamily: Font.Regular,
  }),
}));
