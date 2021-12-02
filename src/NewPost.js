import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

//AddTextBlog - Ploo Jompong (Grupp 7)

const NewPost = () => {
  const [oldText, setOldText] = useState("This is my first post");
  const [newText, setNewText] = useState("");

  return (
    <View style={addBlog.container}>
      <Text style={addBlog.header}> My Post </Text >
      <View style={addBlog.section}>
        <Text>{oldText}</Text>
        <View style={addBlog.inputContainer}>
          <TextInput placeholder="Update Post"
            multiline="true"
            onChangeText={setNewText}
            style={addBlog.textInput}>
          </TextInput>
          <Button title="Submit" color="#d09e90" onPress={() => setOldText(newText)}></Button>
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
    color: "#d09e90",
    fontWeight: 600,
  },

  section: {
    width: "70%",
    height: "auto",
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
    borderRadius: 15,
    justifyContent: "space-between",
  },

  inputContainer: {
    width: "100%",
    height: "auto",
    justifyContent: "flex-end",
  },

  textInput: {
    width: "100%",
    height: 50,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#514F59",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

export default NewPost;