import {Theme} from '@app/theme/theme.ts';
import {ColorEnum} from '@app/enums/Color.enum.ts';

export const lightTheme: Theme = {
  colors: {
    primary: ColorEnum.Turquoise,
    primaryContrast: ColorEnum.Mint,
    primaryHighlight: ColorEnum.Forest,
    neutral: ColorEnum.LightGrey,
    neutralContrast: ColorEnum.Graphite,
    backdrop: ColorEnum.Tint,
    background: ColorEnum.White,
    backgroundHighlight: ColorEnum.Paper,
    error: ColorEnum.Red,
    errorContrast: ColorEnum.Coral,
    outline: ColorEnum.Grey,
  },
};
