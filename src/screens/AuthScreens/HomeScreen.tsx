import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
} from "@expo-google-fonts/playfair-display";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { secrets } from "../../../firebase";
import { AuthContext } from "../../navigation/authStack/AuthProvider";
import { HomeStackNavProps } from "../../navigation/homeStack/HomeParamList";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    marginTop: 60,
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    marginTop: 45,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    textAlign: "right",
  },
  header: {
    fontSize: 30,
    color: "#333333",
    fontFamily: "PlayfairDisplay_600SemiBold_Italic",
  },
  headerBold: {
    fontFamily: "PlayfairDisplay_700Bold_Italic",
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
    top: 0,
    right: 0,
    margin: 10,
  },
});

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
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.red} />;
  }

  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.logoutBtn}
        name="logout"
        size={24}
        color={colors.red}
        onPress={() => {
          logout();
        }}
      />
      <View style={styles.headerText}>
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
    </View>
  );
};
