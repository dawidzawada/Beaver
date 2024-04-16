import { ChooseTypeScreen } from "@screen/ChooseTypeScreen/ChooseTypeScreen";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function ChooseType() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{
          title: t("navigation.choose-type"),
        }}
      />
      <ChooseTypeScreen />
    </>
  );
}
