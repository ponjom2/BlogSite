import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal, SafeAreaView } from "react-native";

//GiveYourToscans - David Zirath (Grupp 3)

const LeaveComment = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [show, setShow] = useState("none");
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");

  function posTosca() {
    setComment(input);
    setShow("flex");
  }

  function closeTosca() {
    setModalVisible(false);
    setInput("");
    setShow("none");
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Modal animationType="fade" visible={!modalVisible}>
          <SafeAreaView>
            <View style={styles.popUp}>
              <Text style={styles.popUpText}>
                Hi there, please leave a Meow if you too love Cats!
              </Text>
              <TextInput
                style={styles.popUpComment}
                placeholder="Leave your Meow right here!"
                value={input}
                onChangeText={(value) => setInput(value)}
              ></TextInput>
              <Text
                style={[styles.finalText, { display: show }]}>
                Thanks for your Cat Appreciation, the Cat Gods love you too!
              </Text>
              <View style={styles.row}>
                <Button
                  title="Post"
                  color="#d09e90"
                  onPress={() => posTosca()}
                ></Button>
                <Button
                  title="Close"
                  color="#d09e90"
                  onPress={() => setModalVisible(!modalVisible)}
                ></Button>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Button
          color="#d09e90"
          title="Say Meow"
          onPress={() => closeTosca()}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: "auto",
    marginTop: 30,
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
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  popUp: {
    margin: 20,
    backgroundColor: "#f6ece9",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOpacity: 0.5,
  },

  btnStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },

  popUpText: {
    color: "#d09e90",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  popUpComment: {
    fontSize: 16,
    height: 50,
    fontWeight: "normal",
    marginBottom: 20,
    textAlign: "left",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  finalText: {
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
    marginBottom: 15,
    color: "#d09e90",
  },
});

export default LeaveComment;
