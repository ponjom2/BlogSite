import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddBlogText from './src/AddBlogText';
// import ContactComponent from './src/ContactComponent';
import ContactUs from './src/ContactUs';



export default function App() {
  return (
    <View>
      {/* <AddBlogText /> -- PLOO */}
      {/* <ContactComponent /> */}
      <ContactUs />
      <StatusBar style="auto" />
    </View>
  );
}
