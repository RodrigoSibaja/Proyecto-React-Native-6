/* Header para la pantalla de Login */

import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LogInHeader(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Welcome to PlayGang</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#2e2a5d',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});