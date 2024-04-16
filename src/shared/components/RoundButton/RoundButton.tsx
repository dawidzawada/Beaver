import { AnimatedIcon } from "@shared/components/AnimatedIcon/AnimatedIcon";
import { floatingMenuStyleSheet } from "@shared/components/RoundButton/RoundButton.styles";
import React from "react";
import { TouchableHighlight, TouchableHighlightProps, View } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

type Props = {
  icon: string;
  mode?: "small" | "big";
  renderingAnimations?: boolean;
} & Omit<TouchableHighlightProps, "style">;

export const RoundButton = ({ icon, mode = "big", renderingAnimations, ...props }: Props) => {
  const { theme, styles } = useStyles(floatingMenuStyleSheet);

  if (renderingAnimations) {
    return (
      <Animated.View entering={ZoomIn}>
        <TouchableHighlight underlayColor={theme.colors.primaryHighlight} {...props} style={styles.button(mode)}>
          <AnimatedIcon size={mode === "big" ? 60 : 30} name={icon} style={styles.icon} />
        </TouchableHighlight>
      </Animated.View>
    );
  }

  return (
    <View>
      <TouchableHighlight underlayColor={theme.colors.primaryHighlight} {...props} style={styles.button(mode)}>
        <AnimatedIcon size={mode === "big" ? 60 : 30} name={icon} style={styles.icon} />
      </TouchableHighlight>
    </View>
  );
};
