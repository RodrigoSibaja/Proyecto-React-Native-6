/* En esta pantalla tenemos el inicio de nuestra app donde el usuario puede navegar por todas las pantallas */


import React, { Component, useState } from "react";
import { Button, View, Text, TouchableHighlight,StyleSheet } from "react-native";
import firebase from "../../database/firebase";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      done: "",
    };
  }

  userLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#635bb0"}}>
        <Text style={{fontWeight:'bold',fontSize: 45, marginBottom: 50, marginTop: 15, color: "white"}}>Home Screen</Text>

        <TouchableHighlight 
          style ={styles.buttonStyles}>
        <Button
          title="Groups"
          onPress={() => this.props.navigation.navigate("Grupos")}/>
        </TouchableHighlight> 

        <TouchableHighlight 
          style ={styles.buttonStyles}>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate("Search")}/>
        </TouchableHighlight>

        <TouchableHighlight 
                style ={styles.buttonStyles}>
          <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}/>
            </TouchableHighlight>     

        <TouchableHighlight 
          style ={styles.buttonStyles}>
        <Button 
          title="Log Out"
          onPress={() => {this.userLogOut(), this.props.navigation.navigate("Login")}}/>
        </TouchableHighlight>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    justifyContent: "center",
    height: 100,
    width:200,
    borderRadius:10,
    marginLeft :50,
    marginRight:50,
    marginBottom:5,
  }
});

export default Home;
