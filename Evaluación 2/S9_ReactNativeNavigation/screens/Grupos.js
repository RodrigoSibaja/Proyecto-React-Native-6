import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
import {Greetings} from '../Greetings';

export default function App() {
  // Text Inputs Variables.
  const [value, onChangeText] = useState('Escribe el nombre de tu grupo');
  const [list, onChangeList] = useState([]);
  
  // Add Button.
  const addButton = () => onChangeList( [...list, 'Grupo ' + parseInt(list.length+1)+ ': ' + value + '\n Integrantes: 0/5'] );

  // Delete Button.
  const deleteButton = () => { onChangeList( list.filter(function(ele) { 
    return ele != list[list.length - 1]; 
  }))};

  const ListPerson = () => list.map( person => {
    return(
      <Text style={stylesList.text} key={person} >{person} </Text>
    )});

  return (
    <>
      <Greetings someText={list.length}/>
      <View style={stylesList.container}>
        <ListPerson />
      </View>
      <View style={stylesTextInput.container}>
        <TextInput
          style={stylesTextInput.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={stylesFooter.container}>
        <Button 
          style={stylesFooter.buttonAdd}
          title="    Add    "
          color="#7c52a8"
          onPress={addButton}
        />
        <Button 
          style={stylesFooter.buttonDelete}
          title=" Delete "
          color="#7c52a8"
          onPress={deleteButton}
        />
      </View> 
    </>
  );
}

const stylesList = StyleSheet.create({
  container: {
    flex: 15,
    padding: 15,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#2e2a5d', 
  }, 
  text:{
    color: 'white',
    paddingTop: 10,
    borderBottomColor: "#5feaf8",
    borderBottomWidth: 1
  }
});

const stylesTextInput = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textInput:{
    height: 40,
    textAlign: 'center', 
    borderColor: '#156cdb', 
    borderWidth: 2,
  }
});

const stylesFooter = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15
  },
  buttonAdd: {
    flex:1,
  },
  buttonDelete: {
    flex:1,
  }
});
