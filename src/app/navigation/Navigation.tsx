import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from '@screen/ListScreen/ListScreen.tsx';
import {CodeOverviewScreen} from '@screen/CodeOverviewScreen/CodeOverviewScreen.tsx';
import {ScannerScreen} from '@screen/ScannerScreen/ScannerScreen.tsx';
import {AddEditScreen} from '@screen/AddEditScreen/AddEditScreen.tsx';
import {BeaverScreen} from '@screen/BeaverScreen/BeaverScreen.tsx';
import {StackParamList} from '@app/navigation/StackParamList.type.ts';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListScreen} options={{headerShown: false}} />
        <Stack.Screen name='CodeOverview' component={CodeOverviewScreen} />
        <Stack.Screen name='Scanner' component={ScannerScreen} options={{headerShown: false}} />
        <Stack.Screen name='AddEditCode' component={AddEditScreen} />
        <Stack.Screen name='Beaver' component={BeaverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
