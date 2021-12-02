import React from "react";
import { StyleSheet, TextInput, Text, ImageBackground, View, Button, Alert } from "react-native";
import { useState } from "react";

//UselessTextInput - Oskar Hultman (Grupp 4)

const LogIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const image = { uri: "https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/18/22/18-22-101P/Sneaky-Cat-Laura-Graves-Poster.jpg" };

  return (
    <View style={main.container}>
      <View style={main.section}>
        <ImageBackground source={image} resizeMode="cover" style={main.image}>
          <Text style={main.topText}> Welcome! </Text>
          <Text style={main.topText1}> Join our Cat community </Text>
          <TextInput
            placeholder="Name:"
            style={main.nameBox}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Password:"
            style={main.nameBox}
            onChangeText={setPassword}
          />

          <TextInput
            placeholder="Email:"
            style={main.nameBox}
            onChangeText={setEmail}
          />

          <Button
            title="Submit" color="#d09e90"
            onPress={() => { alert("You have submitted to our site!"); console.log("Name: " + name + "\n" + "Password: " + password + "\n" + "Email: " + email) }}
          />
        </ImageBackground>
      </View>
    </View>


  );
};

const main = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  section: {
    width: "70%",
    height: "auto",
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
    borderRadius: 15,
  },

  nameBox: {
    width: 200,
    height: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 10,
    alignItems: "center",
  },

  topText: {
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    color: "#d09e90",
  },

  topText1: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },

  image: {
    width: "100%",
    height: "auto",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",

  },
});

export default LogIn;
