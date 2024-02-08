import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

const Tab = createMaterialBottomTabNavigator(); // TODO: Allow to slide across screens

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        // tabBar={() => <Flex h="40px" bgColor={"purple.400"} />}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="black" size={26} />
            ),
          }}
          //   options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Restaurant"
          component={Restaurant} // TODO: This one doesn't belong in the navigation though
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="table-chair"
                color="black"
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
