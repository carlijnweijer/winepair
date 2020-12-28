import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { windowHeight, windowWidth } from "../utils/dimentions";

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "white",
    borderRadius: windowHeight / 30,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#000",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

interface FormInputProps {
  labelValue?: string;
  placeholderText: string;
  iconType: any;
  // All other props
  [x: string]: any;
}

export const FormInput: React.FC<FormInputProps> = ({
  labelValue,
  placeholderText,
  iconType,
  ...rest
}) => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <FontAwesome name={iconType} size={24} color="white" />
        </View>
        <TextInput
          style={styles.input}
          value={labelValue}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor="#9e9e9e"
          {...rest}
        />
      </View>
    );
  }
};
