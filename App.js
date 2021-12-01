import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CatImg from './src/CatImg';
import NewPost from './src/NewPost';
import LeaveComment from './src/LeaveComment';
import LogIn from './src/LogIn';
import CatPrice from './src/CatPrice';
import Contact from './src/Contact';
import Subscribe from './src/Subscribe';

export default function App() {
  return (
    <ScrollView>
      <View style={main.container}>
        <View style={main.section}>
          <CatImg />
          <NewPost />
          <LeaveComment />
          <LogIn />
          <CatPrice />
          <Contact />
          <Subscribe />
          <StatusBar style="auto" />
        </View >
      </View >
    </ScrollView>
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