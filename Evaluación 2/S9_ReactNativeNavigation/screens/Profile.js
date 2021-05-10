import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.gameTitle}>Apex Legends</Text>
        </View>
        <View style={styles.profileBanner}> 
          <Image 
            style = {styles.profilePic}
            source = {require("../images/pfp-placeholder.jpg")}
          />
          <Text style={styles.username}>Username</Text>
        </View>
        <View style = {styles.playerStats}>
          <Text style = {styles.statsTitle}>Level:</Text>
          <Text style = {styles.statsData}>0</Text>
          <Text style = {styles.statsTitle}>Rank:</Text>
          <Text style = {styles.statsData}>Bronze 4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2a5d',
  },
  body: {
    marginTop: 75,
    marginLeft: 25,
    marginBottom: 25
  },
  profilePic: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: "black",
  },
  profileBanner: {
    flexDirection: 'row',
  },
  username: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff"
  },
  playerStats: {
    marginTop: 20,
  },
  statsTitle:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  statsData: {
    fontSize: 18,
    color: "#fff"
  },
  gameTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    borderBottomWidth: 2,
    borderColor: "#068592"
  }
});
