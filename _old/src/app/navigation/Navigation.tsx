import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ListScreen} from '@screen/ListScreen/ListScreen.tsx';
import {CodeOverviewScreen} from '@screen/CodeOverviewScreen/CodeOverviewScreen.tsx';
import {ScannerScreen} from '@screen/ScannerScreen/ScannerScreen.tsx';
import {AddEditScreen} from '@screen/AddEditScreen/AddEditScreen.tsx';
import {BeaverScreen} from '@screen/BeaverScreen/BeaverScreen.tsx';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {ChooseTypeScreen} from '@screen/ChooseTypeScreen/ChooseTypeScreen.tsx';
import {useTranslation} from 'react-i18next';
import {useStyles} from 'react-native-unistyles';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const {t} = useTranslation();
  const {theme} = useStyles();

  const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
    },
    headerTintColor: theme.colors.neutralContrast,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='List' component={ListScreen} options={{headerShown: false}} />
        <Stack.Screen
          name='CodeOverview'
          component={CodeOverviewScreen}
          options={{headerTitle: t('navigation.code-overview')}}
        />
        <Stack.Screen name='Scanner' component={ScannerScreen} options={{headerShown: false}} />
        <Stack.Screen
          name='ChooseType'
          component={ChooseTypeScreen}
          options={{headerTitle: t('navigation.choose-type')}}
        />
        <Stack.Screen name='AddEditCode' component={AddEditScreen} />
        <Stack.Screen name='Beaver' component={BeaverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
