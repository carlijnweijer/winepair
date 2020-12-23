import { Lato_400Regular } from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import AppLoading from "expo-app-loading";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { AuthNavProps } from "../../navigation/AuthParamList";

export const OnboardingScreen = ({
  navigation,
  route,
}: AuthNavProps<"Onboarding">) => {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular_Italic,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let paddingVertical = 6;

  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: (
            <Text
              style={{
                fontSize: 30,
                paddingVertical,
                fontFamily: "PlayfairDisplay_400Regular_Italic",
              }}
            >
              First onboarding screen
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontSize: 18,
                paddingVertical,
                // Note the quoting of the value for `fontFamily` here; it expects a string!
                fontFamily: "Lato_400Regular",
              }}
            >
              Find a dish that goes well with a given wine.
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: (
            <Text
              style={{
                fontSize: 30,
                paddingVertical,
                fontFamily: "PlayfairDisplay_400Regular_Italic",
              }}
            >
              Second onboarding screen
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontSize: 18,
                paddingVertical,
                // Note the quoting of the value for `fontFamily` here; it expects a string!
                fontFamily: "Lato_400Regular",
              }}
            >
              Find a wine that goes well with a food. Food can be a dish name
              "steak", an ingredient name "salmon", or a cuisine "italian".
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: (
            <Text
              style={{
                fontSize: 30,
                paddingVertical,
                fontFamily: "PlayfairDisplay_400Regular_Italic",
              }}
            >
              Last onboarding screen
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontSize: 18,
                paddingVertical,
                // Note the quoting of the value for `fontFamily` here; it expects a string!
                fontFamily: "Lato_400Regular",
              }}
            >
              Get a simple description of a certain wine, e.g. "malbec",
              "riesling", or "merlot".
            </Text>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
