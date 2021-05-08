import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LogInFields from "./components/logInFields";
import LogInHeader from "./components/logInHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <LogInHeader />
      <View style={styles.elements}>
        <Image 
          source={ require("./images/Untitled.png")}
          style={{ width: 349, height: 190, marginBottom: 20 }}
        />
        <LogInFields />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  elements: {
    justifyContent: 'center',
    padding: 40
  }
});
