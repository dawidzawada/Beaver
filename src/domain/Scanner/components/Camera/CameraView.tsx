import React from 'react';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import {Text, View} from 'react-native';
import {styles} from './CameraView.styles.ts';
import {IconButton} from 'react-native-paper';
import {ColorEnum} from '@app/enums/Color.enum.ts';

type Props = {
  onCloseButtonPress: () => void;
};

export const CameraView = ({onCloseButtonPress}: Props) => {
  const device = useCameraDevice('back');

  return (
    <View style={styles.CameraViewWrapper}>
      {device ? (
        <>
          <Camera style={styles.VisionCamera} device={device} isActive />
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
