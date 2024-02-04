import {createStyleSheet} from 'react-native-unistyles';
import {FontSize} from '@app/enums/FontSize.enum.ts';

export const listScreenStyleSheet = createStyleSheet(theme => ({
  container: {
    minHeight: '100%',
    flex: 1,
    position: 'relative',
    backgroundColor: theme.colors.background,
  },
  list: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  menu: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,
  },
  noCodes: {
    fontSize: FontSize.M,
    fontWeight: 'bold',
    color: theme.colors.neutralContrast,
    opacity: 0.4,
    marginVertical: 50,
    width: '100%',
    textAlign: 'center',
  },
}));
