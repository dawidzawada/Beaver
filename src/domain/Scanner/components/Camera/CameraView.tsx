import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useCameraDevice, Camera, useCodeScanner } from "react-native-vision-camera";
import { Code, CodeScannerFrame } from "react-native-vision-camera/src/CodeScanner";

import { styles } from "./CameraView.styles";

type Props = {
  onCloseButtonPress: () => void;
  onCodeScanned: (codes: Code[], frame: CodeScannerFrame) => void;
};

export const CameraView = ({ onCloseButtonPress, onCodeScanned }: Props) => {
  const { t } = useTranslation();
  const device = useCameraDevice("back");
  const codeScanner = useCodeScanner({
    codeTypes: [
      "code-128",
      "code-39",
      "code-93",
      "codabar",
      "ean-13",
      "ean-8",
      "itf",
      "upc-e",
      "qr",
      "pdf-417",
      "aztec",
      "data-matrix",
    ],
    onCodeScanned,
  });

  return (
    <View style={styles.CameraViewWrapper}>
      {device ? (
        <>
          <Camera style={styles.VisionCamera} device={device} isActive codeScanner={codeScanner} />
          <Icon size={40} name="close" style={styles.CloseButton} onPress={onCloseButtonPress} />
        </>
      ) : (
        <Text>{t("general.error")}</Text>
      )}
    </View>
  );
};
