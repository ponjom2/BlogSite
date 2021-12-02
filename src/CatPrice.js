import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { useState } from "react";

//MyLittleComponent - Oskar Larsson (Grupp 2)

const CatPrice = () => {
  const [colorValue, setColorValue] = useState(false);
  const [textColor, setTextColor] = useState("#d09e90");
  const [currencyColor, setCurrencyColor] = useState("#000");
  const [currency, setCurrency] = useState("$");

  const [value, setValue] = useState(false);
  const [siamese, setSiamese] = useState(570);
  const [bengal, setBengal] = useState(433);
  const [kittyCat, setKittyCat] = useState(294);
  const [persian, setPersian] = useState(206);
  const [showShoe, setShowShoe] = useState(148);
  const [grayTabby, setGrayTabby] = useState(379);

  const setTextToBlack = () => {
    if (!colorValue) {
      setTextColor("#000");
      setCurrencyColor("#d09e90");
      setColorValue(true)
    } else if (colorValue) {
      setTextColor("#d09e90");
      setCurrencyColor("#000");
      setColorValue(false);
    }
  }

  const setToSek = () => {
    if (!value) {
      setCurrency("Kr");
      setSiamese(siamese * 9);
      setBengal(bengal * 9);
      setKittyCat(kittyCat * 9);
      setPersian(persian * 9);
      setShowShoe(showShoe * 9);
      setGrayTabby(grayTabby * 9);
      setValue(true);
    } else if (value) {
      setCurrency("$");
      setSiamese(570);
      setBengal(433);
      setKittyCat(294);
      setPersian(206);
      setShowShoe(148);
      setGrayTabby(379);
      setValue(false);
    }
  }

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
                <Text style={[styles.textStyle, { color: "gray", textAlign: "center" }]}>Breed</Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Siamese
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Bengal
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Kittycat
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Persian
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Snowshoe
                </Text>
                <Text style={[styles.textStyle, { color: textColor }]}>
                  Gray Tabby
                </Text>
              </View>
              <View style={styles.insideMiddleRight}>
                <Text style={[styles.textStyle, { color: "gray", textAlign: "center" }]}>{currency}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{siamese}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{bengal}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{kittyCat}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{persian}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{showShoe}</Text>
                <Text style={[styles.textStyle, { color: currencyColor }]}>{grayTabby}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.button}>
              <Button
                title="Ändra färg på namnen" color="#d09e90"
                onPress={setTextToBlack}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button title="Ändra från DOLLAR till SEK" color="#d09e90" onPress={setToSek}></Button>
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
