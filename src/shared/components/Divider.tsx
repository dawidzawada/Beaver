import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const Divider = () => {
  const { styles } = useStyles(stylesheet);
  return <View style={styles.divider} />;
};

const stylesheet = createStyleSheet(theme => ({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.neutral,
  },
}));
