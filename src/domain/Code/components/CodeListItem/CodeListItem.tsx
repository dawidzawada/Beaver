import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
import { codeListItemStylesheet } from "./CodeListItem.styles";
import { CardStyle } from "@domain/Code/types/CardStyle";
import { CardStyleColor } from "@domain/Code/enums/CardStyleColor";

type Props = {
  name: string;
  icon: string;
  style: CardStyle;
  onPress: () => void;
  onLongPress: () => void;
};

export const CodeListItem = ({ name, icon, style, onPress, onLongPress }: Props) => {
  const { styles, theme } = useStyles(codeListItemStylesheet);

  return (
    <TouchableOpacity
      testID="code-list-item"
      style={styles.box(CardStyleColor[style])}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </TouchableOpacity>
  );
};
