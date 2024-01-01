import React, {useEffect, useState} from 'react';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import {Text, View} from 'react-native';
import {styles} from './CameraView.styles.ts';
import {IconButton} from 'react-native-paper';
import {ColorEnum} from '@app/enums/Color.enum.ts';

type Props = {
  onCloseButtonPress: () => void;
};

export const CameraView = ({onCloseButtonPress}: Props) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const device = useCameraDevice('back');

  useEffect(() => {
    setTimeout(() => {
      setIsCameraActive(true);
    }, 100);
  }, []);

  return (
    <View style={styles.CameraViewWrapper}>
      {device ? (
        <>
          <Camera style={styles.VisionCamera} device={device} isActive={isCameraActive} />
          <IconButton
            style={styles.CloseButton}
            icon='close'
            size={40}
            iconColor={ColorEnum.White}
            onPress={onCloseButtonPress}
          />
        </>
      ) : (
        <Text>Err</Text>
      )}
    </View>
  );
};
