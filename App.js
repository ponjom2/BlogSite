import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Snake from './src/Snake';
import AddBlogText from './src/AddBlogText';
import ContactComponent from './src/ContactComponent';
import GiveYourToscans from './src/GiveYourToscans';
import UselessTextInput from './src/UselessTextInput';
import MyLittleComponent from './src/MyLittleComponent';
import LandingP from './src/LandingP';

export default function App() {
  return (
    <View style={main.container}>
      <View style={main.section}>
        <Snake />
        <AddBlogText />
        <GiveYourToscans />
        <UselessTextInput />
        <MyLittleComponent />
        <ContactComponent />
        <LandingP />
        <StatusBar style="auto" />
      </View >
    </View >
  );
}

const main = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#514F59",
  },

  section: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
  },
});