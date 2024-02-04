import {createStyleSheet} from 'react-native-unistyles';

export const backdropStyles = createStyleSheet(theme => ({
  backdropWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.backdrop,
    zIndex: 1,
  },
  pressableBackdrop: {
    width: '100%',
    height: '100%',
  },
}));
