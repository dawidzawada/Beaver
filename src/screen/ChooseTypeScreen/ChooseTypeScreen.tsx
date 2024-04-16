import { mostlyUsedCodes } from "@domain/Code/constans/MostlyUsedCodes.constans";
import { otherCodes } from "@domain/Code/constans/OtherCodes.constans";
import { Divider } from "@shared/components/Divider";
import { routerPush } from "@shared/navigation/typedRouting";
import { BwipCodeTypes } from "bwip-js";
import React from "react";
import { useTranslation } from "react-i18next";
import { SectionList, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";

import { chooseTypeStyleSheet } from "./ChooseTypeScreen.styles";

const codes = [
  {
    title: "Mostly used codes",
    data: mostlyUsedCodes,
  },
  {
    title: "Other codes",
    data: otherCodes,
  },
];

export const ChooseTypeScreen = () => {
  const { styles } = useStyles(chooseTypeStyleSheet);
  const { t } = useTranslation();

  const onTypePress = (type: BwipCodeTypes) => {
    routerPush("/add-edit", { type });
  };

  return (
    <SafeAreaView testID="choose-type" style={styles.screenWrapper}>
      <SectionList
        sections={codes}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionTitle}>{title}</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity testID={`type-${item}`} style={styles.codeItem} onPress={() => onTypePress(item)}>
            <Text style={styles.codeItemText}>{`${t(`code.${item}`)} (${item})`}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Divider}
        SectionSeparatorComponent={Divider}
      />
    </SafeAreaView>
  );
};
