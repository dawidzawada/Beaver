import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {Pressable} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import {backdropStyles} from '@app/components/Backdrop/Backdrop.styles.ts';

type Props = {
  onPress: () => void;
};

export const Backdrop = ({onPress}: Props) => {
  const {styles} = useStyles(backdropStyles);
  return (
    <Animated.View style={styles.backdropWrapper} entering={FadeIn} exiting={FadeOut}>
      <Pressable onPress={onPress} style={styles.pressableBackdrop} />
    </Animated.View>
  );
};
