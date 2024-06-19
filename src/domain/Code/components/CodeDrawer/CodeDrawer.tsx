import { CodeFormat } from "@domain/Code/model/CodeFormat";
import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { ZebraCode, CodeSize } from "zebra-striped";

import { codeDrawerStylesheet } from "./CodeDrawer.styles";

type Props = {
  type: CodeFormat;
  value: string;
  height: number;
};

const codeWidth = Dimensions.get("screen").width - 30;

export const CodeDrawer = ({ type, value, height }: Props) => {
  const { styles, theme } = useStyles(codeDrawerStylesheet);
  const containerSize = useRef<CodeSize>({ width: 0, height: 0 });

  return (
    <View
      style={styles.codeDrawer}
      onLayout={e => {
        const { width, height } = e.nativeEvent.layout;
        containerSize.current = { width, height };
      }}>
      <ZebraCode
        value={value}
        format={type}
        size={{
          width: codeWidth,
          height,
        }}
        offColor={theme.colors.backgroundHighlight}
      />
    </View>
  );
};
