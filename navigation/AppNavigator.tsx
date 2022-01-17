/* eslint-disable no-shadow */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {SCREENS} from '../constants/config';
import BottomTab from './BottomTab';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();

function AppNavigator(props: any) {
  const isDarkMode = useColorScheme() === 'dark';
  // const {setTheme, toggleTheme} = useTheme();

  useEffect(() => {
    //   setTheme(
    //     theme == ThemeEnum.DARK ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME,
    //   );

    setTimeout(() => {
      // SplashScreen.hide();
    }, 3500);
  }, []);

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
