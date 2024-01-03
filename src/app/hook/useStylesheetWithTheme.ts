import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import {useMemo} from 'react';

type StyleSheetData = Record<string, ViewStyle | TextStyle | ImageStyle>;
type StyleSheetFunction<T extends StyleSheetData> = (theme: MD3Theme) => T;

export const useStylesheetWithTheme = <T extends StyleSheetData>(styleSheetFunction: StyleSheetFunction<T>) => {
  const theme = useTheme();

  return useMemo(() => {
    return StyleSheet.create<T>(styleSheetFunction(theme));
    // Style should be recalculated only when theme changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.dark]);
};
