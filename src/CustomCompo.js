import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const CustomCompo = () => {
  const [buttonPress, setButtonPress] = useState(false);
  const [buttonText, setButtonText] = useState("Contact Us");

  function pressEvent() {
    setButtonPress(!buttonPress);
    if (buttonPress == true) {
      setButtonText("Contact Us");
    } else {
      setButtonText("Close");
    }
  }

  return (
    <View style={compstyles.papa}>
      <Button title={buttonText} onPress={pressEvent} />
      {buttonPress ? (
        <View style={compstyles.yungboi}>
          <ScrollView style={compstyles.miniboi}>
            <Text style={compstyles.boldbois}>
              Telefon:
              <Text style={compstyles.smolbois}> +46(0)70 123 1232</Text>
            </Text>
            <Text style={compstyles.boldbois}>
              Epost:<Text style={compstyles.smolbois}> abc@abc.se </Text>
            </Text>
            <Text style={compstyles.boldbois}>
              Visit us:
              <Text style={compstyles.smolbois}> Liljeholmen, Vårdhuset</Text>
            </Text>
            <Text style={compstyles.boldbois}>For more information</Text>
            <Text>Visit our webpage www.whereismypet.com</Text>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

const compstyles = StyleSheet.create({
  papa: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "60%",
    height: "20%",
  },
  yungboi: {
    backgroundColor: "white",
    width: "99%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  miniboi: {
    backgroundColor: "#99E2FF",
    width: "90%",
    height: "100%",
    margin: 5,
    padding: 10,
  },
  boldbois: {
    fontWeight: "700",
  },
  smolbois: {
    fontWeight: "normal",
  },
});

export default CustomCompo;
