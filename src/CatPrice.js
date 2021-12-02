import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { useState } from "react";

//MyLittleComponent - Oskar Larsson (Grupp 2)

const CatPrice = () => {
  const [textColor, setTextColor] = useState("#d09e90");
  const setTextToWhite = () => setTextColor("black");

  const [valueBTC, setValueBTC] = useState(57000);
  const setToSEK = () => setValueBTC(valueBTC * 9 + " kr");

  const [valueETH, setValueETH] = useState(4333);
  const setETHToSEK = () => setValueETH(valueETH * 9 + " kr");

  const [valueLRC, setValueLRC] = useState(2.93);
  const setLRCToSEK = () => setValueLRC(valueLRC * 9 + " kr");

  const [valueSOL, setValueSOL] = useState(206);
  const setSOLToSEK = () => setValueSOL(valueSOL * 9 + " kr");

  const [valueADA, setValueADA] = useState(1.58);
  const setADAToSEK = () => setValueADA(valueADA * 9 + " kr");

  const [valueDOGE, setValueDOGE] = useState(0.212);
  const setDOGEToSEK = () => setValueDOGE(valueDOGE * 9 + " kr");

  const bundle = () => {
    setToSEK();
    setETHToSEK();
    setLRCToSEK();
    setSOLToSEK();
    setADAToSEK();
    setDOGEToSEK();
  };

  const image = {
    uri: "https://images.unsplash.com/photo-1585562125287-d748f3097a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <ImageBackground source={image} resizeMode="cover" style={{ width: "auto" }}>
          <View style={styles.top}>
            <Text style={styles.textShadow}>
              Cat Price
            </Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.insideMiddle}>
              <View style={styles.insideMiddleLeft}>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow2
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow3
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow4
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow5
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Meow6
                </Text>
              </View>
              <View style={styles.insideMiddleRight}>
                <Text style={styles.textStyle}>{valueBTC}</Text>
                <Text style={styles.textStyle}>{valueETH}</Text>
                <Text style={styles.textStyle}>{valueLRC}</Text>
                <Text style={styles.textStyle}>{valueSOL}</Text>
                <Text style={styles.textStyle}>{valueADA}</Text>
                <Text style={styles.textStyle}>{valueDOGE}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.button}>
              <Button
                title="Ändra färg på namnen" color="#d09e90"
                onPress={setTextToWhite}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button title="Ändra från DOLLAR till SEK" color="#d09e90" onPress={bundle}></Button>
            </View>
          </View>
        </ImageBackground>
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
  },

  top: {
    textAlign: "center",
  },

  insideMiddle: {
    width: "100%",
    padding: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#f6ece9",
    borderRadius: 15,
  },

  bottom: {
    padding: 5,
  },

  button: {
    marginBottom: 5,
    backgroundColor: "#fff",
  },

  textStyle: {
    fontWeight: "bold",
    fontSize: 28,
  },

  textShadow: {
    fontWeight: "bold",
    fontSize: 60,
    color: "#d09e90",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }

});

export default CatPrice;
