import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<StackParamList, 'AddEditCode'>;

export const AddEditScreen = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const {type, value, editMode} = route.params;

  useEffect(() => {
    if (editMode) {
      navigation.setOptions({headerTitle: t('navigation.edit-code')});
    } else {
      navigation.setOptions({headerTitle: t('navigation.add-code')});
    }
  }, [editMode, navigation, t]);

  return (
    <View>
      <Text>{`Type: ${type} value: ${value ?? 'not set'}`}</Text>
    </View>
  );
};
