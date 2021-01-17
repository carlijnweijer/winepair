import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import {
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold_Italic,
} from "@expo-google-fonts/playfair-display";
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
  nonBlurredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    overflow: "hidden",
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
            intensity={100}
            style={[styles.nonBlurredContent, { height: "100%" }]}
          >
            <Text>Hello! I am bluring contents underneath</Text>

            <Text>Hello from the modal</Text>
            <TouchableOpacity
              style={{ backgroundColor: "red", width: 30, height: 30 }}
              onPress={() => setFilterScreen(!filterScreen)}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </Modal>

      <KeyboardAvoidingView style={styles.content}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.input}>
          <TextInput style={styles.inputLabel} placeholder="by wine" />
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
