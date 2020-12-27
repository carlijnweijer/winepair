import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../authStack/AuthProvider";
import { HomeStackNavProps } from "./HomeParamList";

interface HomeStackProps {}

const Stack = createStackNavigator();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
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
        component={Feed}
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
