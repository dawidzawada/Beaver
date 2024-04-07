import {ColorEnum} from '@app/enums/Color.enum.ts';

import {Theme} from '@app/theme/theme.ts';

export const darkTheme: Theme = {
  colors: {
    primary: ColorEnum.Turquoise,
    primaryContrast: ColorEnum.Mint,
    primaryHighlight: ColorEnum.Forest,
    neutral: ColorEnum.SteelGrey,
    neutralContrast: ColorEnum.White,
    backdrop: ColorEnum.Tint,
    background: ColorEnum.Graphite,
    backgroundHighlight: ColorEnum.Midnight,
    error: ColorEnum.Red,
    errorContrast: ColorEnum.Coral,
    outline: ColorEnum.StormyGrey,
  },
};
