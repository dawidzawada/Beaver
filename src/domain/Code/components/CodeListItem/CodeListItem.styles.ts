import {TextStyle, ViewStyle} from 'react-native';
import {useStylesheetWithTheme} from '@app/hook/useStylesheetWithTheme.ts';
import {BorderRadius} from '@app/constans/BorderRadius.constans.ts';

type CodeListItemStyles = {
  Wrapper: ViewStyle;
  Box: ViewStyle;
  Title: TextStyle;
};

export const useCodeListItemStyles = () => {
  return useStylesheetWithTheme<CodeListItemStyles>(({colors}) => ({
    Wrapper: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      gap: 8,
    },
    Box: {
      width: '100%',
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: colors.outline,
      borderRadius: BorderRadius,
    },
    Title: {
      textAlign: 'center',
    },
  }));
};
