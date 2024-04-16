import { ColorEnum } from "@shared/enums/Color.enum";
import { Theme } from "@shared/theme/theme";

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
