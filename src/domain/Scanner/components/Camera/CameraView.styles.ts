import { ColorEnum } from "@shared/enums/Color.enum";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type CameraViewStyles = {
  CameraViewWrapper: ViewStyle;
  VisionCamera: ViewStyle;
  CloseButton: TextStyle;
};

export const styles = StyleSheet.create<CameraViewStyles>({
  CameraViewWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  VisionCamera: {
    width: "100%",
    height: "100%",
  },
  CloseButton: {
    position: "absolute",
    top: 10,
    left: 10,
    margin: 0,
    color: ColorEnum.White,
    backgroundColor: ColorEnum.Tint,
    padding: 10,
    borderRadius: 100,
  },
});
