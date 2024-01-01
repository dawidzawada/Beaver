import {ViewStyle} from 'react-native';
import {useStylesheetWithTheme} from '@app/hook/useStylesheetWithTheme.ts';

type ListScreenStyles = {
  ListScreenWrapper: ViewStyle;
  List: ViewStyle;
  Backdrop: ViewStyle;
  ButtonsBox: ViewStyle;
  SubButtonsBox: ViewStyle;
};

export const useListScreenStyles = () => {
  return useStylesheetWithTheme<ListScreenStyles>(({colors}) => ({
    ListScreenWrapper: {
      minHeight: '100%',
      backgroundColor: colors.surface,
      position: 'relative',
      flex: 1,
    },
    List: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingBottom: 100,
    },
    Backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: colors.backdrop,
      zIndex: 1,
    },
    ButtonsBox: {
      position: 'absolute',
      right: 10,
      bottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    SubButtonsBox: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));
};
