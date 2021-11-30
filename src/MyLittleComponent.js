import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  resizeMode,
} from "react-native";
import { useState } from "react";

const MyLittleComponent = () => {
  const [textColor, setTextColor] = useState("brown");
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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.top}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "5rem",
              color: "pink",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Crypto Side
          </Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.insideMiddle}>
            <View style={styles.insideMiddleLeft}>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Bitcoin
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Ethereum
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Loopring
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Solana
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Cardano
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Dogecoin
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
          <Text>Bottom</Text>
          <Button
            title="Ändra färg på namnen"
            onPress={setTextToWhite}
          ></Button>
          <Button title="Ändra från DOLLAR till SEK" onPress={bundle}></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "space-around",
    width: "100%",
    padding: "20px",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 2,
    padding: "10px",
    alignItems: "center",
  },
  insideMiddle: {
    width: "100%",
    flex: 1,
    padding: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "pink",
    borderRadius: 15,
  },
  insideMiddleLeft: {
    flex: 1,
  },
  insideMiddleRight: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    padding: "10px",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
});

export default MyLittleComponent;
