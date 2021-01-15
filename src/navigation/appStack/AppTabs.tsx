import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  const { user, setUser } = useContext(AuthContext);
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
