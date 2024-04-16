import LogoIcon from "@shared/assets/icons/LogoIcon";
import { styles } from "@shared/components/Logo/Logo.styles";
import React from "react";
import { View } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <LogoIcon />
    </View>
  );
};
