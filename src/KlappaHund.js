import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

const KlappaHund = () => {
  const [klappaHund, setKlappaHund] = useState(true);

  return (
    <View style={styles.container}>
      {klappaHund ? (
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/736x/0f/24/28/0f2428f7a6d63e59ef2e9bef7575601b.jpg",
          }}
        />
      ) : null}

      <Button
        title="Klappa hund / Ta tillbaka klapp"
        onPress={() => setKlappaHund(!klappaHund)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  image: {
    width: 250,
    height: 250,
  },
});

export default KlappaHund;
