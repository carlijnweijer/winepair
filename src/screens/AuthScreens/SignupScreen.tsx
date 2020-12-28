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
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FormButton } from "../../components/FormButton";
import { FormInput } from "../../components/FormInput";
import { AuthNavProps } from "../../navigation/authStack/AuthParamList";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { windowHeight } from "../../utils/dimentions";

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
    height: windowHeight,
  },
  text: {
    textAlign: "center",
    fontFamily: "Lato_400Regular",
    fontSize: 28,
    color: "white",
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 145,
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 15,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Lato_400Regular",
    color: "grey",
  },
  forgotButton: {
    marginVertical: 35,
  },
});

export const SignupScreen = ({ navigation, route }: AuthNavProps<"Login">) => {
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    PlayfairDisplay_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/winepoor.png")}
        />
        <Text
          style={[
            styles.text,
            { fontFamily: "PlayfairDisplay_600SemiBold_Italic" },
          ]}
        >
          Create an account
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
        <FormInput
          placeholderText="Confirm Password"
          onChangeText={(userConfirmPassword: React.SetStateAction<any>) =>
            setConfirmPassword(userConfirmPassword)
          }
          iconType="lock"
          labelValue={confirmPassword}
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign up"
          onPress={() => register(email!, confirmPassword!)}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{" "}
          </Text>
          <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
            <Text style={[styles.color_textPrivate, { color: "#de4d41" }]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, { color: "#de4d41" }]}>
            Privacy Policy
          </Text>
        </View>

        {/* <SocialLoginButton
          buttonTitle="Sign up with Google"
          buttonType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => alert("google got clicked")}
        /> */}
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Already have an account? Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
};
