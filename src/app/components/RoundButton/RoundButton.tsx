import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableHighlight, TouchableHighlightProps} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import {floatingMenuStyleSheet} from '@app/components/RoundButton/RoundButton.styles.ts';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

type Props = {
  icon: string;
  mode?: 'small' | 'big';
} & Omit<TouchableHighlightProps, 'style'>;

export const RoundButton = ({icon, mode = 'big', ...props}: Props) => {
  const {theme, styles} = useStyles(floatingMenuStyleSheet);

  return (
    <Animated.View entering={ZoomIn} exiting={ZoomOut}>
      <TouchableHighlight underlayColor={theme.colors.primaryHighlight} {...props} style={styles.button(mode)}>
        <Icon size={mode === 'big' ? 60 : 30} name={icon} style={styles.icon} />
      </TouchableHighlight>
    </Animated.View>
  );
};
