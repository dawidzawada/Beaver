import {createStyleSheet} from 'react-native-unistyles';

export const floatingMenuStyleSheet = createStyleSheet(theme => ({
  buttonsBox: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  menuButton: {
    position: 'relative',
    zIndex: 2,
  },
}));
