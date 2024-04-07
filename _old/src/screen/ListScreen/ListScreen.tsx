import React, {useState} from 'react';
import {listScreenStyleSheet} from '@screen/ListScreen/ListScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CodeListItem} from '@domain/Code/components/CodeListItem/CodeListItem.tsx';
import {Text, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useCodesStore} from '@store/codes.store.ts';
import {useTranslation} from 'react-i18next';
import {useStyles} from 'react-native-unistyles';
import {FloatingMenu} from '@app/components/FloatingMenu/FloatingMenu.tsx';
import {Logo} from '@app/components/Logo/Logo.tsx';
import {Backdrop} from '@app/components/Backdrop/Backdrop.tsx';

type Props = NativeStackScreenProps<StackParamList, 'List'>;

export const ListScreen = ({navigation}: Props) => {
  const {styles} = useStyles(listScreenStyleSheet);
  const {t} = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);

  const [codes, removeCode] = useCodesStore(state => [state.codes, state.removeCode]);

  const toggleMenu = () => setMenuOpened(open => !open);

  const onCodePress = () => {
    navigation.navigate('CodeOverview');
    setMenuOpened(false);
  };

  const onLongCodePress = (id: string) => {
    removeCode(id);
  };

  const onNewCodePress = () => {
    navigation.navigate('ChooseType');
    setMenuOpened(false);
  };

  const onScanCodePress = () => {
    navigation.navigate('Scanner');
    setMenuOpened(false);
  };

  return (
    <SafeAreaView style={styles.container} testID='list-screen'>
      <Logo />
      {codes.length === 0 && (
        <Text testID='no-codes' style={styles.noCodes}>
          {t('list.no-codes')}
        </Text>
      )}

      <FlatList
        data={codes}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <CodeListItem
            key={item.id}
            type='qrcode'
            name={item.title}
            onPress={onCodePress}
            onLongPress={() => onLongCodePress(item.id)}
          />
        )}
      />
      {menuOpened && <Backdrop onPress={() => setMenuOpened(false)} />}
      <FloatingMenu
        opened={menuOpened}
        onScanCodePress={onScanCodePress}
        onNewCodePress={onNewCodePress}
        onToggleMenu={toggleMenu}
      />
    </SafeAreaView>
  );
};
