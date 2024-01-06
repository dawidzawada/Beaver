import React, {useMemo, useState} from 'react';
import {IconButton, Text, useTheme} from 'react-native-paper';
import {useListScreenStyles} from '@screen/ListScreen/ListScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CodeListItem} from '@domain/Code/components/CodeListItem/CodeListItem.tsx';
import {ScrollView, TouchableOpacity, View, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useGrowAnimation} from '@app/hook/useGrowAnimation.ts';

type Props = NativeStackScreenProps<StackParamList, 'List'>;

export const ListScreen = ({navigation}: Props) => {
  const {ListScreenWrapper, List, ButtonsBox, SubButtonsBox, Backdrop} = useListScreenStyles();
  const {colors} = useTheme();
  const [menuOpened, setMenuOpened] = useState(false);
  const growAnimation = useGrowAnimation({opened: menuOpened});

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
        <CodeListItem type='qr' name='Code #1' onPress={onCodePress} />
        <CodeListItem type='qr' name='Code #2' onPress={onCodePress} />
        <CodeListItem type='barcode' name='Code #3' onPress={onCodePress} />
        <CodeListItem type='qr' name='Code #4' onPress={onCodePress} />
        <CodeListItem type='qr' name='Code #5' onPress={onCodePress} />
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
