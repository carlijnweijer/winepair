import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FormButton } from "../../components/FormButton";
import { FormInput } from "../../components/FormInput";
import { SocialLoginButton } from "../../components/SocialLoginButton";
import { AuthNavProps } from "../../navigation/AuthParamList";
import { AuthContext } from "../../navigation/AuthProvider";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
  },

  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 28,
    marginBottom: 10,
    color: "black",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato_400Regular",
  },
});

export const LoginScreen = ({ navigation, route }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={[{ width: 150 }, { height: 185 }]}
          source={require("../../../assets/winelady.png")}
        />
        <Text style={styles.text}>WinePair</Text>
        <FormInput
          placeholderText="Email"
          onChangeText={(userEmail: React.SetStateAction<any>) =>
            setEmail(userEmail)
          }
          iconType="user"
          keyboardType="email-address"
          labelValue={email}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          placeholderText="Password"
          onChangeText={(userPassword: React.SetStateAction<any>) =>
            setPassword(userPassword)
          }
          iconType="lock"
          labelValue={password}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Sign in"
          onPress={() => login(email!, password!)}
        />
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => alert("forgot password clicked")}
        >
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <SocialLoginButton
          buttonTitle="Sign in with Google"
          buttonType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => alert("facebook got clicked")}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Don't have an account yet?</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
