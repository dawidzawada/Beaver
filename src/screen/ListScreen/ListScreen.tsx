import React, {useMemo, useState} from 'react';
import {IconButton, Text, useTheme} from 'react-native-paper';
import {useListScreenStyles} from '@screen/ListScreen/ListScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CodeListItem} from '@domain/Code/components/CodeListItem/CodeListItem.tsx';
import {ScrollView, TouchableOpacity, View, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useGrowAnimation} from '@app/hook/useGrowAnimation.ts';
import {useCodesStore} from '@store/codes.store.ts';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<StackParamList, 'List'>;

export const ListScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const {ListScreenWrapper, List, ButtonsBox, SubButtonsBox, Backdrop, NoCodes} = useListScreenStyles();
  const {colors} = useTheme();
  const [menuOpened, setMenuOpened] = useState(false);
  const growAnimation = useGrowAnimation({opened: menuOpened});

  const [codes, removeCode] = useCodesStore(state => [state.codes, state.removeCode]);

  const iconButtonsStyle = useMemo<ViewStyle>(
    () => ({
      display: menuOpened ? 'flex' : 'none',
      transform: [{scale: growAnimation}],
    }),
    [growAnimation, menuOpened],
  );

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
    <SafeAreaView style={ListScreenWrapper}>
      <Text variant='headlineLarge'>Beaver</Text>
      <ScrollView contentContainerStyle={List}>
        {codes.map(code => (
          <CodeListItem
            key={code.id}
            type='qr'
            name={code.title}
            onPress={onCodePress}
            onLongPress={() => onLongCodePress(code.id)}
          />
        ))}
        {codes.length === 0 && (
          <Text variant='titleLarge' style={NoCodes}>
            {t('list.no-codes')}
          </Text>
        )}
      </ScrollView>
      {menuOpened && <TouchableOpacity style={Backdrop} onPress={() => setMenuOpened(false)} />}
      <View style={ButtonsBox}>
        <View style={SubButtonsBox}>
          <IconButton
            icon='camera'
            size={30}
            mode='contained'
            containerColor={colors.primary}
            iconColor={colors.onPrimary}
            onPress={onScanCodePress}
            style={iconButtonsStyle}
          />
          <IconButton
            icon='text'
            size={30}
            mode='contained'
            containerColor={colors.primary}
            iconColor={colors.onPrimary}
            onPress={onNewCodePress}
            style={iconButtonsStyle}
          />
        </View>
        <IconButton
          icon={menuOpened ? 'minus' : 'plus'}
          onPress={toggleMenu}
          size={50}
          mode='contained'
          containerColor={colors.primary}
          iconColor={colors.onPrimary}
          animated
        />
      </View>
    </SafeAreaView>
  );
};
