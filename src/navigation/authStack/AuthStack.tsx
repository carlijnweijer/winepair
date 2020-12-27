import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LoginScreen } from "../../screens/AuthScreens/LoginScreen";
import { SignupScreen } from "../../screens/AuthScreens/SignupScreen";
import { AuthParamList } from "./AuthParamList";

interface AuthStackProps {}
const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<null | Boolean>(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ header: () => null }}
          component={LoginScreen}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ header: () => null }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "#f9fafd",
              shadowColor: "#f9fafd",
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{ marginLeft: 15 }}>
                <FontAwesome
                  name={"long-arrow-left"}
                  size={24}
                  backgroundColor="#f9fafd"
                  color="black"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            ),
          })}
          component={SignupScreen}
        />
      </Stack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
