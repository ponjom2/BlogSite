import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";

/*           Hybridutveckling Lab 3
    ToscaCreator: David "DVCZR" Zirath, IAD21  **/

const GiveYourToscans = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [show, setShow] = useState("none");
  const [comment, setComment] = useState(""); // 'comment' skickas ut => Sparas(+Obj)
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
    <View style={styles.center}>
      <Modal animationType="fade" visible={!modalVisible}>
        <View style={styles.center}>
          <View style={styles.popUp}>
            <Text style={styles.popUpText}>
              Hi there, leave your Tosca comment!
            </Text>
            <TextInput
              style={styles.popUpComment}
              placeholder="Give your Toscan's right here!"
              value={input}
              onChangeText={(value) => setInput(value)}
            ></TextInput>
            <Text
              style={{
                display: show,
                fontSize: 16,
                fontWeight: "600",
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              Your comment is now Toscafied
            </Text>
            <View style={styles.row}>
              <Button
                title="Post"
                style={styles.btnStyle}
                onPress={() => posTosca()}
              ></Button>
              <Button
                title="Close"
                style={styles.btnStyle}
                onPress={() => setModalVisible(!modalVisible)}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        style={styles.btnStyle}
        title="Give some Tosca's"
        onPress={() => closeTosca()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popUp: {
    margin: 20,
    backgroundColor: "aliceblue",
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  popUpComment: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
    textAlign: "left",
  },
});

export default GiveYourToscans;
