import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, } from "react-native";
import { useState } from "react";

//LandingP - Michaela Beyer (Grupp 7)

const Subscribe = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image
            style={styles.banner}
            source={{ uri: "https://previews.123rf.com/images/artdee2554/artdee25541902/artdee2554190200014/118380316-cute-baby-cat-with-pink-background-hand-drawn-style-for-printing-banner-t-shirt.jpg" }}
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
        <View style={styles.button}>
          <Button
            title="Subscribe"
            color="#d09e90"
            onPress={() =>
              alert(
                "Thanks for subscribing " +
                name + "!" + "\n" +
                "The E-mail address you entered was " +
                email
              )
            }
          ></Button>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d09e90",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  section: {
    height: "auto",
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
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
    backgroundColor: "#FFF",
  },

  button: {
    borderWidth: 1,
  },

  banner: {
    height: 60,
    width: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default Subscribe;
