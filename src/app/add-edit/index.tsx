import { CodeForm } from "@domain/Code/components/CodeForm/CodeForm";
import { CardStyle } from "@domain/Code/types/CardStyle";
import { routerPush, useTypedParams } from "@shared/navigation/typedRouting";
import { useCodesStore } from "@store/codes.store";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";

import { addEditScreenStylesheet } from "./styles";

export default function AddEdit() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { styles } = useStyles(addEditScreenStylesheet);
  const { type, value, editMode } = useTypedParams<"/add-edit">();

  const addCode = useCodesStore(state => state.addCode);

  const onCancel = () => {
    routerPush("/list");
  };

  const onAdd = (codeValue: string, title: string, icon: string, style: CardStyle) => {
    addCode({ type, value: codeValue, title, icon, style });
    routerPush("/list");
  };

  useEffect(() => {
    if (editMode) {
      navigation.setOptions({ headerShown: t("navigation.edit-code") });
    } else {
      navigation.setOptions({ headerShown: t("navigation.add-code") });
    }
  }, [editMode, t]);

  return (
    <SafeAreaView style={styles.screenWrapper} testID="add-edit">
      <CodeForm type={type} value={value} onAdd={onAdd} onCancel={onCancel} editMode={!!editMode} />
    </SafeAreaView>
  );
}
