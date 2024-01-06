import React from 'react';
import {useCameraDevice, Camera, useCodeScanner} from 'react-native-vision-camera';
import {Text, View} from 'react-native';
import {styles} from './CameraView.styles.ts';
import {IconButton} from 'react-native-paper';
import {ColorEnum} from '@app/enums/Color.enum.ts';
import {useTranslation} from 'react-i18next';
import {Code, CodeScannerFrame} from 'react-native-vision-camera/src/CodeScanner.ts';

type Props = {
  onCloseButtonPress: () => void;
  onCodeScanned: (codes: Code[], frame: CodeScannerFrame) => void;
};

export const CameraView = ({onCloseButtonPress, onCodeScanned}: Props) => {
  const {t} = useTranslation();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: [
      'code-128',
      'code-39',
      'code-93',
      'codabar',
      'ean-13',
      'ean-8',
      'itf',
      'upc-e',
      'qr',
      'pdf-417',
      'aztec',
      'data-matrix',
    ],
    onCodeScanned,
  });

  return (
    <View style={styles.CameraViewWrapper}>
      {device ? (
        <>
          <Camera style={styles.VisionCamera} device={device} isActive codeScanner={codeScanner} />
          <IconButton
            style={styles.CloseButton}
            icon='close'
            size={40}
            iconColor={ColorEnum.White}
            onPress={onCloseButtonPress}
          />
        </>
      ) : (
        <Text>{t('general.error')}</Text>
      )}
    </View>
  );
};
