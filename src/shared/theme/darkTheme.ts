import { ColorEnum } from "@shared/enums/Color.enum";
import { Theme } from "@shared/theme/theme";

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
