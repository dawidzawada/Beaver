import React from 'react';
import {SectionList, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {useTranslation} from 'react-i18next';
import {mostlyUsedCodes} from '@domain/Code/constans/MostlyUsedCodes.constans.ts';
import {otherCodes} from '@domain/Code/constans/OtherCodes.constans.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BwipCodeTypes} from 'bwip-js';
import {useStyles} from 'react-native-unistyles';
import {chooseTypeStyleSheet} from './ChooseTypeScreen.styles.ts';
import {Divider} from '@app/components/Divider.tsx';

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
  const {styles} = useStyles(chooseTypeStyleSheet);
  const {t} = useTranslation();

  const onTypePress = (type: BwipCodeTypes) => {
    navigation.navigate('AddEditCode', {type});
  };

  return (
    <SafeAreaView testID='choose-type' style={styles.screenWrapper}>
      <SectionList
        sections={codes}
        renderSectionHeader={({section: {title}}) => <Text style={styles.sectionTitle}>{title}</Text>}
        renderItem={({item}) => (
          <TouchableOpacity testID={`type-${item}`} style={styles.codeItem} onPress={() => onTypePress(item)}>
            <Text style={styles.codeItemText}>{`${t(`code.${item}`)} (${item})`}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Divider}
        SectionSeparatorComponent={Divider}
      />
    </SafeAreaView>
  );
};
