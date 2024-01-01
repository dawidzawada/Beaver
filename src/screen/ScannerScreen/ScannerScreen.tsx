import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {styles} from './ScannerScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {CameraView} from '@domain/Scanner/components/Camera/CameraView.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';

type Props = NativeStackScreenProps<StackParamList, 'Scanner'>;

export const ScannerScreen = ({navigation}: Props) => {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      void requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const onClose = () => {
    navigation.navigate('List');
  };

  return (
    <SafeAreaView style={styles.ScannerScreenWrapper}>
      {hasPermission ? (
        <CameraView onCloseButtonPress={onClose} />
      ) : (
        <View style={styles.NoPermissionsWrapper}>
          <Text variant='titleMedium' style={styles.NoPermissionsText}>
            No Camera permissions
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
