import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserAvatar from '@src/components/UserAvatar';
import {ScreenNavigationProp} from '@src/types';
import React from 'react';
import {Icon} from 'react-native-elements';
import History from '../History';
import Home from '../Home';
import User from '../User';

const Tab = createBottomTabNavigator();

export default function HomeTab({
  navigation,
}: {
  navigation: ScreenNavigationProp;
}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return (
            <Icon
              name={route.name.toLowerCase()}
              color={color}
              size={size}
              type="font-awesome-5"
              tvParallaxProperties=""
            />
          );
        },
        tabBarHideOnKeyboard: true,
        headerRight: () => {
          return route.name !== 'User' ? (
            <UserAvatar navigation={navigation} />
          ) : null;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
