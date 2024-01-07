import {MD3DarkTheme, MD3Theme} from 'react-native-paper';
import {ColorEnum} from '@app/enums/Color.enum.ts';

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: ColorEnum.Turquoise,
    onPrimary: ColorEnum.SeaWeed,
    surface: ColorEnum.Graphite,
    onSurface: ColorEnum.White,
    error: ColorEnum.Red,
    onError: ColorEnum.Vine,
    outline: ColorEnum.Grey,
    background: ColorEnum.Graphite,
  },
};
