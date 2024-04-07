import React, {useEffect} from 'react';
import {useStyles} from 'react-native-unistyles';
import {floatingMenuStyleSheet} from '@app/components/FloatingMenu/FloatingMenu.styles.ts';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {RoundButton} from '@app/components/RoundButton/RoundButton.tsx';
import {View} from 'react-native';

type Props = {
  opened: boolean;
  onScanCodePress: () => void;
  onNewCodePress: () => void;
  onToggleMenu: () => void;
};

export const FloatingMenu = ({opened, onToggleMenu, onNewCodePress, onScanCodePress}: Props) => {
  const scale = useSharedValue(0);
  const {styles} = useStyles(floatingMenuStyleSheet);

  useEffect(() => {
    if (opened) {
      scale.value = withTiming(1, {duration: 200});
    } else {
      scale.value = withTiming(0, {duration: 200});
    }
  }, [opened, scale]);

  return (
    <View style={styles.buttonsBox}>
      {opened ? (
        <>
          <RoundButton testID='scan-btn' icon='camera' mode='small' onPress={onScanCodePress} />
          <RoundButton testID='add-new-btn' icon='file-document-edit-outline' mode='small' onPress={onNewCodePress} />
          <RoundButton key='minus' testID='add-menu-btn' icon='minus' onPress={onToggleMenu} />
        </>
      ) : (
        <RoundButton key='plus' testID='add-menu-btn' icon='plus' onPress={onToggleMenu} />
      )}
    </View>
  );
};
