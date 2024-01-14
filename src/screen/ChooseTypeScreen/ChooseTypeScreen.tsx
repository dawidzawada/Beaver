import React from 'react';
import {SectionList, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useTranslation} from 'react-i18next';
import {Divider, Text} from 'react-native-paper';
import {useChooseTypeScreenStyles} from '@screen/ChooseTypeScreen/ChooseTypeScreen.styles.ts';
import {mostlyUsedCodes} from '@domain/Code/constans/MostlyUsedCodes.constans.ts';
import {otherCodes} from '@domain/Code/constans/OtherCodes.constans.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BwipCodeTypes} from 'bwip-js';

type Props = NativeStackScreenProps<StackParamList, 'ChooseType'>;

const codes = [
  {
    title: 'Mostly used codes',
    data: mostlyUsedCodes,
  },
  {
    title: 'Other codes',
    data: otherCodes,
  },
];

export const ChooseTypeScreen = ({navigation}: Props) => {
  const {ChooseTypeScreenWrapper, CodeItem, SectionTitle} = useChooseTypeScreenStyles();
  const {t} = useTranslation();

  const onTypePress = (type: BwipCodeTypes) => {
    navigation.navigate('AddEditCode', {type});
  };

  return (
    <SafeAreaView testID='choose-type' style={ChooseTypeScreenWrapper}>
      <SectionList
        sections={codes}
        renderSectionHeader={({section: {title}}) => (
          <View style={SectionTitle}>
            <Text variant='titleMedium'>{title}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity testID={`type-${item}`} style={CodeItem} onPress={() => onTypePress(item)}>
            <Text variant='titleSmall'>{`${t(`code.${item}`)} (${item})`}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Divider}
        SectionSeparatorComponent={Divider}
      />
    </SafeAreaView>
  );
};
