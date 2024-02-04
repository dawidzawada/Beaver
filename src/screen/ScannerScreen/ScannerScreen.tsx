import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {styles} from './ScannerScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CameraView} from '@domain/Scanner/components/Camera/CameraView.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {transformTypeCameraToBwip} from '@domain/Code/utils/transformTypeCameraToBwip.ts';
import {CameraCode} from 'react-native-vision-camera';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<StackParamList, 'Scanner'>;

export const ScannerScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const {hasPermission, requestPermission} = useCameraPermission();

  const onClose = () => {
    navigation.navigate('List');
  };

  const onCodeScanned = (cameraCodes: CameraCode[]) => {
    const firstCode = cameraCodes[0];
    if (firstCode !== 'unknown') {
      const codeType = transformTypeCameraToBwip(firstCode.type);
      codeType && navigation.navigate('AddEditCode', {type: codeType, value: firstCode.value});
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
          <Text style={styles.NoPermissionsText}>{t('camera.no-permissions')}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
