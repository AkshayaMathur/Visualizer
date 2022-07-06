import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreens from './HomeStack';
import {Image} from 'react-native';
import HomeImage from '../assets/Images/Home.png';
import ProfileImage from '../assets/Images/Profile_tab.png';
import HomeScreen from '../pages/HomeScreen';
const BottomTab = createBottomTabNavigator();

const BottomTabScreens = ({navigation}) => (
  <BottomTab.Navigator
    detachInactiveScreens={true}
    tabBarOptions={{
      activeTintColor: 'black',
      showLabel: false,
      lazy: true,
      detachInactiveScreens: true,
      keyboardHidesTabBar: true,
    }}>
    <BottomTab.Screen
      name="HomeStackScreenssssss"
      component={HomeStackScreens}
      detachInactiveScreens={true}
      unmountOnBlur={true}
      // listeners={({navigation}) => ({
      //   tabPress: (e) => {
      //     e.preventDefault();
      //     navigation.navigate('HomeStackScreen', {
      //       screen: 'Dashboard',
      //     });
      //   },
      // })}
      options={{
        detachInactiveScreens: true,
        unmountOnBlur: true,
        headerShown: false,
        tabBarIcon: ({color, size}) =>
          color === 'black' ? (
            <Image
              source={HomeImage}
              style={{
                width: size,
                height: size,
                // tintColor: '#00CFAA',
              }}
            />
          ) : (
            <Image
              source={HomeImage}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
      }}
    />
    <BottomTab.Screen
      name="Explaination"
      component={HomeScreen}
      detachInactiveScreens={true}
      unmountOnBlur={true}
      // listeners={({navigation}) => ({
      //   tabPress: (e) => {
      //     e.preventDefault();
      //     navigation.navigate('HomeStackScreen', {
      //       screen: 'Dashboard',
      //     });
      //   },
      // })}
      options={{
        detachInactiveScreens: true,
        unmountOnBlur: true,
        headerShown: false,
        tabBarIcon: ({color, size}) =>
          color === 'black' ? (
            <Image
              source={ProfileImage}
              style={{
                width: size,
                height: size,
                // tintColor: '#00CFAA',
              }}
            />
          ) : (
            <Image
              source={ProfileImage}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabScreens;
// <Tab.Navigator>
//   <Tab.Screen name="Home" component={HomeStackScreen} />
//   {/* <Tab.Screen name="SettingsScreen" component={SettingsScreen} /> */}
//   <Tab.Screen name="Profile" component={ProfileStackScreen} />
// </Tab.Navigator>
