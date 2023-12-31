import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useListScreenStyles} from '@screen/ListScreen/ListScreen.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ListScreen = () => {
  const {ListScreenWrapper} = useListScreenStyles();

  return (
    <SafeAreaView style={ListScreenWrapper}>
      <Text>List screen</Text>
      <Button icon='camera' mode='contained' onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </SafeAreaView>
  );
};
