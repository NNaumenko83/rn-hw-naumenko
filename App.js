import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign="center"
              secureTextEntry={true}
            />
          </View>
          <Button
            // onPress={onPressLearnMore}
            title="SIGN IN"
            color="#841584"
            // accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  text: { color: "white", fontSize: 20 },
  innerBox: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    // alignItems: "center",
    resizeMode: "cover",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 5,

    color: "white",
  },
  form: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  inputTitle: { color: "white", marginBottom: 5, fontSize: 18 },
});
