import { BwipCodeTypes } from "bwip-js";
import { CodeType as CameraCodeType } from "react-native-vision-camera";

export const transformTypeCameraToBwip = (visionCameraType: CameraCodeType | "unknown"): BwipCodeTypes | undefined => {
  switch (visionCameraType) {
    case "qr":
      return "qrcode";
    case "code-128":
      return "code128";
    case "code-93":
      return "code93";
    case "code-39":
      return "code39";
    case "ean-8":
      return "ean8";
    case "ean-13":
      return "ean13";
    case "itf":
      return "itf14";
    case "codabar":
      return "rationalizedCodabar";
    case "upc-e":
      return "upce";
    case "pdf-417":
      return "pdf417";
    case "aztec":
      return "azteccode";
    case "data-matrix":
      return "datamatrix";
    default:
      return undefined;
  }
};
