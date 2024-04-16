import ListScreen from "@screen/ListScreen/ListScreen";
import { Stack } from "expo-router";
import { t } from "i18next";

export default function List() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: t("navigation.list"),
        }}
      />
      <ListScreen />
    </>
  );
}
