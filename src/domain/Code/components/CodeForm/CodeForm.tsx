import { CodeDrawer } from "@domain/Code/components/CodeDrawer/CodeDrawer";
import { codeFormStylesheet } from "@domain/Code/components/CodeForm/CodeForm.styles";
import { CodeFormat } from "@domain/Code/model/CodeFormat";
import { CardStyle } from "@domain/Code/types/CardStyle";
import BottomSheet, { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Button } from "@shared/components/Button/Button";
import { Input } from "@shared/components/Input/Input";
import { useDebounce } from "@shared/hook/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import EmojiPicker, { EmojiType } from "rn-emoji-keyboard";

import { CardStylePicker } from "../CardStylePicker/CardStylePicker";

type Props = {
  type: CodeFormat;
  value: string | undefined;
  onAdd: (codeValue: string, title: string, icon: string, style: CardStyle) => void;
  onCancel: () => void;
  editMode: boolean;
};

const colorSheetSnapPoints = ["65%"];

const cardStyleIcons: Record<CardStyle, string> = {
  Fire: "🔥",
  Leaf: "🍀",
  Sky: "☁️",
  Deep: "🌊",
  Coal: "🖤",
  Plum: "💜",
};

export const CodeForm = ({ type, value, onAdd, onCancel, editMode }: Props) => {
  const { t } = useTranslation();
  const { styles } = useStyles(codeFormStylesheet);
  const colorSheetRef = useRef<BottomSheet>(null);
  const [codeValue, setCodeValue] = useState<string>(value ?? "");
  const [debouncedCodeValue, setDebouncedCodeValue] = useState<string>(value ?? "");
  const [title, setTitle] = useState<string>("");
  const [icon, setIcon] = useState<string>("🦫");
  const [cardStyle, setCardStyle] = useState<CardStyle>("Leaf");
  const [isIconPickerOpen, setIconPickerOpen] = useState(false);
  const updateCodeValue = useDebounce((val: string) => setDebouncedCodeValue(val), 200);

  const onAddPress = () => {
    codeValue && onAdd(codeValue, title, icon, cardStyle);
  };

  const onCancelPress = () => {
    onCancel();
  };

  const onEmojiPick = (pick: EmojiType) => {
    setIcon(pick.emoji);
  };

  const onStylePick = (style: CardStyle) => {
    setCardStyle(style);
    colorSheetRef.current?.close();
  };

  const openStylePicker = () => {
    colorSheetRef.current?.expand();
  };

  useEffect(() => {
    updateCodeValue(codeValue);
  }, [codeValue, updateCodeValue]);

  return (
    <BottomSheetModalProvider>
      <KeyboardAvoidingView style={styles.keyboardView} behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
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
            <View style={styles.stylingWrapper}>
              <TouchableOpacity style={styles.pickerBox} onPress={() => setIconPickerOpen(true)}>
                <Text style={styles.icon}>{icon}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerBox} onPress={openStylePicker}>
                <Text style={styles.icon}>{cardStyleIcons[cardStyle]}</Text>
              </TouchableOpacity>
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
          </ScrollView>
        </TouchableWithoutFeedback>
        <EmojiPicker onEmojiSelected={onEmojiPick} open={isIconPickerOpen} onClose={() => setIconPickerOpen(false)} />
      </KeyboardAvoidingView>
      <BottomSheet ref={colorSheetRef} index={-1} snapPoints={colorSheetSnapPoints} enablePanDownToClose>
        <CardStylePicker onStylePick={onStylePick} />
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};
