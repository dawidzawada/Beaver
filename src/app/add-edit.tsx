import { AddEditScreen } from "@screen/AddEditScreen/AddEditScreen";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function AddEdit() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          title: t("navigation.add-code"),
        }}
      />
      <AddEditScreen />
    </>
  );
}
