import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

export default function LogInFields(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (val) => {
        setUserName(val);
    }

    const passwordHandler = (val) =>{
        setPassword(val);
    }

    return(
        <View>
            <TextInput 
                style = {styles.inputField}
                placeholder="Username"
                onChangeText = {nameHandler}
            />
            <TextInput 
                style = {styles.inputField}
                secureTextEntry = {true}
                placeholder="Password"
                onChangeText = {passwordHandler}
            />
            <Button title = "Log In" color = "#2e2a5d"/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: "#2e2a5d",
    }
});