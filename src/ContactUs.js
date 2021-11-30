import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  View,
} from "react-native";

const ContactUs = () => {
  const [call, setCall] = useState("Call us");
  const [mail, setMail] = useState("Mail us");
  const [chat, setChat] = useState("Chat with us");

  const callFunction = () =>
    Alert.alert("Call Us", "0800 000 000", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Call", onPress: () => console.log("Ok Pressed") },
    ]);

  const mailFunction = () =>
    Alert.alert("mail Us", "mail@mail.com", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Mail", onPress: () => console.log("Mail Pressed") },
    ]);

  const chatFunction = () =>
    Alert.alert("Chat With Us", "You can chat with us", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Chatt", onPress: () => console.log("Chat Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contact us if you are wondering something
      </Text>
      <TouchableHighlight style={styles.touchable} onPress={callFunction}>
        <Text style={{ color: "white" }}>{call}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchable} onPress={mailFunction}>
        <Text style={{ color: "white" }}>{mail}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchable} onPress={chatFunction}>
        <Text style={{ color: "white" }}>{chat}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    padding: 40,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
  },
  touchable: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
});

export default ContactUs;
