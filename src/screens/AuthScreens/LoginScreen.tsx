import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthNavProps } from "../../AuthParamList";
import { AuthContext } from "../../AuthProvider";

export const LoginScreen = ({ navigation, route }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          //   navigation.navigate("Register");
          login();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
