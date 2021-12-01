import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const AddBlogText = () => {
  const [oldText, setOldText] = useState("This is my first blog");
  const [newText, setNewText] = useState("");

  return (

    <View style={addBlog.container}>
      < Text style={addBlog.header} > My Post </Text >
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
  );
};

const addBlog = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 32,
    color: "#c84630",
  },

  section_A: {
    width: "70%",
    height: "80%",
    marginTop: 5,
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
    height: "auto",
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#514F59",
    backgroundColor: "#99E2FF",
  },
});

export default AddBlogText;