import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MoreInfo = () => {
  const [buttonPress, setButtonPress] = useState(false);
  const [buttonText, setButtonText] = useState("More information");

  function pressEvent() {
    setButtonPress(!buttonPress);
    if (buttonPress == true) {
      setButtonText("More information");
    } else {
      setButtonText("Close");
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.papa}>
        <Button title={buttonText} onPress={pressEvent} />
        {buttonPress ? (
          <View style={styles.miniboi}>
            <Text style={styles.boldbois}>
              Telefon:
              <Text style={styles.smolbois}> +46(0)70 123 1232</Text>
            </Text>
            <Text style={styles.boldbois}>
              Epost: <Text style={styles.smolbois}> abc @abc.se </Text>
            </Text>
            <Text style={styles.boldbois}>
              Visit us:
              <Text style={styles.smolbois}> Liljeholmen, Vårdhuset</Text>
            </Text>
            <Text style={styles.boldbois}>For more information</Text>
            <Text>Visit our webpage www.whereismypet.com</Text>
          </View>
        ) : null}
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  papa: {
    backgroundColor: "#fff",
  },

  miniboi: {
    margin: 5,
    padding: 10,
    backgroundColor: "#99E2FF",
  },

  boldbois: {
    fontWeight: "700",
  },

  smolbois: {
    fontWeight: "normal",
  },
});

export default MoreInfo;
