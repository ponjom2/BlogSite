import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddBlogText from './src/AddBlogText';

export default function App() {
  return (
    <View>
      <AddBlogText />
      <StatusBar style="auto" />
    </View>
  );
}
