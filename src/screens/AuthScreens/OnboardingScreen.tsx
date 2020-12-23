import { Lato_400Regular } from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import AppLoading from "expo-app-loading";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { AuthNavProps } from "../../AuthParamList";

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

  let fontSize = 24;
  let paddingVertical = 6;

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: (
            <Text
              style={{
                fontSize,
                paddingVertical,
                fontFamily: "PlayfairDisplay_400Regular_Italic",
              }}
            >
              Playfair Display Regular
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontSize,
                paddingVertical,
                // Note the quoting of the value for `fontFamily` here; it expects a string!
                fontFamily: "Lato_400Regular",
              }}
            >
              Lato Regular
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: "Onboarding2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: "Onboarding3",
          subtitle: "Done with React Native Onboarding Swiper",
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
