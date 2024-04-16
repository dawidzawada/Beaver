import { toDataURL, CodeRenderOptions, BwipCodeTypes, DataURL } from "bwip-js";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useStyles } from "react-native-unistyles";

type Props = {
  type: BwipCodeTypes;
  value: string;
  codeContainerWidth: number;
};

export const CodeDrawer = ({ type, value, codeContainerWidth }: Props) => {
  const [codeImg, setCodeImg] = useState<DataURL>();
  const { theme } = useStyles();

  useEffect(() => {
    const asyncEffect = async () => {
      if (value && value.length > 0) {
        const options: CodeRenderOptions = {
          bcid: type,
          text: value,
          barcolor: theme.colors.neutralContrast,
        };
        try {
          const data = await toDataURL(options);
          setCodeImg(data);
        } catch {
          // `e` may be a string or Error object
        }
      }
    };

    void asyncEffect();
  }, [theme.colors.neutralContrast, type, value]);

  if (codeImg) {
    const targetHeight = 140;
    const maxFittedCodeWidth = codeContainerWidth - 20;

    const aspectRatio = codeImg.width / codeImg.height;
    const targetWidth = Math.min(maxFittedCodeWidth, targetHeight * aspectRatio);
    return <Image style={{ height: targetHeight, width: targetWidth }} source={{ uri: codeImg.uri }} />;
  }

  return null;
};
