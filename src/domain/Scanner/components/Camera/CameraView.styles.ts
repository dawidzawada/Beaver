import {StyleSheet, ViewStyle} from 'react-native';
import {ColorEnum} from '@app/enums/Color.enum.ts';

type CameraViewStyles = {
  CameraViewWrapper: ViewStyle;
  VisionCamera: ViewStyle;
  CloseButton: ViewStyle;
};

export const styles = StyleSheet.create<CameraViewStyles>({
  CameraViewWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  VisionCamera: {
    width: '100%',
    height: '100%',
  },
  CloseButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    margin: 0,
    backgroundColor: ColorEnum.Tint,
  },
});
