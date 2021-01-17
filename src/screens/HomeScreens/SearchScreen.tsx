import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold_Italic,
} from "@expo-google-fonts/playfair-display";
import axios from "axios";
import { BlurView } from "expo-blur";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
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
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 33,
    fontFamily: "PlayfairDisplay_400Regular_Italic",
    width: 265,
    textAlign: "center",
    letterSpacing: 0.75,
    marginVertical: 22.5,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    width: 274,
    height: 56,
    backgroundColor: colors.lightgrey,
    borderRadius: 32,
    flex: 1,
    fontSize: 15,
    fontFamily: "Lato_700Bold",
    textAlign: "center",
  },
  inputTxt: {
    fontFamily: "Lato_700Bold",
    textTransform: "uppercase",
    fontSize: 16,
    color: "white",
    flex: 1,
    marginLeft: 15,
    letterSpacing: 0.75,
  },
  iconStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    width: 31,
    backgroundColor: colors.red,
    borderRadius: 54,
    marginLeft: 10,
  },
  modal: {
    overflow: "hidden",
  },
  nonBlurredContent: {
    marginTop: 40,
    alignItems: "center",
  },
  closeBtn: {
    marginTop: 20,
    marginRight: 5,
    width: 30,
    height: 30,
  },
  modalTxt: {
    width: 272,
    marginTop: 30,
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
  modalTxtBold: {
    fontFamily: "Lato_700Bold",
  },
  filters: {
    flexDirection: "row",
    alignContent: "space-around",
  },
  filterBtn: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    width: 107,
    height: 107,
    borderRadius: 18,
  },
});

interface HomeScreenProps {}

export const SearchScreen = ({
  navigation,
  route,
}: HomeStackNavProps<"Home">) => {
  const { logout } = useContext(AuthContext);

  const [filter, setFilter] = useState("wine");
  const [filterScreen, setFilterScreen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const apiUrl =
    filter === "wine"
      ? "https://api.spoonacular.com/food/wine/dishes?wine="
      : "https://api.spoonacular.com/food/wine/pairing?food=";
  const apiKey = secrets.apikey;

  const getPairing = async () => {
    const response = await axios.get(`${apiUrl}${searchText}&apiKey=${apiKey}`);
    console.log("response is ", response.data);
  };

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_700Bold_Italic,
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.red} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Modal
        visible={filterScreen}
        animationType="slide"
        transparent={true}
        style={styles.modal}
      >
        <View style={{ marginTop: 100, flex: 1 }}>
          <BlurView
            intensity={95}
            style={[
              styles.nonBlurredContent,
              { height: "100%", backgroundColor: "#9F9F9F" },
            ]}
          >
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setFilterScreen(!filterScreen)}
              >
                <Image
                  source={require("../../../assets/iconclose.png")}
                  style={{ height: 15, width: 15 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.filters}>
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  {
                    backgroundColor:
                      filter === "wine" ? colors.red : colors.lightgrey,
                  },
                ]}
                onPress={() => setFilter("wine")}
              >
                <Image
                  source={require("../../../assets/winefilter.png")}
                  style={{ height: 72, width: 87 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  {
                    backgroundColor:
                      filter === "meal" ? colors.red : colors.lightgrey,
                  },
                ]}
                onPress={() => setFilter("meal")}
              >
                <Image
                  source={require("../../../assets/mealfilter.png")}
                  style={{ height: 46, width: 90 }}
                />
              </TouchableOpacity>
            </View>
            {filter === "wine" ? (
              <View>
                <Text style={[styles.modalTxt, styles.modalTxtBold]}>
                  Find a dish that goes well with a given wine
                </Text>
                <Text style={styles.modalTxt}>
                  For example: search for Malbec
                </Text>
              </View>
            ) : (
              <View>
                <Text style={[styles.modalTxt, styles.modalTxtBold]}>
                  Find a wine that goes well with a food
                </Text>
                <Text style={styles.modalTxt}>
                  Food can be a dish name "steak", an ingredient name "salmon",
                  or a cuisine "italian"
                </Text>
              </View>
            )}
          </BlurView>
        </View>
      </Modal>

      <KeyboardAvoidingView style={styles.content}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputLabel}
            placeholder={
              filter === "wine" ? "by wine" : "by ingredient, dish or cuisine"
            }
            onChangeText={(text) => {
              setSearchText(text);
              console.log(text);
            }}
            onSubmitEditing={getPairing}
          />
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => setFilterScreen(!filterScreen)}
          >
            <Image
              source={require("../../../assets/Iconly/Filter.png")}
              style={{ height: 16, width: 16 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Image source={require("../../../assets/winebackground.png")} />
    </SafeAreaView>
  );
};
