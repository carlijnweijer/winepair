import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FormButton } from "../../components/FormButton";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { HomeStackNavProps } from "../../navigation/homeStack/HomeParamList";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});

interface HomeScreenProps {}

export const HomeScreen = ({
  navigation,
  route,
}: HomeStackNavProps<"Home">) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <FormButton
        buttonTitle="logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};
