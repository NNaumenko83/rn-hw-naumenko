import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const btnImg = require("../../../assets/images/add.png");

export default RegistrationScreen = ({ showKeyboard, setShowKeyboard }) => {
  const [state, setState] = useState(initialState);

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
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
        <TextInput
          style={{
            ...styles.input,
            marginTop: 16,
            marginBottom: showKeyboard ? 32 : 0,
          }}
          placeholder={"Пароль"}
          placeholderTextColor={"#BDBDBD"}
          value={state.password}
          secureTextEntry={true}
          onFocus={() => {
            setShowKeyboard();
          }}
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, password: value }));
          }}
        />
        <TouchableOpacity style={styles.showPass}>
          <Text>Показать</Text>
        </TouchableOpacity>

        {!showKeyboard && (
          <>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              //   onPress={ }
              style={{
                marginBottom: 78,
                alignItems: "center",
                // borderWidth: 1,
                marginHorizontal: 95,
              }}
            >
              <Text>Уже есть аккаунт? Войти</Text>
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

    borderWidth: 1,
    borderColor: "red",
  },
  container: { justifyContent: "flex-end" },
  input: {
    marginHorizontal: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 40,
    borderRadius: 6,
    fontSize: 16,
    lineHeight: 1.19,
    color: "#212121",
  },
  form: {
    borderWidth: 1,
    borderColor: "red",
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
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
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
    top: -28,
    left: 300,
  },
});
