import { ColorEnum } from "@shared/enums/Color.enum";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ScannerScreenStyles = {
  ScannerScreenWrapper: ViewStyle;
  NoPermissionsWrapper: ViewStyle;
  NoPermissionsText: TextStyle;
};

export const styles = StyleSheet.create<ScannerScreenStyles>({
  ScannerScreenWrapper: {
    flex: 1,
  },
  NoPermissionsWrapper: {
    backgroundColor: ColorEnum.Graphite,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  NoPermissionsText: {
    color: ColorEnum.White,
  },
});
