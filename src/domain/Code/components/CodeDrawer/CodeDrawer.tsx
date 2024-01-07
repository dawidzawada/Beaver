import {toDataURL, CodeRenderOptions, BwipCodeTypes, DataURL} from 'bwip-js';
import React, {useEffect, useMemo, useState} from 'react';
import {Image} from 'react-native';

type Props = {
  type: BwipCodeTypes;
  value: string | undefined;
  codeContainerWidth: number | undefined;
};

export const CodeDrawer = ({type, value, codeContainerWidth}: Props) => {
  const [codeImg, setCodeImg] = useState<DataURL>();

  useEffect(() => {
    const asyncEffect = async () => {
      if (value && value.length > 0) {
        const options: CodeRenderOptions = {bcid: type, text: value};
        try {
          const data = await toDataURL(options);
          setCodeImg(data);
        } catch (e) {
          // `e` may be a string or Error object
        }
      }
    };

    // Generating code preview should be debounced
    const timerId = setTimeout(() => {
      void asyncEffect();
    }, 300);

    // Cleanup for debounce timer
    return () => clearTimeout(timerId);
  }, [type, value]);

  const codeSize = useMemo<{height: number; width: number}>(() => {
    if (codeImg && codeContainerWidth) {
      const targetHeight = 140;
      const maxFittedCodeWidth = codeContainerWidth - 20;

      const aspectRatio = codeImg.width / codeImg.height;
      const targetWidth = Math.min(maxFittedCodeWidth, targetHeight * aspectRatio);
      return {width: targetWidth, height: targetHeight};
    }

    return {
      width: 0,
      height: 0,
    };
  }, [codeImg, codeContainerWidth]);

  return codeImg ? (
    <Image style={{height: codeSize.height, width: codeSize.width}} source={{uri: codeImg.uri}} />
  ) : null;
};
