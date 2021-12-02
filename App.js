import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
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
          <View style={main.header}>
            <Text style={main.boldText}>CATLOVERS.</Text>
            <Text style={main.byLine}>A Blog for all Cat Lovers.</Text>
          </View>
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
    backgroundColor: "#f6ece9",
  },

  section: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#f4d5d4",
    borderRadius: 15,
  },

  header: {
    textAlign: "center",
    marginVertical: 20,
  },

  boldText: {
    fontSize: 40,
    fontWeight: "900",
    color: "#d09e90",
  },

  byLine: {
    fontSize: 21,
    fontWeight: "400",
    color: "#d09e90",
  },
});