import React from 'react';
import {Text, View, TextInput, TextInputProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {inputStylesheet} from '@app/components/Input/Input.styles.ts';

type Props = {
  label: string;
  disabled?: boolean;
} & Omit<TextInputProps, 'editable' | 'selectTextOnFocus'>;

export const Input = ({label, disabled, ...inputProps}: Props) => {
  const {styles} = useStyles(inputStylesheet);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label(!!disabled)}>{label}</Text>
      <TextInput style={styles.input(!!disabled)} {...inputProps} editable={!disabled} selectTextOnFocus={!disabled} />
    </View>
  );
};
