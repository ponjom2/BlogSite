import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";

const Snake = (props) => {
  const [switchValue, setSwitchValue] = useState(true);
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
    if (switchValue == true) {
      setViewWidth(500);
      setViewHeight(800);
    }
    if (switchValue == false) {
      setViewWidth(1000);
      setViewHeight(520);
    }
  };

  const [viewWidth, setViewWidth] = useState(1000);
  const [viewHeight, setViewHeight] = useState(520);

  return (
    <View>
      <View style={{ width: viewWidth, height: viewHeight }}>
        <TouchableOpacity style={styles.button} onPress={toggleSwitch}>
          <Text style={styles.buttonText}>Press here!</Text>
        </TouchableOpacity>
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
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cat-sitting-small-cardboard-box-260nw-1275055966.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cat-box-cardboard-kitty-kitten-260nw-1949027509.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/funny-cat-sleeping-cardboard-box-260nw-1588310083.jpg",
            }}
          />
        </ScrollView>
      </View>
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
  subContainer: {
    width: 1080,
    height: 520,
  },
  button: {
    backgroundColor: "cyan",
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "steelblue",
  },
  scrollView: {},
  image: {
    width: 500,
    height: 500,
  },
});

export default Snake;
