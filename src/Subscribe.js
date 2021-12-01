import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, } from "react-native";

import { useState } from "react"; //

const Subscribe = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          {/* <Image
            style={styles.banner}
            source={require("../assets/flowers.png")}
          /> */}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#514F59",
  },

  section: {
    height: "auto",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#e3e3e3",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    width: 130,
    height: 30,
    borderRadius: 5,
    margin: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: "#e3e3e3",
  },

  // banner: {
  //   width: "300",
  //   height: "55",
  //   backgroundColor: "#514F59",
  // },
});

export default Subscribe;
