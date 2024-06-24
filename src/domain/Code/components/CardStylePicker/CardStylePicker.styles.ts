import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { ColorEnum } from "@shared/enums/Color.enum";
import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const cardStylePickerStylesheet = createStyleSheet(theme => ({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  card: (color: string) => ({
    width: 120,
    height: 80,
    margin: 20,
    borderRadius: BorderRadius,
    backgroundColor: color,
    justifyContent: "center",
  }),
  cardLabel: {
    fontSize: FontSize.S,
    color: ColorEnum.White,
    fontFamily: Font.Bold,
    margin: 8,
  },
}));
