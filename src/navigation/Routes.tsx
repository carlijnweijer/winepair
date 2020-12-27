import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { AppTabs } from "./appStack/AppTabs";
import { AuthParamList } from "./authStack/AuthParamList";
import { AuthContext } from "./authStack/AuthProvider";
import { AuthStack } from "./authStack/AuthStack";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if user is logged in or not
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          //decode it
        }
        setLoading(false);
        console.log(userString);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
