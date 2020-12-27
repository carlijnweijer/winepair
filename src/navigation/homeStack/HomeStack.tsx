import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, StyleSheet } from "react-native";
import { HomeScreen } from "../../screens/AuthScreens/HomeScreen";
import { AuthContext } from "../authStack/AuthProvider";

interface HomeStackProps {}

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerRight: () => {
            return (
              <Button
                title="logout"
                onPress={() => {
                  logout();
                }}
              />
            );
          },
        }}
        component={HomeScreen}
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
