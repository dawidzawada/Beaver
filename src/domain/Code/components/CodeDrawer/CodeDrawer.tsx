import {BwipCodeTypes, toSVG} from 'bwip-js';
import React, {useEffect, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {SvgXml} from 'react-native-svg';

type Props = {
  type: BwipCodeTypes;
  value: string;
};

export const CodeDrawer = ({type, value}: Props) => {
  const [codeSvg, setCodeSvg] = useState<string>();
  const {theme} = useStyles();

  useEffect(() => {
    const asyncEffect = async () => {
      if (value && value.length > 0) {
        try {
          const svg = toSVG({
            bcid: type, // Barcode type
            text: value, // Text to encode
            includetext: true, // Show human-readable text
            textxalign: 'center', // Always good to set this
            textcolor: 'ff0000', // Red text
          });
          setCodeSvg(svg);
        } catch (e) {
          // `e` may be a string or Error object
        }
      }
    };

    void asyncEffect();
  }, [theme.colors.neutralContrast, type, value]);

  if (codeSvg) {
    return <SvgXml width='100%' height={140} xml={codeSvg} />;
  }

  return null;
};
