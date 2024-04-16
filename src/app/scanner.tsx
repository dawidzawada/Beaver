import { ScannerScreen } from "@screen/ScannerScreen/ScannerScreen";
import { Stack } from "expo-router";

export default function Scanner() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScannerScreen />
    </>
  );
}
