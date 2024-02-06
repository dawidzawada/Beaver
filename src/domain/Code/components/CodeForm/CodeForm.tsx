import {View} from 'react-native';
import {Button} from '@app/components/Button/Button.tsx';
import React, {useEffect, useState} from 'react';
import {Input} from '@app/components/Input/Input.tsx';
import {useStyles} from 'react-native-unistyles';
import {codeFormStylesheet} from '@domain/Code/components/CodeForm/CodeForm.styles.ts';
import {useDebounce} from '@app/hook/useDebounce.ts';
import {CodeDrawer} from '@domain/Code/components/CodeDrawer/CodeDrawer.tsx';
import {BwipCodeTypes} from 'bwip-js';
import {useTranslation} from 'react-i18next';

const MemoizedCodeDrawer = React.memo(CodeDrawer);

type Props = {
  type: BwipCodeTypes;
  value: string | undefined;
  onAdd: (codeValue: string, title: string) => void;
  onCancel: () => void;
  editMode: boolean;
};

export const CodeForm = ({type, value, onAdd, onCancel, editMode}: Props) => {
  const {t} = useTranslation();
  const {styles} = useStyles(codeFormStylesheet);
  const [codeValue, setCodeValue] = useState<string | undefined>(value);
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>();
  const [title, setTitle] = useState<string>('');
  const debouncedUpdateValue = useDebounce((val: string | undefined) => setDebouncedValue(val), 500);

  const onAddPress = () => {
    codeValue && onAdd(codeValue, title);
  };

  const onCancelPress = () => {
    onCancel();
  };

  useEffect(() => {
    debouncedUpdateValue(codeValue);
  }, [codeValue, debouncedUpdateValue]);

  return (
    <>
      <View style={styles.box}>
        <View style={styles.codeView}>
          {debouncedValue && <MemoizedCodeDrawer type={type} value={debouncedValue} />}
        </View>
        <Input label={t('add-edit.code-type')} value={`(${type}) ${t(`code.${type}`)}`} disabled />
        <Input
          label={t('add-edit.code-value')}
          testID='code-value'
          placeholder={t('add-edit.code-value.placeholder')}
          value={codeValue}
          onChangeText={textValue => setCodeValue(textValue)}
        />
        <Input
          label={t('add-edit.code-title')}
          testID='code-title'
          placeholder={t('add-edit.code-title.placeholder')}
          maxLength={45}
          value={title}
          onChangeText={textTitle => setTitle(textTitle)}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.box}>
        <Button testID='add-edit-btn' onPress={onAddPress}>
          {editMode ? t('general.edit') : t('general.add')}
        </Button>
        <Button mode='text' onPress={onCancelPress}>
          {t('general.cancel')}
        </Button>
      </View>
    </>
  );
};
