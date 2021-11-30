import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddBlogText from './src/AddBlogText';
import ContactComponent from './src/ContactComponent';
import CustomCompo from './src/CustomCompo';
import GiveYourToscans from './src/GiveYourToscans';
import LandingP from './src/LandingP';
import MyLittleComponent from './src/MyLittleComponent';
import Snake from './src/Snake';
import UselessTextInput from './src/UselessTextInput';

export default function App() {
  return (
    <View style={main.container}>
      <AddBlogText />
      <ContactComponent />
      <CustomCompo />
      <GiveYourToscans />
      <LandingP />
      <MyLittleComponent />
      <Snake />
      <UselessTextInput />

      <StatusBar style="auto" />
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});