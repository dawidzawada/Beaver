import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { codeListItemStylesheet } from "./CodeListItem.styles";

type Props = {
  type: "qrcode" | "barcode";
  name: string;
  onPress: () => void;
  onLongPress: () => void;
};

export const CodeListItem = ({ type, name, onPress, onLongPress }: Props) => {
  const { styles, theme } = useStyles(codeListItemStylesheet);

  return (
    <TouchableOpacity testID="code-list-item" style={styles.wrapper} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.box}>
        <Icon size={60} name={type} color={theme.colors.neutralContrast} />
      </View>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};
