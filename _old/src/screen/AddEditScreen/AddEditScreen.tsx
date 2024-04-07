import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useTranslation} from 'react-i18next';
import {addEditScreenStylesheet} from './AddEditScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from 'react-native-unistyles';
import {useCodesStore} from '@store/codes.store.ts';
import {CodeForm} from '@domain/Code/components/CodeForm/CodeForm.tsx';

type Props = NativeStackScreenProps<StackParamList, 'AddEditCode'>;

export const AddEditScreen = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const {styles} = useStyles(addEditScreenStylesheet);
  const {type, value, editMode} = route.params;

  const addCode = useCodesStore(state => state.addCode);

  const onCancel = () => {
    navigation.navigate('List');
  };

  const onAdd = (codeValue: string, title: string) => {
    addCode({type, value: codeValue, title});
    navigation.navigate('List');
  };

  useEffect(() => {
    if (editMode) {
      navigation.setOptions({headerTitle: t('navigation.edit-code')});
    } else {
      navigation.setOptions({headerTitle: t('navigation.add-code')});
    }
  }, [editMode, navigation, t]);

  return (
    <SafeAreaView style={styles.screenWrapper} testID='add-edit'>
      <CodeForm type={type} value={value} onAdd={onAdd} onCancel={onCancel} editMode={!!editMode} />
    </SafeAreaView>
  );
};
