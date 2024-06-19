import { CodeDrawer } from "@domain/Code/components/CodeDrawer/CodeDrawer";
import { codeFormStylesheet } from "@domain/Code/components/CodeForm/CodeForm.styles";
import { CodeFormat } from "@domain/Code/model/CodeFormat";
import { Button } from "@shared/components/Button/Button";
import { Input } from "@shared/components/Input/Input";
import { useDebounce } from "@shared/hook/useDebounce";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

type Props = {
  type: CodeFormat;
  value: string | undefined;
  onAdd: (codeValue: string, title: string) => void;
  onCancel: () => void;
  editMode: boolean;
};

export const CodeForm = ({ type, value, onAdd, onCancel, editMode }: Props) => {
  const { t } = useTranslation();
  const { styles } = useStyles(codeFormStylesheet);
  const [codeValue, setCodeValue] = useState<string>(value ?? "");
  const [debouncedCodeValue, setDebouncedCodeValue] = useState<string>(value ?? "");
  const [title, setTitle] = useState<string>("");
  const updateCodeValue = useDebounce((val: string) => setDebouncedCodeValue(val), 200);

  const onAddPress = () => {
    codeValue && onAdd(codeValue, title);
  };

  const onCancelPress = () => {
    onCancel();
  };

  useEffect(() => {
    updateCodeValue(codeValue);
  }, [codeValue, updateCodeValue]);

  return (
    <>
      <View style={styles.box}>
        <CodeDrawer type={type} value={debouncedCodeValue} height={150} />
        <Input label={t("add-edit.code-type")} value={`(${type}) ${t(`code.${type}`)}`} disabled />
        <Input
          label={t("add-edit.code-value")}
          testID="code-value"
          placeholder={t("add-edit.code-value.placeholder")}
          value={codeValue}
          onChangeText={textValue => setCodeValue(textValue)}
        />
        <Input
          label={t("add-edit.code-title")}
          testID="code-title"
          placeholder={t("add-edit.code-title.placeholder")}
          maxLength={45}
          value={title}
          onChangeText={textTitle => setTitle(textTitle)}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.box}>
        <Button testID="add-edit-btn" onPress={onAddPress}>
          {editMode ? t("general.edit") : t("general.add")}
        </Button>
        <Button mode="text" onPress={onCancelPress}>
          {t("general.cancel")}
        </Button>
      </View>
    </>
  );
};
