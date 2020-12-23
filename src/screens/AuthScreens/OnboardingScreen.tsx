import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { AuthNavProps } from "../../AuthParamList";

export const OnboardingScreen = ({
  navigation,
  route,
}: AuthNavProps<"Onboarding">) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/favicon.png")} />,
          title: "Onboarding1",
          subtitle: "Done with React Native Onboarding Swiper",
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
