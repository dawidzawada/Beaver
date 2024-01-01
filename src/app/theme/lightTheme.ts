import {MD3LightTheme, MD3Theme} from 'react-native-paper';
import {ColorEnum} from '@app/enums/Color.enum.ts';

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: ColorEnum.Turquoise,
    onPrimary: ColorEnum.Mint,
    surface: ColorEnum.White,
    onSurface: ColorEnum.Graphite,
    error: ColorEnum.Red,
    onError: ColorEnum.Coral,
    outline: ColorEnum.Grey,
  },
};
