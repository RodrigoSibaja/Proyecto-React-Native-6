import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

import LogInHeader from "../components/logInHeader";

import firebase from "../database/firebase";

export default class LogInFields extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
        });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);

          Alert.alert(`Welcome ${this.state.email}!`);
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Home");
        })
        .catch((error) => {
          Alert.alert(error.message);
          this.setState({ errorMessage: error.message });
          this.setState({
            isLoading: false,
          });
        });
    }
  };
  render() {
    if (this.state.isLoading) {
        return (
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E" />
          </View>
        );
    }
    return(
        <View style={styles.container}>
          <LogInHeader />
          <View style={styles.elements}>

            <Image 
              source={ require("../images/Untitled.png")}
              style={{ width: 350, height: 190, marginBottom: 30, alignSelf: 'center' }}
            />

            <TextInput 
              style = {styles.inputField}
              placeholder="Username"
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, "email")}
            />
            <TextInput 
              style = {styles.inputField}
              secureTextEntry = {true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, "password")}
              maxLength={20}
            />
            <Button 
              title = "Log In" 
              color = "#2e2a5d"
              onPress={() => this.userLogin()}
            />
            <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              Don't have account? Click here to signup.
            </Text>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  elements: {
    justifyContent: 'center',
    padding: 50
    
  },
  loginText: {
    color: "#2e2a5d",
    marginTop: 25,
    textAlign: "center",
  },
  inputField: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: "#2e2a5d",
    width: "100%"
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  }
});
