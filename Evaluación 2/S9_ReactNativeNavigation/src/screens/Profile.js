/* Muestra información de la cuenta con la que se registró el usuario*/

import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import axios from 'axios';

var gamertagprofile = require("./Login.js")

var kills, rank, legend, image;

export default function App() {

  const [level, setLevel] = useState('');
  const [kills, setKills] = useState('');
  const [rank, setRank] = useState('');
  const [image, setImage] = useState('');
  const [legend, setLegend] = useState('');

  /* Recuperacion de datos con la API */
  const getProfileData = async() =>{

    let response = await axios.get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/xbl/${gamertagprofile.gamertag}`,
      {
        headers: {
          "TRN-Api-Key": "c5890f7f-c905-4a25-b1fc-b2b9ec53d9b9"
        }
      }
    )
    setLevel(response.data.data.segments[0].stats.level.value)  //console.log(response.data.data.segments[0].stats.level.value)
    setKills(response.data.data.segments[0].stats.kills.value)
    setRank(response.data.data.segments[0].stats.rankScore.metadata.rankName)
    setImage(response.data.data.platformInfo.avatarUrl)
    setLegend(response.data.data.metadata.activeLegendName)
  }

  getProfileData()

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.gameTitle}>Apex Legends</Text>
        </View>
        <View style={styles.profileBanner}> 
          <Image 
            style = {styles.profilePic}
            source={{
              uri: image
             }}
          />
          <Text style={styles.username}>{gamertagprofile.gamertag}</Text>
        </View>
        <View style = {styles.playerStats}>
          <Text style = {styles.statsTitle}>Level:</Text>
          <Text style = {styles.statsData}>{level}</Text>
          <Text style = {styles.statsTitle}>Rank:</Text>
          <Text style = {styles.statsData}>{rank}</Text>
          <Text style = {styles.statsTitle}>Kills:</Text>
          <Text style = {styles.statsData}>{kills}</Text>
          <Text style = {styles.statsTitle}>Legend:</Text>
          <Text style = {styles.statsData}>{legend}</Text>
        </View>
      </View>
      <View style = {styles.margin}>
        <Button
          onPress={()=>{getProfileData()}}
          title= "Refresh"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2a5d',
    height: '100%'
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
  },
  margin: {
    position: 'absolute',
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    left: 0,
    right: 0,
  }
});
