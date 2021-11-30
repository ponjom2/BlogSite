import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Button,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

const statusbarHeight = StatusBar.currentHeight;
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;
const Height = dimensions.height;

const GroupTwo = () => {
  const [epost, setEpost] = useState(null);
  const [password, setPassword] = useState(null);

  const validate = () => {
    if (epost == "abc@gmail.com" && password == "123") alert("Inloggad");
    else alert("Fel e-post eller lösenord");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.top}>
          <Image source={require("../assets/icon.png")} alt="image" resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.text}>Enter your information below or signiup with social account.</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>E-post</Text>
          <TextInput
            style={styles.input}
            placeholder="E-post"
            onChangeText={(text) => setEpost(text)}
            defaultValue={epost}
          />
          <Text style={styles.text}>Lösenord</Text>
          <TextInput
            style={styles.input}
            placeholder="lösenord"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
            secureTextEntry={true}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => validate()}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: statusbarHeight,
    justifyContent: "space-between",
  },
  heading: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: "bold",
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    marginVertical: 12,
  },
  top: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
  bottom: {
    flex: 2,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: Height * 0.01,
    marginBottom: Height * 0.03,
    padding: 10,
  },
  button: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default GroupTwo;
