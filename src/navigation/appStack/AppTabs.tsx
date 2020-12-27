import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStack } from "../homeStack/HomeStack";
import { AppParamList } from "./AppParamList";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <AntDesign name="home" size={24} color="black" />;
          } else if (route.name === "Search") {
            return <AntDesign name="search1" size={24} color="black" />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
