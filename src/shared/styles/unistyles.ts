import { darkTheme } from "@shared/theme/darkTheme";
import { lightTheme } from "@shared/theme/lightTheme";
import { Theme } from "@shared/theme/theme";
import { UnistylesRegistry } from "react-native-unistyles";

type AppThemes = {
  light: Theme;
  dark: Theme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
});
