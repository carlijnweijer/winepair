import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { PlayfairDisplay_600SemiBold_Italic } from "@expo-google-fonts/playfair-display";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FormButton } from "../../components/FormButton";
import { FormInput } from "../../components/FormInput";
import { AuthNavProps } from "../../navigation/authStack/AuthParamList";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { colors } from "../../utils/colors";
import { windowHeight } from "../../utils/dimentions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // paddingTop: 100,
    backgroundColor: colors.darkbg,
    height: windowHeight,
  },
  image: {
    height: 370,
    width: 300,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 38,
    marginBottom: 10,
    color: "white",
  },
  forgotButton: {
    marginTop: 25,
  },
  forgotButtonText: {
    color: "white",
    fontFamily: "Lato_400Regular",
  },
});

export const LoginScreen = ({ navigation, route }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_600SemiBold_Italic,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.red} />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/winelady.png")}
      />
      <Text
        style={[
          styles.text,
          { fontFamily: "PlayfairDisplay_600SemiBold_Italic" },
        ]}
      >
        WinePair
      </Text>
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
        <Text style={styles.forgotButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* <SocialLoginButton
          buttonTitle="Sign in with Google"
          buttonType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => alert("facebook got clicked")}
        /> */}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.forgotButtonText}>Don't have an account yet?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
