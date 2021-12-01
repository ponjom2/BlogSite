import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, } from "react-native";

import { useState } from "react"; //

const LandingP = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

  return (
    <View style={styles.container}>
      <View style={styles.section_G}>
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

  section_G: {
    height: "auto",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    color: "#000",
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#E3E3E3",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#514F59",
  },

  input: {
    backgroundColor: "#e3e3e3",
    width: "200",
    height: "30",
    borderRadius: 5,
    margin: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  // banner: {
  //   width: "300",
  //   height: "55",
  //   backgroundColor: "#514F59",
  // },
});

export default LandingP;
