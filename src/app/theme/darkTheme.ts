import {DarkTheme, Theme} from 'react-native-paper';

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#1a1c1f',
    primary: 'purple',
  },
};
