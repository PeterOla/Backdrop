/* eslint-disable no-shadow */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SCREENS} from '../constants/config';
import BottomTab from './BottomTab';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();

function AppNavigator(props: any) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREENS.HOME} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
