import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ListScreen} from '@screen/ListScreen/ListScreen.tsx';
import {CodeOverviewScreen} from '@screen/CodeOverviewScreen/CodeOverviewScreen.tsx';
import {ScannerScreen} from '@screen/ScannerScreen/ScannerScreen.tsx';
import {AddEditScreen} from '@screen/AddEditScreen/AddEditScreen.tsx';
import {BeaverScreen} from '@screen/BeaverScreen/BeaverScreen.tsx';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';
import {ChooseTypeScreen} from '@screen/ChooseTypeScreen/ChooseTypeScreen.tsx';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const {t} = useTranslation();
  const {colors, dark} = useTheme();

  const screenOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerStyle: {
        backgroundColor: colors.surface,
      },
      headerTintColor: colors.onSurface,
    }),
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [dark],
  );

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
