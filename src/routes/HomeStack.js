import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const HomeStack = createStackNavigator();

const HomeStackScreens = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreens;
