import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import {useMemo} from 'react';

type StyleSheetData = Record<string, ViewStyle | TextStyle | ImageStyle>;
type StyleSheetFunction<T extends StyleSheetData> = (theme: MD3Theme) => T;

export const useStylesheetWithTheme = <T extends StyleSheetData>(styleSheetFunction: StyleSheetFunction<T>) => {
  const theme = useTheme();

  return useMemo(() => {
    const data = styleSheetFunction(theme);
    return StyleSheet.create<T>(data);
  }, [styleSheetFunction, theme]);
};
