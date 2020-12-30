import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { AuthParamList } from "./authStack/AuthParamList";
import { AuthContext } from "./authStack/AuthProvider";
import { HomeStack } from "./homeStack/HomeStack";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    console.log("user is ", user);

    const subscriber = firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscrible on unmount
  }, []);

  return (
    <NavigationContainer>
      <HomeStack />
      {/* {user ? <HomeStack /> : <AuthStack />} */}
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
