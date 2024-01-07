import {ViewStyle} from 'react-native';
import {useStylesheetWithTheme} from '@app/hook/useStylesheetWithTheme.ts';
import {BorderRadius} from '@app/constans/BorderRadius.constans.ts';

type ListScreenStyles = {
  AddEditScreenWrapper: ViewStyle;
  Box: ViewStyle;
  CodeView: ViewStyle;
  Spacer: ViewStyle;
};

export const useAddEditScreenStyles = () => {
  return useStylesheetWithTheme<ListScreenStyles>(({colors}) => ({
    AddEditScreenWrapper: {
      minHeight: '100%',
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      flex: 1,
      padding: 10,
      paddingBottom: 50,
    },
    Box: {
      marginVertical: 20,
      width: '100%',
      alignItems: 'stretch',
      justifyContent: 'center',
      gap: 8,
    },
    CodeView: {
      minHeight: 150,
      backgroundColor: colors.surfaceDisabled,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: colors.outline,
      borderRadius: BorderRadius,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Spacer: {
      flex: 1,
    },
  }));
};
