import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../screens/login"
import HomeScreen from "../screens/home"

const Tab = createBottomTabNavigator();

export default function GuestNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}