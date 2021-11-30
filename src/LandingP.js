import { StatusBar } from "expo-status-bar";

import React, { cloneElement } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from "react-native";

import { useState } from "react"; //

const LandingP = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.banner}
          source={require("../assets/flowers.png")}
        />
        <Text style={styles.title}>Subscribe to our Newsletter!</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text2) => setEmail(text2)}
        />
      </View>

      <View>
        <Button
          title="Subscribe"
          color="#c84630"
          onPress={() =>
            alert(
              "Thanks for subscribing " +
              name +
              "! The E-mail address you entered was " +
              email
            )
          }
        ></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#514F59",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "#000",
    backgroundColor: "#514F59",
  },
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    backgroundColor: "#514F59",
    color: "#E3E3E",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#514F59",
  },

  input: {
    backgroundColor: "#fff",
    width: "170px",
    height: "25px",
    borderRadius: 10,
    margin: 15,
  },

  banner: {
    width: "300px",
    height: "55px",
    backgroundColor: "#514F59",
  },
});

export default LandingP;
