import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const RandomSecretComp = () => {
  const [inputID, setInputID] = useState("");
  const [IDsubmitted, setIDSubmitted] = useState("false");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Input your pets ID below: </Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter your pets ID here"
        value={inputID}
        onChangeText={(value) => setInputID(value)}
      />

      <Button title="Submit" onPress={() => setIDSubmitted("true")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: 600,
  },

  inputText: {
    width: 200,
    height: 35,
    backgroundColor: "lightgrey",
    margin: 20,
  },
});

export default RandomSecretComp;
