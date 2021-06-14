/* Búsqueda de jugadores */
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import axios from 'axios';

var id, kills, rank, legend, image;

export default function App() {

  const [level, setLevel] = useState('');
  const [id, setId] = useState('');
  const [kills, setKills] = useState('');
  const [rank, setRank] = useState('');
  const [image, setImage] = useState('');
  const [legend, setLegend] = useState('');


  /* Recuperacion de datos con la API */
  const getProfileData = async(usuario) =>{
    let response = await axios.get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/xbl/${usuario}`,
      {
        headers: {
          "TRN-Api-Key": "c5890f7f-c905-4a25-b1fc-b2b9ec53d9b9"
        }
      }
    )
    setId(response.data.data.platformInfo.platformUserId)
    setLevel(response.data.data.segments[0].stats.level.value)  //console.log(response.data.data.segments[0].stats.level.value)
    setKills(response.data.data.segments[0].stats.kills.value)
    setRank(response.data.data.segments[0].stats.rankScore.metadata.rankName)
    setImage(response.data.data.segments[1].metadata.imageUrl)
    setLegend(response.data.data.metadata.activeLegendName)
  }

  const [perfil, setPerfil] = useState('');

  const profileHandler = (val) => {
    setPerfil(val);
  }

    return (
      <View style={styles.container}>
        <View>
        <TextInput
          style={stylesTextInput.textInput}
          onChangeText={profileHandler}
          placeholder = "Search a gamertag"
        />
      </View>
        <View style = {{flexDirection: 'row'}}>
        <View>
          <Text style = {styles.textData}> ID: {id} </Text>
          <Text style = {styles.textData}> Level: {level} </Text>
          <Text style = {styles.textData}> Legend: {legend} </Text>
          <Text style = {styles.textData}> Kills: {kills} </Text>
          <Text style = {styles.textData}> Rank: {rank} </Text>
        </View>
        <Image 
            style = {imagenStyle.border, {height: 400, width: 200, resizeMode: 'cover'}}
            source={{
              uri: image
             }}
          />
        </View>
        <View>
          <Button
            style={stylesTextInput.textInput}
            onPress={()=>{getProfileData(perfil)}}
            title="   Search   "
            color="#841584"
          />
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,

    backgroundColor: "#068592"
  },
  top: {
    flex: 0.3,
  },
  middle: {
    flex: 1,
  },
  bottom: {
    flex: 0.2,
  },
  textData: {
    fontSize: 18,
    color: "#fff"
  },
});

const imagenStyle = StyleSheet.create({
  border: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4
  }
})

const stylesTextInput = StyleSheet.create({
  padding: 30,
  container: {
    flex: 1,
    padding: 15,
  },
  textInput:{
    height: 40,
    textAlign: 'center', 
    borderColor: '#156cdb', 
    borderWidth: 2,
    color: 'white'
  }
});
