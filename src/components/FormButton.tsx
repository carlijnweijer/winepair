import { Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils/colors";
import { windowHeight, windowWidth } from "../utils/dimentions";

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 3,
    height: windowHeight / 15,
    backgroundColor: colors.red,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowHeight / 30,
  },
  buttonText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "white",
    fontFamily: "Lato_700Bold",
  },
});
interface FormButtonProps {
  buttonTitle: String;
  // All other props
  [x: string]: any;
}

export const FormButton: React.FC<FormButtonProps> = ({
  buttonTitle,
  ...rest
}) => {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  }
};
