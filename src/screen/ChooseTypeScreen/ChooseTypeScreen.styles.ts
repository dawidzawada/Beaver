import {ViewStyle} from 'react-native';
import {useStylesheetWithTheme} from '@app/hook/useStylesheetWithTheme.ts';

type ListScreenStyles = {
  ChooseTypeScreenWrapper: ViewStyle;
  SectionTitle: ViewStyle;
  CodeItem: ViewStyle;
};

export const useChooseTypeScreenStyles = () => {
  return useStylesheetWithTheme<ListScreenStyles>(({colors}) => ({
    ChooseTypeScreenWrapper: {
      minHeight: '100%',
      backgroundColor: colors.surface,
      position: 'relative',
      flex: 1,
      paddingBottom: 20,
    },
    SectionTitle: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    CodeItem: {
      padding: 20,
    },
  }));
};
