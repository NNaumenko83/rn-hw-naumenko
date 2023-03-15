import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
} from "react-native";

import { useState, useEffect } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const btnImg = require("../../../assets/images/add.png");

export default RegistrationScreen = ({ toggleVisibleScreen }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [state, setState] = useState(initialState);
  const [isSequre, setIsSequre] = useState(true);

  const setShowKeyboard = () => {
    setKeyboardStatus(true);
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
  });

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  const toggleSequrePassword = () => {
    setIsSequre(!isSequre);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <View
          style={[
            styles.photoConteiner,
            {
              transform: [{ translateX: -60 }],
            },
          ]}
        >
          <TouchableOpacity style={styles.addbutton} activeOpacity={0.5}>
            <ImageBackground
              source={btnImg}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Регистрация</Text>
        </View>
        <TextInput
          style={styles.input}
          inputMode="text"
          placeholder={"Логин"}
          placeholderTextColor={"#BDBDBD"}
          value={state.login}
          onFocus={() => {
            setShowKeyboard();
          }}
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, login: value }));
          }}
        />
        <TextInput
          style={{ ...styles.input, marginTop: 16 }}
          inputMode="email"
          placeholder={"Адрес электронной почты"}
          placeholderTextColor={"#BDBDBD"}
          value={state.email}
          onFocus={() => {
            setShowKeyboard();
          }}
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, email: value }));
          }}
        />
        <View
          style={{
            marginTop: 16,
            height: 50,
            marginBottom: keyboardStatus ? 32 : 0,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder={"Пароль"}
            placeholderTextColor={"#BDBDBD"}
            value={state.password}
            secureTextEntry={isSequre}
            onFocus={() => {
              setShowKeyboard();
            }}
            onChangeText={(value) => {
              setState((prevState) => ({ ...prevState, password: value }));
            }}
          />
          <TouchableOpacity
            style={styles.showPass}
            onPress={toggleSequrePassword}
          >
            <Text style={[styles.showPass]}>Показать</Text>
          </TouchableOpacity>
        </View>

        {!keyboardStatus && (
          <>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                toggleVisibleScreen("LogIn");
              }}
              style={{
                marginBottom: 78,
                alignItems: "center",
                // borderWidth: 1,
                marginHorizontal: 95,
              }}
            >
              <Text style={styles.toggleButton}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  photoConteiner: {
    marginTop: -60,
    left: "50%",

    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  container: { justifyContent: "flex-end" },
  input: {
    marginHorizontal: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 6,
    fontSize: 16,
    lineHeight: 1.19,
    color: "#212121",
  },
  form: {
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#FFFFFF",
  },
  title: {
    marginHorizontal: 40,
    color: "#212121",
    marginBottom: 33,
    marginTop: 32,
    fontSize: 30,
    fontWeight: 500,
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 20,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
  },
  showPass: {
    fontSize: 16,
    top: 8,
    right: 20,
    position: "absolute",
  },
  btnTitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  toggleButton: {
    fontSize: 16,
    color: "#1B4371",
  },
});
