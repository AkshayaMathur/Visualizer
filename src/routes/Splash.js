import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Image, Dimensions, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/HomeScreen";
import SecondScreen from "../pages/SecondScreen";
import BottomTabScreens from "./BottomTab";

const Drawer = createDrawerNavigator();

const Splash = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          backgroundColor={"#540AE1"}
          barStyle="light-content"
        />
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>VISUALISATION</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={BottomTabScreens} />
        <Drawer.Screen name="SecondPage" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Splash;
