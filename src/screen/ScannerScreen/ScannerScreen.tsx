import { transformTypeCameraToBwip } from "@domain/Code/utils/transformTypeCameraToBwip";
import { CameraView } from "@domain/Scanner/components/Camera/CameraView";
import { routerPush } from "@shared/navigation/typedRouting";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermission, CameraCode } from "react-native-vision-camera";

import { styles } from "./ScannerScreen.styles";

export const ScannerScreen = () => {
  const { t } = useTranslation();
  const { hasPermission, requestPermission } = useCameraPermission();

  const onClose = () => {
    routerPush("/list");
  };

  const onCodeScanned = (cameraCodes: CameraCode[]) => {
    const firstCode = cameraCodes[0];
    if (firstCode !== "unknown") {
      const codeType = transformTypeCameraToBwip(firstCode.type);
      codeType && routerPush("/add-edit", { type: codeType, value: firstCode.value });
    }
  };

  useEffect(() => {
    if (!hasPermission) {
      void requestPermission();
    }
  }, [hasPermission, requestPermission]);

  return (
    <SafeAreaView style={styles.ScannerScreenWrapper}>
      {hasPermission ? (
        <CameraView onCloseButtonPress={onClose} onCodeScanned={onCodeScanned} />
      ) : (
        <View style={styles.NoPermissionsWrapper}>
          <Text style={styles.NoPermissionsText}>{t("camera.no-permissions")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
