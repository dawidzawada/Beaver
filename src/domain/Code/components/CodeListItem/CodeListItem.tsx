import React from 'react';
import {Icon, Text} from 'react-native-paper';
import {useCodeListItemStyles} from './CodeListItem.styles.ts';
import {TouchableOpacity, View} from 'react-native';

type Props = {
  type: 'qr' | 'barcode';
  name: string;
  onPress: () => void;
};

export const CodeListItem = ({type, name, onPress}: Props) => {
  const {Wrapper, Box, Title} = useCodeListItemStyles();

  return (
    <TouchableOpacity style={Wrapper} onPress={onPress}>
      <View style={Box}>
        <Icon size={80} source={type === 'qr' ? 'qrcode' : 'barcode'} />
      </View>
      <Text style={Title}>{name}</Text>
    </TouchableOpacity>
  );
};
