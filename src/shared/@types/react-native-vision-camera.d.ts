import { Code } from "react-native-vision-camera";

declare module "react-native-vision-camera" {
  export type CameraCode = Code | "unknown";
}
