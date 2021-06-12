import React, { Component } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button,
    Alert,
    ActivityIndicator
} from 'react-native';

//simport firebase from "../database/firebase";

export default class LogInFields extends Component{
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
    
              console.log("User logged-in successfully!");
              this.setState({
                isLoading: false,
                email: "",
                password: "",
              });
              this.props.navigation.navigate("Dashboard");
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
            <View>
                <TextInput 
                    style = {styles.inputField}
                    placeholder="Username"
                />
                <TextInput 
                    style = {styles.inputField}
                    secureTextEntry = {true}
                    placeholder="Password"
                />
                <Button 
                    title = "Log In" 
                    color = "#2e2a5d"
                />
                <Text
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate("Blog")}
                >
                    ¿Aún no tienes cuenta? Regístrate aquí.
                </Text>
            </View>
        );
    }   
}



const styles = StyleSheet.create({
    inputField: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: "#2e2a5d",
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
    },
    loginText: {
        color: "#2e2a5d",
        marginTop: 25,
        textAlign: "center",
    }
});