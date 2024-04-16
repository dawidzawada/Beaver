import i18n from "@shared/i18n";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@shared/styles/unistyles";
import { useStyles } from "react-native-unistyles";

export default function MainLayout() {
  const { theme } = useStyles();

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
    },
    headerTintColor: theme.colors.neutralContrast,
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <I18nextProvider i18n={i18n}>
        <Stack screenOptions={screenOptions} />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
