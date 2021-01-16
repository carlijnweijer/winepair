import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { AuthContext } from "../authStack/AuthProvider";
import { AuthStack } from "../authStack/AuthStack";
import { HomeStack } from "../homeStack/HomeStack";
import { AppParamList } from "./AppParamList";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function MyProfile() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>MyProfile Page</Text>
      <MaterialIcons
        style={styles.logoutBtn}
        name="logout"
        size={24}
        color={colors.red}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

function myFavorites() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>favorites Page</Text>
      <MaterialIcons
        style={styles.logoutBtn}
        name="logout"
        size={24}
        color={colors.red}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Search") {
            return <MaterialIcons name="wine-bar" size={size} color={color} />;
          } else if (route.name === "MyProfile") {
            return <FontAwesome name="user" size={size} color={color} />;
          } else if (route.name === "MyFavorites") {
            return (
              <MaterialIcons
                name="favorite-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.red,
        inactiveTintColor: colors.lightgrey,
        style: {
          backgroundColor: colors.darkbg,
          borderTopColor: "transparent",
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen name="Search" component={HomeStack} />
      <Tabs.Screen
        name="MyFavorites"
        component={user ? myFavorites : AuthStack}
      />
      <Tabs.Screen name="MyProfile" component={user ? MyProfile : AuthStack} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    position: "absolute",
    top: 45,
    right: 5,
    margin: 10,
  },
});
