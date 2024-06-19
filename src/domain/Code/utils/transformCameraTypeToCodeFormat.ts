import { CodeType } from "react-native-vision-camera";
import { CodeFormat } from "../model/CodeFormat";

export const transformCameraTypeToCodeFormat = (visionCameraType: CodeType | "unknown"): CodeFormat | undefined => {
  switch (visionCameraType) {
    case "qr":
      return "qr";
    case "code-128":
      return "code-128";
    case "code-93":
      return "code-93";
    case "code-39":
      return "code-39";
    case "ean-8":
      return "ean-8";
    case "ean-13":
      return "ean-13";
    case "itf":
      return "itf";
    case "codabar":
      return "codabar";
    case "upc-e":
      return "upc-e";
    case "pdf-417":
      return "pdf-417";
    case "aztec":
      return "aztec";
    case "data-matrix":
      return "data-matrix";
    default:
      return undefined;
  }
};
