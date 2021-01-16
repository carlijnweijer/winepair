import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreens/HomeScreen";
import { AppTabs } from "../appStack/AppTabs";

interface HomeStackProps {}

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          header: () => null,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Search"
        options={{
          header: () => null,
        }}
        component={AppTabs}
      />
    </Stack.Navigator>
  );
};
