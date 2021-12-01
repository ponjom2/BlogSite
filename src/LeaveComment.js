import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal, SafeAreaView } from "react-native";

/*           Hybridutveckling Lab 3
    ToscaCreator: David "DVCZR" Zirath, IAD21  **/

const LeaveComment = () => {
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
    <View style={styles.container}>
      <View style={styles.section}>
        <Modal animationType="fade" visible={!modalVisible}>
          <SafeAreaView>
            <View style={styles.popUp}>
              <Text style={styles.popUpText}>
                Hi there, leave your Meow comment!
              </Text>
              <TextInput
                style={styles.popUpComment}
                placeholder="Leave your comment right here!"
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
                Your comment is now Meowfied
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
          </SafeAreaView>
        </Modal>
        <Button
          style={styles.btnStyle}
          title="Leave some comment"
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
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  popUp: {
    margin: 20,
    backgroundColor: "lightblue",
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

export default LeaveComment;
