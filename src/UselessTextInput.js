import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, View, Button, Alert } from "react-native";


// Can you do like this Kristoffer? (onChangeText 1, 2, 3 etc) (its working but is it okay?) I call it "hemmabygge"

const UselessTextInput = () => {
  const [text1, onChangeText1] = React.useState("Name:");
  const [text2, onChangeText2] = React.useState("Email:");
  const [text3, onChangeText3] = React.useState("Password:");
  
 const image = {uri: "https://wallpaperaccess.com/full/1337873.jpg"};
  

  return (
   
    <View style={main.topTopContainer}>
   <SafeAreaView style={main.topContainer}>
    <ImageBackground source = {image} resizeMode = "cover" style = {main.image}> 
    <Text style={main.topText}> Welcome! </Text> 
    <Text style={main.topText1}> Join the community down below </Text>
      <TextInput
        style={main.nameBox}
        onChangeText={onChangeText1}
        value={text1}
      />

      <TextInput
        style={main.nameBox}
        onChangeText={onChangeText2}
        value={text2} />

<TextInput
        style={main.nameBox}
        onChangeText={onChangeText3}
        value={text3} />

<Button
        title="Submit"
        onPress={() => Alert.alert('You have submitted to our site!')}
        onPress={() => console.log ("Submit button was pressed")}
      />
     
     </ImageBackground>
    </SafeAreaView>
    </View>


  );
};

const main = StyleSheet.create({
  nameBox: {
      width: 230,
      height: 40,
      backgroundColor: '#FE872D',
      marginBottom: 10,
      padding: 10,
      fontSize: 14,
      fontWeight: 'bold',
      borderRadius: 10,
      alignItems: "center",
      
  },

  topContainer: {
    flex: 1,
      
  },
  topText: {
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center"
  },
  topText1:{
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30
  },
  image: {
    flex:1, 
    justifyContent: "center",
    alignItems: "center"
  },
  topTopContainer:{
    flex: 1,
    
  }
});

export default UselessTextInput;
    