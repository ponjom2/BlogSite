import React, { useState } from "react";
import { Button, StyleSheet, Switch,
  Text, View, Modal, ScrollView,
  Platform} from "react-native";

const EmptyCustomComponent = (props) => {
  return (
    <View  style={styles.container}>
      <Text>Bank Account</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  row: {
    flexDirection: "row",
  },
});

export default EmptyCustomComponent;