import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  ShadowPropTypesIOS,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from "react-native";

export default function App() {
  const [One, setOptionOne] = useState(1); //useState = hookvariabel
  const [Two, setOptionTwo] = useState(2); //useState = hookvariabel

  //Nedanför är menyn.
  var array = new Array();

  array[1] = "Sign up";
  array[2] = "Login";
  array[3] = "User profile";
  array[4] = "Homepage";
  array[0] = "Exit";

  //Nedanför väljer användaren om den tror att lag one eller lag two vinner.
  if (1 == 1) {
    console.log("You think that " + One + " team will win!!");
  } else {
    console.log("You think that " + Two + " team will win.");
  }

  return (
    <View>
      <View style={[styles.menu, { flexDirection: "row" }]}>
        <View style={styles.sign}>
          <Text>{array[1]}</Text>
        </View>
        <View style={styles.login}>
          <Text>{array[2]}</Text>
        </View>
        <View style={styles.userprofile}>
          <Text>{array[3]}</Text>
        </View>
        <View style={styles.homepage}>
          <Text>{array[4]}</Text>
        </View>
        <View style={styles.exit}>
          <Text>{array[0]}</Text>
        </View>
      </View>

      <View style={styles.landingpage}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../assets/icon.png")}
        />
        <View>
          <Text>Welcome to our Soccerpage!</Text>
        </View>
      </View>

      <View style={styles.betting}>
        <Text>
          Which team do you think will win? {One} or {Two}?
        </Text>
      </View>

      <View>
        <Button
          title="Välj lag"
          onPress={() => console.log("Ska du välja detta lag?")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 800,
    height: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  landingpage: {
    flex: 6,
    width: 800,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
    margin: "2rem",
  },

  menu: {
    flex: 1,
    width: 800,
    height: 30,
    margin: "2rem",
    backgroundColor: "green",
    textAlign: "center",
  },

  sign: {
    flex: 2,
    width: 30,
  },

  login: {
    flex: 2,
    width: 30,
  },

  userprofile: {
    flex: 2,
    width: 30,
  },

  homepage: {
    flex: 2,
    width: 30,
  },

  exit: {
    flex: 2,
    width: 30,
  },

  betting: {
    flex: 1,
    width: 800,
    textAlign: "center",
    padding: "2rem",
    margin: "2rem",
  },
});
