import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthParamList } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";

interface AuthStackProps {}
const Stack = createStackNavigator<AuthParamList>();

function Login({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<AuthParamList, "Login">;
  route: RouteProp<AuthParamList, "Login">;
}) {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          navigation.navigate("Register");
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}

function Register({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<AuthParamList, "Register">;
  route: RouteProp<AuthParamList, "Register">;
}) {
  return (
    <View style={styles.container}>
      <Text>I am a register screen</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        options={{ headerTitle: "Sign up" }}
        component={Register}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
