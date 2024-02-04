import React, {PropsWithChildren} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheetButton} from './Button.styles.ts';

type Props = {
  onPress: () => void;
  mode?: 'contained' | 'text';
  disabled?: boolean;
  testID?: string;
};

export const Button = ({mode = 'contained', children, onPress, disabled, testID}: PropsWithChildren<Props>) => {
  const {styles} = useStyles(stylesheetButton);
  return (
    <TouchableOpacity testID={testID} style={styles.wrapper(mode, !!disabled)} onPress={onPress}>
      <Text style={styles.text(mode, !!disabled)}>{children}</Text>
    </TouchableOpacity>
  );
};
