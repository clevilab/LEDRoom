import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyFavoriteMusicScreen from "../screens/favoriteMusic"
import MyProfileScreen from "../screens/profile"

const Tab = createBottomTabNavigator();

const LoggedInNavigation = ({accessToken}) => { 
    function MyFavoriteMusicScreenS() {
        return(
          <MyFavoriteMusicScreen accessToken = {accessToken} />
        );
      }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My favorite music" component={MyFavoriteMusicScreenS} />
        <Tab.Screen name="Profile" component={MyProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default LoggedInNavigation;