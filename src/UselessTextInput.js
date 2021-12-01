import React from "react";
import { StyleSheet, TextInput, Text, ImageBackground, View, Button, Alert } from "react-native";


// Can you do like this Kristoffer? (onChangeText 1, 2, 3 etc) (its working but is it okay?) I call it "hemmabygge"

const UselessTextInput = () => {
  const [text1, onChangeText1] = React.useState("Name:");
  const [text2, onChangeText2] = React.useState("Email:");
  const [text3, onChangeText3] = React.useState("Password:");

  const image = { uri: "https://wallpaperaccess.com/full/1337873.jpg" };

  return (

    <View style={main.container}>
      <View style={main.section_E}>
        <ImageBackground source={image} resizeMode="cover" style={main.image}>
          <Text style={main.topText}> Welcome! </Text>
          <Text style={main.topText1}> Join our cat community </Text>
          <TextInput
            placeholder="Name:"
            style={main.nameBox}
            onChangeText={onChangeText1}
          // value={text1}
          />

          <TextInput
            placeholder="Email:"
            style={main.nameBox}
            onChangeText={onChangeText2}
          // value={text2}
          />

          <TextInput
            placeholder="Password:"
            style={main.nameBox}
            onChangeText={onChangeText3}
          // value={text3}
          />

          <Button
            title="Submit"
            onPress={() => Alert.alert('You have submitted to our site!')}
            onPress={() => console.log("Submit button was pressed")}
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

  section_E: {
    width: "70%",
    height: "auto",
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
  },

  nameBox: {
    width: 230,
    height: 40,
    backgroundColor: "#99E2FF",
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
    color: "#c84630",
  },

  topText1: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#c84630",
  },

  image: {
    width: "100%",
    height: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UselessTextInput;
