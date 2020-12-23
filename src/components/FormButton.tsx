import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowHeight } from "../utils/dimentions";

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Lato-Regular",
  },
});
interface FormButtonProps {
  buttonTitle: String;
}

export const FormButton: React.FC<FormButtonProps> = ({ buttonTitle }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
