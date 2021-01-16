import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreens/HomeScreen";
import { SearchScreen } from "../../screens/HomeScreens/SearchScreen";

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
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};
