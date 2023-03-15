import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const backgroundImage = require("./assets/images/bg_new.png");

export default function App() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   // "Inter-VariableFont": require("./assets/fonts/Inter-VariableFont.ttf"),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // if (!fontsLoaded) {
  //   return undefined;
  // } else {
  //   SplashScreen.hideAsync();
  // }

  const setShowKeyboard = () => {
    setKeyboardStatus(true);
  };

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        keyboardHide();
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image}>
          <RegistrationScreen
            showKeyboard={keyboardStatus}
            setShowKeyboard={setShowKeyboard}
          />
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
