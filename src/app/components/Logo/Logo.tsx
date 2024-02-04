import React from 'react';
import {View} from 'react-native';
import LogoIcon from '@app/assets/icons/LogoIcon.tsx';
import {styles} from '@app/components/Logo/Logo.styles.ts';

export const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <LogoIcon />
    </View>
  );
};
