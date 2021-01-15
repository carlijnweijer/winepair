import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold_Italic,
} from "@expo-google-fonts/playfair-display";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { secrets } from "../../../firebase";
import { FormInput } from "../../components/FormInput";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { HomeStackNavProps } from "../../navigation/homeStack/HomeParamList";
import { colors } from "../../utils/colors";
import { windowHeight, windowWidth } from "../../utils/dimentions";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f9fafd",
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    height: windowHeight,
    alignItems: "center",
    paddingLeft: 20,
  },
  keyboardContainer: {
    flex: 1,
  },
  textBox: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 35,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    fontSize: 30,
    color: "#333333",
    fontFamily: "PlayfairDisplay_400Regular_Italic",
  },
  headerBold: {
    fontFamily: "PlayfairDisplay_700Bold_Italic",
  },
  image: {
    // position: "relative",
    // left: 70,
    height: 300,
    width: 300,
  },
  subtitle: {
    alignSelf: "flex-start",
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 15,
    marginVertical: 10,
  },
  logoutBtn: {
    position: "absolute",
    top: 100,
    right: 0,
    margin: 10,
  },
  square: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.55,
    backgroundColor: "lightgrey",
    borderBottomRightRadius: windowHeight * 0.05,
  },
});

const Square = () => {
  return <View style={styles.square} />;
};

interface HomeScreenProps {}

export const HomeScreen = ({
  navigation,
  route,
}: HomeStackNavProps<"Home">) => {
  const { logout } = useContext(AuthContext);
  const apiUrl = secrets.apiUrl;
  const apiKey = secrets.apikey;
  const query = "steak";

  // const getPairing = async () => {
  //   const response = await axios.get(
  //     `${apiUrl}/pairing?apiKey=${apiKey}&food=${query}`
  //   );
  //   console.log("response is, ", response.data);
  // };

  // useEffect(() => {
  //   getPairing();
  // }, []);
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_700Bold_Italic,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.red} />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Square />
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.header}>Find a </Text>
          <Text style={[styles.header, styles.headerBold]}>wine</Text>
          <Text style={styles.header}>that goes well with a </Text>
          <Text style={[styles.header, styles.headerBold]}>food</Text>
        </View>

        <View style={styles.subtitle}>
          <Text style={styles.text}>
            Food can be a dish name "steak", an ingredient name "salmon", or a
            cuisine "italian"
          </Text>
        </View>
        <Image
          style={styles.image}
          source={require("../../../assets/wines.png")}
        />
        <FormInput placeholderText="search" iconType="search" />
      </View>
      <View style={{ flex: 1 }} />
    </KeyboardAvoidingView>
  );
};
