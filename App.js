import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

const backgroundImage = require("./assets/images/bg_new.png");

export default function App() {
  const [visibleScreen, setVisibleScreen] = useState("SignIn");

  const toggleVisibleScreen = (screenName) => {
    setVisibleScreen(screenName);
  };
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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image}>
          {visibleScreen === "SignIn" ? (
            <RegistrationScreen toggleVisibleScreen={toggleVisibleScreen} />
          ) : (
            <LoginScreen toggleVisibleScreen={toggleVisibleScreen} />
          )}
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
