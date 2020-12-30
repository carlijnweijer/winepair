import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { HomeStack } from "../homeStack/HomeStack";
import { AppParamList } from "./AppParamList";
interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function MyProfile() {
  return (
    <View style={styles.container}>
      <Text>MyProfile Page</Text>
    </View>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome5 name="wine-bottle" size={18} color="white" />;
          } else if (route.name === "MyProfile") {
            return <FontAwesome5 name="user-alt" size={18} color="white" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.red,
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "black",
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="MyProfile" component={MyProfile} />
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
