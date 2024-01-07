import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useTranslation} from 'react-i18next';
import {useAddEditScreenStyles} from '@screen/AddEditScreen/AddEditScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from 'react-native-paper';
import {CodeDrawer} from '@domain/Code/components/CodeDrawer/CodeDrawer.tsx';
import {useCodesStore} from '@store/codes.store';

type Props = NativeStackScreenProps<StackParamList, 'AddEditCode'>;

export const AddEditScreen = ({route, navigation}: Props) => {
  const {AddEditScreenWrapper, Box, CodeView, Spacer} = useAddEditScreenStyles();
  const {t} = useTranslation();
  const {type, value, editMode} = route.params;

  const [codeValue, setCodeValue] = useState<string | undefined>(value);
  const [title, setTitle] = useState<string>('');
  const [codeViewWidth, setCodeViewWidth] = useState<number>();

  const addCode = useCodesStore(state => state.addCode);

  const isDataProvided = useMemo(() => {
    return !!(codeValue && codeValue?.length > 0 && title.length > 0);
  }, [codeValue, title.length]);

  const onCancelPress = () => {
    navigation.navigate('List');
  };

  const onAddPress = () => {
    if (isDataProvided) {
      addCode({type, value: codeValue ?? '', title});
      navigation.navigate('List');
    }
  };

  useEffect(() => {
    if (editMode) {
      navigation.setOptions({headerTitle: t('navigation.edit-code')});
    } else {
      navigation.setOptions({headerTitle: t('navigation.add-code')});
    }
  }, [editMode, navigation, t]);

  return (
    <SafeAreaView style={AddEditScreenWrapper}>
      <View style={Box}>
        <View style={CodeView} onLayout={e => setCodeViewWidth(e.nativeEvent.layout.width)}>
          <CodeDrawer type={type} value={codeValue} codeContainerWidth={codeViewWidth} />
        </View>
        <TextInput mode='outlined' label={t('add-edit.code-type')} value={`(${type}) ${t(`code.${type}`)}`} disabled />
        <TextInput
          mode='outlined'
          label={t('add-edit.code-value')}
          placeholder={t('add-edit.code-value.placeholder')}
          value={codeValue}
          onChangeText={valueText => setCodeValue(valueText)}
        />
        <TextInput
          mode='outlined'
          label={t('add-edit.code-title')}
          placeholder={t('add-edit.code-title.placeholder')}
          maxLength={45}
          value={title}
          onChangeText={titleText => setTitle(titleText)}
        />
      </View>
      <View style={Spacer} />
      <View style={Box}>
        <Button mode='contained' disabled={!isDataProvided} onPress={onAddPress}>
          {editMode ? t('general.edit') : t('general.add')}
        </Button>
        <Button mode='text' onPress={onCancelPress}>
          {t('general.cancel')}
        </Button>
      </View>
    </SafeAreaView>
  );
};
