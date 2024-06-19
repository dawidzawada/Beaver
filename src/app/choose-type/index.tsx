import { codeTypes } from "@domain/Code/constans/codeTypes.constans";
import { CodeFormat } from "@domain/Code/model/CodeFormat";
import { Divider } from "@shared/components/Divider";
import { routerPush } from "@shared/navigation/typedRouting";
import React from "react";
import { useTranslation } from "react-i18next";
import { SectionList, TouchableOpacity, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";

import { chooseTypeStyleSheet } from "./styles";

const codes = [
  {
    title: "Code Types",
    data: codeTypes,
  },
];

export default function ChooseType() {
  const { styles } = useStyles(chooseTypeStyleSheet);
  const { t } = useTranslation();

  const onTypePress = (type: CodeFormat) => {
    routerPush("/add-edit", { type });
  };

  return (
    <SafeAreaView testID="choose-type" style={styles.screenWrapper}>
      <FlatList
        data={codeTypes}
        renderItem={({ item }) => (
          <TouchableOpacity testID={`type-${item}`} style={styles.codeItem} onPress={() => onTypePress(item)}>
            <Text style={styles.codeItemText}>{`${t(`code.${item}`)} (${item})`}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Divider}
      />
    </SafeAreaView>
  );
}
