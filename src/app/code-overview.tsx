import { CodeOverviewScreen } from "@screen/CodeOverviewScreen/CodeOverviewScreen";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function CodeOverview() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{
          title: t("navigation.code-overview"),
        }}
      />
      <CodeOverviewScreen />
    </>
  );
}
