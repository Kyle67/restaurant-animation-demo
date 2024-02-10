import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

const Tab = createMaterialBottomTabNavigator(); // TODO: Allow to slide across screens

const HomeComponent = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export type StackScreens = {
  HomeComponent: undefined;
  Restaurant: { restaurantId: string };
};

export type NavigationProps = NavigationProp<StackScreens>;

const Stack = createStackNavigator<StackScreens>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeComponent">
        <Stack.Screen
          name="HomeComponent"
          component={HomeComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
