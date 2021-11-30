import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image, } from 'react-native';


export default function JackSparrow() {

  var TrexChicken = ""; 
  const Chicken = () => console.log(TrexChicken); 
  const ChickenT = () => console.log(TrexChicken);

  return (
    
    <View style={main.container}>
              <Image source={{uri:'https://www.wallstars.se/30297-large_default/fotboll-ar-livet-poster.jpg'}}
              style={{width: 140, height: 140}} />

        <Text style={{fontWeight:"bold", fontSize:25}}> Logain </Text>
        <View style={{width:"14%", height:"%10", backgroundColor: "#ABB2B9"}}>
     <TextInput placeholder=" Användernamn" onChangeText={ChickenT} />
     <TextInput placeholder=" Password" onChangeText={ChickenT} />
        </View>

      

        <View style={main.Login}>
        <Button title="Login" onPress={Chicken} />
        <StatusBar style="auto" />
        </View>
    </View>
    
  );
}
const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Login:{
    flex: 1,
  },
 
});


