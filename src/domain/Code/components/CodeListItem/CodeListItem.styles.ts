import { BorderRadius } from "@shared/constans/BorderRadius.constans";
import { Font, FontSize } from "@shared/enums/Font.enum";
import { createStyleSheet } from "react-native-unistyles";

export const codeListItemStylesheet = createStyleSheet(theme => ({
  box: (color: string) => ({
    width: "100%",
    height: 200,
    flexDirection: "row",
    backgroundColor: color,
    borderRadius: BorderRadius,
    marginVertical: 12,
  }),
  iconBox: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 55,
  },
  titleBox: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: FontSize.M,
    fontFamily: Font.Bold,
    padding: 12,
  },
}));
