import {ViewStyle} from 'react-native';
import {useStylesheetWithTheme} from '@app/hook/useStylesheetWithTheme.ts';

type ListScreenStyles = {
  ListScreenWrapper: ViewStyle;
};

export const useListScreenStyles = () => {
  return useStylesheetWithTheme<ListScreenStyles>(({colors}) => ({
    ListScreenWrapper: {
      minHeight: '100%',
      backgroundColor: colors.background,
    },
  }));
};
