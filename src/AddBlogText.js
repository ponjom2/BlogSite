import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const AddBlogText = () => {
  const [oldText, setOldText] = useState("This is my first blog");
  const [newText, setNewText] = useState("");

  return (
    <View style={addBlog.container}>
      <View style={addBlog.section}>
        <Text style={addBlog.header}>My Post</Text>
        <View style={addBlog.section_A}>
          <Text>{oldText}</Text>
          <View style={addBlog.inputContainer}>
            <TextInput placeholder="Update Post"
              multiline="true"
              onChangeText={setNewText}
              style={addBlog.textInput}>
            </TextInput>
            <Button title="Submit" onPress={() => setOldText(newText)}></Button>
          </View>
        </View>
      </View>
    </View >
  );
};

const addBlog = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#514F59",
    alignItems: "center",
    justifyContent: "center"
  },

  section: {
    width: "90%",
    height: "80%",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
  },

  header: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    color: "#c84630",
  },

  section_A: {
    width: "70%",
    height: "80%",
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
    justifyContent: "space-between",
  },

  inputContainer: {
    width: "100%",
    height: "auto",
    justifyContent: "flex-end",
  },

  textInput: {
    width: "100%",
    height: "60%",
    marginTop: 8,
    backgroundColor: "lightblue",
  },
});

export default AddBlogText;