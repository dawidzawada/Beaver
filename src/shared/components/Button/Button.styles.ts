import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheetButton = createStyleSheet(theme => ({
  wrapper: (mode: "contained" | "text", disabled: boolean) => {
    const containedBackgroundColor = disabled ? theme.colors.neutral : theme.colors.primary;

    return {
      width: "100%",
      backgroundColor: mode === "contained" ? containedBackgroundColor : "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 14,
      borderRadius: 22,
    };
  },
  text: (mode: "contained" | "text", disabled: boolean) => {
    const containedButtonColor = disabled ? theme.colors.neutralContrast : theme.colors.primaryContrast;

    return {
      color: mode === "contained" ? containedButtonColor : theme.colors.primary,
      opacity: disabled ? 0.4 : 1,
      fontSize: FontSize.S,
      fontFamily: Font.Regular,
    };
  },
}));
