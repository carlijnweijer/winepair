import { Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold_Italic,
} from "@expo-google-fonts/playfair-display";
import React, { useContext } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { secrets } from "../../../firebase";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { HomeStackNavProps } from "../../navigation/homeStack/HomeParamList";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 33,
    fontFamily: "PlayfairDisplay_400Regular_Italic",
    width: 265,
    textAlign: "center",
    letterSpacing: 0.75,
  },
  button: {
    width: 274,
    height: 56,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTxt: {
    fontFamily: "Lato_700Bold",
    textTransform: "uppercase",
    fontSize: 16,
    color: "white",
    flex: 1,
    marginLeft: 15,
    letterSpacing: 0.75,
  },
});

interface HomeScreenProps {}

export const SearchScreen = ({
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
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.red} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Search</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonTxt}>get started</Text>
          <Image
            source={require("../../../assets/Iconly/arrowRight.png")}
            style={{ height: 41, width: 41, marginRight: 8 }}
          />
        </TouchableOpacity>
        <Image source={require("../../../assets/imgwoman.png")} />
      </View>
    </SafeAreaView>
  );
};
