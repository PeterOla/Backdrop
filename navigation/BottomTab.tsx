import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants/config';
import {Fav} from '../tabs/Fav';
import {Feed} from '../tabs/Feed';
import {Theme, useThemeAwareObject} from '../theme';
import {BottomTabParam} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParam>();

export default function BottomTabMain() {
  const {styles, color} = useThemeAwareObject(createStyles);

  return (
    <BottomTab.Navigator
      initialRouteName="All"
      sceneContainerStyle={{backgroundColor: color.bg}}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: color.bg,
        tabBarInactiveBackgroundColor: color.bg,
        tabBarStyle: styles.tabbar,
      }}>
      <BottomTab.Screen
        name="All"
        component={Feed}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/images/cat.png')}
                style={[
                  styles.icon_size,
                  {tintColor: focused ? color.text : COLORS.bg_alt},
                ]}
              />
              <Text
                style={{
                  color: focused ? color.text : COLORS.bg_alt,
                  fontSize: 12,
                }}>
                All Cats
              </Text>
            </>
          ),
        }}
      />

      <BottomTab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../assets/images/love.png')}
                style={[
                  styles.icon_size,
                  {tintColor: focused ? color.text : COLORS.bg_alt},
                ]}
              />
              <Text
                style={{
                  color: focused ? color.text : COLORS.bg_alt,
                  fontSize: 12,
                }}>
                Cats I Like
              </Text>
            </>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const createStyles = (theme: Theme) => {
  const {color} = theme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.bg,
    },
    icon_size: {
      marginTop: 4,
      height: 22,
      width: 22,
      resizeMode: 'contain',
    },
    tabbar: {
      height: 90,
      paddingHorizontal: 5,
      paddingTop: 0,
      backgroundColor: color.bg,
      position: 'absolute',
      borderColor: color.text,
      borderTopWidth: 0.4,
    },
  });
  return {styles, color};
};
