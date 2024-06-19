import i18n from "@shared/i18n";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@shared/styles/unistyles";
import { useStyles } from "react-native-unistyles";
import { t } from "i18next";
import { ComponentProps } from "react";
import { Font } from "@shared/enums/Font.enum";

type ScreenOptions = ComponentProps<typeof Stack>["screenOptions"];

export default function MainLayout() {
  const { theme } = useStyles();

  const screenOptions: ScreenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
    },
    headerTitleStyle: {
      fontFamily: Font.Regular,
    },
    headerBackTitleStyle: {
      fontFamily: Font.Regular,
    },
    headerTintColor: theme.colors.neutralContrast,
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <I18nextProvider i18n={i18n}>
        <Stack screenOptions={screenOptions}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="list/index"
            options={{
              headerShown: false,
              title: t("navigation.list"),
            }}
          />
          <Stack.Screen
            name="beaver/index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="code-overview/index"
            options={{
              title: t("navigation.code-overview"),
            }}
          />
          <Stack.Screen
            name="add-edit/index"
            options={{
              title: t("navigation.code-overview"),
            }}
          />
          <Stack.Screen
            name="choose-type/index"
            options={{
              title: t("navigation.choose-type"),
            }}
          />
          <Stack.Screen
            name="scanner/index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
