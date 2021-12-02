import React from "react";
import { StyleSheet, View, ScrollView, Image, Button, } from "react-native";
import { useState } from "react";

//Snake - Fredrik Kypta (Grupp 5)

const CatImg = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Button title="More cat pictures" color="#d09e90" onPress={toggleSwitch}> </Button>
        <ScrollView horizontal={switchValue}>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/grey-scottish-fold-cat-sitting-600w-1661727271.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cute-cat-cardboard-box-600w-538309816.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/ginger-cat-lies-box-on-600w-400678840.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cute-grey-tabby-cat-cardboard-260nw-1526963033.jpg",
            }}
          />
        </ScrollView>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
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
  },

  image: {
    width: 285,
    height: 285,
  },

});

export default CatImg;
