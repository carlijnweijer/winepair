import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { FontAwesome } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowHeight } from "../utils/dimentions";

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    padding: 10,
    flexDirection: "row",
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Lato_400Regular",
  },
});
interface SocialLoginButtonProps {
  buttonTitle: String;
  buttonType: any;
  color: any;
  backgroundColor: any;
  [x: string]: any;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  buttonTitle,
  buttonType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  let textColor = color;
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: bgColor }]}
        {...rest}
      >
        <View style={styles.iconWrapper}>
          <FontAwesome name={buttonType} size={24} color="white" />
        </View>
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, { color: textColor }]}>
            {buttonTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};
