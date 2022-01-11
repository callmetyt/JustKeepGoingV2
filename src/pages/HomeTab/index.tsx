import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon} from 'react-native-elements';
import History from '../History';
import Home from '../Home';
import User from '../User';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          console.log(route.name.toLowerCase());
          return (
            <Icon
              name={route.name.toLowerCase()}
              color={color}
              size={size}
              type="font-awesome-5"
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
