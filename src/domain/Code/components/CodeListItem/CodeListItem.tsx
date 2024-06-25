import { CardStyleColor } from "@domain/Code/enums/CardStyleColor";
import { CardStyle } from "@domain/Code/types/CardStyle";
import React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { codeListItemStylesheet, CARD_HEIGHT as CARD_BOX_HEIGHT, CARD_MARGIN } from "./CodeListItem.styles";

type Props = {
  name: string;
  icon: string;
  style: CardStyle;
  index: number;
  y: SharedValue<number>;
  onPress: () => void;
  onLongPress: () => void;
};

const height = Dimensions.get("screen").height - 36; //animation container height

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CARD_HEIGHT = 2 * CARD_MARGIN + CARD_BOX_HEIGHT; //full height with margins

export const CodeListItem = ({ name, icon, style, y, index, onPress, onLongPress }: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    const position = index * CARD_HEIGHT - y.value;

    const disappearingPoint = -CARD_HEIGHT;
    const topPoint = 0;
    const bottomPoint = height - CARD_HEIGHT;
    const apperingPoint = height;

    const scale = interpolate(position, [disappearingPoint, topPoint, bottomPoint, apperingPoint], [0.5, 1, 1, 0.5], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const opacity = interpolate(position, [disappearingPoint, topPoint, bottomPoint, apperingPoint], [0.2, 1, 1, 0.5]);

    const translateY =
      y.value +
      interpolate(y.value, [0, 0.00001 + index * CARD_HEIGHT], [0, -index * CARD_HEIGHT], {
        extrapolateRight: Extrapolation.CLAMP,
      });

    return {
      transform: [{ translateY }, { scale }],
      opacity,
    };
  });

  const { styles } = useStyles(codeListItemStylesheet);

  return (
    <AnimatedPressable
      testID="code-list-item"
      style={[styles.box(CardStyleColor[style]), animatedStyle]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </AnimatedPressable>
  );
};
